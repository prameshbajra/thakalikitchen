/* ============================================
   THAKALI KITCHEN — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initNavbar();
  initMobileMenu();
  initMenuTabs();
  initScrollReveal();
  initSmoothScroll();
  initCookieConsent();
  initReservationSystem();
});

/* --- Language Switcher & i18n --- */
const UI = {
  de: {
    'nav.about':'Über uns','nav.menu':'Speisekarte','nav.gallery':'Galerie','nav.location':'Standort','nav.contact':'Kontakt','nav.reserve':'Reservieren','nav.reserve-table':'Tisch reservieren',
    'hero.badge':'Asiatische Spezialitäten','hero.tagline':'Authentische Nepalesische Küche & Cross Sushi','hero.explore-menu':'Speisekarte entdecken','hero.find-us':'So finden Sie uns',
    'about.title':'Unsere Geschichte','about.accent':'Ein Geschmack von Nepal im Herzen Deutschlands',
    'about.p1':'Willkommen im Thakali Kitchen, wo wir die reichen kulinarischen Traditionen der nepalesischen Thakali-Gemeinschaft an Ihren Tisch bringen. Unsere Rezepte wurden über Generationen weitergegeben und ehren die authentischen Aromen der Himalaya-Region.',
    'about.p2':'Von unseren charakteristischen gedämpften Mo:Mo-Teigtaschen bis hin zu den aufwendigen Thakali Set-Mahlzeiten wird jedes Gericht mit frischen Zutaten und traditionellen Gewürzen zubereitet. Wir bieten auch eine exquisite Auswahl an Cross Sushi — unsere Fusion-Interpretation der japanischen Küche mit asiatischem Twist.',
    'about.feature1':'Traditionelle Rezepte','about.feature2':'Frische Zutaten','about.feature3':'Familientradition','about.feature4':'Mit Liebe zubereitet',
    'menu.title':'Unsere Speisekarte','menu.subtitle':'Von den Gipfeln Nepals bis zur Kunst des japanischen Sushi — entdecken Sie unsere vielfältigen kulinarischen Angebote',
    'menu.tab.starters':'Vorspeisen','menu.tab.mains':'Hauptgerichte',
    'menu.starters.title':'Thakali Vorspeisen','menu.momo.desc':'Traditionelle nepalesische Teigtaschen — das Herzstück unserer Küche','menu.mains.title':'Hauptgerichte','menu.mains.desc':'Serviert mit Hähnchen und Schweinefleisch',
    'gallery.title':'Galerie','gallery.subtitle':'Ein Einblick in unsere Küche und das kulinarische Erlebnis',
    'location.title':'So finden Sie uns','location.subtitle':'Besuchen Sie uns für ein unvergessliches kulinarisches Erlebnis','location.visit':'Besuchen Sie uns','location.address':'Adresse','location.phone':'Telefon','location.email':'E-Mail',
    'location.hours':'Öffnungszeiten','location.mon':'Montag','location.tue':'Dienstag','location.wed':'Mittwoch','location.thu':'Donnerstag','location.fri':'Freitag','location.sat':'Samstag','location.sun':'Sonntag',
    'contact.title':'Kontaktieren Sie uns','contact.subtitle':'Wir freuen uns von Ihnen zu hören','contact.call':'Rufen Sie uns an','contact.call-desc':'Für Reservierungen und Anfragen','contact.email':'Schreiben Sie uns','contact.email-desc':'Wir melden uns bald bei Ihnen',
    'footer.desc':'Authentische nepalesische Küche und Cross Sushi. Erleben Sie die Aromen des Himalaya und die Kunst der japanischen Fusion in jedem Bissen.',
    'footer.links':'Schnelllinks','footer.about':'Über uns','footer.menu':'Unsere Speisekarte','footer.gallery':'Galerie','footer.location':'Standort','footer.contact':'Kontakt','footer.contact-title':'Kontakt',
    'footer.rights':'\u00A9 2026 Thakali Kitchen. Alle Rechte vorbehalten.',
    'cookie.text':'Wir verwenden Cookies, um Ihr Erlebnis zu verbessern. Durch den weiteren Besuch dieser Website stimmen Sie unserer Verwendung von Cookies zu. <a href="datenschutz.html">Mehr erfahren</a>',
    'cookie.accept':'Akzeptieren','cookie.decline':'Ablehnen'
  },
  en: {
    'nav.about':'About','nav.menu':'Menu','nav.gallery':'Gallery','nav.location':'Location','nav.contact':'Contact','nav.reserve':'Reserve','nav.reserve-table':'Reserve a Table',
    'hero.badge':'Asian Specialties','hero.tagline':'Authentic Nepali Cuisine & Cross Sushi','hero.explore-menu':'Explore Menu','hero.find-us':'Find Us',
    'about.title':'Our Story','about.accent':'A taste of Nepal in the heart of Germany',
    'about.p1':'Welcome to Thakali Kitchen, where we bring the rich culinary traditions of Nepal\'s Thakali community to your table. Our recipes have been passed down through generations, honoring the authentic flavors of the Himalayan region.',
    'about.p2':'From our signature steamed Mo:Mo dumplings to the elaborate Thakali Set meals, every dish is prepared with fresh ingredients and traditional spices. We also offer an exquisite selection of Cross Sushi — our fusion take on Japanese cuisine with an Asian twist.',
    'about.feature1':'Traditional Recipes','about.feature2':'Fresh Ingredients','about.feature3':'Family Tradition','about.feature4':'Made with Love',
    'menu.title':'Our Menu','menu.subtitle':'From the peaks of Nepal to the art of Japanese sushi — discover our diverse culinary offerings',
    'menu.tab.starters':'Starters','menu.tab.mains':'Main Dishes',
    'menu.starters.title':'Thakali Starters','menu.momo.desc':'Traditional Nepali dumplings — the heart of our kitchen','menu.mains.title':'Main Dishes','menu.mains.desc':'Served with chicken and pork',
    'gallery.title':'Gallery','gallery.subtitle':'A glimpse into our kitchen and dining experience',
    'location.title':'Find Us','location.subtitle':'Visit us for an unforgettable dining experience','location.visit':'Visit Us','location.address':'Address','location.phone':'Phone','location.email':'Email',
    'location.hours':'Opening Hours','location.mon':'Monday','location.tue':'Tuesday','location.wed':'Wednesday','location.thu':'Thursday','location.fri':'Friday','location.sat':'Saturday','location.sun':'Sunday',
    'contact.title':'Get in Touch','contact.subtitle':'We\'d love to hear from you','contact.call':'Call Us','contact.call-desc':'For reservations and inquiries','contact.email':'Email Us','contact.email-desc':'We\'ll get back to you soon',
    'footer.desc':'Authentic Nepali cuisine and Cross Sushi. Experience the flavors of the Himalayas and the art of Japanese fusion in every bite.',
    'footer.links':'Quick Links','footer.about':'About Us','footer.menu':'Our Menu','footer.gallery':'Gallery','footer.location':'Location','footer.contact':'Contact','footer.contact-title':'Contact',
    'footer.rights':'\u00A9 2026 Thakali Kitchen. All rights reserved.',
    'cookie.text':'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. <a href="datenschutz.html">Learn more</a>',
    'cookie.accept':'Accept','cookie.decline':'Decline'
  }
};

