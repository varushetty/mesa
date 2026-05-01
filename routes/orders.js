// routes/orders.js
const express = require('express');
const router  = express.Router();
const db      = require('../db/pool');

// ── Auto-migration: add missing columns on first request ─────────
// Runs once per server start — no manual SQL needed
let _columnsEnsured = false;
async function ensureOrderColumns() {
  if (_columnsEnsured) return;
  try {
    await db.query(`
      ALTER TABLE orders
        ADD COLUMN IF NOT EXISTS round_number  INTEGER DEFAULT 1,
        ADD COLUMN IF NOT EXISTS course_type   TEXT    DEFAULT '',
        ADD COLUMN IF NOT EXISTS order_source  TEXT    DEFAULT 'full',
        ADD COLUMN IF NOT EXISTS moods         TEXT[]  DEFAULT '{}',
        ADD COLUMN IF NOT EXISTS diet_identity TEXT    DEFAULT 'all',
        ADD COLUMN IF NOT EXISTS group_size    TEXT    DEFAULT 'small'
    `);
    await db.query(`
      ALTER TABLE sessions
        ADD COLUMN IF NOT EXISTS drink_styles    TEXT[]      DEFAULT '{}',
        ADD COLUMN IF NOT EXISTS order_source    TEXT        DEFAULT 'full',
        ADD COLUMN IF NOT EXISTS questions_done  BOOLEAN     DEFAULT false,
        ADD COLUMN IF NOT EXISTS round_number    INTEGER     DEFAULT 0,
        ADD COLUMN IF NOT EXISTS courses_ordered TEXT[]      DEFAULT '{}',
        ADD COLUMN IF NOT EXISTS updated_at      TIMESTAMPTZ DEFAULT NOW()
    `);
    await db.query(`
      ALTER TABLE restaurants
        ADD COLUMN IF NOT EXISTS gstin           TEXT         DEFAULT '',
        ADD COLUMN IF NOT EXISTS fssai           TEXT         DEFAULT '',
        ADD COLUMN IF NOT EXISTS address         TEXT         DEFAULT '',
        ADD COLUMN IF NOT EXISTS phone           TEXT         DEFAULT '',
        ADD COLUMN IF NOT EXISTS tax_cgst        NUMERIC(4,2) DEFAULT 2.5,
        ADD COLUMN IF NOT EXISTS tax_sgst        NUMERIC(4,2) DEFAULT 2.5,
        ADD COLUMN IF NOT EXISTS service_charge  NUMERIC(4,2) DEFAULT 0
    `);
    await db.query(`
      CREATE TABLE IF NOT EXISTS revenue_snapshots (
        id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        restaurant_id TEXT NOT NULL,
        snap_date     DATE NOT NULL,
        total_revenue INTEGER NOT NULL DEFAULT 0,
        order_count   INTEGER NOT NULL DEFAULT 0,
        avg_rating    NUMERIC(3,2),
        notes         TEXT DEFAULT '',
        created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        UNIQUE(restaurant_id, snap_date)
      )
    `);
    _columnsEnsured = true;
    console.log('[db] Schema up to date ✓');
  } catch (err) {
    console.error('[db] Auto-migration error:', err.message);
    _columnsEnsured = true; // don't retry on every request
  }
}

// ── Helper: detect course type from items ─────────────────────────
// Uses item IDs to classify what kind of order this is
const DRINK_PREFIXES = ['br','ws','ck','mk','ms','sd','hd','bb'];
const DESSERT_IDS    = new Set(['des1','des2','des3','des4','des5','des6']);
const MAINS_CATS     = new Set(['pasta','burger','pizza','pita','seafood','thai',
                                 'noodles','fried_rice','global_mains','indian_gravy',
                                 'rice_breads','biryanis']);

function detectCourseType(items) {
  let hasDrinks = false, hasStarters = false, hasMains = false, hasDesserts = false;
  (items || []).forEach(item => {
    const id = item.id || item.itemId || '';
    if (DESSERT_IDS.has(id)) { hasDesserts = true; return; }
    if (DRINK_PREFIXES.some(p => id.startsWith(p))) { hasDrinks = true; return; }
    // Rough mains detection by id prefix patterns
    if (['bir','ig','gm','noo','fr','pas','piz','bur','pit','th','sf'].some(p => id.startsWith(p))) {
      hasMains = true; return;
    }
    hasStarters = true;
  });
  const types = [hasDrinks&&'drinks', hasStarters&&'starters',
                  hasMains&&'mains', hasDesserts&&'desserts'].filter(Boolean);
  if (types.length === 0) return 'mixed';
  if (types.length === 1) return types[0];
  return 'mixed';
}

