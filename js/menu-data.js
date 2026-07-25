/* ============================================
   THAKALI KITCHEN — Menu Data
   ============================================ */
/* Single source of truth for menu content.
   `name` / `desc` / `label` are either a plain string (identical in every
   language — producer names, bottle sizes) or an { en, de, ne } map.
   js/main.js resolves both shapes through loc(). */

window.MENU_DATA = [
  {
    group: 'thakali',
    groupLabel: { en: 'Thakali Kitchen', de: 'Thakali Kitchen', ne: 'थकाली किचन' },
    categories: [
      {
        slug: 'starters',
        label: { en: 'Starters', de: 'Vorspeisen', ne: 'सुरुवाती परिकार' },
        items: [
        { num: '500', name: { en: 'Bhatmas Sadeko', de: 'Bhatmas Sadeko', ne: 'भटमास सादेको' }, desc: { en: 'Soybeans, fresh garlic, ginger, green chilli', de: 'Sojabohnen, frischer Knoblauch, Ingwer, grüne Chili', ne: 'भटमास, ताजा लसुन, अदुवा, हरियो खुर्सानी' }, price: 4.90, badges: ['vegetarian', 'spicy'] },
        { num: '501', name: { en: 'Sherchan Sel Roti', de: 'Sherchan Sel Roti', ne: 'शेर्चन सेल रोटी' }, desc: { en: 'Sherchan style, with alu dam', de: 'Sherchan-Art, mit Alu Dam', ne: 'शेर्चन शैलीमा, आलु दमसँग' }, price: 5.90, badges: ['vegetarian'] },
        { num: '502', name: { en: 'Chana Chatpat', de: 'Chana Chatpat', ne: 'चना चटपट' }, desc: { en: 'Potato, puffed rice, Wai Wai, onion, cucumber', de: 'Kartoffel, Puffreis, Wai Wai, Zwiebel, Gurke', ne: 'आलु, भुजा, वाइवाइ, प्याज, काँक्रो' }, price: 8.90, badges: ['vegetarian'] },
        { num: '503', name: { en: 'Sukuti', de: 'Sukuti', ne: 'सुकुटी' }, desc: { en: 'Dried buffalo meat', de: 'Getrocknetes Büffelfleisch', ne: 'राँगाको सुकेको मासु' }, price: 13.90, badges: [] },
        { num: '504', name: { en: 'Bhutan', de: 'Bhutan', ne: 'भुटन' }, desc: null, price: 9.90, badges: [] },
        { num: '505', name: { en: 'Chicken Chilli', de: 'Chicken Chilli', ne: 'चिल्ली चिकेन' }, desc: { en: 'Chicken, bell pepper, onion', de: 'Hühnerfleisch, Paprika, Zwiebel', ne: 'कुखुराको मासु, भेडे खुर्सानी, प्याज' }, price: 11.90, badges: ['spicy'] },
        { num: '506', name: { en: 'Panipuri', de: 'Panipuri', ne: 'पानीपुरी' }, desc: { en: '10 pieces', de: '10 Stück', ne: '१० पीस' }, price: 10.90, badges: ['vegetarian'] },
        ],
      },
      {
        slug: 'momo',
        label: { en: 'Mo:Mo', de: 'Mo:Mo', ne: 'म:म' },
        items: [
        { num: '510', name: { en: 'Mo:Mo', de: 'Mo:Mo', ne: 'म:म' }, desc: { en: 'Steamed chicken or pork dumplings, Sherchan style, with spicy tomato sauce', de: 'Gedämpfte Teigtaschen mit Hühner- oder Schweinefleisch, Sherchan-Art, mit pikanter Tomatensoße', ne: 'कुखुरा वा बंगुरको म:म, शेर्चन शैली, पिरो गोलभेँडाको अचारसँग' }, price: 13.90, badges: ['spicy'] },
        { num: '511', name: { en: 'Jhol Mo:Mo', de: 'Jhol Mo:Mo', ne: 'झोल म:म' }, desc: { en: 'Steamed chicken or pork dumplings, Nepali style, in spicy tomato broth', de: 'Gedämpfte Teigtaschen mit Hühner- oder Schweinefleisch, nepalesische Art, in pikanter Tomatensuppe', ne: 'कुखुरा वा बंगुरको म:म, नेपाली शैली, पिरो गोलभेँडाको झोलमा' }, price: 13.90, badges: ['spicy'] },
        { num: '512', name: { en: 'C. Mo:Mo', de: 'C. Mo:Mo', ne: 'सी. म:म' }, desc: { en: 'Steamed chilli chicken or pork dumplings, Thakali style, with spicy tomato-sesame sauce', de: 'Gedämpfte Chili-Teigtaschen mit Hühner- oder Schweinefleisch, Thakali-Art, mit pikanter Tomaten-Sesam-Soße', ne: 'पिरो कुखुरा वा बंगुरको म:म, थकाली शैली, गोलभेँडा-तिलको पिरो सससँग' }, price: 14.90, badges: ['spicy'] },
        ],
      },
      {
        slug: 'mains',
        label: { en: 'Main Dishes', de: 'Hauptgerichte', ne: 'मुख्य परिकार' },
        items: [
        { num: '530', name: { en: 'Dhindo Set', de: 'Dhindo Set', ne: 'ढिँडो सेट' }, desc: { en: 'Traditional Nepali buckwheat dish, served as a complete set', de: 'Traditionelles nepalesisches Buchweizengericht, als komplettes Set serviert', ne: 'परम्परागत फापरको ढिँडो, पूरा सेटसँग' }, price: 19.90, badges: [] },
        { num: '531', name: { en: 'Thakali Set', de: 'Thakali Set', ne: 'थकाली सेट' }, desc: { en: 'Authentic Thakali meal — a complete dining experience', de: 'Authentisches Thakali-Menü — ein komplettes Esserlebnis', ne: 'प्रामाणिक थकाली खाना — पूरा भोजनको अनुभव' }, price: 18.90, badges: [] },
        { num: '532', name: { en: 'Thukpa', de: 'Thukpa', ne: 'थुक्पा' }, desc: { en: 'Hearty Himalayan noodle soup', de: 'Herzhafte Himalaya-Nudelsuppe', ne: 'पेटभरी हिमाली नूडल सुप' }, price: 14.90, badges: [] },
        { num: '533', name: { en: 'Sukuti Chowmein', de: 'Sukuti Chowmein', ne: 'सुकुटी चाउमिन' }, desc: { en: 'Stir-fried noodles with dried buffalo meat', de: 'Gebratene Nudeln mit getrocknetem Büffelfleisch', ne: 'राँगाको सुकुटीसँग भुटेको चाउमिन' }, price: 15.90, badges: [] },
        { num: '534', name: { en: 'Pork Chowmein', de: 'Schweine-Chowmein', ne: 'बंगुरको चाउमिन' }, desc: { en: 'Stir-fried noodles with pork', de: 'Gebratene Nudeln mit Schweinefleisch', ne: 'बंगुरको मासुसँग भुटेको चाउमिन' }, price: 13.90, badges: [] },
        ],
      }
    ]
  },
  {
    group: 'sushi',
    groupLabel: { en: 'Cross Sushi', de: 'Cross Sushi', ne: 'क्रस सुसी' },
    categories: [
      {
        slug: 'soups',
        label: { en: 'Soups', de: 'Suppen', ne: 'सुप' },
        items: [
        { num: '1', name: { en: 'Miso Fancy Soup', de: 'Miso-Fancy-Suppe', ne: 'मिसो फ्यान्सी सुप' }, desc: { en: 'Traditional Japanese soup: tofu, seaweed, spring onions, miso paste', de: 'Traditionelle japanische Suppe: Tofu, Algen, Lauchzwiebeln, Miso-Paste', ne: 'परम्परागत जापानी सुप: टोफु, समुन्द्री झार, हरियो प्याज, मिसो पेस्ट' }, price: 5.90, badges: ['vegetarian'] },
        { num: '2', name: { en: 'Japanese Vegetable Soup', de: 'Japanische Gemüse-Suppe', ne: 'जापानी तरकारी सुप' }, desc: { en: 'Tofu, mushrooms, cauliflower, sugar snap peas, spinach leaves, bell pepper, courgette', de: 'Tofu, Champignons, Blumenkohl, Zuckerschoten, Spinatblätter, Paprika, Zucchini', ne: 'टोफु, च्याउ, काउली, मिठो सिमी, पालुङ्गो, भेडे खुर्सानी, जुकिनी' }, price: 5.90, badges: ['vegetarian'] },
        { num: '3', name: { en: 'Japanese Chicken Soup', de: 'Japanische Hühnersuppe', ne: 'जापानी कुखुरा सुप' }, desc: { en: 'Broccoli, bell pepper, mushrooms, courgette, sugar snap peas, spinach leaves', de: 'Brokkoli, Paprika, Champignons, Zucchini, Zuckerschoten, Spinatblätter', ne: 'ब्रोकाउली, भेडे खुर्सानी, च्याउ, जुकिनी, मिठो सिमी, पालुङ्गो' }, price: 6.50, badges: [] },
        { num: '4', name: { en: 'Tom Kha Gai / Gung', de: 'Tom Kha Gai / Gung', ne: 'टोम खा गाई / गुङ' }, desc: { en: 'Coconut soup with chicken (Gai) or prawns (Gung), red Thai curry, aubergine, bamboo, mushrooms, coriander', de: 'Kokossuppe mit Hühnerfleisch (Gai) oder Garnelen (Gung), rotes Thai Curry, Auberginen, Bambus, Champignons, Koriander', ne: 'नरिवलको सुप, कुखुरा (गाई) वा झिँगेमाछा (गुङ), रातो थाई करी, भन्टा, बाँसको टुसा, च्याउ, धनियाँ' }, price: 6.90, badges: ['spicy'] },
        ],
      },
      {
        slug: 'appetizers',
        label: { en: 'Appetizers', de: 'Vorspeisen', ne: 'सुरुवाती परिकार' },
        items: [
        { num: '10', name: { en: 'Mini Poh Pia', de: 'Mini Poh Pia', ne: 'मिनी पो पिया' }, desc: { en: '6 pieces — mini spring rolls with house-made chilli sauce', de: '6 Stück — Mini-Frühlingsrollen mit hausgemachter Chili-Soße', ne: '६ पीस — मिनी स्प्रिङ रोल, घरैको खुर्सानीको सससँग' }, price: 5.90, badges: [], pop: 3 },
        { num: '11', name: { en: 'Japanese Gyosa', de: 'Japanische Gyosa', ne: 'जापानी ग्योजा' }, desc: { en: '6 pieces — chicken dumplings with chilli sauce', de: '6 Stück — Teigtaschen mit Hühnerfleisch und Chili-Soße', ne: '६ पीस — कुखुराको डम्प्लिङ, खुर्सानीको सससँग' }, price: 9.90, badges: [] },
        { num: '12', name: { en: 'Tori Teriyaki', de: 'Tori Teriyaki', ne: 'तोरी तेरियाकी' }, desc: { en: 'Chicken skewer with teriyaki sauce', de: 'Hühnerfleisch-Spieß mit Teriyaki-Soße', ne: 'कुखुराको सेकुवा, तेरियाकी सससँग' }, price: 6.90, badges: [] },
        { num: '13', name: { en: 'Edamame', de: 'Edamame', ne: 'एदामामे' }, desc: { en: 'Young soybeans, sea salt', de: 'Junge Sojabohnen, Meersalz', ne: 'कलिलो भटमास, समुन्द्री नुन' }, price: 6.90, was: 7.90, badges: ['vegetarian'], pop: 6 },
        { num: '14', name: { en: 'Cross Spicy Edamame', de: 'Cross Spicy Edamame', ne: 'क्रस स्पाइसी एदामामे' }, desc: { en: 'with spicy teriyaki sauce', de: 'mit spicy Teriyaki-Soße', ne: 'पिरो तेरियाकी सससँग' }, price: 8.90, badges: ['vegetarian', 'spicy'] },
        ],
      },
      {
        slug: 'tempura',
        label: { en: 'Tempura', de: 'Tempura', ne: 'टेम्पुरा' },
        items: [
        { num: '20', name: { en: 'Japanese Vegetable Tempura', de: 'Japanische Gemüse Tempura', ne: 'जापानी तरकारी टेम्पुरा' }, desc: { en: 'Courgette, mushrooms, sweet potato, broccoli, house-made sauce', de: 'Zucchini, Champignons, Süßkartoffeln, Brokkoli, hausgemachte Soße', ne: 'जुकिनी, च्याउ, सखरखण्ड, ब्रोकाउली, घरैको सस' }, price: 8.90, badges: ['vegetarian'] },
        { num: '21', name: { en: 'Cross Prawn Tempura', de: 'Cross Garnelen Tempura', ne: 'क्रस झिँगेमाछा टेम्पुरा' }, desc: { en: '5 pieces — prawn tempura served with teriyaki sauce', de: '5 Stück — Garnelen-Tempura angerichtet mit Teriyaki Soße', ne: '५ पीस — झिँगेमाछाको टेम्पुरा, तेरियाकी सससँग' }, price: 9.90, was: 11.90, badges: [] },
        ],
      },
      {
        slug: 'salads',
        label: { en: 'Salads', de: 'Salate', ne: 'सलाद' },
        items: [
        { num: '22', name: { en: 'Cross Mixed Salad / Tuna Salad', de: 'Cross Mixed Salat / Tuna Salat', ne: 'क्रस मिक्स सलाद / टुना सलाद' }, desc: { en: 'Salmon, tuna and diced avocado, mixed salad, pumpkin seeds, house-made Cross sauce', de: 'Lachs, Thunfisch und Avocado Würfel, gemischter Salat, Kürbiskerne, hausgemachte Cross Soße', ne: 'सामन, टुना र एभोकाडो, मिक्स सलाद, कद्दूको बीउ, घरैको क्रस सस' }, price: 10.90, badges: [] },
        { num: '23', name: { en: 'Cross Avocado Salad', de: 'Cross Avocado Salat', ne: 'क्रस एभोकाडो सलाद' }, desc: { en: 'Avocado, mixed salad, pumpkin seeds, house-made Cross sauce, shiso cress and sesame', de: 'Avocado, gemischter Salat, Kürbiskerne, hausgemachte Cross Soße, Shiso-Kresse und Sesam', ne: 'एभोकाडो, मिक्स सलाद, कद्दूको बीउ, घरैको क्रस सस, शिसो र तिल' }, price: 11.90, badges: ['vegetarian'] },
        { num: '24', name: { en: 'Asian Spinach Salad', de: 'Asia Spinat Salat', ne: 'एसियाली पालुङ्गो सलाद' }, desc: { en: 'Spinach leaves, peanut sauce', de: 'Spinatblätter, Erdnusssoße', ne: 'पालुङ्गोको पात, बदामको सस' }, price: 9.90, badges: ['vegetarian'] },
        { num: '25', name: { en: 'Cross Cesar Salad', de: 'Cross Cesar Salat', ne: 'क्रस सिजर सलाद' }, desc: { en: 'Romaine with panko chicken, house-made Cross sauce and shiso cress', de: 'Romanasalat mit Panko-Hähnchen, hausgemachte Cross Soße und Shiso-Kresse', ne: 'रोमेन सलाद, पान्को कुखुरा, घरैको क्रस सस र शिसो' }, price: 13.90, badges: [] },
        ],
      },
      {
        slug: 'nigiri',
        label: { en: 'Nigiri', de: 'Nigiri', ne: 'निगिरी' },
        items: [
        { num: '40', name: { en: 'Asparagus', de: 'Spargel', ne: 'कुरिलो' }, desc: { en: 'Green asparagus', de: 'Grüner Spargel', ne: 'हरियो कुरिलो' }, price: 5.90, badges: ['vegetarian'] },
        { num: '41', name: { en: 'Kanisuja', de: 'Kanisuja', ne: 'कानिसुजा' }, desc: { en: 'Avocado', de: 'Avocado', ne: 'एभोकाडो' }, price: 5.90, badges: ['vegetarian'] },
        { num: '42', name: { en: 'Shake', de: 'Shake', ne: 'शाके' }, desc: { en: 'Salmon', de: 'Lachs', ne: 'सामन' }, price: 5.90, badges: [] },
        { num: '43', name: { en: 'Unagi', de: 'Unagi', ne: 'उनागी' }, desc: { en: 'Eel', de: 'Aal', ne: 'ईल माछा' }, price: 6.90, badges: [] },
        { num: '44', name: { en: 'Yellowfin Tuna', de: 'Yellowfin Tuna', ne: 'यलोफिन टुना' }, desc: null, price: 8.90, badges: [] },
        ],
      },
      {
        slug: 'special-nigiri',
        label: { en: 'Special Nigiri', de: 'Special Nigiri', ne: 'विशेष निगिरी' },
        items: [
        { num: '40.a', name: { en: 'Tempura Asparagus Nigiri', de: 'Tempura Spargel Nigiri', ne: 'टेम्पुरा कुरिलो निगिरी' }, desc: { en: 'Spicy sauce, kimchi sesame', de: 'Spicy Soße, Kimchi-Sesam', ne: 'पिरो सस, किम्ची तिल' }, price: 7.90, badges: ['spicy'] },
        { num: '41.a', name: { en: 'Avocado with Ceviche', de: 'Avocado mit Ceviche', ne: 'एभोकाडो र सेभिचे' }, desc: { en: 'Parsley, sesame', de: 'Petersilie, Sesam', ne: 'पार्सले, तिल' }, price: 7.90, badges: ['vegetarian'] },
        { num: '42.b', name: { en: 'Flambéed Salmon Nigiri', de: 'Flambiertes Salmon Nigiri', ne: 'फ्ल्याम्बे सामन निगिरी' }, desc: { en: 'Torched salmon, nut butter, ponzu sauce, crispy panko', de: 'Flambierter Lachs, Nussbutter, Ponzu Soße, Crispy Panko', ne: 'फ्ल्याम्बे सामन, नट बटर, पोन्जु सस, क्रिस्पी पान्को' }, price: 8.90, badges: [] },
        { num: '43.c', name: { en: 'Tempura Prawn', de: 'Tempura-Garnele', ne: 'टेम्पुरा झिँगेमाछा' }, desc: { en: 'Cross dressing with shiso cress', de: 'Cross Dressing mit Shiso-Kresse', ne: 'क्रस ड्रेसिङ र शिसो' }, price: 9.90, badges: [] },
        { num: '44.d', name: { en: 'Maguro Teriyaki Nigiri', de: 'Maguro Teriyaki Nigiri', ne: 'मागुरो तेरियाकी निगिरी' }, desc: { en: 'Torched tuna, mayo sauce, togarashi, kimchi sesame, teriyaki sauce', de: 'Flambierter Thunfisch, Mayo Soße, Togarashi, Kimchi-Sesam, Teriyaki Soße', ne: 'फ्ल्याम्बे टुना, मेयो सस, तोगाराशी, किम्ची तिल, तेरियाकी सस' }, price: 9.90, badges: [] },
        { num: '45.e', name: { en: 'Smoke Beef Nigiri', de: 'Smoke Beef Nigiri', ne: 'स्मोक बिफ निगिरी' }, desc: { en: 'Torched beef, nut butter, truffle ponzu, crispy panko', de: 'Flambiertes Rindfleisch, Nussbutter, Trüffel Ponzu, Crispy Panko', ne: 'फ्ल्याम्बे बिफ, नट बटर, ट्रफल पोन्जु, क्रिस्पी पान्को' }, price: 8.90, badges: [] },
        { num: '46.f', name: { en: 'Smoke Salmon Nigiri', de: 'Smoke Salmon Nigiri', ne: 'स्मोक सामन निगिरी' }, desc: { en: 'Salmon, nut butter, ponzu sauce, wakame with tobiko and chives', de: 'Lachs, Nussbutter, Ponzu Soße, Wakame mit Tobiko Schnittlauch', ne: 'सामन, नट बटर, पोन्जु सस, वाकामे, तोबिको र चाइभ्स' }, price: 9.90, badges: [] },
        ],
      },
      {
        slug: 'maki',
        label: { en: 'Maki', de: 'Maki', ne: 'माकी' },
        items: [
        { num: '50', name: { en: 'Cucumber Maki', de: 'Gurke Maki', ne: 'काँक्रो माकी' }, desc: { en: 'with sesame', de: 'mit Sesam', ne: 'तिलसहित' }, price: 5.90, badges: ['vegetarian'] },
        { num: '51', name: { en: 'Avocado Maki', de: 'Avocado Maki', ne: 'एभोकाडो माकी' }, desc: null, price: 6.60, badges: ['vegetarian'], pop: 2 },
        { num: '52', name: { en: 'Asparagus Maki', de: 'Spargel Maki', ne: 'कुरिलो माकी' }, desc: null, price: 6.60, badges: ['vegetarian'] },
        { num: '53', name: { en: 'Salmon Maki', de: 'Lachs Maki', ne: 'सामन माकी' }, desc: null, price: 7.60, badges: [], pop: 5 },
        { num: '54', name: { en: 'Tuna Maki', de: 'Tuna Maki', ne: 'टुना माकी' }, desc: null, price: 8.50, badges: [] },
        ],
      },
      {
        slug: 'crossover-maki',
        label: { en: 'Crossover Maki', de: 'Crossover Maki', ne: 'क्रसओभर माकी' },
        items: [
        { num: '60', name: { en: 'Salmon & Avocado Maki', de: 'Lachs & Avocado Maki', ne: 'सामन र एभोकाडो माकी' }, desc: null, price: 8.90, badges: [] },
        { num: '61', name: { en: 'Tuna & Avocado Maki', de: 'Tuna & Avocado Maki', ne: 'टुना र एभोकाडो माकी' }, desc: null, price: 8.90, badges: [] },
        { num: '62', name: { en: 'Tempura Prawn Maki', de: 'Tempura-Garnelen Maki', ne: 'टेम्पुरा झिँगेमाछा माकी' }, desc: null, price: 8.90, badges: [] },
        { num: '63', name: { en: 'Cross Avocado Ceviche Maki', de: 'Cross Avocado Ceviche Maki', ne: 'क्रस एभोकाडो सेभिचे माकी' }, desc: null, price: 9.90, badges: [] },
        { num: '64', name: { en: 'Tempura Asparagus Maki', de: 'Tempura-Spargel Maki', ne: 'टेम्पुरा कुरिलो माकी' }, desc: null, price: 9.90, badges: [] },
        { num: '65', name: { en: 'Sweet Heart Maki', de: 'Sweet Heart Maki', ne: 'स्वीट हार्ट माकी' }, desc: { en: 'Salmon with warm butter ponzu and crunchy panko', de: 'Lachs mit warmer Butter Ponzu und Panko Crunchy', ne: 'सामन, तातो बटर पोन्जु र क्रन्ची पान्को' }, price: 9.90, badges: [] },
        { num: '66', name: { en: 'Japanese Crispy Chicken Maki', de: 'Japanese Crispy Chicken Maki', ne: 'जापानी क्रिस्पी चिकेन माकी' }, desc: { en: 'with teriyaki sauce', de: 'mit Teriyaki Soße', ne: 'तेरियाकी सससँग' }, price: 8.90, badges: [] },
        { num: '67', name: { en: 'Tempura Salmon Maki', de: 'Tempura-Lachs Maki', ne: 'टेम्पुरा सामन माकी' }, desc: { en: 'with teriyaki sauce', de: 'mit Teriyaki Soße', ne: 'तेरियाकी सससँग' }, price: 8.90, badges: [] },
        { num: '68', name: { en: 'Yellowfin Tuna Tartare Maki', de: 'Yellowfin Tuna Tatar Maki', ne: 'यलोफिन टुना ट्यार्टार माकी' }, desc: null, price: 9.50, badges: [] },
        { num: '69', name: { en: 'Salmon Tartare Maki', de: 'Lachs Tatar Maki', ne: 'सामन ट्यार्टार माकी' }, desc: null, price: 9.50, badges: [] },
        ],
      },
      {
        slug: 'poke-bowls',
        label: { en: 'Poke Bowls', de: 'Poke Bowls', ne: 'पोके बाउल' },
        items: [
        { num: '30 A', name: { en: 'Veggie Bowl', de: 'Veggie Bowl', ne: 'भेजी बाउल' }, desc: null, price: 15.90, badges: ['vegetarian'] },
        { num: '30 B', name: { en: 'Tuna Bowl', de: 'Tuna Bowl', ne: 'टुना बाउल' }, desc: { en: 'Coral lentils, avocado, beetroot', de: 'Korallenlinsen, Avocado, Rote Beete', ne: 'रातो दाल, एभोकाडो, चुकन्दर' }, price: 17.90, badges: [] },
        { num: '30 C', name: { en: 'Teriyaki Bowl', de: 'Teriyaki Bowl', ne: 'तेरियाकी बाउल' }, desc: { en: 'Prawns, walnut, soy, mayo sauce', de: 'Garnelen, Walnuss, Soja, Mayo Soße', ne: 'झिँगेमाछा, ओखर, सोया, मेयो सस' }, price: 19.90, badges: [] },
        { num: '30 D', name: { en: 'Crazy Chicken Bowl', de: 'Crazy Chicken Bowl', ne: 'क्रेजी चिकेन बाउल' }, desc: { en: 'Teriyaki sauce, peanut sauce', de: 'Teriyaki Soße, Erdnusssoße', ne: 'तेरियाकी सस, बदामको सस' }, price: 18.90, badges: [] },
        ],
      },
      {
        slug: 'kids-maki',
        label: { en: 'Kids Maki', de: 'Kinder Maki', ne: 'बालबालिकाका माकी' },
        items: [
        { num: '70', name: { en: 'Salmon Maki', de: 'Lachs Maki', ne: 'सामन माकी' }, desc: { en: 'with teriyaki sauce', de: 'mit Teriyaki Soße', ne: 'तेरियाकी सससँग' }, price: 8.50, badges: [] },
        { num: '71', name: { en: 'Mango Maki', de: 'Mango Maki', ne: 'आँप माकी' }, desc: null, price: 7.50, badges: ['vegetarian'] },
        { num: '72', name: { en: 'Japanese Crispy Chicken Maki', de: 'Japanese Crispy Chicken Maki', ne: 'जापानी क्रिस्पी चिकेन माकी' }, desc: { en: 'with teriyaki sauce', de: 'mit Teriyaki Soße', ne: 'तेरियाकी सससँग' }, price: 8.00, badges: [] },
        { num: '73', name: { en: 'Tempura Crispy Chicken Maki', de: 'Tempura Crispy Chicken Maki', ne: 'टेम्पुरा क्रिस्पी चिकेन माकी' }, desc: null, price: 8.50, badges: [] },
        { num: '74', name: { en: 'Avocado Maki', de: 'Avocado Maki', ne: 'एभोकाडो माकी' }, desc: null, price: 7.50, badges: ['vegetarian'] },
        { num: '75', name: { en: 'Avocado Drink Maki', de: 'Avocado Trink Maki', ne: 'एभोकाडो ड्रिंक माकी' }, desc: null, price: 5.50, badges: ['vegetarian'] },
        ],
      },
      {
        slug: 'classic-roll',
        label: { en: 'Classic Roll', de: 'Classic Roll', ne: 'क्लासिक रोल' },
        items: [
        { num: '80', name: { en: 'California — Rocky Roll', de: 'California — Rocky Roll', ne: 'क्यालिफोर्निया — रकी रोल' }, desc: { en: 'Salmon, cucumber, rocket and sesame', de: 'Lachs, Gurke, Rucola und Sesam', ne: 'सामन, काँक्रो, रुकोला र तिल' }, price: 9.90, was: 10.90, badges: [] },
        { num: '81', name: { en: 'California — Boston Roll', de: 'California — Boston Roll', ne: 'क्यालिफोर्निया — बोस्टन रोल' }, desc: { en: 'Yellowfin tuna, cucumber, avocado, sesame', de: 'Yellowfin Tuna, Gurke, Avocado, Sesam', ne: 'यलोफिन टुना, काँक्रो, एभोकाडो, तिल' }, price: 9.90, was: 10.90, badges: [] },
        { num: '82', name: { en: 'California — New Cross Roll', de: 'California — New Cross Roll', ne: 'क्यालिफोर्निया — न्यू क्रस रोल' }, desc: { en: 'Salmon, avocado, caramelised cashews, cress, honey-mustard sauce', de: 'Lachs, Avocado, karamellisierte Cashewkerne, Kresse, Honig-Senf-Soße', ne: 'सामन, एभोकाडो, क्यारामेल काजु, क्रेस, मह-तोरीको सस' }, price: 12.90, badges: [], pop: 4 },
        { num: '83', name: { en: 'Cross Avocado Salmon Roll', de: 'Cross Avocado Salmon Roll', ne: 'क्रस एभोकाडो सामन रोल' }, desc: { en: 'Cucumber, black & white sesame', de: 'Gurke, black & white Sesam', ne: 'काँक्रो, कालो र सेतो तिल' }, price: 12.90, badges: [] },
        ],
      },
      {
        slug: 'signature-roll',
        label: { en: 'Signature Roll', de: 'Signature Roll', ne: 'सिग्नेचर रोल' },
        items: [
        { num: '110', name: { en: 'Sweet Dream Roll', de: 'Sweet Dream Roll', ne: 'स्वीट ड्रिम रोल' }, desc: { en: 'Tempura prawns, avocado, cucumber, spicy tuna tartare, spicy teriyaki, mayo, kimchi sesame, spring onions', de: 'Tempura-Garnelen, Avocado, Gurke, Spicy Tuna-Tatar, Spicy Teriyaki, Mayo, Kimchi-Sesam, Lauchzwiebeln', ne: 'टेम्पुरा झिँगेमाछा, एभोकाडो, काँक्रो, पिरो टुना ट्यार्टार, पिरो तेरियाकी, मेयो, किम्ची तिल, हरियो प्याज' }, price: 12.90, was: 13.90, badges: ['spicy'] },
        { num: '111', name: { en: 'Premium Smoke Salmon Roll', de: 'Premium Smoke Salmon Roll', ne: 'प्रिमियम स्मोक सामन रोल' }, desc: { en: 'Tempura prawns, cucumber, avocado, torched salmon, mayo-teriyaki, chives, shiso cress', de: 'Tempura-Garnelen, Gurke, Avocado, flambierter Lachs, Mayo-Teriyaki, Schnittlauch, Shiso-Kresse', ne: 'टेम्पुरा झिँगेमाछा, काँक्रो, एभोकाडो, फ्ल्याम्बे सामन, मेयो-तेरियाकी, चाइभ्स, शिसो' }, price: 12.90, was: 13.90, badges: ['signature'], pop: 1 },
        { num: '112', name: { en: 'Crunchy Eel Roll', de: 'Crunchy Aal Roll', ne: 'क्रन्ची ईल रोल' }, desc: { en: 'Tempura unagi, avocado, cucumber, salmon topping, sesame, shiso cress, teriyaki', de: 'Tempura-Unagi, Avocado, Gurke, Lachs-Topping, Sesam, Shiso-Kresse, Teriyaki', ne: 'टेम्पुरा उनागी, एभोकाडो, काँक्रो, सामन टपिङ, तिल, शिसो, तेरियाकी' }, price: 12.90, was: 13.90, badges: [] },
        { num: '113', name: { en: 'Hot Star Roll', de: 'Hot Star Roll', ne: 'हट स्टार रोल' }, desc: { en: 'Tempura red chilli, cucumber, tuna, tuna tartare, torched mayo, spicy teriyaki, spring onion, shiso cress, kimchi sesame', de: 'Tempura-Rote-Peperoni, Gurke, Tuna, Tuna-Tatar, Mayo flambiert, Spicy Teriyaki, Lauchzwiebel, Shiso-Kresse, Kimchi-Sesam', ne: 'टेम्पुरा रातो खुर्सानी, काँक्रो, टुना, टुना ट्यार्टार, फ्ल्याम्बे मेयो, पिरो तेरियाकी, हरियो प्याज, शिसो, किम्ची तिल' }, price: 13.90, was: 14.90, badges: ['spicy'] },
        { num: '114', name: { en: 'Everest Roll', de: 'Everest Roll', ne: 'एभरेस्ट रोल' }, desc: { en: 'Tempura shrimp, torched yellowfin tuna, avocado, cucumber, special spice, teriyaki mayo, shiso cress, kimchi sesame', de: 'Tempura-Shrimps, flambierter Yellowfin Tuna, Avocado, Gurke, Spezialgewürz, Teriyaki-Mayo, Shiso-Kresse, Kimchi-Sesam', ne: 'टेम्पुरा झिँगेमाछा, फ्ल्याम्बे यलोफिन टुना, एभोकाडो, काँक्रो, विशेष मसला, तेरियाकी मेयो, शिसो, किम्ची तिल' }, price: 13.90, was: 14.90, badges: [] },
        { num: '115', name: { en: 'Truffle Roast Beef Roll', de: 'Trüffel Roast Beef Roll', ne: 'ट्रफल रोस्ट बिफ रोल' }, desc: { en: 'Tempura prawns, cucumber, avocado, torched roast beef, nut butter, truffle ponzu, spicy sauce, wasabi, sesame, shiso cress', de: 'Tempura-Garnelen, Gurke, Avocado, flambiertes Roastbeef, Nussbutter, Trüffel-Ponzu, Spicy Soße, Wasabi, Sesam, Shiso-Kresse', ne: 'टेम्पुरा झिँगेमाछा, काँक्रो, एभोकाडो, फ्ल्याम्बे रोस्ट बिफ, नट बटर, ट्रफल पोन्जु, पिरो सस, वासाबी, तिल, शिसो' }, price: 13.90, was: 14.90, badges: [] },
        { num: '116', name: { en: 'Salmon Tartare Roll', de: 'Salmon Tatar Roll', ne: 'सामन ट्यार्टार रोल' }, desc: { en: 'Tempura salmon, cucumber, avocado, salmon tartare with teriyaki, creamy Philadelphia, black & white sesame', de: 'Tempura-Lachs, Gurke, Avocado, Lachstatar mit Teriyaki, Creamy Philadelphia, black & white Sesam', ne: 'टेम्पुरा सामन, काँक्रो, एभोकाडो, सामन ट्यार्टार र तेरियाकी, क्रिमी फिलाडेल्फिया, कालो र सेतो तिल' }, price: 13.90, badges: [], pop: 7 },
        ],
      },
      {
        slug: 'veggie-roll',
        label: { en: 'Veggie Roll', de: 'Veggie Roll', ne: 'भेजी रोल' },
        items: [
        { num: '130', name: { en: 'Red Power Roll', de: 'Red Power Roll', ne: 'रेड पावर रोल' }, desc: { en: 'Marinated carrot, cucumber, avocado, beetroot topping, grilled red pepper, hariyo sauce, wasabi sesame, shiso cress', de: 'Marinierte Karotten, Gurke, Avocado, Rote-Bete-Topping, gegrillte rote Paprika, Hariyo-Soße, Wasabi-Sesam, Shiso-Kresse', ne: 'मरिनेट गरेको गाजर, काँक्रो, एभोकाडो, चुकन्दर टपिङ, ग्रिल्ड रातो भेडे खुर्सानी, हरियो सस, वासाबी तिल, शिसो' }, price: 10.90, badges: ['vegetarian'] },
        { num: '131', name: { en: 'Cross Rock Roll', de: 'Cross Rock Roll', ne: 'क्रस रक रोल' }, desc: { en: 'Cucumber, avocado, mango, tempura asparagus, avocado topping, ceviche, parsley, black & white sesame', de: 'Gurke, Avocado, Mango, Tempura-Spargel, Avocado-Topping, Ceviche, Petersilie, black & white Sesam', ne: 'काँक्रो, एभोकाडो, आँप, टेम्पुरा कुरिलो, एभोकाडो टपिङ, सेभिचे, पार्सले, कालो र सेतो तिल' }, price: 10.90, badges: ['vegetarian'] },
        ],
      },
      {
        slug: 'hot-roll',
        label: { en: 'Hot Roll', de: 'Hot Roll', ne: 'हट रोल' },
        items: [
        { num: '140', name: { en: 'Cross Crunchy Roll', de: 'Cross Crunchy Roll', ne: 'क्रस क्रन्ची रोल' }, desc: { en: 'Tempura shrimp, house-made teriyaki and mayo sauce', de: 'Tempura Shrimps, hausgemachte Teriyaki und Mayo Soße', ne: 'टेम्पुरा झिँगेमाछा, घरैको तेरियाकी र मेयो सस' }, price: 11.90, badges: [] },
        { num: '141', name: { en: 'Japanese Crispy Chicken Roll', de: 'Japanese Crispy Chicken Roll', ne: 'जापानी क्रिस्पी चिकेन रोल' }, desc: { en: 'Crispy chicken, avocado, cucumber, spicy teriyaki sauce', de: 'Crispy Chicken, Avocado, Gurke, Spicy Teriyaki Soße', ne: 'क्रिस्पी चिकेन, एभोकाडो, काँक्रो, पिरो तेरियाकी सस' }, price: 10.90, badges: [] },
        { num: '142', name: { en: 'Crispy Duck Roll', de: 'Crispy Duck Roll', ne: 'क्रिस्पी डक रोल' }, desc: { en: 'Tempura duck, teriyaki sauce with chives and spicy sauce', de: 'Tempura Ente, Teriyaki Soße mit Schnittlauch und Spicy Soße', ne: 'टेम्पुरा हाँस, तेरियाकी सस, चाइभ्स र पिरो सस' }, price: 11.90, badges: [] },
        { num: '143', name: { en: 'Cross Crunchy Spicy Roll', de: 'Cross Crunchy Spicy Roll', ne: 'क्रस क्रन्ची स्पाइसी रोल' }, desc: { en: 'Cucumber, spicy tuna with chives and spicy sauce', de: 'Gurke, Spicy Tuna mit Schnittlauch und Spicy Soße', ne: 'काँक्रो, पिरो टुना, चाइभ्स र पिरो सस' }, price: 11.90, badges: ['spicy'] },
        { num: '144', name: { en: 'Cross Tempura Roll', de: 'Cross Tempura Roll', ne: 'क्रस टेम्पुरा रोल' }, desc: { en: 'Salmon, spicy tuna, house-made teriyaki and mayo sauce, sesame', de: 'Lachs, Spicy Tuna, hausgemachte Teriyaki und Mayo Soße, Sesam', ne: 'सामन, पिरो टुना, घरैको तेरियाकी र मेयो सस, तिल' }, price: 11.90, badges: [] },
        ],
      },
      {
        slug: 'sashimi',
        label: { en: 'Sashimi', de: 'Sashimi', ne: 'सासिमी' },
        items: [
        { num: '90', name: { en: 'Avocado Ceviche Sashimi', de: 'Avocado Ceviche Sashimi', ne: 'एभोकाडो सेभिचे सासिमी' }, desc: { en: 'Avocado, sashimi, sesame', de: 'Avocado, Sashimi, Sesam', ne: 'एभोकाडो, सासिमी, तिल' }, price: 11.90, badges: ['vegetarian'] },
        { num: '91', name: { en: 'Raw Bento Sashimi', de: 'Rohe Bento Sashimi', ne: 'काँचो बेन्तो सासिमी' }, desc: { en: 'Sashimi with mixed salad, tomato sauce, cress', de: 'Sashimi mit gemischtem Salat, Tomatensauce, Kresse', ne: 'सासिमी, मिक्स सलाद, गोलभेँडाको सस, क्रेस' }, price: 11.90, badges: [] },
        { num: '92', name: { en: 'Salmon Sashimi', de: 'Lachs Sashimi', ne: 'सामन सासिमी' }, desc: null, price: 21.90, badges: [] },
        { num: '93', name: { en: 'Cross Special Salmon Sashimi', de: 'Cross Special Salmon Sashimi', ne: 'क्रस स्पेशल सामन सासिमी' }, desc: { en: 'Wasabi, ginger, carrot, tomato, cress', de: 'Wasabi, Ingwer, Karotten, Tomaten, Kresse', ne: 'वासाबी, अदुवा, गाजर, गोलभेँडा, क्रेस' }, price: 27.90, badges: [] },
        { num: '94', name: { en: 'Cross Special Yellowfin Tuna Tartare', de: 'Cross Special Yellowfin Tuna Tatar', ne: 'क्रस स्पेशल यलोफिन टुना ट्यार्टार' }, desc: { en: 'Fresh yellowfin tuna, sesame, cress', de: 'Frischer Yellowfin Tuna, Sesam, Kresse', ne: 'ताजा यलोफिन टुना, तिल, क्रेस' }, price: 27.90, badges: [] },
        { num: '95', name: { en: 'Cross Special Yellowfin Tuna Tataki', de: 'Cross Special Yellowfin Tuna Tataki', ne: 'क्रस स्पेशल यलोफिन टुना तताकी' }, desc: null, price: 19.90, badges: [] },
        { num: '100', name: { en: 'Cross Special Wellhorn Sashimi', de: 'Cross Special Wellhorn Sashimi', ne: 'क्रस स्पेशल वेलहर्न सासिमी' }, desc: { en: 'Seaweed leaves and salmon tartare, ponzu sauce', de: 'Seetangblätter und Lachstatar, Soße Ponzu', ne: 'समुन्द्री झार र सामन ट्यार्टार, पोन्जु सस' }, price: 22.90, badges: [] },
        { num: '101', name: { en: 'Cross Special Salmon Sashimi', de: 'Cross Special Salmon Sashimi', ne: 'क्रस स्पेशल सामन सासिमी' }, desc: { en: 'Dry-ice waves, lime, truffle ponzu sauce', de: 'Wellenförmig Trockeneis, Limette, Trüffel Ponzu Soße', ne: 'ड्राई आइस, कागती, ट्रफल पोन्जु सस' }, price: 24.90, badges: [] },
        { num: '102', name: { en: 'Cross Special Kobe Bento Sashimi', de: 'Cross Special Kobe Bento Sashimi', ne: 'क्रस स्पेशल कोबे बेन्तो सासिमी' }, desc: { en: 'Rose butter, truffle-foam sashimi, truffle ponzu', de: 'Rosenbutter, Trüffel-Schaum Sashimi, Trüffel Ponzu', ne: 'रोज बटर, ट्रफल फोम सासिमी, ट्रफल पोन्जु' }, price: 24.90, badges: [] },
        { num: '103', name: { en: 'Cross Special Roast Beef Sashimi', de: 'Cross Special Roast Beef Sashimi', ne: 'क्रस स्पेशल रोस्ट बिफ सासिमी' }, desc: { en: 'Fresh roast beef with rose butter, truffle ponzu, mixed salad and shiso cress', de: 'Frisches Roast Beef mit Rosenbutter, Trüffel Ponzu, gemischter Salat und Shiso-Kresse', ne: 'ताजा रोस्ट बिफ, रोज बटर, ट्रफल पोन्जु, मिक्स सलाद र शिसो' }, price: 24.90, badges: [] },
        ],
      },
      {
        slug: 'platten',
        label: { en: 'Cross Mix Platters', de: 'Cross Mix Platten', ne: 'क्रस मिक्स प्लेट' },
        items: [
        { num: '270', name: { en: 'Veggie Mix', de: 'Veggie Mix', ne: 'भेजी मिक्स' }, desc: { en: 'Miso soup · 2 avocado nigiri · 2 mango nigiri · 4 kappa maki · 4 avocado maki · 8 veggie Cross rolls', de: 'Misosuppe · 2 Nigiri Avocado · 2 Nigiri Mango · 4 Maki Kappa · 4 Maki Avocado · 8 Veggie Cross Rolls', ne: 'मिसो सुप · २ एभोकाडो निगिरी · २ आँप निगिरी · ४ कप्पा माकी · ४ एभोकाडो माकी · ८ भेजी क्रस रोल' }, price: 21.90, badges: ['vegetarian'] },
        { num: '271', name: { en: 'Classic Mix', de: 'Classic Mix', ne: 'क्लासिक मिक्स' }, desc: { en: 'Miso soup · salmon & tuna nigiri · avocado maki · California & Boston roll · 3 salmon sashimi', de: 'Misosuppe · Nigiri Lachs & Tuna · Avocado Maki · California & Boston Roll · 3 Lachs Sashimi', ne: 'मिसो सुप · सामन र टुना निगिरी · एभोकाडो माकी · क्यालिफोर्निया र बोस्टन रोल · ३ सामन सासिमी' }, price: 27.90, badges: [] },
        ],
      },
      {
        slug: 'thai',
        label: { en: 'Thai Specialties', de: 'Thai Spezialitäten', ne: 'थाई विशेष परिकार' },
        items: [
        { num: '150', name: { en: 'Thai Fried Rice', de: 'Thai Fried Rice', ne: 'थाई फ्राइड राइस' }, desc: { en: 'Thai basil, sambal, cashews, coconut flakes, or Gai', de: 'Thai Basilikum, Sambal, Cashewkerne, Kokosraspeln, oder Gai', ne: 'थाई तुलसी, साम्बल, काजु, नरिवल, वा गाई' }, price: 15.50, badges: [] },
        { num: '151', name: { en: 'Massaman Curry', de: 'Massaman Curry', ne: 'मस्समान करी' }, desc: { en: 'Nahi Massaman with potato, mushrooms, carrot, peanut', de: 'Nahi Massaman mit Kartoffeln, Champignons, Karotten, Erdnuss', ne: 'नाही मस्समान, आलु, च्याउ, गाजर, बदाम' }, price: 17.90, badges: [] },
        { num: '152', name: { en: 'Gäng Tom Kha Gai', de: 'Gäng Tom Kha Gai', ne: 'गाङ टोम खा गाई' }, desc: { en: 'Coconut soup with chicken, mushrooms, coriander', de: 'Kokossuppe mit Hühnerfleisch, Champignons, Koriander', ne: 'नरिवलको सुप, कुखुराको मासु, च्याउ, धनियाँ' }, price: 17.90, badges: [] },
        { num: '160', name: { en: 'Crispy Sweet Chicken', de: 'Crispy Sweet Huhn', ne: 'क्रिस्पी स्वीट चिकेन' }, desc: { en: 'or Phed — fried chicken, sweet & sour with sugar snap peas', de: 'oder Phed — gebratenes Hühnerfleisch, Süß-Sauer mit Zuckerschoten', ne: 'वा फेड — तारेको कुखुरा, अमिलो-पिरो, मिठो सिमीसँग' }, price: 18.50, badges: [] },
        { num: '161', name: { en: 'Crispy Chicken', de: 'Knuspriges Hühnerfleisch', ne: 'क्रिस्पी कुखुराको मासु' }, desc: { en: 'fried sweet & sour with sugar snap peas, corn sauce, onions', de: 'gebratenes Süß-Sauer mit Zuckerschoten, Mais Soße, Zwiebeln', ne: 'अमिलो-पिरो तारेको, मिठो सिमी, मकैको सस, प्याज' }, price: 19.90, badges: [] },
        { num: '162', name: { en: 'Chicken Cashew Teriyaki', de: 'Huhn Cashew Teriyaki', ne: 'चिकेन काजु तेरियाकी' }, desc: { en: 'Courgette, chicken, red onion, bamboo, cashews, piquant sauce', de: 'Zucchini, Hühnchen, rote Zwiebeln, Bambus, Cashewkerne, Pikante Soße', ne: 'जुकिनी, कुखुरा, रातो प्याज, बाँसको टुसा, काजु, पिरो सस' }, price: 19.90, badges: [] },
        { num: '163', name: { en: 'Japanese Teriyaki Chicken', de: 'Japanisches Teriyaki Hühnchen', ne: 'जापानी तेरियाकी चिकेन' }, desc: { en: 'or peanut — spinach leaves, bamboo, red onion, glass noodles', de: 'oder Erdnuss — Spinatblätter, Bambus, rote Zwiebeln, Glasnudeln', ne: 'वा बदाम — पालुङ्गो, बाँसको टुसा, रातो प्याज, ग्लास नुडल' }, price: 17.90, badges: [] },
        { num: '164', name: { en: 'Korma Tofu', de: 'Korma Tofu', ne: 'कोर्मा टोफु' }, desc: { en: 'Tofu, Thai chilli, cauliflower, green beans, red onion, korma cream sauce', de: 'Tofu, Thai Peperoni, Blumenkohl, Schnittbohnen, rote Zwiebeln, Korma-Sahne-Soße', ne: 'टोफु, थाई खुर्सानी, काउली, सिमी, रातो प्याज, कोर्मा क्रिम सस' }, price: 15.90, badges: ['vegetarian'] },
        { num: '165', name: { en: 'Gai Pled Prao', de: 'Gai Pled Prao', ne: 'गाई प्लेड प्राओ' }, desc: { en: 'Thai style — chicken, Thai vegetables, cashews, korma, Thai chilli', de: 'Thai art — Hühnerfleisch, Thai Gemüse, Cashewkerne, Korma, Thai Peperoni', ne: 'थाई शैली — कुखुराको मासु, थाई तरकारी, काजु, कोर्मा, थाई खुर्सानी' }, price: 17.90, badges: ['spicy'] },
        { num: '170', name: { en: 'Fried Beef', de: 'Gebratenes Rindfleisch', ne: 'तारेको बिफ' }, desc: { en: 'red chilli, cauliflower, broccoli, courgette, bamboo, bell pepper, red onion, sugar snap peas', de: 'rote Peperoni, Blumenkohl, Brokkoli, Zucchini, Bambus, Paprika, rote Zwiebeln, Zuckerschoten', ne: 'रातो खुर्सानी, काउली, ब्रोकाउली, जुकिनी, बाँसको टुसा, भेडे खुर्सानी, रातो प्याज, मिठो सिमी' }, price: 17.90, badges: [] },
        { num: '171', name: { en: 'Nua Pled Prao', de: 'Nua Pled Prao', ne: 'नुआ प्लेड प्राओ' }, desc: { en: 'fried beef, bell pepper, cashews, red onion, red chilli', de: 'gebratenes Rindfleisch, Paprika, Cashewkerne, rote Zwiebeln, rote Peperoni', ne: 'तारेको बिफ, भेडे खुर्सानी, काजु, रातो प्याज, रातो खुर्सानी' }, price: 17.90, badges: ['spicy'] },
        { num: '180', name: { en: 'Cross Duck Teriyaki', de: 'Cross Ente Teriyaki', ne: 'क्रस डक तेरियाकी' }, desc: { en: 'crispy duck, sesame seeds, red onion, peanuts or peanut sauce', de: 'knusprige Ente, Sesamkörner, rote Zwiebeln, Erdnusskörner oder Erdnusssoße', ne: 'क्रिस्पी हाँस, तिल, रातो प्याज, बदाम वा बदामको सस' }, price: 19.90, badges: [] },
        { num: '181', name: { en: 'Cross Duck Panang Curry', de: 'Cross Ente Panang Curry', ne: 'क्रस डक पानाङ करी' }, desc: { en: 'crispy duck, panang curry, sugar snap peas, red onion, coriander', de: 'knusprige Ente, Panang Curry, Zuckerschoten, rote Zwiebeln, Koriander', ne: 'क्रिस्पी हाँस, पानाङ करी, मिठो सिमी, रातो प्याज, धनियाँ' }, price: 20.90, badges: ['spicy'] },
        ],
      },
      {
        slug: 'fish',
        label: { en: 'Fish', de: 'Fisch', ne: 'माछा' },
        items: [
        { num: '190', name: { en: 'Tuna Steak', de: 'Tuna Steak', ne: 'टुना स्टेक' }, desc: { en: 'Spinach leaves, fried potatoes, red chilli, broccoli, sugar snap peas, lemon, spinach sauce', de: 'Spinatblätter, Bratkartoffeln, rote Peperoni, Brokkoli, Zuckerschoten, Zitrone, Spinatsoße', ne: 'पालुङ्गो, तारेको आलु, रातो खुर्सानी, ब्रोकाउली, मिठो सिमी, कागती, पालुङ्गोको सस' }, price: 21.50, badges: [] },
        { num: '191', name: { en: 'Barbecue Salmon', de: 'Barbecue Lachs', ne: 'बार्बेक्यु सामन' }, desc: { en: 'Grilled salmon fillet, fresh salad leaves, red chilli, sugar snap peas, lemon, spinach sauce', de: 'Gegrilltes Lachsfilet, frische Salatblätter, rote Peperoni, Zuckerschoten, Zitrone, Spinatsoße', ne: 'ग्रिल्ड सामन फिलेट, ताजा सलाद, रातो खुर्सानी, मिठो सिमी, कागती, पालुङ्गोको सस' }, price: 19.90, badges: [] },
        ],
      },
      {
        slug: 'rice-noodles',
        label: { en: 'Rice & Noodles', de: 'Reis & Nudeln', ne: 'भात र नुडल' },
        items: [
        { num: '200 A', name: { en: 'Vegetarian', de: 'Vegetarisch', ne: 'शाकाहारी' }, desc: null, price: 13.90, badges: ['vegetarian'] },
        { num: '200 B', name: { en: 'Chicken', de: 'Hühnerfleisch', ne: 'कुखुराको मासु' }, desc: null, price: 17.90, badges: [] },
        { num: '200 C', name: { en: 'Beef', de: 'Rindfleisch', ne: 'बिफ' }, desc: null, price: 17.90, badges: [] },
        { num: '200 D', name: { en: 'Crispy Duck / Chicken', de: 'Knusprige Ente / Hähnchen', ne: 'क्रिस्पी हाँस / कुखुरा' }, desc: null, price: 18.90, badges: [] },
        ],
      },
      {
        slug: 'vegetarian',
        label: { en: 'Vegetarian', de: 'Vegetarisch', ne: 'शाकाहारी' },
        items: [
        { num: '210', name: { en: 'Coconut Sojaan', de: 'Kokos Sojaan', ne: 'नरिवल सोयान' }, desc: { en: 'Mushrooms, broccoli, sugar snap peas, bamboo, Thai basil, coconut flakes', de: 'Champignons, Brokkoli, Zuckerschoten, Bambus, Thai Basilikum, Kokosraspeln', ne: 'च्याउ, ब्रोकाउली, मिठो सिमी, बाँसको टुसा, थाई तुलसी, नरिवल' }, price: 14.90, badges: ['vegetarian'] },
        { num: '211', name: { en: 'Fried Tofu', de: 'Tofu Gebraten', ne: 'तारेको टोफु' }, desc: { en: 'Mushrooms, ginger, red onion, bamboo, cashews, piquant sauce', de: 'Champignons, Ingwer, rote Zwiebeln, Bambus, Cashewkerne, Pikante Soße', ne: 'च्याउ, अदुवा, रातो प्याज, बाँसको टुसा, काजु, पिरो सस' }, price: 14.90, badges: ['vegetarian'] },
        ],
      },
      {
        slug: 'desserts',
        label: { en: 'Desserts', de: 'Nachtisch', ne: 'मिठाई' },
        items: [
        { num: '220', name: { en: 'Crispy Banana', de: 'Knusprige Banane', ne: 'क्रिस्पी केरा' }, desc: null, price: 6.90, badges: [] },
        { num: '221', name: { en: 'Fried Vanilla Ice Cream', de: 'Frittierte Vanille-Eis', ne: 'तारेको भ्यानिला आइसक्रिम' }, desc: { en: 'with strawberry or chocolate sauce', de: 'mit Erdbeer- oder Schoko-Soße', ne: 'स्ट्रबेरी वा चकलेट सससँग' }, price: 6.90, badges: [] },
        { num: '222', name: { en: 'Warm Waffles with Vanilla Ice Cream', de: 'Warme Waffeln mit Vanille-Eis', ne: 'तातो वाफल र भ्यानिला आइसक्रिम' }, desc: { en: 'with strawberry or chocolate sauce', de: 'mit Erdbeer- oder Schoko-Soße', ne: 'स्ट्रबेरी वा चकलेट सससँग' }, price: 6.90, badges: [] },
        ],
      },
      {
        slug: 'extras',
        label: { en: 'Extras', de: 'Extras', ne: 'थप' },
        items: [
        { num: '230', name: { en: 'Jasmine Rice', de: 'Jasminreis', ne: 'जास्मिन भात' }, desc: null, price: 2.90, badges: [] },
        { num: '231', name: { en: 'Sushi Rice', de: 'Sushi-Reis', ne: 'सुसी भात' }, desc: null, price: 3.50, badges: [] },
        { num: '232', name: { en: 'House-made Sauces', de: 'Hausgemachte Soßen', ne: 'घरैका ससहरू' }, desc: { en: 'Truffle sauce, soy sauce, spicy teriyaki sauce', de: 'Trüffel Soße, Soya Soße, Spicy Teriyaki-Soße', ne: 'ट्रफल सस, सोया सस, पिरो तेरियाकी सस' }, price: 2.90, badges: [] },
        { num: '233', name: { en: 'Teriyaki Sauce', de: 'Teriyaki Soße', ne: 'तेरियाकी सस' }, desc: null, price: 3.50, badges: [] },
        { num: '234', name: { en: 'Peanut Sauce', de: 'Erdnusssoße', ne: 'बदामको सस' }, desc: null, price: 3.90, badges: [] },
        { num: '235', name: { en: 'Portion of Ginger / Wasabi', de: 'Portion Ingwer / Wasabi', ne: 'अदुवा / वासाबी' }, desc: null, price: 3.50, badges: [] },
        { num: '236', name: { en: 'Crispy Chicken', de: 'Knuspriges Hühnchen', ne: 'क्रिस्पी कुखुरा' }, desc: { en: 'with seasonal vegetables', de: 'mit Saison Gemüse', ne: 'मौसमी तरकारीसँग' }, price: 10.90, badges: [] },
        { num: '237', name: { en: 'Crispy Duck', de: 'Knusprige Ente', ne: 'क्रिस्पी हाँस' }, desc: { en: 'with seasonal vegetables', de: 'mit Saison Gemüse', ne: 'मौसमी तरकारीसँग' }, price: 9.90, badges: [] },
        ],
      }
    ]
  },
  {
    group: 'drinks',
    groupLabel: { en: 'Drinks', de: 'Getränke', ne: 'पेय पदार्थ' },
    categories: [
      {
        slug: 'tea-coffee',
        label: { en: 'Tea & Coffee', de: 'Tee & Kaffee', ne: 'चिया र कफी' },
        items: [
        { num: '240', name: { en: 'Japanese Green Tea', de: 'Japanischer Grüner Tee', ne: 'जापानी हरियो चिया' }, desc: { en: 'with various additions', de: 'mit verschiedenen Zusätzen', ne: 'विभिन्न स्वादसँग' }, price: 4.90, badges: [] },
        { num: '241', name: { en: 'Green Winter Tea', de: 'Grüner Winter-Tee', ne: 'हरियो जाडो चिया' }, desc: null, price: 4.90, badges: [] },
        { num: '242', name: { en: 'Ginger Tea', de: 'Ingwer Tee', ne: 'अदुवाको चिया' }, desc: null, price: 4.90, badges: [] },
        { num: '243', name: { en: 'Jasmine Oolong Tea', de: 'Jasmin Oolong Tee', ne: 'जास्मिन उलोङ चिया' }, desc: null, price: 5.90, badges: [] },
        { num: '250', name: { en: 'Espresso', de: 'Espresso', ne: 'एस्प्रेसो' }, desc: null, price: 2.90, badges: [] },
        { num: '251', name: { en: 'Double Espresso', de: 'Doppelter Espresso', ne: 'डबल एस्प्रेसो' }, desc: null, price: 3.90, badges: [] },
        { num: '252', name: { en: 'Cappuccino', de: 'Cappuccino', ne: 'क्यापुचिनो' }, desc: null, price: 3.90, badges: [] },
        ],
      },
      {
        slug: 'soft-drinks',
        label: { en: 'Soft Drinks', de: 'Softgetränke', ne: 'सफ्ट ड्रिंक' },
        items: [
        { num: '250', name: { en: 'Vatu Lemonade', de: 'Vatu Limonade', ne: 'वातु लेमोनेड' }, desc: '0.25 l', price: 3.00, badges: [] },
        { num: '251', name: { en: 'Still Water / Brunnen', de: 'Stilles Wasser / Brunnen', ne: 'सादा पानी / ब्रुनेन' }, desc: '0.75 l', price: 6.90, badges: [] },
        { num: '252', name: { en: 'Sparkling Water', de: 'Sprudel Wasser', ne: 'स्पार्कलिङ पानी' }, desc: '0.75 l', price: 6.90, badges: [] },
        { num: '253', name: { en: 'Coca Cola / Coca Cola Zero', de: 'Coca Cola / Coca Cola Zero', ne: 'कोका कोला / कोका कोला जिरो' }, desc: '0.4 l', price: 3.90, badges: [] },
        { num: '254', name: { en: 'Ginger Ale / Lemon', de: 'Ginger Ale / Lemon', ne: 'जिन्जर एल / लेमन' }, desc: 'Ginger Ale', price: 3.90, badges: [] },
        ],
      },
      {
        slug: 'lemonade',
        label: { en: 'Lemonades', de: 'Limonaden', ne: 'लेमोनेड' },
        items: [
        { num: '260', name: { en: 'Passion Fruit', de: 'Passion Fruit', ne: 'प्यासन फ्रुट' }, desc: { en: 'Organic orange, pineapple, organic lime', de: 'Bio Orange, Ananas, Bio Limette', ne: 'अर्गानिक सुन्तला, भुइँकटहर, अर्गानिक कागती' }, price: 5.90, badges: [] },
        { num: '261', name: { en: 'Ginger Fruity', de: 'Ginger Fruity', ne: 'जिन्जर फ्रुटी' }, desc: { en: 'Organic orange, lime juice, sugar', de: 'Bio Orange, Limettensaft, Zucker', ne: 'अर्गानिक सुन्तला, कागतीको रस, चिनी' }, price: 5.90, badges: [] },
        { num: '262', name: { en: 'Apple Jai', de: 'Apple Jai', ne: 'एप्पल जाइ' }, desc: { en: 'Sparkling water, lime juice, sugar, lemon', de: 'Sprudel Wasser, Limettensaft, Zucker, Zitrone', ne: 'स्पार्कलिङ पानी, कागतीको रस, चिनी, निबुवा' }, price: 4.90, badges: [] },
        { num: '263', name: { en: 'Mango Lassi', de: 'Mango Lassi', ne: 'आँप लस्सी' }, desc: { en: 'Yoghurt, mango, soft', de: 'Joghurt, Mango, Soft', ne: 'दही, आँप, सफ्ट' }, price: 4.90, badges: [] },
        { num: '264', name: { en: 'Kathmandu Jai', de: 'Kathmandu Jai', ne: 'काठमाडौँ जाइ' }, desc: { en: 'Lime juice, ginger and mint', de: 'Limettensaft, Ingwer und Minze', ne: 'कागतीको रस, अदुवा र पुदिना' }, price: 6.90, badges: [] },
        { num: '265', name: { en: 'Amrit Sarbat', de: 'Amrit Sarbat', ne: 'अमृत सर्बत' }, desc: { en: 'Brown sugar, mint and sparkling water', de: 'Brauner Zucker, Minze und Sprudel Wasser', ne: 'खुदो, पुदिना र स्पार्कलिङ पानी' }, price: 4.90, badges: [] },
        ],
      },
      {
        slug: 'beer',
        label: { en: 'Beer', de: 'Bier', ne: 'बियर' },
        items: [
        { num: '270', name: { en: 'König Pilsner', de: 'König Pilsner', ne: 'कोनिग पिल्सनर' }, desc: '0.3 l', price: 3.50, badges: [] },
        { num: '271', name: { en: 'König Pilsner', de: 'König Pilsner', ne: 'कोनिग पिल्सनर' }, desc: '0.5 l', price: 5.50, badges: [] },
        { num: '272', name: { en: 'Benediktiner Wheat Beer', de: 'Benediktiner Weißbier', ne: 'बेनेडिक्टिनर गहुँ बियर' }, desc: '0.3 l', price: 3.50, badges: [] },
        { num: '273', name: { en: 'Benediktiner Wheat Beer', de: 'Benediktiner Weißbier', ne: 'बेनेडिक्टिनर गहुँ बियर' }, desc: '0.5 l', price: 5.50, badges: [] },
        { num: '274', name: { en: 'Alcohol-free Pilsner', de: 'Alkoholfreies Pilsner', ne: 'रक्सीरहित पिल्सनर' }, desc: '0.33 l', price: 3.50, badges: [] },
        { num: '275', name: { en: 'Alcohol-free Wheat Beer', de: 'Alkoholfreies Weißbier', ne: 'रक्सीरहित गहुँ बियर' }, desc: '0.33 l', price: 3.50, badges: [] },
        ],
      },
      {
        slug: 'cocktails',
        label: { en: 'Cocktails', de: 'Cocktails', ne: 'ककटेल' },
        items: [
        { num: '280', name: { en: 'Caipirinha', de: 'Caipirinha', ne: 'काइपिरिन्हा' }, desc: { en: 'Lime, brown sugar, crushed ice', de: 'Limetten, brauner Zucker, crushed ice', ne: 'कागती, खुदो, क्रश्ड आइस' }, price: 10.90, badges: [] },
        { num: '281', name: { en: 'Gin Basil Smash', de: 'Gin Basil Smash', ne: 'जिन बेसिल स्म्यास' }, desc: { en: 'Gin, basil, lime, sugar syrup', de: 'Gin, Basilikum, Limetten, Zuckersirup', ne: 'जिन, तुलसी, कागती, चिनीको सिरप' }, price: 10.90, badges: [] },
        { num: '282', name: { en: 'Mojito', de: 'Mojito', ne: 'मोहितो' }, desc: { en: 'Rum, lime, mint, brown sugar, crushed ice', de: 'Rum, Limetten, Minze, brauner Zucker, crushed ice', ne: 'रम, कागती, पुदिना, खुदो, क्रश्ड आइस' }, price: 10.90, badges: [] },
        { num: '283', name: { en: 'Espresso Martini', de: 'Espresso Martini', ne: 'एस्प्रेसो मार्टिनी' }, desc: { en: 'Vodka, espresso, sugar syrup', de: 'Wodka, Espresso, Zuckersirup', ne: 'भोड्का, एस्प्रेसो, चिनीको सिरप' }, price: 11.00, badges: [] },
        { num: '284', name: { en: 'Whiskey Sour', de: 'Whiskey Sour', ne: 'व्हिस्की साउर' }, desc: { en: 'Whiskey, lemon juice, sugar, ice cubes', de: 'Whiskey, Zitronensaft, Zucker, Eiswürfel', ne: 'व्हिस्की, निबुवाको रस, चिनी, बरफ' }, price: 11.00, badges: [] },
        { num: '285', name: { en: 'The Joshua Tree', de: 'The Joshua Tree', ne: 'द जोशुआ ट्री' }, desc: { en: 'Tequila, lemon juice, sugar', de: 'Tequila, Zitronensaft, Zucker', ne: 'टकिला, निबुवाको रस, चिनी' }, price: 12.00, badges: [] },
        { num: '290', name: { en: 'Bamboo Schnapps', de: 'Bambusschnaps', ne: 'बाँसको रक्सी' }, desc: null, price: 3.50, badges: [] },
        { num: '291', name: { en: 'Grappa', de: 'Grappa', ne: 'ग्राप्पा' }, desc: null, price: 3.50, badges: [] },
        { num: '292', name: { en: 'Limoncello', de: 'Limoncello', ne: 'लिमोनचेलो' }, desc: null, price: 4.00, badges: [] },
        { num: '293', name: { en: 'Illiens Schnapps', de: 'Illiens Schnaps', ne: 'इलियन्स रक्सी' }, desc: null, price: 4.90, badges: [] },
        { num: '301', name: { en: 'The Joshua Tea Spritz', de: 'The Joshua Tea Spritz', ne: 'द जोशुआ टी स्प्रिट्ज' }, desc: null, price: 8.00, badges: [] },
        { num: '302', name: { en: 'Aperol Spritz', de: 'Aperol Spritz', ne: 'एपेरोल स्प्रिट्ज' }, desc: null, price: 8.00, badges: [] },
        { num: '303', name: { en: 'Lillet Spritz', de: 'Lillet Spritz', ne: 'लिलेट स्प्रिट्ज' }, desc: null, price: 8.00, badges: [] },
        { num: '304', name: { en: 'Limoncello Spritz', de: 'Limoncello Spritz', ne: 'लिमोनचेलो स्प्रिट्ज' }, desc: null, price: 8.50, badges: [] },
        ],
      },
      {
        slug: 'wine',
        label: { en: 'Wine & Prosecco', de: 'Wein & Prosecco', ne: 'वाइन र प्रोसेको' },
        items: [
        { num: '310', name: 'Riesling, Pfalz', desc: null, price: 7.90, badges: [] },
        { num: '311', name: 'Weingut Seckinger, Pfalz', desc: null, price: 7.90, badges: [] },
        { num: '312', name: 'Weingut Weber, Baden', desc: null, price: 7.90, badges: [] },
        { num: '313', name: 'Grüner Veltliner', desc: null, price: 25.90, badges: [] },
        { num: '314', name: 'Gavi, Baden Rivaner', desc: '0.7 l', price: 6.90, badges: [] },
        { num: '320', name: 'Weingut Weber, Baden', desc: '2023 Spätburgunder Rosé', price: 7.90, badges: [] },
        { num: '330', name: 'Azienda Agricola Dei Baroni', desc: null, price: 7.90, badges: [] },
        { num: '331', name: 'Stéphane Vigny', desc: '2022 Pied Spätling', price: 8.90, badges: [] },
        { num: '340', name: 'Prosecco Frizzante delle Venezie D.O.C.', desc: '0.7 l / 0.2 l', price: 6.90, badges: [] },
        { num: '350', name: 'Louis de Grenelle, Loire', desc: 'Crémant Grande Cuvée, 0.7 l', price: 35.50, badges: [] },
        { num: '300', name: { en: 'Wine Spritzer', de: 'Weinschorle', ne: 'वाइन स्प्रिट्जर' }, desc: { en: 'White / Rosé', de: 'Weiß / Rosé', ne: 'सेतो / रोजे' }, price: 4.90, badges: [] },
        ],
      }
    ]
  }
];
