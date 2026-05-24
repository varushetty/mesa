// ═══════════════════════════════════════════════════════════════
// TORYE — Drink, Dine & Dance | RR Nagar, Bangalore
// 349/36, Channasandra Main Rd, near Full Circle, RR Nagar
//
// Research: 4.1★ Justdial (5037 ratings), ₹1500 for two
// Multicuisine: Continental, Indian, Oriental, Thai, BBQ
// Live music, open till 1 AM, alcohol served, parking available
// Must-try per reviews: Peanut Masala, Crispy Corn Chilli Pepper
// Seasonal special: Aamlicious Menu (mango-themed)
// ═══════════════════════════════════════════════════════════════

const TORYE_MENU = {
  food: {
    // ── SOUPS ──────────────────────────────────────────────
    soups: [
      {id:'ty_sp1',  name:'Manchurian Manchow Soup (Chicken)',e:'🍜',price:179,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','light'],desc:'Thick chicken Manchow with crispy noodles',why:'spicy,light'},
      {id:'ty_sp2',  name:'Hot & Sour Soup (Chicken)',    e:'🥣', price:179, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','light'],     desc:'Tangy chicken broth with vinegar and soy',why:'spicy,light'},
      {id:'ty_sp3',  name:'Tom Yam Soup',                 e:'🌶️',price:179, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','aromatic'],  desc:'Classic Thai spicy and sour soup',why:'spicy,light'},
      {id:'ty_sp4',  name:'Talymein Soup',                e:'🍜', price:179, diet:'nonveg',seafood:false,redmeat:false,tags:['light','umami'],     desc:'Clear noodle soup with vegetables and chicken',why:'light'},
      {id:'ty_sp5',  name:'Mutton Paya Soup',             e:'🦴', price:189, diet:'nonveg',seafood:false,redmeat:true, tags:['hearty','rich'],     desc:'Traditional slow-cooked mutton paya broth',why:'hearty,rich'},
      {id:'ty_sp6',  name:'Sea Food Soup',                e:'🦐', price:189, diet:'nonveg',seafood:true, redmeat:false,tags:['light','umami'],     desc:'Fresh seafood broth with vegetables',why:'light'},
      {id:'ty_sp7',  name:'Jade Mushroom Soup (Veg)',     e:'🍄', price:159, diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],       desc:'Delicate mushroom soup with jade vegetables',why:'light,veg'},
      {id:'ty_sp8',  name:'Clear Soup',                   e:'🥣', price:159, diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],       desc:'Simple clear vegetable soup',why:'light,veg'},
      {id:'ty_sp9',  name:'Thai Coconut Soup',            e:'🥥', price:159, diet:'veg',   seafood:false,redmeat:false,tags:['aromatic','light','veg'],desc:'Thai style coconut milk soup with lemongrass',why:'light,veg'},
      {id:'ty_sp10', name:'Cream of Veg Soup',            e:'🥣', price:169, diet:'veg',   seafood:false,redmeat:false,tags:['light','rich','veg'],desc:'Smooth cream of vegetable soup',why:'light,veg'},
      {id:'ty_sp11', name:'Italian Herb Mushroom Soup',   e:'🍄', price:169, diet:'veg',   seafood:false,redmeat:false,tags:['aromatic','light','veg'],desc:'Mushroom soup with Italian herbs and cream',why:'light,veg'},
    ],

    // ── SALADS ─────────────────────────────────────────────
    salads: [
      {id:'ty_sl1',  name:'Classic Caesar Salad (Veg)',   e:'🥗', price:199, diet:'veg',   seafood:false,redmeat:false,tags:['light','fresh','veg'],desc:'Romaine, parmesan, croutons, caesar dressing',why:'light,veg'},
      {id:'ty_sl2',  name:'Pan Grilled Chicken Caesar',   e:'🥗', price:229, diet:'nonveg',seafood:false,redmeat:false,tags:['light','fresh'],     desc:'Caesar salad with pan grilled chicken breast',why:'light'},
      {id:'ty_sl3',  name:'Green Garden Salad',           e:'🥬', price:139, diet:'veg',   seafood:false,redmeat:false,tags:['light','fresh','veg'],desc:'Fresh garden greens with vinaigrette',why:'light,veg'},
      {id:'ty_sl4',  name:'Iceberg Shrimp Egg',           e:'🦐', price:239, diet:'nonveg',seafood:true, redmeat:false,tags:['light','fresh'],     desc:'Iceberg with shrimp and egg',why:'light'},
      {id:'ty_sl5',  name:'In Maditancon Bounty Salad',   e:'🥗', price:239, diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],       desc:'Mediterranean inspired bounty salad',why:'light,veg'},
      {id:'ty_sl6',  name:'Cheese Cherry Pineapple',      e:'🍍', price:239, diet:'veg',   seafood:false,redmeat:false,tags:['light','sweet','veg'],desc:'Cheese, cherry and pineapple salad',why:'light,veg'},
      {id:'ty_sl7',  name:'Rainbow Rajma Salad',          e:'🌈', price:189, diet:'veg',   seafood:false,redmeat:false,tags:['light','healthy','veg'],desc:'Colourful rajma salad with veggies',why:'light,veg'},
    ],

    // ── SMALL BITES (the menu hero section) ────────────────
    small_bites: [
      {id:'ty_sb1',  name:'Fries Dusted (Salt/Peri/Cajun/Paprika)',e:'🍟',price:229,diet:'veg', seafood:false,redmeat:false,tags:['drinky','light','veg'],desc:'Fries your way — salt, peri peri, cajun or paprika dusting',why:'light,drinky'},
      {id:'ty_sb2',  name:'Cheese Fries Loaded',           e:'🧀', price:239, diet:'veg',   seafood:false,redmeat:false,tags:['hearty','drinky','veg'],desc:'Loaded cheese fries with jalapeño and sauces',why:'hearty,drinky'},
      {id:'ty_sb3',  name:'Potato Wedges',                 e:'🥔', price:209, diet:'veg',   seafood:false,redmeat:false,tags:['light','drinky','veg'],desc:'Golden wedges with dips',why:'light,drinky'},
      {id:'ty_sb4',  name:'Soya Bin Tikki',                e:'🟢', price:199, diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],       desc:'Crispy soya and bean patties',why:'light,veg'},
      {id:'ty_sb5',  name:'Masala Omelette',               e:'🥚', price:159, diet:'egg',   seafood:false,redmeat:false,tags:['light'],             desc:'Spiced masala omelette',why:'light'},
      {id:'ty_sb6',  name:'Mushroom Spinach Cheese Omelette',e:'🍄',price:229,diet:'egg',  seafood:false,redmeat:false,tags:['hearty'],             desc:'Stuffed omelette with mushroom, spinach and cheese',why:'hearty'},
      {id:'ty_sb7',  name:'Corn of the Cup',               e:'🌽', price:209, diet:'veg',   seafood:false,redmeat:false,tags:['light','drinky','veg'],desc:'Crispy corn cups with seasoning',why:'light,drinky'},
      {id:'ty_sb8',  name:'Wai Wai Chat',                  e:'🍜', price:199, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','tangy','veg'],desc:'Spiced Wai Wai noodle chaat',why:'spicy,drinky'},
      {id:'ty_sb9',  name:'Cheese Veg Croquettes',         e:'🧀', price:229, diet:'veg',   seafood:false,redmeat:false,tags:['crispy','drinky','veg'],desc:'Golden cheese and vegetable croquettes',why:'drinky,veg'},
      {id:'ty_sb10', name:'Kumbh Ka Khel',                 e:'🍄', price:219, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','drinky','veg'],desc:'Mushroom specialty with spiced coating',why:'spicy,drinky'},
      {id:'ty_sb11', name:'Devil Egg',                     e:'🥚', price:219, diet:'egg',   seafood:false,redmeat:false,tags:['drinky'],             desc:'Devilled eggs with spicy filling',why:'drinky'},
      {id:'ty_sb12', name:'Butter Garlic Thyme Prawns',    e:'🦐', price:319, diet:'nonveg',seafood:true, redmeat:false,tags:['rich','hearty','drinky'],desc:'Juicy prawns in aromatic garlic butter and thyme',why:'hearty,drinky'},
      {id:'ty_sb13', name:'Cilantro Prawns',               e:'🦐', price:319, diet:'nonveg',seafood:true, redmeat:false,tags:['light','fresh','drinky'],desc:'Fresh prawns tossed in cilantro sauce',why:'light,drinky'},
      {id:'ty_sb14', name:'Beer Butter Fish',              e:'🐟', price:309, diet:'nonveg',seafood:true, redmeat:false,tags:['crispy','hearty','drinky'],desc:'Beer-battered fish in butter sauce',why:'drinky,hearty'},
      {id:'ty_sb15', name:'Fish Cake with Mirin Mayo',     e:'🐟', price:309, diet:'nonveg',seafood:true, redmeat:false,tags:['light','crispy'],     desc:'Pan-fried fish cakes with Japanese mirin mayo',why:'light,drinky'},
      {id:'ty_sb16', name:'Spinach Pakhali Grilled',       e:'🥬', price:249, diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],       desc:'Grilled spinach pakhali',why:'light,veg'},
      {id:'ty_sb17', name:'Golden Chicken Nuggets',        e:'🍗', price:239, diet:'nonveg',seafood:false,redmeat:false,tags:['crispy','drinky'],    desc:'Crispy golden chicken nuggets — crowd favourite',why:'drinky,hearty'},
      {id:'ty_sb18', name:'Laza Chicken Tenders',          e:'🍗', price:239, diet:'nonveg',seafood:false,redmeat:false,tags:['crispy','spicy','drinky'],desc:'Spiced crispy chicken tenders',why:'spicy,drinky'},
      {id:'ty_sb19', name:'Singh Dani Chat',               e:'🌮', price:219, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','tangy','veg'],desc:'Tangy Singh Dani chaat',why:'spicy,drinky'},
      {id:'ty_sb20', name:'Pan Fried Fish Lemon Butter Cream Sauce',e:'🐟',price:329,diet:'nonveg',seafood:true,redmeat:false,tags:['rich','light'],desc:'Pan-fried fish in lemon butter cream sauce with vegetables',why:'light,hearty'},
      {id:'ty_sb21', name:'Mexican Fish Finger',           e:'🐟', price:319, diet:'nonveg',seafood:true, redmeat:false,tags:['spicy','crispy'],    desc:'Spiced Mexican style fish fingers',why:'spicy,drinky'},
      {id:'ty_sb22', name:'Torye Special Nachos (Veg)',    e:'🌮', price:229, diet:'veg',   seafood:false,redmeat:false,tags:['drinky','sharing','veg'],desc:'Torye special loaded veg nachos',why:'drinky,veg'},
      {id:'ty_sb23', name:'Torye Special Nachos (Non-Veg)',e:'🌮', price:249, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','drinky','sharing'],desc:'Torye special loaded non-veg nachos',why:'spicy,drinky'},
      {id:'ty_sb24', name:'Fish & Chips',                  e:'🐟', price:319, diet:'nonveg',seafood:true, redmeat:false,tags:['crispy','hearty'],   desc:'Classic beer-battered fish with thick chips and tartar sauce',why:'hearty,drinky'},
    ],

    // ── OVEN TOASTS ────────────────────────────────────────
    oven_toasts: [
      {id:'ty_ot1',  name:'Chilli Cheese Toastie',         e:'🧀', price:219, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','drinky','veg'],desc:'Toasted bread with chilli cheese filling',why:'spicy,drinky'},
      {id:'ty_ot2',  name:'Mushroom Cheese Toastie',       e:'🍄', price:229, diet:'veg',   seafood:false,redmeat:false,tags:['hearty','drinky','veg'],desc:'Mushroom and cheese stuffed toastie',why:'hearty,veg'},
      {id:'ty_ot3',  name:'Mexican Cheese Toastie',        e:'🌮', price:219, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','drinky','veg'],desc:'Mexican spiced cheese toastie',why:'spicy,drinky'},
      {id:'ty_ot4',  name:'Coleslaw Chicken Toastie',      e:'🍗', price:239, diet:'nonveg',seafood:false,redmeat:false,tags:['hearty','drinky'],    desc:'Chicken with coleslaw in a toasted sandwich',why:'hearty,drinky'},
      {id:'ty_ot5',  name:'Corn Cheese Toastie',           e:'🌽', price:219, diet:'veg',   seafood:false,redmeat:false,tags:['light','drinky','veg'],desc:'Sweet corn and cheese toastie',why:'light,drinky'},
    ],

    // ── BBQ ────────────────────────────────────────────────
    bbq: [
      {id:'ty_bq1',  name:'Grilled Jerk Pineapple Skewers (Prawns)',e:'🦐',price:329,diet:'nonveg',seafood:true,redmeat:false,tags:['spicy','smoky','celebrate'],desc:'Jerk spiced pineapple and prawn skewers from the grill',why:'spicy,celebrate'},
      {id:'ty_bq2',  name:'Garlic Parmesan Chicken',       e:'🍗', price:299, diet:'nonveg',seafood:false,redmeat:false,tags:['rich','smoky'],      desc:'Grilled chicken in garlic parmesan glaze',why:'hearty,rich'},
      {id:'ty_bq3',  name:'Mexican Chicken',               e:'🍗', price:299, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','smoky'],     desc:'Mexican spiced BBQ chicken',why:'spicy,hearty'},
      {id:'ty_bq4',  name:'BBQ Chicken',                   e:'🍗', price:299, diet:'nonveg',seafood:false,redmeat:false,tags:['smoky','hearty'],    desc:'Classic BBQ chicken from the grill',why:'hearty'},
      {id:'ty_bq5',  name:'Peri Peri Prawns',              e:'🦐', price:329, diet:'nonveg',seafood:true, redmeat:false,tags:['spicy','hearty'],    desc:'Grilled prawns in peri peri sauce',why:'spicy,hearty'},
      {id:'ty_bq6',  name:'BBQ Pineapple',                 e:'🍍', price:279, diet:'veg',   seafood:false,redmeat:false,tags:['sweet','light','veg'],desc:'Caramelised BBQ pineapple',why:'light,veg'},
    ],

    // ── CONTINENTAL SPECIAL ─────────────────────────────────
    continental_special: [
      {id:'ty_cs1',  name:'Spring Roasted Chicken',        e:'🍗', price:329, diet:'nonveg',seafood:false,redmeat:false,tags:['hearty','smoky'],    desc:'Herb-roasted whole spring chicken',why:'hearty,celebrate'},
      {id:'ty_cs2',  name:'Florentine Fish',               e:'🐟', price:359, diet:'nonveg',seafood:true, redmeat:false,tags:['light','rich'],      desc:'Fish fillet Florentine with spinach and cream',why:'light,hearty'},
      {id:'ty_cs3',  name:'Stuff Chicken with Herb Rice',  e:'🍗', price:329, diet:'nonveg',seafood:false,redmeat:false,tags:['hearty','aromatic'], desc:'Stuffed chicken with fragrant herb rice',why:'hearty'},
      {id:'ty_cs4',  name:'Vegetable Au Gratin',           e:'🧀', price:299, diet:'veg',   seafood:false,redmeat:false,tags:['rich','hearty','veg'],desc:'Classic vegetable au gratin with cheese',why:'hearty,veg'},
      {id:'ty_cs5',  name:'Poach Fish Herb Spinach Lemon Mustard Sauce',e:'🐟',price:359,diet:'nonveg',seafood:true,redmeat:false,tags:['light','fresh'],desc:'Poached fish with herb spinach and lemon mustard sauce',why:'light,hearty'},
    ],

    // ── PASTA ──────────────────────────────────────────────
    pasta: [
      {id:'ty_pa1',  name:'Classic Alfredo Penne',         e:'🍝', price:329, diet:'veg',   seafood:false,redmeat:false,tags:['rich','hearty','veg'],desc:'Penne in classic Alfredo cream sauce',why:'hearty,veg'},
      {id:'ty_pa2',  name:'Arrabiata',                     e:'🍝', price:299, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','hearty','veg'],desc:'Spicy tomato chilli pasta',why:'spicy,veg'},
      {id:'ty_pa3',  name:'Pesto Mesto',                   e:'🍝', price:299, diet:'veg',   seafood:false,redmeat:false,tags:['light','aromatic','veg'],desc:'Pasta in fresh basil pesto',why:'light,veg'},
      {id:'ty_pa4',  name:'Aglio E Olio Pasta',            e:'🍝', price:299, diet:'veg',   seafood:false,redmeat:false,tags:['light','aromatic','veg'],desc:'Classic garlic and olive oil pasta',why:'light,veg'},
      {id:'ty_pa5',  name:'Harissa Spaghetti Pasta',       e:'🍝', price:299, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','bold','veg'], desc:'Spaghetti with North African harissa sauce',why:'spicy,veg'},
    ],

    // ── SIZZLERS ───────────────────────────────────────────
    sizzlers: [
      {id:'ty_si1',  name:'Thai Chicken Sizzler',          e:'🍽️',price:359, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','celebrate','hearty'],desc:'Thai spiced chicken on a sizzling hot plate',why:'spicy,celebrate'},
      {id:'ty_si2',  name:'Tangdi Chilli Paneer',          e:'🧀', price:339, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','celebrate','veg'],desc:'Chilli paneer tangdi style on a sizzler',why:'spicy,celebrate'},
      {id:'ty_si3',  name:'Indian Tadka Sizzler',          e:'🍽️',price:359, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','celebrate'],  desc:'Indian spiced chicken on a sizzler plate',why:'spicy,celebrate'},
      {id:'ty_si4',  name:'BBQ Chicken Sizzler',           e:'🍗', price:359, diet:'nonveg',seafood:false,redmeat:false,tags:['smoky','celebrate'],  desc:'BBQ glazed chicken on a sizzling plate',why:'hearty,celebrate'},
      {id:'ty_si5',  name:'Stuff Chicken Sizzler',         e:'🍗', price:369, diet:'nonveg',seafood:false,redmeat:false,tags:['hearty','celebrate'], desc:'Stuffed chicken on a sizzler',why:'hearty,celebrate'},
      {id:'ty_si6',  name:'Corn Papdi Sizzler',            e:'🌽', price:339, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','celebrate','veg'],desc:'Spiced corn papdi on a sizzler plate',why:'spicy,celebrate'},
    ],

    // ── PIZZA ──────────────────────────────────────────────
    pizza: [
      {id:'ty_pz1',  name:'Margherita Pizza',              e:'🍕', price:329, diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],       desc:'Classic tomato, mozzarella, basil',why:'light,veg'},
      {id:'ty_pz2',  name:'Prosciutto Pizza',              e:'🍕', price:339, diet:'nonveg',seafood:false,redmeat:true, tags:['hearty','rich'],      desc:'Italian prosciutto pizza with mozzarella',why:'hearty'},
      {id:'ty_pz3',  name:'Mushroom Spinach Pizza (Veg)',  e:'🍕', price:349, diet:'veg',   seafood:false,redmeat:false,tags:['hearty','veg'],       desc:'Mushroom and spinach pizza with mozzarella',why:'hearty,veg'},
      {id:'ty_pz4',  name:'Thai Chicken Pizza',            e:'🍕', price:369, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','hearty'],     desc:'Thai spiced chicken pizza',why:'spicy,hearty'},
      {id:'ty_pz5',  name:'Cheese BBQ Chicken Pizza',      e:'🍕', price:369, diet:'nonveg',seafood:false,redmeat:false,tags:['smoky','hearty'],     desc:'BBQ chicken pizza loaded with cheese',why:'hearty'},
      {id:'ty_pz6',  name:'Falhari Pizza',                 e:'🍕', price:329, diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],        desc:'Vegan-friendly falhari pizza',why:'light,veg'},
      {id:'ty_pz7',  name:'3 Cheese Veg Pizza',            e:'🍕', price:349, diet:'veg',   seafood:false,redmeat:false,tags:['rich','hearty','veg'],desc:'Three cheese vegetarian pizza',why:'hearty,veg'},
      {id:'ty_pz8',  name:'Cottage Cheese Pizza',          e:'🍕', price:339, diet:'veg',   seafood:false,redmeat:false,tags:['hearty','veg'],       desc:'Cottage cheese topped pizza',why:'hearty,veg'},
      {id:'ty_pz9',  name:'Meat Lover Pizza',              e:'🍕', price:389, diet:'nonveg',seafood:false,redmeat:true, tags:['hearty','rich'],      desc:'Loaded meat lover pizza',why:'hearty'},
      {id:'ty_pz10', name:'Veg Exotic Pizza',              e:'🍕', price:329, diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],        desc:'Exotic vegetable pizza',why:'light,veg'},
    ],

    // ── TANDOOR VEG ────────────────────────────────────────
    tandoor_veg: [
      {id:'ty_tv1',  name:'Paneer Tikka',                  e:'🧀', price:299, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','smoky','veg'],desc:'Classic tandoor paneer tikka',why:'spicy,veg'},
      {id:'ty_tv2',  name:'Paneer Multani',                e:'🧀', price:309, diet:'veg',   seafood:false,redmeat:false,tags:['rich','smoky','veg'], desc:'Paneer in Multani spice marinade',why:'hearty,veg'},
      {id:'ty_tv3',  name:'Angara Paneer Tikka',           e:'🔥', price:299, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','smoky','veg'],desc:'Charred angara style paneer tikka',why:'spicy,veg'},
      {id:'ty_tv4',  name:'Malai Paneer Tikka',            e:'🧀', price:319, diet:'veg',   seafood:false,redmeat:false,tags:['rich','creamy','veg'],desc:'Creamy malai marinated paneer from tandoor',why:'rich,veg'},
      {id:'ty_tv5',  name:'Chef Special Paneer Simpler',   e:'🧀', price:329, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','smoky','veg'],desc:"Chef's special paneer from the tandoor",why:'spicy,veg'},
      {id:'ty_tv6',  name:'Veg Burasi Kabab',              e:'🌿', price:299, diet:'veg',   seafood:false,redmeat:false,tags:['light','smoky','veg'],desc:'Vegetable burasi kabab',why:'light,veg'},
      {id:'ty_tv7',  name:'Kumbh Khajana',                 e:'🍄', price:309, diet:'veg',   seafood:false,redmeat:false,tags:['smoky','hearty','veg'],desc:'Mushroom and cheese tandoor special',why:'hearty,veg'},
    ],

    // ── TANDOOR NON-VEG ────────────────────────────────────
    tandoor_nv: [
      {id:'ty_tn1',  name:'Murg Tikka',                    e:'🍗', price:329, diet:'nonveg',seafood:false,redmeat:false,tags:['smoky','hearty'],     desc:'Classic chicken tikka from the tandoor',why:'hearty'},
      {id:'ty_tn2',  name:'Guntur Chicken Tikka',          e:'🍗', price:319, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','smoky'],      desc:'South Indian Guntur spiced chicken tikka',why:'spicy,hearty'},
      {id:'ty_tn3',  name:'Purple Chicken Tikka',          e:'🍗', price:319, diet:'nonveg',seafood:false,redmeat:false,tags:['bold','smoky'],       desc:'Purple spice marinated chicken tikka',why:'hearty'},
      {id:'ty_tn4',  name:'Amritsari Chicken Tikka',       e:'🍗', price:319, diet:'nonveg',seafood:false,redmeat:false,tags:['smoky','hearty'],     desc:'Amritsari style chicken tikka — North Indian classic',why:'hearty'},
      {id:'ty_tn5',  name:'Chicken Tikka',                 e:'🍗', price:329, diet:'nonveg',seafood:false,redmeat:false,tags:['smoky','hearty'],     desc:'Classic chicken tikka',why:'hearty'},
      {id:'ty_tn6',  name:'Mango Menaskai Kabab',          e:'🥭', price:319, diet:'nonveg',seafood:false,redmeat:false,tags:['tangy','spicy'],      desc:'Chicken kabab with mango and pepper marinade',why:'spicy,hearty'},
      {id:'ty_tn7',  name:'Mutton Seekh Kabab',            e:'🥩', price:299, diet:'nonveg',seafood:false,redmeat:true, tags:['smoky','hearty'],     desc:'Minced mutton seekh from the tandoor',why:'hearty'},
      {id:'ty_tn8',  name:'Chicken Chaapli Kabab',         e:'🍗', price:329, diet:'nonveg',seafood:false,redmeat:false,tags:['hearty','smoky'],     desc:'Peshwari style chaapli kabab',why:'hearty'},
    ],

    // ── FROM THE ORIENTAL ──────────────────────────────────
    oriental: [
      {id:'ty_or1',  name:'Crispy Corn Salt & Pepper',     e:'🌽', price:259, diet:'veg',   seafood:false,redmeat:false,tags:['crispy','spicy','veg'],desc:'The must-order — crispy corn with salt, pepper and chilli. Most reviewed dish at Torye',why:'spicy,drinky'},
      {id:'ty_or2',  name:'Smokey Chilli Paneer',          e:'🧀', price:289, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','drinky','veg'],desc:'Smoky paneer in chilli sauce',why:'spicy,drinky'},
      {id:'ty_or3',  name:'Mushroom Chilli',               e:'🍄', price:279, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','drinky','veg'],desc:'Mushroom in Indo-Chinese chilli sauce',why:'spicy,drinky'},
      {id:'ty_or4',  name:'Paneer Satay',                  e:'🧀', price:289, diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],        desc:'Marinated paneer satay with peanut sauce',why:'light,veg'},
      {id:'ty_or5',  name:'Chicken Satay',                 e:'🍗', price:299, diet:'nonveg',seafood:false,redmeat:false,tags:['light','hearty'],     desc:'Grilled chicken satay with peanut dipping sauce',why:'light,hearty'},
      {id:'ty_or6',  name:'Mushroom Tengi',                e:'🍄', price:279, diet:'veg',   seafood:false,redmeat:false,tags:['crispy','drinky','veg'],desc:'Crispy mushroom tengi',why:'drinky,veg'},
      {id:'ty_or7',  name:'Puked Baby Corn',               e:'🌽', price:269, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','crispy','veg'],desc:'Crispy baby corn in spiced coating',why:'spicy,drinky'},
      {id:'ty_or8',  name:'Drums of Heaven',               e:'🍗', price:299, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','drinky'],     desc:'Crispy chicken drumettes in spicy glaze',why:'spicy,drinky'},
      {id:'ty_or9',  name:'Orange Chicken Chilli',         e:'🍊', price:299, diet:'nonveg',seafood:false,redmeat:false,tags:['tangy','spicy','drinky'],desc:'Crispy chicken in orange chilli sauce',why:'spicy,drinky'},
      {id:'ty_or10', name:'Chicken Wings (Hot Garlic/Schezwan/Peri)',e:'🍗',price:319,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','drinky','sharing'],desc:'Chicken wings in choice of sauce — hot garlic, schezwan or peri peri',why:'spicy,drinky'},
      {id:'ty_or11', name:'Chicken Wings Sweet Chilli Sauce',e:'🍗',price:309,diet:'nonveg',seafood:false,redmeat:false,tags:['sweet','drinky'],     desc:'Wings in sweet chilli sauce — lighter option',why:'drinky'},
      {id:'ty_or12', name:'Chicken 65',                    e:'🍗', price:309, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','crispy'],     desc:'Classic South Indian chicken 65',why:'spicy,hearty'},
      {id:'ty_or13', name:'Phuket Chicken',                e:'🍗', price:309, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','aromatic'],   desc:'Thai Phuket style chicken',why:'spicy,hearty'},
    ],

    // ── THAI CURRY ─────────────────────────────────────────
    thai_curry: [
      {id:'ty_th1',  name:'Thai Green Curry (Veg)',        e:'🍛', price:289, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','aromatic','veg'],desc:'Thai green coconut curry with vegetables',why:'spicy,veg'},
      {id:'ty_th2',  name:'Thai Green Curry (Non-Veg)',    e:'🍛', price:319, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','aromatic'],   desc:'Thai green coconut curry with chicken',why:'spicy,hearty'},
      {id:'ty_th3',  name:'Thai Red Curry (Non-Veg)',      e:'🍛', price:319, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','rich'],       desc:'Thai red coconut curry with chicken',why:'spicy,hearty'},
      {id:'ty_th4',  name:'American Chopseuy (Veg)',       e:'🍜', price:289, diet:'veg',   seafood:false,redmeat:false,tags:['tangy','hearty','veg'],desc:'Crispy noodles with sweet and sour veg sauce',why:'hearty,veg'},
    ],

    // ── RICE & NOODLES ─────────────────────────────────────
    rice_noodles: [
      {id:'ty_rn1',  name:'Basil Garlic Veg Noodles',     e:'🍜', price:289, diet:'veg',   seafood:false,redmeat:false,tags:['aromatic','hearty','veg'],desc:'Noodles tossed with garlic and fresh basil',why:'hearty,veg'},
      {id:'ty_rn2',  name:'Schezwan Noodles',             e:'🍜', price:289, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','hearty','veg'],desc:'Spicy Schezwan noodles',why:'spicy,veg'},
      {id:'ty_rn3',  name:'Veg Fried Rice',               e:'🍚', price:279, diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],        desc:'Classic vegetable fried rice',why:'light,veg'},
      {id:'ty_rn4',  name:'Mix Fried Rice Non Veg',       e:'🍚', price:319, diet:'nonveg',seafood:false,redmeat:false,tags:['hearty'],             desc:'Mixed non-veg fried rice',why:'hearty'},
      {id:'ty_rn5',  name:'Sea Food Fried Rice',          e:'🍚', price:329, diet:'nonveg',seafood:true, redmeat:false,tags:['hearty','umami'],     desc:'Seafood fried rice with prawns and fish',why:'hearty'},
      {id:'ty_rn6',  name:'Pineapple Fried Rice Veg',     e:'🍍', price:279, diet:'veg',   seafood:false,redmeat:false,tags:['sweet','fruity','veg'],desc:'Thai pineapple fried rice — sweet and savoury',why:'light,veg'},
      {id:'ty_rn7',  name:'Jeera Rice',                   e:'🍚', price:179, diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],        desc:'Fragrant jeera rice',why:'light,veg'},
      {id:'ty_rn8',  name:'Mithya Mothi Pulao',           e:'🍚', price:199, diet:'veg',   seafood:false,redmeat:false,tags:['aromatic','veg'],     desc:'Aromatic pearl pulao',why:'light,veg'},
    ],

    // ── BIRYANI ────────────────────────────────────────────
    biryani: [
      {id:'ty_bi1',  name:'Dum Matka Biryani (Veg)',      e:'🍚', price:239, diet:'veg',   seafood:false,redmeat:false,tags:['hearty','aromatic','veg'],desc:'Vegetable dum biryani cooked in a matka',why:'hearty,veg'},
      {id:'ty_bi2',  name:'Dum Matka Biryani (Non-Veg)',  e:'🍚', price:289, diet:'nonveg',seafood:false,redmeat:false,tags:['hearty','aromatic'],  desc:'Chicken dum biryani cooked in a matka — the crowd favourite',why:'hearty'},
      {id:'ty_bi3',  name:'Egg Biryani',                  e:'🍚', price:249, diet:'egg',   seafood:false,redmeat:false,tags:['hearty'],             desc:'Egg biryani with fragrant basmati',why:'hearty'},
      {id:'ty_bi4',  name:'Mutton Biryani',               e:'🍚', price:349, diet:'nonveg',seafood:false,redmeat:true, tags:['rich','hearty','celebrate'],desc:'Rich mutton dum biryani',why:'hearty,celebrate'},
      {id:'ty_bi5',  name:'Prawns Biryani',               e:'🍚', price:389, diet:'nonveg',seafood:true, redmeat:false,tags:['hearty','special'],   desc:'Fragrant prawn biryani',why:'hearty,celebrate'},
    ],

    // ── INDIAN CURRIES NON-VEG ─────────────────────────────
    indian_curry_nv: [
      {id:'ty_ic1',  name:'Butter Chicken',               e:'🍗', price:319, diet:'nonveg',seafood:false,redmeat:false,tags:['rich','hearty','comfort'],desc:'Classic butter chicken — creamy tomato gravy',why:'hearty,rich'},
      {id:'ty_ic2',  name:'Hyderabadi Chicken',           e:'🍗', price:309, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','hearty'],     desc:'Hyderabadi style chicken curry',why:'spicy,hearty'},
      {id:'ty_ic3',  name:'Chicken Korma',                e:'🍗', price:329, diet:'nonveg',seafood:false,redmeat:false,tags:['rich','hearty'],      desc:'Mughlai chicken in rich cashew gravy',why:'rich,hearty'},
      {id:'ty_ic4',  name:'Mutton Rogan Josh',            e:'🥩', price:399, diet:'nonveg',seafood:false,redmeat:true, tags:['rich','hearty','spicy'],desc:'Kashmiri mutton in aromatic rogan josh sauce',why:'hearty,rich'},
      {id:'ty_ic5',  name:'Chicken Bharta Masala',        e:'🍗', price:329, diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','smoky'],      desc:'Roasted chicken in bharta masala',why:'spicy,hearty'},
      {id:'ty_ic6',  name:'Chettinad Prawns',             e:'🦐', price:389, diet:'nonveg',seafood:true, redmeat:false,tags:['spicy','hearty'],     desc:'South Indian Chettinad style prawns',why:'spicy,hearty'},
      {id:'ty_ic7',  name:'Pomfret Curry',                e:'🐟', price:499, diet:'nonveg',seafood:true, redmeat:false,tags:['spicy','coastal'],    desc:'Fresh pomfret in coastal style curry',why:'spicy,hearty'},
    ],

    // ── INDIAN CURRIES VEG ─────────────────────────────────
    indian_curry_veg: [
      {id:'ty_iv1',  name:'Paneer Butter Masala',         e:'🧀', price:299, diet:'veg',   seafood:false,redmeat:false,tags:['rich','hearty','veg'],desc:'Paneer in rich tomato-cream gravy',why:'hearty,veg'},
      {id:'ty_iv2',  name:'Dal Makhani',                  e:'🫘', price:209, diet:'veg',   seafood:false,redmeat:false,tags:['rich','hearty','veg'],desc:'Slow-cooked black dal with butter',why:'hearty,veg'},
      {id:'ty_iv3',  name:'Kadai Paneer',                 e:'🧀', price:299, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','hearty','veg'],desc:'Paneer in spiced kadai masala',why:'spicy,veg'},
      {id:'ty_iv4',  name:'Gobi Masala',                  e:'🥦', price:279, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','veg'],        desc:'Cauliflower in spiced masala gravy',why:'spicy,veg'},
      {id:'ty_iv5',  name:'Palak Paneer',                 e:'🥬', price:299, diet:'veg',   seafood:false,redmeat:false,tags:['light','hearty','veg'],desc:'Paneer in spinach purée',why:'hearty,veg'},
      {id:'ty_iv6',  name:'Mushroom Masala',              e:'🍄', price:289, diet:'veg',   seafood:false,redmeat:false,tags:['spicy','veg'],         desc:'Mushrooms in spiced masala',why:'spicy,veg'},
    ],

    // ── INDIAN BREADS ──────────────────────────────────────
    breads: [
      {id:'ty_br1',  name:'Missi Roti',                   e:'🫓', price:69,  diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],        desc:'Traditional Punjabi missi roti',why:'light,veg'},
      {id:'ty_br2',  name:'Naan',                         e:'🫓', price:69,  diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],        desc:'Classic tandoor naan',why:'light,veg'},
      {id:'ty_br3',  name:'Garlic Naan',                  e:'🧄', price:79,  diet:'veg',   seafood:false,redmeat:false,tags:['light','veg'],        desc:'Garlic butter naan',why:'light,veg'},
      {id:'ty_br4',  name:'Cheese Garlic Naan',           e:'🧀', price:99,  diet:'veg',   seafood:false,redmeat:false,tags:['hearty','veg'],       desc:'Loaded cheese garlic naan',why:'hearty,veg'},
      {id:'ty_br5',  name:'Paneer Paratha',               e:'🧀', price:89,  diet:'veg',   seafood:false,redmeat:false,tags:['hearty','veg'],       desc:'Stuffed paneer paratha',why:'hearty,veg'},
    ],

    // ── DESSERTS ───────────────────────────────────────────
    desserts: [
      {id:'ty_ds1',  name:'Fried Ice Cream with Apple',   e:'🍎', price:229, diet:'veg',   seafood:false,redmeat:false,tags:['sweet','indulgent'],  desc:'Crispy fried ice cream with caramelised apple — house special dessert',why:'sweet,celebrate'},
      {id:'ty_ds2',  name:'Boondi Roll with Rabri',       e:'🍮', price:259, diet:'veg',   seafood:false,redmeat:false,tags:['sweet','rich'],       desc:'Classic boondi roll with creamy rabri',why:'sweet,celebrate'},
      {id:'ty_ds3',  name:'Gulab Jamun',                  e:'🍮', price:169, diet:'veg',   seafood:false,redmeat:false,tags:['sweet','comfort'],    desc:'Soft gulab jamun in warm sugar syrup',why:'sweet,comfort'},
    ],

    // ── AAMLICIOUS SPECIAL MENU ────────────────────────────
    aamlicious: [
      {id:'ty_am1',  name:'Mango Corn Chaat',             e:'🥭', price:329, diet:'veg',   seafood:false,redmeat:false,tags:['tangy','fresh','veg','special'],desc:'Raw mango, corn, onions, peanuts, raisins, lime and chutney',why:'light,veg'},
      {id:'ty_am2',  name:'Tawa Mango Kebab',             e:'🥭', price:299, diet:'veg',   seafood:false,redmeat:false,tags:['tangy','light','veg','special'],desc:'Raw mango with mushroom, mashed potatoes and paneer — tawa grilled',why:'light,veg'},
      {id:'ty_am3',  name:'Mango Dahi ke Kebab',          e:'🥭', price:349, diet:'veg',   seafood:false,redmeat:false,tags:['tangy','light','veg','special'],desc:'Fried patties made with hung curd and raw mango',why:'light,veg'},
      {id:'ty_am4',  name:'Paneer Mango Pudina Tikka',    e:'🥭', price:349, diet:'veg',   seafood:false,redmeat:false,tags:['tangy','smoky','veg','special'],desc:'Paneer in mango sauce with turmeric, onion and bell peppers in clay oven',why:'spicy,veg'},
      {id:'ty_am5',  name:'Mango Chicken Tikka',          e:'🥭', price:389, diet:'nonveg',seafood:false,redmeat:false,tags:['tangy','smoky','special'],desc:'Mango fusion boneless chicken grilled in tandoor',why:'tangy,hearty'},
      {id:'ty_am6',  name:'Mango Mastani',                e:'🥭', price:449, diet:'veg',   seafood:false,redmeat:false,tags:['sweet','special','veg'],desc:'Sweet-spiced curry with mango, tomatoes and coconut milk',why:'sweet,celebrate'},
      {id:'ty_am7',  name:'Mango Meenakshi Curry',        e:'🥭', price:449, diet:'veg',   seafood:false,redmeat:false,tags:['sweet','tangy','veg','special'],desc:'Garam masala blend with sweet mangoes, tangy tomatoes and coconut milk',why:'hearty,veg'},
    ],
  },

  drinks: {
    // ── AAMLICIOUS MOCKTAILS ───────────────────────────────
    aamlicious_mocktails: [
      {id:'ty_am8',  name:'Mango Fizz',                   e:'🥭', price:269, diet:'veg', tags:['fruity','fresh','light'],       desc:'Ripe mango with lime, honey and fizz',why:'light,drinky'},
      {id:'ty_am9',  name:'Spicy Mango Ginger',           e:'🥭', price:289, diet:'veg', tags:['spicy','fruity','tangy'],       desc:'Sweet mango, zesty lime and a kick of ginger',why:'spicy,drinky'},
      {id:'ty_am10', name:'Kachha Aam Ras',               e:'🥭', price:289, diet:'veg', tags:['tangy','fresh'],               desc:'Raw mango chunk, mint and bar hops topped with lemonade',why:'tangy,light'},
      {id:'ty_am11', name:'Mango Overload',               e:'🥭', price:289, diet:'veg', tags:['fruity','sweet','rich'],        desc:'Banana, fresh mango pulp, honey and yoghurt',why:'sweet,light'},
      {id:'ty_am12', name:'Mango Lassi',                  e:'🥭', price:199, diet:'veg', tags:['sweet','light','fresh'],        desc:'Delicious creamy mango and yoghurt blend with cardamom',why:'sweet,light'},
      {id:'ty_am13', name:'Aam Panna',                    e:'🥭', price:199, diet:'veg', tags:['tangy','fresh','spicy'],        desc:'Refreshing raw mango pulp with cumin, jeera and mint',why:'light,drinky'},
    ],

    // ── AAMLICIOUS COCKTAILS ───────────────────────────────
    aamlicious_cocktails: [
      {id:'ty_am14', name:'Fresh Mango Margarita',        e:'🥭', price:479, diet:'veg', tags:['fruity','tangy','celebrate'],   desc:'Fresh mango pulp, lime juice and tequila',why:'celebrate,drinky'},
      {id:'ty_am15', name:'Mango LIIT',                   e:'🥭', price:579, diet:'veg', tags:['celebrate','hearty','fruity'],  desc:'Gin, white rum, tequila, mango purée, lime juice and mint',why:'celebrate,drinky'},
      {id:'ty_am16', name:'Mango Ginger Gin Fizz',        e:'🥭', price:489, diet:'veg', tags:['fruity','fresh','celebrate'],   desc:'Mango diced, ginger, lime, gin and mango purée',why:'celebrate,light'},
      {id:'ty_am17', name:'Mango Mary',                   e:'🥭', price:479, diet:'veg', tags:['spicy','tangy','celebrate'],    desc:'Chopped mango, pineapple juice, vodka and Worcestershire',why:'spicy,celebrate'},
    ],

    // ── BAR BITES (on drinks screen) ──────────────────────
    bar_bites: [
      {id:'ty_db1',  name:'Crispy Corn Salt & Pepper',    e:'🌽', price:259, diet:'veg',    tags:['crispy','spicy','drinky'],  desc:'Torye signature — the most reviewed dish',why:'spicy,drinky'},
      {id:'ty_db2',  name:'Fries Dusted',                 e:'🍟', price:229, diet:'veg',    tags:['light','drinky','veg'],    desc:'Dusted fries — your choice of seasoning',why:'light,drinky'},
      {id:'ty_db3',  name:'Torye Special Nachos (Veg)',   e:'🌮', price:229, diet:'veg',    tags:['drinky','sharing','veg'],  desc:'Torye loaded nachos',why:'drinky,veg'},
      {id:'ty_db4',  name:'Chicken Wings',                e:'🍗', price:319, diet:'nonveg', tags:['spicy','drinky'],          desc:'Wings in choice of sauce',why:'spicy,drinky'},
      {id:'ty_db5',  name:'Drums of Heaven',              e:'🍗', price:299, diet:'nonveg', tags:['spicy','drinky'],          desc:'Crispy drumettes — spicy and addictive',why:'spicy,drinky'},
    ],
  },
};

const TORYE_POPULAR = {
  most_ordered: [
    {id:'ty_or1',  badge:'🔥 Most Ordered'},   // Crispy Corn Salt & Pepper — most reviewed
    {id:'ty_sb12', badge:'🔥 Most Ordered'},   // Butter Garlic Thyme Prawns
    {id:'ty_bi2',  badge:'🔥 Most Ordered'},   // Dum Matka Biryani Non-Veg
    {id:'ty_or10', badge:'🔥 Most Ordered'},   // Chicken Wings
    {id:'ty_ic1',  badge:'🔥 Most Ordered'},   // Butter Chicken
  ],
  chefs_pick: [
    {id:'ty_am1',  badge:"Chef's Pick"},        // Mango Corn Chaat (seasonal)
    {id:'ty_si1',  badge:"Chef's Pick"},        // Thai Chicken Sizzler
    {id:'ty_cs1',  badge:"Chef's Pick"},        // Spring Roasted Chicken
    {id:'ty_am15', badge:"Chef's Pick"},        // Mango LIIT
    {id:'ty_ds1',  badge:"Chef's Pick"},        // Fried Ice Cream with Apple
  ],
  trending: [
    {id:'ty_sb17', badge:'✨ Trending'},        // Golden Chicken Nuggets
    {id:'ty_or9',  badge:'✨ Trending'},        // Orange Chicken Chilli
    {id:'ty_pz4',  badge:'✨ Trending'},        // Thai Chicken Pizza
    {id:'ty_bq1',  badge:'✨ Trending'},        // Grilled Jerk Pineapple Skewers
    {id:'ty_am14', badge:'✨ Trending'},        // Fresh Mango Margarita
  ],
};

const TORYE_DRINK_HINT = {
  spicy:     '🌶️ Fiery choice! The Mango LIIT or a fresh Mango Margarita will cool you down perfectly.',
  light:     '🌿 Keeping it light? The Mango Fizz or Aam Panna — made for warm evenings.',
  hearty:    '🍗 Big meal? A Mango Ginger Gin Fizz or the seasonal cocktails pair beautifully.',
  celebrate: '🎉 Celebrating? Mango LIIT is the house favourite — the ultimate party starter.',
  default:   "Welcome to Torye! Food is not just a necessity, but an art. Here's what pairs perfectly tonight.",
};

window.MESA_RESTO_CONFIG = {
  id:       'torye-rrnagar',
  name:     'Torye',
  tagline:  'Drink. Dine. Dance.',
  location: 'RR Nagar, Bangalore',
  accent:   '#4A7C59',  // deep forest green — matches Torye brand

  menu:     TORYE_MENU,
  popular:  TORYE_POPULAR,
  drinkHint:TORYE_DRINK_HINT,

  courseMap: {
    starters: ['soups','salads','small_bites','oven_toasts','bbq',
                'continental_special','tandoor_veg','tandoor_nv','oriental',
                'sizzlers','aamlicious'],
    mains:    ['pasta','pizza','thai_curry','rice_noodles','biryani',
                'indian_curry_nv','indian_curry_veg','breads'],
    desserts: ['desserts'],
  },

  drinkTabs: [
    {key:'aamlicious_cocktails', label:'🥭 Mango Cocktails'},
    {key:'aamlicious_mocktails', label:'🥭 Mango Mocktails'},
    {key:'bar_bites',            label:'🍢 Bar Bites'},
  ],

  quickPicks: {
    starters: [
      {id:'ty_or1',  badge:'Most Ordered', why:'Crispy Corn Salt & Pepper — THE Torye dish'},
      {id:'ty_sb12', badge:'Most Ordered', why:'Butter Garlic Thyme Prawns — rich and indulgent'},
      {id:'ty_or10', badge:"Chef's Pick",  why:'Chicken Wings — your choice of sauce'},
    ],
    mains: [
      {id:'ty_bi2',  badge:'Most Ordered', why:'Dum Matka Biryani — fragrant and satisfying'},
      {id:'ty_ic1',  badge:'Most Ordered', why:'Butter Chicken — the crowd classic'},
      {id:'ty_si1',  badge:"Chef's Pick",  why:'Thai Chicken Sizzler — dramatic and delicious'},
    ],
    desserts: [
      {id:'ty_ds1',  badge:'Most Ordered', why:'Fried Ice Cream with Apple — the house special'},
      {id:'ty_ds2',  badge:"Chef's Pick",  why:'Boondi Roll with Rabri — traditional and rich'},
      {id:'ty_ds3',  badge:'Trending',     why:'Gulab Jamun — classic warm dessert'},
    ],
  },

  cuisines: [
    {cu:'mango_special', label:'🥭 Aamlicious Special', sub:'Mango-themed dishes and cocktails'},
    {cu:'continental',   label:'Continental',           sub:'Pasta, Pizza, Sizzlers, BBQ'},
    {cu:'northindian',   label:'North Indian',          sub:'Biryani, Tandoor, Indian Curries'},
    {cu:'oriental',      label:'Oriental',              sub:'Crispy Corn, Wings, Manchurian'},
    {cu:'thai',          label:'Thai',                  sub:'Green/Red Curry, Thai Chicken'},
    {cu:'cocktails',     label:'Drinks Only',           sub:'Mango cocktails and mocktails'},
  ],

  cuisineBySubcat: {
    soups:'global',         salads:'global',        small_bites:'global',
    oven_toasts:'global',   bbq:'continental',      continental_special:'continental',
    pasta:'continental',    sizzlers:'continental', pizza:'continental',
    tandoor_veg:'northindian',tandoor_nv:'northindian',oriental:'asian',
    thai_curry:'thai',      rice_noodles:'asian',   biryani:'northindian',
    indian_curry_nv:'northindian',indian_curry_veg:'northindian',
    breads:'northindian',   desserts:'global',      aamlicious:'global',
  },

  styleToTab: {
    beer:     'aamlicious_mocktails',
    cocktail: 'aamlicious_cocktails',
    spirits:  'aamlicious_cocktails',
    mocktail: 'aamlicious_mocktails',
  },

  drinkFlavorOptions: {
    beer: [
      {val:'fruity', e:'🥭', lbl:'Mango & Fruity',   sub:'Mango Fizz, Aam Panna, Kachha Aam Ras'},
      {val:'light',  e:'🌿', lbl:'Fresh & Light',    sub:'Mango Lassi, Aam Panna'},
      {val:'tangy',  e:'🍋', lbl:'Tangy & Raw',      sub:'Kachha Aam Ras, Spicy Mango Ginger'},
      {val:'sweet',  e:'🍯', lbl:'Sweet & Indulgent', sub:'Mango Overload, Mango Lassi'},
    ],
    cocktail: [
      {val:'sweet',  e:'🥭', lbl:'Mango Margarita',  sub:'Fresh mango pulp, tequila, lime'},
      {val:'sour',   e:'🌶️', lbl:'Mango Mary',       sub:'Spicy mango vodka cocktail'},
      {val:'herby',  e:'🫧', lbl:'Mango Gin Fizz',   sub:'Ginger, gin and mango purée'},
      {val:'spicy',  e:'🎉', lbl:'Mango LIIT',       sub:'The ultimate party cocktail'},
    ],
    spirits: [
      {val:'sweet',  e:'🥭', lbl:'Mango Margarita',  sub:'Fresh mango with tequila'},
      {val:'spicy',  e:'🎉', lbl:'Mango LIIT',       sub:'Gin, rum, tequila, mango'},
      {val:'herby',  e:'🫧', lbl:'Mango Gin Fizz',   sub:'Gin, ginger, mango'},
      {val:'sour',   e:'🌶️', lbl:'Mango Mary',       sub:'Vodka, mango, Worcestershire'},
    ],
    mocktail: [
      {val:'fruity', e:'🥭', lbl:'Mango Overload',   sub:'Mango, banana, honey, yoghurt'},
      {val:'tangy',  e:'🍋', lbl:'Kachha Aam Ras',   sub:'Raw mango, mint, lemonade'},
      {val:'cool',   e:'🌿', lbl:'Mango Fizz',       sub:'Ripe mango, lime, honey, fizz'},
      {val:'spicy',  e:'🫚', lbl:'Spicy Mango Ginger',sub:'Mango, ginger, zesty lime'},
    ],
  },

  drinkScoreMap: {
    'beer+fruity':      ['ty_am11','ty_am12','ty_am8','ty_am10','ty_am13'],
    'beer+light':       ['ty_am12','ty_am13','ty_am8','ty_am9','ty_am10'],
    'beer+tangy':       ['ty_am10','ty_am9','ty_am13','ty_am8','ty_am11'],
    'beer+sweet':       ['ty_am11','ty_am12','ty_am8','ty_am13','ty_am10'],
    'cocktail+sweet':   ['ty_am14','ty_am16','ty_am15','ty_am17'],
    'cocktail+sour':    ['ty_am17','ty_am14','ty_am15','ty_am16'],
    'cocktail+herby':   ['ty_am16','ty_am14','ty_am15','ty_am17'],
    'cocktail+spicy':   ['ty_am15','ty_am17','ty_am14','ty_am16'],
    'spirits+sweet':    ['ty_am14','ty_am16','ty_am15','ty_am17'],
    'spirits+spicy':    ['ty_am15','ty_am17','ty_am14','ty_am16'],
    'spirits+herby':    ['ty_am16','ty_am14','ty_am15','ty_am17'],
    'spirits+sour':     ['ty_am17','ty_am14','ty_am16','ty_am15'],
    'mocktail+fruity':  ['ty_am11','ty_am8','ty_am12','ty_am9'],
    'mocktail+tangy':   ['ty_am10','ty_am9','ty_am13','ty_am8'],
    'mocktail+cool':    ['ty_am8','ty_am13','ty_am12','ty_am9'],
    'mocktail+spicy':   ['ty_am9','ty_am13','ty_am10','ty_am8'],
  },

  barBitesPairing: {
    aamlicious_cocktails: ['ty_db1','ty_db4','ty_db3','ty_db2','ty_db5'],
    aamlicious_mocktails: ['ty_db1','ty_db2','ty_db3','ty_db5','ty_db4'],
    bar_bites:            ['ty_db1','ty_db2','ty_db4','ty_db5','ty_db3'],
  },

  drinkBitesMap: {
    'cocktail+sweet':   ['ty_db1','ty_db3','ty_db2','ty_db5'],
    'cocktail+sour':    ['ty_db4','ty_db1','ty_db5','ty_db2'],
    'cocktail+herby':   ['ty_db1','ty_db2','ty_db3','ty_db5'],
    'cocktail+spicy':   ['ty_db5','ty_db4','ty_db1','ty_db2'],
    'spirits+sweet':    ['ty_db1','ty_db3','ty_db2','ty_db4'],
    'spirits+spicy':    ['ty_db4','ty_db5','ty_db1','ty_db2'],
    'spirits+herby':    ['ty_db1','ty_db2','ty_db3','ty_db5'],
    'spirits+sour':     ['ty_db4','ty_db1','ty_db5','ty_db3'],
    'beer+fruity':      ['ty_db1','ty_db2','ty_db3','ty_db5'],
    'beer+light':       ['ty_db2','ty_db1','ty_db3','ty_db5'],
    'beer+tangy':       ['ty_db1','ty_db5','ty_db4','ty_db2'],
    'beer+sweet':       ['ty_db3','ty_db1','ty_db2','ty_db5'],
    'mocktail+fruity':  ['ty_db1','ty_db2','ty_db3','ty_db5'],
    'mocktail+tangy':   ['ty_db1','ty_db5','ty_db4','ty_db2'],
    'mocktail+cool':    ['ty_db2','ty_db1','ty_db3','ty_db5'],
    'mocktail+spicy':   ['ty_db4','ty_db5','ty_db1','ty_db2'],
  },

  drinksPairingIds: new Set([
    'ty_db1','ty_db2','ty_db3','ty_db4','ty_db5',
    'ty_sb1','ty_sb7','ty_sb22','ty_or1',
  ]),

  barFirst: false,
};