/* Badge translations */
const BADGES = { de: { veg: 'Vegetarisch', spicy: 'Scharf' }, en: { veg: 'Vegetarian', spicy: 'Spicy' } };

/* Category titles & descriptions keyed by data-category.
   Arrays align with DOM order of .menu-category-title / .menu-category-desc inside each category. null = skip. */
const CAT = {
  de: {
    soups:        { t:['Suppen'] },
    appetizers:   { t:['Vorspeisen'] },
    tempura:      { t:['Cross Tempura'] },
    salads:       { t:['Salate'] },
    'poke-bowls': { t:['Poke Bowls'], d:['Edamame, Gurke, Avocado, Rote Beete, Blaubeeren, Mais'] },
    nigiri:       { t:['Classic Nigiri'], d:['2 Stück'] },
    'special-nigiri': { t:['Special Nigiri'], d:['2 Stück'] },
    maki:         { t:['Maki'], d:['8 Stück'] },
    'crossover-maki': { t:['Crossover Maki'], d:['8 Stück'] },
    'kids-maki':  { t:['Maki für Kinder'], d:['10 Stück'] },
    'classic-roll': { t:['Classic Roll'] },
    'signature-roll': { t:['Cross Signature Roll'], d:['8 Stück'] },
    'veggie-roll': { t:['Cross Veggie Signature Roll'], d:['8 Stück'] },
    'hot-roll':   { t:['Eimsbüttel Hot Roll'], d:['5 Stück'] },
    sashimi:      { t:['Classic Sashimi','Signature Sashimi'], d:['10 Scheiben','10 Scheiben'] },
    thai:         { t:['Thailändische Spezialitäten','Thai Hühnerfleisch','Rindfleisch','Cross Thai Ente'], d:[null,null,'Gebratenes Rindfleisch'] },
    fish:         { t:['Cross Fisch'] },
    'rice-noodles': { t:['Cross Reis oder Nudeln'], d:['Gebratene Nudeln oder gebratener Reis — Gemüse, Cashewkerne, Ei und nach Wahl'] },
    vegetarian:   { t:['Vegetarisch'] },
    desserts:     { t:['Nachtisch'] },
    extras:       { t:['Extras & Beilagen'] },
    'tea-coffee': { t:['Exklusive Teesorten','Kaffee'] },
    'soft-drinks': { t:['Softgetränke'] },
    lemonade:     { t:['Hausgemachte Limonade'], d:['0,3 l'] },
    beer:         { t:['Bier vom Fass'] },
    cocktails:    { t:['Cocktails','Spirituosen','Spritz'] },
    wine:         { t:['Weißwein','Rosé Wein','Rotwein','Prosecco','Crémant','Weinschorle'] },
  },
  en: {
    soups:        { t:['Soups'] },
    appetizers:   { t:['Appetizers'] },
    tempura:      { t:['Cross Tempura'] },
    salads:       { t:['Salads'] },
    'poke-bowls': { t:['Poke Bowls'], d:['Edamame, cucumber, avocado, beetroot, blueberries, corn'] },
    nigiri:       { t:['Classic Nigiri'], d:['2 pieces'] },
    'special-nigiri': { t:['Special Nigiri'], d:['2 pieces'] },
    maki:         { t:['Maki'], d:['8 pieces'] },
    'crossover-maki': { t:['Crossover Maki'], d:['8 pieces'] },
    'kids-maki':  { t:['Kids Maki'], d:['10 pieces'] },
    'classic-roll': { t:['Classic Roll'] },
    'signature-roll': { t:['Cross Signature Roll'], d:['8 pieces'] },
    'veggie-roll': { t:['Cross Veggie Signature Roll'], d:['8 pieces'] },
    'hot-roll':   { t:['Eimsbüttel Hot Roll'], d:['5 pieces'] },
    sashimi:      { t:['Classic Sashimi','Signature Sashimi'], d:['10 slices','10 slices'] },
    thai:         { t:['Thai Specialties','Thai Chicken','Beef','Cross Thai Duck'], d:[null,null,'Fried beef'] },
    fish:         { t:['Cross Fish'] },
    'rice-noodles': { t:['Cross Rice or Noodles'], d:['Fried noodles or fried rice — vegetables, cashew nuts, egg, and your choice'] },
    vegetarian:   { t:['Vegetarian'] },
    desserts:     { t:['Desserts'] },
    extras:       { t:['Extras & Sides'] },
    'tea-coffee': { t:['Exclusive Tea Varieties','Coffee'] },
    'soft-drinks': { t:['Soft Drinks'] },
    lemonade:     { t:['Homemade Lemonade'], d:['0.3 l'] },
    beer:         { t:['Draft Beer'] },
    cocktails:    { t:['Cocktails','Spirits','Spritz'] },
    wine:         { t:['White Wine','Rosé Wine','Red Wine','Prosecco','Crémant','Wine Spritzer'] },
  }
};

