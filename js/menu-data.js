/* ============================================
   THAKALI KITCHEN — Menu Data
   ============================================ */
/* Single source of truth for menu content, transcribed from the printed
   Speisekarte. German names and prices are exactly as printed — including the
   card's own quirks (numbers 52/250/252/314 appear twice, "Papkrika",
   "Veggi Mix"). Do not "fix" them here.

   `name` / `desc` / `label` are either a plain string (identical in every
   language — producer names, bottle sizes) or an { en, de, ne } map.
   js/main.js resolves both shapes through loc().

   Item fields
     num        as printed on the card
     price      single price, or the lowest of `variants`
     variants   [{ label, price }] where the card prints several prices
     allergens  the small letters behind the dish name; [] = none printed
     veg        true only where the card prints the green vegetarian dot
     spice      1 = leicht scharf, 2 = scharf. The photographed pages carry no
                spice dots, so this is read off the printed wording: 2 where the
                text says "scharf" of the dish or its sauce, 1 for "leicht
                scharf" / "pikant" / "Spicy …" / a named chilli or peperoni.
     img        images/<img>.jpg — only set where the dish in the photo is
                positively identified
     pop        guest-favourite rank, drives the bestseller card and #04 list */

(function () {

window.ALLERGEN_INFO = {
  /* kind: 'allergen' = the 14 declarable allergens; 'additive' = Zusatzstoff. */
  a: { kind: 'additive', en: 'Contains sweeteners', de: 'mit Süßungsmittel(n)', ne: 'मिठास (स्वीटनर) प्रयोग गरिएको' },
  b: { kind: 'additive', en: 'Contains colouring', de: 'mit Farbstoff', ne: 'रङ (कलरिङ) प्रयोग गरिएको' },
  c: { kind: 'additive', en: 'Contains preservative', de: 'mit Konservierungsstoff', ne: 'प्रिजर्भेटिभ प्रयोग गरिएको' },
  d: { kind: 'allergen', en: 'Contains gluten (cereals)', de: 'enthält glutenhaltiges Getreide', ne: 'ग्लुटेनयुक्त अन्न' },
  e: { kind: 'additive', en: 'Contains acidity regulator', de: 'mit Säuerungsmittel', ne: 'अम्लीकारक प्रयोग गरिएको' },
  f: { kind: 'allergen', en: 'Contains fish', de: 'enthält Fisch', ne: 'माछा' },
  g: { kind: 'allergen', en: 'Contains milk (lactose)', de: 'enthält Milch (laktosehaltig)', ne: 'दूध (ल्याक्टोज)' },
  h: { kind: 'allergen', en: 'Contains peanuts', de: 'enthält Erdnüsse', ne: 'बदाम' },
  i: { kind: 'allergen', en: 'Contains mustard', de: 'enthält Senf', ne: 'तोरी (मस्टर्ड)' },
  j: { kind: 'allergen', en: 'Contains tree nuts', de: 'enthält Schalenfrüchte / Nüsse', ne: 'नट (काजु, ओखर आदि)' },
  k: { kind: 'allergen', en: 'Contains crustaceans', de: 'enthält Krebstiere', ne: 'क्रस्टेसियन (झिँगेमाछा आदि)' },
  1: { kind: 'additive', en: 'Contains caffeine', de: 'koffeinhaltig', ne: 'क्याफिनयुक्त' },
  2: { kind: 'additive', en: 'Contains stabilisers', de: 'mit Stabilisatoren', ne: 'स्टेबिलाइजर प्रयोग गरिएको' },
};

/* Meat choices repeat across the Thakali main dishes. */
const CHICKEN = { en: 'with chicken', de: 'mit Hühnerfleisch', ne: 'कुखुराको मासुसँग' };
const PORK = { en: 'with pork', de: 'mit Schweinefleisch', ne: 'बंगुरको मासुसँग' };
const LAMB = { en: 'with lamb', de: 'mit Lammfleisch', ne: 'खसीको मासुसँग' };

window.MENU_DATA = [
  {
    group: 'thakali',
    groupLabel: { en: 'Thakali', de: 'Thakali', ne: 'थकाली' },
    categories: [
      {
        slug: 'thakali-starters',
        label: { en: 'Thakali Starters', de: 'Thakali Starter', ne: 'थकाली सुरुवाती परिकार' },
        items: [
        { num: '500', name: { en: 'Bhatmas Sadeko', de: 'Bhatmas Sadeko', ne: 'भटमास सादेको' }, desc: { en: 'Soybeans, fresh garlic, ginger, green chilli', de: 'Sojabohnen, frischer Knoblauch, Ingwer, grünes Chilli', ne: 'भटमास, ताजा लसुन, अदुवा, हरियो खुर्सानी' }, price: 5.90, allergens: ['a', 'b', 'd', 'g'], veg: true, spice: 1 },
        { num: '501', name: { en: 'Sherchan Sel Roti', de: 'Sherchan Sel Roti', ne: 'शेर्चन सेल रोटी' }, desc: { en: 'Sherchan style with alu dam — potatoes marinated the Nepali way', de: 'Sherchan Style mit Alu Dam (Kartoffeln mariniert nach nepalesischer Art)', ne: 'शेर्चन शैली, आलु दमसँग (नेपाली शैलीमा मरिनेट गरिएको आलु)' }, price: 5.90, allergens: ['a', 'b', 'd', 'g'], veg: true, img: 'dish-501-sel-roti' },
        { num: '502', name: { en: 'Chana Chatpat', de: 'Chana Chatpat', ne: 'चना चटपट' }, desc: { en: 'Potatoes, puffed rice, Wai Wai, onions, cucumber', de: 'Kartoffeln, Puffreis, Wai Wai, Zwiebeln, Gurke', ne: 'आलु, भुजा, वाइवाइ, प्याज, काँक्रो' }, price: 8.90, allergens: ['a', 'b', 'd', 'g'], veg: true, img: 'dish-502-chana-chatpat' },
        { num: '503', name: { en: 'Sukuti', de: 'Sukuti', ne: 'सुकुटी' }, desc: { en: 'Dry buffalo meat', de: 'Dry Büffel-Fleisch', ne: 'राँगाको सुकेको मासु' }, price: 13.90, allergens: ['a', 'b', 'd', 'g'], img: 'dish-503-sukuti' },
        { num: '504', name: { en: 'Bhutan', de: 'Bhutan', ne: 'भुटन' }, desc: { en: 'Lamb speciality', de: 'Lamm-Spezialität', ne: 'खसीको विशेष परिकार' }, price: 10.90, allergens: ['a', 'b', 'd', 'g'] },
        { num: '505', name: { en: 'Chicken Chilli', de: 'Chicken Chilli', ne: 'चिल्ली चिकेन' }, desc: { en: 'Chicken, bell pepper, onions', de: 'Hühnchen, Papkrika, Zwiebeln', ne: 'कुखुराको मासु, भेडे खुर्सानी, प्याज' }, price: 11.90, allergens: ['b', 'd', 'g'], spice: 2, img: 'dish-505-chicken-chilli' },
        { num: '506', name: { en: 'Panipuri', de: 'Panipuri', ne: 'पानीपुरी' }, desc: { en: '8 pieces', de: '8 Stück', ne: '८ पीस' }, price: 9.90, allergens: ['b', 'd', 'g'], img: 'dish-506-panipuri' },
        { num: '507', name: { en: 'Sungur Khaja Set', de: 'Sungur Khaja Set', ne: 'सुँगुर खाजा सेट' }, desc: null, price: 12.90, allergens: [] },
        ],
      },
      {
        slug: 'momo',
        label: { en: 'Mo:Mo', de: 'MO:MO', ne: 'म:म' },
        note: { en: 'Steamed dumplings (chicken or pork) with a spiced filling', de: 'Gedämpfte Teigtaschen (Hühnchen oder Schwein) mit würziger Füllung', ne: 'पिरो मसलादार भरणसहित बाफमा पकाएको म:म (कुखुरा वा बंगुर)' },
        items: [
        { num: '510', name: { en: 'Mo:Mo', de: 'MO:MO', ne: 'म:म' }, desc: { en: 'Steamed chicken or pork dumplings, Sherchan style, served with spicy tomato sauce', de: 'Gedämpfte Hühnchen- oder Schwein-Dumplings, Sherchan Style, serviert mit scharfer Tomaten-Soße', ne: 'कुखुरा वा बंगुरको म:म, शेर्चन शैली, पिरो गोलभेँडाको अचारसँग' }, price: 13.90, allergens: ['a', 'b', 'g'], spice: 2, img: 'dish-510-momo' },
        { num: '511', name: { en: 'Jhol Mo:Mo', de: 'Jhol MO:MO', ne: 'झोल म:म' }, desc: { en: 'Steamed chicken or pork dumplings, served in an aromatic, mildly spicy tomato broth (jhol)', de: 'Gedämpfte Hühnchen- oder Schwein-Dumplings, serviert in einer aromatischen, leicht scharfen Tomaten-Suppe (Jhol)', ne: 'कुखुरा वा बंगुरको म:म, बासनादार अलिकति पिरो गोलभेँडाको झोलमा' }, price: 13.90, allergens: ['a', 'b', 'g'], spice: 1, img: 'dish-511-jhol-momo' },
        { num: '512', name: { en: 'C. Mo:Mo', de: 'C. MO:MO', ne: 'सी. म:म' }, desc: { en: 'Steamed chicken or pork dumplings, Thakali style, with spicy tomato-sesame sauce', de: 'Gedämpfte Hühnchen- oder Schwein-Dumplings, Thakali Style, mit scharfer Tomaten-Sesam-Soße', ne: 'कुखुरा वा बंगुरको म:म, थकाली शैली, गोलभेँडा-तिलको पिरो सससँग' }, price: 14.90, allergens: ['a', 'b', 'g'], spice: 2 },
        ],
      },
      {
        slug: 'thakali-mains',
        label: { en: 'Main Dishes', de: 'Hauptspeisen', ne: 'मुख्य परिकार' },
        items: [
        { num: '530', name: { en: 'Sherchan Dhido Set', de: 'Sherchan Dhido Set', ne: 'शेर्चन ढिँडो सेट' }, desc: { en: 'Traditional buckwheat porridge, served with assorted spiced sides', de: 'Traditioneller Buchweizenbrei, serviert mit versch. würzigen Beilagen', ne: 'परम्परागत फापरको ढिँडो, विभिन्न मसलेदार परिकारसँग' }, price: 19.90, variants: [{ label: CHICKEN, price: 19.90 }, { label: PORK, price: 20.90 }, { label: LAMB, price: 22.90 }], allergens: ['a', 'b', 'g'] },
        { num: '531', name: { en: 'Thakali Set', de: 'Thakali Set', ne: 'थकाली सेट' }, desc: { en: 'Classic Thakali platter with rice, lentils, seasonal vegetables, pickles and curry', de: 'Klassisches Thakali Menü mit Reis, Linsen, saisonalem Gemüse, Pickles und Curry', ne: 'भात, दाल, मौसमी तरकारी, अचार र तरकारीसहितको क्लासिक थकाली सेट' }, price: 18.90, variants: [{ label: CHICKEN, price: 18.90 }, { label: PORK, price: 19.90 }, { label: LAMB, price: 21.90 }], allergens: ['a', 'b', 'g'], img: 'dish-531-thakali-set' },
        { num: '532', name: { en: 'Thukpa', de: 'Thukpa', ne: 'थुक्पा' }, desc: { en: 'Hearty Nepali noodle soup with vegetables and spices — warming and full-flavoured', de: 'Herzhafte nepalesische Nudelsuppe mit Gemüse und Gewürzen, wärmend und kräftig im Geschmack', ne: 'तरकारी र मसलासहितको पेटभरी नेपाली नूडल सुप — तातो र स्वादिलो' }, price: 14.90, variants: [{ label: { en: 'vegetable', de: 'Gemüse', ne: 'तरकारी' }, price: 14.90 }, { label: CHICKEN, price: 15.90 }, { label: PORK, price: 17.90 }], allergens: ['a', 'b', 'g'], img: 'dish-532-thukpa' },
        { num: '533', name: { en: 'Sukuti Chowmein', de: 'Sukuti Chowmein', ne: 'सुकुटी चाउमिन' }, desc: { en: 'Fried noodles with air-dried, spiced meat the Nepali way', de: 'Gebratene Nudeln mit luftgetrocknetem, würzigem Fleisch nach nepalesischer Art', ne: 'नेपाली शैलीमा सुकाएको मसलेदार मासुसँग भुटेको चाउमिन' }, price: 17.90, allergens: ['a', 'b', 'g'] },
        { num: '534', name: { en: 'Pork Chowmein', de: 'Schweinefleisch Chowmein', ne: 'बंगुरको चाउमिन' }, desc: { en: 'Fried noodles with tender pork, vegetables and fine spices', de: 'Gebratene Nudeln mit zartem Schweinefleisch, Gemüse und feinen Gewürzen', ne: 'नरम बंगुरको मासु, तरकारी र मसलासँग भुटेको चाउमिन' }, price: 16.90, allergens: ['a', 'b', 'g'] },
        { num: '535', name: { en: 'Chicken Chowmein', de: 'Hühnerfleisch Chowmein', ne: 'कुखुराको चाउमिन' }, desc: { en: 'Fried noodles with chicken, vegetables and fine spices', de: 'Gebratene Nudeln mit Hühnerfleisch, Gemüse und feinen Gewürzen', ne: 'कुखुराको मासु, तरकारी र मसलासँग भुटेको चाउमिन' }, price: 15.90, allergens: ['a', 'b', 'g'] },
        ],
      },
    ],
  },
  {
    group: 'sushi',
    groupLabel: { en: 'Cross Sushi', de: 'Cross Sushi', ne: 'क्रस सुसी' },
    categories: [
      {
        slug: 'soups',
        label: { en: 'Soups', de: 'Suppen', ne: 'सुप' },
        items: [
        { num: '1', name: { en: 'Fancy Miso Soup', de: 'Fancy Miso Suppe', ne: 'फ्यान्सी मिसो सुप' }, desc: { en: 'Traditional Japanese soup: tofu, seaweed, spring onions, miso paste', de: 'Traditionelle japanische Suppe: Tofu, Algen, Lauchzwiebeln, Miso-Paste', ne: 'परम्परागत जापानी सुप: टोफु, समुन्द्री झार, हरियो प्याज, मिसो पेस्ट' }, price: 5.90, allergens: ['b', 'd'], veg: true },
        { num: '2', name: { en: 'Japanese Chicken Soup', de: 'Japanische Hühnersuppe', ne: 'जापानी कुखुरा सुप' }, desc: { en: 'Broccoli, bell pepper, mushrooms, courgette, sugar snap peas, spinach leaves', de: 'Brokkoli, Paprika, Champignons, Zucchini, Zuckerschoten, Spinatblätter', ne: 'ब्रोकाउली, भेडे खुर्सानी, च्याउ, जुकिनी, मिठो सिमी, पालुङ्गो' }, price: 6.50, allergens: ['b', 'd'] },
        ],
      },
      {
        slug: 'appetizers',
        label: { en: 'Appetizers', de: 'Vorspeisen', ne: 'सुरुवाती परिकार' },
        items: [
        { num: '11', name: { en: 'Mini Poh Pia', de: 'Mini Poh Pia', ne: 'मिनी पो पिया' }, desc: { en: 'Mini spring rolls with house-made chilli sauce', de: 'Mini-Frühlingsrollen mit hausgemachter Chili-Soße', ne: 'मिनी स्प्रिङ रोल, घरैको खुर्सानीको सससँग' }, price: 5.90, allergens: ['a', 'b', 'c', 'd'], spice: 1, pop: 3 },
        { num: '12', name: { en: 'Japanese Gyosa', de: 'Japanische Gyosa', ne: 'जापानी ग्योजा' }, desc: { en: 'Dumplings with chicken and chilli sauce', de: 'Teigtaschen mit Hühnerfleisch und Chili-Soße', ne: 'कुखुराको डम्प्लिङ, खुर्सानीको सससँग' }, price: 5.90, allergens: ['a', 'b', 'c', 'd'], spice: 1 },
        { num: '13', name: { en: 'Tori Teriyaki', de: 'Tori Teriyaki', ne: 'तोरी तेरियाकी' }, desc: { en: 'Chicken skewer with teriyaki sauce', de: 'Hühnerfleisch-Spieß mit Teriyaki-Soße', ne: 'कुखुराको सेकुवा, तेरियाकी सससँग' }, price: 9.90, allergens: ['a', 'b'] },
        { num: '14', name: { en: 'Edamame', de: 'Edamame', ne: 'एदामामे' }, desc: { en: 'Young soybeans, sea salt', de: 'Junge Sojabohnen, Meersalz', ne: 'कलिलो भटमास, समुन्द्री नुन' }, price: 6.90, allergens: [], veg: true, pop: 6 },
        { num: '15', name: { en: 'Cross Prawn Tempura', de: 'Cross Garnelen Tempura', ne: 'क्रस झिँगेमाछा टेम्पुरा' }, desc: { en: '5 pieces — prawn tempura served with teriyaki sauce', de: '5 Stück — Garnelen-Tempura angerichtet mit Teriyaki Soße', ne: '५ पीस — झिँगेमाछाको टेम्पुरा, तेरियाकी सससँग' }, price: 9.90, allergens: ['a', 'b'] },
        ],
      },
      {
        slug: 'salads',
        label: { en: 'Salads', de: 'Salate', ne: 'सलाद' },
        items: [
        { num: '21', name: { en: 'Cross Salad Salmon', de: 'Cross Salat Lachs', ne: 'क्रस सलाद सामन' }, desc: { en: 'Salmon or tuna and diced avocado, mixed salad, pumpkin seeds, house-made Cross sauce', de: 'Lachs oder Thunfisch und Avocado Würfel, gemischter Salat, Kürbiskerne, hausgemachte Cross Soße', ne: 'सामन वा टुना र एभोकाडो, मिक्स सलाद, कद्दूको बीउ, घरैको क्रस सस' }, price: 11.90, variants: [{ label: { en: 'Salmon', de: 'Lachs', ne: 'सामन' }, price: 11.90 }, { label: { en: 'Tuna Salad', de: 'Tuna Salat', ne: 'टुना सलाद' }, price: 13.90 }], allergens: ['f'] },
        { num: '22', name: { en: 'Cross Avocado Salad', de: 'Cross Avocado Salat', ne: 'क्रस एभोकाडो सलाद' }, desc: { en: 'Avocado, mixed salad, pumpkin seeds, house-made Cross sauce, shiso cress and black and white sesame', de: 'Avocado, gemischter Salat, Kürbiskerne, hausgemachte Cross Soße, Shiso-Kresse und black and white Sesam', ne: 'एभोकाडो, मिक्स सलाद, कद्दूको बीउ, घरैको क्रस सस, शिसो र कालो-सेतो तिल' }, price: 10.90, allergens: ['a', 'b', 'd', 'g', 'h'], veg: true, img: 'dish-022-avocado-salat' },
        ],
      },
      {
        slug: 'nigiri',
        label: { en: 'Nigiri', de: 'Nigiri', ne: 'निगिरी' },
        note: { en: '2 pieces', de: '2 Stück', ne: '२ पीस' },
        items: [
        { num: '41', name: { en: 'Kanisuja', de: 'Kanisuja', ne: 'कानिसुजा' }, desc: { en: 'Avocado', de: 'Avocado', ne: 'एभोकाडो' }, price: 5.90, allergens: ['a'], veg: true },
        { num: '42', name: { en: 'Shake', de: 'Shake', ne: 'शाके' }, desc: { en: 'Salmon', de: 'Lachs', ne: 'सामन' }, price: 6.90, allergens: ['a', 'f'] },
        { num: '44', name: { en: 'Yellowfin Tuna', de: 'Yellowfin Tuna', ne: 'यलोफिन टुना' }, desc: null, price: 8.90, allergens: ['a', 'f'], img: 'dish-044-yellowfin-tuna-nigiri' },
        ],
      },
      {
        slug: 'maki',
        label: { en: 'Maki', de: 'Maki', ne: 'माकी' },
        note: { en: '8 pieces', de: '8 Stück', ne: '८ पीस' },
        items: [
        { num: '50', name: { en: 'Cucumber Maki', de: 'Gurke Maki', ne: 'काँक्रो माकी' }, desc: null, price: 5.90, allergens: [], veg: true },
        { num: '51', name: { en: 'Avocado Maki', de: 'Avocado Maki', ne: 'एभोकाडो माकी' }, desc: null, price: 6.60, allergens: [], veg: true, pop: 2 },
        { num: '52', name: { en: 'Salmon Maki', de: 'Lachs Maki', ne: 'सामन माकी' }, desc: null, price: 7.60, allergens: [], pop: 5, img: 'dish-052-lachs-maki' },
        { num: '52', name: { en: 'Tuna Maki', de: 'Tuna Maki', ne: 'टुना माकी' }, desc: null, price: 8.50, allergens: [], note: { en: 'The card prints number 52 twice; 53 does not appear.', de: 'Die Nummer 52 ist in der Karte zweimal gedruckt, 53 kommt nicht vor.', ne: 'कार्डमा नम्बर ५२ दुई ठाउँमा छापिएको छ; ५३ छैन।' } },
        { num: '54', name: { en: 'Salmon & Avocado Maki', de: 'Lachs & Avocado Maki', ne: 'सामन र एभोकाडो माकी' }, desc: null, price: 8.90, allergens: [], img: 'dish-054-lachs-avocado-maki' },
        { num: '55', name: { en: 'Tuna & Avocado Maki', de: 'Tuna & Avocado Maki', ne: 'टुना र एभोकाडो माकी' }, desc: null, price: 8.90, allergens: [], img: 'dish-055-tuna-avocado-maki' },
        ],
      },
      {
        slug: 'classic-roll',
        label: { en: 'Classic Roll', de: 'Classic Roll', ne: 'क्लासिक रोल' },
        note: { en: '8 pieces', de: '8 Stück', ne: '८ पीस' },
        items: [
        { num: '80', name: { en: 'California Roll', de: 'California Roll', ne: 'क्यालिफोर्निया रोल' }, desc: { en: 'Premium salmon, avocado, cucumber, black & white sesame', de: 'Premium Lachs, Avocado, Gurke, black & white Sesam', ne: 'प्रिमियम सामन, एभोकाडो, काँक्रो, कालो र सेतो तिल' }, price: 9.90, allergens: ['a', 'f'] },
        { num: '81', name: { en: 'Boston Roll', de: 'Boston Roll', ne: 'बोस्टन रोल' }, desc: { en: 'Yellowfin tuna, cucumber, avocado, sesame', de: 'Yellowfin Tuna, Gurke, Avocado, Sesam', ne: 'यलोफिन टुना, काँक्रो, एभोकाडो, तिल' }, price: 9.90, allergens: [] },
        { num: '82', name: { en: 'New Cross Roll', de: 'New Cross Roll', ne: 'न्यू क्रस रोल' }, desc: { en: 'Salmon, avocado, caramelised cashews, cress, honey-mustard sauce', de: 'Lachs, Avocado, karamellisierte Cashewkerne, Kresse, Honig-Senf-Soße', ne: 'सामन, एभोकाडो, क्यारामेल काजु, क्रेस, मह-तोरीको सस' }, price: 12.90, allergens: ['a', 'f', 'h'], pop: 4 },
        ],
      },
      {
        slug: 'veggie-roll',
        label: { en: 'Cross Veggie Roll', de: 'Cross Veggie Roll', ne: 'क्रस भेजी रोल' },
        note: { en: '8 pieces', de: '8 Stück', ne: '८ पीस' },
        items: [
        { num: '130', name: { en: 'Red Power Roll', de: 'Red Power Roll', ne: 'रेड पावर रोल' }, desc: { en: 'Marinated carrot, cucumber, avocado, beetroot topping, creamy avocado sauce, wasabi sesame, shiso cress', de: 'Marinierte Karotten, Gurke, Avocado, rote Bete Topping, Avocado Creamy Soße, Wasabi Sesam, Shisho Kresse', ne: 'मरिनेट गाजर, काँक्रो, एभोकाडो, चुकन्दर टपिङ, एभोकाडो क्रिमी सस, वासाबी तिल, शिसो' }, price: 10.90, allergens: ['a', 'g'], veg: true, img: 'dish-130-red-power-roll' },
        { num: '131', name: { en: 'Cross Rock Veggie Roll', de: 'Cross Rock Veggie Roll', ne: 'क्रस रक भेजी रोल' }, desc: { en: 'Cucumber, avocado, mango, tempura asparagus, avocado topping, ceviche with fresh coriander topping, black & white sesame', de: 'Gurke, Avocado, Mango, Tempura Spargel, Topping Avocado, Ceviche mit frischem Koriander Topping, black & white Sesam', ne: 'काँक्रो, एभोकाडो, आँप, टेम्पुरा कुरिलो, एभोकाडो टपिङ, ताजा धनियाँसहित सेभिचे, कालो र सेतो तिल' }, price: 10.90, allergens: ['a', 'g'], veg: true },
        ],
      },
      {
        slug: 'hot-roll',
        label: { en: 'Eimsbüttel Hot Roll', de: 'Eimsbüttel Hot Roll', ne: 'आइम्सब्युटेल हट रोल' },
        note: { en: '5 pieces', de: '5 Stück', ne: '५ पीस' },
        items: [
        { num: '140', name: { en: 'Cross Crunchy Roll', de: 'Cross Crunchy Roll', ne: 'क्रस क्रन्ची रोल' }, desc: { en: 'Cucumber, avocado, crispy tempura shrimps, house-made teriyaki and mayo sauce', de: 'Gurke, Avocado, Crispy Tempura Shrimps, hausgemachte Teriyaki- und Mayo-Soße', ne: 'काँक्रो, एभोकाडो, क्रिस्पी टेम्पुरा झिँगेमाछा, घरैको तेरियाकी र मेयो सस' }, price: 11.90, allergens: [], img: 'dish-140-cross-crunchy-roll' },
        { num: '141', name: { en: 'Crispy Chicken Roll', de: 'Crispy Chicken Roll', ne: 'क्रिस्पी चिकेन रोल' }, desc: { en: 'Crispy chicken, avocado, cucumber, spicy teriyaki sauce', de: 'Crispy Chicken, Avocado, Gurke, Spicy-Teriyaki-Soße', ne: 'क्रिस्पी चिकेन, एभोकाडो, काँक्रो, पिरो तेरियाकी सस' }, price: 10.90, allergens: ['a', 'g', 'h'], spice: 1 },
        { num: '142', name: { en: 'Cross Tempura Roll', de: 'Cross Tempura Roll', ne: 'क्रस टेम्पुरा रोल' }, desc: { en: 'Spicy tuna tartare, avocado, house-made teriyaki and mayo sauce, sesame', de: 'Spicy Tuna Tatar, Avocado, hausgemachte Teriyaki- und Mayo-Soße, Sesam', ne: 'पिरो टुना ट्यार्टार, एभोकाडो, घरैको तेरियाकी र मेयो सस, तिल' }, price: 11.90, allergens: [], spice: 1 },
        ],
      },
      {
        slug: 'sashimi',
        label: { en: 'Classic Sashimi', de: 'Classic Sashimi', ne: 'क्लासिक सासिमी' },
        note: { en: '10 slices', de: '10 Scheiben', ne: '१० स्लाइस' },
        items: [
        { num: '90', name: { en: 'Avocado Ceviche Sashimi', de: 'Avocado Ceviche Sashimi', ne: 'एभोकाडो सेभिचे सासिमी' }, desc: { en: 'Whole avocado with ceviche, olive oil, salt, with fresh coriander', de: 'ganze Avocado mit Ceviche, Olivenöl, Salz, mit frischem Koriander', ne: 'सिङ्गो एभोकाडो, सेभिचे, जैतुनको तेल, नुन र ताजा धनियाँ' }, price: 11.90, allergens: [], veg: true },
        { num: '91', name: { en: 'Salmon Sashimi', de: 'Lachs Sashimi', ne: 'सामन सासिमी' }, desc: null, price: 21.90, allergens: ['f'], img: 'dish-091-lachs-sashimi' },
        { num: '92', name: { en: 'Maguro Tuna Sashimi', de: 'Maguro Thunfisch Sashimi', ne: 'मागुरो टुना सासिमी' }, desc: null, price: 23.90, allergens: ['f'], img: 'dish-092-maguro-sashimi' },
        { num: '93', name: { en: 'Cross Special Salmon Tataki', de: 'Cross Spezial Salmon Tataki', ne: 'क्रस स्पेशल सामन तताकी' }, desc: { en: '9 slices', de: '9 Scheiben', ne: '९ स्लाइस' }, price: 17.90, allergens: [] },
        { num: '94', name: { en: 'Cross Special Yellowfin Tuna Sashimi', de: 'Cross Spezial Yellowfin Tuna Sashimi', ne: 'क्रस स्पेशल यलोफिन टुना सासिमी' }, desc: { en: '9 slices', de: '9 Scheiben', ne: '९ स्लाइस' }, price: 19.90, allergens: [] },
        ],
      },
      {
        slug: 'signature-roll',
        label: { en: 'Cross Signature Roll', de: 'Cross Signatur Roll', ne: 'क्रस सिग्नेचर रोल' },
        note: { en: '8 pieces', de: '8 Stück', ne: '८ पीस' },
        items: [
        { num: '110', name: { en: 'Sweet Dream Roll', de: 'Sweet Dream Roll', ne: 'स्वीट ड्रिम रोल' }, desc: { en: 'Tempura shrimps, avocado, cucumber, topping: spicy tuna tartare, spicy teriyaki, mayo, spring onion, kimchi sesame', de: 'Tempura-Shrimps, Avocado, Gurke, Topping: Spicy Tuna Tatar, Spicy Teriyaki, Mayo, Lauchzwiebel, Kimchi-Sesam', ne: 'टेम्पुरा झिँगेमाछा, एभोकाडो, काँक्रो, टपिङ: पिरो टुना ट्यार्टार, पिरो तेरियाकी, मेयो, हरियो प्याज, किम्ची तिल' }, price: 12.90, allergens: ['a', 'f'], spice: 1 },
        { num: '111', name: { en: 'Premium Smoke Salmon Roll', de: 'Premium Smoke Salmon Roll', ne: 'प्रिमियम स्मोक सामन रोल' }, desc: { en: 'Tempura shrimps, avocado, cucumber, torched salmon, teriyaki and creamy sauce, chives, shiso cress', de: 'Tempura Shrimps, Avocado, Gurke, flambierter Lachs, Teriyaki und Creamy-Soße, Schnittlauch, Shisho Kresse', ne: 'टेम्पुरा झिँगेमाछा, एभोकाडो, काँक्रो, फ्ल्याम्बे सामन, तेरियाकी र क्रिमी सस, चाइभ्स, शिसो' }, price: 12.90, allergens: ['a', 'f'], pop: 1, img: 'dish-111-premium-smoke-salmon-roll' },
        { num: '112', name: { en: 'Crunchy Eel Roll', de: 'Crunchy Aal Roll', ne: 'क्रन्ची ईल रोल' }, desc: { en: 'Tempura unagi, avocado, cucumber, salmon topping, house-made teriyaki sauce, sesame, shiso cress', de: 'Tempura Unagi, Avocado, Gurke, Lachs Topping, hausgemachte Teriyaki-Soße, Sesam, Shisho Kresse', ne: 'टेम्पुरा उनागी, एभोकाडो, काँक्रो, सामन टपिङ, घरैको तेरियाकी सस, तिल, शिसो' }, price: 12.90, allergens: ['a', 'b', 'd', 'f'] },
        { num: '113', name: { en: 'Hot Star Roll', de: 'Hot Star Roll', ne: 'हट स्टार रोल' }, desc: { en: 'Tempura, red peperoni, avocado, cucumber, tuna and tuna tartare, mayo sauce, torched spicy teriyaki sauce, spring onion, shiso cress, kimchi', de: 'Tempura, rote Peperoni, Avocado, Gurke, Tuna und Tuna Tatar, Mayo-Soße, flambierte Spicy-Teriyaki-Soße, Lauchzwiebel, Shiso Kresse, Kimchi', ne: 'टेम्पुरा, रातो खुर्सानी, एभोकाडो, काँक्रो, टुना र टुना ट्यार्टार, मेयो सस, फ्ल्याम्बे पिरो तेरियाकी सस, हरियो प्याज, शिसो, किम्ची' }, price: 13.90, allergens: ['a', 'f', 'g'], spice: 2 },
        { num: '114', name: { en: 'Everest Roll', de: 'Everest Roll', ne: 'एभरेस्ट रोल' }, desc: { en: 'Tempura shrimps, torched yellowfin tuna, avocado, cucumber, special spice, house-made teriyaki-mayo sauce, spicy sauce, shiso cress, kimchi sesame', de: 'Tempura Shrimps, flambierter Yellowfin Tuna, Avocado, Gurke, Spezialgewürz, hausgemachte Teriyaki-Mayo-Soße, Spicy-Soße, Shisho Kresse, Kimchi Sesam', ne: 'टेम्पुरा झिँगेमाछा, फ्ल्याम्बे यलोफिन टुना, एभोकाडो, काँक्रो, विशेष मसला, घरैको तेरियाकी-मेयो सस, पिरो सस, शिसो, किम्ची तिल' }, price: 13.90, allergens: ['a', 'f', 'h'], spice: 1 },
        { num: '115', name: { en: 'Rost Beef Roll', de: 'Rost Beef Roll', ne: 'रोस्ट बिफ रोल' }, desc: { en: 'Tempura shrimps, cucumber, avocado, torched beef, house-made spicy sauce, kimchi sesame, shiso cress', de: 'Tempura Shrimps, Gurke, Avocado, flambiertes Beef, hausgemachte Spicy-Soße, Kimchi Sesam, Shisho Kresse', ne: 'टेम्पुरा झिँगेमाछा, काँक्रो, एभोकाडो, फ्ल्याम्बे बिफ, घरैको पिरो सस, किम्ची तिल, शिसो' }, price: 13.90, allergens: ['a', 'd', 'j'], spice: 1 },
        { num: '116', name: { en: 'Salmon Tartare Roll', de: 'Salmon Tatar Roll', ne: 'सामन ट्यार्टार रोल' }, desc: { en: 'Tempura salmon, cucumber, avocado, salmon tartare with teriyaki sauce, creamy sauce', de: 'Tempura Lachs, Gurke, Avocado, Lachstatar mit Teriyaki-Soße, Creamy Soße', ne: 'टेम्पुरा सामन, काँक्रो, एभोकाडो, तेरियाकी सससँग सामन ट्यार्टार, क्रिमी सस' }, price: 13.90, allergens: [], pop: 7 },
        ],
      },
      {
        slug: 'platten',
        label: { en: 'Sushi Platters', de: 'Sushi Platten', ne: 'सुसी प्लेट' },
        items: [
        { num: '270', name: { en: 'Veggi Mix', de: 'Veggi Mix', ne: 'भेजी मिक्स' }, desc: { en: 'Miso soup · 1 avocado & 1 mango nigiri · Cross cucumber maki · Red Power Roll · ½ avocado ceviche sashimi', de: 'Miso Suppe · 1 Avocado & 1 Mango Nigiri · Cross Gurke Maki · Red Power Roll · ½ Avocado Ceviche Sashimi', ne: 'मिसो सुप · १ एभोकाडो र १ आँप निगिरी · क्रस काँक्रो माकी · रेड पावर रोल · आधा एभोकाडो सेभिचे सासिमी' }, price: 21.90, allergens: ['a', 'g'], veg: true },
        { num: '271', name: { en: 'Classic Mix', de: 'Classic Mix', ne: 'क्लासिक मिक्स' }, desc: { en: 'Miso soup · 1 salmon & 1 tuna nigiri · avocado maki · California 2 · Boston Roll · 3 salmon sashimi', de: 'Miso Suppe · 1 Lachs & 1 Tuna Nigiri · Avocado Maki · California 2 · Boston Roll · 3 Lachs Sashimi', ne: 'मिसो सुप · १ सामन र १ टुना निगिरी · एभोकाडो माकी · क्यालिफोर्निया २ · बोस्टन रोल · ३ सामन सासिमी' }, price: 27.90, allergens: ['a', 'f'] },
        { num: '273', name: { en: 'Bento Tsui', de: 'Bento Tsui', ne: 'बेन्तो त्सुई' }, desc: { en: '2 miso soups · 2 prawn tempura · 8 Everest special roll · Cross Crunchy Roll · 8 salmon & 8 tuna maki · 3 slices salmon tataki · 3 slices tuna tataki sashimi · 4 salmon & tuna nigiri', de: '2 Miso Suppen · 2 Garnele Tempura · 8 Everest Spezial Roll · Cross Crunchy Roll · 8 Lachs & 8 Tuna Maki · 3 Scheiben Lachs Tataki · 3 Scheiben Tuna Tataki Sashimi · 4 Lachs & Tuna Nigiri', ne: '२ मिसो सुप · २ झिँगेमाछा टेम्पुरा · ८ एभरेस्ट स्पेशल रोल · क्रस क्रन्ची रोल · ८ सामन र ८ टुना माकी · ३ स्लाइस सामन तताकी · ३ स्लाइस टुना तताकी सासिमी · ४ सामन र टुना निगिरी' }, price: 59.90, allergens: ['a', 'f'] },
        ],
      },
    ],
  },
  {
    group: 'asia',
    groupLabel: { en: 'Asian', de: 'Asiatisch', ne: 'एसियाली' },
    categories: [
      {
        slug: 'chicken',
        label: { en: 'Chicken', de: 'Hühnerfleisch', ne: 'कुखुराको मासु' },
        items: [
        { num: '161', name: { en: 'Crispy Chicken', de: 'Knuspriges Hühnerfleisch', ne: 'क्रिस्पी कुखुराको मासु' }, desc: { en: 'Battered chicken, bell pepper, broccoli, mushrooms, sugar snap peas, bamboo, red Thai peperoni, courgette, spinach leaves, red onions', de: 'gebackenes Hühnerfleisch, Paprika, Brokkoli, Champignons, Zuckerschoten, Bambus, rote thai Peperoni, Zucchini, Spinatblätter, rote Zwiebeln', ne: 'तारेको कुखुराको मासु, भेडे खुर्सानी, ब्रोकाउली, च्याउ, मिठो सिमी, बाँसको टुसा, रातो थाई खुर्सानी, जुकिनी, पालुङ्गो, रातो प्याज' }, price: 18.90, variants: [{ label: { en: 'Chicken', de: 'Hühnerfleisch', ne: 'कुखुरा' }, price: 18.90 }, { label: { en: 'Duck', de: 'Ente', ne: 'हाँस' }, price: 19.90 }], allergens: ['b', 'd'], spice: 1 },
        { num: '162', name: { en: 'Chicken Cashew', de: 'Huhn Cashew', ne: 'चिकेन काजु' }, desc: { en: 'Fried chicken, cashews, sugar snap peas, broccoli, bell pepper, Thai peperoni, cauliflower, courgette, bamboo, red onions, mushrooms', de: 'gebratenes Hühnerfleisch, Cashewkerne, Zuckerschoten, Brokkoli, Paprika, Thai Peperoni, Blumenkohl, Zucchini, Bambus, rote Zwiebeln, Champignons', ne: 'भुटेको कुखुराको मासु, काजु, मिठो सिमी, ब्रोकाउली, भेडे खुर्सानी, थाई खुर्सानी, काउली, जुकिनी, बाँसको टुसा, रातो प्याज, च्याउ' }, price: 17.90, allergens: ['b', 'd', 'g', 'h'], spice: 1 },
        { num: '163', name: { en: 'Japanese Teriyaki Chicken', de: 'Japanisches Teriyaki Hühnchen', ne: 'जापानी तेरियाकी चिकेन' }, desc: { en: 'Chicken, courgette, spinach leaves, red Thai peperoni, cauliflower, sugar snap peas, broccoli, cashews, bell pepper, mushrooms', de: 'Hühnerfleisch, Zucchini, Spinatblätter, rote Thai Peperoni, Blumenkohl, Zuckerschoten, Brokkoli, Cashewkerne, Paprika, Champignons', ne: 'कुखुराको मासु, जुकिनी, पालुङ्गो, रातो थाई खुर्सानी, काउली, मिठो सिमी, ब्रोकाउली, काजु, भेडे खुर्सानी, च्याउ' }, price: 17.90, allergens: ['a', 'b', 'd'], spice: 1 },
        { num: '164', name: { en: 'Korma Chicken', de: 'Korma Chicken', ne: 'कोर्मा चिकेन' }, desc: { en: 'Chicken, fresh vegetables, cashews, korma cream sauce', de: 'Hühnerfleisch, frisches Gemüse, Cashewkerne, Korma-Sahne-Soße', ne: 'कुखुराको मासु, ताजा तरकारी, काजु, कोर्मा क्रिम सस' }, price: 17.90, allergens: [] },
        ],
      },
      {
        slug: 'beef',
        label: { en: 'Beef', de: 'Rindfleisch', ne: 'बिफ' },
        items: [
        { num: '170', name: { en: 'Fried Beef', de: 'Gebratenes Rindfleisch', ne: 'भुटेको बिफ' }, desc: { en: 'piquant — beef, red peperoni, cauliflower, broccoli, courgette, bamboo, spinach leaves, bell pepper, cashews, red onions, sugar snap peas', de: 'pikant — Rindfleisch, rote Peperoni, Blumenkohl, Brokkoli, Zucchini, Bambus, Spinatblätter, Paprika, Cashewkerne, rote Zwiebeln, Zuckerschoten', ne: 'पिरो — बिफ, रातो खुर्सानी, काउली, ब्रोकाउली, जुकिनी, बाँसको टुसा, पालुङ्गो, भेडे खुर्सानी, काजु, रातो प्याज, मिठो सिमी' }, price: 17.90, allergens: ['a', 'b', 'd'], spice: 1 },
        { num: '171', name: { en: 'Nua phad grau prau', de: 'Nua phad grau prau', ne: 'नुआ फाद ग्राउ प्राउ' }, desc: { en: 'Thai style — fried beef with bell pepper, red onions, red peperoni, Thai basil, oyster sauce', de: 'thai art — gebratenes Rindfleisch mit Paprika, rote Zwiebeln, rote Peperoni, Thai Basilikum, Austern-Soße', ne: 'थाई शैली — भुटेको बिफ, भेडे खुर्सानी, रातो प्याज, रातो खुर्सानी, थाई तुलसी, ओइस्टर सस' }, price: 17.90, allergens: ['a', 'b', 'd'], spice: 1 },
        ],
      },
      {
        slug: 'duck',
        label: { en: 'Cross Thai Duck', de: 'Cross Thai Ente', ne: 'क्रस थाई हाँस' },
        items: [
        { num: '180', name: { en: 'Cross Duck Teriyaki', de: 'Cross Ente Teriyaki', ne: 'क्रस हाँस तेरियाकी' }, desc: { en: 'Cross duck, sugar snap peas, spinach leaves, mushrooms, cauliflower, broccoli, bamboo, red peperoni, courgette, onions', de: 'Cross Ente, Zuckerschoten, Spinatblätter, Champignons, Blumenkohl, Brokkoli, Bambus, rote Peperoni, Zucchini, Zwiebeln', ne: 'क्रस हाँस, मिठो सिमी, पालुङ्गो, च्याउ, काउली, ब्रोकाउली, बाँसको टुसा, रातो खुर्सानी, जुकिनी, प्याज' }, price: 20.90, allergens: ['a', 'b', 'd'], spice: 1 },
        ],
      },
      {
        slug: 'poke-bowls',
        label: { en: 'Poke Bowl', de: 'Poke Bowl', ne: 'पोके बाउल' },
        note: { en: 'Base (no. 30): edamame, cucumber, avocado, beetroot, red bell pepper, blueberries, sweetcorn', de: 'Grundlage (Nr. 30): Edamame, Gurke, Avocado, Rote Bete, Rote Paprika, Blaubeeren, Mais', ne: 'आधार (नं. ३०): एदामामे, काँक्रो, एभोकाडो, चुकन्दर, रातो भेडे खुर्सानी, ब्लुबेरी, मकै' },
        items: [
        { num: '30 A', name: { en: 'Salmon Bowl', de: 'Lachs Bowl', ne: 'सामन बाउल' }, desc: { en: 'Cashews, creamy sauce', de: 'Cashewkerne, Cremige Soße', ne: 'काजु, क्रिमी सस' }, price: 17.90, allergens: [] },
        { num: '30 B', name: { en: 'Tuna Bowl', de: 'Tuna Bowl', ne: 'टुना बाउल' }, desc: { en: 'Walnuts, spicy mayo sauce', de: 'Walnüsse, Spicy Mayo-Soße', ne: 'ओखर, पिरो मेयो सस' }, price: 19.90, allergens: [], spice: 1 },
        ],
      },
      {
        slug: 'fish',
        label: { en: 'Cross Fish', de: 'Cross Fisch', ne: 'क्रस माछा' },
        items: [
        { num: '190', name: { en: 'Tuna Steak', de: 'Tuna Steak', ne: 'टुना स्टेक' }, desc: { en: 'Medium-grilled tuna steak, sugar snap peas, bell pepper, broccoli, spinach leaves, mushrooms, cauliflower, red peperoni, courgette', de: 'Medium gegrilltes Thunfisch Steak, Zuckerschoten, Paprika, Brokkoli, Spinatblätter, Champignons, Blumenkohl, rote Peperoni, Zucchini', ne: 'मिडियम ग्रिल टुना स्टेक, मिठो सिमी, भेडे खुर्सानी, ब्रोकाउली, पालुङ्गो, च्याउ, काउली, रातो खुर्सानी, जुकिनी' }, price: 21.50, allergens: ['a', 'b', 'd', 'f'], spice: 1 },
        { num: '191', name: { en: 'Barbecue Salmon', de: 'Barbecue Lachs', ne: 'बार्बेक्यु सामन' }, desc: { en: 'Grilled salmon fillet, fresh spinach leaves, sugar snap peas, lemon cream sauce', de: 'Gegrilltes Lachsfilet, frische Spinatblätter, Zuckerschoten, Zitronen-Sahnesoße', ne: 'ग्रिल सामन फिलेट, ताजा पालुङ्गो, मिठो सिमी, कागती-क्रिम सस' }, price: 19.50, allergens: ['a', 'b', 'd', 'g', 'f'] },
        ],
      },
      {
        slug: 'rice-noodles',
        label: { en: 'Cross Rice & Noodles', de: 'Cross Reis & Nudeln', ne: 'क्रस भात र नुडल' },
        note: { en: '200. Fried noodles or fried rice — fresh seasonal vegetables, egg and your choice of:', de: '200. Gebratene Nudeln oder gebratener Reis — frisches Saison Gemüse, Ei und nach Wahl:', ne: '२००. भुटेको चाउमिन वा भुटेको भात — ताजा मौसमी तरकारी, अण्डा र तपाईंको रोजाइ:' },
        items: [
        { num: '200 A', name: { en: 'Vegetarian', de: 'Vegetarisch', ne: 'शाकाहारी' }, desc: null, price: 13.90, allergens: ['a', 'b', 'd'], veg: true },
        { num: '200 B', name: { en: 'Chicken or beef', de: 'Hühnerfleisch oder Rindfleisch', ne: 'कुखुरा वा बिफ' }, desc: null, price: 17.90, allergens: ['a', 'b', 'd'] },
        { num: '200 C', name: { en: 'Crispy chicken or crispy duck', de: 'Knuspriges Hähnchen oder Knusprige Ente', ne: 'क्रिस्पी कुखुरा वा क्रिस्पी हाँस' }, desc: null, price: 18.90, allergens: ['a', 'b', 'd'] },
        ],
      },
      {
        slug: 'vegetarian',
        label: { en: 'Vegetarian', de: 'Vegetarisch', ne: 'शाकाहारी' },
        items: [
        { num: '210', name: { en: 'Fried Tofu', de: 'Tofu Gebraten', ne: 'भुटेको टोफु' }, desc: { en: 'Fried tofu, broccoli, mushrooms, sugar snap peas, spinach leaves, bell pepper, cauliflower, red onions, bamboo, cashews, piquant sauce', de: 'Gebratener Tofu, Brokkoli, Champignons, Zuckerschoten, Spinatblätter, Paprika, Blumenkohl, rote Zwiebeln, Bambus, Cashewkerne, pikante Soße', ne: 'भुटेको टोफु, ब्रोकाउली, च्याउ, मिठो सिमी, पालुङ्गो, भेडे खुर्सानी, काउली, रातो प्याज, बाँसको टुसा, काजु, पिरो सस' }, price: 14.90, allergens: ['a', 'b', 'd', 'g'], veg: true, spice: 1 },
        ],
      },
      {
        slug: 'kids',
        label: { en: 'For Children', de: 'Für Kinder', ne: 'बालबालिकाका लागि' },
        items: [
        { num: '222', name: { en: 'Fried noodles or rice with chicken', de: 'Gebratene Nudeln oder Reis mit Hühnerfleisch', ne: 'कुखुराको मासुसँग भुटेको चाउमिन वा भात' }, desc: { en: 'With fresh vegetables and egg', de: 'Mit frischem Gemüse und Ei', ne: 'ताजा तरकारी र अण्डासहित' }, price: 9.90, allergens: ['a', 'b', 'g'] },
        ],
      },
      {
        slug: 'extras',
        label: { en: 'Extras & Sides', de: 'Extras & Beilagen', ne: 'थप र साइड' },
        items: [
        { num: '230', name: { en: 'Jasmine Rice', de: 'Jasminreis', ne: 'जास्मिन भात' }, desc: null, price: 2.50, allergens: [] },
        { num: '231', name: { en: 'Sushi Rice', de: 'Sushi-Reis', ne: 'सुसी भात' }, desc: null, price: 3.50, allergens: [] },
        { num: '232', name: { en: 'House-made Sauces', de: 'Hausgemachte Soßen', ne: 'घरैका ससहरू' }, desc: { en: 'Teriyaki sauce, tobiko mayo, soy sauce, spicy teriyaki sauce, creamy teriyaki sauce', de: 'Teriyaki-Soße, Tobiko Mayo, Soya-Soße, Spicy Teriyaki-Soße, Cremige Teriyaki Soße', ne: 'तेरियाकी सस, तोबिको मेयो, सोया सस, पिरो तेरियाकी सस, क्रिमी तेरियाकी सस' }, price: 2.50, allergens: [] },
        ],
      },
      {
        slug: 'desserts',
        label: { en: 'Desserts', de: 'Nachtisch', ne: 'मिठाई' },
        items: [
        { num: '220', name: { en: 'Crispy Banana', de: 'Knusprige Banane', ne: 'क्रिस्पी केरा' }, desc: { en: 'With strawberry sauce or honey', de: 'Mit Erdbeer-Soße oder Honig', ne: 'स्ट्रबेरी सस वा महसँग' }, price: 6.90, allergens: ['a', 'b', 'g'] },
        { num: '221', name: { en: 'Jaki Ice Cream', de: 'Jaki Eis', ne: 'जाकी आइसक्रिम' }, desc: { en: 'Deep-fried vanilla ice cream with strawberries or chocolate sauce', de: 'Frittiertes Vanilleeis mit Erdbeeren oder Schoko-Soße', ne: 'तारेको भ्यानिला आइसक्रिम, स्ट्रबेरी वा चकलेट सससँग' }, price: 6.90, allergens: ['a', 'b', 'g'] },
        ],
      },
    ],
  },
  {
    group: 'drinks',
    groupLabel: { en: 'Drinks', de: 'Getränke', ne: 'पेय पदार्थ' },
    categories: [
      {
        slug: 'tea',
        label: { en: 'Exclusive Teas', de: 'Exklusive Teesorten', ne: 'विशेष चियाहरू' },
        items: [
        { num: '240', name: { en: 'Asian Ginger Tea', de: 'Asiatischer Ingwertee', ne: 'एसियाली अदुवाको चिया' }, desc: null, price: 4.90, allergens: [] },
        { num: '241', name: { en: 'Fresh Mint Tea', de: 'Frische Minze Tee', ne: 'ताजा पुदिनाको चिया' }, desc: { en: 'with ginger and honey', de: 'mit Ingwer und Honig', ne: 'अदुवा र महसँग' }, price: 4.90, allergens: [] },
        { num: '242', name: { en: 'Green Tea „White FU“', de: 'Grüner Tee „White FU“', ne: 'हरियो चिया „White FU“' }, desc: { en: 'A blend of green, white and oolong teas, refined with exotic ingredients', de: 'Mischung aus grünen, weißen und Oolong-Tees mit exotischen Zutaten und mit edlen Zutaten verfeinert', ne: 'हरियो, सेतो र उलोङ चियाको मिश्रण, विशेष सामग्रीसँग परिष्कृत' }, price: 5.90, allergens: [] },
        { num: '243', name: { en: 'China Jasmine Tea „Tai Mu lo g Zhu“', de: 'China Jashmintee „Tai Mu lo g Zhu“', ne: 'चिनियाँ जास्मिन चिया „Tai Mu lo g Zhu“' }, desc: { en: 'Green tea leaves layered with jasmine blossoms and then hand-rolled', de: 'Grüne Teeblätter mit Jashminblüten versetzt und anschließend mit der Hand gerollt', ne: 'जास्मिनको फूलसँग मिलाएर हातले बेरिएका हरियो चियाका पात' }, price: 5.90, allergens: [] },
        ],
      },
      {
        slug: 'coffee',
        label: { en: 'Coffee', de: 'Kaffee', ne: 'कफी' },
        items: [
        { num: '250', name: { en: 'Espresso', de: 'Espresso', ne: 'एस्प्रेसो' }, desc: null, price: 2.90, allergens: [] },
        { num: '252', name: { en: 'Cafe Creme', de: 'Cafe Creme', ne: 'काफे क्रिम' }, desc: null, price: 3.90, allergens: [] },
        ],
      },
      {
        slug: 'soft-drinks',
        label: { en: 'Soft Drinks', de: 'Soft Drinks', ne: 'सफ्ट ड्रिंक' },
        note: { en: 'Numbers 250 and 252 appear twice on this card — once under coffee, once here. That is how it is printed.', de: 'Die Nummern 250 und 252 kommen in dieser Karte doppelt vor (einmal bei Kaffee, einmal hier) — so ist es gedruckt.', ne: 'यो कार्डमा नम्बर २५० र २५२ दुई ठाउँमा छन् — एक कफीमा, एक यहाँ। छापिएको त्यही हो।' },
        items: [
        { num: '259', name: { en: 'Yuzu Lemonade', de: 'Yuzu Limonade', ne: 'युजु लेमोनेड' }, desc: 'Yuniq Yuzu · 0,33 L', price: 3.90, allergens: [] },
        { num: '250', name: 'ST.Michaelis Brunnen', desc: { en: '0,25 L · still / sparkling', de: '0,25 L · Naturell / mit Kohlensäure', ne: '०.२५ L · सादा / स्पार्कलिङ' }, price: 3.20, allergens: [] },
        { num: '251', name: 'ST.Michaelis Brunnen', desc: { en: '0,75 L · still / sparkling', de: '0,75 L · Naturell / mit Kohlensäure', ne: '०.७५ L · सादा / स्पार्कलिङ' }, price: 6.90, allergens: [] },
        { num: '252', name: 'Coca Cola, Cola Zero', desc: null, price: 3.50, variants: [{ label: '0,3 L', price: 3.50 }, { label: '0,4 L', price: 4.90 }], allergens: [] },
        { num: '253', name: 'Bitter Lemon, Ginger Ale', desc: '0,2 L', price: 3.30, allergens: [] },
        ],
      },
      {
        slug: 'lemonade',
        label: { en: 'House-made Lemonades', de: 'Hausgemachte Limonaden', ne: 'घरैका लेमोनेड' },
        items: [
        { num: '260', name: 'Passion Fruty', desc: { en: '0,3 L · Passion fruit, organic kiwi, organic orange, pineapple, organic lime, mint with sparkling water, lime juice, sugar', de: '0,3 L · Maracuja, Bio Kiwi, Bio Orange, Ananas, Bio Limette, Minze mit Sprudel Wasser, Limettensaft, Zucker', ne: '०.३ L · प्यासन फ्रुट, अर्गानिक किवी, अर्गानिक सुन्तला, भुइँकटहर, अर्गानिक कागती, पुदिना, स्पार्कलिङ पानी, कागतीको रस, चिनी' }, price: 5.90, allergens: [] },
        { num: '261', name: 'Ginger Fruty', desc: { en: '0,3 L · Ginger, organic lemon, organic grapefruit, organic orange, mint with sparkling water, lime juice, sugar', de: '0,3 L · Ingwer, Bio Zitrone, Bio Grapefruit, Bio Orange, Minze mit Sprudel Wasser, Limettensaft, zucker', ne: '०.३ L · अदुवा, अर्गानिक निबुवा, अर्गानिक ग्रेपफ्रुट, अर्गानिक सुन्तला, पुदिना, स्पार्कलिङ पानी, कागतीको रस, चिनी' }, price: 5.90, allergens: [] },
        { num: '263', name: { en: 'Mango Lassi', de: 'Mango Lassi', ne: 'आँप लस्सी' }, desc: { en: '0,3 L · Mango pulp, milk, yoghurt, mango juice', de: '0,3 L · Mango Pulp, Milch, Joguhrt, Mango Saft', ne: '०.३ L · आँपको पल्प, दूध, दही, आँपको रस' }, price: 4.90, allergens: [] },
        { num: '265', name: { en: 'Lemon Sarbat', de: 'Lemon Sarbat', ne: 'निबुवा सर्बत' }, desc: { en: '0,3 L · Lime juice, sugar syrup, mint and sparkling water', de: '0,3 L · Limettensaft, Zucker Sirup, Minze und Sprudel Wasser', ne: '०.३ L · कागतीको रस, चिनीको सिरप, पुदिना र स्पार्कलिङ पानी' }, price: 4.90, allergens: [] },
        ],
      },
      {
        slug: 'beer',
        label: { en: 'Draught Beer', de: 'Bier vom Fass', ne: 'ड्राफ्ट बियर' },
        items: [
        { num: '270', name: 'König Pilsener', desc: '0,3 L', price: 3.30, allergens: [] },
        { num: '271', name: 'König Pilsener', desc: '0,5 L', price: 4.90, allergens: [] },
        { num: '272', name: 'Benediktiner', desc: { en: 'Wheat beer · 0,5 L', de: 'Weißbier · 0,5 L', ne: 'गहुँको बियर · ०.५ L' }, price: 5.50, allergens: [] },
        { num: '273', name: 'Benediktiner', desc: { en: 'Wheat beer, alcohol-free · 0,5 L', de: 'Weißbier alkoholfrei · 0,5 L', ne: 'गहुँको बियर, रक्सीरहित · ०.५ L' }, price: 5.50, allergens: [] },
        { num: '274', name: 'Kirin', desc: { en: 'Japanese beer · 0,3 L', de: 'japanisches Bier · 0,3 L', ne: 'जापानी बियर · ०.३ L' }, price: 3.90, allergens: [] },
        { num: '275', name: 'Asahi', desc: { en: 'Japanese beer · 0,3 L', de: 'japanisches Bier · 0,3 L', ne: 'जापानी बियर · ०.३ L' }, price: 3.90, allergens: [] },
        ],
      },
      {
        slug: 'spirits',
        label: { en: 'Spirits', de: 'Spirituosen', ne: 'रक्सी' },
        items: [
        { num: '290', name: { en: 'Bamboo Schnapps', de: 'Bambusschnaps', ne: 'बाँसको रक्सी' }, desc: '2 cl', price: 3.50, allergens: [] },
        { num: '291', name: 'Tequila', desc: '2 cl', price: 3.50, allergens: [] },
        { num: '292', name: 'Jägermeister', desc: '2 cl', price: 3.00, allergens: [] },
        { num: '293', name: 'Sambuca', desc: '2 cl', price: 2.50, allergens: [] },
        { num: '294', name: 'Absolut Vodka', desc: '4 cl', price: 6.90, allergens: [] },
        ],
      },
      {
        slug: 'whiskey',
        label: { en: 'Whiskey', de: 'Whiskey', ne: 'व्हिस्की' },
        items: [
        { num: '295', name: 'Johnnie Walker', desc: 'Black Label', price: 3.50, variants: [{ label: '2 cl', price: 3.50 }, { label: '4 cl', price: 7.00 }], allergens: [] },
        { num: '296', name: 'Johnnie Walker', desc: 'Gold Label', price: 4.00, variants: [{ label: '2 cl', price: 4.00 }, { label: '4 cl', price: 8.00 }], allergens: [] },
        { num: '297', name: 'Johnnie Walker', desc: 'Green Label', price: 5.00, variants: [{ label: '2 cl', price: 5.00 }, { label: '4 cl', price: 10.00 }], allergens: [] },
        { num: '298', name: 'Jack Daniels', desc: null, price: 3.50, variants: [{ label: '2 cl', price: 3.50 }, { label: '4 cl', price: 7.00 }], allergens: [] },
        { num: '299', name: 'Chivas Regal 12Y.', desc: null, price: 3.50, variants: [{ label: '2 cl', price: 3.50 }, { label: '4 cl', price: 7.00 }], allergens: [] },
        ],
      },
      {
        slug: 'spritz',
        label: { en: 'Spritz', de: 'Spritz', ne: 'स्प्रिट्ज' },
        items: [
        { num: '301', name: 'Aperol Spritz', desc: { en: 'Aperol, sparkling wine, soda', de: 'Aperol, Sekt, Soda', ne: 'एपेरोल, स्पार्कलिङ वाइन, सोडा' }, price: 8.00, allergens: [] },
        { num: '302', name: 'Lillet Spritz', desc: { en: 'Lillet, sparkling wine, soda', de: 'Lillet, Sekt, Soda', ne: 'लिलेट, स्पार्कलिङ वाइन, सोडा' }, price: 8.00, allergens: [] },
        { num: '303', name: 'Limoncello - Spritz', desc: { en: 'Limoncello, sparkling wine, soda', de: 'Limoncello, Sekt, Soda', ne: 'लिमोनचेलो, स्पार्कलिङ वाइन, सोडा' }, price: 8.00, allergens: [] },
        { num: '304', name: 'Hendricks Gin Cucumber', desc: 'Schweppes Indian Tonic', price: 8.00, allergens: [] },
        ],
      },
      {
        slug: 'prosecco',
        label: { en: 'Prosecco', de: 'Prosecco', ne: 'प्रोसेको' },
        items: [
        { num: '340', name: '„Frivolo“', desc: 'Prosecco Frizzante delle Venezie D.O.C', price: 6.90, variants: [{ label: '0,75 L', price: 26.90 }, { label: '0,1 L', price: 6.90 }], allergens: [] },
        ],
      },
      {
        slug: 'cocktails',
        label: { en: 'Cocktails', de: 'Cocktails', ne: 'ककटेल' },
        items: [
        { num: '280', name: 'Mojito', desc: { en: 'Havana Club, soda water, mint, brown sugar, organic limes, crushed ice', de: 'Havana Club, Sodawasser, Minze, Brauner Zucker, Bio Limetten, Crushed Ice', ne: 'हवाना क्लब, सोडा पानी, पुदिना, खुदो, अर्गानिक कागती, क्रश्ड आइस' }, price: 9.50, allergens: [] },
        { num: '281', name: 'Caipirinha', desc: { en: 'Cachaça (Pitú), limes, brown sugar, crushed ice', de: 'Cachaca (Pitú), Limetten, brauner Zucker, Crushed Ice', ne: 'काचासा (पितु), कागती, खुदो, क्रश्ड आइस' }, price: 9.50, allergens: [] },
        { num: '282', name: 'Gin Basil Smash', desc: { en: 'Gin, basil, lemon, sugar', de: 'Gin, Basilikum, Zitrone, Zucker', ne: 'जिन, तुलसी, निबुवा, चिनी' }, price: 10.00, allergens: [] },
        { num: '283', name: 'Espresso Martini', desc: { en: 'Absolut Vodka, espresso, Kahlua', de: 'Absolut Vodka, Espresso, Kahlua', ne: 'एब्सोल्युट भोड्का, एस्प्रेसो, काहलुआ' }, price: 10.00, allergens: [] },
        { num: '284', name: 'Whiskey Sour', desc: { en: 'Johnnie Walker, lemon, sugar, foam', de: 'Johnnie Walker, Zitrone, Zucker, Schaum', ne: 'जोनी वाकर, निबुवा, चिनी, फोम' }, price: 10.00, allergens: [] },
        ],
      },
      {
        slug: 'white-wine',
        label: { en: 'White Wine', de: 'Weißwein', ne: 'सेतो वाइन' },
        items: [
        { num: '311', name: { en: 'Riesling vom Löss', de: 'Riesling vom Löss', ne: 'रिस्लिङ फोम लोस' }, desc: { en: '2023 – Weingut Seckinger, Pfalz, Germany · Clear and dry with fresh acidity, yellow apple, citrus notes and a mineral character', de: '2023 – Weingut Seckinger Pfalz, Deutschland · Klar, trocken mit frischer Säure, gelber Apfel, Zitrusnoten und mineralischer Charakter', ne: '२०२३ – वाइनगुट सेकिङर, फाल्ज, जर्मनी · सफा, ड्राई, ताजा अम्लता, पहेँलो स्याउ, सिट्रस र खनिज स्वाद' }, price: 7.50, variants: [{ label: '0,75 L', price: 26.00 }, { label: '0,2 L', price: 7.50 }], allergens: [] },
        { num: '312', name: 'Pinot Grigio Delle Venezie DOC', desc: { en: '2023 – Veneto, Italy · Crisp and fresh with citrus, pear and green apple', de: '2023 – Venezien, Italien · Spritzig und frisch mit Zitrus, Birne und grünem Apfel', ne: '२०२३ – भेनेतो, इटाली · ताजा र चम्किलो, सिट्रस, नास्पाती र हरियो स्याउ' }, price: 7.50, variants: [{ label: '0,75 L', price: 26.00 }, { label: '0,2 L', price: 7.50 }], allergens: [] },
        { num: '313', name: { en: 'Pinot Gris „Traube - Liebe - Hoffnung“', de: 'Grauer Burgunder „Traube - Liebe - Hoffnung“', ne: 'ग्राउअर बुर्गुन्डर „Traube - Liebe - Hoffnung“' }, desc: { en: '2023 – Weingut Weber, Baden, Germany · Round and harmonious with yellow fruit and mild acidity', de: '2023 – Weingut Weber – Baden, Deutschland · Rund und harmonisch mit gelber Frucht und milder Säure', ne: '२०२३ – वाइनगुट वेबर, बादेन, जर्मनी · सन्तुलित र मधुर, पहेँलो फलफूल र नरम अम्लता' }, price: 6.50, variants: [{ label: '0,75 L', price: 25.00 }, { label: '0,2 L', price: 6.50 }], allergens: [] },
        { num: '314', name: 'Chardonnay Netzl', desc: { en: '2024 – Weingut Netzl, Carnuntum, Austria · Juicy with exotic fruit, pear and lime, creamy finish', de: '2024 – Weingut Netzl – Carnuntum, Österreich · Saftig mit exotischer Frucht, Birne und Limette, cremiger Abgang', ne: '२०२४ – वाइनगुट नेट्जल, कार्नुन्टुम, अस्ट्रिया · रसिलो, विदेशी फलफूल, नास्पाती र कागती, क्रिमी अन्त्य' }, price: 8.50, variants: [{ label: '0,75 L', price: 27.00 }, { label: '0,2 L', price: 8.50 }], allergens: [] },
        { num: '314', name: 'Sauvignon Blanc, Daniel Mattern „Glück, Glück, Glück“', desc: { en: '2023 – Rheinhessen, Germany · Lively and aromatic with citrus, gooseberry and a fresh herbal note', de: '2023 – Rheinhessen, Deutschland · Lebendig und aromatisch mit Zitrus, Stachelbeere und einer frischen Kräuternote', ne: '२०२३ – राइनहेसन, जर्मनी · जीवन्त र बासनादार, सिट्रस, गुजबेरी र ताजा जडीबुटीको स्वाद' }, price: 7.50, variants: [{ label: '0,75 L', price: 26.00 }, { label: '0,2 L', price: 7.50 }], allergens: [], note: { en: 'Number 314 is printed twice on the card.', de: 'Die Nummer 314 ist in der Karte doppelt gedruckt.', ne: 'कार्डमा नम्बर ३१४ दुई ठाउँमा छापिएको छ।' } },
        { num: '300', name: { en: 'White Wine Spritzer', de: 'Weißweinschorle', ne: 'सेतो वाइन स्प्रिट्जर' }, desc: { en: 'Pinot Gris, dry · 0,2 L', de: 'Grauburgunder, trocken · 0,2 L', ne: 'ग्राउबुर्गुन्डर, ड्राई · ०.२ L' }, price: 5.90, allergens: [] },
        ],
      },
      {
        slug: 'rose-wine',
        label: { en: 'Rosé', de: 'Rosé', ne: 'रोजे' },
        items: [
        { num: '320', name: { en: 'Pinot Noir Rosé, „Traube-Liebe-Hoffnung“', de: 'Spätburgunder Rosé, „Traube-Liebe-Hoffnung“', ne: 'स्पेटबुर्गुन्डर रोजे, „Traube-Liebe-Hoffnung“' }, desc: { en: '2023 – Weingut Weber, Baden', de: '2023 – Weingut Weber, Baden', ne: '२०२३ – वाइनगुट वेबर, बादेन' }, price: 7.50, variants: [{ label: '0,75 L', price: 25.00 }, { label: '0,2 L', price: 7.50 }], allergens: [] },
        ],
      },
      {
        slug: 'red-wine',
        label: { en: 'Red Wine', de: 'Rotwein', ne: 'रातो वाइन' },
        items: [
        { num: '330', name: 'Primitivo San Marzano', desc: { en: '2024 – Puglia, Italy · Puglia IGP, a complex nose of plum and cherry with light savoury rosemary notes', de: '2024 – Apulien, Italien · Puglia IGP komplexer Duft mit Pflaumen- und Kirschnoten, sowie leichte würzige Rosmarinnoten', ne: '२०२४ – पुल्या, इटाली · Puglia IGP, आलुबखडा र चेरीको जटिल बासना, हल्का रोजमेरीको स्वाद' }, price: 6.50, variants: [{ label: '0,75 L', price: 22.00 }, { label: '0,2 L', price: 6.50 }], allergens: [] },
        { num: '331', name: 'La Boscana', desc: { en: '2022 – Costers del Segre, Spain · Tempranillo, Grenache, Syrah · Ruby red, fine fruit aromas of red and black currant, aromatic & savoury, classic & traditional', de: '2022 – Costers del Segre, Spanien · Rebsorten: Tempranillo, Grenache, Syrah · Rubinrot – Feine Fruchtaromen von roten und schwarzen Johannisbeeren, aromatisch & würzig, klassisch & traditionell', ne: '२०२२ – कोस्तेर्स देल सेग्रे, स्पेन · टेम्प्रानियो, ग्रेनास, सिरा · गाढा रातो, रातो र कालो करौंतेको स्वाद, बासनादार, परम्परागत' }, price: 7.50, variants: [{ label: '0,75 L', price: 26.00 }, { label: '0,2 L', price: 7.50 }], allergens: [] },
        { num: '332', name: 'Chateau Barre Gentillot „l\'Orangerie“', desc: { en: '2023 – Bordeaux, France · Cuvée of Cabernet Franc and Merlot · Dominant plum aromas with vanilla notes, supple and round on the palate with a pleasantly fruity bouquet', de: '2023 – Bordeaux Frankreich · Rebsorten: Cuvée aus Cabernet Franc, Merlot · Dominante Aromen von Pflaumen mit Vanillenoten, am Gaumen geschmeidig und rund mit einem angenehm fruchtigen Bouquet', ne: '२०२३ – बोर्दो, फ्रान्स · क्याबरनेट फ्रान्क र मर्लोको कुभे · आलुबखडा र भ्यानिलाको प्रमुख स्वाद, नरम र गोलाकार, रसिलो बुके' }, price: 9.00, variants: [{ label: '0,75 L', price: 31.00 }, { label: '0,2 L', price: 9.00 }], allergens: [] },
        ],
      },
    ],
  },
];

}());
