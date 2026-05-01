// routes/analytics.js
const express = require('express');
const router  = express.Router();
const db      = require('../db/pool');

const RESTAURANT = 'suka-mallathalli';

// Build date WHERE clause
function buildDateClause(req, paramStartIdx, alias) {
  const col = alias ? `${alias}.created_at` : 'created_at';
  if (req.query.dateFrom && req.query.dateTo) {
    return {
      clause: `AND ${col} >= $${paramStartIdx} AND ${col} < ($${paramStartIdx+1}::date + 1)`,
      params: [req.query.dateFrom, req.query.dateTo],
    };
  }
  const days = parseInt(req.query.days) || 30;
  return {
    clause: `AND ${col} > NOW() - ($${paramStartIdx} || ' days')::interval`,
    params: [String(days)],
  };
}

// GET /api/analytics/summary
router.get('/summary', async (req, res) => {
  const rid = req.query.restaurant || RESTAURANT;
  const dc  = buildDateClause(req, 2);
  const p   = [rid, ...dc.params];
  try {
    const [ord, fb] = await Promise.all([
      db.query(
        `SELECT COUNT(*) AS total_orders,
                COALESCE(SUM(order_total), 0) AS total_revenue,
                COUNT(DISTINCT table_number) AS tables_served
         FROM orders WHERE restaurant_id=$1 AND status != 'cancelled' ${dc.clause}`, p),
      db.query(
        `SELECT COUNT(*) AS total_feedback,
                ROUND(AVG(overall_rating)::numeric, 2) AS avg_rating,
                COUNT(*) FILTER (WHERE would_recommend=true)  AS recommend_yes,
                COUNT(*) FILTER (WHERE would_recommend=false) AS recommend_no
         FROM feedback WHERE restaurant_id=$1 ${dc.clause}`, p),
    ]);
    res.json({ orders: ord.rows[0], feedback: fb.rows[0] });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET /api/analytics/orders
router.get('/orders', async (req, res) => {
  const rid   = req.query.restaurant || RESTAURANT;
  const limit = parseInt(req.query.limit) || 100;
  const dc    = buildDateClause(req, 2);
  const p     = [rid, ...dc.params, limit];
  const lIdx  = p.length;
  try {
    const result = await db.query(
      `SELECT id, table_number, order_total, items,
              course_type, round_number, moods, diet_identity,
              status, created_at
       FROM orders WHERE restaurant_id=$1 AND status != 'cancelled' ${dc.clause}
       ORDER BY created_at DESC LIMIT $${lIdx}`, p);
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET /api/analytics/feedback
router.get('/feedback', async (req, res) => {
  const rid   = req.query.restaurant || RESTAURANT;
  const limit = parseInt(req.query.limit) || 100;
  const dc    = buildDateClause(req, 2);
  const p     = [rid, ...dc.params, limit];
  const lIdx  = p.length;
  try {
    const result = await db.query(
      `SELECT id, table_number, overall_rating, would_recommend,
              comment, dish_ratings, created_at
       FROM feedback WHERE restaurant_id=$1 ${dc.clause}
       ORDER BY created_at DESC LIMIT $${lIdx}`, p);
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET /api/analytics/dishes
router.get('/dishes', async (req, res) => {
  const rid = req.query.restaurant || RESTAURANT;
  const dc  = buildDateClause(req, 2);
  const p   = [rid, ...dc.params];
  try {
    const result = await db.query(
      `SELECT d->>'itemId'  AS item_id,
              d->>'name'    AS name,
              COUNT(*)      AS times_ordered,
              COUNT(*) FILTER (WHERE (d->>'thumbs')='true')  AS thumbs_up,
              COUNT(*) FILTER (WHERE (d->>'thumbs')='false') AS thumbs_down,
              ROUND(
                COUNT(*) FILTER (WHERE (d->>'thumbs')='true')::numeric /
                NULLIF(COUNT(*) FILTER (WHERE d->>'thumbs' IS NOT NULL),0) * 100
              ) AS approval_pct,
              d->>'wasPicked' AS badge
       FROM feedback, jsonb_array_elements(dish_ratings) d
       WHERE restaurant_id=$1 ${dc.clause}
       GROUP BY 1,2,7
       ORDER BY times_ordered DESC`, p);
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET /api/analytics/moods
router.get('/moods', async (req, res) => {
  const rid = req.query.restaurant || RESTAURANT;
  const dc  = buildDateClause(req, 2, 'f');
  const p   = [rid, ...dc.params];
  try {
    const result = await db.query(
      `SELECT unnest(o.moods) AS mood,
              COUNT(DISTINCT o.id) AS sessions,
              ROUND(AVG(f.overall_rating)::numeric, 2) AS avg_rating
       FROM orders o
       LEFT JOIN feedback f ON f.session_id = o.session_id
       WHERE o.restaurant_id=$1 AND array_length(o.moods,1) > 0 ${dc.clause.replace('f.created_at','o.created_at')}
       GROUP BY 1
       ORDER BY sessions DESC`, p);
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET /api/analytics/calendar?days=90
// Returns daily revenue for the calendar heatmap view
router.get('/calendar', async (req, res) => {
  const rid  = req.query.restaurant || RESTAURANT;
  const days = parseInt(req.query.days) || 90;
  try {
    // Always compute from orders (reliable, works even without revenue_snapshots)
    // Also upsert into revenue_snapshots so future requests are faster
    const result = await db.query(
      `SELECT DATE(created_at AT TIME ZONE 'Asia/Kolkata') AS date,
              COALESCE(SUM(order_total), 0) AS revenue,
              COUNT(*) AS order_count
       FROM orders
       WHERE restaurant_id=$1
         AND status != 'cancelled'
         AND created_at > NOW() - ($2 || ' days')::interval
       GROUP BY 1
       ORDER BY 1 ASC`,
      [rid, String(days)]
    );

    // Back-fill revenue_snapshots in background (non-blocking)
    if (result.rows.length > 0) {
      db.query(
        `INSERT INTO revenue_snapshots (restaurant_id, snap_date, total_revenue, order_count)
         SELECT $1, date::date, revenue::integer, order_count::integer
         FROM json_to_recordset($2::json) AS x(date text, revenue numeric, order_count bigint)
         ON CONFLICT (restaurant_id, snap_date)
         DO UPDATE SET total_revenue=EXCLUDED.total_revenue, order_count=EXCLUDED.order_count`,
        [rid, JSON.stringify(result.rows)]
      ).catch(() => {}); // non-fatal
    }

    res.json(result.rows);
  } catch (err) {
    console.error('/api/analytics/calendar error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/analytics/calendar/:date — detail for a specific date
router.get('/calendar/:date', async (req, res) => {
  const rid  = req.query.restaurant || RESTAURANT;
  const date = req.params.date; // YYYY-MM-DD
  try {
    const [snap, orders, topDishes] = await Promise.all([
      db.query(
        `SELECT * FROM revenue_snapshots WHERE restaurant_id=$1 AND snap_date=$2`,
        [rid, date]
      ),
      db.query(
        `SELECT id, table_number, order_total, course_type, moods,
                items, created_at
         FROM orders
         WHERE restaurant_id=$1
           AND DATE(created_at AT TIME ZONE 'Asia/Kolkata') = $2::date
           AND status != 'cancelled'
         ORDER BY created_at ASC`,
        [rid, date]
      ),
      db.query(
        `SELECT item->>'name' AS name,
                SUM((item->>'qty')::int) AS qty_ordered
         FROM orders, jsonb_array_elements(items) item
         WHERE restaurant_id=$1
           AND DATE(created_at AT TIME ZONE 'Asia/Kolkata') = $2::date
           AND status != 'cancelled'
         GROUP BY 1
         ORDER BY qty_ordered DESC
         LIMIT 5`,
        [rid, date]
      ),
    ]);

    const summary = snap.rows[0] || {
      snap_date:     date,
      total_revenue: orders.rows.reduce((s, o) => s + (o.order_total || 0), 0),
      order_count:   orders.rows.length,
      avg_rating:    null,
      notes:         '',
    };

    res.json({
      date,
      summary,
      orders:    orders.rows,
      topDishes: topDishes.rows,
    });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET /api/analytics/flow
// Shows how customers move through the ordering flow (for owner insights)
router.get('/flow', async (req, res) => {
  const rid = req.query.restaurant || RESTAURANT;
  const dc  = buildDateClause(req, 2);
  const p   = [rid, ...dc.params];
  try {
    const result = await db.query(
      `SELECT
         order_source,
         course_type,
         COUNT(*) AS count,
         ROUND(AVG(order_total)) AS avg_total
       FROM orders
       WHERE restaurant_id=$1 AND status != 'cancelled' ${dc.clause}
       GROUP BY 1, 2
       ORDER BY count DESC`, p);
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