/* Menu item translations keyed by item number. n=name, d=description (only entries that differ). */
const ITEMS = {
  de: {
    '500':{d:'Sojabohnen, frischer Knoblauch, Ingwer, grüne Chili'},'501':{d:'Sherchan Art mit Alu Dam'},'502':{d:'Kartoffel, Puffreis, Wai Wai, Zwiebel, Gurke'},'503':{d:'Trockenes Büffelfleisch'},'505':{d:'Hähnchen, Paprika, Zwiebel'},'506':{d:'10 Stück'},
    '510':{d:'Gedämpfte Hähnchen- oder Schweine-Teigtaschen, Sherchan Art, serviert mit scharfer Tomatensoße'},'511':{d:'Gedämpfte Hähnchen- oder Schweine-Teigtaschen, nepalesische Art, mit scharfer Tomatensuppe'},'512':{d:'Gedämpfte Chili-Hähnchen- oder Schweine-Teigtaschen, Thakali Art, mit scharfer Tomaten-Sesam-Soße'},
    '530':{d:'Traditionelles nepalesisches Buchweizengericht als komplettes Set'},'531':{d:'Authentisches Thakali-Gericht — ein komplettes kulinarisches Erlebnis'},'532':{d:'Herzhafte Himalaya-Nudelsuppe'},'533':{d:'Gebratene Nudeln mit getrocknetem Büffelfleisch'},'534':{d:'Gebratene Nudeln mit Schweinefleisch'},
    '1':{n:'Miso-Fancy-Suppe',d:'Traditionelle japanische Suppe: Tofu, Algen, Lauchzwiebeln, Miso-Paste'},'2':{n:'Japanische Gemüse-Suppe',d:'Tofu, Champignons, Blumenkohl, Zuckerschoten, Spinatblätter, Paprika, Zucchini'},'3':{n:'Japanische Hühnersuppe',d:'Brokkoli, Paprika, Champignons, Zucchini, Zuckerschoten, Spinatblätter'},'4':{n:'Tom Kha Gai / Gung',d:'Kokossuppe mit Hühnerfleisch (Gai) oder Garnelen (Gung), rotes Thai Curry, Auberginen, Bambus, Champignons, Koriander'},
    '10':{d:'6 Stück — Mini-Frühlingsrollen mit hausgemachter Chili-Soße'},'11':{n:'Japanische Gyosa',d:'6 Stück — Teigtaschen mit Hühnerfleisch und Chili-Soße'},'12':{n:'Tori Teriyaki',d:'Hühnerfleisch-Spieß mit Teriyaki-Soße'},'13':{d:'Junge Sojabohnen, Meersalz'},'14':{d:'mit spicy Teriyaki-Soße'},
    '20':{n:'Japanische Gemüse Tempura',d:'Zucchini, Champignons, Süßkartoffeln, Brokkoli, hausgemachte Soße'},'21':{n:'Cross Garnelen Tempura',d:'5 Stück — Garnelen-Tempura angerichtet mit Teriyaki Soße'},
    '22':{d:'Lachs, Thunfisch und Avocado Würfel, gemischter Salat, Kürbiskerne, hausgemachte Cross Soße'},'23':{d:'Avocado, gemischter Salat, Kürbiskerne, hausgemachte Cross Soße, Shiso-Kresse und Sesam'},'24':{d:'Spinatblätter, Erdnusssoße'},'25':{d:'Romanasalat mit Panko-Hähnchen, hausgemachte Cross Soße und Shiso-Kresse'},
    '30 B':{d:'Korallenlinsen, Avocado, Rote Beete'},'30 C':{d:'Garnelen, Walnuss, Soja, Mayo Soße'},'30 D':{d:'Teriyaki Soße, Erdnusssoße'},
    '40':{n:'Spargel',d:'Grüner Spargel'},'41':{n:'Kanisuja',d:'Avocado'},'42':{n:'Shake',d:'Lachs'},'43':{n:'Unagi',d:'Aal'},'44':{n:'Yellowfin Tuna'},
    '40.a':{d:'Spicy Soße, Kimchi-Sesam'},'41.a':{d:'Petersilie, Sesam'},'42.b':{n:'Flambiert Salmon Nigiri',d:'Flambierter Lachs, Nussbutter, Ponzu Soße, Crispy Panko'},'43.c':{n:'Tempura-Garnele',d:'Cross Dressing mit Shiso-Kresse'},'44.d':{d:'Flambierter Thunfisch, Mayo Soße, Togarashi, Kimchi-Sesam, Teriyaki Soße'},'45.e':{d:'Flambiertes Rindfleisch, Nussbutter, Trüffel Ponzu, Crispy Panko'},'46.f':{d:'Lachs, Nussbutter, Ponzu Soße, Wakame mit Tobiko Schnittlauch'},
    '50':{n:'Gurke Maki',d:'mit Sesam'},'51':{n:'Avocado Maki'},'52':{n:'Spargel Maki'},'53':{n:'Lachs Maki'},'54':{n:'Tuna Maki'},
    '60':{n:'Lachs & Avocado Maki'},'61':{n:'Tuna & Avocado Maki'},'62':{n:'Tempura-Garnelen Maki'},'63':{n:'Cross Avocado Ceviche Maki'},'64':{n:'Tempura-Spargel Maki'},'65':{d:'Lachs mit warmer Butter Ponzu und Panko Crunchy'},'66':{d:'mit Teriyaki Soße'},'67':{n:'Tempura-Lachs Maki',d:'mit Teriyaki Soße'},
    '70':{n:'Lachs Maki',d:'mit Teriyaki Soße'},'72':{d:'mit Teriyaki Soße'},
    '83':{d:'Gurke, black & white Sesam'},
    '110':{d:'Surimi, Gurke, Mayo, Lachs, flambierter french Sesam'},'111':{d:'Gurke, Lachs, Lachs-flambierter Insidetouch Sesam'},'112':{d:'Gurke, Lachs, Tobiko, Togarashi-Mix'},'113':{d:'Gurke, Lachs, Schnittlauch'},'114':{d:'Garnele, Lachs, Schnittlauch'},'115':{d:'Gurke, Teriyaki Soße, Creative Mix'},'116':{d:'Tempura, Avocado, Gurke, Tatar, Tobiko, Mayo Soße, Shiso-Kresse, Sesam'},'117':{d:'Tempura, Avocado, Lachs, Shiso-Kresse, Sesam'},'118':{d:'Tempura, Avocado, Kimchi-Sesam, Shiso-Kresse, Sesam'},'119':{d:'Tempura Shrimps, Gurke, Avocado, rote gegrillte Schinken, Limetten, Kimchi-Sesam'},'120':{d:'Gurke, Avocado, Lachstatar mit Teriyaki, Kimchi-Sesam'},'121':{d:'Lachs, Soße, Spicy Teriyaki Soße, Kimchi-Sesam'},'122':{d:'Surimi, Gurke, Avocado mit Lachs, Avocado-Topping, Teriyaki Soße, black & white Sesam'},'123':{d:'Surimi, Mayo, Gurke, Avocado mit Avocado-Topping, Petersilie, black & white Sesam'},
    '130':{d:'Gurke, Avocado, Role Inside, Topping Creamy Soße'},'131':{d:'Gurke, Avocado, Sesam, Topping Avocado Kresse'},'132':{d:'Tempura Seitan, Gurke, Avocado, Topping Avocado Kresse'},'133':{d:'Portobello, Tempura, Avocado, Gurke, Kresse, Sesam, Wasabi Sesam'},
    '140':{d:'Tempura Shrimps, hausgemachte Teriyaki und Mayo Soße'},'141':{d:'Crispy Chicken, Avocado, Gurke, Spicy Teriyaki Soße'},'142':{d:'Tempura Ente, Teriyaki Soße mit Schnittlauch und Spicy Soße'},'143':{d:'Gurke, Spicy Tuna mit Schnittlauch und Spicy Soße'},'144':{d:'Lachs, Spicy Tuna, hausgemachte Teriyaki und Mayo Soße, Sesam'},
    '90':{d:'Avocado, Sashimi, Sesam'},'91':{n:'Rohe Bento Sashimi',d:'Sashimi mit gemischtem Salat, Tomatensauce, Kresse'},'92':{n:'Lachs Sashimi'},'93':{d:'Wasabi, Ingwer, Karotten, Tomaten, Kresse'},'94':{d:'Frischer Yellowfin Tuna, Sesam, Kresse'},
    '100':{d:'Seetangblätter und Lachstatar, Soße Ponzu'},'101':{d:'Wellenförmig Trockeneis, Limette, Trüffel Ponzu Soße'},'102':{d:'Rosenbutter, Trüffel-Schaum Sashimi, Trüffel Ponzu'},'103':{d:'Frisches Roast Beef mit Rosenbutter, Trüffel Ponzu, gemischter Salat und Shiso-Kresse'},
    '150':{d:'Thai Basilikum, Sambal, Cashewkerne, Kokosraspeln, oder Gai'},'151':{d:'Nahi Massaman mit Kartoffeln, Champignons, Karotten, Erdnuss'},'152':{d:'Kokossuppe mit Hühnerfleisch, Champignons, Koriander'},
    '160':{n:'Crispy Sweet Huhn',d:'oder Phed — gebratenes Hühnerfleisch, Süß-Sauer mit Zuckerschoten'},'161':{n:'Knuspriges Hühnerfleisch',d:'gebratenes Süß-Sauer mit Zuckerschoten, Mais Soße, Zwiebeln'},'162':{n:'Huhn Cashew Teriyaki',d:'Zucchini, Hühnchen, rote Zwiebeln, Bambus, Cashewkerne, Pikante Soße'},'163':{n:'Japanisches Teriyaki Hühnchen',d:'oder Erdnuss — Spinatblätter, Bambus, rote Zwiebeln, Glasnudeln'},'164':{d:'Tofu, Thai Peperoni, Blumenkohl, Schnittbohnen, rote Zwiebeln, Korma-Sahne-Soße'},'165':{d:'Thai art — Hühnerfleisch, Thai Gemüse, Cashewkerne, Korma, Thai Peperoni'},
    '170':{n:'Gebratenes Rindfleisch',d:'rote Peperoni, Blumenkohl, Brokkoli, Zucchini, Bambus, Paprika, rote Zwiebeln, Zuckerschoten'},'171':{d:'gebratenes Rindfleisch, Paprika, Cashewkerne, rote Zwiebeln, rote Peperoni'},
    '180':{n:'Cross Ente Teriyaki',d:'knusprige Ente, Sesamkörner, rote Zwiebeln, Erdnusskörner oder Erdnusssoße'},'181':{n:'Cross Ente Panang Curry',d:'knusprige Ente, Panang Curry, Zuckerschoten, rote Zwiebeln, Koriander'},
    '190':{d:'Spinatblätter, Bratkartoffeln, rote Peperoni, Brokkoli, Zuckerschoten, Zitrone, Spinatsoße'},'191':{n:'Barbecue Lachs',d:'Gegrilltes Lachsfilet, frische Salatblätter, rote Peperoni, Zuckerschoten, Zitrone, Spinatsoße'},
    '200 A':{n:'Vegetarisch'},'200 B':{n:'Hühnerfleisch'},'200 C':{n:'Rindfleisch'},'200 D':{n:'Knusprige Ente / Hähnchen'},
    '210':{d:'Champignons, Brokkoli, Zuckerschoten, Bambus, Thai Basilikum, Kokosraspeln'},'211':{n:'Tofu Gebraten',d:'Champignons, Ingwer, rote Zwiebeln, Bambus, Cashewkerne, Pikante Soße'},
    '220':{n:'Knusprige Banane'},'221':{n:'Frittierte Vanille-Eis',d:'mit Erdbeer- oder Schoko-Soße'},'222':{n:'Warme Waffeln mit Vanille-Eis',d:'mit Erdbeer- oder Schoko-Soße'},
    '230':{n:'Jasminreis'},'231':{n:'Sushi-Reis'},'232':{n:'Hausgemachte Soßen',d:'Trüffel Soße, Soya Soße, Spicy Teriyaki-Soße'},'233':{n:'Teriyaki Soße'},'234':{n:'Erdnusssoße'},'235':{n:'Portion Ingwer / Wasabi'},'236':{n:'Knuspriges Hühnchen',d:'mit Saison Gemüse'},'237':{n:'Knusprige Ente',d:'mit Saison Gemüse'},
    '240':{n:'Japanischer Grüner Tee',d:'mit verschiedenen Zusätzen'},'241':{n:'Grüner Winter-Tee'},'242':{n:'Ingwer Tee'},'243':{n:'Jasmin Oolong Tee'},
    '250':{n:'Espresso'},'251':{n:'Doppelter Espresso'},'252':{n:'Cappuccino'},
    '260':{n:'Passion Fruit',d:'Bio Orange, Ananas, Bio Limette'},'261':{d:'Bio Orange, Limettensaft, Zucker'},'262':{d:'Sprudel Wasser, Limettensaft, Zucker, Zitrone'},'263':{d:'Joghurt, Mango, Soft'},'264':{d:'Limettensaft, Ingwer und Minze'},'265':{d:'Brauner Zucker, Minze und Sprudel Wasser'},
    '270':{n:'König Pilsner'},'274':{n:'Alkoholfreies Pilsner'},'275':{n:'Alkoholfreies Weißbier'},
    '280':{d:'Limetten, brauner Zucker, crushed ice'},'281':{d:'Gin, Basilikum, Limetten, Zuckersirup'},'282':{d:'Rum, Limetten, Minze, brauner Zucker, crushed ice'},'283':{d:'Wodka, Espresso, Zuckersirup'},'284':{d:'Whiskey, Zitronensaft, Zucker, Eiswürfel'},'285':{d:'Tequila, Zitronensaft, Zucker'},
    '290':{n:'Bambusschnaps'},'293':{n:'Illiens Schnaps'},
    '300':{n:'Weinschorle',d:'Weiß / Rosé'},
  },
  en: {
    '500':{d:'Soybeans, fresh garlic, ginger, green chili'},'501':{d:'Sherchan style with Alu Dam'},'502':{d:'Potato, puffed rice, Wai Wai, onion, cucumber'},'503':{d:'Dry buffalo meat'},'505':{d:'Chicken, bell pepper, onion'},'506':{d:'10 pieces'},
    '510':{d:'Steamed chicken or pork dumplings, Sherchan style, served with spicy tomato sauce'},'511':{d:'Steamed chicken or pork dumplings, Nepali style, with spicy tomato soup'},'512':{d:'Steamed chili chicken or pork dumplings, Thakali style, with spicy tomato sesame sauce'},
    '530':{d:'Traditional Nepali buckwheat dish served as a complete set'},'531':{d:'Authentic Thakali meal — a complete dining experience'},'532':{d:'Hearty Himalayan noodle soup'},'533':{d:'Stir-fried noodles with dry buffalo meat'},'534':{d:'Stir-fried noodles with pork'},
    '1':{n:'Miso Fancy Soup',d:'Traditional Japanese soup: tofu, seaweed, spring onions, miso paste'},'2':{n:'Japanese Vegetable Soup',d:'Tofu, mushrooms, cauliflower, snow peas, spinach leaves, bell pepper, zucchini'},'3':{n:'Japanese Chicken Soup',d:'Broccoli, bell pepper, mushrooms, zucchini, snow peas, spinach leaves'},'4':{n:'Tom Kha Gai / Gung',d:'Coconut soup with chicken (Gai) or shrimp (Gung), red Thai curry, aubergine, bamboo, mushrooms, coriander'},
    '10':{d:'6 pieces — mini spring rolls with homemade chili sauce'},'11':{n:'Japanese Gyoza',d:'6 pieces — dumplings with chicken and chili sauce'},'12':{n:'Tori Teriyaki',d:'Chicken skewer with teriyaki sauce'},'13':{d:'Young soybeans, sea salt'},'14':{d:'with spicy teriyaki sauce'},
    '20':{n:'Japanese Vegetable Tempura',d:'Zucchini, mushrooms, sweet potatoes, broccoli, homemade sauce'},'21':{n:'Cross Shrimp Tempura',d:'5 pieces — shrimp tempura served with teriyaki sauce'},
    '22':{d:'Salmon, tuna and avocado cubes, mixed salad, pumpkin seeds, homemade Cross sauce'},'23':{d:'Avocado, mixed salad, pumpkin seeds, homemade Cross sauce, shiso cress and sesame'},'24':{d:'Spinach leaves, peanut sauce'},'25':{d:'Romaine lettuce with panko chicken, homemade Cross sauce and shiso cress'},
    '30 B':{d:'Coral lentils, avocado, beetroot'},'30 C':{d:'Shrimp, walnut, soy, mayo sauce'},'30 D':{d:'Teriyaki sauce, peanut sauce'},
    '40':{n:'Asparagus',d:'Green asparagus'},'41':{n:'Kanisuja',d:'Avocado'},'42':{n:'Shake',d:'Salmon'},'43':{n:'Unagi',d:'Eel'},'44':{n:'Yellowfin Tuna'},
    '40.a':{d:'Spicy sauce, kimchi sesame'},'41.a':{d:'Parsley, sesame'},'42.b':{n:'Flambéed Salmon Nigiri',d:'Flambéed salmon, nut butter, ponzu sauce, crispy panko'},'43.c':{n:'Tempura Shrimp',d:'Cross dressing with shiso cress'},'44.d':{d:'Flambéed tuna, mayo sauce, togarashi, kimchi sesame, teriyaki sauce'},'45.e':{d:'Flambéed beef, nut butter, truffle ponzu, crispy panko'},'46.f':{d:'Salmon, nut butter, ponzu sauce, wakame with tobiko chives'},
    '50':{n:'Cucumber Maki',d:'with sesame'},'51':{n:'Avocado Maki'},'52':{n:'Asparagus Maki'},'53':{n:'Salmon Maki'},'54':{n:'Tuna Maki'},
    '60':{n:'Salmon & Avocado Maki'},'61':{n:'Tuna & Avocado Maki'},'62':{n:'Tempura Shrimp Maki'},'63':{n:'Cross Avocado Ceviche Maki'},'64':{n:'Tempura Asparagus Maki'},'65':{d:'Salmon with warm butter ponzu and panko crunchy'},'66':{d:'with teriyaki sauce'},'67':{n:'Tempura Salmon Maki',d:'with teriyaki sauce'},
    '70':{n:'Salmon Maki',d:'with teriyaki sauce'},'72':{d:'with teriyaki sauce'},
    '83':{d:'Cucumber, black & white sesame'},
    '110':{d:'Surimi, cucumber, mayo, salmon, flambéed french sesame'},'111':{d:'Cucumber, salmon, salmon-flambéed insidetouch sesame'},'112':{d:'Cucumber, salmon, tobiko, togarashi mix'},'113':{d:'Cucumber, salmon, chives'},'114':{d:'Shrimp, salmon, chives'},'115':{d:'Cucumber, teriyaki sauce, creative mix'},'116':{d:'Tempura, avocado, cucumber, tartare, tobiko, mayo sauce, shiso cress, sesame'},'117':{d:'Tempura, avocado, salmon, shiso cress, sesame'},'118':{d:'Tempura, avocado, kimchi sesame, shiso cress, sesame'},'119':{d:'Tempura shrimp, cucumber, avocado, grilled red ham, lime, kimchi sesame'},'120':{d:'Cucumber, avocado, salmon tartare with teriyaki, kimchi sesame'},'121':{d:'Salmon, sauce, spicy teriyaki sauce, kimchi sesame'},'122':{d:'Surimi, cucumber, avocado with salmon, avocado topping, teriyaki sauce, black & white sesame'},'123':{d:'Surimi, mayo, cucumber, avocado with avocado topping, parsley, black & white sesame'},
    '130':{d:'Cucumber, avocado, roll inside, topping creamy sauce'},'131':{d:'Cucumber, avocado, sesame, topping avocado cress'},'132':{d:'Tempura seitan, cucumber, avocado, topping avocado cress'},'133':{d:'Portobello, tempura, avocado, cucumber, cress, sesame, wasabi sesame'},
    '140':{d:'Tempura shrimp, homemade teriyaki and mayo sauce'},'141':{d:'Crispy chicken, avocado, cucumber, spicy teriyaki sauce'},'142':{d:'Tempura duck, teriyaki sauce with chives and spicy sauce'},'143':{d:'Cucumber, spicy tuna with chives and spicy sauce'},'144':{d:'Salmon, spicy tuna, homemade teriyaki and mayo sauce, sesame'},
    '90':{d:'Avocado, sashimi, sesame'},'91':{n:'Raw Bento Sashimi',d:'Sashimi with mixed salad, tomato sauce, cress'},'92':{n:'Salmon Sashimi'},'93':{d:'Wasabi, ginger, carrots, tomatoes, cress'},'94':{d:'Fresh yellowfin tuna, sesame, cress'},
    '100':{d:'Seaweed sheets and salmon tartare, ponzu sauce'},'101':{d:'Wave-shaped dry ice, lime, truffle ponzu sauce'},'102':{d:'Rose butter, truffle foam sashimi, truffle ponzu'},'103':{d:'Fresh roast beef with rose butter, truffle ponzu, mixed salad and shiso cress'},
    '150':{d:'Thai basil, sambal, cashew nuts, coconut flakes, or Gai'},'151':{d:'Nahi Massaman with potatoes, mushrooms, carrots, peanuts'},'152':{d:'Coconut soup with chicken, mushrooms, coriander'},
    '160':{n:'Crispy Sweet Chicken',d:'or Phed — fried chicken, sweet and sour with snow peas'},'161':{n:'Crispy Chicken',d:'fried sweet and sour with snow peas, corn sauce, onions'},'162':{n:'Chicken Cashew Teriyaki',d:'Zucchini, chicken, red onions, bamboo, cashew nuts, spicy sauce'},'163':{n:'Japanese Teriyaki Chicken',d:'or peanut — spinach leaves, bamboo, red onions, glass noodles'},'164':{d:'Tofu, Thai chili, cauliflower, green beans, red onions, korma cream sauce'},'165':{d:'Thai style — chicken, Thai vegetables, cashew nuts, korma, Thai chili'},
    '170':{n:'Fried Beef',d:'Red chili, cauliflower, broccoli, zucchini, bamboo, bell pepper, red onions, snow peas'},'171':{d:'Fried beef, bell pepper, cashew nuts, red onions, red chili'},
    '180':{n:'Cross Duck Teriyaki',d:'Crispy duck, sesame seeds, red onions, peanuts or peanut sauce'},'181':{n:'Cross Duck Panang Curry',d:'Crispy duck, panang curry, snow peas, red onions, coriander'},
    '190':{d:'Spinach leaves, fried potatoes, red chili, broccoli, snow peas, lemon, spinach sauce'},'191':{n:'Barbecue Salmon',d:'Grilled salmon fillet, fresh salad leaves, red chili, snow peas, lemon, spinach sauce'},
    '200 A':{n:'Vegetarian'},'200 B':{n:'Chicken'},'200 C':{n:'Beef'},'200 D':{n:'Crispy Duck / Chicken'},
    '210':{d:'Mushrooms, broccoli, snow peas, bamboo, Thai basil, coconut flakes'},'211':{n:'Fried Tofu',d:'Mushrooms, ginger, red onions, bamboo, cashew nuts, spicy sauce'},
    '220':{n:'Crispy Banana'},'221':{n:'Fried Vanilla Ice Cream',d:'with strawberry or chocolate sauce'},'222':{n:'Warm Waffles with Vanilla Ice Cream',d:'with strawberry or chocolate sauce'},
    '230':{n:'Jasmine Rice'},'231':{n:'Sushi Rice'},'232':{n:'Homemade Sauces',d:'Truffle sauce, soy sauce, spicy teriyaki sauce'},'233':{n:'Teriyaki Sauce'},'234':{n:'Peanut Sauce'},'235':{n:'Portion Ginger / Wasabi'},'236':{n:'Crispy Chicken',d:'with seasonal vegetables'},'237':{n:'Crispy Duck',d:'with seasonal vegetables'},
    '240':{n:'Japanese Green Tea',d:'with various additions'},'241':{n:'Green Winter Tea'},'242':{n:'Ginger Tea'},'243':{n:'Jasmine Oolong Tea'},
    '250':{n:'Espresso'},'251':{n:'Double Espresso'},'252':{n:'Cappuccino'},
    '260':{n:'Passion Fruit',d:'Organic orange, pineapple, organic lime'},'261':{d:'Organic orange, lime juice, sugar'},'262':{d:'Sparkling water, lime juice, sugar, lemon'},'263':{d:'Yogurt, mango, soft'},'264':{d:'Lime juice, ginger and mint'},'265':{d:'Brown sugar, mint and sparkling water'},
    '270':{n:'König Pilsner'},'274':{n:'Non-Alcoholic Pilsner'},'275':{n:'Non-Alcoholic Wheat Beer'},
    '280':{d:'Limes, brown sugar, crushed ice'},'281':{d:'Gin, basil, limes, sugar syrup'},'282':{d:'Rum, limes, mint, brown sugar, crushed ice'},'283':{d:'Vodka, espresso, sugar syrup'},'284':{d:'Whiskey, lemon juice, sugar, ice cubes'},'285':{d:'Tequila, lemon juice, sugar'},
    '290':{n:'Bamboo Schnapps'},'293':{n:'Illiens Schnapps'},
    '300':{n:'Wine Spritzer',d:'White / Rosé'},
  }
};

