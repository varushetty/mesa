// server.js — SUKA / MESA Platform
const express  = require('express');
const cors     = require('cors');
const path     = require('path');
require('dotenv').config();

const db             = require('./db/pool');
const sessionsRoute  = require('./routes/sessions');
const ordersRoute    = require('./routes/orders');
const feedbackRoute  = require('./routes/feedback');
const analyticsRoute = require('./routes/analytics');
const adminRoute     = require('./routes/admin');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/api/sessions',  sessionsRoute);
app.use('/api/orders',    ordersRoute);
app.use('/api/feedback',  feedbackRoute);
app.use('/api/analytics', analyticsRoute);
app.use('/api/admin',     adminRoute);

app.get('/api/health', async (req, res) => {
  try {
    await db.query('SELECT 1');
    res.json({ status: 'ok', db: 'connected', ts: new Date().toISOString() });
  } catch (err) {
    res.status(500).json({ status: 'error', db: 'disconnected', error: err.message });
  }
});

app.get('/admin.html',     (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'admin.html')));
app.get('/kitchen.html',   (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'kitchen.html')));
app.get('/dashboard.html', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'dashboard.html')));
app.get('/bill.html',      (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'bill.html')));

app.use('/api', (req, res) => {
  res.status(404).json({ error: `API route not found: ${req.method} ${req.path}` });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('[Error]', err.message);
  if (req.path.startsWith('/api')) {
    return res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
  }
  next(err);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log('\n  ✦  SUKA / MESA Platform running');
  console.log('  →  Customer:   http://localhost:' + PORT + '?restaurant=suka-mallathalli&table=AA-01');
  console.log('  →  Admin:      http://localhost:' + PORT + '/admin.html');
  console.log('  →  Kitchen:    http://localhost:' + PORT + '/kitchen.html');
  console.log('  →  Dashboard:  http://localhost:' + PORT + '/dashboard.html\n');
});

module.exports = app;
