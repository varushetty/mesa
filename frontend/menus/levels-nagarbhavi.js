// ═══════════════════════════════════════════════════════════════
// LEVELS MICROBREWERY & KITCHEN — Nagarbhavi, Bangalore
// Complete restaurant config — loaded ONLY for this restaurant
// 
// About Levels:
// - Full-service microbrewery + kitchen at 89, 6th Cross, Nagarbhavi
// - Known for: Craft beers (Belgian Wit, Kiwi Beer, Hefeweizen),
//   LFC (Levels Fried Chicken), Peri Peri wings, Butter Chicken,
//   extensive spirits list, craft cocktails, live music nights
// - Avg spend: ₹2,000 for two with alcohol
// - Crowd: young professionals, college groups, craft beer fans
// - Popular by reviews: LFC, Peri Peri wings, Mojito, Belgian Wit,
//   Chicken Biryani, Butter Chicken, Kiwi Beer, Whiskey Sour
// ═══════════════════════════════════════════════════════════════

const LEVELS_MENU = {
  food: {
    // ── BAR SNACKS (quick bites with drinks) ─────────────────
    bar_snacks: [
      {id:'lv_bs1', name:'Roasted Peanut Masala',        e:'🥜', price:149, diet:'veg',    seafood:false,redmeat:false, tags:['drinky','light','veg'],    desc:'Dry roast peanuts mixed with onions, tomato, coriander and chilli',    why:'drinky,light'},
      {id:'lv_bs2', name:'Masala Papad',                 e:'🫓', price:149, diet:'veg',    seafood:false,redmeat:false, tags:['drinky','light','veg'],    desc:'Crisp papad with tomato, onion, lemon and fresh coriander',            why:'drinky,light'},
      {id:'lv_bs3', name:'French Fries',                 e:'🍟', price:199, diet:'veg',    seafood:false,redmeat:false, tags:['drinky','light','veg'],    desc:'Classic golden fries served with mayonnaise',                          why:'drinky,light'},
      {id:'lv_bs4', name:'Peri-Peri Fries',              e:'🍟', price:219, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','drinky','veg'],    desc:'Fries dusted with Levels peri-peri spice, served with mayo',           why:'spicy,drinky'},
      {id:'lv_bs5', name:'Herbed Wedges',                e:'🥔', price:229, diet:'veg',    seafood:false,redmeat:false, tags:['light','drinky','veg'],   desc:'Potato wedges with aromatic garlic butter and herbs',                  why:'drinky,light'},
      {id:'lv_bs6', name:'Garlic Bread',                 e:'🥖', price:179, diet:'veg',    seafood:false,redmeat:false, tags:['light','drinky','veg'],   desc:'Homemade garlic bread — crispy outside, soft buttery inside',          why:'light,veg'},
      {id:'lv_bs7', name:'Cheesy Garlic Bread',          e:'🧀', price:229, diet:'veg',    seafood:false,redmeat:false, tags:['hearty','drinky','veg'],  desc:'Garlic bread loaded with cheese, chilli and aromatic butter',          why:'hearty,veg'},
      {id:'lv_bs8', name:'Crispy Fried Onion Rings',     e:'🧅', price:249, diet:'veg',    seafood:false,redmeat:false, tags:['drinky','crispy','veg'],  desc:'Panko-crumbed onion rings fried golden, served with mayo dip',         why:'drinky,veg'},
      {id:'lv_bs9', name:'Giant Wheel',                  e:'🎡', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['sharing','drinky','veg'], desc:'Potato wedges, French fries, vegetable nuggets, cocktail samosa',      why:'drinky,veg', sharing:true},
      {id:'lv_bs10',name:'Jalapeño Corn Cheese Balls',   e:'🌽', price:269, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','drinky','veg'],   desc:'Jalapeño and cheese dumplings fried to perfection, dipping sauce',     why:'spicy,drinky'},
      {id:'lv_bs11',name:'Double Loaded Baked Bean Nachos',e:'🌮',price:299, diet:'veg',   seafood:false,redmeat:false, tags:['sharing','hearty','veg'], desc:'Nachos with cheese sauce, spicy salsa, refried beans, jalapeños',     why:'hearty,veg', sharing:true},
    ],

    // ── VEG STARTERS ─────────────────────────────────────────
    veg_starters: [
      {id:'lv_vs1', name:'Spicy Veg Cilantro',           e:'🌿', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','light','veg'],    desc:'Exotic mixed vegetables tossed in a cilantro sauce',                   why:'spicy,veg'},
      {id:'lv_vs2', name:'Mutter Aur Cheese Ki Tike',    e:'🧀', price:319, diet:'veg',    seafood:false,redmeat:false, tags:['light','veg'],            desc:'Green peas and herb patties stuffed with cheese, shallow fried',       why:'light,veg'},
      {id:'lv_vs3', name:'Corn Cheese Kurkure',          e:'🌽', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['crispy','drinky','veg'],  desc:'Corn, potato and cheese in normal leaves — crispy and golden',         why:'drinky,veg'},
      {id:'lv_vs4', name:'Cauliflower Manchurian',       e:'🥦', price:319, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','crispy','veg'],   desc:'Crispy cauliflower tossed in sweet and tangy chilli sauce',            why:'spicy,veg'},
      {id:'lv_vs5', name:'Sweet & Spicy Baby Corn',      e:'🌽', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','drinky','veg'],   desc:'Crispy fried baby corn in tangy sweet sauce with bell pepper and onion', why:'spicy,drinky'},
      {id:'lv_vs6', name:'Paneer Tikka',                 e:'🧀', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','hearty','veg'],   desc:'Tandoor-grilled cottage cheese skewers',                               why:'spicy,veg'},
      {id:'lv_vs7', name:'Tandoori Mushroom',            e:'🍄', price:319, diet:'veg',    seafood:false,redmeat:false, tags:['smoky','light','veg'],    desc:'Smoky marinated mushrooms from the tandoor',                           why:'light,veg'},
      {id:'lv_vs8', name:'Paneer Corn Sheekh',           e:'🧀', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','hearty','veg'],   desc:'Minced paneer and fresh corn skewered in tandoor with mild spices',    why:'spicy,veg'},
      {id:'lv_vs9', name:'Crispy Lotus Stem',            e:'🪷', price:329, diet:'veg',    seafood:false,redmeat:false, tags:['crispy','drinky','veg'],  desc:'Crispy lotus stem tossed in hunan, chilli, schezwan or manchurian',   why:'drinky,veg'},
      {id:'lv_vs10',name:'Hariyali Paneer Tikka',        e:'🟢', price:369, diet:'veg',    seafood:false,redmeat:false, tags:['light','aromatic','veg'], desc:'Cottage cheese marinated in coriander and green chilli paste, tandoor', why:'light,veg'},
      {id:'lv_vs11',name:'Mushroom Shumai',              e:'🥟', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['light','umami','veg'],    desc:'Steamed dim sum filled with savory mushrooms and water chestnuts',     why:'light,veg'},
      {id:'lv_vs12',name:'Jalapeño Cheese Poppers',      e:'🌶️',price:349, diet:'veg',   seafood:false,redmeat:false, tags:['spicy','drinky','veg'],   desc:'Stuffed jalapeños with cream cheese — crispy, creamy, fiery',         why:'spicy,drinky'},
    ],

    // ── NON-VEG STARTERS ─────────────────────────────────────
    nonveg_starters: [
      {id:'lv_nv1', name:'Chicken Drums of Heaven',      e:'🍗', price:449, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','hearty','drinky'],desc:'Crispy fried drumettes coated in spicy glaze — crowd favourite',       why:'spicy,drinky'},
      {id:'lv_nv2', name:'Peri Peri Chicken Wings',      e:'🍗', price:429, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','drinky'],         desc:'Spicy grilled wings with African peri peri spices',                    why:'spicy,drinky'},
      {id:'lv_nv3', name:'Fish Fingers',                 e:'🐟', price:469, diet:'nonveg', seafood:true, redmeat:false, tags:['crispy','light','drinky'],desc:'Golden crispy fish fingers served with tartar sauce',                  why:'light,drinky'},
      {id:'lv_nv4', name:'LFC – Levels Fried Chicken',   e:'🍗', price:399, diet:'nonveg', seafood:false,redmeat:false, tags:['crispy','hearty','drinky'],desc:"Classic twist on well-seasoned Kentucky fried chicken — Levels' signature", why:'hearty,drinky'},
      {id:'lv_nv5', name:'Beijing Style Chicken Wings',  e:'🍗', price:419, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','drinky'],         desc:'Fried wings tossed in homemade Beijing sauce',                         why:'spicy,drinky'},
      {id:'lv_nv6', name:'Chilli Chicken',               e:'🍗', price:389, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','drinky'],         desc:'Diced chicken with green capsicum, spring onion, dark soy and chilli', why:'spicy,drinky'},
      {id:'lv_nv7', name:'Chicken Tenderloin',           e:'🍗', price:429, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','crispy'],         desc:'Spicy pepper sauce, tender chilli, oregano herbs dip',                 why:'spicy'},
      {id:'lv_nv8', name:'Peri Peri Chicken',            e:'🍗', price:399, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','hearty'],         desc:'Juicy morsels of chicken marinated and coated with peri peri pepper',  why:'spicy,hearty'},
      {id:'lv_nv9', name:'Classic Chicken Tikka',        e:'🍗', price:409, diet:'nonveg', seafood:false,redmeat:false, tags:['hearty','smoky'],         desc:'Classic yogurt-based red masala tandoori chicken',                     why:'hearty'},
      {id:'lv_nv10',name:'Dynamite Prawns',              e:'🦐', price:499, diet:'nonveg', seafood:true, redmeat:false, tags:['spicy','hearty'],         desc:'Crispy fried prawns tossed in a dynamite spicy sauce',                 why:'spicy,hearty'},
      {id:'lv_nv11',name:'Jalpari Jhinga',               e:'🦐', price:519, diet:'nonveg', seafood:true, redmeat:false, tags:['spicy','hearty'],         desc:'Prawns marinated in classic red masala, served with bamboo sticks',    why:'spicy,hearty'},
      {id:'lv_nv12',name:'Chicken 65',                   e:'🍗', price:389, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','crispy'],         desc:'Crispy fried chicken in a tempering of curry leaf, curd and spices',   why:'spicy'},
      {id:'lv_nv13',name:'Andhra Style Chilli Chicken',  e:'🍗', price:399, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','hearty'],         desc:'Chicken in green chilli and paste topped with fried curry leaves',     why:'spicy,hearty'},
      {id:'lv_nv14',name:'Ghee Roast Chicken Wings',     e:'🍗', price:449, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','rich','hearty'],  desc:'Fiery wings in spicy South Indian ghee roast — served with Kerala paratha', why:'spicy,hearty'},
    ],

    // ── SOUPS ────────────────────────────────────────────────
    soups: [
      {id:'lv_sp1', name:'Spicy Corn Soup',              e:'🌽', price:199, diet:'veg',    seafood:false,redmeat:false, tags:['light','spicy','veg'],    desc:'Corn kernels in aromatic stock with hints of chilli',                  why:'light,veg'},
      {id:'lv_sp2', name:'Lemon Coriander Soup',         e:'🍋', price:199, diet:'veg',    seafood:false,redmeat:false, tags:['light','fresh','veg'],    desc:'Clear soup with aromatic stock, fresh lemon and coriander',            why:'light,veg'},
      {id:'lv_sp3', name:'Hot & Sour Soup',              e:'🥣', price:199, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','light','veg'],    desc:'Thick broth with chilli paste, vinegar and hints of soy',              why:'spicy,light'},
      {id:'lv_sp4', name:'Manchow Soup (Veg)',           e:'🍜', price:199, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','umami','veg'],    desc:'Thick soup, light soy, garlic, coriander with crispy noodles',         why:'spicy,veg'},
      {id:'lv_sp5', name:'Manchow Soup (Chicken)',       e:'🍜', price:229, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','umami'],          desc:'Chicken Manchow with garlic, coriander and crispy noodles',            why:'spicy'},
      {id:'lv_sp6', name:'Hot & Sour Chicken Soup',      e:'🥣', price:229, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','light'],          desc:'Thick chicken broth with chilli paste, vinegar and soy',               why:'spicy'},
    ],

    // ── SALADS ───────────────────────────────────────────────
    salads: [
      {id:'lv_sl1', name:'Garden Green Salad',           e:'🥗', price:249, diet:'veg',    seafood:false,redmeat:false, tags:['light','fresh','veg'],    desc:'Tomatoes, cucumber, carrot and onion with lemon wedge',                why:'light,veg'},
      {id:'lv_sl2', name:'Greek Salad',                  e:'🧀', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['light','fresh','veg'],    desc:'Cucumber, bell peppers, crumbled feta, olives, lemon olive oil',       why:'light,veg'},
      {id:'lv_sl3', name:'Caesar Salad',                 e:'🥗', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['light','fresh','veg'],    desc:'Lettuce, lime, olive oil, parmesan, black pepper and croutons',        why:'light,veg'},
      {id:'lv_sl4', name:'Pasta Salad with Pesto (Veg)', e:'🍝', price:319, diet:'veg',    seafood:false,redmeat:false, tags:['light','fresh','veg'],    desc:'Penne pasta, lettuce, peanut, parmesan in basil pesto dressing',       why:'light,veg'},
      {id:'lv_sl5', name:'Greek Salad Chicken',          e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['light','fresh'],          desc:'Greek salad with chicken, cucumber, feta, olives, oregano',            why:'light'},
      {id:'lv_sl6', name:'Pineapple & Cucumber Salad',   e:'🍍', price:269, diet:'veg',    seafood:false,redmeat:false, tags:['light','fresh','veg'],    desc:'Fresh lettuce with cucumber, pineapple and balsamic',                  why:'light,veg'},
    ],

    // ── MAINS: PIZZA ─────────────────────────────────────────
    pizza: [
      {id:'lv_pz1', name:'Mexicano Pizza',               e:'🍕', price:429, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','hearty','veg'],   desc:'Corn, bell pepper, tomato, red bean, olive, jalapeño, fresh tomato sauce', why:'spicy,veg'},
      {id:'lv_pz2', name:'BBQ Mushroom Pizza',           e:'🍕', price:399, diet:'veg',    seafood:false,redmeat:false, tags:['smoky','hearty','veg'],   desc:'Grilled mushroom with fresh tomato sauce and cheese',                  why:'hearty,veg'},
      {id:'lv_pz3', name:'Portugues Cottage Cheese Pizza',e:'🍕',price:449, diet:'veg',   seafood:false,redmeat:false, tags:['hearty','spicy','veg'],   desc:'Fresh tomato sauce, cottage cheese, bell pepper, onion, chilli',       why:'hearty,veg'},
      {id:'lv_pz4', name:'Peri-Peri Chicken Pizza',      e:'🍕', price:499, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','hearty'],         desc:'Chicken cubes in Portuguese chilli sauce, fresh tomato sauce, cheese', why:'spicy,hearty'},
      {id:'lv_pz5', name:'Basil Chicken Pizza',          e:'🍕', price:479, diet:'nonveg', seafood:false,redmeat:false, tags:['hearty','aromatic'],      desc:'Chicken in basil sauce, loaded with cheese, fresh tomato base',        why:'hearty'},
      {id:'lv_pz6', name:'BBQ Hawaiian Pizza',           e:'🍕', price:469, diet:'nonveg', seafood:false,redmeat:false, tags:['sweet','hearty'],         desc:'Juicy chicken, pineapple, BBQ sauce, loaded with cheese',              why:'hearty'},
    ],

    // ── MAINS: PASTA ─────────────────────────────────────────
    pasta: [
      {id:'lv_pa1', name:'Pasta Alfredo (Veg)',          e:'🍝', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['rich','hearty','veg'],    desc:'Cream reduction sauce with hints of pepper',                           why:'hearty,veg'},
      {id:'lv_pa2', name:'Pasta Arrabiata (Veg)',        e:'🍝', price:329, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','hearty','veg'],   desc:'Fresh tomato churned with celery, leeks and chilli flakes',            why:'spicy,veg'},
      {id:'lv_pa3', name:'Pasta Pesto (Veg)',            e:'🍝', price:359, diet:'veg',    seafood:false,redmeat:false, tags:['light','aromatic','veg'], desc:'Hand-pounded nuts, fresh basil, garlic and olive oil',                 why:'light,veg'},
      {id:'lv_pa4', name:'Pasta Alfredo Chicken',        e:'🍝', price:399, diet:'nonveg', seafood:false,redmeat:false, tags:['rich','hearty'],          desc:'Cream reduction sauce with hints of pepper, chicken',                  why:'hearty'},
      {id:'lv_pa5', name:'Pasta Arrabiata Chicken',      e:'🍝', price:379, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','hearty'],         desc:'Fresh tomato churned with chicken, celery and chilli flakes',          why:'spicy,hearty'},
      {id:'lv_pa6', name:'Pasta Arrabiata Prawns',       e:'🍝', price:449, diet:'nonveg', seafood:true, redmeat:false, tags:['spicy','hearty'],         desc:'Fresh tomato churned with prawns, celery and chilli flakes',           why:'spicy,hearty'},
      {id:'lv_pa7', name:'Pasta Funghi (Veg)',           e:'🍄', price:369, diet:'veg',    seafood:false,redmeat:false, tags:['rich','aromatic','veg'],  desc:'Creamy sauce with mushroom, permission cheese, parsley and white wine', why:'rich,veg'},
    ],

    // ── MAINS: BURGERS ───────────────────────────────────────
    burgers: [
      {id:'lv_br1', name:'Porto Pesto Burger',           e:'🍔', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['light','hearty','veg'],   desc:'Grilled paneer, portobello mushroom, mozzarella, basil pesto',         why:'hearty,veg'},
      {id:'lv_br2', name:'Red Bean Corn Burger',         e:'🍔', price:319, diet:'veg',    seafood:false,redmeat:false, tags:['hearty','veg'],            desc:'Patties of corn, bean and herbs with coleslaw and chilli mayo',        why:'hearty,veg'},
      {id:'lv_br3', name:'Kentucky Chicken Burger',      e:'🍔', price:379, diet:'nonveg', seafood:false,redmeat:false, tags:['crispy','hearty'],         desc:'Crisp chicken patty with cheese, ketchup, mustard, pickled onions',   why:'hearty'},
      {id:'lv_br4', name:'BBQ Chicken Burger',           e:'🍔', price:399, diet:'nonveg', seafood:false,redmeat:false, tags:['smoky','hearty'],          desc:'Chicken with BBQ sauce, pineapple, cheese and egg mayo',               why:'hearty'},
      {id:'lv_br5', name:'Golden Prawn Burger',          e:'🦐', price:449, diet:'nonveg', seafood:true, redmeat:false, tags:['hearty','rich'],           desc:'Golden fried prawns, coleslaw, caramelised onions, peri-peri mayo',    why:'hearty'},
    ],

    // ── MAINS: INDIAN ────────────────────────────────────────
    indian_mains: [
      {id:'lv_im1', name:'Butter Chicken',               e:'🍗', price:499, diet:'nonveg', seafood:false,redmeat:false, tags:['rich','hearty','comfort'], desc:'Tandoor-grilled chicken in in-house tomato gravy with butter and cream', why:'hearty,rich'},
      {id:'lv_im2', name:'Chicken Tikka Masala',         e:'🍗', price:479, diet:'nonveg', seafood:false,redmeat:false, tags:['rich','hearty'],           desc:'Charcoal-grilled chicken simmering in rich creamy tomato gravy',       why:'hearty'},
      {id:'lv_im3', name:'Paneer Butter Masala',         e:'🧀', price:429, diet:'veg',    seafood:false,redmeat:false, tags:['rich','hearty','veg'],     desc:'Rich tomato, cream and cashew gravy with cubes of cottage cheese',     why:'hearty,veg'},
      {id:'lv_im4', name:'Dal Makhani',                  e:'🫘', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['rich','hearty','veg'],     desc:'Black lentils cooked with tomato, ginger, garlic, cream and butter',   why:'hearty,veg'},
      {id:'lv_im5', name:'Kadai Paneer',                 e:'🧀', price:429, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','hearty','veg'],    desc:'Cottage cheese with garam masala, tomato and onions in a wok',        why:'spicy,veg'},
      {id:'lv_im6', name:'Palak Paneer',                 e:'🥬', price:399, diet:'veg',    seafood:false,redmeat:false, tags:['light','hearty','veg'],    desc:'Cottage cheese in spinach purée with garlic and fresh cream',          why:'hearty,veg'},
      {id:'lv_im7', name:'Mutton Rogan Josh',            e:'🍖', price:549, diet:'nonveg', seafood:false,redmeat:true,  tags:['rich','hearty','celebrate'],desc:'Kashmiri bone-in mutton cooked in its own stock with Indian spices',   why:'hearty,celebrate'},
      {id:'lv_im8', name:'Mangalore Chicken Curry',      e:'🍗', price:469, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','hearty'],          desc:'Mild spiced chicken curry made of coconut and red chilli',             why:'spicy,hearty'},
      {id:'lv_im9', name:'Prawn Gassi',                  e:'🦐', price:549, diet:'nonveg', seafood:true, redmeat:false, tags:['spicy','rich','hearty'],   desc:'Prawns in freshly ground coconut, tangy spicy coastal gravy',          why:'spicy,hearty'},
    ],

    // ── MAINS: BIRYANI & RICE ────────────────────────────────
    biryani_rice: [
      {id:'lv_bk1', name:'Chicken Biryani',              e:'🍚', price:479, diet:'nonveg', seafood:false,redmeat:false, tags:['hearty','comfort'],        desc:'Fragrant basmati rice with spiced chicken dum cooked',                 why:'hearty'},
      {id:'lv_bk2', name:'Mutton Dum Biryani',           e:'🍚', price:549, diet:'nonveg', seafood:false,redmeat:true,  tags:['rich','hearty','celebrate'],desc:'Slow-cooked mutton with fragrant basmati',                             why:'hearty,celebrate'},
      {id:'lv_bk3', name:'Subz Dum Biryani',             e:'🍚', price:399, diet:'veg',    seafood:false,redmeat:false, tags:['hearty','veg'],            desc:'Mixed vegetable dum biryani with aromatic spices',                     why:'hearty,veg'},
      {id:'lv_bk4', name:'Thai Green Curry (Chicken)',   e:'🍛', price:449, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','aromatic'],        desc:'Aromatic coconut curry with lemongrass, chilli, galangal, kaffir',    why:'spicy,hearty'},
      {id:'lv_bk5', name:'Kung Pao Chicken',             e:'🍗', price:469, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','hearty'],          desc:'Stir-fried chicken with peanuts and chillies in Sichuan style',       why:'spicy,hearty'},
      {id:'lv_bk6', name:'Paneer Lababdar',              e:'🧀', price:429, diet:'veg',    seafood:false,redmeat:false, tags:['rich','hearty','veg'],     desc:'Rich and creamy North Indian paneer curry with tomato and cream',      why:'hearty,veg'},
    ],

    // ── DESSERTS ─────────────────────────────────────────────
    desserts: [
      {id:'lv_ds1', name:'Kahlua Espresso Soaked Tiramisu',e:'☕',price:349,diet:'veg',    seafood:false,redmeat:false, tags:['sweet','celebrate','indulgent'],desc:'Bold flavours of Italy with espresso mascarpone and Kahlua',         why:'celebrate'},
      {id:'lv_ds2', name:'Chocolate Brownie',             e:'🍫', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','indulgent'],      desc:'Warm brownie with vanilla ice cream — always popular',                 why:'celebrate'},
      {id:'lv_ds3', name:'Saffron Milk Cake Slice',       e:'🍰', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','light'],          desc:'Exotic saffron milk cake infused with saffron and cardamom',           why:'light'},
      {id:'lv_ds4', name:'Chocolate Volcano',             e:'🌋', price:329, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','celebrate','indulgent'],desc:'Deep cocoa cake with milk chocolate ganache, white chocolate drizzle', why:'celebrate'},
      {id:'lv_ds5', name:'Tender Coconut Payasam',        e:'🥥', price:249, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','light'],          desc:'Traditional South Indian dessert — refreshing coconut milk payasam',   why:'light'},
      {id:'lv_ds6', name:'Gulab Jamun with Ice Cream',    e:'🍮', price:229, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','comfort'],        desc:'Classic Indian milk solids balls in sugar syrup, served with ice cream', why:'hearty'},
      {id:'lv_ds7', name:'Levels Chef Special Treat',     e:'⭐', price:369, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','celebrate','indulgent'],desc:'Pistachio soufflé with dark chocolate tart, warm chocolate sauce',   why:'celebrate'},
      {id:'lv_ds8', name:'Elaneer Payasam',               e:'🥥', price:229, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','light'],          desc:'Light and creamy South Indian cold dessert',                           why:'light'},
      {id:'lv_ds9', name:'Sizzling Hazelnut Hot Brownie', e:'🍫', price:329, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','indulgent'],      desc:'Rich fudgy chocolate brownie, hot sizzling plate, vanilla ice cream',  why:'celebrate'},
    ],
  },

  drinks: {
    // ── CRAFT BEERS ──────────────────────────────────────────
    craft_beers: [
      {id:'lv_cb1', name:'Belgian Wit',                  e:'🍺', price:299, diet:'veg', tags:['drinky','light','celebrate'],  desc:'Light refreshing wheat beer with citrus notes — house favourite',      why:'light,drinky'},
      {id:'lv_cb2', name:'Kiwi Beer',                    e:'🍺', price:349, diet:'veg', tags:['drinky','fruity','celebrate'],  desc:'Unique fruity brew with fresh kiwi essence — unique to Levels',        why:'drinky,celebrate'},
      {id:'lv_cb3', name:'Amber Ale',                    e:'🍺', price:329, diet:'veg', tags:['drinky','hearty'],              desc:'Malty, caramel-forward with a smooth finish',                          why:'hearty,drinky'},
      {id:'lv_cb4', name:'IPA',                          e:'🍺', price:379, diet:'veg', tags:['drinky','spicy','hearty'],      desc:'Hoppy, bold and beautifully bitter craft IPA',                         why:'spicy,drinky'},
      {id:'lv_cb5', name:'Hefeweizen',                   e:'🍺', price:319, diet:'veg', tags:['drinky','light','fruity'],      desc:'Classic German wheat beer with banana undertones',                     why:'light,drinky'},
      {id:'lv_cb6', name:'Stout',                        e:'🍺', price:349, diet:'veg', tags:['drinky','hearty','rich'],       desc:'Rich, dark and creamy craft stout with coffee notes',                  why:'hearty,drinky'},
    ],

    // ── CLASSIC COCKTAILS ────────────────────────────────────
    cocktails: [
      {id:'lv_ck1', name:'Levels Signature',             e:'🍸', price:449, diet:'veg', tags:['celebrate','drinky'],           desc:'Our secret house special cocktail — bold, balanced, unforgettable',    why:'celebrate,drinky'},
      {id:'lv_ck2', name:'Mojito',                       e:'🍹', price:399, diet:'veg', tags:['light','fresh','drinky'],       desc:'Classic rum with fresh mint and lime — always a crowd pleaser',        why:'light,drinky'},
      {id:'lv_ck3', name:'Whiskey Sour',                 e:'🥃', price:479, diet:'veg', tags:['hearty','drinky'],             desc:'Bourbon with lemon and sugar — smooth, balanced and satisfying',       why:'hearty,drinky'},
      {id:'lv_ck4', name:'Long Island Iced Tea',         e:'🍋', price:549, diet:'veg', tags:['celebrate','drinky','hearty'], desc:'The ultimate party starter — vodka, gin, rum, tequila, triple sec',   why:'celebrate,drinky'},
      {id:'lv_ck5', name:'Cosmopolitan',                 e:'🍸', price:429, diet:'veg', tags:['light','celebrate'],           desc:'Vodka with cranberry and lime — chic and refreshing',                  why:'celebrate,light'},
      {id:'lv_ck6', name:'Margarita',                    e:'🍋', price:449, diet:'veg', tags:['tangy','fresh','drinky'],      desc:'Tequila with triple sec and lime — zesty and smooth',                  why:'light,drinky'},
    ],

    // ── LONG DRINKS ──────────────────────────────────────────
    long_drinks: [
      {id:'lv_ld1', name:'Bullfrog',                     e:'🐸', price:499, diet:'veg', tags:['celebrate','drinky'],           desc:'Fierce mix of tequila, vodka, gin, rum, blue curacao — party in a glass', why:'celebrate,drinky'},
      {id:'lv_ld2', name:'Long Island Iced Tea (Classic)',e:'🍋', price:549, diet:'veg', tags:['celebrate','hearty','drinky'], desc:'Bold and boozy — vodka, gin, tequila, rum, triple sec, lemon, cola',   why:'celebrate,drinky'},
      {id:'lv_ld3', name:'Long Beach Iced Tea',          e:'🏖️', price:549, diet:'veg', tags:['celebrate','fruity','drinky'], desc:'Cranberry twist on LIIT — fruity, bold, refreshing',                   why:'celebrate,drinky'},
      {id:'lv_ld4', name:'Tokyo Iced Tea',               e:'🍵', price:499, diet:'veg', tags:['celebrate','light'],           desc:'Vodka, gin, rum, melon liqueur, lemon, fizzy lemonade',                why:'celebrate,light'},
      {id:'lv_ld5', name:'Lemongrass Sunset',            e:'🌅', price:449, diet:'veg', tags:['light','aromatic','fresh'],    desc:'Gin, vodka, homemade lemongrass liqueur, tonic water, rose wine',      why:'light,drinky'},
      {id:'lv_ld6', name:'Classic Tom Collins',          e:'🍋', price:429, diet:'veg', tags:['light','fresh','drinky'],      desc:'Crisp gin, fresh lemon juice, sugar, bubbly club soda',               why:'light,drinky'},
    ],

    // ── PITCHER COCKTAILS (for groups) ───────────────────────
    pitcher_cocktails: [
      {id:'lv_pc1', name:'Berry Peach Sangria',          e:'🍷', price:699, diet:'veg', tags:['fruity','celebrate','sharing'], desc:'Fruit-forward sangria — white wine, brandy, strawberries, orange, peach', why:'celebrate,drinky', sharing:true},
      {id:'lv_pc2', name:'Mojito Punch',                 e:'🍹', price:699, diet:'veg', tags:['light','fresh','sharing'],     desc:'Sparkling mojito punch — tropical rum, mint, pomegranate, club soda',  why:'celebrate,light', sharing:true},
      {id:'lv_pc3', name:'Passion Paradise Sangria',     e:'🍷', price:699, diet:'veg', tags:['fruity','celebrate','sharing'], desc:'Passionfruit, pineapple, orange, crisp apple in a pitcher',             why:'celebrate,drinky', sharing:true},
    ],

    // ── SINGLE MALTS & SPIRITS (premium) ─────────────────────
    spirits: [
      {id:'lv_sm1', name:'The Dalmore 12 Yrs',           e:'🥃', price:799, diet:'veg', tags:['hearty','celebrate','drinky'], desc:'Premium single malt Scotch whisky',                                    why:'celebrate,hearty'},
      {id:'lv_sm2', name:'Monkey Shoulder',              e:'🥃', price:599, diet:'veg', tags:['hearty','drinky'],             desc:'Smooth blended malt Scotch — approachable and versatile',              why:'hearty,drinky'},
      {id:'lv_sm3', name:'Johnnie Walker Black Label',   e:'🥃', price:649, diet:'veg', tags:['hearty','celebrate'],          desc:'Iconic 12-year aged blended Scotch whisky',                            why:'celebrate,hearty'},
      {id:'lv_sm4', name:'Jack Daniels',                 e:'🥃', price:549, diet:'veg', tags:['hearty','drinky'],             desc:'Tennessee whiskey — smooth, charcoal-mellowed classic',                why:'hearty,drinky'},
    ],

    // ── MOCKTAILS ────────────────────────────────────────────
    mocktails: [
      {id:'lv_mk1', name:'Peachy Melon Fizz',            e:'🍑', price:249, diet:'veg', tags:['fresh','light','drinky'],      desc:'Juicy watermelon, peach, zesty lime, mint, cooling club soda',         why:'light,drinky'},
      {id:'lv_mk2', name:'Kiwi Basil Breeze',            e:'🥝', price:249, diet:'veg', tags:['fresh','light'],               desc:'Apple juice, tangy kiwi, fresh basil — refreshing and balanced',       why:'light,drinky'},
      {id:'lv_mk3', name:'Orange Mojito',                e:'🍊', price:229, diet:'veg', tags:['fresh','light','drinky'],      desc:'Tropical orange mojito with mint, orange, lime and simple syrup',     why:'light,drinky'},
      {id:'lv_mk4', name:'Shirley Temple',               e:'🍒', price:229, diet:'veg', tags:['light','fresh','sweet'],       desc:'Classic ginger ale, grenadine and orange juice — fruity and fun',     why:'light,drinky'},
      {id:'lv_mk5', name:'Berry Bliss',                  e:'🫐', price:259, diet:'veg', tags:['fruity','light','fresh'],      desc:'Mixed berries, zesty lime and sparkling water — sweet and tangy',     why:'light,drinky'},
      {id:'lv_mk6', name:'Mango Mint Cooler',            e:'🥭', price:249, diet:'veg', tags:['fresh','light','drinky'],      desc:'Fresh mint, juicy mango, rich cream — tropical and cooling',           why:'light,drinky'},
    ],

    // ── BAR BITES (food paired with drinks) ──────────────────
    bar_bites: [
      {id:'lv_bb1', name:'Roasted Peanut Masala',        e:'🥜', price:149, diet:'veg',    tags:['drinky','light','veg'],   desc:'Spiced roasted peanuts with tomato and coriander',                     why:'drinky,light'},
      {id:'lv_bb2', name:'French Fries',                 e:'🍟', price:199, diet:'veg',    tags:['drinky','light','veg'],   desc:'Classic golden fries with mayonnaise',                                  why:'drinky,light'},
      {id:'lv_bb3', name:'Peri-Peri Fries',              e:'🍟', price:219, diet:'veg',    tags:['spicy','drinky'],         desc:'Spicy peri-peri dusted fries',                                          why:'spicy,drinky'},
      {id:'lv_bb4', name:'Jalapeño Cheese Poppers',      e:'🌶️',price:349, diet:'veg',   tags:['spicy','drinky'],         desc:'Cheese-stuffed jalapeños — crispy and fiery',                           why:'spicy,drinky'},
      {id:'lv_bb5', name:'LFC – Levels Fried Chicken',   e:'🍗', price:399, diet:'nonveg', tags:['drinky','crispy','hearty'],desc:"Levels' signature fried chicken bites",                                why:'drinky,hearty'},
    ],

    // ── SHOOTERS ─────────────────────────────────────────────
    shooters: [
      {id:'lv_sh1', name:'Kamikaze',                     e:'🎯', price:249, diet:'veg', tags:['celebrate','drinky'],          desc:'Vodka, triple sec and lime juice — sharp, zesty, straight to the point', why:'celebrate,drinky'},
      {id:'lv_sh2', name:'Jager Bomb',                   e:'💣', price:279, diet:'veg', tags:['celebrate','drinky'],          desc:'Jägermeister in energy drink — sweet kick with a fast-paced punch',    why:'celebrate,drinky'},
      {id:'lv_sh3', name:'Classic B-52',                 e:'✈️', price:259, diet:'veg', tags:['celebrate','drinky'],          desc:'Coffee liqueur, Irish cream, orange liqueur — creamy and sweet',       why:'celebrate,drinky'},
    ],
  },
};

const LEVELS_POPULAR = {
  most_ordered: [
    {id:'lv_nv1',  badge:'🔥 Most Ordered'},   // Chicken Drums of Heaven
    {id:'lv_nv4',  badge:'🔥 Most Ordered'},   // LFC - Levels Fried Chicken
    {id:'lv_cb1',  badge:'🔥 Most Ordered'},   // Belgian Wit
    {id:'lv_nv2',  badge:'🔥 Most Ordered'},   // Peri Peri Chicken Wings
    {id:'lv_ck2',  badge:'🔥 Most Ordered'},   // Mojito
  ],
  chefs_pick: [
    {id:'lv_ck1',  badge:"Chef's Pick"},        // Levels Signature cocktail
    {id:'lv_im1',  badge:"Chef's Pick"},        // Butter Chicken
    {id:'lv_ds7',  badge:"Chef's Pick"},        // Levels Chef Special Treat
    {id:'lv_cb2',  badge:"Chef's Pick"},        // Kiwi Beer
    {id:'lv_nv14', badge:"Chef's Pick"},        // Ghee Roast Chicken Wings
  ],
  trending: [
    {id:'lv_ck4',  badge:'✨ Trending'},        // Long Island Iced Tea
    {id:'lv_pz4',  badge:'✨ Trending'},        // Peri-Peri Chicken Pizza
    {id:'lv_nv10', badge:'✨ Trending'},        // Dynamite Prawns
    {id:'lv_ds4',  badge:'✨ Trending'},        // Chocolate Volcano
    {id:'lv_cb4',  badge:'✨ Trending'},        // IPA
  ],
};

const LEVELS_DRINK_HINT = {
  spicy:     '🌶️ Going bold? Try a Margarita or IPA — both cut through the heat perfectly.',
  light:     '🌿 Keeping it light? The Mojito or Belgian Wit are made for you.',
  hearty:    '🍗 Big meal? Go for the Kiwi Beer or Long Island — serious drinks for serious food.',
  celebrate: '🎉 Celebrating? Levels Signature cocktail or a pitcher of Berry Peach Sangria.',
  default:   "Welcome to Levels! Here's what pairs perfectly with tonight.",
};

window.MESA_RESTO_CONFIG = {
  id:       'levels-nagarbhavi',
  name:     'Levels',
  tagline:  'Craft Beer. Good Food. Great Nights.',
  location: 'Nagarbhavi, Bangalore',
  accent:   '#D4A017',   // Levels gold/amber — matches their dark gold branding

  menu:     LEVELS_MENU,
  popular:  LEVELS_POPULAR,
  drinkHint:LEVELS_DRINK_HINT,

  // ── Course mapping ────────────────────────────────────────
  courseMap: {
    starters: ['bar_snacks','veg_starters','nonveg_starters','soups','salads'],
    mains:    ['pizza','pasta','burgers','indian_mains','biryani_rice'],
    desserts: ['desserts'],
  },

  // ── Drink tabs ────────────────────────────────────────────
  drinkTabs: [
    {key:'craft_beers',       label:'🍺 Craft Beers'},
    {key:'cocktails',         label:'🍸 Cocktails'},
    {key:'long_drinks',       label:'🫧 Long Drinks'},
    {key:'mocktails',         label:'🌿 Mocktails'},
    {key:'spirits',           label:'🥃 Premium Spirits'},
    {key:'shooters',          label:'🎯 Shooters'},
    {key:'pitcher_cocktails', label:'🍷 Pitchers'},
    {key:'bar_bites',         label:'🍢 Bar Bites'},
  ],

  // ── Popular tonight picks ─────────────────────────────────
  quickPicks: {
    starters: [
      {id:'lv_nv1', badge:'Most Ordered', why:"Chicken Drums of Heaven — Levels' top seller"},
      {id:'lv_nv4', badge:"Chef's Pick",  why:'LFC — Levels signature fried chicken'},
      {id:'lv_nv2', badge:'Trending',     why:'Peri Peri Wings — perfectly spiced'},
    ],
    mains: [
      {id:'lv_im1', badge:'Most Ordered', why:'Butter Chicken — rich and creamy'},
      {id:'lv_pz4', badge:'Trending',     why:'Peri-Peri Chicken Pizza — crowd favourite'},
      {id:'lv_bk1', badge:"Chef's Pick",  why:'Chicken Biryani — fragrant dum biryani'},
    ],
    desserts: [
      {id:'lv_ds2', badge:'Most Ordered', why:'Chocolate Brownie with vanilla ice cream'},
      {id:'lv_ds7', badge:"Chef's Pick",  why:"Levels Chef Special Treat — unique dessert"},
      {id:'lv_ds1', badge:'Trending',     why:'Kahlua Tiramisu — adults only dessert'},
    ],
  },

  // ── Cuisine picker ────────────────────────────────────────
  cuisines: [
    {cu:'craftbeer',   label:'Craft Beer First',   sub:'Belgian Wit, Kiwi Beer, IPA'},
    {cu:'northindian', label:'North Indian',        sub:'Butter Chicken, Biryani, Dal Makhani'},
    {cu:'continental', label:'Continental',         sub:'Pizza, Pasta, Burgers'},
    {cu:'coastal',     label:'Coastal & South Indian', sub:'Prawn Gassi, Ghee Roast, Payasam'},
    {cu:'asian',       label:'Asian Fusion',        sub:'Thai Curry, Kung Pao, Manchurian'},
    {cu:'cocktails',   label:'Cocktails Only',      sub:'Just drinks tonight'},
  ],

  cuisineBySubcat: {
    bar_snacks:'global',   veg_starters:'global',   nonveg_starters:'global',
    soups:'global',        salads:'global',          pizza:'continental',
    pasta:'continental',   burgers:'western',        indian_mains:'northindian',
    biryani_rice:'northindian', desserts:'global',
  },

  // ── Food items visible on drinks screen ──────────────────
  drinksPairingIds: new Set([
    'lv_bb1','lv_bb2','lv_bb3','lv_bb4','lv_bb5',
    'lv_bs3','lv_bs4','lv_bs8','lv_bs9','lv_bs11',
    'lv_nv4','lv_vs12',
  ]),

  // ── Drink style → tab mapping ─────────────────────────────
  styleToTab: {
    beer:     'craft_beers',
    cocktail: 'cocktails',
    spirits:  'spirits',
    mocktail: 'mocktails',
  },

  // ── Flavor options per drink style ───────────────────────
  drinkFlavorOptions: {
    beer: [
      {val:'light',  e:'🌾', lbl:'Light & Citrus',   sub:'Belgian Wit, Hefeweizen'},
      {val:'fruity', e:'🥝', lbl:'Fruity & Unique',  sub:'Kiwi Beer, signature brew'},
      {val:'dark',   e:'🍂', lbl:'Dark & Malty',     sub:'Stout, Amber Ale'},
      {val:'strong', e:'🌿', lbl:'Hoppy & Bold',     sub:'IPA — for the hop heads'},
    ],
    cocktail: [
      {val:'sweet',  e:'🍹', lbl:'Fresh & Sweet',    sub:'Mojito, Cosmopolitan'},
      {val:'sour',   e:'🍋', lbl:'Tangy & Sour',     sub:'Margarita, Whiskey Sour'},
      {val:'herby',  e:'✨', lbl:'Bold & Signature', sub:'Levels Signature, special'},
      {val:'spicy',  e:'🎉', lbl:'Long & Celebratory',sub:'Long Island, strong cocktails'},
    ],
    spirits: [
      {val:'neat',   e:'🥃', lbl:'Neat or Rocks',    sub:'Dalmore, Monkey Shoulder'},
      {val:'mixed',  e:'🍸', lbl:'Mixed / Highball',  sub:'JW Black, Jack Daniels'},
      {val:'long',   e:'🫧', lbl:'Long Drink',        sub:'With tonic, soda or cola'},
      {val:'shots',  e:'🎯', lbl:'Shooter',           sub:'Quick, bold and fun'},
    ],
    mocktail: [
      {val:'cool',   e:'❄️', lbl:'Cooling & Minty',  sub:'Peachy Melon Fizz, Orange Mojito'},
      {val:'fruity', e:'🍑', lbl:'Fruity & Tropical', sub:'Berry Bliss, Mango Mint Cooler'},
      {val:'tangy',  e:'🍊', lbl:'Tangy & Zesty',    sub:'Kiwi Basil Breeze'},
      {val:'floral', e:'🌸', lbl:'Sweet & Classic',  sub:'Shirley Temple'},
    ],
  },

  // ── Score boosts per style+flavor ────────────────────────
  drinkScoreMap: {
    'beer+light':    ['lv_cb1','lv_cb5','lv_cb2','lv_cb3','lv_cb6'],
    'beer+fruity':   ['lv_cb2','lv_cb1','lv_cb5','lv_cb3','lv_cb6'],
    'beer+dark':     ['lv_cb6','lv_cb3','lv_cb4','lv_cb1','lv_cb5'],
    'beer+strong':   ['lv_cb4','lv_cb6','lv_cb3','lv_cb1','lv_cb2'],
    'cocktail+sweet':['lv_ck2','lv_ck5','lv_ck6','lv_ck1','lv_ck3'],
    'cocktail+sour': ['lv_ck6','lv_ck3','lv_ck5','lv_ck1','lv_ck2'],
    'cocktail+herby':['lv_ck1','lv_ck2','lv_ck5','lv_ck6','lv_ck3'],
    'cocktail+spicy':['lv_ck4','lv_ck1','lv_ck3','lv_ck6','lv_ck2'],
    'spirits+neat':  ['lv_sm1','lv_sm3','lv_sm2','lv_sm4'],
    'spirits+mixed': ['lv_sm4','lv_sm3','lv_sm2','lv_sm1'],
    'spirits+long':  ['lv_sm2','lv_sm4','lv_sm3','lv_sm1'],
    'spirits+shots': ['lv_sh1','lv_sh2','lv_sh3'],
    'mocktail+cool': ['lv_mk1','lv_mk3','lv_mk6','lv_mk2','lv_mk5'],
    'mocktail+fruity':['lv_mk5','lv_mk4','lv_mk6','lv_mk1','lv_mk2'],
    'mocktail+tangy':['lv_mk2','lv_mk4','lv_mk1','lv_mk3','lv_mk5'],
    'mocktail+floral':['lv_mk4','lv_mk5','lv_mk2','lv_mk1','lv_mk3'],
  },

  // ── Bar bites per drink style+flavor ─────────────────────
  barBitesPairing: {
    craft_beers:      ['lv_bb2','lv_bb1','lv_bb5','lv_bs8','lv_bs9'],
    cocktails:        ['lv_bb4','lv_bb3','lv_bs11','lv_bb5','lv_bs8'],
    long_drinks:      ['lv_bb5','lv_bb2','lv_bs9','lv_bb4','lv_bs4'],
    mocktails:        ['lv_bb1','lv_bb2','lv_bs3','lv_vs12','lv_bs6'],
    spirits:          ['lv_bb1','lv_bs7','lv_bb3','lv_bb5','lv_bs11'],
    shooters:         ['lv_bb4','lv_bb5','lv_bs10','lv_bb3','lv_bb2'],
    pitcher_cocktails:['lv_bs11','lv_bb5','lv_bs9','lv_bb4','lv_bs8'],
  },

  drinkBitesMap: {
    'beer+light':    ['lv_bb1','lv_bb2','lv_bs8','lv_bs3'],
    'beer+fruity':   ['lv_bb2','lv_vs12','lv_bs3','lv_bb1'],
    'beer+dark':     ['lv_bb5','lv_bb3','lv_bs7','lv_bs11'],
    'beer+strong':   ['lv_bb5','lv_nv4','lv_bb4','lv_bs11'],
    'cocktail+sweet':['lv_bb4','lv_vs12','lv_bs6','lv_bb2'],
    'cocktail+sour': ['lv_bb4','lv_bb3','lv_bs10','lv_bb5'],
    'cocktail+herby':['lv_bb2','lv_bs11','lv_vs12','lv_bb1'],
    'cocktail+spicy':['lv_bb5','lv_nv4','lv_bb4','lv_bs4'],
    'spirits+neat':  ['lv_bb1','lv_bs7','lv_bs11','lv_bb3'],
    'spirits+mixed': ['lv_bb5','lv_bb4','lv_nv4','lv_bs7'],
    'spirits+long':  ['lv_bb2','lv_bs3','lv_bb3','lv_bs8'],
    'spirits+shots': ['lv_bb4','lv_bb5','lv_bs10','lv_bb3'],
    'mocktail+cool': ['lv_bb1','lv_bb2','lv_bs3','lv_vs12'],
    'mocktail+fruity':['lv_vs12','lv_bb2','lv_bs6','lv_bb1'],
    'mocktail+tangy':['lv_bb4','lv_bs10','lv_bb2','lv_bb1'],
    'mocktail+floral':['lv_vs12','lv_bb2','lv_bs6','lv_bb1'],
  },

  barFirst: false,
};