/* Tab label translations for drink/sushi tabs that live in HTML */
const TAB_LABELS = {
  de: { soups:'Suppen', appetizers:'Vorspeisen', tempura:'Tempura', salads:'Salate', 'poke-bowls':'Poke Bowls', nigiri:'Nigiri', 'special-nigiri':'Special Nigiri', maki:'Maki', 'crossover-maki':'Crossover Maki', 'kids-maki':'Kinder Maki', 'classic-roll':'Classic Roll', 'signature-roll':'Signature Roll', 'veggie-roll':'Veggie Roll', 'hot-roll':'Hot Roll', sashimi:'Sashimi', thai:'Thai Spezialitäten', fish:'Fisch', 'rice-noodles':'Reis & Nudeln', vegetarian:'Vegetarisch', desserts:'Nachtisch', extras:'Extras', 'tea-coffee':'Tee & Kaffee', 'soft-drinks':'Softgetränke', lemonade:'Limonaden', beer:'Bier', cocktails:'Cocktails', wine:'Wein & Prosecco' },
  en: { soups:'Soups', appetizers:'Appetizers', tempura:'Tempura', salads:'Salads', 'poke-bowls':'Poke Bowls', nigiri:'Nigiri', 'special-nigiri':'Special Nigiri', maki:'Maki', 'crossover-maki':'Crossover Maki', 'kids-maki':'Kids Maki', 'classic-roll':'Classic Roll', 'signature-roll':'Signature Roll', 'veggie-roll':'Veggie Roll', 'hot-roll':'Hot Roll', sashimi:'Sashimi', thai:'Thai Specialties', fish:'Fish', 'rice-noodles':'Rice & Noodles', vegetarian:'Vegetarian', desserts:'Desserts', extras:'Extras', 'tea-coffee':'Tea & Coffee', 'soft-drinks':'Soft Drinks', lemonade:'Lemonades', beer:'Beer', cocktails:'Cocktails', wine:'Wine & Prosecco' }
};

