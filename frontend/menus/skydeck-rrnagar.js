// ═══════════════════════════════════════════════════════════════
// SKYDECK RESTO PUB & KITCHEN — RR Nagar, Bangalore
// Complete restaurant config built from actual menu screenshots
//
// Research: 4.5★ Google (665 reviews), ₹1,800 for two
// Bar Food + Continental, Open till 11:59 PM, Alcohol served
// Plot No. 9812, RR Nagar, Bangalore
//
// Menu sections confirmed from video:
// FOOD: Bar Bites, Soups, Salads, Coastal Specials, Oriental Veg,
//       Oriental Non-Veg, Continental, Tandoor Specials,
//       Indian Mains, Rice & Breads, Pasta, Pizza, Momos,
//       Chinese Rice & Noodles, Thai Main Course, Desserts,
//       Sushi Specials
// DRINKS: Sky Signature Cocktails, Classic Cocktails,
//         Mocktails, Iced Tea, Single Malt, Blended Scotch,
//         Irish/Tennessee/Bourbon Whiskey, Gin, Vodka, Tequila,
//         Rum, Brandy & Cognac, Wine, Bottle Beer, Breezer
// ═══════════════════════════════════════════════════════════════

const SKYDECK_RR_MENU = {
  food: {
    // ── BAR BITES ──────────────────────────────────────────
    bar_bites: [
      {id:'sk_bb1',  name:'Nachos Chicken',           e:'🌮', price:319, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','drinky','sharing'],  desc:'Crispy tortilla chips loaded with spiced chicken and cheese',                     why:'spicy,drinky'},
      {id:'sk_bb2',  name:'Masala Cashew Nuts',        e:'🥜', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['light','drinky','veg'],      desc:'Roasted cashews tossed in aromatic masala spices',                                why:'light,drinky'},
      {id:'sk_bb3',  name:'American Crispy Corn',      e:'🌽', price:269, diet:'veg',    seafood:false,redmeat:false, tags:['crispy','drinky','veg'],     desc:'Golden crispy corn kernels tossed in spices',                                    why:'drinky,veg'},
      {id:'sk_bb4',  name:'Nachos Veg',                e:'🌮', price:269, diet:'veg',    seafood:false,redmeat:false, tags:['drinky','veg'],              desc:'Classic nachos with cheese sauce and jalapeños',                                  why:'drinky,veg'},
      {id:'sk_bb5',  name:'Cheese Cherry Pineapple',   e:'🍍', price:249, diet:'veg',    seafood:false,redmeat:false, tags:['light','sweet','veg'],       desc:'Sweet and tangy cheese, cherry and pineapple skewers',                           why:'light,veg'},
      {id:'sk_bb6',  name:'Peri Peri French Fries',    e:'🍟', price:229, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','drinky','veg'],      desc:'Crispy fries with fiery peri peri seasoning',                                    why:'spicy,drinky'},
      {id:'sk_bb7',  name:'French Fries',              e:'🍟', price:209, diet:'veg',    seafood:false,redmeat:false, tags:['light','drinky','veg'],      desc:'Classic golden fries with ketchup',                                              why:'light,drinky'},
      {id:'sk_bb8',  name:'Masala Papad',              e:'🫓', price:149, diet:'veg',    seafood:false,redmeat:false, tags:['light','drinky','veg'],      desc:'Crispy papad with spiced onion tomato topping',                                  why:'light,drinky'},
      {id:'sk_bb9',  name:'Onion Rings',               e:'🧅', price:249, diet:'veg',    seafood:false,redmeat:false, tags:['crispy','drinky','veg'],     desc:'Crispy golden onion rings served with dip',                                      why:'drinky,veg'},
      {id:'sk_bb10', name:'Masala Peanuts',             e:'🥜', price:179, diet:'veg',    seafood:false,redmeat:false, tags:['light','drinky','veg'],      desc:'Dry roasted peanuts tossed with onion, tomato and spices',                      why:'light,drinky'},
    ],

    // ── SOUPS ──────────────────────────────────────────────
    soups: [
      {id:'sk_sp1',  name:'Manchow Soup (Chicken)',    e:'🍜', price:219, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','light'],             desc:'Thick chicken soup with soy, garlic, coriander and crispy noodles',             why:'spicy,light'},
      {id:'sk_sp2',  name:'Hot & Sour (Chicken)',      e:'🥣', price:219, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','light'],             desc:'Tangy chicken broth with chilli paste, vinegar and soy',                         why:'spicy,light'},
      {id:'sk_sp3',  name:'Pepper Garlic Booster (Chicken)',e:'🥣', price:219, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','light'],         desc:'Bold pepper and garlic chicken soup — great immunity booster',                   why:'spicy,light'},
      {id:'sk_sp4',  name:'Pepper Garlic Booster (Veg)',e:'🥣', price:199, diet:'veg',   seafood:false,redmeat:false, tags:['spicy','light','veg'],       desc:'Pepper and garlic vegetarian broth',                                             why:'spicy,light,veg'},
      {id:'sk_sp5',  name:'Manchow Soup (Veg)',        e:'🍜', price:199, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','light','veg'],       desc:'Thick vegetarian Manchow with crispy noodles',                                   why:'spicy,veg'},
      {id:'sk_sp6',  name:'Hot & Sour (Veg)',          e:'🥣', price:199, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','light','veg'],       desc:'Tangy vegetarian hot and sour soup',                                             why:'spicy,veg'},
      {id:'sk_sp7',  name:'Cream of Chicken Soup',     e:'🍲', price:219, diet:'nonveg', seafood:false,redmeat:false, tags:['rich','light'],              desc:'Velvety cream of chicken continental soup',                                      why:'light,rich'},
      {id:'sk_sp8',  name:'Cream of Tomato Soup',      e:'🍲', price:199, diet:'veg',    seafood:false,redmeat:false, tags:['light','veg'],               desc:'Classic cream of tomato soup',                                                   why:'light,veg'},
      {id:'sk_sp9',  name:'Cream of Mushroom Soup',    e:'🍄', price:199, diet:'veg',    seafood:false,redmeat:false, tags:['light','veg'],               desc:'Rich creamy mushroom soup',                                                      why:'light,veg'},
    ],

    // ── SALADS ─────────────────────────────────────────────
    salads: [
      {id:'sk_sl1',  name:'Caesar Salad (Chicken)',    e:'🥗', price:339, diet:'nonveg', seafood:false,redmeat:false, tags:['light','fresh'],             desc:'Chicken caesar salad with parmesan, croutons and classic dressing',             why:'light'},
      {id:'sk_sl2',  name:'Caesar Salad (Veg)',        e:'🥗', price:279, diet:'veg',    seafood:false,redmeat:false, tags:['light','fresh','veg'],       desc:'Romaine lettuce, parmesan, croutons and caesar dressing',                       why:'light,veg'},
      {id:'sk_sl3',  name:'Greek Salad',               e:'🧀', price:249, diet:'veg',    seafood:false,redmeat:false, tags:['light','fresh','veg'],       desc:'Cucumber, tomato, olives, feta with lemon olive oil vinaigrette',               why:'light,veg'},
      {id:'sk_sl4',  name:'Green Salad',               e:'🥬', price:149, diet:'veg',    seafood:false,redmeat:false, tags:['light','veg'],               desc:'Fresh garden greens',                                                            why:'light,veg'},
    ],

    // ── COASTAL SPECIALS ────────────────────────────────────
    coastal: [
      {id:'sk_co1',  name:'Pomfret Tawa/Rava/Masala Fry',e:'🐟',price:799, diet:'nonveg',seafood:true, redmeat:false, tags:['spicy','hearty'],           desc:'Fresh pomfret — choice of tawa, rava or masala fry',                            why:'spicy,hearty'},
      {id:'sk_co2',  name:'Anjal Tawa/Rava/Masala Fry', e:'🐟', price:799, diet:'nonveg',seafood:true, redmeat:false, tags:['spicy','hearty'],           desc:'Seer fish — choice of tawa, rava or masala fry',                               why:'spicy,hearty'},
      {id:'sk_co3',  name:'Prawn Sukka',                e:'🦐', price:499, diet:'nonveg', seafood:true, redmeat:false, tags:['spicy','hearty','coastal'],  desc:'Coastal style dry prawn sukka with fresh coconut and spices',                   why:'spicy,hearty'},
      {id:'sk_co4',  name:'Mutton Sukka',               e:'🥩', price:499, diet:'nonveg', seafood:false,redmeat:true,  tags:['spicy','hearty'],            desc:'Dry mutton sukka Mangalorean style',                                             why:'spicy,hearty'},
      {id:'sk_co5',  name:'Mutton Ghee Roast',          e:'🥩', price:499, diet:'nonveg', seafood:false,redmeat:true,  tags:['rich','hearty','spicy'],     desc:'Mangalorean ghee roast — bold, tangy and deeply spiced',                        why:'hearty,spicy'},
      {id:'sk_co6',  name:'Prawn Ghee Roast',           e:'🦐', price:499, diet:'nonveg', seafood:true, redmeat:false, tags:['rich','hearty','spicy'],     desc:'Prawns in classic Mangalorean ghee roast sauce',                                why:'hearty,spicy'},
      {id:'sk_co7',  name:'Chicken Sukka',              e:'🍗', price:359, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','hearty','coastal'],  desc:'Dry chicken sukka with coconut and coastal spices',                             why:'spicy,hearty'},
    ],

    // ── ORIENTAL VEG ───────────────────────────────────────
    oriental_veg: [
      {id:'sk_ov1',  name:'Gobi 65',                   e:'🥦', price:279, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','crispy','veg'],      desc:'Crispy cauliflower in spicy South Indian 65 style marinade',                    why:'spicy,veg'},
      {id:'sk_ov2',  name:'Mushroom Pepper Dry',        e:'🍄', price:319, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','drinky','veg'],      desc:'Mushrooms tossed in cracked pepper and aromatic sauce',                         why:'spicy,drinky,veg'},
      {id:'sk_ov3',  name:'Paneer Pepper Dry',          e:'🧀', price:319, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','drinky','veg'],      desc:'Cottage cheese cubes tossed with pepper and green chilli',                     why:'spicy,veg'},
      {id:'sk_ov4',  name:'Mushroom 65',                e:'🍄', price:319, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','crispy','veg'],      desc:'Crispy mushrooms in South Indian 65 style spices',                              why:'spicy,veg'},
      {id:'sk_ov5',  name:'Paneer 65',                  e:'🧀', price:319, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','crispy','veg'],      desc:'Crispy paneer in 65 marinade',                                                  why:'spicy,veg'},
      {id:'sk_ov6',  name:'Gobi Manchurian',            e:'🥦', price:279, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','tangy','veg'],       desc:'Crispy cauliflower in Indo-Chinese Manchurian sauce',                           why:'spicy,veg'},
      {id:'sk_ov7',  name:'Baby Corn Manchurian',       e:'🌽', price:279, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','crispy','veg'],      desc:'Crispy baby corn in Manchurian sauce',                                          why:'spicy,veg'},
      {id:'sk_ov8',  name:'Chilly Gobi',                e:'🥦', price:279, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','drinky','veg'],      desc:'Cauliflower tossed in chilli sauce',                                            why:'spicy,veg'},
      {id:'sk_ov9',  name:'Chilly Paneer',              e:'🧀', price:319, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','drinky','veg'],      desc:'Cottage cheese in fiery chilli sauce',                                          why:'spicy,veg'},
      {id:'sk_ov10', name:'Veg Spring Roll',            e:'🥢', price:279, diet:'veg',    seafood:false,redmeat:false, tags:['crispy','light','veg'],      desc:'Crispy rolls filled with seasoned vegetables',                                  why:'light,veg'},
    ],

    // ── ORIENTAL NON-VEG ────────────────────────────────────
    oriental_nv: [
      {id:'sk_nv1',  name:'Lemon Chicken',              e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['tangy','crispy','drinky'],   desc:'Crispy chicken in tangy lemon sauce — a pub favourite',                         why:'light,drinky'},
      {id:'sk_nv2',  name:'Drums of Heaven',            e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','drinky','hearty'],   desc:'Crispy chicken drumettes in spicy glaze — the most ordered starter',           why:'spicy,drinky'},
      {id:'sk_nv3',  name:'Chicken Lollipop',           e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','drinky'],             desc:'Chicken lollipops in Indo-Chinese spicy sauce',                                 why:'spicy,drinky'},
      {id:'sk_nv4',  name:'Chilly Chicken',             e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','drinky'],             desc:'Chicken tossed in chilli soy with green onion',                                 why:'spicy,drinky'},
      {id:'sk_nv5',  name:'Dragon Chicken',             e:'🐉', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','hearty'],             desc:'Fiery dragon chicken in red sauce — for heat lovers',                           why:'spicy,hearty'},
      {id:'sk_nv6',  name:'Thai Fried Chicken',         e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['crispy','hearty'],            desc:'Thai spiced crispy fried chicken',                                              why:'hearty'},
      {id:'sk_nv7',  name:'Chicken Manchurian',         e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','drinky'],             desc:'Chicken in classic Indo-Chinese Manchurian sauce',                              why:'spicy,drinky'},
      {id:'sk_nv8',  name:'Chicken Schezwan',           e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','bold'],               desc:'Chicken tossed in fiery Schezwan sauce',                                        why:'spicy'},
      {id:'sk_nv9',  name:'Fish Manchurian',            e:'🐟', price:399, diet:'nonveg', seafood:true, redmeat:false, tags:['spicy','drinky'],             desc:'Crispy fish in Manchurian sauce',                                               why:'spicy,drinky'},
      {id:'sk_nv10', name:'Butter Garlic Prawns',       e:'🦐', price:499, diet:'nonveg', seafood:true, redmeat:false, tags:['rich','hearty','drinky'],     desc:'Juicy prawns pan-tossed in garlic butter — reviewer favourite',                why:'hearty,drinky'},
      {id:'sk_nv11', name:'Prawn Manchurian',           e:'🦐', price:479, diet:'nonveg', seafood:true, redmeat:false, tags:['spicy','hearty'],             desc:'Crispy prawns in Manchurian sauce',                                             why:'spicy,hearty'},
    ],

    // ── CONTINENTAL STARTERS ────────────────────────────────
    continental: [
      {id:'sk_cs1',  name:'BBQ Wings',                  e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['smoky','drinky','hearty'],   desc:'Chicken wings glazed in BBQ sauce',                                             why:'hearty,drinky'},
      {id:'sk_cs2',  name:'Jalapeño Cheese Ball',       e:'🧀', price:279, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','drinky','veg'],      desc:'Fried cheese balls stuffed with jalapeño',                                      why:'spicy,drinky,veg'},
      {id:'sk_cs3',  name:'Cheese Garlic Bread Special',e:'🥖', price:249, diet:'veg',    seafood:false,redmeat:false, tags:['light','drinky','veg'],      desc:'Toasted garlic bread loaded with cheese',                                       why:'light,veg'},
      {id:'sk_cs4',  name:'Chicken Popcorn',            e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['crispy','drinky'],            desc:'Bite-sized crispy chicken popcorn',                                             why:'drinky,hearty'},
      {id:'sk_cs5',  name:'Fish Finger with Tartar Sauce',e:'🐟',price:449,diet:'nonveg', seafood:true, redmeat:false, tags:['crispy','light'],             desc:'Golden fish fingers with classic tartar sauce',                                  why:'light,drinky'},
      {id:'sk_cs6',  name:'Chicken Shaslik',            e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['smoky','hearty'],             desc:'Marinated chicken and bell pepper skewers',                                     why:'hearty'},
      {id:'sk_cs7',  name:'Baked Fish',                 e:'🐟', price:449, diet:'nonveg', seafood:true, redmeat:false, tags:['light','hearty'],             desc:'Herb baked fish fillet',                                                        why:'light,hearty'},
      {id:'sk_cs8',  name:'Salmon Quinoa with Capers Sauce',e:'🐟',price:379, diet:'nonveg',seafood:true,redmeat:false, tags:['light','healthy'],           desc:'Pan-seared salmon with quinoa and caper sauce',                                  why:'light'},
    ],

    // ── TANDOOR SPECIALS ────────────────────────────────────
    tandoor: [
      {id:'sk_td1',  name:'Paneer Malai Tikka',         e:'🧀', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['rich','smoky','veg'],        desc:'Tender paneer in creamy malai marinade from the tandoor',                       why:'hearty,veg'},
      {id:'sk_td2',  name:'Paneer Tikka',               e:'🧀', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','smoky','veg'],       desc:'Classic tandoor-charred paneer in red masala',                                  why:'spicy,veg'},
      {id:'sk_td3',  name:'Hariyali Paneer Tikka',      e:'🟢', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['light','smoky','veg'],       desc:'Paneer in coriander and green chilli marinade',                                 why:'light,veg'},
      {id:'sk_td4',  name:'Achari Paneer Tikka',        e:'🧀', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','smoky','tangy','veg'],desc:'Paneer in pickled spice marinade — tangy and bold',                             why:'spicy,veg'},
      {id:'sk_td5',  name:'Paneer Kali Mirchi Tikka',   e:'🧀', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','smoky','veg'],       desc:'Paneer marinated in black pepper and cream',                                    why:'spicy,veg'},
      {id:'sk_td6',  name:'Murg Tikka',                 e:'🍗', price:369, diet:'nonveg', seafood:false,redmeat:false, tags:['smoky','hearty'],             desc:'Classic tandoor chicken tikka in red masala',                                   why:'hearty'},
      {id:'sk_td7',  name:'Murg Malai Tikka',           e:'🍗', price:379, diet:'nonveg', seafood:false,redmeat:false, tags:['rich','smoky'],               desc:'Chicken in creamy malai marinade',                                              why:'rich,hearty'},
      {id:'sk_td8',  name:'Murg Banjara Tikka',         e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['smoky','spicy'],              desc:'Rustic chicken tikka in banjara spice blend',                                   why:'spicy,hearty'},
      {id:'sk_td9',  name:'Tandoor Chicken (Half)',      e:'🍗', price:449, diet:'nonveg', seafood:false,redmeat:false, tags:['hearty','smoky'],             desc:'Half tandoor chicken — smoky and juicy',                                        why:'hearty'},
      {id:'sk_td10', name:'Skydeck Spl Kabab',          e:'🥩', price:799, diet:'nonveg', seafood:false,redmeat:false, tags:['celebrate','hearty','special'],desc:'Skydeck signature kabab — the house special platter',                           why:'celebrate,hearty'},
      {id:'sk_td11', name:'Mutton Seekh Kabab',         e:'🥩', price:699, diet:'nonveg', seafood:false,redmeat:true,  tags:['hearty','smoky','spicy'],     desc:'Minced mutton seekh from the tandoor',                                          why:'hearty,spicy'},
      {id:'sk_td12', name:'Skydeck Spl Lamb Chops',     e:'🥩', price:699, diet:'nonveg', seafood:false,redmeat:true,  tags:['rich','hearty','celebrate'],  desc:'Marinated lamb chops from the tandoor — a special occasion must',              why:'celebrate,hearty'},
    ],

    // ── INDIAN MAINS ────────────────────────────────────────
    indian_mains: [
      {id:'sk_im1',  name:'Butter Chicken',             e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['rich','hearty','comfort'],   desc:'Chicken in rich tomato-butter gravy — the classic',                             why:'hearty,rich'},
      {id:'sk_im2',  name:'Murgh Masala',               e:'🍗', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','hearty'],             desc:'Chicken in aromatic masala gravy',                                              why:'spicy,hearty'},
      {id:'sk_im3',  name:'Murgh Tikka Labardar',       e:'🍗', price:399, diet:'nonveg', seafood:false,redmeat:false, tags:['rich','spicy'],               desc:'Tandoor chicken in rich labardar gravy',                                        why:'hearty,spicy'},
      {id:'sk_im4',  name:'Paneer Butter Masala',       e:'🧀', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['rich','hearty','veg'],        desc:'Paneer cubes in rich tomato-cream gravy',                                       why:'hearty,veg'},
      {id:'sk_im5',  name:'Dal Makhani',                e:'🫘', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['rich','hearty','veg'],        desc:'Slow-cooked black dal with butter and cream',                                   why:'hearty,veg'},
      {id:'sk_im6',  name:'Prawn Masala',               e:'🦐', price:499, diet:'nonveg', seafood:true, redmeat:false, tags:['spicy','hearty'],             desc:'Prawns in spiced masala gravy',                                                 why:'spicy,hearty'},
      {id:'sk_im7',  name:'Mutton Rogan Josh',          e:'🥩', price:499, diet:'nonveg', seafood:false,redmeat:true,  tags:['rich','hearty','spicy'],      desc:'Kashmiri mutton in aromatic rogan josh sauce',                                  why:'hearty,rich'},
      {id:'sk_im8',  name:'Mutton Nalli',               e:'🥩', price:699, diet:'nonveg', seafood:false,redmeat:true,  tags:['rich','hearty','celebrate'],  desc:'Slow-cooked mutton nalli — a celebration dish',                                 why:'hearty,celebrate'},
    ],

    // ── BIRYANI & RICE ──────────────────────────────────────
    biryani_rice: [
      {id:'sk_br1',  name:'Chicken Biryani',            e:'🍚', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['hearty','aromatic','comfort'],desc:'Dum-cooked chicken biryani with fragrant basmati',                              why:'hearty'},
      {id:'sk_br2',  name:'Mutton Biryani',             e:'🍚', price:499, diet:'nonveg', seafood:false,redmeat:true,  tags:['rich','hearty','celebrate'],  desc:'Rich mutton dum biryani',                                                       why:'hearty,celebrate'},
      {id:'sk_br3',  name:'Veg Biryani',                e:'🍚', price:249, diet:'veg',    seafood:false,redmeat:false, tags:['hearty','veg'],               desc:'Fragrant vegetable biryani',                                                    why:'hearty,veg'},
      {id:'sk_br4',  name:'Egg Biryani',                e:'🍚', price:299, diet:'egg',    seafood:false,redmeat:false, tags:['hearty'],                     desc:'Egg biryani with caramelised onions',                                           why:'hearty'},
    ],

    // ── MOMOS ───────────────────────────────────────────────
    momos: [
      {id:'sk_mm1',  name:'Edamame Veg Dim Sum',        e:'🥟', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['light','umami','veg'],        desc:'Steamed edamame dim sum',                                                       why:'light,veg'},
      {id:'sk_mm2',  name:'Crystal Veg',                e:'🥟', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['light','veg'],                desc:'Delicate crystal veg dim sum',                                                  why:'light,veg'},
      {id:'sk_mm3',  name:'New York Caramel Dim Sum',   e:'🥟', price:320, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','light'],              desc:'Sweet caramel filled dim sum — unique and indulgent',                           why:'light,veg'},
      {id:'sk_mm4',  name:'Gyoza Chicken',              e:'🥟', price:329, diet:'nonveg', seafood:false,redmeat:false, tags:['light','drinky'],             desc:'Pan-fried Japanese chicken gyoza',                                              why:'light,drinky'},
      {id:'sk_mm5',  name:'Veg Momos',                  e:'🥟', price:299, diet:'veg',    seafood:false,redmeat:false, tags:['light','veg'],                desc:'Steamed vegetable momos',                                                       why:'light,veg'},
      {id:'sk_mm6',  name:'Prawn Hargow Dim Sum',       e:'🦐', price:349, diet:'nonveg', seafood:true, redmeat:false, tags:['light','drinky'],             desc:'Classic steamed prawn hargow dim sum',                                          why:'light,drinky'},
    ],

    // ── SUSHI SPECIALS ──────────────────────────────────────
    sushi: [
      {id:'sk_su1',  name:'Chicken Teriyaki Sushi',     e:'🍱', price:379, diet:'nonveg', seafood:false,redmeat:false, tags:['umami','light','special'],    desc:'Chicken teriyaki sushi roll',                                                   why:'light'},
      {id:'sk_su2',  name:'Dragon Roll Sushi',          e:'🐉', price:379, diet:'nonveg', seafood:true, redmeat:false, tags:['umami','special','celebrate'], desc:'Dragon roll with avocado and prawn tempura',                                   why:'celebrate,light'},
      {id:'sk_su3',  name:'Mushroom and Asparagus Sushi',e:'🍄',price:319, diet:'veg',    seafood:false,redmeat:false, tags:['light','veg','umami'],        desc:'Vegetarian sushi roll with mushroom and asparagus',                             why:'light,veg'},
      {id:'sk_su4',  name:'California Roll Crab Sushi', e:'🦀', price:379, diet:'nonveg', seafood:true, redmeat:false, tags:['light','umami','celebrate'],  desc:'Classic California roll with crab stick',                                       why:'light,celebrate'},
      {id:'sk_su5',  name:'Rainbow Roll Salmon Sushi',  e:'🐟', price:449, diet:'nonveg', seafood:true, redmeat:false, tags:['celebrate','rich','special'], desc:'Rainbow roll with fresh salmon — the premium sushi option',                    why:'celebrate'},
    ],

    // ── PASTA ───────────────────────────────────────────────
    pasta: [
      {id:'sk_pa1',  name:'Arrabiata Pasta',            e:'🍝', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','hearty','veg'],       desc:'Penne in spicy tomato-chilli sauce',                                            why:'spicy,veg'},
      {id:'sk_pa2',  name:'Alfredo Pasta',              e:'🍝', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['rich','hearty','veg'],        desc:'Fettuccine in creamy Alfredo sauce',                                            why:'hearty,veg'},
      {id:'sk_pa3',  name:'Fettuccine Cream Mushroom',  e:'🍝', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['rich','hearty','veg'],        desc:'Fettuccine with mushroom in cream sauce',                                       why:'hearty,veg'},
      {id:'sk_pa4',  name:'Truffle Mac & Cheese',       e:'🧀', price:349, diet:'veg',    seafood:false,redmeat:false, tags:['rich','hearty','veg'],        desc:'Mac and cheese with truffle — indulgent comfort food',                          why:'hearty,veg'},
      {id:'sk_pa5',  name:'Spaghetti Chicken Bolognese',e:'🍝', price:349, diet:'nonveg', seafood:false,redmeat:false, tags:['hearty','rich'],              desc:'Classic spaghetti in chicken Bolognese',                                        why:'hearty'},
    ],

    // ── PIZZA (10 inch) ─────────────────────────────────────
    pizza: [
      {id:'sk_pz1',  name:'Margarita Pizza',            e:'🍕', price:379, diet:'veg',    seafood:false,redmeat:false, tags:['light','veg'],               desc:'Classic tomato, mozzarella, basil pizza',                                       why:'light,veg'},
      {id:'sk_pz2',  name:'Mix Veg Pizza',              e:'🍕', price:399, diet:'veg',    seafood:false,redmeat:false, tags:['hearty','veg'],               desc:'Loaded mixed vegetable pizza',                                                  why:'hearty,veg'},
      {id:'sk_pz3',  name:'Paneer Tikka Pizza',         e:'🍕', price:379, diet:'veg',    seafood:false,redmeat:false, tags:['spicy','hearty','veg'],       desc:'Paneer tikka topped pizza',                                                     why:'spicy,veg'},
      {id:'sk_pz4',  name:'BBQ Pizza Chicken',          e:'🍕', price:449, diet:'nonveg', seafood:false,redmeat:false, tags:['smoky','hearty'],             desc:'BBQ chicken pizza with smoked sauce',                                           why:'hearty'},
      {id:'sk_pz5',  name:'Chicken Tikka Pizza',        e:'🍕', price:449, diet:'nonveg', seafood:false,redmeat:false, tags:['spicy','hearty'],             desc:'Chicken tikka topped pizza',                                                    why:'spicy,hearty'},
    ],

    // ── THAI MAIN COURSE ────────────────────────────────────
    thai: [
      {id:'sk_th1',  name:'Thai Chicken Green Curry with Rice',e:'🍛',price:449, diet:'nonveg',seafood:false,redmeat:false, tags:['spicy','hearty','aromatic'],desc:'Aromatic green curry with coconut milk and jasmine rice',                    why:'spicy,hearty'},
      {id:'sk_th2',  name:'Thai Chicken Red Curry with Rice',  e:'🍛',price:469, diet:'nonveg',seafood:false,redmeat:false, tags:['spicy','hearty','rich'],   desc:'Rich red curry with coconut milk and jasmine rice',                            why:'spicy,hearty'},
      {id:'sk_th3',  name:'Veg Thai Green Curry with Rice',    e:'🍛',price:319, diet:'veg',   seafood:false,redmeat:false, tags:['spicy','hearty','veg'],    desc:'Vegetable green curry with coconut milk',                                      why:'spicy,veg'},
      {id:'sk_th4',  name:'Veg Thai Red Curry with Rice',      e:'🍛',price:319, diet:'veg',   seafood:false,redmeat:false, tags:['spicy','hearty','veg'],    desc:'Vegetable red curry with coconut milk',                                        why:'spicy,veg'},
    ],

    // ── DESSERTS ────────────────────────────────────────────
    desserts: [
      {id:'sk_ds1',  name:'Gulab Jamun',                e:'🍮', price:149, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','comfort'],            desc:'Classic warm gulab jamun in sugar syrup',                                       why:'sweet,comfort'},
      {id:'sk_ds2',  name:'Carrot Halwa',               e:'🥕', price:149, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','comfort'],            desc:'Traditional gajar halwa with khoya',                                            why:'sweet,comfort'},
      {id:'sk_ds3',  name:'Malai Kulfi',                e:'🍦', price:189, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','light'],              desc:'Creamy malai kulfi on a stick',                                                 why:'sweet,light'},
      {id:'sk_ds4',  name:'Caramel Custard',            e:'🍮', price:179, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','rich'],               desc:'Silky smooth baked caramel custard',                                            why:'sweet,celebrate'},
      {id:'sk_ds5',  name:'Brownie Blast',              e:'🍫', price:199, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','indulgent'],          desc:'Warm brownie with vanilla ice cream',                                           why:'sweet,celebrate'},
      {id:'sk_ds6',  name:'Choice of Ice Cream',        e:'🍨', price:129, diet:'veg',    seafood:false,redmeat:false, tags:['sweet','light'],              desc:'Two scoops of your choice of ice cream',                                        why:'sweet,light'},
    ],
  },

  drinks: {
    // ── SKY SIGNATURE COCKTAILS ─────────────────────────────
    sky_signature: [
      {id:'sk_sc1',  name:'Sky Smoked Spiced',          e:'🌫️',price:499, diet:'veg', tags:['hearty','celebrate','bold'],    desc:'Whiskey, orange cheong, cinnamon, star anise, honey — smoky and bold',           why:'celebrate,hearty'},
      {id:'sk_sc2',  name:'Joe Jasmine',                e:'🌸', price:499, diet:'veg', tags:['light','aromatic','celebrate'], desc:'Whisky, maple joe syrups, jasmine tea, lime, elderflower',                       why:'celebrate,light'},
      {id:'sk_sc3',  name:'Marry Citrus Deck',          e:'🍊', price:499, diet:'veg', tags:['tangy','fresh','celebrate'],    desc:'Tequila, fresh grapefruit, rosemary grapefruit syrups, fresh lime juice',        why:'celebrate,light'},
      {id:'sk_sc4',  name:'Citrus Gin Berrys',          e:'🍋', price:449, diet:'veg', tags:['fresh','fruity','celebrate'],   desc:'Gin, mix citrus fruit, kaffir lime leaf, elderflower syrups, fresh lime',        why:'celebrate,light'},
      {id:'sk_sc5',  name:'Burning Desire Deck',        e:'🔥', price:499, diet:'veg', tags:['spicy','bold','celebrate'],     desc:'Tequila, orange cheong, jalapeño, triple sec, fresh lime',                       why:'spicy,celebrate'},
      {id:'sk_sc6',  name:'Gin Butterfly',              e:'🦋', price:449, diet:'veg', tags:['floral','light','celebrate'],   desc:'Gin, blue pea tea, lavender syrups, fresh lime, edible butterfly',               why:'celebrate,light'},
      {id:'sk_sc7',  name:'Eternal Passionate Rose',    e:'🌹', price:419, diet:'veg', tags:['fruity','floral','celebrate'],  desc:'Vodka, rose water, rose petal, passion fruit syrup, litchi juice, vegan foam',  why:'celebrate,light'},
      {id:'sk_sc8',  name:'Clear Sky Melon',            e:'🍈', price:349, diet:'veg', tags:['fresh','fruity','light'],       desc:'Vodka, freshwater melon fatwash, fresh watermelon, kaffir lime leaf',            why:'light,drinky'},
      {id:'sk_sc9',  name:'Sky Heaven',                 e:'🌅', price:399, diet:'veg', tags:['fruity','fresh','celebrate'],   desc:'White rum, blueberry purée, mint leaves, fresh blueberry, vegan foam',           why:'celebrate,light'},
      {id:'sk_sc10', name:'Tangy Panna',                e:'🥭', price:349, diet:'veg', tags:['tangy','spicy','fresh'],        desc:'White rum, aam panna crush, raw mango juice, kaffir lime leaf, chilly salt',    why:'spicy,light'},
    ],

    // ── CLASSIC COCKTAILS ───────────────────────────────────
    classic_cocktails: [
      {id:'sk_cc1',  name:'Old Fashioned',              e:'🥃', price:649, diet:'veg', tags:['hearty','celebrate','classic'], desc:'Bourbon whiskey, angostura bitter, sugar cube, orange peel',                    why:'hearty,celebrate'},
      {id:'sk_cc2',  name:'Negroni',                    e:'🍊', price:549, diet:'veg', tags:['hearty','bold'],               desc:'Gin, Martini Rosso, Campari, orange slice',                                      why:'hearty,drinky'},
      {id:'sk_cc3',  name:'Margarita',                  e:'🍋', price:449, diet:'veg', tags:['tangy','fresh','drinky'],      desc:'Tequila, triple sec, fresh lime juice, lime slice, salt',                        why:'light,drinky'},
      {id:'sk_cc4',  name:'Bloody Mary',                e:'🍅', price:399, diet:'veg', tags:['spicy','bold'],               desc:'Vodka, tomato juice, tabasco, worcestershire, black pepper, lime',               why:'spicy,drinky'},
      {id:'sk_cc5',  name:'Classic Mojito',             e:'🌿', price:379, diet:'veg', tags:['fresh','light','drinky'],      desc:'White rum, mint leaves, fresh lime, simple sugar syrup',                         why:'light,drinky'},
      {id:'sk_cc6',  name:'Cosmopolitan',               e:'🍸', price:379, diet:'veg', tags:['fruity','light','celebrate'],  desc:'Vodka, cranberry juice, triple sec, fresh lime, orange peel',                   why:'celebrate,light'},
      {id:'sk_cc7',  name:'Classic Martini',            e:'🍸', price:379, diet:'veg', tags:['hearty','classic'],            desc:'Gin, Martini Blanco, green olives',                                              why:'hearty,drinky'},
      {id:'sk_cc8',  name:'Mai Tai',                    e:'🍹', price:379, diet:'veg', tags:['fruity','celebrate'],          desc:'White rum, dark rum, orange juice, pineapple juice, orgeat syrup',               why:'celebrate,drinky'},
      {id:'sk_cc9',  name:'Pina Colada',                e:'🍍', price:379, diet:'veg', tags:['fruity','sweet','celebrate'],  desc:'White rum, Amul fresh cream, pineapple slice, maraschino cherry',                why:'celebrate,drinky'},
    ],

    // ── SHOOTERS ────────────────────────────────────────────
    shooters: [
      {id:'sk_sh1',  name:'Sky Special Flamers',        e:'🎯', price:999, diet:'veg', tags:['celebrate','bold'],            desc:'Gin, vodka, tequila, brandy, litchi juice, passion fruit syrups',                why:'celebrate'},
      {id:'sk_sh2',  name:'Jagerbomb',                  e:'💣', price:699, diet:'veg', tags:['celebrate','bold'],            desc:'Jägermeister with Red Bull',                                                    why:'celebrate,drinky'},
      {id:'sk_sh3',  name:'Knockout',                   e:'🥊', price:449, diet:'veg', tags:['celebrate','bold'],            desc:'Gin, white rum, blue curacao, grenadine, fresh lime juice',                     why:'celebrate,drinky'},
      {id:'sk_sh4',  name:'B52',                        e:'✈️', price:449, diet:'veg', tags:['celebrate','sweet'],           desc:"Bailey's, Kahlua, triple sec",                                                  why:'celebrate,drinky'},
      {id:'sk_sh5',  name:'18 Till You Die',            e:'🎉', price:349, diet:'veg', tags:['celebrate','drinky'],          desc:'Gin, raspberry, fresh lime juice, vanilla syrups',                              why:'celebrate,drinky'},
      {id:'sk_sh6',  name:'Kamikaze',                   e:'🎯', price:299, diet:'veg', tags:['celebrate','drinky'],          desc:'Vodka, fresh lime juice, triple sec, blue curacao',                              why:'celebrate,drinky'},
    ],

    // ── ICED TEA / LONG DRINKS ──────────────────────────────
    iced_tea: [
      {id:'sk_it1',  name:'Long Island Iced Tea',       e:'🍋', price:599, diet:'veg', tags:['celebrate','hearty','drinky'], desc:'White rum, gin, vodka, tequila, triple sec, fresh lime, coke',                  why:'celebrate,drinky'},
      {id:'sk_it2',  name:'Long Beach Iced Tea',        e:'🏖️',price:599, diet:'veg', tags:['celebrate','fruity'],          desc:'White rum, gin, vodka, tequila, triple sec, cranberry juice',                   why:'celebrate,drinky'},
      {id:'sk_it3',  name:'Long Electric Iced Tea',     e:'⚡', price:599, diet:'veg', tags:['celebrate','bold'],            desc:'White rum, gin, vodka, tequila, blue curacao, fresh lime, sprite',              why:'celebrate,drinky'},
      {id:'sk_it4',  name:'Tokyo Iced Tea',             e:'🍵', price:599, diet:'veg', tags:['celebrate','fruity'],          desc:'White rum, gin, vodka, tequila, green melon syrup, soda',                       why:'celebrate,drinky'},
      {id:'sk_it5',  name:'Bull Frog',                  e:'🐸', price:649, diet:'veg', tags:['celebrate','bold'],            desc:'White rum, gin, vodka, tequila, blue curacao, Red Bull',                         why:'celebrate,drinky'},
    ],

    // ── MOCKTAILS ───────────────────────────────────────────
    mocktails: [
      {id:'sk_mk1',  name:'Cocoberry',                  e:'🥥', price:279, diet:'veg', tags:['sweet','fruity','light'],       desc:'Coconut syrup, strawberry crush, vanilla ice cream milk, whipped cream',         why:'light,sweet'},
      {id:'sk_mk2',  name:'Sky Kit Kat Frappe',         e:'☕', price:279, diet:'veg', tags:['sweet','rich'],                desc:'Kit Kat, chocolate syrup, milk, vanilla ice cream, whipped cream',               why:'sweet'},
      {id:'sk_mk3',  name:'Green Goddess',              e:'🌿', price:249, diet:'veg', tags:['fresh','light','herby'],        desc:'Basil, kaffir lime leaf, fresh lime juice, oleo saccharum, soda',               why:'light,drinky'},
      {id:'sk_mk4',  name:'Midnight Sky',               e:'🌌', price:249, diet:'veg', tags:['fruity','light'],               desc:'Blue curacao, litchi juice, sprite, fresh lime juice',                           why:'light,drinky'},
      {id:'sk_mk5',  name:'Sunset Splash',              e:'🌅', price:249, diet:'veg', tags:['fruity','fresh','sweet'],       desc:'Orange chunks, basil leaf, peach syrups, orange juice, soda',                  why:'light,drinky'},
      {id:'sk_mk6',  name:'Spicy Danna Delight',        e:'🌶️',price:249, diet:'veg', tags:['spicy','tangy','fresh'],        desc:'Fresh pineapple cheong, green chilli, simple sugar syrup, fresh lime',           why:'spicy,light'},
      {id:'sk_mk7',  name:'Virgin Mojito',              e:'🌿', price:229, diet:'veg', tags:['fresh','light'],               desc:'Lime wedges, mint leaves, soda, fresh lime juice, sprite',                       why:'light,drinky'},
      {id:'sk_mk8',  name:'Blue Lagoon',                e:'🫐', price:229, diet:'veg', tags:['fruity','fresh','sweet'],       desc:'Lime wedges, fresh lemon juice, blue curacao, sprite, orange slice',            why:'light,drinky'},
      {id:'sk_mk9',  name:'Fruit Punch',                e:'🍹', price:229, diet:'veg', tags:['fruity','sweet','light'],       desc:'Mix fruit juice, Amul fresh cream, strawberry crush, pineapple slice',           why:'light,sweet'},
    ],

    // ── BOTTLE BEER ─────────────────────────────────────────
    beers: [
      {id:'sk_be1',  name:'Kingfisher Premium',         e:'🍺', price:219, diet:'veg', tags:['light','drinky'],              desc:'India\'s favourite premium lager',                                              why:'light,drinky'},
      {id:'sk_be2',  name:'Kingfisher Ultra',           e:'🍺', price:249, diet:'veg', tags:['light','drinky'],              desc:'Kingfisher Ultra — smooth and refreshing',                                      why:'light,drinky'},
      {id:'sk_be3',  name:'Tuborg Green',               e:'🍺', price:249, diet:'veg', tags:['light','drinky'],              desc:'Danish lager — clean, crisp',                                                   why:'light,drinky'},
      {id:'sk_be4',  name:'Carlsberg',                  e:'🍺', price:279, diet:'veg', tags:['light','drinky'],              desc:'Classic Danish lager',                                                          why:'light,drinky'},
      {id:'sk_be5',  name:'Budweiser Premium',          e:'🍺', price:279, diet:'veg', tags:['light','drinky'],              desc:'American premium lager',                                                        why:'light,drinky'},
      {id:'sk_be6',  name:'Heineken',                   e:'🍺', price:299, diet:'veg', tags:['light','drinky','celebrate'],  desc:'Premium Dutch lager — iconic green bottle',                                     why:'light,drinky'},
      {id:'sk_be7',  name:'Corona',                     e:'🍺', price:349, diet:'veg', tags:['light','fruity','celebrate'],  desc:'Mexican lager with lime — rooftop classic',                                     why:'light,drinky'},
      {id:'sk_be8',  name:'Hoegaarden',                 e:'🍺', price:349, diet:'veg', tags:['fruity','light'],              desc:'Belgian wheat beer with orange and coriander notes',                            why:'light,drinky'},
    ],

    // ── SPIRITS ─────────────────────────────────────────────
    spirits: [
      {id:'sk_wh1',  name:'Glenfiddich 12Yrs',          e:'🥃', price:649, diet:'veg', tags:['hearty','celebrate','premium'],desc:'Iconic fruity single malt Scotch',                                              why:'celebrate,hearty'},
      {id:'sk_wh2',  name:'The Dalmore 12Yrs',          e:'🥃', price:749, diet:'veg', tags:['hearty','celebrate','premium'],desc:'Rich citrus and chocolate single malt',                                         why:'celebrate,hearty'},
      {id:'sk_wh3',  name:'Monkey Shoulder',            e:'🥃', price:549, diet:'veg', tags:['hearty','drinky'],             desc:'Smooth blended malt — versatile and approachable',                              why:'hearty,drinky'},
      {id:'sk_wh4',  name:'JW Black Label',             e:'🥃', price:549, diet:'veg', tags:['hearty','celebrate'],          desc:'12-year Johnnie Walker — smooth and smoky',                                     why:'celebrate,hearty'},
      {id:'sk_wh5',  name:'Jack Daniels',               e:'🥃', price:549, diet:'veg', tags:['hearty','drinky'],             desc:'Tennessee whiskey — the bar classic',                                           why:'hearty,drinky'},
      {id:'sk_wh6',  name:'Gentleman Jack',             e:'🥃', price:649, diet:'veg', tags:['hearty','premium'],            desc:'Double mellowed Tennessee whiskey',                                             why:'hearty,drinky'},
      {id:'sk_wh7',  name:'Bombay Sapphire',            e:'🌿', price:349, diet:'veg', tags:['light','aromatic'],            desc:'London dry gin with 10 botanicals',                                             why:'light,drinky'},
      {id:'sk_wh8',  name:'Monkey 47',                  e:'🌿', price:849, diet:'veg', tags:['aromatic','premium','celebrate'],desc:'47 botanicals — the gin lover\'s dream',                                     why:'celebrate,light'},
    ],

    // ── BAR BITES ON DRINKS SCREEN ──────────────────────────────────────────────
    bar_bites: [
      {id:'sk_db1',  name:'Nachos Chicken',             e:'🌮', price:319, diet:'nonveg', tags:['spicy','drinky','sharing'], desc:'Most ordered bar snack — chicken nachos with cheese',                          why:'spicy,drinky'},
      {id:'sk_db7',  name:'French Fries',               e:'🍟', price:209, diet:'veg',    tags:['light','drinky','veg'],    desc:'Classic golden fries',                                                         why:'light,drinky'},
      {id:'sk_db6',  name:'Peri Peri French Fries',     e:'🍟', price:229, diet:'veg',    tags:['spicy','drinky'],          desc:'Spicy peri peri fries',                                                        why:'spicy,drinky'},
      {id:'sk_db2',  name:'Masala Cashew Nuts',         e:'🥜', price:299, diet:'veg',    tags:['light','drinky'],          desc:'Spiced cashews — perfect with any drink',                                      why:'light,drinky'},
      {id:'sk_db10', name:'Masala Peanuts',             e:'🥜', price:179, diet:'veg',    tags:['light','drinky'],          desc:'Roasted spiced peanuts',                                                       why:'light,drinky'},
    ],
  },
};

const SKYDECK_RR_POPULAR = {
  most_ordered: [
    {id:'sk_nv2',  badge:'🔥 Most Ordered'},   // Drums of Heaven
    {id:'sk_bb1',  badge:'🔥 Most Ordered'},   // Nachos Chicken
    {id:'sk_nv10', badge:'🔥 Most Ordered'},   // Butter Garlic Prawns
    {id:'sk_br1',  badge:'🔥 Most Ordered'},   // Chicken Biryani
    {id:'sk_sc1',  badge:'🔥 Most Ordered'},   // Sky Smoked Spiced
  ],
  chefs_pick: [
    {id:'sk_td10', badge:"Chef's Pick"},        // Skydeck Spl Kabab
    {id:'sk_co5',  badge:"Chef's Pick"},        // Mutton Ghee Roast
    {id:'sk_su2',  badge:"Chef's Pick"},        // Dragon Roll Sushi
    {id:'sk_sc3',  badge:"Chef's Pick"},        // Marry Citrus Deck
    {id:'sk_ds5',  badge:"Chef's Pick"},        // Brownie Blast
  ],
  trending: [
    {id:'sk_nv5',  badge:'✨ Trending'},        // Dragon Chicken
    {id:'sk_sh2',  badge:'✨ Trending'},        // Jagerbomb
    {id:'sk_it1',  badge:'✨ Trending'},        // Long Island Iced Tea
    {id:'sk_sc6',  badge:'✨ Trending'},        // Gin Butterfly
    {id:'sk_td12', badge:'✨ Trending'},        // Skydeck Spl Lamb Chops
  ],
};

const SKYDECK_RR_DRINK_HINT = {
  spicy:     '🌶️ Bold food? The Sky Smoked Spiced or a cold Heineken will balance it perfectly.',
  light:     '🌿 Keeping it light? Green Goddess mocktail or a classic Mojito — made for evenings like this.',
  hearty:    '🥃 Big meal incoming? Old Fashioned or JW Black Label with rocks — serious drink for serious food.',
  celebrate: '🎉 Celebrating? Sky Special Flamers or a Long Island Iced Tea — the table will love it.',
  default:   "Welcome to Skydeck RR Nagar! Here's what pairs perfectly with your evening.",
};

window.MESA_RESTO_CONFIG = {
  id:       'skydeck-rrnagar',
  name:     'Skydeck',
  tagline:  'Where Every Night is a Good Night',
  location: 'RR Nagar, Bangalore',
  accent:   '#C0392B',   // bold red — matches Skydeck RR Nagar's red brand identity

  menu:     SKYDECK_RR_MENU,
  popular:  SKYDECK_RR_POPULAR,
  drinkHint:SKYDECK_RR_DRINK_HINT,

  courseMap: {
    starters: ['bar_bites','soups','salads','coastal','oriental_veg','oriental_nv',
                'continental','tandoor','momos','sushi'],
    mains:    ['indian_mains','biryani_rice','pasta','pizza','thai'],
    desserts: ['desserts'],
  },

  drinkTabs: [
    {key:'sky_signature',    label:'✨ Sky Signatures'},
    {key:'classic_cocktails',label:'🍸 Classic Cocktails'},
    {key:'iced_tea',         label:'🫗 LIIT & Long Drinks'},
    {key:'beers',            label:'🍺 Beers'},
    {key:'spirits',          label:'🥃 Spirits'},
    {key:'shooters',         label:'🎯 Shooters'},
    {key:'mocktails',        label:'🌿 Mocktails'},
    {key:'bar_bites',        label:'🍢 Bar Bites'},
  ],

  quickPicks: {
    starters: [
      {id:'sk_nv2',  badge:'Most Ordered', why:'Drums of Heaven — always the table favourite'},
      {id:'sk_bb1',  badge:'Most Ordered', why:'Nachos Chicken — the Skydeck bar classic'},
      {id:'sk_nv10', badge:"Chef's Pick",  why:'Butter Garlic Prawns — indulgent and rich'},
    ],
    mains: [
      {id:'sk_br1',  badge:'Most Ordered', why:'Chicken Biryani — fragrant and satisfying'},
      {id:'sk_th1',  badge:"Chef's Pick",  why:'Thai Chicken Green Curry — aromatic coconut curry'},
      {id:'sk_im1',  badge:'Trending',     why:'Butter Chicken — the crowd classic'},
    ],
    desserts: [
      {id:'sk_ds5',  badge:'Most Ordered', why:'Brownie Blast — warm and irresistible'},
      {id:'sk_ds4',  badge:"Chef's Pick",  why:'Caramel Custard — silky smooth finish'},
      {id:'sk_ds3',  badge:'Trending',     why:'Malai Kulfi — classic Indian cool-down'},
    ],
  },

  cuisines: [
    {cu:'continental', label:'Continental',     sub:'Pasta, Pizza, Continental Starters'},
    {cu:'northindian', label:'North Indian',    sub:'Biryani, Tandoor, Indian Mains'},
    {cu:'oriental',    label:'Oriental',        sub:'Manchurian, Chilli, Dim Sum, Sushi'},
    {cu:'coastal',     label:'Coastal Specials', sub:'Tawa Fish, Sukka, Ghee Roast'},
    {cu:'thai',        label:'Thai',            sub:'Green Curry, Red Curry with Rice'},
    {cu:'cocktails',   label:'Cocktails Only',  sub:'Just drinks and good vibes'},
  ],

  cuisineBySubcat: {
    bar_bites:'global',     soups:'global',       salads:'global',
    coastal:'coastal',      oriental_veg:'asian', oriental_nv:'asian',
    continental:'continental', tandoor:'northindian', momos:'asian',
    sushi:'japanese',       pasta:'continental',  pizza:'continental',
    indian_mains:'northindian', biryani_rice:'northindian',
    thai:'thai',            desserts:'global',
  },

  styleToTab: {
    beer:     'beers',
    cocktail: 'sky_signature',
    spirits:  'spirits',
    mocktail: 'mocktails',
  },

  drinkFlavorOptions: {
    beer: [
      {val:'light',  e:'🌾', lbl:'Crisp & Light',    sub:'Kingfisher, Tuborg, Carlsberg'},
      {val:'fruity', e:'🍋', lbl:'Fruity & Citrus',  sub:'Corona with lime, Hoegaarden'},
      {val:'dark',   e:'🍂', lbl:'Premium Imported', sub:'Heineken, Budweiser Premium'},
      {val:'strong', e:'💪', lbl:'Bold & Cold',      sub:'Extra cold, full body pint'},
    ],
    cocktail: [
      {val:'sweet',  e:'🌹', lbl:'Fruity & Floral',  sub:'Eternal Rose, Sky Heaven, Citrus Gin'},
      {val:'sour',   e:'🍋', lbl:'Tangy & Citrus',   sub:'Margarita, Citrus Deck, Tangy Panna'},
      {val:'herby',  e:'🌿', lbl:'Fresh & Botanical', sub:'Green Goddess, Joe Jasmine, Gin Butterfly'},
      {val:'spicy',  e:'🔥', lbl:'Bold & Smoky',     sub:'Burning Desire, Sky Smoked Spiced'},
    ],
    spirits: [
      {val:'neat',   e:'🥃', lbl:'Neat or Rocks',    sub:'Glenfiddich, Dalmore, JW Black'},
      {val:'mixed',  e:'🍸', lbl:'Mixed / Highball',  sub:'Jack Daniels, Monkey Shoulder'},
      {val:'long',   e:'🫧', lbl:'Gin & Tonic',      sub:'Bombay Sapphire, Monkey 47'},
      {val:'shots',  e:'🎯', lbl:'Shooter',           sub:'Jagerbomb, Sky Flamers, B52'},
    ],
    mocktail: [
      {val:'cool',   e:'❄️', lbl:'Fresh & Minty',    sub:'Virgin Mojito, Green Goddess'},
      {val:'fruity', e:'🍹', lbl:'Fruity & Sweet',   sub:'Sunset Splash, Cocoberry, Fruit Punch'},
      {val:'tangy',  e:'🌶️', lbl:'Spicy & Tangy',   sub:'Spicy Danna Delight, Tangy Panna'},
      {val:'floral', e:'🌌', lbl:'Unique & Creative', sub:'Midnight Sky, Blue Lagoon'},
    ],
  },

  drinkScoreMap: {
    'beer+light':       ['sk_be1','sk_be2','sk_be3','sk_be4','sk_be5'],
    'beer+fruity':      ['sk_be7','sk_be8','sk_be6','sk_be1','sk_be2'],
    'beer+dark':        ['sk_be6','sk_be5','sk_be4','sk_be3','sk_be1'],
    'beer+strong':      ['sk_be6','sk_be5','sk_be4','sk_be7','sk_be1'],
    'cocktail+sweet':   ['sk_sc7','sk_sc9','sk_sc4','sk_sc8','sk_sc6'],
    'cocktail+sour':    ['sk_sc3','sk_sc10','sk_cc3','sk_sc5','sk_cc6'],
    'cocktail+herby':   ['sk_sc2','sk_sc6','sk_sc4','sk_sc8','sk_cc5'],
    'cocktail+spicy':   ['sk_sc5','sk_sc1','sk_sc10','sk_sc3','sk_sh1'],
    'spirits+neat':     ['sk_wh1','sk_wh2','sk_wh3','sk_wh4','sk_wh6'],
    'spirits+mixed':    ['sk_wh5','sk_wh4','sk_wh3','sk_wh6','sk_wh7'],
    'spirits+long':     ['sk_wh7','sk_wh8','sk_wh3','sk_wh4','sk_wh5'],
    'spirits+shots':    ['sk_sh2','sk_sh3','sk_sh4','sk_sh6','sk_sh1'],
    'mocktail+cool':    ['sk_mk7','sk_mk3','sk_mk5','sk_mk4','sk_mk8'],
    'mocktail+fruity':  ['sk_mk5','sk_mk9','sk_mk1','sk_mk8','sk_mk4'],
    'mocktail+tangy':   ['sk_mk6','sk_mk10','sk_mk7','sk_mk3','sk_mk5'],
    'mocktail+floral':  ['sk_mk4','sk_mk8','sk_mk3','sk_mk7','sk_mk5'],
  },

  barBitesPairing: {
    sky_signature:    ['sk_bb1','sk_bb3','sk_bb6','sk_bb2','sk_bb7'],
    classic_cocktails:['sk_bb7','sk_bb1','sk_bb2','sk_bb6','sk_bb10'],
    iced_tea:         ['sk_bb1','sk_bb3','sk_bb6','sk_bb7','sk_bb2'],
    beers:            ['sk_bb1','sk_bb7','sk_bb6','sk_bb10','sk_bb2'],
    spirits:          ['sk_bb2','sk_bb10','sk_bb1','sk_bb7','sk_bb6'],
    shooters:         ['sk_bb1','sk_bb3','sk_bb6','sk_bb7','sk_bb2'],
    mocktails:        ['sk_bb7','sk_bb2','sk_bb10','sk_bb1','sk_bb6'],
  },

  drinkBitesMap: {
    'beer+light':     ['sk_bb7','sk_bb10','sk_bb1','sk_bb2'],
    'beer+fruity':    ['sk_bb1','sk_bb7','sk_bb2','sk_bb6'],
    'beer+dark':      ['sk_bb2','sk_bb1','sk_bb7','sk_bb10'],
    'beer+strong':    ['sk_bb1','sk_bb6','sk_bb7','sk_bb2'],
    'cocktail+sweet': ['sk_bb1','sk_bb3','sk_bb7','sk_bb2'],
    'cocktail+sour':  ['sk_bb6','sk_bb1','sk_bb3','sk_bb7'],
    'cocktail+herby': ['sk_bb2','sk_bb7','sk_bb1','sk_bb10'],
    'cocktail+spicy': ['sk_bb6','sk_bb1','sk_bb3','sk_bb7'],
    'spirits+neat':   ['sk_bb10','sk_bb2','sk_bb7','sk_bb1'],
    'spirits+mixed':  ['sk_bb1','sk_bb7','sk_bb6','sk_bb2'],
    'spirits+long':   ['sk_bb7','sk_bb2','sk_bb1','sk_bb10'],
    'spirits+shots':  ['sk_bb1','sk_bb3','sk_bb6','sk_bb7'],
    'mocktail+cool':  ['sk_bb7','sk_bb2','sk_bb10','sk_bb1'],
    'mocktail+fruity':['sk_bb1','sk_bb7','sk_bb2','sk_bb10'],
    'mocktail+tangy': ['sk_bb6','sk_bb1','sk_bb7','sk_bb2'],
    'mocktail+floral':['sk_bb2','sk_bb7','sk_bb1','sk_bb10'],
  },

  drinksPairingIds: new Set([
    'sk_bb1','sk_bb2','sk_bb3','sk_bb4','sk_bb5',
    'sk_bb6','sk_bb7','sk_bb8','sk_bb9','sk_bb10',
    'sk_nv2','sk_nv3','sk_ov2',
  ]),

  barFirst: false,
};
