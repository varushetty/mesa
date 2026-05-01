-- ═══════════════════════════════════════════════════════════════
-- SUKA / MESA Platform — Complete Database Schema v3
-- Run ONCE against a fresh PostgreSQL database
-- Railway: Postgres → Data → Query → paste → Run
-- Local:   psql -U postgres -d suka -f schema.sql
-- ═══════════════════════════════════════════════════════════════

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── 1. Restaurants ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS restaurants (
  id             TEXT PRIMARY KEY,
  name           TEXT NOT NULL DEFAULT 'SUKA',
  tagline        TEXT DEFAULT 'Flavours of Good Times',
  location       TEXT DEFAULT '',
  accent_color   TEXT DEFAULT '#C9943A',
  gstin          TEXT DEFAULT '',
  fssai          TEXT DEFAULT '',
  address        TEXT DEFAULT '',
  phone          TEXT DEFAULT '',
  tax_cgst       NUMERIC(4,2) DEFAULT 2.5,
  tax_sgst       NUMERIC(4,2) DEFAULT 2.5,
  service_charge NUMERIC(4,2) DEFAULT 0,
  is_active      BOOLEAN DEFAULT true,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO restaurants (id, name, tagline, location, address, phone, gstin, fssai)
VALUES (
  'suka-mallathalli', 'SUKA', 'Flavours of Good Times',
  'Mallathalli, Bangalore',
  'Mallathalli Main Road, Bangalore - 560056',
  '+91 98765 43210',
  '29AABCS1429B1Z1',
  '10019021003690'
) ON CONFLICT (id) DO NOTHING;

-- ── 2. Admin users (PIN-based) ───────────────────────────────────
CREATE TABLE IF NOT EXISTS admin_users (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id TEXT NOT NULL REFERENCES restaurants(id),
  name          TEXT NOT NULL,
  pin           TEXT NOT NULL,
  role          TEXT NOT NULL DEFAULT 'staff',  -- owner | manager | kitchen | staff
  is_active     BOOLEAN DEFAULT true,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(restaurant_id, pin)
);

-- Default PINs — CHANGE BEFORE GOING LIVE
INSERT INTO admin_users (restaurant_id, name, pin, role) VALUES
  ('suka-mallathalli', 'Owner',   '1234', 'owner'),
  ('suka-mallathalli', 'Manager', '5678', 'manager'),
  ('suka-mallathalli', 'Kitchen', '9999', 'kitchen'),
  ('suka-mallathalli', 'Staff',   '0000', 'staff')
ON CONFLICT (restaurant_id, pin) DO NOTHING;

-- ── 3. Tables ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS restaurant_tables (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id TEXT NOT NULL REFERENCES restaurants(id),
  table_number  TEXT NOT NULL,
  section       TEXT DEFAULT 'Main Floor',
  capacity      INTEGER DEFAULT 4,
  is_active     BOOLEAN DEFAULT true,
  UNIQUE(restaurant_id, table_number)
);

-- Seed tables AA-01 to AA-20
INSERT INTO restaurant_tables (restaurant_id, table_number, section)
SELECT 'suka-mallathalli',
       'AA-' || LPAD(n::TEXT, 2, '0'),
       CASE WHEN n <= 10 THEN 'Main Floor' ELSE 'Upper Deck' END
FROM generate_series(1, 20) n
ON CONFLICT (restaurant_id, table_number) DO NOTHING;

-- ── 4. Sessions ──────────────────────────────────────────────────
-- One session per customer visit — captures preferences answered
CREATE TABLE IF NOT EXISTS sessions (
  id                 UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id      TEXT NOT NULL REFERENCES restaurants(id),
  table_number       TEXT NOT NULL,
  session_key        TEXT NOT NULL DEFAULT '',

  -- What the customer told us
  plan               TEXT,           -- 'both' | 'food' | 'drinks'
  moods              TEXT[] DEFAULT '{}',     -- ['spicy','celebrate']
  diet_identity      TEXT DEFAULT 'all',      -- 'veg'|'nonveg'|'eggok'|'all'
  group_size         TEXT DEFAULT 'small',    -- 'solo'|'couple'|'small'|'large'
  adventure_cuisines TEXT[] DEFAULT '{}',     -- ['thai','japanese']
  drink_styles       TEXT[] DEFAULT '{}',     -- ['beer','cocktail']

  -- Flow tracking (mirrors frontend flags)
  order_source       TEXT DEFAULT 'full',     -- 'spq' | 'full'
  questions_done     BOOLEAN DEFAULT false,   -- true once startFlow() ran
  round_number       INTEGER DEFAULT 0,       -- how many order rounds so far

  -- What courses they've had (for dashboard)
  courses_ordered    TEXT[] DEFAULT '{}',     -- ['drinks','starters','mains']

  created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 5. Orders ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS orders (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id       UUID REFERENCES sessions(id) ON DELETE SET NULL,
  restaurant_id    TEXT NOT NULL REFERENCES restaurants(id),
  table_number     TEXT NOT NULL,

  items            JSONB NOT NULL DEFAULT '[]',
  -- [{"id":"bir2","name":"Chicken Dum Biryani","qty":1,"price":499,"diet":"nonveg"}]

  order_total      INTEGER NOT NULL DEFAULT 0,
  status           TEXT NOT NULL DEFAULT 'new',
  -- new → preparing → served → bill_requested → closed | cancelled

  round_number     INTEGER DEFAULT 1,         -- which round for this table (1,2,3…)
  course_type      TEXT DEFAULT '',           -- 'drinks'|'starters'|'mains'|'desserts'|'mixed'
  order_source     TEXT DEFAULT 'full',       -- 'spq'|'full'
  moods            TEXT[] DEFAULT '{}',       -- moods at time of order
  diet_identity    TEXT DEFAULT 'all',
  group_size       TEXT DEFAULT 'small',

  payment_method   TEXT,                      -- 'cash'|'upi'|'card'
  billed_at        TIMESTAMPTZ,
  closed_at        TIMESTAMPTZ,

  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 6. Feedback ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS feedback (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id       UUID REFERENCES sessions(id) ON DELETE SET NULL,
  restaurant_id    TEXT NOT NULL REFERENCES restaurants(id),
  table_number     TEXT NOT NULL,

  overall_rating   SMALLINT CHECK (overall_rating BETWEEN 1 AND 5),
  would_recommend  BOOLEAN,
  comment          TEXT DEFAULT '',

  dish_ratings     JSONB NOT NULL DEFAULT '[]',
  -- [{"itemId":"bir2","name":"...","thumbs":true,"wasPicked":"Most Ordered"}]

  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 7. Sold out (real-time per restaurant) ───────────────────────
CREATE TABLE IF NOT EXISTS sold_out (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id TEXT NOT NULL REFERENCES restaurants(id),
  item_id       TEXT NOT NULL,
  item_name     TEXT DEFAULT '',
  marked_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  marked_by     TEXT DEFAULT 'admin',
  UNIQUE(restaurant_id, item_id)
);

-- ── 8. Popular picks (owner-editable) ────────────────────────────
CREATE TABLE IF NOT EXISTS popular_picks (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id TEXT NOT NULL REFERENCES restaurants(id),
  course        TEXT NOT NULL,           -- 'starters'|'mains'|'desserts'|'drinks'
  position      SMALLINT NOT NULL,
  item_id       TEXT NOT NULL,
  item_name     TEXT DEFAULT '',
  badge         TEXT DEFAULT '',
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(restaurant_id, course, position)
);

INSERT INTO popular_picks (restaurant_id, course, position, item_id, item_name, badge) VALUES
  ('suka-mallathalli','starters',1,'nv2', 'Country Chilli Chicken', 'Most Ordered'),
  ('suka-mallathalli','starters',2,'sig1','Anjal Tawa Fry',          'Chef Pick'),
  ('suka-mallathalli','starters',3,'su1', 'Truffle Edamame Uramaki', 'Trending'),
  ('suka-mallathalli','mains',   1,'bir2','Chicken Dum Biryani',     'Most Ordered'),
  ('suka-mallathalli','mains',   2,'rec1','Madras Chicken Kari',     'Chef Pick'),
  ('suka-mallathalli','mains',   3,'ig6', 'Butter Chicken',          'Crowd Favourite'),
  ('suka-mallathalli','desserts',1,'des1','Biscoff Tres Leches',     'Most Ordered'),
  ('suka-mallathalli','desserts',2,'des2','Cashewnut Brownie',        'Trending'),
  ('suka-mallathalli','desserts',3,'des3','Black Rice Kheer',         'Chef Pick'),
  ('suka-mallathalli','drinks',  1,'br1', 'Hoegaarden 330ML',        'Most Ordered'),
  ('suka-mallathalli','drinks',  2,'ck1', 'Beachside Day Dream',     'Top Cocktail'),
  ('suka-mallathalli','drinks',  3,'mk3', 'Virgin Mojito',           'Non-Alcoholic Pick')
ON CONFLICT (restaurant_id, course, position) DO NOTHING;

-- ── 9. Menu items (admin-managed additions) ───────────────────────
CREATE TABLE IF NOT EXISTS menu_items (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id TEXT NOT NULL REFERENCES restaurants(id),
  name          TEXT NOT NULL,
  price         INTEGER NOT NULL,
  diet          TEXT NOT NULL DEFAULT 'nonveg',
  category      TEXT NOT NULL DEFAULT 'starters',
  description   TEXT DEFAULT '',
  is_active     BOOLEAN DEFAULT true,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 10. Revenue snapshots (daily cache for calendar) ─────────────
-- Auto-populated by a nightly trigger or on-demand by analytics route
CREATE TABLE IF NOT EXISTS revenue_snapshots (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id TEXT NOT NULL REFERENCES restaurants(id),
  snap_date     DATE NOT NULL,
  total_revenue INTEGER NOT NULL DEFAULT 0,
  order_count   INTEGER NOT NULL DEFAULT 0,
  avg_rating    NUMERIC(3,2),
  notes         TEXT DEFAULT '',         -- e.g. 'Weekend', 'Holiday', 'Event'
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(restaurant_id, snap_date)
);

-- ── 11. Indexes ──────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_sessions_restaurant   ON sessions(restaurant_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_table        ON sessions(restaurant_id, table_number);
CREATE INDEX IF NOT EXISTS idx_orders_restaurant     ON orders(restaurant_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_status         ON orders(restaurant_id, status);
CREATE INDEX IF NOT EXISTS idx_orders_table          ON orders(restaurant_id, table_number);
CREATE INDEX IF NOT EXISTS idx_orders_session        ON orders(session_id);
CREATE INDEX IF NOT EXISTS idx_orders_items_gin      ON orders USING GIN (items);
CREATE INDEX IF NOT EXISTS idx_feedback_restaurant   ON feedback(restaurant_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_feedback_session      ON feedback(session_id);
CREATE INDEX IF NOT EXISTS idx_feedback_rating       ON feedback(overall_rating);
CREATE INDEX IF NOT EXISTS idx_feedback_dishes_gin   ON feedback USING GIN (dish_ratings);
CREATE INDEX IF NOT EXISTS idx_sold_out_rest         ON sold_out(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_popular_rest          ON popular_picks(restaurant_id, course, position);
CREATE INDEX IF NOT EXISTS idx_tables_rest           ON restaurant_tables(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_admin_users_rest      ON admin_users(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_rest       ON menu_items(restaurant_id, is_active);
CREATE INDEX IF NOT EXISTS idx_revenue_snaps         ON revenue_snapshots(restaurant_id, snap_date DESC);

-- ── Confirm ───────────────────────────────────────────────────────
SELECT
  (SELECT COUNT(*) FROM restaurants)       AS restaurants,
  (SELECT COUNT(*) FROM restaurant_tables) AS tables,
  (SELECT COUNT(*) FROM admin_users)       AS admin_users,
  (SELECT COUNT(*) FROM popular_picks)     AS popular_picks;