function initLanguageSwitcher() {
  const lang = localStorage.getItem('lang') || 'de';
  applyLanguage(lang);

  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const current = localStorage.getItem('lang') || 'de';
    const next = current === 'de' ? 'en' : 'de';
    localStorage.setItem('lang', next);
    applyLanguage(next);
  });
}

function applyLanguage(lang) {
  const dict = UI[lang];
  if (!dict) return;

  /* 1. data-i18n text elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  /* 2. data-i18n-html (cookie banner with link) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) el.innerHTML = dict[key];
  });

  /* 3. Toggle button label */
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.textContent = lang === 'de' ? 'EN' : 'DE';
    toggle.setAttribute('aria-label', lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln');
  }

  /* 4. Badges */
  const b = BADGES[lang];
  document.querySelectorAll('.badge-vegetarian').forEach(el => el.textContent = b.veg);
  document.querySelectorAll('.badge-spicy').forEach(el => el.textContent = b.spicy);

  /* 5. Menu tab labels */
  const tabs = TAB_LABELS[lang];
  document.querySelectorAll('.menu-tab').forEach(tab => {
    const cat = tab.dataset.category;
    if (tabs[cat]) tab.textContent = tabs[cat];
  });

  /* 6. Category titles & descriptions */
  const cats = CAT[lang];
  document.querySelectorAll('.menu-category').forEach(catEl => {
    const key = catEl.dataset.category;
    const tr = cats[key];
    if (!tr) return;
    const titles = catEl.querySelectorAll('.menu-category-title');
    const descs = catEl.querySelectorAll('.menu-category-desc');
    if (tr.t) titles.forEach((el, i) => { if (tr.t[i]) el.textContent = tr.t[i]; });
    if (tr.d) descs.forEach((el, i) => { if (tr.d[i]) el.textContent = tr.d[i]; });
  });

  /* 7. Individual menu items by number */
  const items = ITEMS[lang];
  document.querySelectorAll('.menu-item').forEach(item => {
    const numEl = item.querySelector('.menu-item-number');
    if (!numEl) return;
    const num = numEl.textContent.trim();
    const tr = items[num];
    if (!tr) return;
    if (tr.n) { const el = item.querySelector('.menu-item-name'); if (el) el.textContent = tr.n; }
    if (tr.d) { const el = item.querySelector('.menu-item-desc'); if (el) el.textContent = tr.d; }
  });

  /* 8. html lang attribute */
  document.documentElement.lang = lang;
}

