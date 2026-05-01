# SUKA / MESA Restaurant Platform

## Folder structure

```
suka/
├── backend/                  ← Node.js + Express API
│   ├── .env                  ← YOUR DATABASE CONNECTION (create this)
│   ├── .env.example          ← Template — copy and fill in
│   ├── .gitignore
│   ├── package.json
│   ├── server.js             ← Entry point  →  node server.js
│   ├── db/
│   │   ├── pool.js           ← PostgreSQL connection
│   │   ├── schema.sql        ← Run once on a fresh database
│   │   └── migration_v3.sql  ← Run on an existing database
│   └── routes/
│       ├── admin.js          ← Tables, orders, sold-out, QR, menu
│       ├── analytics.js      ← Dashboard + calendar revenue data
│       ├── feedback.js       ← Post-meal ratings
│       ├── orders.js         ← Customer order placement
│       └── sessions.js       ← Preference tracking
│
└── frontend/                 ← Plain HTML/CSS/JS — no build step
    ├── index.html            ← Customer ordering app
    ├── admin.html            ← Owner / manager panel
    ├── kitchen.html          ← Kitchen display
    ├── dashboard.html        ← Revenue + analytics
    ├── bill.html             ← Bill generation
    └── shared-menu.js        ← Menu data shared across pages
```

---

## Step 1 — Create your .env file

The `.env` file goes **inside the `backend/` folder**.

```bash
cd backend
cp .env.example .env
```

Then open `backend/.env` and fill in your database URL:

```
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/suka
PORT=3000
```

**On Railway** — you do not need to write this manually.
Railway sets `DATABASE_URL` automatically when you add a PostgreSQL plugin.
Just add it in: Settings → Variables → `DATABASE_URL` (Railway provides the value).

---

## Step 2 — Set up the database

### Fresh database (first time)
```bash
psql -U postgres -d suka -f backend/db/schema.sql
```

### Existing database (already has data — safe to run)
```bash
psql -U postgres -d suka -f backend/db/migration_v3.sql
```

**On Railway** — go to: Postgres plugin → Data → Query → paste the SQL → Run

---

## Step 3 — Install and run

```bash
cd backend
npm install
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server starts on `http://localhost:3000` and serves the `frontend/` folder automatically.

---

## URLs

| Page | URL |
|------|-----|
| Customer app | `http://localhost:3000?restaurant=suka-mallathalli&table=AA-01` |
| Admin panel | `http://localhost:3000/admin.html` |
| Kitchen display | `http://localhost:3000/kitchen.html` |
| Owner dashboard | `http://localhost:3000/dashboard.html` |

---

## Admin PINs (change these before going live)

| Role | PIN |
|------|-----|
| Owner | 1234 |
| Manager | 5678 |
| Kitchen | 9999 |
| Staff | 0000 |

To change PINs — update the `admin_users` table directly in Railway:
```sql
UPDATE admin_users SET pin='YOUR_NEW_PIN' WHERE name='Owner' AND restaurant_id='suka-mallathalli';
```

---

## Deploy on Railway

1. Push this entire folder to a GitHub repo
2. Railway → New Project → Deploy from GitHub repo
3. Add a PostgreSQL plugin
4. Go to your service → Variables → `DATABASE_URL` is already set by Railway
5. Set `PORT` variable if needed (Railway usually handles this)
6. Go to Postgres → Data → Query → paste `backend/db/migration_v3.sql` → Run
7. Done — Railway deploys automatically on every git push

---

## API reference

### Customer endpoints
| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/sessions` | Save preference answers after questions |
| POST | `/api/orders` | Place an order |
| POST | `/api/feedback` | Submit post-meal rating |
| GET | `/api/admin/sold-out` | Check which items are sold out |
| GET | `/api/orders/table-status` | Check if table has a recent order |

### Admin endpoints (require PIN header)
| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/admin/login` | Validate PIN |
| GET | `/api/admin/tables` | Live table grid |
| GET | `/api/admin/orders` | All active orders |
| PATCH | `/api/admin/orders/:id/status` | Update order status |
| GET | `/api/admin/bill/:table` | Full bill for a table |
| POST | `/api/admin/bill/:table/close` | Close + mark payment |
| GET | `/api/admin/qr-codes` | Generate QR URLs |
| POST | `/api/admin/tables` | Add a table |
| GET/POST | `/api/admin/sold-out` | Manage sold-out items |

### Dashboard endpoints
| Method | Path | Purpose |
|--------|------|---------|
| GET | `/api/analytics/summary` | Revenue + rating totals |
| GET | `/api/analytics/calendar` | Daily revenue for heatmap |
| GET | `/api/analytics/calendar/:date` | Drill-down for one date |
| GET | `/api/analytics/orders` | Order list |
| GET | `/api/analytics/feedback` | Feedback list |
| GET | `/api/analytics/dishes` | Dish approval ratings |
