// shared-menu.js — Suka menu data shared between customer app and admin
// Auto-extracted from index.html

var MENU = {
  food:{
    recommended:[
      {id:'rec1',name:'Madras Chicken Kari Kuzhambu With Idli',e:'🍲',price:496,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','hearty','aromatic','comfort'],desc:'Highly flavorful South Indian chicken curry, served with soft idli',why:'spicy,hearty',spice:2},
    ],
    all_day_snacks:[
      {id:'ads1',name:'French Fries Classic',e:'🍟',price:249,diet:'veg',seafood:false,redmeat:false,tags:['light','drinky','snack','veg'],desc:'Crispy golden fries, light seasoning',why:'drinky,light',spice:0},
      {id:'ads2',name:'Masala Papad',e:'🫓',price:149,diet:'veg',seafood:false,redmeat:false,tags:['drinky','snack','veg','light'],desc:'Crispy papad with spiced onion topping',why:'drinky,light',spice:1},
      {id:'ads3',name:'Loaded Nachos',e:'🌮',price:349,diet:'veg',seafood:false,redmeat:false,tags:['drinky','sharing','veg'],desc:'Corn chips, salsa, sour cream, jalapeños',why:'drinky',spice:1,sharing:true},
      {id:'ads4',name:'Bread Basket',e:'🍞',price:199,diet:'veg',seafood:false,redmeat:false,tags:['light','comfort','veg'],desc:'Assorted breads with dips',why:'light',spice:0},
    ],
    special_appetizers:[
      {id:'spa1',name:'Spicy Mango Chili Wings',e:'🍗',price:496,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','tangy','celebrate','sharing'],desc:'Tangy mango chili glaze on crispy wings — great to share',why:'spicy,celebrate',spice:2,sharing:true},
      {id:'spa2',name:'Curry Leaf Pesto Fish Tikka',e:'🐟',price:524,diet:'nonveg',seafood:true,redmeat:false,tags:['light','umami','fresh'],desc:'Nutty curry leaf pesto on tender fish tikka',why:'light',spice:1},
      {id:'spa3',name:'Raw Mango & Peanut Salad',e:'🥗',price:392,diet:'veg',seafood:false,redmeat:false,tags:['spicy','tangy','light','fresh','veg'],desc:'A spicy, tangy salad with raw mango and crunchy peanuts',why:'spicy,light',spice:2},
    ],
    suka_signature:[
      {id:'sig1',name:'Anjal Tawa Fry',e:'🐟',price:670,diet:'nonveg',seafood:true,redmeat:false,tags:['spicy','smoky','hearty'],desc:'Aromatic South Indian style tawa-fried kingfish',why:'spicy,hearty',spice:2},
      {id:'sig2',name:'Boneless Mutton Junglee Mass',e:'🍖',price:690,diet:'nonveg',seafood:false,redmeat:true,tags:['spicy','hearty','rich'],desc:'Traditional Rajasthani style boneless mutton, bold spices',why:'spicy,hearty',spice:2},
      {id:'sig3',name:'Crab Sukka Rasam With Idli & Raw Mango',e:'🦀',price:881,diet:'nonveg',seafood:true,redmeat:false,tags:['spicy','hearty','celebrate','umami'],desc:'Combines fresh crab sukka, tangy rasam served with idli',why:'spicy,celebrate',spice:2},
    ],
    soup:[
      {id:'sou1',name:'Chicken Mosambi Coriander Soup',e:'🥣',price:361,diet:'nonveg',seafood:false,redmeat:false,tags:['light','fresh','comfort'],desc:'Refreshing tangy chicken broth with mosambi and coriander',why:'light',spice:1},
      {id:'sou2',name:'Mosambi Coriander Vegetable Soup',e:'🥣',price:298,diet:'veg',seafood:false,redmeat:false,tags:['light','fresh','comfort','veg'],desc:'Refreshing citrus-coriander broth with seasonal vegetables',why:'light',spice:1},
      {id:'sou3',name:'Pumpkin Soup',e:'🎃',price:298,diet:'veg',seafood:false,redmeat:false,tags:['light','comfort','veg'],desc:'Silky pumpkin broth, roasted spice swirl, cream',why:'light',spice:0},
      {id:'sou4',name:'Cream of Broccoli',e:'🥦',price:298,diet:'veg',seafood:false,redmeat:false,tags:['light','comfort','veg'],desc:'Silky broccoli cream soup, garlic croutons',why:'light',spice:0},
      {id:'sou5',name:'Tom Yum Prawn',e:'🍜',price:349,diet:'nonveg',seafood:true,redmeat:false,tags:['spicy','light','fresh'],desc:'Classic Thai hot & sour prawn soup, lemongrass',why:'spicy,light',spice:2},
    ],
    salad:[
      {id:'sal1',name:'Raw Mango Salad',e:'🥗',price:407,diet:'veg',seafood:false,redmeat:false,tags:['light','fresh','tangy','veg'],desc:'Shredded raw mango, peanuts, herbs',why:'light',spice:1},
      {id:'sal2',name:'Very Peri Bowl Salad',e:'🥗',price:430,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','light','fresh'],desc:'Peri peri grilled chicken on fresh greens',why:'spicy,light',spice:2},
      {id:'sal3',name:'Greek Salad',e:'🥗',price:349,diet:'veg',seafood:false,redmeat:false,tags:['light','fresh','veg'],desc:'Cucumber, tomato, olives, feta, oregano dressing',why:'light',spice:0},
      {id:'sal4',name:'Watermelon Feta Mint',e:'🍉',price:369,diet:'veg',seafood:false,redmeat:false,tags:['light','fresh','veg'],desc:'Chilled watermelon, crumbled feta, mint, balsamic',why:'light',spice:0},
    ],
    bar_bites:[
      {id:'bar1',name:'Tempura Batter Prawn Pops',e:'🍤',price:540,diet:'nonveg',seafood:true,redmeat:false,tags:['drinky','light','crispy'],desc:'Bite-sized prawns in crispy tempura batter',why:'drinky,light',spice:1},
      {id:'bar2',name:'Chilli Cheese Toast',e:'🧀',price:249,diet:'veg',seafood:false,redmeat:false,tags:['drinky','snack','veg'],desc:'Toasted bread, melted cheddar, green chilli',why:'drinky,veg',spice:1},
      {id:'bar3',name:'Chicken Satay (4 pcs)',e:'🍡',price:349,diet:'nonveg',seafood:false,redmeat:false,tags:['drinky','light','sharing'],desc:'Grilled chicken skewers, peanut satay sauce',why:'drinky,light',spice:1,sharing:true},
      {id:'bar4',name:'Masala Peanuts',e:'🥜',price:149,diet:'veg',seafood:false,redmeat:false,tags:['drinky','snack','veg','light'],desc:'Spiced roasted peanuts, perfect with drinks',why:'drinky,light',spice:1},
    ],
    veg_starter:[
      {id:'vs1',name:'Babycorn Pepper Fry (South Style)',e:'🌽',price:416,diet:'veg',seafood:false,redmeat:false,tags:['spicy','crispy','veg'],desc:'Crispy babycorn tossed with black pepper, curry leaves',why:'spicy,veg',spice:2},
      {id:'vs2',name:'Paneer Tikka',e:'🧀',price:439,diet:'veg',seafood:false,redmeat:false,tags:['spicy','veg'],desc:'Tandoor-smoked paneer, mint chutney, pickled onion',why:'spicy,veg',spice:1},
      {id:'vs3',name:'Crispy Crumbs Onion Rings',e:'🧅',price:393,diet:'veg',seafood:false,redmeat:false,tags:['crispy','drinky','veg'],desc:'Crispy crumb-coated onion rings, sriracha dip',why:'drinky,veg',spice:1},
      {id:'vs4',name:'Falafel With Tadka Beet Hummus',e:'🟤',price:416,diet:'veg',seafood:false,redmeat:false,tags:['light','fresh','veg'],desc:'Crispy golden falafel on smoky beetroot hummus',why:'light,veg',spice:1},
      {id:'vs5',name:'Fiery Cheese Toasties',e:'🍞',price:320,diet:'veg',seafood:false,redmeat:false,tags:['spicy','drinky','veg'],desc:'Crispy french toasties with fiery cheese filling',why:'spicy,drinky',spice:2},
      {id:'vs6',name:'Mushroom Chilli',e:'🍄',price:416,diet:'veg',seafood:false,redmeat:false,tags:['spicy','umami','veg'],desc:'Indo-Chinese stir-fried mushrooms, capsicum, soy',why:'spicy,veg',spice:2},
      {id:'vs7',name:'Hariyali Paneer Tikka',e:'🟢',price:449,diet:'veg',seafood:false,redmeat:false,tags:['spicy','fresh','veg'],desc:'Green herb-marinated paneer on skewers',why:'spicy,veg',spice:1},
      {id:'vs8',name:'Cheese Corn Balls',e:'🧀',price:399,diet:'veg',seafood:false,redmeat:false,tags:['crispy','drinky','veg'],desc:'Golden fried corn & cheese balls, sriracha dip',why:'drinky,veg',spice:1},
    ],
    non_veg_starter:[
      {id:'nv1',name:'Chicken Seekh Ghee Roast',e:'🍗',price:540,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','smoky','hearty'],desc:'Tender seekh, ghee-basted, Mangalore spices',why:'spicy,hearty',spice:2},
      {id:'nv2',name:'Country Chilli Chicken',e:'🍗',price:474,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','dry','hearty'],desc:'Rustic Kongu-style bone chilli chicken',why:'spicy,hearty',spice:2},
      {id:'nv3',name:'Gongura Chicken Roast',e:'🍗',price:485,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','tangy','hearty'],desc:'Marinated chicken in tangy gongura sauce',why:'spicy,hearty',spice:2},
      {id:'nv4',name:'Spicy BBQ Chicken Wings',e:'🍗',price:474,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','tangy','drinky'],desc:'Spicy and tangy BBQ glazed chicken wings',why:'spicy,drinky',spice:2},
      {id:'nv5',name:'Chicken Lollipop (6 pcs)',e:'🍗',price:496,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','crispy','drinky'],desc:'Classic lollipops, house sauce, slaw',why:'spicy,drinky',spice:2},
      {id:'nv6',name:'Lamb Chops (2 pcs)',e:'🍖',price:748,diet:'nonveg',seafood:false,redmeat:true,tags:['hearty','rich','celebrate'],desc:'Rosemary-smoked lamb chops, mint jus',why:'hearty,celebrate',spice:1},
      {id:'nv7',name:'Butter Garlic Prawns',e:'🦐',price:591,diet:'nonveg',seafood:true,redmeat:false,tags:['hearty','rich'],desc:'Prawns in butter-garlic sauce, toasted bread',why:'hearty',spice:1},
      {id:'nv8',name:'Chicken Tikka (Classic)',e:'🍗',price:449,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','hearty'],desc:'Tandoor-smoked chicken chunks, pudina chutney',why:'spicy,hearty',spice:1},
    ],
    taco:[
      {id:'tac1',name:'Citrus Chili Prawn Tacos',e:'🌮',price:483,diet:'nonveg',seafood:true,redmeat:false,tags:['spicy','tangy','light'],desc:'Juicy prawns, citrus chili slaw, soft shell',why:'spicy,light',spice:2},
      {id:'tac2',name:'Korean BBQ Chicken Taco',e:'🌮',price:449,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','tangy','drinky'],desc:'Gochujang chicken, kimchi slaw, sesame',why:'spicy,drinky',spice:2},
      {id:'tac3',name:'Paneer & Avocado Taco',e:'🌮',price:399,diet:'veg',seafood:false,redmeat:false,tags:['light','fresh','veg'],desc:'Spiced paneer, smashed avocado, pickled jalapeño',why:'light,veg',spice:1},
    ],
    dim_sum:[
      {id:'ds1',name:'Chicken Chettinadu Dim Sum (4 pcs)',e:'🥟',price:459,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','umami'],desc:'Chettinadu chicken steamed dumplings, bold spice',why:'spicy',spice:2},
      {id:'ds2',name:'Chicken Xiangcai Dim Sum (4 pcs)',e:'🥟',price:429,diet:'nonveg',seafood:false,redmeat:false,tags:['light','umami'],desc:'Tender chicken with Xiangcai herb filling, steamed',why:'light',spice:1},
      {id:'ds3',name:'Prawn Har Gow (4 pcs)',e:'🥟',price:472,diet:'nonveg',seafood:true,redmeat:false,tags:['light','umami'],desc:'Translucent steamed prawn dumplings, soy dip',why:'light',spice:0},
      {id:'ds4',name:'Veg Crystal Dim Sum (4 pcs)',e:'🥟',price:399,diet:'veg',seafood:false,redmeat:false,tags:['light','umami','veg'],desc:'Mixed vegetable crystal dumplings, chilli oil',why:'light,veg',spice:1},
    ],
    sushi:[
      {id:'su1',name:'Truffle Edamame Uramaki (8 pcs)',e:'🍣',price:452,diet:'veg',seafood:false,redmeat:false,tags:['light','umami','veg'],desc:'Edamame mash, avocado, truffle oil, sesame inside-out roll',why:'light',spice:0},
      {id:'su2',name:'Spicy Tuna Crunch Roll (8 pcs)',e:'🍣',price:572,diet:'nonveg',seafood:true,redmeat:false,tags:['spicy','light','umami'],desc:'Tuna, sriracha mayo, cucumber, crispy crunch',why:'spicy,light',spice:2},
      {id:'su3',name:'Prawn Tempura Roll (8 pcs)',e:'🍣',price:524,diet:'nonveg',seafood:true,redmeat:false,tags:['light','crispy','umami'],desc:'Crispy prawn tempura, cucumber, spicy mayo',why:'light',spice:1},
      {id:'su4',name:'Veg Rainbow Maki (8 pcs)',e:'🍣',price:399,diet:'veg',seafood:false,redmeat:false,tags:['light','fresh','veg'],desc:'Avocado, cucumber, carrot, cream cheese',why:'light,veg',spice:0},
    ],
    pasta:[
      {id:'pas1',name:'Veg Lasagna',e:'🍝',price:429,diet:'veg',seafood:false,redmeat:false,tags:['hearty','rich','veg'],desc:'Fusion lasagna with Indian-inspired vegetable filling',why:'hearty,veg',spice:1},
      {id:'pas2',name:'Penne Arrabbiata',e:'🍝',price:416,diet:'veg',seafood:false,redmeat:false,tags:['spicy','veg'],desc:'Penne in spicy tomato-garlic sauce, parmesan',why:'spicy,veg',spice:2},
      {id:'pas3',name:'Chicken Pesto Pasta',e:'🍝',price:472,diet:'nonveg',seafood:false,redmeat:false,tags:['light','fresh','hearty'],desc:'Penne, grilled chicken, house basil pesto, cherry tomato',why:'light,hearty',spice:0},
      {id:'pas4',name:'Pink Sauce Prawn Pasta',e:'🍝',price:524,diet:'nonveg',seafood:true,redmeat:false,tags:['rich','hearty','celebrate'],desc:'Linguine in rose sauce, sautéed prawns, parmesan',why:'hearty,celebrate',spice:1},
    ],
    burger:[
      {id:'bur1',name:'Oak Wood Cheddar Chicken Burger',e:'🍔',price:452,diet:'nonveg',seafood:false,redmeat:false,tags:['hearty','smoky','drinky'],desc:'Juicy chicken patty, aged cheddar, pickles, house fries',why:'hearty,drinky',spice:1},
      {id:'bur2',name:'Classic Veg Burger',e:'🍔',price:369,diet:'veg',seafood:false,redmeat:false,tags:['hearty','veg','drinky'],desc:'Aloo tikki patty, lettuce, tomato, mustard, fries',why:'hearty,drinky',spice:1},
      {id:'bur3',name:'Lamb Smash Burger',e:'🍔',price:548,diet:'nonveg',seafood:false,redmeat:true,tags:['hearty','smoky','celebrate'],desc:'Double smash lamb patty, cheese, caramelised onion, fries',why:'hearty,celebrate',spice:1},
    ],
    pizza:[
      {id:'piz1',name:'Cottage Cheese Tikka Pizza',e:'🍕',price:544,diet:'veg',seafood:false,redmeat:false,tags:['spicy','rich','veg'],desc:'Spiced paneer tikka on pizza base, mozzarella, peppers',why:'spicy,veg',spice:2},
      {id:'piz2',name:'Exotic Veg Pizza',e:'🍕',price:507,diet:'veg',seafood:false,redmeat:false,tags:['light','fresh','veg'],desc:'Charred zucchini, exotic vegetables, fresh herbs',why:'light,veg',spice:0},
      {id:'piz3',name:'BBQ Chicken Pizza',e:'🍕',price:499,diet:'nonveg',seafood:false,redmeat:false,tags:['hearty','smoky','drinky'],desc:'BBQ pulled chicken, red onion, jalapeño, mozzarella',why:'hearty,drinky',spice:1},
      {id:'piz4',name:'Margherita',e:'🍕',price:399,diet:'veg',seafood:false,redmeat:false,tags:['light','veg'],desc:'San Marzano tomato, fresh mozzarella, basil',why:'light,veg',spice:0},
    ],
    pita:[
      {id:'pit1',name:'Falafel Pita',e:'🫓',price:369,diet:'veg',seafood:false,redmeat:false,tags:['light','fresh','veg'],desc:'Crispy falafel, hummus, fattoush salad in warm pita',why:'light,veg',spice:1},
      {id:'pit2',name:'Grilled Chicken Pita',e:'🫓',price:449,diet:'nonveg',seafood:false,redmeat:false,tags:['light','hearty'],desc:'Shawarma-spiced chicken, garlic sauce, pickled vegetables',why:'light,hearty',spice:1},
    ],
    seafood:[
      {id:'sf1',name:'Apollo Prawns',e:'🦐',price:591,diet:'nonveg',seafood:true,redmeat:false,tags:['spicy','hearty','umami'],desc:'Plump juicy prawns in spicy Apollo-style masala',why:'spicy,hearty',spice:2},
      {id:'sf2',name:'Curry Leaf Prawns',e:'🦐',price:565,diet:'nonveg',seafood:true,redmeat:false,tags:['spicy','aromatic'],desc:'Prawns tossed with fresh curry leaves and spices',why:'spicy',spice:2},
      {id:'sf3',name:'Butter Garlic Fish Fillet',e:'🐟',price:548,diet:'nonveg',seafood:true,redmeat:false,tags:['hearty','rich','light'],desc:'Pan-seared fish fillet, lemon caper butter, greens',why:'hearty,light',spice:0},
      {id:'sf4',name:'Crab Cakes (2 pcs)',e:'🦀',price:624,diet:'nonveg',seafood:true,redmeat:false,tags:['celebrate','hearty','crispy'],desc:'Crispy crab cakes, sriracha aioli, micro herbs',why:'celebrate,hearty',spice:1},
      {id:'sf5',name:'Calamari Fritti',e:'🦑',price:524,diet:'nonveg',seafood:true,redmeat:false,tags:['light','crispy','drinky'],desc:'Crispy fried calamari rings, marinara, lemon',why:'light,drinky',spice:0},
      {id:'sf6',name:'Anjal Tawa Fry',e:'🐟',price:670,diet:'nonveg',seafood:true,redmeat:false,tags:['spicy','smoky','hearty'],desc:'Aromatic South Indian tawa-fried kingfish',why:'spicy,hearty',spice:2},
      {id:'sf7',name:'Crab Sukka Rasam With Idli',e:'🦀',price:881,diet:'nonveg',seafood:true,redmeat:false,tags:['spicy','celebrate','umami'],desc:'Fresh crab sukka with tangy rasam, served with idli',why:'spicy,celebrate',spice:2},
      {id:'sf8',name:'Tempura Batter Prawn Pops',e:'🍤',price:540,diet:'nonveg',seafood:true,redmeat:false,tags:['crispy','light','drinky'],desc:'Bite-sized prawns in crispy tempura batter',why:'light,drinky',spice:1},
    ],
    thai:[
      {id:'th1',name:'Curry Leaf Thai Curry Veg',e:'🥘',price:452,diet:'veg',seafood:false,redmeat:false,tags:['spicy','aromatic','veg'],desc:'Aromatic Thai green curry with curry leaf twist — veg',why:'spicy,veg',spice:2},
      {id:'th2',name:'Curry Leaf Green Chicken Curry',e:'🥘',price:507,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','aromatic','hearty'],desc:'Aromatic Thai green curry with curry leaf twist — chicken',why:'spicy,hearty',spice:2},
      {id:'th3',name:'Pad Thai Noodles Veg',e:'🍜',price:416,diet:'veg',seafood:false,redmeat:false,tags:['light','tangy','veg'],desc:'Rice noodles, tofu, bean sprouts, peanuts, tamarind',why:'light,veg',spice:1},
      {id:'th4',name:'Pad Thai Noodles Chicken',e:'🍜',price:472,diet:'nonveg',seafood:false,redmeat:false,tags:['light','tangy','hearty'],desc:'Rice noodles, chicken, egg, peanuts, tamarind',why:'light,hearty',spice:1},
    ],
    noodles:[
      {id:'noo1',name:'Classic Hakka Noodles Veg',e:'🍜',price:369,diet:'veg',seafood:false,redmeat:false,tags:['light','umami','veg'],desc:'Stir-fried noodles, mixed vegetables, soy sauce',why:'light,veg',spice:1},
      {id:'noo2',name:'Hakka Noodles Chicken',e:'🍜',price:429,diet:'nonveg',seafood:false,redmeat:false,tags:['light','umami','hearty'],desc:'Stir-fried noodles with shredded chicken, soy',why:'light,hearty',spice:1},
      {id:'noo3',name:'Ramen Bowl Chicken',e:'🍜',price:524,diet:'nonveg',seafood:false,redmeat:false,tags:['hearty','umami','comfort'],desc:'Tonkotsu-style broth, soft egg, bamboo shoots, nori',why:'hearty',spice:1},
    ],
    fried_rice:[
      {id:'fr1',name:'Classic Fried Rice Veg',e:'🍚',price:393,diet:'veg',seafood:false,redmeat:false,tags:['light','umami','veg'],desc:'Fragrant jasmine rice with vegetables and soy',why:'light,veg',spice:1},
      {id:'fr2',name:'Classic Fried Rice Egg',e:'🍚',price:416,diet:'egg',seafood:false,redmeat:false,tags:['light','umami'],desc:'Fragrant jasmine rice with egg, spring onion, soy',why:'light',spice:1},
      {id:'fr3',name:'Classic Fried Rice Chicken',e:'🍚',price:429,diet:'nonveg',seafood:false,redmeat:false,tags:['light','umami','hearty'],desc:'Fragrant jasmine rice with chicken, soy',why:'light,hearty',spice:1},
      {id:'fr4',name:'Schezwan Fried Rice Veg',e:'🍚',price:406,diet:'veg',seafood:false,redmeat:false,tags:['spicy','umami','veg'],desc:'Spicy Szechwan fried rice with mixed vegetables',why:'spicy,veg',spice:2},
      {id:'fr5',name:'Prawn Fried Rice',e:'🍚',price:499,diet:'nonveg',seafood:true,redmeat:false,tags:['light','umami','hearty'],desc:'Wok-tossed jasmine rice with prawns and vegetables',why:'light,hearty',spice:1},
    ],
    global_mains:[
      {id:'gm1',name:'Grilled Herb Chicken',e:'🍗',price:496,diet:'nonveg',seafood:false,redmeat:false,tags:['light','hearty','fresh'],desc:'Herb marinated grilled chicken, seasonal sides',why:'light,hearty',spice:1},
      {id:'gm2',name:'Mushroom Stroganoff',e:'🍄',price:439,diet:'veg',seafood:false,redmeat:false,tags:['hearty','rich','veg'],desc:'Creamy Russian-style mushroom stroganoff, buttered pasta',why:'hearty,veg',spice:0},
      {id:'gm3',name:'Grilled Salmon',e:'🐟',price:748,diet:'nonveg',seafood:true,redmeat:false,tags:['light','celebrate','fresh'],desc:'Herb-crusted salmon, lemon beurre blanc, sautéed greens',why:'light,celebrate',spice:0},
      {id:'gm4',name:'Beef Lasagne',e:'🍝',price:548,diet:'nonveg',seafood:false,redmeat:true,tags:['hearty','rich'],desc:'Layered minced beef, béchamel, tomato, mozzarella',why:'hearty',spice:0},
    ],
    indian_gravy:[
      {id:'ig1',name:'Paneer Tikka Masala 2.0',e:'🧀',price:439,diet:'veg',seafood:false,redmeat:false,tags:['spicy','rich','veg','hearty'],desc:'Tandoor paneer in signature spiced tomato gravy',why:'spicy,veg',spice:2},
      {id:'ig2',name:'Dal Makhani',e:'🫕',price:369,diet:'veg',seafood:false,redmeat:false,tags:['hearty','rich','comfort','veg'],desc:'Slow-cooked black lentils, butter, cream',why:'hearty,veg',spice:1},
      {id:'ig3',name:'Murgh Tikka Masala',e:'🍗',price:462,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','rich','hearty'],desc:'Juicy chicken tikka in rich tomato-cashew gravy',why:'spicy,hearty',spice:2},
      {id:'ig4',name:'Mutton Laal Maans',e:'🍲',price:690,diet:'nonveg',seafood:false,redmeat:true,tags:['spicy','hearty','rich'],desc:'Tender mutton in fiery Rajasthani laal maans',why:'spicy,hearty',spice:2},
      {id:'ig5',name:'Palak Paneer',e:'🌿',price:399,diet:'veg',seafood:false,redmeat:false,tags:['light','hearty','veg'],desc:'Cottage cheese in creamy spinach gravy',why:'hearty,veg',spice:1},
      {id:'ig6',name:'Butter Chicken',e:'🍗',price:499,diet:'nonveg',seafood:false,redmeat:false,tags:['hearty','rich','comfort'],desc:'Classic makhani gravy, tender chicken, kasuri methi',why:'hearty',spice:1},
      {id:'ig7',name:'Kadai Chicken',e:'🍗',price:499,diet:'nonveg',seafood:false,redmeat:false,tags:['spicy','hearty','aromatic'],desc:'Chicken in robust kadai masala with peppers & tomatoes',why:'spicy,hearty',spice:2},
      {id:'ig8',name:'Ghar-Ki-Dal Palak Khichdi',e:'🍲',price:396,diet:'veg',seafood:false,redmeat:false,tags:['comfort','light','veg'],desc:'A comforting blend of dal, spinach and khichdi',why:'light,veg',spice:1},
    ],
    rice_breads:[
      {id:'rb1',name:'Ghee Rice',e:'🍚',price:262,diet:'veg',seafood:false,redmeat:false,tags:['comfort','veg','light'],desc:'Fragrant basmati rice cooked in ghee',why:'light',spice:0},
      {id:'rb2',name:'Jeera Rice',e:'🍚',price:232,diet:'veg',seafood:false,redmeat:false,tags:['light','veg'],desc:'Aromatic basmati rice tempered with cumin',why:'light',spice:0},
      {id:'rb3',name:'Kulcha',e:'🫓',price:99,diet:'veg',seafood:false,redmeat:false,tags:['light','veg'],desc:'Soft leavened bread',why:'light',spice:0},
      {id:'rb4',name:'Garlic Naan',e:'🫓',price:79,diet:'veg',seafood:false,redmeat:false,tags:['light','veg'],desc:'Leavened bread with garlic butter',why:'light',spice:0},
      {id:'rb5',name:'Butter Roti',e:'🫓',price:59,diet:'veg',seafood:false,redmeat:false,tags:['light','veg'],desc:'Whole wheat bread with butter',why:'light',spice:0},
    ],
    biryanis:[
      {id:'bir1',name:'Suka Signature Veg Biryani',e:'🍛',price:419,diet:'veg',seafood:false,redmeat:false,tags:['hearty','aromatic','veg'],desc:'Mix veg biryani with Suka house spice blend',why:'hearty,veg',spice:1},
      {id:'bir2',name:'Chicken Dum Biryani',e:'🍛',price:499,diet:'nonveg',seafood:false,redmeat:false,tags:['hearty','aromatic','spicy'],desc:'Lucknawi dum biryani, raita, shorba',why:'hearty,spicy',spice:2},
      {id:'bir3',name:'Mutton Dum Biryani',e:'🍛',price:572,diet:'nonveg',seafood:false,redmeat:true,tags:['hearty','aromatic','rich'],desc:'Tender mutton, aged basmati, dum-cooked, raita',why:'hearty,rich',spice:2},
      {id:'bir4',name:'Prawn Biryani',e:'🍛',price:572,diet:'nonveg',seafood:true,redmeat:false,tags:['hearty','aromatic','spicy'],desc:'Coastal-style prawn biryani, coconut raita',why:'hearty,spicy',spice:2},
    ],
    desserts:[
      {id:'des1',name:'Biscoff Tres Leches',e:'🍮',price:429,diet:'egg',seafood:false,redmeat:false,tags:['sweet','celebrate','indulgent'],desc:'Biscoff crumble on soaked tres leches sponge',why:'celebrate',spice:0},
      {id:'des2',name:'Cashewnut Brownie',e:'🍫',price:369,diet:'egg',seafood:false,redmeat:false,tags:['sweet','hearty','indulgent'],desc:'Warm fudge brownie, chocolate sauce, ice cream',why:'hearty',spice:0},
      {id:'des3',name:'Black Rice Kheer Coconut Pannacotta',e:'🍚',price:406,diet:'veg',seafood:false,redmeat:false,tags:['sweet','light','veg'],desc:'Traditional Indian kheer meets Italian pannacotta',why:'light,veg',spice:0},
      {id:'des4',name:'Gulab Jamun (2 pcs)',e:'🍡',price:249,diet:'veg',seafood:false,redmeat:false,tags:['sweet','comfort','veg'],desc:'Soft milk dumplings in rose-saffron syrup',why:'light,veg',spice:0},
      {id:'des5',name:'Tiramisu',e:'☕',price:399,diet:'egg',seafood:false,redmeat:false,tags:['sweet','celebrate','light'],desc:'Classic mascarpone, espresso, cocoa',why:'celebrate',spice:0},
      {id:'des6',name:'Mango Sorbet',e:'🥭',price:249,diet:'veg',seafood:false,redmeat:false,tags:['sweet','light','fresh','veg'],desc:'Alphonso mango sorbet, house-made',why:'light,veg',spice:0},
    ],
  },
  drinks:{
    beer:[
      {id:'br1',name:'Hoegaarden Craft Beer 330ML',e:'🍺',price:570,diet:'veg',tags:['drinky','light','celebrate'],desc:'Belgian white ale, light and refreshing',why:'drinky,light'},
      {id:'br2',name:'Hoegaarden Craft Beer 500ML',e:'🍺',price:850,diet:'veg',tags:['drinky','celebrate'],desc:'Belgian white ale, larger pour',why:'drinky'},
      {id:'br3',name:'Heineken Craft Beer 330ML',e:'🍺',price:360,diet:'veg',tags:['drinky','light'],desc:'Crisp premium lager',why:'drinky,light'},
      {id:'br4',name:'Heineken Craft Beer 500ML',e:'🍺',price:500,diet:'veg',tags:['drinky','hearty'],desc:'Crisp premium lager, larger pour',why:'drinky,hearty'},
      {id:'br5',name:'KF Ultra Craft Beer 500ML',e:'🍺',price:460,diet:'veg',tags:['drinky','light'],desc:'Kingfisher premium craft lager',why:'drinky,light'},
      {id:'br6',name:'Soul Surfer Craft 330ML',e:'🍻',price:320,diet:'veg',tags:['drinky','light'],desc:'Artisanal craft beer, smooth finish',why:'drinky,light'},
      {id:'br7',name:'Soul Surfer Craft 500ML',e:'🍻',price:470,diet:'veg',tags:['drinky','hearty'],desc:'Artisanal craft beer, larger pour',why:'drinky,hearty'},
    ],
    wine_spirits:[
      {id:'ws1',name:'Apple Soju (BTL)',e:'🍶',price:2316,diet:'veg',tags:['celebrate','drinky'],desc:'Premium Korean apple soju, full bottle',why:'celebrate'},
      {id:'ws2',name:'Chum Churum Apple',e:'🍶',price:2316,diet:'veg',tags:['celebrate','drinky'],desc:'Korean soju, apple flavour',why:'celebrate'},
      {id:'ws3',name:'Napoleon Finest 30ML',e:'🥃',price:220,diet:'veg',tags:['hearty','drinky'],desc:'Classic Cognac / Brandy, neat or on the rocks',why:'hearty,drinky'},
      {id:'ws4',name:'Paul John XO 30ML',e:'🥃',price:1136,diet:'veg',tags:['celebrate','hearty'],desc:'Premium XO Cognac, complex and rich',why:'celebrate'},
      {id:'ws5',name:'Bombay Sapphire Gin 30ML',e:'🫙',price:485,diet:'veg',tags:['light','drinky'],desc:'London Dry gin, botanicals-forward',why:'light,drinky'},
      {id:'ws6',name:'Greater Than Gin 30ML',e:'🫙',price:276,diet:'veg',tags:['light','drinky'],desc:'Indian craft gin, contemporary',why:'light,drinky'},
      {id:'ws7',name:'Hapusa Gin 30ML',e:'🫙',price:496,diet:'veg',tags:['light','celebrate'],desc:'Himalayan gin with juniper, citrus notes',why:'light,celebrate'},
      {id:'ws8',name:"Hendrick's Gin 30ML",e:'🫙',price:727,diet:'veg',tags:['celebrate','light'],desc:'Scottish gin with cucumber & rose',why:'celebrate,light'},
      {id:'ws9',name:'Jaisalmer Gin 30ML',e:'🫙',price:496,diet:'veg',tags:['light','drinky'],desc:'Indian craft gin, aromatic botanicals',why:'light,drinky'},
      {id:'ws10',name:"Teacher's Highland Cream BTL",e:'🥃',price:8887,diet:'veg',tags:['hearty','celebrate'],desc:'Blended Scotch whisky, full bottle',why:'hearty,celebrate'},
      {id:'ws11',name:'Single Malt — Bottle (20 varieties)',e:'🥃',price:0,diet:'veg',tags:['celebrate','hearty'],desc:'Ask your server — 20 single malts by bottle',why:'celebrate'},
      {id:'ws12',name:'Single Malt — 30ML (23 options)',e:'🥃',price:0,diet:'veg',tags:['celebrate','hearty','drinky'],desc:'Ask your server — 23 single malts by the peg',why:'celebrate'},
      {id:'ws13',name:'Sambuca 30ML',e:'🥃',price:485,diet:'veg',tags:['drinky','celebrate'],desc:'Italian anise liqueur, served chilled',why:'celebrate'},
      {id:'ws14',name:'Ti Connie Coffee Liqueur 30ML',e:'🥃',price:254,diet:'veg',tags:['drinky','light'],desc:'Rich coffee liqueur',why:'drinky,light'},
      {id:'ws15',name:'Ti Connie Peachy Liqueur 30ML',e:'🥃',price:254,diet:'veg',tags:['light','drinky'],desc:'Peachy fruit liqueur, light and sweet',why:'light,drinky'},
    ],
    cocktails:[
      {id:'ck1',name:'Beachside Day Dream',e:'🍹',price:524,diet:'veg',tags:['light','celebrate','drinky'],desc:'Suka summer special — refreshing tropical cocktail',why:'celebrate,light'},
      {id:'ck2',name:'Sunset Peral',e:'🍹',price:572,diet:'veg',tags:['celebrate','light'],desc:'Suka summer special signature cocktail',why:'celebrate'},
      {id:'ck3',name:'Rose Wine Sangria',e:'🍷',price:563,diet:'veg',tags:['celebrate','light','fresh'],desc:'Rose wine, vodka, orange — sharing pitcher',why:'celebrate,light'},
      {id:'ck4',name:'Whisky Sour',e:'🥃',price:674,diet:'veg',tags:['hearty','drinky'],desc:'Whiskey, lime juice, sugar syrup, froth',why:'hearty,drinky'},
      {id:'ck5',name:'White Wine Sangria',e:'🍷',price:524,diet:'veg',tags:['celebrate','light'],desc:'White wine sangria, citrus, soda',why:'celebrate,light'},
      {id:'ck6',name:'Berry Voltage Ice Tea',e:'🫐',price:786,diet:'veg',tags:['celebrate','drinky','hearty'],desc:'Five white spirits, berry — the LIIT',why:'celebrate'},
      {id:'ck7',name:'Cane & Spice Ice Tea',e:'🌿',price:786,diet:'veg',tags:['celebrate','spicy','drinky'],desc:'Five white spirits, cane, spice — LIIT',why:'celebrate,spicy'},
      {id:'ck8',name:'Twin Apple Twist',e:'🍸',price:563,diet:'veg',tags:['light','drinky'],desc:'Desmondji Mahua, apple, house bitters',why:'light,drinky'},
      {id:'ck9',name:'Wild Herb Mist',e:'🍸',price:557,diet:'veg',tags:['light','fresh'],desc:'Desmondji Mahua, fresh herbs, citrus',why:'light'},
      {id:'ck10',name:'Fiery Forest',e:'🍸',price:563,diet:'veg',tags:['spicy','drinky'],desc:'Desmondji Mahua, jalapeño, lime, agave',why:'spicy,drinky'},
      {id:'ck11',name:'Jungle Flame',e:'🍸',price:541,diet:'veg',tags:['spicy','drinky'],desc:'Desmondji Mahua, lime, chilli, fire notes',why:'spicy,drinky'},
      {id:'ck12',name:'Blush Royale',e:'🥂',price:801,diet:'veg',tags:['celebrate','light'],desc:'Strawberry jello, prosecco, elderflower',why:'celebrate,light'},
      {id:'ck13',name:'Green Orchard Fizz',e:'🥂',price:801,diet:'veg',tags:['celebrate','fresh'],desc:'Green apple jello, prosecco, mint',why:'celebrate'},
      {id:'ck14',name:'Violet Dream Drop',e:'🥂',price:801,diet:'veg',tags:['celebrate','light'],desc:'Grape jello, grape sparkling, violet bloom',why:'celebrate'},
      {id:'ck15',name:'Ruby Jello Shot',e:'🎯',price:475,diet:'veg',tags:['drinky','celebrate'],desc:'Strawberry jello shot — fun and fruity',why:'drinky,celebrate'},
      {id:'ck16',name:'Sunset Jello Shot',e:'🎯',price:475,diet:'veg',tags:['drinky','celebrate'],desc:'Mango jello, lime juice',why:'drinky,celebrate'},
      {id:'ck17',name:'Jager Bomb',e:'💥',price:699,diet:'veg',tags:['drinky','celebrate','hearty'],desc:'Jagermeister, Redbull — energy shot',why:'celebrate,drinky'},
      {id:'ck18',name:'Classic Margarita',e:'🍋',price:499,diet:'veg',tags:['light','fresh','drinky'],desc:'Tequila, triple sec, lime, salted rim',why:'light,drinky'},
      {id:'ck19',name:'Spicy Jalapeño Margarita',e:'🌶️',price:524,diet:'veg',tags:['spicy','drinky'],desc:'Tequila, jalapeño, lime, agave',why:'spicy,drinky'},
    ],
    mocktails:[
      {id:'mk1',name:'Zesty Kaffir Fizz',e:'🍊',price:335,diet:'veg',tags:['light','fresh','drinky'],desc:'Lime juice, kaffir lime leaves, soda, mint',why:'light,drinky'},
      {id:'mk2',name:'Watermelon Cooler',e:'🍉',price:299,diet:'veg',tags:['light','fresh','drinky'],desc:'Fresh watermelon, basil, lime, soda',why:'light,drinky'},
      {id:'mk3',name:'Virgin Mojito',e:'🌿',price:285,diet:'veg',tags:['light','fresh','drinky'],desc:'Mint, lime, sugar, soda',why:'light,drinky'},
      {id:'mk4',name:'Blue Lagoon',e:'💙',price:299,diet:'veg',tags:['light','celebrate','drinky'],desc:'Blue curacao syrup, lemonade, pineapple',why:'celebrate,light'},
    ],
    milkshakes_smoothies:[
      {id:'ms1',name:'Chocolate Caramel Milkshake',e:'🍫',price:335,diet:'veg',tags:['sweet','hearty','indulgent'],desc:'Chocolate and caramel blended milkshake',why:'hearty'},
      {id:'ms2',name:'Nutty Velvet Delight',e:'🥤',price:346,diet:'veg',tags:['sweet','hearty','indulgent'],desc:'Pista crush, caramel, rich and nutty shake',why:'hearty'},
      {id:'ms3',name:'Safron Delight',e:'🥤',price:309,diet:'veg',tags:['sweet','light'],desc:'Curd, kesar badam, creamy and aromatic',why:'light'},
      {id:'ms4',name:'Mango Smoothie',e:'🥭',price:299,diet:'veg',tags:['sweet','light','fresh'],desc:'Fresh Alphonso mango, yogurt, honey',why:'light'},
      {id:'ms5',name:'Mixed Berry Smoothie',e:'🍓',price:299,diet:'veg',tags:['sweet','light','fresh'],desc:'Strawberry, blueberry, raspberry, milk',why:'light'},
    ],
    soft_drinks:[
      {id:'sd1',name:'Coca-Cola',e:'🥤',price:120,diet:'veg',tags:['drinky','light'],desc:'330ML',why:'drinky,light'},
      {id:'sd2',name:'Sprite',e:'🥤',price:120,diet:'veg',tags:['drinky','light'],desc:'330ML',why:'drinky,light'},
      {id:'sd3',name:'Soda Water',e:'💧',price:80,diet:'veg',tags:['drinky','light'],desc:'200ML, premium',why:'drinky,light'},
      {id:'sd4',name:'Fresh Lime Soda',e:'🍋',price:149,diet:'veg',tags:['drinky','light','fresh'],desc:'Sweet or salty, your choice',why:'light,drinky'},
      {id:'sd5',name:'Iced Tea Lemon',e:'🍵',price:199,diet:'veg',tags:['drinky','light','fresh'],desc:'Chilled lemon iced tea, lightly sweetened',why:'light,drinky'},
    ],
    hot_drinks:[
      {id:'hd1',name:'Masala Chai',e:'🫖',price:80,diet:'veg',tags:['light','comfort'],desc:'House-spiced fresh brewed chai',why:'light'},
      {id:'hd2',name:'Filter Coffee',e:'☕',price:90,diet:'veg',tags:['light','comfort'],desc:'South Indian drip coffee, frothy',why:'light'},
      {id:'hd3',name:'Hot Chocolate',e:'🍫',price:160,diet:'veg',tags:['hearty','sweet','comfort'],desc:'Thick Belgian chocolate, steamed milk',why:'hearty'},
      {id:'hd4',name:'Ginger Lemon Honey Tea',e:'🍵',price:120,diet:'veg',tags:['light','fresh','comfort'],desc:'Fresh ginger, lemon, honey',why:'light'},
      {id:'hd5',name:'Classic Hot Toddy',e:'♨️',price:449,diet:'veg',tags:['celebrate','hearty','drinky'],desc:'Whiskey, honey, lemon, warm water, spices',why:'celebrate'},
    ],
    bar_bites:[
      {id:'bb1',name:'Bar Bites Platter',e:'🍢',price:349,diet:'nonveg',tags:['drinky','sharing','hearty'],desc:'Chicken satay, chilli toast, masala peanuts',why:'drinky',sharing:true},
      {id:'bb2',name:'Masala Papad',e:'🫓',price:149,diet:'veg',tags:['drinky','snack','veg','light'],desc:'Crispy papad with spiced onion topping',why:'drinky,light'},
      {id:'bb3',name:'Chilli Cheese Toast',e:'🧀',price:249,diet:'veg',tags:['drinky','snack','veg'],desc:'Toasted bread, melted cheddar, green chilli',why:'drinky,veg'},
      {id:'bb4',name:'Loaded Nachos',e:'🌮',price:349,diet:'veg',tags:['drinky','sharing','veg'],desc:'Corn chips, salsa, sour cream, jalapeños',why:'drinky,veg',sharing:true},
      {id:'bb5',name:'Tempura Batter Prawn Pops',e:'🍤',price:540,diet:'nonveg',tags:['drinky','light','crispy'],desc:'Bite-sized prawns in crispy tempura batter',why:'drinky,light'},
    ],
  },
};

/* ══════════ STRUCTURE CONSTANTS ══════════ */

var QUICK_PICKS = {
  starters: [
    {id:'nv2',  badge:'Most Ordered',  why:'The table always orders this'},
    {id:'sig1', badge:"Chef's Special", why:'Unique to Suka — kingfish, tawa-fired'},
    {id:'su1',  badge:'Trending',       why:'Truffle edamame uramaki — try something different'},
  ],
  mains: [
    {id:'bir2', badge:'Most Ordered',  why:'Lucknawi dum biryani — Suka signature prep'},
    {id:'rec1', badge:"Chef's Special", why:'Madras chicken kari with idli — bold South Indian'},
    {id:'ig6',  badge:'Crowd Favourite',why:'Butter chicken — the one everyone comes back for'},
  ],
  desserts: [
    {id:'des1', badge:'Most Ordered',  why:'Biscoff tres leches — the dessert people fight over'},
    {id:'des2', badge:'Trending',       why:'Warm brownie + ice cream — the classic finish'},
    {id:'des3', badge:"Chef's Special", why:'Black rice kheer meets coconut pannacotta'},
  ],
};



// Flat list of all food items for admin search
var ALL_FOOD_ITEMS = [];
(function() {
  Object.keys(MENU.food).forEach(function(cat) {
    MENU.food[cat].forEach(function(item) {
      ALL_FOOD_ITEMS.push(Object.assign({category: cat}, item));
    });
  });
})();