/* --- Sticky Navbar --- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --- Mobile Menu --- */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* --- Menu Tab Groups & Category Filtering --- */
function initMenuTabs() {
  const groupBtns = document.querySelectorAll('.menu-tab-group-btn');
  const categoryTabs = document.querySelectorAll('.menu-tab');
  const categories = document.querySelectorAll('.menu-category');

  if (!groupBtns.length && !categoryTabs.length) return;

  // Group-level tabs (Thakali Kitchen vs Cross Sushi)
  groupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;

      // Update active group button
      groupBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show only tabs for this group
      categoryTabs.forEach(tab => {
        if (tab.dataset.group === group) {
          tab.style.display = '';
        } else {
          tab.style.display = 'none';
        }
      });

      // Click the first visible tab in the group
      const firstTab = document.querySelector(`.menu-tab[data-group="${group}"]`);
      if (firstTab) firstTab.click();
    });
  });

  // Category-level tabs
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;

      // Update active tab (within same group only)
      const group = tab.dataset.group;
      categoryTabs.forEach(t => {
        if (t.dataset.group === group) t.classList.remove('active');
      });
      tab.classList.add('active');

      // Show matching category
      categories.forEach(cat => {
        if (cat.dataset.category === category) {
          cat.classList.add('active');
        } else {
          cat.classList.remove('active');
        }
      });
    });
  });

  // Initialize: activate first group and first tab
  if (groupBtns.length) {
    groupBtns[0].click();
  } else if (categoryTabs.length) {
    categoryTabs[0].click();
  }
}