// ── POST /api/orders ─────────────────────────────────────────────
// Main endpoint — called by customer app on Confirm Order
router.post('/', async (req, res) => {
  const {
    restaurantId, tableNumber, items, orderTotal,
    sessionId, roundNumber, orderSource,
    moods, dietIdentity, groupSize, plan,
  } = req.body;

  if (!tableNumber || !items || !items.length) {
    return res.status(400).json({ error: 'tableNumber and items are required' });
  }

  const rid         = restaurantId || 'suka-mallathalli';
  const courseType  = detectCourseType(items);
  const roundNum    = roundNumber || 1;

  try {
    // Validate sessionId is a proper UUID before using it
    const validUUID = sessionId && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(sessionId);

    // Ensure new columns exist before inserting (auto-migration — no manual SQL needed)
    await ensureOrderColumns();
    const result = await db.query(
      `INSERT INTO orders
         (restaurant_id, table_number, items, order_total, status,
          session_id, round_number, course_type, order_source,
          moods, diet_identity, group_size)
       VALUES ($1,$2,$3,$4,'new',$5,$6,$7,$8,$9,$10,$11)
       RETURNING id`,
      [
        rid, tableNumber,
        JSON.stringify(items),
        orderTotal || 0,
        validUUID ? sessionId : null,
        roundNum,
        courseType,
        orderSource || 'full',
        moods || [],
        dietIdentity || 'all',
        groupSize || 'small',
      ]
    );

    // If we have a valid session, update its round counter and courses
    if (validUUID) {
      await db.query(
        `UPDATE sessions SET
           round_number = GREATEST(round_number, $1),
           courses_ordered = array(
             SELECT DISTINCT unnest(courses_ordered || ARRAY[$2::text])
           ),
           updated_at = NOW()
         WHERE id = $3`,
        [roundNum, courseType, sessionId]
      ).catch(() => {}); // non-fatal
    }

    // Refresh daily revenue snapshot
    await refreshDailySnapshot(rid).catch(() => {});

    res.status(201).json({
      orderId:    result.rows[0].id,
      courseType: courseType,
    });
  } catch (err) {
    console.error('POST /api/orders error:', err.message);
    res.status(500).json({ error: 'Failed to save order' });
  }
});

// ── Refresh revenue snapshot for today ──────────────────────────
async function refreshDailySnapshot(restaurantId) {
  await db.query(
    `INSERT INTO revenue_snapshots (restaurant_id, snap_date, total_revenue, order_count)
     SELECT $1,
            DATE(NOW() AT TIME ZONE 'Asia/Kolkata'),
            COALESCE(SUM(order_total), 0),
            COUNT(*)
     FROM orders
     WHERE restaurant_id=$1
       AND DATE(created_at AT TIME ZONE 'Asia/Kolkata') = DATE(NOW() AT TIME ZONE 'Asia/Kolkata')
       AND status != 'cancelled'
     ON CONFLICT (restaurant_id, snap_date)
     DO UPDATE SET
       total_revenue = EXCLUDED.total_revenue,
       order_count   = EXCLUDED.order_count`,
    [restaurantId]
  );
}

// ── GET /api/orders/recent ───────────────────────────────────────
router.get('/recent', async (req, res) => {
  const restaurant = req.query.restaurant || 'suka-mallathalli';
  try {
    const result = await db.query(
      `SELECT id, table_number, order_total, items, status,
              course_type, round_number, created_at
       FROM orders WHERE restaurant_id=$1
       ORDER BY created_at DESC LIMIT 50`,
      [restaurant]
    );
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── GET /api/orders/table-status ────────────────────────────────
router.get('/table-status', async (req, res) => {
  const table      = req.query.table;
  const restaurant = req.query.restaurant || 'suka-mallathalli';
  if (!table) return res.json({ lastStatus: null });
  try {
    const r = await db.query(
      `SELECT status, closed_at, created_at
       FROM orders
       WHERE restaurant_id=$1 AND table_number=$2
       ORDER BY created_at DESC LIMIT 1`,
      [restaurant, table]
    );
    if (!r.rows.length) return res.json({ lastStatus: null });
    const row = r.rows[0];
    const closedMinutesAgo = row.closed_at
      ? Math.floor((Date.now() - new Date(row.closed_at)) / 60000)
      : null;
    res.json({ lastStatus: row.status, closedMinutesAgo });
  } catch (err) { res.json({ lastStatus: null }); }
});

// ── POST /api/orders/request-bill ─────────────────────────────────────────────
// Customer taps "Done" or "Request Bill" — sets table orders to bill_requested
// Admin sees the amber pulsing indicator on their table grid immediately
router.post('/request-bill', async (req, res) => {
  const { restaurantId, tableNumber } = req.body;
  if (!tableNumber) return res.status(400).json({ error: 'tableNumber required' });
  const rid = restaurantId || 'suka-mallathalli';
  try {
    const result = await db.query(
      `UPDATE orders SET status='bill_requested', billed_at=NOW()
       WHERE restaurant_id=$1 AND table_number=$2
         AND status IN ('new','preparing','served')
       RETURNING id`,
      [rid, tableNumber]
    );
    console.log('[bill-request] Table', tableNumber, '—', result.rowCount, 'orders flagged');
    res.json({ success: true, updated: result.rowCount });
  } catch (err) {
    console.error('POST /api/orders/request-bill error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
