-- ═══════════════════════════════════════════════════════════════
-- QUICK FIX — Run this in Railway → Postgres → Data → Query
-- Adds only the missing columns causing the current errors
-- Safe to re-run — uses IF NOT EXISTS
-- ═══════════════════════════════════════════════════════════════

-- Fix the errors currently breaking orders and admin:
ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS round_number    INTEGER DEFAULT 1,
  ADD COLUMN IF NOT EXISTS course_type     TEXT    DEFAULT '',
  ADD COLUMN IF NOT EXISTS order_source    TEXT    DEFAULT 'full',
  ADD COLUMN IF NOT EXISTS moods           TEXT[]  DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS diet_identity   TEXT    DEFAULT 'all',
  ADD COLUMN IF NOT EXISTS group_size      TEXT    DEFAULT 'small';

ALTER TABLE sessions
  ADD COLUMN IF NOT EXISTS drink_styles    TEXT[]  DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS order_source    TEXT    DEFAULT 'full',
  ADD COLUMN IF NOT EXISTS questions_done  BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS round_number    INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS courses_ordered TEXT[]  DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS updated_at      TIMESTAMPTZ DEFAULT NOW();

ALTER TABLE restaurants
  ADD COLUMN IF NOT EXISTS gstin           TEXT          DEFAULT '',
  ADD COLUMN IF NOT EXISTS fssai           TEXT          DEFAULT '',
  ADD COLUMN IF NOT EXISTS address         TEXT          DEFAULT '',
  ADD COLUMN IF NOT EXISTS phone           TEXT          DEFAULT '',
  ADD COLUMN IF NOT EXISTS tax_cgst        NUMERIC(4,2)  DEFAULT 2.5,
  ADD COLUMN IF NOT EXISTS tax_sgst        NUMERIC(4,2)  DEFAULT 2.5,
  ADD COLUMN IF NOT EXISTS service_charge  NUMERIC(4,2)  DEFAULT 0;

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

-- Confirm it worked
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'orders'
  AND column_name IN ('round_number','course_type','order_source','moods')
ORDER BY column_name;