/* --- Scroll Reveal Animation --- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* --- Smooth Scroll for Anchor Links --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* --- Cookie Consent --- */
function initCookieConsent() {
  const banner = document.querySelector('.cookie-consent');
  if (!banner) return;

  const consent = localStorage.getItem('cookie-consent');
  if (consent) return; // Already responded

  // Show banner after a short delay
  setTimeout(() => {
    banner.classList.add('visible');
  }, 1500);

  banner.querySelector('.cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'accepted');
    banner.classList.remove('visible');
  });

  banner.querySelector('.cookie-decline')?.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'declined');
    banner.classList.remove('visible');
  });
}

/* --- Reservation System --- */
function initReservationSystem() {
  // EmailJS Configuration (replace with your actual values)
  const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

  const TIME_SLOTS = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  // DOM Elements
  const modal = document.getElementById('reservation-modal');
  const form = document.getElementById('reservation-form');
  const dateInput = document.getElementById('res-date');
  const timeslotGrid = document.getElementById('timeslot-grid');
  const timeslotHidden = document.getElementById('res-timeslot');
  const partySizeSelect = document.getElementById('res-party-size');
  const submitBtn = document.getElementById('reservation-submit');
  const formView = document.getElementById('reservation-form-view');
  const successView = document.getElementById('reservation-success-view');
  const errorView = document.getElementById('reservation-error-view');

  if (!modal || !form) return;

  let selectedSlot = null;

  // Initialize EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  // --- Modal Open/Close ---
  document.querySelectorAll('[data-open-reservation]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
      // Close mobile menu if open
      const hamburger = document.querySelector('.hamburger');
      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  document.querySelectorAll('[data-close-reservation]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function openModal() {
    resetForm();
    formView.style.display = '';
    successView.style.display = 'none';
    errorView.style.display = 'none';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    dateInput.value = '';
    dateInput.focus();
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // --- Date Change → Render Time Slots ---
  dateInput.addEventListener('change', () => {
    const selectedDate = dateInput.value;
    if (!selectedDate) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosen = new Date(selectedDate + 'T00:00:00');
    if (chosen < today) {
      showFieldError('res-date', 'Please select a future date');
      clearTimeslots();
      return;
    }

    clearFieldError('res-date');
    renderTimeslots(selectedDate);
  });

  function renderTimeslots(selectedDate) {
    timeslotGrid.innerHTML = '';
    selectedSlot = null;
    timeslotHidden.value = '';

    const now = new Date();
    const isToday = selectedDate === now.toISOString().split('T')[0];

    TIME_SLOTS.forEach(slot => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'timeslot-btn';
      btn.textContent = slot;

      let isPast = false;
      if (isToday) {
        const [hours, minutes] = slot.split(':').map(Number);
        const slotTime = new Date();
        slotTime.setHours(hours, minutes, 0, 0);
        isPast = slotTime <= now;
      }

      if (isPast) {
        btn.disabled = true;
      } else {
        btn.addEventListener('click', () => selectTimeslot(btn, slot));
      }

      timeslotGrid.appendChild(btn);
    });
  }

  function selectTimeslot(btn, slot) {
    timeslotGrid.querySelectorAll('.timeslot-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedSlot = slot;
    timeslotHidden.value = slot;
    clearFieldError('res-timeslot');
  }

  function clearTimeslots() {
    timeslotGrid.innerHTML = '<p class="timeslot-hint">Please select a date first</p>';
    selectedSlot = null;
    timeslotHidden.value = '';
  }

  // --- Form Validation ---
  function validateForm() {
    let valid = true;

    if (!dateInput.value) {
      showFieldError('res-date', 'Please select a date');
      valid = false;
    } else {
      clearFieldError('res-date');
    }

    if (!selectedSlot) {
      showFieldError('res-timeslot', 'Please select a time slot');
      valid = false;
    } else {
      clearFieldError('res-timeslot');
    }

    if (!partySizeSelect.value) {
      showFieldError('res-party', 'Please select party size');
      valid = false;
    } else {
      clearFieldError('res-party');
    }

    const name = document.getElementById('res-name').value.trim();
    if (!name || name.length < 2) {
      showFieldError('res-name', 'Please enter your name');
      valid = false;
    } else {
      clearFieldError('res-name');
    }

    const phone = document.getElementById('res-phone').value.trim();
    if (!phone || !/^[+]?[\d\s\-()]{7,}$/.test(phone)) {
      showFieldError('res-phone', 'Please enter a valid phone number');
      valid = false;
    } else {
      clearFieldError('res-phone');
    }

    const email = document.getElementById('res-email').value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFieldError('res-email', 'Please enter a valid email');
      valid = false;
    } else {
      clearFieldError('res-email');
    }

    return valid;
  }

  function showFieldError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + '-error');
    const inputEl = document.getElementById(fieldId);
    if (errorEl) errorEl.textContent = message;
    if (inputEl) inputEl.classList.add('invalid');
  }

  function clearFieldError(fieldId) {
    const errorEl = document.getElementById(fieldId + '-error');
    const inputEl = document.getElementById(fieldId);
    if (errorEl) errorEl.textContent = '';
    if (inputEl) inputEl.classList.remove('invalid');
  }

  // --- Form Submission ---
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = {
      date: dateInput.value,
      timeSlot: selectedSlot,
      partySize: partySizeSelect.value,
      name: document.getElementById('res-name').value.trim(),
      phone: document.getElementById('res-phone').value.trim(),
      email: document.getElementById('res-email').value.trim()
    };

    setSubmitLoading(true);

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: formatDateDisplay(data.date),
        timeSlot: data.timeSlot,
        partySize: data.partySize + (data.partySize === '1' ? ' Guest' : ' Guests'),
        submittedAt: new Date().toLocaleString('de-DE')
      });

      setSubmitLoading(false);
      showSuccess(data);
    } catch (err) {
      console.error('Reservation error:', err);
      setSubmitLoading(false);
      showError('Could not complete your reservation. Please try again or call us directly.');
    }
  });

  // --- UI Helpers ---
  function setSubmitLoading(loading) {
    submitBtn.disabled = loading;
    submitBtn.querySelector('.submit-text').style.display = loading ? 'none' : '';
    submitBtn.querySelector('.submit-loading').style.display = loading ? 'inline-flex' : 'none';
  }

  function showSuccess(data) {
    formView.style.display = 'none';
    errorView.style.display = 'none';
    successView.style.display = '';
    document.getElementById('success-details').textContent =
      data.name + ', party of ' + data.partySize + ' on ' + formatDateDisplay(data.date) + ' at ' + data.timeSlot;
  }

  function showError(message) {
    formView.style.display = 'none';
    successView.style.display = 'none';
    errorView.style.display = '';
    document.getElementById('error-message').textContent = message;
  }

  document.getElementById('retry-reservation').addEventListener('click', () => {
    errorView.style.display = 'none';
    formView.style.display = '';
  });

  function resetForm() {
    form.reset();
    selectedSlot = null;
    timeslotHidden.value = '';
    clearTimeslots();
    form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
    form.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    setSubmitLoading(false);
  }

  function formatDateDisplay(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }
}
