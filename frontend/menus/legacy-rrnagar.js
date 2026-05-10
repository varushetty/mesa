// ═══════════════════════════════════════════════════════════════
// LEGACY RR NAGAR — Complete restaurant config
// This file is loaded ONLY when ?restaurant=legacy-rrnagar
// ═══════════════════════════════════════════════════════════════

const LEGACY_MENU = {
  food: {
    // ── IPL TEAM SPECIAL STARTERS ─────────────────────────────
    team_specials: [
      {id:'lg_ts1', name:'RCB – King Kohli Chicken Kebab',    e:'🍗', price:439, diet:'nonveg', seafood:false, redmeat:false, tags:['spicy','hearty','celebrate'], desc:'Crispy kebabs with curry leaf, bold spices and peppery finish', why:'spicy,hearty'},
      {id:'lg_ts2', name:'CSK – Thala Chicken 65',            e:'🍗', price:449, diet:'nonveg', seafood:false, redmeat:false, tags:['spicy','crispy','hearty'],    desc:'Curry leaf, garlic and bold South Indian chilli masala',      why:'spicy,hearty'},
      {id:'lg_ts3', name:'MI – Hitman Pav Bhaji',             e:'🫓', price:399, diet:'veg',    seafood:false, redmeat:false, tags:['hearty','comfort','veg'],      desc:'Buttery mashed vegetables, toasted pav and onion',             why:'hearty,veg'},
      {id:'lg_ts4', name:'DC – Dilli 6 Soya Chaap Tikka',    e:'🟤', price:449, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','veg'],                 desc:'Smoky soya chaap tikka with North Indian spices, mint chutney', why:'spicy,veg'},
      {id:'lg_ts5', name:'SRH – Orange Army Tala Hua Gosht',  e:'🍖', price:699, diet:'nonveg', seafood:false, redmeat:true,  tags:['spicy','hearty','celebrate'], desc:'Tender mutton in bold Hyderabadi masala with rich spicy finish', why:'spicy,celebrate'},
      {id:'lg_ts6', name:'GT – Gill-ty Pleasure Dhokla Chaat',e:'🍡', price:399, diet:'veg',    seafood:false, redmeat:false, tags:['tangy','light','veg'],         desc:'Soft dhokla layered with chutneys, sev and chaat flavours',    why:'light,veg'},
      {id:'lg_ts7', name:'KKR – Knight Rider Kasundi Prawns', e:'🦐', price:549, diet:'nonveg', seafood:true,  redmeat:false, tags:['spicy','hearty'],              desc:'Crispy prawns in sharp Bengali kasundi mustard, pickled onion', why:'spicy,hearty'},
      {id:'lg_ts8', name:'LSG – Nawab Knock Galouti',         e:'🍖', price:699, diet:'nonveg', seafood:false, redmeat:true,  tags:['hearty','rich','celebrate'],   desc:'Soft mutton galouti on saffron bread with mint chutney',       why:'hearty,celebrate'},
      {id:'lg_ts9', name:'PBKS – Punjab Powerplay Tikka',     e:'🍗', price:449, diet:'nonveg', seafood:false, redmeat:false, tags:['spicy','hearty'],              desc:'Juicy chicken tikka in Punjabi marinade with smoky char',      why:'spicy,hearty'},
      {id:'lg_ts10',name:'RR – Halla Bol Paneer Soola',       e:'🧀', price:449, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','veg'],                 desc:'Chargrilled paneer in Rajasthani chilli-curd marinade',         why:'spicy,veg'},
    ],

    // ── VEG STARTERS ──────────────────────────────────────────
    veg_starters: [
      {id:'lg_vs1', name:'South Side Bhaji',         e:'🫘', price:179, diet:'veg', seafood:false, redmeat:false, tags:['light','crispy','veg'],    desc:'Crispy raw banana, chilli bhaji and palak fritters with chutney', why:'light,veg'},
      {id:'lg_vs2', name:'French Fries',              e:'🍟', price:229, diet:'veg', seafood:false, redmeat:false, tags:['light','drinky','veg'],    desc:'Salt & pepper or peri peri dusted fries',                         why:'drinky,light'},
      {id:'lg_vs3', name:'Bang Bang Potato',          e:'🥔', price:229, diet:'veg', seafood:false, redmeat:false, tags:['drinky','veg'],            desc:'Deep-fried potato wedges with bang bang sauce',                   why:'drinky,veg'},
      {id:'lg_vs4', name:'Loaded Nachos',             e:'🌮', price:329, diet:'veg', seafood:false, redmeat:false, tags:['drinky','sharing','veg'],  desc:'Tortilla with beans, cheese sauce, salsa and jalapeños',          why:'drinky,veg', sharing:true},
      {id:'lg_vs5', name:'Aam Panna Chilli Tofu',     e:'🟢', price:329, diet:'veg', seafood:false, redmeat:false, tags:['tangy','light','veg'],    desc:'Tangy aam panna glaze, chilli, edamame, foxnut, jaljeera',        why:'light,veg'},
      {id:'lg_vs6', name:'Cheese Cherry Pineapple',   e:'🍍', price:329, diet:'veg', seafood:false, redmeat:false, tags:['sweet','light','veg'],    desc:'Sweet pineapple with cheese and cherries, chilled on skewers',    why:'light,veg'},
      {id:'lg_vs7', name:'Onion Ring',                e:'🧅', price:329, diet:'veg', seafood:false, redmeat:false, tags:['crispy','drinky','veg'],   desc:'Crumb-fried onion rings with spicy mayo dip',                     why:'drinky,veg'},
      {id:'lg_vs8', name:'Chutney Podi Peanut Masala',e:'🥜', price:229, diet:'veg', seafood:false, redmeat:false, tags:['drinky','light','veg'],   desc:'Roasted peanuts with podi spice, onion, tomato and lemon',        why:'drinky,light'},
      {id:'lg_vs9', name:'Crispy Chilli Corn',        e:'🌽', price:329, diet:'veg', seafood:false, redmeat:false, tags:['spicy','crispy','veg'],    desc:'Deep-fried corn with bell peppers, chilli and onions',            why:'spicy,veg'},
    ],

    // ── NON-VEG STARTERS ──────────────────────────────────────
    nonveg_starters: [
      {id:'lg_nv1', name:'Chilli Pepper Egg',         e:'🥚', price:289, diet:'egg',    seafood:false, redmeat:false, tags:['spicy','drinky'],       desc:'Boiled eggs sautéed with pepper, onion and spicy house masala',   why:'spicy,drinky'},
      {id:'lg_nv2', name:'Kodi Chips',                e:'🍗', price:379, diet:'nonveg', seafood:false, redmeat:false, tags:['crispy','spicy'],        desc:'Chicken strips in spiced batter with curry leaf dust',             why:'spicy'},
      {id:'lg_nv3', name:'Chicken Loaded Nachos',     e:'🌮', price:379, diet:'nonveg', seafood:false, redmeat:false, tags:['drinky','sharing'],      desc:'Nachos with grilled chicken, cheese sauce, salsa, jalapeños',     why:'drinky', sharing:true},
      {id:'lg_nv4', name:'Crispy Chicken Pops',       e:'🍗', price:379, diet:'nonveg', seafood:false, redmeat:false, tags:['crispy','drinky'],       desc:'Bite-sized golden fried chicken with sriracha mayo',              why:'drinky'},
      {id:'lg_nv5', name:'Lisbon Fish Finger',        e:'🐟', price:439, diet:'nonveg', seafood:true,  redmeat:false, tags:['light','crispy'],        desc:'Crumb-fried fish with lemon aioli and pepper dust',               why:'light'},
      {id:'lg_nv6', name:'Cajun Calamari',            e:'🦑', price:439, diet:'nonveg', seafood:true,  redmeat:false, tags:['spicy','crispy','drinky'],desc:'Fried calamari in Cajun spice with garlic mayo',                  why:'spicy,drinky'},
    ],

    // ── SOUPS & RAMEN ─────────────────────────────────────────
    soups_ramen: [
      {id:'lg_sr1', name:'Drumstick Soup',            e:'🥣', price:259, diet:'veg',    seafood:false, redmeat:false, tags:['light','comfort','veg'], desc:'South Indian drumstick lentil broth tempered with garlic, cumin', why:'light,veg'},
      {id:'lg_sr2', name:'Cream of Mushroom Truffle', e:'🍄', price:259, diet:'veg',    seafood:false, redmeat:false, tags:['rich','light','veg'],    desc:'Silky mushroom soup with truffle oil and roasted garlic crumbs',  why:'light,veg'},
      {id:'lg_sr3', name:'Classic Tuscan Tomato',     e:'🍅', price:259, diet:'veg',    seafood:false, redmeat:false, tags:['light','comfort','veg'], desc:'Roasted tomato purée with basil and cream',                       why:'light,veg'},
      {id:'lg_sr4', name:'Wonton Broth',              e:'🍜', price:289, diet:'veg',    seafood:false, redmeat:false, tags:['light','umami','veg'],   desc:'Clear broth with wonton and scallion oil',                        why:'light,veg'},
      {id:'lg_sr5', name:'Manchow (Veg)',             e:'🍜', price:259, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','umami','veg'],   desc:'Spicy garlic soy broth — vegetarian',                             why:'spicy,veg'},
      {id:'lg_sr6', name:'Manchow (Chicken)',         e:'🍜', price:299, diet:'nonveg', seafood:false, redmeat:false, tags:['spicy','umami'],         desc:'Spicy garlic soy broth — chicken',                                why:'spicy'},
      {id:'lg_sr7', name:'Hokkaido Miso Ramen (Veg)', e:'🍜', price:339, diet:'veg',    seafood:false, redmeat:false, tags:['hearty','umami','veg'], desc:'Miso broth with corn, tofu and scallions',                        why:'hearty,veg'},
      {id:'lg_sr8', name:'Hokkaido Miso Ramen (Chicken)',e:'🍜',price:369,diet:'nonveg',seafood:false, redmeat:false, tags:['hearty','umami'],        desc:'Miso broth with corn, chicken and scallions',                     why:'hearty'},
    ],

    // ── SALADS ────────────────────────────────────────────────
    salads: [
      {id:'lg_sl1', name:'Watermelon Mint Feta',      e:'🍉', price:299, diet:'veg',    seafood:false, redmeat:false, tags:['light','fresh','veg'],   desc:'Fresh watermelon, feta, cucumber and mint in honey lime dressing', why:'light,veg'},
      {id:'lg_sl2', name:'Sprouts Cucumber & Avocado',e:'🥑', price:339, diet:'veg',    seafood:false, redmeat:false, tags:['light','fresh','veg'],   desc:'Bean sprouts, green apple, avocado, microgreens, lemon herb',     why:'light,veg'},
      {id:'lg_sl3', name:'Raw Mango & Papaya Salad',  e:'🥭', price:299, diet:'veg',    seafood:false, redmeat:false, tags:['light','tangy','veg'],   desc:'Crisp raw papaya, green mango with Thai herbs and sweet-sour dressing', why:'light,veg'},
      {id:'lg_sl4', name:'Mexican Corn Salad (Veg)',  e:'🌽', price:299, diet:'veg',    seafood:false, redmeat:false, tags:['light','fresh','veg'],   desc:'Grilled corn with lime, chilli, herbs and creamy dressing',       why:'light,veg'},
      {id:'lg_sl5', name:'Mexican Corn Salad (Chicken)',e:'🌽',price:349,diet:'nonveg', seafood:false, redmeat:false, tags:['light','fresh'],         desc:'Grilled corn and chicken with lime, chilli and creamy dressing',  why:'light'},
      {id:'lg_sl6', name:'Caesar Salad',              e:'🥗', price:299, diet:'veg',    seafood:false, redmeat:false, tags:['light','fresh','veg'],   desc:'Crisp lettuce, parmesan and croutons in Caesar dressing',         why:'light,veg'},
    ],

    // ── SOUTH INDIAN APPETIZERS ───────────────────────────────
    south_indian: [
      {id:'lg_si1', name:'Stuffed Sabudana Vada',     e:'🫘', price:259, diet:'veg',    seafood:false, redmeat:false, tags:['crispy','spicy','veg'],  desc:'Crispy sabudana patties stuffed with cheese and spicy garlic chutney', why:'spicy,veg'},
      {id:'lg_si2', name:'Pepper Fry Babycorn',       e:'🌽', price:299, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','veg'],            desc:'Babycorn tossed with pepper and curry leaves',                    why:'spicy,veg'},
      {id:'lg_si3', name:'Pepper Fry Mushroom',       e:'🍄', price:329, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','umami','veg'],   desc:'Mushroom tossed with pepper and curry leaves',                    why:'spicy,veg'},
      {id:'lg_si4', name:'Pepper Fry Paneer',         e:'🧀', price:399, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','rich','veg'],    desc:'Paneer tossed with pepper and curry leaves',                      why:'spicy,veg'},
      {id:'lg_si5', name:'Ghee Roast Mushroom',       e:'🍄', price:329, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','rich','veg'],    desc:'Mushroom in spiced ghee masala, red chilli and tamarind',         why:'spicy,veg'},
      {id:'lg_si6', name:'Ghee Roast Paneer',         e:'🧀', price:399, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','rich','veg'],    desc:'Paneer in spiced ghee masala, red chilli and tamarind',           why:'spicy,veg'},
      {id:'lg_si7', name:'Coconut Curry Leaf Tofu',   e:'🥥', price:399, diet:'veg',    seafood:false, redmeat:false, tags:['light','aromatic','veg'],desc:'Tofu with curry leaves, green chilli and coconut glaze',           why:'light,veg'},
      {id:'lg_si8', name:'Malnad Chicken Kebab',      e:'🍗', price:399, diet:'nonveg', seafood:false, redmeat:false, tags:['spicy','crispy'],        desc:'Chicken with curry leaves, green chilli and coconut chips',       why:'spicy'},
      {id:'lg_si9', name:'Chicken 65',                e:'🍗', price:399, diet:'nonveg', seafood:false, redmeat:false, tags:['spicy','crispy','hearty'],desc:'South Indian spiced fried chicken, curry leaves, green chilli',   why:'spicy,hearty'},
      {id:'lg_si10',name:'Chettinad Chicken',         e:'🍗', price:399, diet:'nonveg', seafood:false, redmeat:false, tags:['spicy','aromatic'],      desc:'Chicken in spicy Chettinad sauce with fennel and black pepper',   why:'spicy'},
      {id:'lg_si11',name:'Andhra Chilli Chicken',     e:'🍗', price:339, diet:'nonveg', seafood:false, redmeat:false, tags:['spicy','crispy'],        desc:'Crispy chicken in Andhra-style chilli garlic masala',             why:'spicy'},
      {id:'lg_si12',name:'Rayalaseema Chicken Fry',   e:'🍗', price:399, diet:'nonveg', seafood:false, redmeat:false, tags:['spicy','hearty'],        desc:'Fiery chicken fry with ground spices, curry leaf and chilli',     why:'spicy,hearty'},
      {id:'lg_si13',name:'Tawa Fry (Seer)',           e:'🐟', price:589, diet:'nonveg', seafood:true,  redmeat:false, tags:['spicy','hearty','celebrate'],desc:'Seer fish seared with tawa masala and curry leaves',           why:'spicy,hearty'},
      {id:'lg_si14',name:'Prawns Koliwada',           e:'🦐', price:489, diet:'nonveg', seafood:true,  redmeat:false, tags:['spicy','crispy'],        desc:'Crispy batter-fried prawns in classic Koliwada red masala',       why:'spicy'},
      {id:'lg_si15',name:'Kodava Chilli Pork',        e:'🥩', price:489, diet:'nonveg', seafood:false, redmeat:true,  tags:['spicy','hearty','celebrate'],desc:'Slow-cooked Coorg-style pork in chilli, pepper and roasted spices',why:'spicy,hearty'},
    ],

    // ── CONTINENTAL APPETIZERS ────────────────────────────────
    continental: [
      {id:'lg_co1', name:'Chilli Butter Corn Ribs',   e:'🌽', price:299, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','light','veg'],   desc:'Corn ribs grilled and coated in chilli butter glaze',             why:'light,veg'},
      {id:'lg_co2', name:'Vol-au-Vent Mushroom',      e:'🍄', price:349, diet:'veg',    seafood:false, redmeat:false, tags:['light','rich','veg'],    desc:'Flaky puff cups filled with creamy mushroom in light herbs',      why:'light,veg'},
      {id:'lg_co3', name:'Harissa Tofu Toast',        e:'🍞', price:379, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','light','veg'],   desc:'Grilled multigrain loaf with spiced tofu, guacamole and herbs',   why:'spicy,veg'},
      {id:'lg_co4', name:'Spicy Paneer Pockets',      e:'🧀', price:379, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','crispy','veg'],  desc:'Paneer stuffed in puff pastry pockets with thecha aioli',         why:'spicy,veg'},
      {id:'lg_co5', name:'Spinach & Corn Croquettes', e:'🥦', price:349, diet:'veg',    seafood:false, redmeat:false, tags:['crispy','light','veg'],  desc:'Crispy croquettes with spinach, sweet corn and melting cheese',   why:'light,veg'},
      {id:'lg_co6', name:'Kunafa Paneer',             e:'🧀', price:399, diet:'veg',    seafood:false, redmeat:false, tags:['rich','celebrate','veg'],desc:'Paneer wrapped in crisp kataifi pastry with chilli yogurt dip',   why:'celebrate,veg'},
      {id:'lg_co7', name:'Mezze Platter',             e:'🫙', price:399, diet:'veg',    seafood:false, redmeat:false, tags:['sharing','light','veg'], desc:'Hummus, baba ganoush, falafel, lavash, pita and marinated olives',why:'light,veg', sharing:true},
      {id:'lg_co8', name:'Vol-au-Vent Chicken',       e:'🍗', price:379, diet:'nonveg', seafood:false, redmeat:false, tags:['rich','hearty'],         desc:'Buttery puff shells stuffed with rich chicken ragout filling',    why:'hearty'},
      {id:'lg_co9', name:'Shish Tawook',              e:'🍗', price:399, diet:'nonveg', seafood:false, redmeat:false, tags:['hearty','smoky'],        desc:'Char-grilled chicken skewers with garlic, paprika and olive oil', why:'hearty'},
      {id:'lg_co10',name:'Bellulli Kebab Taco',       e:'🌮', price:379, diet:'nonveg', seafood:false, redmeat:false, tags:['spicy','tangy'],         desc:'Garlic kebab tacos with raw mango, thecha mayo and guacamole',   why:'spicy'},
      {id:'lg_co11',name:'Chicken Wings (Peri Peri)', e:'🍗', price:379, diet:'nonveg', seafood:false, redmeat:false, tags:['spicy','drinky'],        desc:'Fried chicken wings in peri peri sauce',                          why:'spicy,drinky'},
      {id:'lg_co12',name:'Chicken Wings (BBQ)',       e:'🍗', price:379, diet:'nonveg', seafood:false, redmeat:false, tags:['smoky','drinky'],        desc:'Fried chicken wings in BBQ sauce',                                why:'drinky'},
      {id:'lg_co13',name:'Butter Garlic Prawns',      e:'🦐', price:499, diet:'nonveg', seafood:true,  redmeat:false, tags:['rich','hearty'],         desc:'Prawns in butter garlic served on toasted focaccia',              why:'hearty'},
      {id:'lg_co14',name:'Kunafa Prawns',             e:'🦐', price:499, diet:'nonveg', seafood:true,  redmeat:false, tags:['rich','celebrate'],      desc:'Prawns wrapped in kataifi pastry with chilli yogurt dip',         why:'celebrate'},
    ],

    // ── TANDOOR ───────────────────────────────────────────────
    tandoor: [
      {id:'lg_td1', name:'Legacy Dahi Ke Kebab',      e:'🫙', price:379, diet:'veg',    seafood:false, redmeat:false, tags:['rich','celebrate','veg'],desc:'Yogurt cork bites with apricot-prune stuffing, cornflake crust', why:'celebrate,veg'},
      {id:'lg_td2', name:'Badam Malai Broccoli',      e:'🥦', price:379, diet:'veg',    seafood:false, redmeat:false, tags:['light','veg'],            desc:'Broccoli marinated with cream, almond paste and mild spices',     why:'light,veg'},
      {id:'lg_td3', name:'Peri Peri Paneer Tikka',    e:'🧀', price:399, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','veg'],            desc:'Paneer marinated in peri peri spice, grilled with peppers',       why:'spicy,veg'},
      {id:'lg_td4', name:'Pahadi Paneer Tikka',       e:'🧀', price:399, diet:'veg',    seafood:false, redmeat:false, tags:['light','fresh','veg'],   desc:'Paneer in mint, coriander and green chilli paste',                why:'light,veg'},
      {id:'lg_td5', name:'Tandoori Soya Chaap',       e:'🟤', price:399, diet:'veg',    seafood:false, redmeat:false, tags:['spicy','veg'],            desc:'Soya chaap marinated in yogurt, red chilli and Indian spices',    why:'spicy,veg'},
    ],

    // ── DESSERTS ──────────────────────────────────────────────
    desserts: [
      {id:'lg_ds1', name:'Tiramisu',                        e:'☕', price:379, diet:'egg', seafood:false, redmeat:false, tags:['sweet','celebrate','indulgent'], desc:'Espresso-soaked sponge with mascarpone, cocoa and coffee crumble', why:'celebrate'},
      {id:'lg_ds2', name:'Paris–Jaipur Brulee Tart',        e:'🥐', price:379, diet:'egg', seafood:false, redmeat:false, tags:['sweet','celebrate','indulgent'], desc:'Crème brulee baked inside a mini ghevar shell with saffron sugar', why:'celebrate'},
      {id:'lg_ds3', name:'Legacy Kunafa Jamun Cheesecake',  e:'🍰', price:379, diet:'veg', seafood:false, redmeat:false, tags:['sweet','rich','indulgent'],      desc:'Cheesecake with crispy kunafa, gulab jamun and pistachio',        why:'hearty'},
      {id:'lg_ds4', name:'Basque Cheesecake',               e:'🍰', price:379, diet:'veg', seafood:false, redmeat:false, tags:['sweet','light','indulgent'],      desc:'Burnt cheesecake with vanilla chantilly and nitro berry coulis',  why:'celebrate'},
    ],
  },

  drinks: {
    // ── ARTISANAL COCKTAILS ───────────────────────────────────
    artisanal_cocktails: [
      {id:'lg_ac1', name:'Namma Legacy Namma Brew',  e:'🍫', price:299, diet:'veg', tags:['celebrate','indulgent','drinky'], desc:'Vodka, baileys, cold brew coffee, fresh cream, chocolate, cotton candy cloud', why:'celebrate'},
      {id:'lg_ac2', name:'Blue Ocean',               e:'💙', price:299, diet:'veg', tags:['light','celebrate','drinky'],     desc:'Vodka, blue pea flower, lime, elderflower and sparkling sake',                  why:'celebrate,light'},
      {id:'lg_ac3', name:'Jasmine Mirage',           e:'🌸', price:299, diet:'veg', tags:['light','fresh','drinky'],         desc:'Vodka infused with jasmine, basil, rose, makrut, coconut and cranberry',       why:'light,drinky'},
      {id:'lg_ac4', name:'Golden Cap Custody',       e:'🥃', price:299, diet:'veg', tags:['hearty','drinky'],                desc:'Scotch whisky, butter mushroom, pandan, citrus, ginger ale, blue pea float',   why:'hearty,drinky'},
      {id:'lg_ac5', name:'Tiramisu Madness',         e:'☕', price:299, diet:'veg', tags:['indulgent','celebrate','drinky'], desc:'Coffee tiramisu, hazelnut, vodka, fresh cream with cocoa dust',                 why:'celebrate'},
      {id:'lg_ac6', name:'Pearl of the Night',       e:'🍹', price:299, diet:'veg', tags:['celebrate','drinky'],             desc:'White & dark rum, pineapple, citrus, falernum with flaming cinnamon twist',   why:'celebrate,drinky'},
    ],

    // ── PICANTE COCKTAILS ─────────────────────────────────────
    picante: [
      {id:'lg_pc1', name:'Harbor Heat Picante',      e:'🌶️', price:299, diet:'veg', tags:['spicy','drinky'],       desc:'Spicy margarita with coriander, lime, agave and muddled jalapeños',   why:'spicy,drinky'},
      {id:'lg_pc2', name:'Mango Pop Picante',        e:'🥭', price:299, diet:'veg', tags:['spicy','drinky','fresh'],desc:'Tequila, mango purée, lime and jalapeño — sweet heat',                why:'spicy,drinky'},
      {id:'lg_pc3', name:"Sailor's Paradise Picante",e:'🍉', price:299, diet:'veg', tags:['spicy','light','drinky'],desc:'Watermelon, lime, tequila with smoky jalapeño lift',                  why:'spicy,light'},
    ],

    // ── SPARKLING COCKTAILS ───────────────────────────────────
    sparkling: [
      {id:'lg_sp1', name:'Pandan Fizz',       e:'🌿', price:299, diet:'veg', tags:['light','celebrate','drinky'],desc:'Fresh pandan, lime vodka, sparkling fizz and golden dust',              why:'celebrate,light'},
      {id:'lg_sp2', name:'Mimosa',            e:'🥂', price:299, diet:'veg', tags:['light','celebrate'],         desc:'Orange juice topped with crisp prosecco — effervescent delight',       why:'celebrate,light'},
      {id:'lg_sp3', name:'Berry French 75',   e:'🫐', price:299, diet:'veg', tags:['celebrate','fresh','drinky'],desc:'Berry gin, fresh lemon and sparkling wine with gold edible sheet',     why:'celebrate'},
    ],

    // ── SIGNATURE COCKTAILS ───────────────────────────────────
    signature_cocktails: [
      {id:'lg_sc1', name:'Fruitful Sin',             e:'🍒', price:299, diet:'veg', tags:['hearty','celebrate','drinky'],desc:'Whisky, cherry, pomegranate, lime with blackberry and sage foamer', why:'celebrate'},
      {id:'lg_sc2', name:'Salted Popcorn G&T',       e:'🍿', price:299, diet:'veg', tags:['light','drinky'],             desc:'Gin and tonic with savory salted popcorn infused',                   why:'light,drinky'},
      {id:'lg_sc3', name:'Mango Mojito Boba',        e:'🥭', price:299, diet:'veg', tags:['fresh','drinky','celebrate'], desc:'Mint, lime, rum, mango and playful mango boba pearls',               why:'celebrate,light'},
      {id:'lg_sc4', name:'Passionfruit Mojito Boba', e:'💜', price:299, diet:'veg', tags:['fresh','drinky','celebrate'], desc:'Passionfruit, mint, lime, white rum and bursting boba pearls',       why:'celebrate,light'},
      {id:'lg_sc5', name:'Garden City',              e:'🌿', price:299, diet:'veg', tags:['light','fresh','drinky'],     desc:'Gin, matcha tea, thyme, lime juice with a splash of tonic',          why:'light,drinky'},
    ],

    // ── LIIT COLLECTION ──────────────────────────────────────
    liit: [
      {id:'lg_lt1', name:'Tropical Retreat',    e:'🥥', price:299, diet:'veg', tags:['celebrate','drinky'],     desc:'Coconut rum, coconut water and LIIT with vegan aquafaba',            why:'celebrate,drinky'},
      {id:'lg_lt2', name:'Pineapple Express',   e:'🍍', price:299, diet:'veg', tags:['fresh','drinky'],         desc:'Pineapple, tamarind and LIIT — sweet, tangy getaway',                why:'drinky'},
      {id:'lg_lt3', name:'Mango Mirage',        e:'🥭', price:299, diet:'veg', tags:['fresh','celebrate','drinky'],desc:'LIIT with fresh mango purée, lime and soda',                       why:'celebrate,drinky'},
      {id:'lg_lt4', name:'Long Island Iced Tea',e:'🍋', price:299, diet:'veg', tags:['celebrate','drinky','hearty'],desc:'Vodka, gin, rum, tequila, triple sec, lemon and cola — classic',  why:'celebrate,drinky'},
      {id:'lg_lt5', name:'Bullfrog',            e:'🐸', price:299, diet:'veg', tags:['spicy','drinky','celebrate'],desc:'Tropical fruit juices and LIIT with a hint of spice',             why:'celebrate,drinky'},
      {id:'lg_lt6', name:'Berry Riot',          e:'🍓', price:299, diet:'veg', tags:['fresh','celebrate','drinky'],desc:'Strawberry, raspberry and blueberry purée layered into LIIT',     why:'celebrate,drinky'},
      {id:'lg_lt7', name:'Long Beach Iced Tea', e:'🏖️', price:299, diet:'veg', tags:['celebrate','drinky'],    desc:'Vodka, gin, rum, tequila, triple sec, lemon and cranberry',          why:'celebrate,drinky'},
    ],

    // ── GARNISH (CLASSICS) ────────────────────────────────────
    classics: [
      {id:'lg_cl1', name:'Whiskey Sour',   e:'🥃', price:299, diet:'veg', tags:['hearty','drinky'],       desc:'Whiskey, lemon, simple syrup and egg white — smooth and tangy',       why:'hearty,drinky'},
      {id:'lg_cl2', name:'Margarita',      e:'🍋', price:299, diet:'veg', tags:['fresh','drinky'],         desc:'Tequila, triple sec, lime with a salted rim',                         why:'light,drinky'},
      {id:'lg_cl3', name:'Cosmopolitan',   e:'🍸', price:299, diet:'veg', tags:['light','celebrate'],      desc:'Vodka, triple sec, cranberry and lime — chic and tart',               why:'celebrate,light'},
      {id:'lg_cl4', name:'Paloma',         e:'🍊', price:299, diet:'veg', tags:['fresh','drinky'],         desc:'Tequila, lime and grapefruit soda with a salted rim',                 why:'light,drinky'},
      {id:'lg_cl5', name:'Bloody Mary',    e:'🍅', price:299, diet:'veg', tags:['spicy','drinky'],         desc:'Vodka, tomato juice, worcestershire, tabasco and citrus',             why:'spicy,drinky'},
      {id:'lg_cl6', name:'Clover Club',    e:'🌸', price:299, diet:'veg', tags:['light','celebrate'],      desc:'Gin, lemon, raspberry syrup and egg white — frothy and tart',         why:'celebrate,light'},
    ],

    // ── BAR BITES (pairs with drinks) ─────────────────────────
    bar_bites: [
      {id:'lg_bb1', name:'French Fries',              e:'🍟', price:229, diet:'veg', tags:['drinky','light','veg'], desc:'Salt & pepper or peri peri dusted fries',          why:'drinky,light'},
      {id:'lg_bb2', name:'Loaded Nachos',             e:'🌮', price:329, diet:'veg', tags:['drinky','sharing'],     desc:'Beans, cheese sauce, salsa and jalapeños',         why:'drinky,veg'},
      {id:'lg_bb3', name:'Chicken Loaded Nachos',     e:'🌮', price:379, diet:'nonveg', tags:['drinky','sharing'], desc:'Nachos with grilled chicken and jalapeños',         why:'drinky'},
      {id:'lg_bb4', name:'Crispy Chicken Pops',       e:'🍗', price:379, diet:'nonveg', tags:['drinky','crispy'],  desc:'Bite-sized golden fried chicken, sriracha mayo',   why:'drinky'},
      {id:'lg_bb5', name:'Chutney Podi Peanut Masala',e:'🥜', price:229, diet:'veg',    tags:['drinky','light'],  desc:'Spiced roasted peanuts',                            why:'drinky,light'},
    ],
  },
}

const LEGACY_POPULAR = {
  most_ordered: [
    {id:'lg_ts2', badge:'🔥 Most Ordered'},   // CSK Thala Chicken 65
    {id:'lg_co11',badge:'🔥 Most Ordered'},   // Chicken Wings Peri Peri
    {id:'lg_lt4', badge:'🔥 Most Ordered'},   // Long Island Iced Tea
    {id:'lg_si9', badge:'🔥 Most Ordered'},   // Chicken 65 (South Indian)
    {id:'lg_nv3', badge:'🔥 Most Ordered'},   // Chicken Loaded Nachos
  ],
  chefs_pick: [
    {id:'lg_ts8', badge:'Chef Pick'},          // LSG Nawab Knock Galouti
    {id:'lg_ts5', badge:'Chef Pick'},          // SRH Orange Army Gosht
    {id:'lg_ac1', badge:'Chef Pick'},          // Namma Legacy Namma Brew
    {id:'lg_ds2', badge:'Chef Pick'},          // Paris-Jaipur Brulee Tart
    {id:'lg_si15',badge:'Chef Pick'},          // Kodava Chilli Pork
  ],
  trending: [
    {id:'lg_ts1', badge:'✨ Trending'},        // RCB King Kohli Kebab
    {id:'lg_sc3', badge:'✨ Trending'},        // Mango Mojito Boba
    {id:'lg_co6', badge:'✨ Trending'},        // Kunafa Paneer
    {id:'lg_ds3', badge:'✨ Trending'},        // Legacy Kunafa Jamun Cheesecake
    {id:'lg_pc2', badge:'✨ Trending'},        // Mango Pop Picante
  ],
}

const LEGACY_DRINK_HINT = {
  spicy:     '🌶️ Going bold? Try a Picante cocktail — Harbor Heat or Mango Pop Picante cuts right through the spice.',
  light:     '🌿 Keeping it light? Jasmine Mirage or Garden City are the move.',
  hearty:    '🍖 Big flavours tonight? Go for a LIIT — Long Beach Iced Tea or Long Island for the full hit.',
  celebrate: '🎉 Celebrating? Namma Legacy Namma Brew or Berry French 75 — both are showstoppers.',
  drinky:    '🍹 Drinks night at Legacy! Try the Mango Mojito Boba or Blue Ocean.',
  veg:       '🌱 Great veg pairings — Blue Ocean, Pandan Fizz or a classic Cosmopolitan.',
  default:   "Here's what pairs perfectly with your vibe tonight.",
}

window.MESA_RESTO_CONFIG = {
  id:       'legacy-rrnagar',
  name:     'Legacy',
  tagline:  'Where Cricket & Cuisine Meet',
  location: 'RR Nagar, Bangalore',
  accent:   '#C9943A',
  menu:     LEGACY_MENU,
  popular:  LEGACY_POPULAR,
  drinkHint:LEGACY_DRINK_HINT,
name:     'Legacy',
    tagline:  'Where Cricket & Cuisine Meet',
    location: 'RR Nagar, Bangalore',
    accent:   '#C9943A',
    menu:     LEGACY_MENU,
    popular:  LEGACY_POPULAR,
    cuisines: [
      {cu:'ipl_special', label:'IPL Specials',   sub:'Team-themed signature dishes'},
      {cu:'southindian', label:'South Indian',   sub:'Flavours of the South, Ghee Roast'},
      {cu:'continental', label:'Continental',    sub:'Mezze, Toasts, Croquettes'},
      {cu:'northindian', label:'North Indian',   sub:'Tikka, Chaap, Kebabs, Tandoor'},
      {cu:'seafood',     label:'Seafood',         sub:'Prawns, Fish Finger, Tawa Fry'},
      {cu:'cocktails',   label:'Cocktails Only',  sub:'Skip food, just drinks'},
    ],

    // ── Course mapping ────────────────────────────────────────
    courseMap: {
      starters: ['team_specials','veg_starters','nonveg_starters','soups_ramen',
                 'salads','south_indian','continental','tandoor'],
      mains:    [],  // Legacy has no separate mains section — all are starters/sharing
      desserts: ['desserts'],
    },
    // ── Drink tabs ────────────────────────────────────────────
    drinkTabs: [
      {key:'artisanal_cocktails',  label:'🍸 Artisanal'},
      {key:'picante',              label:'🌶️ Picante'},
      {key:'sparkling',            label:'🥂 Sparkling'},
      {key:'signature_cocktails',  label:'✨ Signature'},
      {key:'liit',                 label:'🍋 LIIT'},
      {key:'classics',             label:'🍹 Classics'},
      {key:'bar_bites',            label:'🍢 Bar Bites'},
    ],
    // ── Popular tonight picks ─────────────────────────────────
    quickPicks: {
      starters: [
        {id:'lg_ts2',  badge:'Most Ordered',   why:'CSK Thala Chicken 65 — crowd favourite'},
        {id:'lg_co11', badge:'Most Ordered',   why:'Peri Peri Chicken Wings'},
        {id:'lg_si9',  badge:"Chef's Special", why:'Chicken 65 — South Indian style'},
      ],
      mains: [],
      desserts: [
        {id:'lg_ds3', badge:'Most Ordered',   why:'Legacy Kunafa Jamun Cheesecake'},
        {id:'lg_ds2', badge:"Chef's Special", why:'Paris-Jaipur Brulee Tart'},
        {id:'lg_ds1', badge:'Trending',       why:'Classic Tiramisu'},
      ],
    },
    // ── Food items shown on drinks screen ─────────────────────
    drinksPairingIds: new Set([
      'lg_bb1','lg_bb2','lg_bb3','lg_bb4','lg_bb5',
      'lg_vs2','lg_vs3','lg_vs8','lg_nv1','lg_nv4',
      'lg_ts6','lg_si1',
    ]),
    // ── Bar bites pairing per drink style ─────────────────────
    barBitesPairing: {
      artisanal_cocktails: ['lg_bb4','lg_bb2','lg_co11','lg_vs2'],
      picante:             ['lg_nv4','lg_bb4','lg_vs9','lg_co11'],
      sparkling:           ['lg_bb2','lg_vs6','lg_co7','lg_sl1'],
      signature_cocktails: ['lg_bb3','lg_vs4','lg_co6','lg_nv4'],
      liit:                ['lg_bb4','lg_bb1','lg_nv3','lg_vs7'],
      classics:            ['lg_bb5','lg_vs8','lg_nv1','lg_co2'],
    },
    drinkHint: LEGACY_DRINK_HINT,

    // ── Drink style → tab key mapping ─────────────────────────
    // Maps the 4 universal drink moods to Legacy's actual tab keys
    styleToTab: {
      beer:     'liit',                  // LIIT is Legacy's closest to beer/long drinks
      cocktail: 'artisanal_cocktails',   // Main cocktail tab
      spirits:  'signature_cocktails',   // Signature cocktails = spirits-led
      mocktail: 'sparkling',             // Sparkling cocktails = non-alcoholic/lighter
    },
    // ── Per style+flavor: which Legacy item IDs to boost ──────
    drinkScoreMap: {
      'cocktail+sweet':   ['lg_ac1','lg_sc3','lg_sc4','lg_lt3','lg_sp1'],
      'cocktail+sour':    ['lg_pc1','lg_pc2','lg_pc3','lg_cl2','lg_cl4'],
      'cocktail+herby':   ['lg_sc5','lg_sc2','lg_sp1','lg_ac3','lg_cl6'],
      'cocktail+spicy':   ['lg_pc1','lg_pc2','lg_pc3','lg_cl5','lg_sc1'],
      'spirits+neat':     ['lg_cl1','lg_cl2','lg_cl3','lg_sc1','lg_ac4'],
      'spirits+mixed':    ['lg_sc1','lg_ac4','lg_ac5','lg_cl1','lg_lt4'],
      'spirits+long':     ['lg_lt4','lg_lt7','lg_lt5','lg_ac2','lg_sp2'],
      'spirits+shots':    ['lg_cl3','lg_cl4','lg_ac6','lg_sc1','lg_cl1'],
      'beer+light':       ['lg_sp2','lg_sp1','lg_ac2','lg_lt2','lg_sc2'],
      'beer+fruity':      ['lg_lt3','lg_lt2','lg_ac3','lg_sp3','lg_sc3'],
      'beer+strong':      ['lg_lt4','lg_lt7','lg_ac6','lg_pc3','lg_cl1'],
      'beer+dark':        ['lg_ac4','lg_ac5','lg_sc1','lg_lt4','lg_cl1'],
      'mocktail+cool':    ['lg_sp1','lg_sp2','lg_sc2','lg_ac2','lg_ac3'],
      'mocktail+tangy':   ['lg_sp3','lg_pc2','lg_pc3','lg_sp1','lg_ac2'],
      'mocktail+floral':  ['lg_sp2','lg_sp1','lg_sc4','lg_ac3','lg_sp3'],
      'mocktail+spicy':   ['lg_pc1','lg_pc2','lg_pc3','lg_cl5','lg_sc5'],
    },
    // ── Per style+flavor: which food IDs to show as bar bites ─
    drinkBitesMap: {
      'cocktail+sweet':   ['lg_bb2','lg_bb4','lg_vs6','lg_co6'],
      'cocktail+sour':    ['lg_bb4','lg_bb3','lg_co11','lg_vs9'],
      'cocktail+herby':   ['lg_co7','lg_bb2','lg_sl1','lg_bb5'],
      'cocktail+spicy':   ['lg_bb4','lg_co11','lg_nv4','lg_vs9'],
      'spirits+neat':     ['lg_bb5','lg_vs8','lg_nv1','lg_co2'],
      'spirits+mixed':    ['lg_bb4','lg_co11','lg_nv3','lg_co12'],
      'spirits+long':     ['lg_bb1','lg_bb2','lg_vs7','lg_co1'],
      'spirits+shots':    ['lg_bb3','lg_bb4','lg_nv4','lg_co11'],
      'beer+light':       ['lg_bb1','lg_bb5','lg_vs2','lg_co1'],
      'beer+fruity':      ['lg_bb2','lg_vs6','lg_sl1','lg_bb1'],
      'beer+strong':      ['lg_bb4','lg_bb3','lg_co11','lg_nv4'],
      'beer+dark':        ['lg_bb5','lg_nv1','lg_bb4','lg_vs8'],
      'mocktail+cool':    ['lg_bb2','lg_sl1','lg_vs6','lg_bb1'],
      'mocktail+tangy':   ['lg_bb5','lg_sl3','lg_vs9','lg_co7'],
      'mocktail+floral':  ['lg_sl1','lg_bb2','lg_co6','lg_vs6'],
      'mocktail+spicy':   ['lg_bb4','lg_co11','lg_nv4','lg_pc1'],
    },
    // ── Flavor options shown for each drink style ────────────
    drinkFlavorOptions: {
      beer: [
        {val:'fruity', e:'🍋', lbl:'Fruity & Sweet',  sub:'LIIT, mango, pineapple'},
        {val:'strong', e:'💪', lbl:'Strong & Long',   sub:'Long Island, Bullfrog'},
        {val:'light',  e:'🌾', lbl:'Light & Sparkling',sub:'Mimosa, Pandan Fizz'},
        {val:'dark',   e:'🍂', lbl:'Rich & Boozy',    sub:'Coffee, hazelnut, cream'},
      ],
      cocktail: [
        {val:'sweet',  e:'🍓', lbl:'Fruity & Sweet',  sub:'Mango Mojito, Berry Riot'},
        {val:'sour',   e:'🌶️', lbl:'Spicy Picante',  sub:'Harbor Heat, Mango Pop'},
        {val:'herby',  e:'🌿', lbl:'Fresh & Herby',   sub:'Garden City, Pandan Fizz'},
        {val:'spicy',  e:'🔥', lbl:'Bold & Smoky',    sub:'Fruitful Sin, Clover Club'},
      ],
      spirits: [
        {val:'neat',   e:'🥃', lbl:'Classics',        sub:'Whiskey Sour, Cosmo, Paloma'},
        {val:'mixed',  e:'🍸', lbl:'Signature',       sub:'Fruitful Sin, Garden City'},
        {val:'long',   e:'🫧', lbl:'LIIT Collection', sub:'Long Island, Berry Riot'},
        {val:'shots',  e:'🎯', lbl:'Artisanal',       sub:'Pearl of Night, Tiramisu'},
      ],
      mocktail: [
        {val:'cool',   e:'❄️', lbl:'Cooling & Fizzy', sub:'Pandan Fizz, Mimosa'},
        {val:'tangy',  e:'🍊', lbl:'Tangy & Citrus',  sub:'Berry French 75, Sparkling'},
        {val:'floral', e:'🌺', lbl:'Floral & Light',  sub:'Blue Ocean, Jasmine Mirage'},
        {val:'spicy',  e:'🌶️', lbl:'Spicy Picante',  sub:"Sailor's Paradise, Harbor Heat"},
      ],
    },
    barFirst: false,
    cuisineBySubcat: {
      team_specials:'indian',   veg_starters:'global',
      nonveg_starters:'global', soups_ramen:'global',
      salads:'global',          south_indian:'southindian',
      continental:'continental',tandoor:'indian',
      desserts:'global',
    },
};
