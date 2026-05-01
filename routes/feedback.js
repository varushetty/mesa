// routes/feedback.js
const express = require('express');
const router  = express.Router();
const db      = require('../db/pool');

// POST /api/feedback
router.post('/', async (req, res) => {
  const {
    sessionId, restaurantId, tableNumber,
    overallRating, wouldRecommend, comment,
    dishes, plan, moods, dietIdentity, groupSize,
  } = req.body;

  if (!tableNumber) {
    return res.status(400).json({ error: 'tableNumber is required' });
  }

  const rid      = restaurantId || 'suka-mallathalli';
  const validUUID = sessionId && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(sessionId);

  try {
    await db.query(
      `INSERT INTO feedback
         (restaurant_id, table_number, session_id,
          overall_rating, would_recommend, comment, dish_ratings)
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [
        rid,
        tableNumber,
        validUUID ? sessionId : null,
        overallRating  || null,
        wouldRecommend !== undefined ? wouldRecommend : null,
        comment || '',
        JSON.stringify(dishes || []),
      ]
    );

    // Update daily snapshot avg_rating
    await db.query(
      `UPDATE revenue_snapshots SET
         avg_rating = (
           SELECT ROUND(AVG(overall_rating)::numeric, 2)
           FROM feedback
           WHERE restaurant_id=$1
             AND DATE(created_at AT TIME ZONE 'Asia/Kolkata') = DATE(NOW() AT TIME ZONE 'Asia/Kolkata')
             AND overall_rating IS NOT NULL
         )
       WHERE restaurant_id=$1 AND snap_date = DATE(NOW() AT TIME ZONE 'Asia/Kolkata')`,
      [rid]
    ).catch(() => {}); // non-fatal

    res.status(201).json({ success: true });
  } catch (err) {
    console.error('POST /api/feedback error:', err.message);
    res.status(500).json({ error: 'Failed to save feedback' });
  }
});

// GET /api/feedback/recent
router.get('/recent', async (req, res) => {
  const restaurant = req.query.restaurant || 'suka-mallathalli';
  try {
    const result = await db.query(
      `SELECT id, table_number, overall_rating, would_recommend,
              comment, created_at
       FROM feedback WHERE restaurant_id=$1
       ORDER BY created_at DESC LIMIT 50`,
      [restaurant]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
