// ═══════════════════════════════════════════════════════════════
// NEW RESTAURANT TEMPLATE
// 1. Copy this file → rename to your-resto-id.js
// 2. Fill in every TODO below
// 3. Add 'your-resto-id' to _registry.js
// 4. Run the SQL setup (see bottom of file)
// 5. git add + commit + push → live immediately
// ═══════════════════════════════════════════════════════════════

window.MESA_RESTO_CONFIG = {
  // ── Identity ────────────────────────────────────────────────
  id:       'your-resto-id',          // must match ?restaurant= URL param and filename
  name:     'Restaurant Name',
  tagline:  'Your tagline here',
  location: 'Area, City',
  accent:   '#C9943A',               // primary colour for buttons (hex)

  // ── Menu ─────────────────────────────────────────────────────
  // food: sections shown in starters / mains / desserts tabs
  // drinks: sections shown as drink tabs
  menu: {
    food: {
      // Each key becomes a category shown in the food screens
      // Items: {id, name, e(emoji), price, diet('veg'/'nonveg'/'egg'),
      //         seafood(bool), redmeat(bool), tags[], desc, why}
      starters: [
        // {id:'rs1', name:'Dish Name', e:'🍗', price:299, diet:'nonveg',
        //  seafood:false, redmeat:false, tags:['spicy','drinky'],
        //  desc:'Short description', why:'spicy,drinky'},
      ],
      desserts: [
        // {id:'rd1', name:'Dessert', e:'🍰', price:299, diet:'veg',
        //  seafood:false, redmeat:false, tags:['sweet'], desc:'...', why:'celebrate'},
      ],
    },
    drinks: {
      // Each key becomes a drink tab
      cocktails: [
        // {id:'rc1', name:'Cocktail Name', e:'🍸', price:299, diet:'veg',
        //  tags:['celebrate','drinky'], desc:'Description', why:'celebrate'},
      ],
      bar_bites: [
        // Food items shown on the drinks screen as pairings
        // {id:'rb1', name:'Bite Name', e:'🍟', price:199, diet:'veg',
        //  tags:['drinky'], desc:'...', why:'drinky'},
      ],
    },
  },

  // ── Course mapping ────────────────────────────────────────────
  // Which menu.food keys count as starters / mains / desserts
  // Drives the flow: Popular → Drinks → Starters → Mains → Desserts → Bill
  courseMap: {
    starters: ['starters'],
    mains:    [],           // leave empty if no mains (pub/bar style)
    desserts: ['desserts'],
  },

  // ── Drink tabs ────────────────────────────────────────────────
  // Determines which tabs show on the drinks screen
  // Each key must match a key in menu.drinks above
  drinkTabs: [
    {key:'cocktails', label:'🍸 Cocktails'},
    {key:'bar_bites', label:'🍢 Bar Bites'},
  ],

  // ── Popular tonight (shown on home screen) ────────────────────
  quickPicks: {
    starters: [
      // {id:'rs1', badge:'Most Ordered', why:'Everyone orders this'},
    ],
    mains: [],
    desserts: [],
  },

  // ── Recommendation engine ─────────────────────────────────────
  // Which food IDs appear on the drinks screen as pairings
  drinksPairingIds: new Set([
    // 'rb1', 'rb2',  ← food items shown on drinks tab
  ]),

  // Food pairing suggestions per drink style
  barBitesPairing: {
    cocktails: [], // ['rb1', 'rb2']
    bar_bites: [],
  },

  // Drink style → tab mapping (4 universal moods → your tab keys)
  styleToTab: {
    beer:     'cocktails',   // or whichever tab is closest
    cocktail: 'cocktails',
    spirits:  'cocktails',
    mocktail: 'cocktails',
  },

  // Which items to boost per style+flavor selection
  drinkScoreMap: {
    'cocktail+sweet': [], // ['rc1', 'rc2']
    'cocktail+sour':  [],
    'cocktail+herby': [],
    'cocktail+spicy': [],
    'spirits+neat':   [],
    'spirits+mixed':  [],
    'spirits+long':   [],
    'spirits+shots':  [],
    'beer+light':     [],
    'beer+fruity':    [],
    'beer+strong':    [],
    'beer+dark':      [],
    'mocktail+cool':  [],
    'mocktail+tangy': [],
    'mocktail+floral':[],
    'mocktail+spicy': [],
  },

  // Bar bites to suggest per style+flavor
  drinkBitesMap: {
    'cocktail+sweet': [], // ['rb1']
    'cocktail+spicy': [],
    // ... add others as needed
  },

  // Flavor sub-options per drink mood (what customer sees)
  drinkFlavorOptions: {
    beer:     [{val:'light', e:'🌾', lbl:'Light', sub:'Easy drinking'}],
    cocktail: [
      {val:'sweet', e:'🍓', lbl:'Fruity & Sweet', sub:'Tropical, mango'},
      {val:'sour',  e:'🍋', lbl:'Tangy & Sour',   sub:'Citrus, lime'},
      {val:'herby', e:'🌿', lbl:'Fresh & Herby',  sub:'Mint, floral'},
      {val:'spicy', e:'🔥', lbl:'Spicy & Bold',   sub:'Chilli, ginger'},
    ],
    spirits:  [{val:'neat', e:'🥃', lbl:'Classics', sub:'Straight, on rocks'}],
    mocktail: [{val:'cool', e:'❄️', lbl:'Refreshing', sub:'Non-alcoholic'}],
  },

  // ── Cuisine picker (shown in recommendation questions) ────────
  cuisines: [
    {cu:'southindian', label:'South Indian', sub:'Curries, Rice, Tawa'},
    {cu:'continental', label:'Continental',  sub:'Grills, Toast, Mezze'},
    // add what's relevant to your menu
  ],

  // Which menu category = which cuisine (for recommendations)
  cuisineBySubcat: {
    starters: 'global',
    desserts:  'global',
  },

  // ── Drink hints (shown after food order) ─────────────────────
  drinkHint: {
    spicy:     '🌶️ Bold food? Try something cooling from our cocktails.',
    light:     '🌿 Light and refreshing — perfect with a sparkling cocktail.',
    hearty:    '🍖 Big flavours? Go for a classic or a long drink.',
    celebrate: '🎉 Celebrating? Our signature cocktails are made for this.',
    default:   "Here's what pairs well with your order.",
  },

  // ── Popular picks (drives the POPULAR_BADGE in listings) ─────
  popular: {
    most_ordered: [],  // [{id:'rs1', badge:'Most Ordered'}]
    chefs_pick:   [],
    trending:     [],
  },
};

// ═══════════════════════════════════════════════════════════════
// SQL SETUP — run once in Railway → Postgres → Data → Query
// ═══════════════════════════════════════════════════════════════
/*
INSERT INTO restaurants (id, name, tagline, location, address, phone)
VALUES ('your-resto-id', 'Restaurant Name', 'Tagline', 'City', 'Address', 'Phone')
ON CONFLICT (id) DO NOTHING;

INSERT INTO admin_users (restaurant_id, name, pin, role) VALUES
  ('your-resto-id', 'Owner',   '1111', 'owner'),
  ('your-resto-id', 'Manager', '2222', 'manager'),
  ('your-resto-id', 'Kitchen', '3333', 'kitchen')
ON CONFLICT (restaurant_id, pin) DO NOTHING;

INSERT INTO restaurant_tables (restaurant_id, table_number, section)
SELECT 'your-resto-id', 'TB-' || LPAD(n::TEXT, 2, '0'), 'Main Floor'
FROM generate_series(1, 20) n
ON CONFLICT (restaurant_id, table_number) DO NOTHING;
*/
