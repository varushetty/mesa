-- ═══════════════════════════════════════════════════════════════
-- SUKA / MESA — Migration v3 (run on EXISTING databases)
-- Safe to re-run — uses IF NOT EXISTS / ON CONFLICT DO NOTHING
-- Railway: Postgres → Data → Query → paste → Run
-- ═══════════════════════════════════════════════════════════════

-- ── Sessions: add new flow-tracking columns ──────────────────────
ALTER TABLE sessions
  ADD COLUMN IF NOT EXISTS drink_styles       TEXT[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS order_source       TEXT DEFAULT 'full',
  ADD COLUMN IF NOT EXISTS questions_done     BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS round_number       INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS courses_ordered    TEXT[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS updated_at         TIMESTAMPTZ DEFAULT NOW();

-- ── Orders: add context columns ──────────────────────────────────
ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS round_number       INTEGER DEFAULT 1,
  ADD COLUMN IF NOT EXISTS course_type        TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS order_source       TEXT DEFAULT 'full',
  ADD COLUMN IF NOT EXISTS moods              TEXT[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS diet_identity      TEXT DEFAULT 'all',
  ADD COLUMN IF NOT EXISTS group_size         TEXT DEFAULT 'small';

-- ── Revenue snapshots table (new) ────────────────────────────────
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
);
CREATE INDEX IF NOT EXISTS idx_revenue_snaps ON revenue_snapshots(restaurant_id, snap_date DESC);

-- ── Popular picks: add drinks category ───────────────────────────
INSERT INTO popular_picks (restaurant_id, course, position, item_id, item_name, badge) VALUES
  ('suka-mallathalli','drinks',1,'br1', 'Hoegaarden 330ML',    'Most Ordered'),
  ('suka-mallathalli','drinks',2,'ck1', 'Beachside Day Dream', 'Top Cocktail'),
  ('suka-mallathalli','drinks',3,'mk3', 'Virgin Mojito',       'Non-Alcoholic Pick')
ON CONFLICT (restaurant_id, course, position) DO NOTHING;

-- ── Restaurants: add suka-mallathalli if missing ─────────────────
INSERT INTO restaurants (id, name, tagline, location, address, phone, gstin, fssai)
VALUES (
  'suka-mallathalli', 'SUKA', 'Flavours of Good Times',
  'Mallathalli, Bangalore', 'Mallathalli Main Road, Bangalore - 560056',
  '+91 98765 43210', '29AABCS1429B1Z1', '10019021003690'
) ON CONFLICT (id) DO NOTHING;

-- ── Restaurants: billing columns ─────────────────────────────────
ALTER TABLE restaurants
  ADD COLUMN IF NOT EXISTS gstin          TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS fssai          TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS address        TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS phone          TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS tax_cgst       NUMERIC(4,2) DEFAULT 2.5,
  ADD COLUMN IF NOT EXISTS tax_sgst       NUMERIC(4,2) DEFAULT 2.5,
  ADD COLUMN IF NOT EXISTS service_charge NUMERIC(4,2) DEFAULT 0;

-- ── Admin users: add mallathalli PINs if missing ─────────────────
INSERT INTO admin_users (restaurant_id, name, pin, role) VALUES
  ('suka-mallathalli', 'Owner',   '1234', 'owner'),
  ('suka-mallathalli', 'Manager', '5678', 'manager'),
  ('suka-mallathalli', 'Kitchen', '9999', 'kitchen'),
  ('suka-mallathalli', 'Staff',   '0000', 'staff')
ON CONFLICT (restaurant_id, pin) DO NOTHING;

-- ── Tables: seed mallathalli tables AA-01 to AA-20 ───────────────
INSERT INTO restaurant_tables (restaurant_id, table_number, section)
SELECT 'suka-mallathalli',
       'AA-' || LPAD(n::TEXT, 2, '0'),
       CASE WHEN n <= 10 THEN 'Main Floor' ELSE 'Upper Deck' END
FROM generate_series(1, 20) n
ON CONFLICT (restaurant_id, table_number) DO NOTHING;

-- ── Confirm ───────────────────────────────────────────────────────
SELECT
  (SELECT COUNT(*) FROM restaurants)         AS restaurants,
  (SELECT COUNT(*) FROM restaurant_tables)   AS tables,
  (SELECT COUNT(*) FROM admin_users)         AS admin_users,
  (SELECT COUNT(*) FROM popular_picks)       AS popular_picks,
  (SELECT COUNT(*) FROM revenue_snapshots)   AS revenue_snapshots;
