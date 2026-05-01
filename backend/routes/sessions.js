// routes/sessions.js
// Saves customer preference data after they complete the question flow
const express = require('express');
const router  = express.Router();
const db      = require('../db/pool');

// POST /api/sessions
// Called by the frontend after startFlow() — captures all preference answers
router.post('/', async (req, res) => {
  const {
    sessionKey, restaurantId, tableNumber,
    plan, moods, dietIdentity, groupSize,
    adventureCuisines, drinkStyles,
    orderSource, questionsDone,
  } = req.body;

  if (!tableNumber) {
    return res.status(400).json({ error: 'tableNumber is required' });
  }

  try {
    const result = await db.query(
      `INSERT INTO sessions
         (restaurant_id, table_number, session_key,
          plan, moods, diet_identity, group_size,
          adventure_cuisines, drink_styles,
          order_source, questions_done)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
       RETURNING id`,
      [
        restaurantId || 'suka-mallathalli',
        tableNumber,
        sessionKey || '',
        plan || null,
        moods || [],
        dietIdentity || 'all',
        groupSize || 'small',
        adventureCuisines || [],
        drinkStyles || [],
        orderSource || 'full',
        questionsDone || false,
      ]
    );
    res.status(201).json({ sessionId: result.rows[0].id });
  } catch (err) {
    console.error('POST /api/sessions error:', err.message);
    res.status(500).json({ error: 'Failed to save session' });
  }
});

// PATCH /api/sessions/:id
// Update session when flow state changes (questions completed, new round, etc.)
router.patch('/:id', async (req, res) => {
  const {
    questionsDone, orderSource, roundNumber,
    coursesOrdered, moods, dietIdentity,
  } = req.body;

  try {
    const setClauses = [];
    const params = [];
    let idx = 1;

    if (questionsDone !== undefined) { setClauses.push(`questions_done=$${idx++}`); params.push(questionsDone); }
    if (orderSource    !== undefined) { setClauses.push(`order_source=$${idx++}`);   params.push(orderSource); }
    if (roundNumber    !== undefined) { setClauses.push(`round_number=$${idx++}`);   params.push(roundNumber); }
    if (coursesOrdered !== undefined) { setClauses.push(`courses_ordered=$${idx++}`);params.push(coursesOrdered); }
    if (moods          !== undefined) { setClauses.push(`moods=$${idx++}`);          params.push(moods); }
    if (dietIdentity   !== undefined) { setClauses.push(`diet_identity=$${idx++}`);  params.push(dietIdentity); }

    if (!setClauses.length) return res.json({ success: true });

    setClauses.push(`updated_at=NOW()`);
    params.push(req.params.id);

    await db.query(
      `UPDATE sessions SET ${setClauses.join(',')} WHERE id=$${idx}`,
      params
    );
    res.json({ success: true });
  } catch (err) {
    console.error('PATCH /api/sessions error:', err.message);
    res.status(500).json({ error: 'Failed to update session' });
  }
});

// GET /api/sessions/:id
router.get('/:id', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM sessions WHERE id=$1', [req.params.id]);
    if (!result.rows.length) return res.status(404).json({ error: 'Not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
