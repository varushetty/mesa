// routes/admin.js
const express = require('express');
const router  = express.Router();
const db      = require('../db/pool');

// ── Auth middleware ──────────────────────────────────────────────
async function requireAdmin(req, res, next) {
  const rid = req.headers['x-restaurant-id'] || req.query.restaurant_id || 'suka-mallathalli';
  const pin = req.headers['x-admin-pin']     || req.query.pin;
  if (!pin) return res.status(401).json({ error: 'PIN required' });
  try {
    const r = await db.query(
      'SELECT id, name, role FROM admin_users WHERE restaurant_id=$1 AND pin=$2 AND is_active=true',
      [rid, pin]
    );
    if (!r.rows.length) return res.status(403).json({ error: 'Invalid PIN' });
    req.admin        = r.rows[0];
    req.restaurantId = rid;
    next();
  } catch (err) { res.status(500).json({ error: err.message }); }
}

// ── POST /api/admin/login ─────────────────────────────────────────
router.post('/login', async (req, res) => {
  const { restaurantId, pin } = req.body;
  if (!pin) return res.status(400).json({ error: 'PIN required' });
  try {
    const r = await db.query(
      'SELECT id, name, role FROM admin_users WHERE restaurant_id=$1 AND pin=$2 AND is_active=true',
      [restaurantId || 'suka-mallathalli', pin]
    );
    if (!r.rows.length) return res.status(403).json({ error: 'Invalid PIN' });
    res.json({ success: true, user: r.rows[0] });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── GET /api/admin/tables ─────────────────────────────────────────
router.get('/tables', requireAdmin, async (req, res) => {
  try {
    const r = await db.query(
      `SELECT rt.table_number, rt.section, rt.capacity,
              o.id AS order_id, o.status, o.order_total, o.items,
              o.created_at
       FROM restaurant_tables rt
       LEFT JOIN LATERAL (
         SELECT id, status, order_total, items, created_at
         FROM orders
         WHERE restaurant_id=$1 AND table_number=rt.table_number
           AND status NOT IN ('closed','cancelled')
         ORDER BY created_at DESC LIMIT 1
       ) o ON true
       WHERE rt.restaurant_id=$1 AND rt.is_active=true
       ORDER BY rt.table_number`,
      [req.restaurantId]
    );
    res.json(r.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── GET /api/admin/orders ─────────────────────────────────────────
router.get('/orders', requireAdmin, async (req, res) => {
  const status = req.query.status;
  try {
    // Select only columns that exist in all schema versions
    // course_type and round_number added in migration_v3.sql
    let q = `SELECT id, table_number, status, items, order_total,
                    payment_method, created_at, billed_at, closed_at
             FROM orders WHERE restaurant_id=$1`;
    const params = [req.restaurantId];
    if (status) { q += ` AND status=$2`; params.push(status); }
    q += ` ORDER BY created_at DESC LIMIT 200`;
    const r = await db.query(q, params);
    res.json(r.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── PATCH /api/admin/orders/:id/status ───────────────────────────
router.patch('/orders/:id/status', requireAdmin, async (req, res) => {
  const { status, paymentMethod } = req.body;
  const allowed = ['new','preparing','served','bill_requested','closed'];
  if (!allowed.includes(status)) return res.status(400).json({ error: 'Invalid status' });
  try {
    let q      = `UPDATE orders SET status=$1`;
    const params = [status, req.params.id, req.restaurantId];
    if (status === 'bill_requested') q += `, billed_at=NOW()`;
    if (status === 'closed') {
      q += `, closed_at=NOW()`;
      if (paymentMethod) { q += `, payment_method=$4`; params.push(paymentMethod); }
    }
    q += ` WHERE id=$2 AND restaurant_id=$3`;
    await db.query(q, params);
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── DELETE /api/admin/orders/:id — cancel ────────────────────────
router.delete('/orders/:id', requireAdmin, async (req, res) => {
  try {
    await db.query(
      `UPDATE orders SET status='cancelled' WHERE id=$1 AND restaurant_id=$2`,
      [req.params.id, req.restaurantId]
    );
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── GET /api/admin/bill/:tableNumber ─────────────────────────────
router.get('/bill/:tableNumber', requireAdmin, async (req, res) => {
  try {
    const r = await db.query(
      `SELECT id, items, order_total, created_at, status
       FROM orders
       WHERE restaurant_id=$1 AND table_number=$2
         AND (status IN ('new','preparing','served','bill_requested')
              OR (status='closed' AND closed_at > NOW() - INTERVAL '30 minutes'))
       ORDER BY created_at ASC`,
      [req.restaurantId, req.params.tableNumber]
    );

    if (!r.rows.length) return res.json({ orders: [], combined: [], subtotal: 0, orderIds: [] });

    const combined = {};
    let total = 0;
    r.rows.forEach(order => {
      (order.items || []).forEach(item => {
        const key = item.id || item.itemId || item.name;
        if (combined[key]) {
          combined[key].qty    += item.qty;
          combined[key].amount += item.price * item.qty;
        } else {
          combined[key] = {
            name:   item.name,
            price:  item.price,
            qty:    item.qty,
            amount: item.price * item.qty,
            diet:   item.diet,
          };
        }
        total += item.price * item.qty;
      });
    });

    // Pull restaurant tax settings
    const taxR = await db.query(
      `SELECT tax_cgst, tax_sgst, service_charge, gstin, fssai, address, phone, name
       FROM restaurants WHERE id=$1`, [req.restaurantId]
    );
    const tax = taxR.rows[0] || {};

    res.json({
      tableNumber: req.params.tableNumber,
      orderIds:    r.rows.map(o => o.id),
      orders:      r.rows,
      combined:    Object.values(combined),
      subtotal:    total,
      tax_cgst:    parseFloat(tax.tax_cgst) || 2.5,
      tax_sgst:    parseFloat(tax.tax_sgst) || 2.5,
      service_charge: parseFloat(tax.service_charge) || 0,
      restaurant:  tax,
    });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── POST /api/admin/bill/:tableNumber/close ───────────────────────
router.post('/bill/:tableNumber/close', requireAdmin, async (req, res) => {
  const { paymentMethod, orderIds } = req.body;
  try {
    if (orderIds && orderIds.length) {
      await db.query(
        `UPDATE orders SET status='closed', payment_method=$1, closed_at=NOW()
         WHERE id=ANY($2::uuid[]) AND restaurant_id=$3`,
        [paymentMethod || 'cash', orderIds, req.restaurantId]
      );
    }
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── GET /api/admin/sold-out ───────────────────────────────────────
router.get('/sold-out', async (req, res) => {
  const rid = req.query.restaurant_id || 'suka-mallathalli';
  try {
    const r = await db.query(
      'SELECT item_id, item_name FROM sold_out WHERE restaurant_id=$1 ORDER BY marked_at DESC',
      [rid]
    );
    res.json(r.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── POST /api/admin/sold-out ──────────────────────────────────────
router.post('/sold-out', requireAdmin, async (req, res) => {
  const { itemId, itemName } = req.body;
  if (!itemId) return res.status(400).json({ error: 'itemId required' });
  try {
    await db.query(
      `INSERT INTO sold_out (restaurant_id, item_id, item_name, marked_by)
       VALUES ($1,$2,$3,$4)
       ON CONFLICT (restaurant_id, item_id) DO NOTHING`,
      [req.restaurantId, itemId, itemName || '', req.admin.name]
    );
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── DELETE /api/admin/sold-out/:itemId ───────────────────────────
router.delete('/sold-out/:itemId', requireAdmin, async (req, res) => {
  try {
    await db.query(
      'DELETE FROM sold_out WHERE restaurant_id=$1 AND item_id=$2',
      [req.restaurantId, decodeURIComponent(req.params.itemId)]
    );
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── GET /api/admin/popular-picks ─────────────────────────────────
router.get('/popular-picks', async (req, res) => {
  const rid = req.query.restaurant_id || 'suka-mallathalli';
  try {
    const r = await db.query(
      `SELECT course, position, item_id, item_name, badge
       FROM popular_picks WHERE restaurant_id=$1
       ORDER BY course, position`, [rid]
    );
    res.json(r.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── PUT /api/admin/popular-picks ─────────────────────────────────
router.put('/popular-picks', requireAdmin, async (req, res) => {
  const { picks } = req.body;
  if (!picks || !picks.length) return res.status(400).json({ error: 'picks required' });
  try {
    for (const p of picks) {
      await db.query(
        `INSERT INTO popular_picks
           (restaurant_id, course, position, item_id, item_name, badge, updated_at)
         VALUES ($1,$2,$3,$4,$5,$6,NOW())
         ON CONFLICT (restaurant_id, course, position)
         DO UPDATE SET item_id=$4, item_name=$5, badge=$6, updated_at=NOW()`,
        [req.restaurantId, p.course, p.position, p.itemId, p.itemName, p.badge]
      );
    }
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── GET /api/admin/qr-codes ───────────────────────────────────────
router.get('/qr-codes', requireAdmin, async (req, res) => {
  const baseUrl = req.query.baseUrl || 'http://localhost:3000';
  try {
    const r = await db.query(
      `SELECT table_number, section
       FROM restaurant_tables
       WHERE restaurant_id=$1 AND is_active=true
       ORDER BY section, table_number`,
      [req.restaurantId]
    );
    const tables = r.rows.map(t => ({
      tableNumber: t.table_number,
      section:     t.section,
      url: `${baseUrl}?restaurant=${req.restaurantId}&table=${encodeURIComponent(t.table_number)}`,
    }));
    res.json(tables);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── POST /api/admin/tables ────────────────────────────────────────
router.post('/tables', requireAdmin, async (req, res) => {
  const { tableNumber, section, capacity } = req.body;
  if (!tableNumber) return res.status(400).json({ error: 'tableNumber required' });
  try {
    await db.query(
      `INSERT INTO restaurant_tables (restaurant_id, table_number, section, capacity)
       VALUES ($1,$2,$3,$4)
       ON CONFLICT (restaurant_id, table_number) DO NOTHING`,
      [req.restaurantId, tableNumber, section || 'Main Floor', capacity || 4]
    );
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── DELETE /api/admin/tables/:tableNumber ────────────────────────
router.delete('/tables/:tableNumber', requireAdmin, async (req, res) => {
  try {
    await db.query(
      `UPDATE restaurant_tables SET is_active=false
       WHERE restaurant_id=$1 AND table_number=$2`,
      [req.restaurantId, decodeURIComponent(req.params.tableNumber)]
    );
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── GET /api/admin/menu-items ─────────────────────────────────────
router.get('/menu-items', async (req, res) => {
  const rid = req.query.restaurant_id || 'suka-mallathalli';
  try {
    const r = await db.query(
      `SELECT id, name, price, diet, category, description, is_active, created_at
       FROM menu_items WHERE restaurant_id=$1 ORDER BY created_at DESC`,
      [rid]
    );
    res.json(r.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── POST /api/admin/menu-items ────────────────────────────────────
router.post('/menu-items', requireAdmin, async (req, res) => {
  const { name, price, diet, category, description } = req.body;
  if (!name || !price) return res.status(400).json({ error: 'name and price required' });
  try {
    const r = await db.query(
      `INSERT INTO menu_items (restaurant_id, name, price, diet, category, description)
       VALUES ($1,$2,$3,$4,$5,$6) RETURNING id`,
      [req.restaurantId, name, price, diet||'nonveg', category||'starters', description||'']
    );
    res.status(201).json({ id: r.rows[0].id });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── PATCH /api/admin/menu-items/:id ──────────────────────────────
router.patch('/menu-items/:id', requireAdmin, async (req, res) => {
  const { name, price, diet, category, description, is_active } = req.body;
  try {
    await db.query(
      `UPDATE menu_items SET
         name=COALESCE($1,name), price=COALESCE($2,price),
         diet=COALESCE($3,diet), category=COALESCE($4,category),
         description=COALESCE($5,description),
         is_active=COALESCE($6,is_active)
       WHERE id=$7 AND restaurant_id=$8`,
      [name, price, diet, category, description, is_active, req.params.id, req.restaurantId]
    );
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── DELETE /api/admin/menu-items/:id ─────────────────────────────
router.delete('/menu-items/:id', requireAdmin, async (req, res) => {
  try {
    await db.query(
      `UPDATE menu_items SET is_active=false WHERE id=$1 AND restaurant_id=$2`,
      [req.params.id, req.restaurantId]
    );
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── GET /api/admin/restaurant-settings ───────────────────────────
router.get('/restaurant-settings', requireAdmin, async (req, res) => {
  try {
    const r = await db.query('SELECT * FROM restaurants WHERE id=$1', [req.restaurantId]);
    res.json(r.rows[0] || {});
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── PATCH /api/admin/restaurant-settings ─────────────────────────
router.patch('/restaurant-settings', requireAdmin, async (req, res) => {
  const { name, tagline, location, gstin, fssai, address, phone,
          tax_cgst, tax_sgst, service_charge } = req.body;
  try {
    await db.query(
      `UPDATE restaurants SET
         name=COALESCE($1,name), tagline=COALESCE($2,tagline),
         location=COALESCE($3,location), gstin=COALESCE($4,gstin),
         fssai=COALESCE($5,fssai), address=COALESCE($6,address),
         phone=COALESCE($7,phone), tax_cgst=COALESCE($8,tax_cgst),
         tax_sgst=COALESCE($9,tax_sgst), service_charge=COALESCE($10,service_charge)
       WHERE id=$11`,
      [name, tagline, location, gstin, fssai, address, phone,
       tax_cgst, tax_sgst, service_charge, req.restaurantId]
    );
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ── GET /api/admin/revenue-snapshot/refresh ──────────────────────
// Manually refresh all daily snapshots for the past N days
router.post('/revenue-snapshot/refresh', requireAdmin, async (req, res) => {
  const days = parseInt(req.body.days) || 90;
  try {
    await db.query(
      `INSERT INTO revenue_snapshots (restaurant_id, snap_date, total_revenue, order_count)
       SELECT $1,
              DATE(created_at AT TIME ZONE 'Asia/Kolkata') AS d,
              SUM(order_total),
              COUNT(*)
       FROM orders
       WHERE restaurant_id=$1
         AND created_at > NOW() - ($2 || ' days')::interval
         AND status != 'cancelled'
       GROUP BY d
       ON CONFLICT (restaurant_id, snap_date)
       DO UPDATE SET
         total_revenue = EXCLUDED.total_revenue,
         order_count   = EXCLUDED.order_count`,
      [req.restaurantId, String(days)]
    );
    res.json({ success: true, message: `Refreshed ${days} days of snapshots` });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
