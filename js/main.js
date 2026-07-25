/* ============================================
   THAKALI KITCHEN — Main script (vanilla)
   ============================================ */

/* ===== External ordering (FoodAmigos) ===== */
const ORDER_URL = 'https://www.crosssushi-hamburg.de/speisekarte/crosssushi';
/* Contact used for mail links (swap here if the address/line changes) */
const CONTACT = { email: 'thakaliklitchen111@gmail.com' };

/* ===== i18n dictionary ===== */
const UI = {
  en: {
    'cta.book': 'Reserve a table', 'cta.order': 'Order online',
    'stamp.1': 'spiced', 'stamp.2': 'by hand', 'stamp.small': 'since 2018',
    'hero.eyebrow': 'EST. 2018 · HELLKAMP, HAMBURG',
    'hero.title.1': 'A taste of the', 'hero.title.accent': 'Annapurna', 'hero.title.2': 'kitchen.',
    'hero.hand': 'from our hearth to yours',
    'hero.sub': "Traditional Thakali thali, hand-folded Mo:Mo, and Cross Sushi — served on copper and clay in the heart of Eimsbüttel.",
    'hero.imgcap': 'Hand-folded Mo:Mo with tomato achar — fresh from the steamer',
    'hero.open': 'Open until 22:00',
    'story.eyebrow': '01 · OUR STORY',
    'story.title.1': 'Born in', 'story.title.accent': 'Mustang.', 'story.title.2': 'Grown in Hamburg.',
    'story.p': "Thakali Kitchen brings the cooking of the Thak Khola valley — buckwheat, yak butter, timur pepper — to a small cream-walled room on Hellkamp. Run by the Sherchan family since 2018.",
    'story.imgcap': 'Chilli chicken, mo:mo & sukuti — the table is set',
    'story.polaroid': 'our sign on Hellkamp',
    'story.c1.title': 'Family recipes', 'story.c1.p': "Aamaa's spice mixes, ground fresh weekly. Nothing comes from a jar.",
    'story.c2.title': 'Honest ingredients', 'story.c2.p': 'Local produce from Hamburg & surrounds, Himalayan grains and fresh fish.',
    'story.c3.title': 'Slow cooking', 'story.c3.p': 'Dal simmered eight hours. Mo:Mo skins rolled to order. No shortcuts.',
    'menu.eyebrow': '02 · OUR KITCHEN', 'menu.title.1': 'The', 'menu.title.accent': 'menu',
    'menu.sub': 'Over 170 dishes across three kitchens — from Thakali classics to Cross Sushi. Browse here, then order online for pickup or delivery.',
    'menu.chip.veg': 'Veg only', 'menu.chip.spicy': 'Spicy', 'menu.chip.glutenfree': 'Gluten-free',
    'menu.order': 'See full menu & order online',
    'menu.pop': 'Loved',
    'menu.sig.label': 'OUR BESTSELLER', 'menu.sig.imgcap': 'From our kitchen — torched salmon signature roll', 'menu.sig.add': 'Order online',
    'menu.items': 'items',
    'gallery.eyebrow': '03 · FROM THE KITCHEN', 'gallery.title.1': 'Inside the', 'gallery.title.accent': 'kitchen.',
    'gallery.cap.1': 'Maguro sashimi, freshly fanned',
    'gallery.cap.2': 'Sukuti — spiced, smoky, house-made',
    'gallery.cap.3': 'Cross avocado salad with pumpkin seeds',
    'gallery.cap.4': 'Thukpa — golden Himalayan noodle soup',
    'gallery.cap.5': 'Avocado ceviche with sesame',
    'gallery.cap.6': 'Salmon sashimi on shiso leaves',
    'gallery.cap.7': 'Thakali set on brass — Thak Khola style',
    'gallery.cap.8': 'Mo:Mo platter with jhol pot',
    'gallery.cap.9': 'Salmon-avocado maki',
    'gallery.cap.10': 'Sel roti with aloo curry — festival classic',
    'gallery.cap.11': 'The full table — chilli chicken, mo:mo & sukuti',
    'gallery.cap.12': 'Salmon hosomaki — simple & precise',
    'gallery.cap.13': 'Tuna-avocado maki — deep red & creamy',
    'gallery.cap.14': 'Maguro nigiri — pure & simple',
    'gallery.cap.15': 'Chicken curry, dal & rice — the thali up close',
    'reviews.eyebrow': '04 · GUEST FAVOURITES', 'reviews.title.1': 'What guests', 'reviews.title.accent': 'order most.',
    'reviews.cta.p': "Enjoyed your meal? We'd love a quick review on Google.",
    'reviews.cta.btn': 'Review us on Google',
    'book.eyebrow': '05 · RESERVATIONS', 'book.title.1': 'Hold a', 'book.title.accent': 'table.',
    'book.sub': 'We seat 32. Walk-ins welcome at the bar; book ahead for weekends.',
    'field.date': 'DATE', 'field.party': 'PARTY OF', 'field.time': 'TIME',
    'field.name': 'NAME', 'field.email': 'EMAIL', 'field.phone': 'PHONE', 'field.notes': 'NOTES (allergies, occasion)',
    'book.btn': 'Request reservation by email',
    'order.eyebrow': '06 · ORDER', 'order.title.1': 'Bring it', 'order.title.accent': 'home.',
    'order.sub': 'Order direct — no platform fees, loyalty points and faster service. Pickup or delivery.',
    'order.pickup.title': 'Pickup', 'order.pickup.info': 'Hellkamp 22 · ready in ~10–20 min',
    'order.delivery.title': 'Delivery', 'order.delivery.info': 'within ~4 km · freshly made',
    'order.btn': 'Order online now',
    'cater.eyebrow': '07 · CATERING', 'cater.title.1': 'For', 'cater.title.accent': 'gatherings.',
    'cater.label': 'EVENTS · 8 — 200 GUESTS',
    'cater.p': 'From eight-person dinners to weddings of a hundred. We bring the kitchen to you.',
    'cater.imgcap': 'Full Thakali set — rice, dal, curry and achars on brass',
    'cater.pkg1': 'Thali Feast', 'cater.pkg1.p': 'From €28 / head',
    'cater.pkg2': 'Mo:Mo Bar (live)', 'cater.pkg2.p': 'From €36 / head',
    'cater.pkg3': 'Full Banquet', 'cater.pkg3.p': 'From €54 / head',
    'cater.btn': 'Request a quote',
    'offers.eyebrow': '08 · GIFTS & REWARDS', 'offers.title.1': 'Gift &', 'offers.title.accent': 'collect.',
    'offers.gift.title': 'Gift cards',
    'offers.gift.p': 'Give a taste of the Himalayas. Gift cards in any amount — perfect for birthdays, celebrations and colleagues.',
    'offers.gift.btn': 'Buy a gift card',
    'offers.reward.title': 'Rewards club',
    'offers.reward.p': 'Earn on every online order: €5 back for every €50 spent — and unlock free dishes.',
    'offers.reward.btn': 'Join rewards',
    'faq.eyebrow': '09 · FAQ', 'faq.title.1': 'Good to', 'faq.title.accent': 'know.',
    'faq.q1': 'Do you deliver to me? What area?',
    'faq.a1': "We deliver in Eimsbüttel and around — roughly 4 km around Hellkamp. Enter your postcode when ordering online to check if you're covered.",
    'faq.q2': 'Do you have vegetarian & vegan dishes? What about allergies?',
    'faq.a2': "Yes — plenty of vegetarian and vegan options, from veggie Mo:Mo to veggie sushi rolls. Use the 'Veg only' filter in the menu to find them fast. For allergies, just ask — we're happy to advise.",
    'faq.q3': 'What are you known for?',
    'faq.a3': "Hand-folded Mo:Mo, the authentic Thakali set, and our Cross signature sushi rolls — above all the torched 'Premium Smoke Salmon Roll'. Plus Thai classics like duck in coconut milk.",
    'faq.q4': 'Can I reserve a table or book catering?',
    'faq.a4': 'Both, gladly. Reserve via the form above, or give us a call. For catering from 8 to 200 guests, just send us a quick request.',
    'contact.eyebrow': '10 · VISIT US', 'contact.title.1': 'Find us on', 'contact.title.accent': 'Hellkamp.',
    'contact.findus': 'Find us',
    'contact.addr': 'Hellkamp 22, 20255 Hamburg-Eimsbüttel',
    'contact.phonesub': 'For reservations & questions',
    'contact.emailsub': 'For private events',
    'contact.social': 'Follow us',
    'contact.hours': 'Opening hours',
    'contact.mapcap': 'Hellkamp 22 · Hamburg-Eimsbüttel',
    'footer.eyebrow': 'COME EAT WITH US',
    'footer.addr': 'Hellkamp 22 · 20255 Hamburg',
    'nav.label': 'NAVIGATE',
    'nav.about': 'Story', 'nav.menu': 'Menu', 'nav.reviews': 'Favourites', 'nav.book': 'Book', 'nav.order': 'Order',
    'nav.catering': 'Catering', 'nav.offers': 'Gifts', 'nav.faq': 'FAQ', 'nav.contact': 'Visit',
    'toast.book.name': 'Please add your name', 'toast.book.ok': 'Opening your email request …',
    'closed': 'Closed', 'all': 'All',
    'days': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  de: {
    'cta.book': 'Tisch reservieren', 'cta.order': 'Online bestellen',
    'stamp.1': 'von Hand', 'stamp.2': 'gewürzt', 'stamp.small': 'seit 2018',
    'hero.eyebrow': 'SEIT 2018 · HELLKAMP, HAMBURG',
    'hero.title.1': 'Ein Stück', 'hero.title.accent': 'Annapurna-', 'hero.title.2': 'Küche.',
    'hero.hand': 'von unserem Herd zu Ihnen',
    'hero.sub': 'Traditionelles Thakali-Thali, handgefaltete Mo:Mo und Cross Sushi — frisch zubereitet auf Kupfer und Ton, mitten in Eimsbüttel.',
    'hero.imgcap': 'Handgefaltete Mo:Mo mit Tomaten-Achar — frisch aus dem Dampf',
    'hero.open': 'Geöffnet bis 22:00',
    'story.eyebrow': '01 · UNSERE GESCHICHTE',
    'story.title.1': 'Geboren in', 'story.title.accent': 'Mustang.', 'story.title.2': 'Gewachsen in Hamburg.',
    'story.p': 'Thakali Kitchen bringt die Küche des Thak-Khola-Tals — Buchweizen, Yak-Butter, Timur-Pfeffer — in einen kleinen, cremefarbenen Raum am Hellkamp. Geführt von der Familie Sherchan seit 2018.',
    'story.imgcap': 'Chilli Chicken, Mo:Mo & Sukuti — der Tisch ist gedeckt',
    'story.polaroid': 'unser Schild am Hellkamp',
    'story.c1.title': 'Familienrezepte', 'story.c1.p': 'Aamaas Gewürzmischungen, wöchentlich frisch gemahlen. Nichts aus dem Glas.',
    'story.c2.title': 'Ehrliche Zutaten', 'story.c2.p': 'Regionale Produkte aus Hamburg & Umland, Himalaya-Getreide und frischer Fisch.',
    'story.c3.title': 'Langsames Kochen', 'story.c3.p': 'Dal acht Stunden geköchelt. Mo:Mo-Teig auf Bestellung gerollt. Keine Abkürzungen.',
    'menu.eyebrow': '02 · UNSERE KÜCHE', 'menu.title.1': 'Die', 'menu.title.accent': 'Karte',
    'menu.sub': 'Über 170 Gerichte aus drei Küchen — von Thakali-Klassikern bis Cross Sushi. Stöbern Sie hier und bestellen Sie online für Abholung oder Lieferung.',
    'menu.chip.veg': 'Nur vegetarisch', 'menu.chip.spicy': 'Scharf', 'menu.chip.glutenfree': 'Glutenfrei',
    'menu.order': 'Ganze Karte ansehen & online bestellen',
    'menu.pop': 'Beliebt',
    'menu.sig.label': 'UNSER BESTSELLER', 'menu.sig.imgcap': 'Aus unserer Küche — flambierte Lachs-Signature-Rolle', 'menu.sig.add': 'Online bestellen',
    'menu.items': 'Gerichte',
    'gallery.eyebrow': '03 · AUS DER KÜCHE', 'gallery.title.1': 'In der', 'gallery.title.accent': 'Küche.',
    'gallery.cap.1': 'Maguro-Sashimi — frisch aufgefächert',
    'gallery.cap.2': 'Sukuti — würzig, rauchig, hausgemacht',
    'gallery.cap.3': 'Cross Avocado-Salat mit Kürbiskernen',
    'gallery.cap.4': 'Thukpa — goldene Himalaya-Nudelsuppe',
    'gallery.cap.5': 'Avocado-Ceviche mit Sesam',
    'gallery.cap.6': 'Lachs-Sashimi auf Shiso-Blättern',
    'gallery.cap.7': 'Thakali-Set auf Messing — wie im Thak Khola',
    'gallery.cap.8': 'Mo:Mo-Teller mit Jhol-Topf',
    'gallery.cap.9': 'Lachs-Avocado-Maki',
    'gallery.cap.10': 'Sel Roti mit Aloo-Curry — Festtagsklassiker',
    'gallery.cap.11': 'Voller Tisch — Chilli Chicken, Mo:Mo & Sukuti',
    'gallery.cap.12': 'Lachs-Hosomaki — schlicht & präzise',
    'gallery.cap.13': 'Thunfisch-Avocado-Maki — tiefrot & cremig',
    'gallery.cap.14': 'Maguro-Nigiri — pur',
    'gallery.cap.15': 'Hühnercurry, Dal & Reis — das Thali im Detail',
    'reviews.eyebrow': '04 · GÄSTELIEBLINGE', 'reviews.title.1': 'Was am meisten', 'reviews.title.accent': 'bestellt wird.',
    'reviews.cta.p': 'Hat es dir geschmeckt? Wir freuen uns über deine Bewertung bei Google.',
    'reviews.cta.btn': 'Bei Google bewerten',
    'book.eyebrow': '05 · RESERVIERUNG', 'book.title.1': 'Tisch', 'book.title.accent': 'sichern.',
    'book.sub': 'Wir haben 32 Plätze. Walk-ins an der Bar willkommen; am Wochenende bitte vorbestellen.',
    'field.date': 'DATUM', 'field.party': 'GÄSTE', 'field.time': 'ZEIT',
    'field.name': 'NAME', 'field.email': 'E-MAIL', 'field.phone': 'TELEFON', 'field.notes': 'NOTIZEN (Allergien, Anlass)',
    'book.btn': 'Reservierung per E-Mail anfragen',
    'order.eyebrow': '06 · BESTELLEN', 'order.title.1': 'Nehmt es', 'order.title.accent': 'mit nach Hause.',
    'order.sub': 'Direkt bei uns bestellen — ohne Plattform-Gebühren, mit Treuepunkten und schnellem Service. Abholung oder Lieferung.',
    'order.pickup.title': 'Abholung', 'order.pickup.info': 'Hellkamp 22 · in ca. 10–20 Min. fertig',
    'order.delivery.title': 'Lieferung', 'order.delivery.info': 'im Umkreis von ca. 4 km · frische Zubereitung',
    'order.btn': 'Jetzt online bestellen',
    'cater.eyebrow': '07 · CATERING', 'cater.title.1': 'Für', 'cater.title.accent': 'besondere Anlässe.',
    'cater.label': 'EVENTS · 8 — 200 GÄSTE',
    'cater.p': 'Von Acht-Personen-Dinners bis zu Hochzeiten mit hundert Gästen. Wir bringen die Küche zu Ihnen.',
    'cater.imgcap': 'Komplettes Thakali-Set — Reis, Dal, Curry und Achars auf Messing',
    'cater.pkg1': 'Thali-Festmahl', 'cater.pkg1.p': 'Ab 28 € / Person',
    'cater.pkg2': 'Mo:Mo-Bar (live)', 'cater.pkg2.p': 'Ab 36 € / Person',
    'cater.pkg3': 'Volles Bankett', 'cater.pkg3.p': 'Ab 54 € / Person',
    'cater.btn': 'Angebot anfragen',
    'offers.eyebrow': '08 · GUTSCHEINE & TREUE', 'offers.title.1': 'Schenke &', 'offers.title.accent': 'sammle.',
    'offers.gift.title': 'Gutscheine',
    'offers.gift.p': 'Verschenke ein Stück Himalaya. Gutscheine in jeder Höhe — perfekt für Geburtstage, Feste und Kolleg:innen.',
    'offers.gift.btn': 'Gutschein kaufen',
    'offers.reward.title': 'Treueclub',
    'offers.reward.p': 'Sammle bei jeder Online-Bestellung: 5 € zurück für je 50 € Umsatz — und schalte kostenlose Gerichte frei.',
    'offers.reward.btn': 'Treueclub beitreten',
    'faq.eyebrow': '09 · HÄUFIGE FRAGEN', 'faq.title.1': 'Gut zu', 'faq.title.accent': 'wissen.',
    'faq.q1': 'Liefert ihr zu mir? In welchem Gebiet?',
    'faq.a1': 'Wir liefern in Eimsbüttel und Umgebung — im Umkreis von rund 4 km um den Hellkamp. Ob deine Adresse dabei ist, siehst du beim Online-Bestellen nach Eingabe der Postleitzahl.',
    'faq.q2': 'Habt ihr vegetarische & vegane Gerichte? Wie sieht es mit Allergien aus?',
    'faq.a2': 'Ja — viele vegetarische und vegane Optionen, vom Veggie-Mo:Mo bis zu Veggie-Sushi-Rollen. Mit dem Filter „Nur vegetarisch" oben in der Karte findest du sie schnell. Bei Allergien sprich uns bitte an, wir beraten dich gern.',
    'faq.q3': 'Wofür seid ihr bekannt?',
    'faq.a3': 'Für handgefaltete Mo:Mo, das authentische Thakali-Set und unsere Cross-Signature-Sushi-Rollen — allen voran der flambierte „Premium Smoke Salmon Roll". Dazu Thai-Klassiker wie Ente in Kokosmilch.',
    'faq.q4': 'Kann ich einen Tisch reservieren oder Catering buchen?',
    'faq.a4': 'Beides gern. Reserviere direkt über das Formular oben, oder ruf uns an. Für Catering von 8 bis 200 Gästen schick uns einfach eine kurze Anfrage.',
    'contact.eyebrow': '10 · BESUCH', 'contact.title.1': 'Findet uns am', 'contact.title.accent': 'Hellkamp.',
    'contact.findus': 'Adresse',
    'contact.addr': 'Hellkamp 22, 20255 Hamburg-Eimsbüttel',
    'contact.phonesub': 'Für Reservierungen & Fragen',
    'contact.emailsub': 'Für private Veranstaltungen',
    'contact.social': 'Folgt uns',
    'contact.hours': 'Öffnungszeiten',
    'contact.mapcap': 'Hellkamp 22 · Hamburg-Eimsbüttel',
    'footer.eyebrow': 'KOMMT ESSEN',
    'footer.addr': 'Hellkamp 22 · 20255 Hamburg',
    'nav.label': 'NAVIGATION',
    'nav.about': 'Geschichte', 'nav.menu': 'Karte', 'nav.reviews': 'Lieblinge', 'nav.book': 'Reservieren', 'nav.order': 'Bestellen',
    'nav.catering': 'Catering', 'nav.offers': 'Gutscheine', 'nav.faq': 'FAQ', 'nav.contact': 'Besuch',
    'toast.book.name': 'Bitte Namen eingeben', 'toast.book.ok': 'E-Mail-Anfrage wird geöffnet …',
    'closed': 'Geschlossen', 'all': 'Alle',
    'days': ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
  },
  ne: {
    'cta.book': 'टेबल बुक गर्नुहोस्', 'cta.order': 'अनलाइन अर्डर',
    'stamp.1': 'हातले', 'stamp.2': 'मसाला', 'stamp.small': '२०१८ देखि',
    'hero.eyebrow': 'स्थापित २०१८ · हेल्काम्प, हाम्बुर्ग',
    'hero.title.1': 'हाम्रो', 'hero.title.accent': 'अन्नपूर्ण', 'hero.title.2': 'भान्साको स्वाद।',
    'hero.hand': 'हाम्रो चुलोबाट तपाईंसम्म',
    'hero.sub': 'परम्परागत थकाली थाली, हातले बनाएको म:म र क्रस सुसी — आइम्सब्युटेलको हृदयमा।',
    'hero.imgcap': 'हातले बनाएको म:म, गोलभेँडाको अचारसँग — भापबाट सिधै',
    'hero.open': '२२:०० सम्म खुला',
    'story.eyebrow': '०१ · हाम्रो कथा',
    'story.title.1': 'मुस्ताङमा', 'story.title.accent': 'जन्मेको।', 'story.title.2': 'हाम्बुर्गमा हुर्केको।',
    'story.p': 'थकाली किचनले थक खोला उपत्यकाको खाना — फापर, याक मक्खन, टिमुर — हेल्काम्पको सानो कोठामा ल्याउँछ। २०१८ देखि शेर्चन परिवारद्वारा सञ्चालित।',
    'story.imgcap': 'चिल्ली चिकेन, म:म र सुकुटी — टेबल तयार छ',
    'story.polaroid': 'हेल्काम्पमा हाम्रो साइनबोर्ड',
    'story.c1.title': 'पारिवारिक भान्सा', 'story.c1.p': 'आमाको मसाला, हरेक हप्ता ताजा पिँधिएको।',
    'story.c2.title': 'इमानदार सामग्री', 'story.c2.p': 'स्थानीय हाम्बुर्गको उत्पादन, हिमाली अन्न र ताजा माछा।',
    'story.c3.title': 'बिस्तारै पकाइ', 'story.c3.p': 'दाल आठ घण्टा। म:मको छाला अर्डरमा बेलिन्छ।',
    'menu.eyebrow': '०२ · हाम्रो भान्सा', 'menu.title.1': 'हाम्रो', 'menu.title.accent': 'मेनु',
    'menu.sub': 'तीन भान्साका १७० भन्दा बढी परिकार — थकाली देखि क्रस सुसीसम्म। यहाँ हेर्नुहोस्, अनि पिकअप वा डेलिभरीका लागि अनलाइन अर्डर गर्नुहोस्।',
    'menu.chip.veg': 'शाकाहारी मात्र', 'menu.chip.spicy': 'पिरो', 'menu.chip.glutenfree': 'ग्लुटेन-रहित',
    'menu.order': 'पूरै मेनु हेर्नुहोस् र अनलाइन अर्डर गर्नुहोस्',
    'menu.pop': 'लोकप्रिय',
    'menu.sig.label': 'हाम्रो बेस्टसेलर', 'menu.sig.imgcap': 'हाम्रो भान्साबाट — फ्ल्याम्बे सामन सिग्नेचर रोल', 'menu.sig.add': 'अनलाइन अर्डर गर्नुहोस्',
    'menu.items': 'परिकार',
    'gallery.eyebrow': '०३ · भान्साबाट', 'gallery.title.1': 'भान्साभित्र', 'gallery.title.accent': 'एक झलक।',
    'gallery.cap.1': 'मागुरो (टुना) सासिमी — ताजा काटिएको',
    'gallery.cap.2': 'सुकुटी — पिरो र धुवाँदार',
    'gallery.cap.3': 'क्रस एभोकाडो सलाद, कद्दूको बीउसहित',
    'gallery.cap.4': 'थुक्पा — सुनौलो हिमाली नूडल सुप',
    'gallery.cap.5': 'एभोकाडो सेभिचे, तिलसँग',
    'gallery.cap.6': 'सामन सासिमी, शिसो पातमा',
    'gallery.cap.7': 'पित्तलको थालीमा थकाली सेट',
    'gallery.cap.8': 'म:म थाल र झोल',
    'gallery.cap.9': 'सामन-एभोकाडो माकी',
    'gallery.cap.10': 'सेल रोटी र आलु करी — चाडपर्वको स्वाद',
    'gallery.cap.11': 'भरिभराउ टेबल — चिल्ली चिकेन, म:म र सुकुटी',
    'gallery.cap.12': 'सामन होसोमाकी — सरल र सफा',
    'gallery.cap.13': 'टुना-एभोकाडो माकी — गाढा रातो र क्रिमी',
    'gallery.cap.14': 'मागुरो निगिरी — शुद्ध स्वाद',
    'gallery.cap.15': 'कुखुराको करी, दाल र भात — थाली नजिकबाट',
    'reviews.eyebrow': '०४ · ग्राहकका मनपर्ने', 'reviews.title.1': 'सबैभन्दा धेरै', 'reviews.title.accent': 'मगाइने परिकार।',
    'reviews.cta.p': 'मीठो लाग्यो? गुगलमा समीक्षा दिनुभयो भने खुसी हुनेछौं।',
    'reviews.cta.btn': 'गुगलमा समीक्षा दिनुहोस्',
    'book.eyebrow': '०५ · आरक्षण', 'book.title.1': 'टेबल', 'book.title.accent': 'राख्नुहोस्।',
    'book.sub': 'हामी ३२ जनासम्म सीट गर्छौं। शुक्रवार र शनिबार अग्रिम बुकिङ राम्रो।',
    'field.date': 'मिति', 'field.party': 'मानिस', 'field.time': 'समय',
    'field.name': 'नाम', 'field.email': 'इमेल', 'field.phone': 'फोन', 'field.notes': 'टिप्पणी',
    'book.btn': 'इमेलबाट आरक्षण अनुरोध',
    'order.eyebrow': '०६ · अर्डर', 'order.title.1': 'घरमै', 'order.title.accent': 'लानुहोस्।',
    'order.sub': 'सिधै हामीसँग अर्डर गर्नुहोस् — कुनै प्लेटफर्म शुल्क छैन, इनाम अंक र छिटो सेवा। पिकअप वा डेलिभरी।',
    'order.pickup.title': 'पिकअप', 'order.pickup.info': 'हेल्काम्प २२ · ~१०–२० मिनेटमा तयार',
    'order.delivery.title': 'डेलिभरी', 'order.delivery.info': '~४ किमी भित्र · ताजा पकाइएको',
    'order.btn': 'अहिले नै अनलाइन अर्डर गर्नुहोस्',
    'cater.eyebrow': '०७ · केटरिङ', 'cater.title.1': 'ठूला', 'cater.title.accent': 'जमघटका लागि।',
    'cater.label': 'कार्यक्रम · ८ — २०० जना',
    'cater.p': 'आठ जनाको खानादेखि सय जनाको विवाहसम्म। हामी भान्सा तपाईंकहाँ ल्याउँछौं।',
    'cater.imgcap': 'पूरा थकाली सेट — भात, दाल, मासु र अचार पित्तलको थालीमा',
    'cater.pkg1': 'थाली भोज', 'cater.pkg1.p': '€२८ / जना देखि',
    'cater.pkg2': 'म:म बार (लाइभ)', 'cater.pkg2.p': '€३६ / जना देखि',
    'cater.pkg3': 'पूर्ण भोज', 'cater.pkg3.p': '€५४ / जना देखि',
    'cater.btn': 'मूल्य सोध्नुहोस्',
    'offers.eyebrow': '०८ · उपहार र इनाम', 'offers.title.1': 'उपहार दिनुहोस्', 'offers.title.accent': 'अंक जोड्नुहोस्।',
    'offers.gift.title': 'उपहार कार्ड',
    'offers.gift.p': 'हिमालको स्वाद उपहार दिनुहोस्। जुनसुकै रकमको उपहार कार्ड — जन्मदिन, चाडपर्व र सहकर्मीका लागि उत्तम।',
    'offers.gift.btn': 'उपहार कार्ड किन्नुहोस्',
    'offers.reward.title': 'इनाम क्लब',
    'offers.reward.p': 'हरेक अनलाइन अर्डरमा कमाउनुहोस्: प्रत्येक ५० € खर्चमा ५ € फिर्ता — र नि:शुल्क परिकार पाउनुहोस्।',
    'offers.reward.btn': 'क्लबमा सामेल हुनुहोस्',
    'faq.eyebrow': '०९ · प्रश्नहरू', 'faq.title.1': 'जान्न', 'faq.title.accent': 'राम्रो।',
    'faq.q1': 'तपाईं मकहाँ डेलिभरी गर्नुहुन्छ? कुन क्षेत्रमा?',
    'faq.a1': 'हामी आइम्सब्युटेल र वरपर — हेल्काम्पको करिब ४ किमी भित्र डेलिभरी गर्छौं। अनलाइन अर्डर गर्दा पोस्टकोड हालेर आफ्नो ठेगाना समेटिएको छ कि छैन हेर्नुहोस्।',
    'faq.q2': 'तपाईंसँग शाकाहारी र भेगन परिकार छन्? एलर्जीको के हुन्छ?',
    'faq.a2': 'छन् — भेजी म:म देखि भेजी सुसी रोलसम्म धेरै शाकाहारी र भेगन विकल्प। मेनुमा भएको „शाकाहारी मात्र" फिल्टरले छिट्टै भेट्टाउनुहुन्छ। एलर्जी भए हामीलाई सोध्नुहोस्, खुसीसाथ सल्लाह दिन्छौं।',
    'faq.q3': 'तपाईं केका लागि प्रसिद्ध हुनुहुन्छ?',
    'faq.a3': 'हातले बनाएको म:म, प्रामाणिक थकाली सेट, र हाम्रा क्रस सिग्नेचर सुसी रोल — विशेषगरी फ्ल्याम्बे „प्रिमियम स्मोक सामन रोल"। साथै नरिवलको दूधमा हाँस जस्ता थाई क्लासिक।',
    'faq.q4': 'म टेबल आरक्षण वा केटरिङ बुक गर्न सक्छु?',
    'faq.a4': 'दुवै हुन्छ। माथिको फारमबाट आरक्षण गर्नुहोस्, वा हामीलाई फोन गर्नुहोस्। ८ देखि २०० जनासम्मको केटरिङका लागि छोटो अनुरोध पठाउनुहोस्।',
    'contact.eyebrow': '१० · सम्पर्क', 'contact.title.1': 'हेल्काम्पमा', 'contact.title.accent': 'भेटौं।',
    'contact.findus': 'ठेगाना',
    'contact.addr': 'हेल्काम्प २२, २०२५५ हाम्बुर्ग-आइम्सब्युटेल',
    'contact.phonesub': 'आरक्षण र प्रश्नका लागि',
    'contact.emailsub': 'निजी कार्यक्रमका लागि',
    'contact.social': 'हामीलाई फलो गर्नुहोस्',
    'contact.hours': 'खुला समय',
    'contact.mapcap': 'हेल्काम्प २२ · हाम्बुर्ग-आइम्सब्युटेल',
    'footer.eyebrow': 'हामीसँग खानुहोस्',
    'footer.addr': 'हेल्काम्प २२ · २०२५५ हाम्बुर्ग',
    'nav.label': 'नेविगेसन',
    'nav.about': 'कथा', 'nav.menu': 'मेनु', 'nav.reviews': 'लोकप्रिय', 'nav.book': 'बुकिङ', 'nav.order': 'अर्डर',
    'nav.catering': 'केटरिङ', 'nav.offers': 'उपहार', 'nav.faq': 'प्रश्न', 'nav.contact': 'सम्पर्क',
    'toast.book.name': 'नाम लेख्नुहोस्', 'toast.book.ok': 'इमेल अनुरोध खुल्दै …',
    'closed': 'बन्द', 'all': 'सबै',
    'days': ['सो', 'मं', 'बु', 'बि', 'शु', 'श', 'आ'],
  },
};

/* ===== State ===== */
const state = {
  lang: 'de',
  group: null,         // active menu group slug
  category: 'all',     // active category slug or 'all'
  vegOnly: false,
  party: 2,
  time: '19:30',
};

/* ===== Helpers ===== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const t = (key) => UI[state.lang][key] ?? UI.en[key] ?? key;
const fmt = (n) => '€' + n.toFixed(2);

function applyI18n() {
  document.documentElement.lang = state.lang === 'ne' ? 'ne' : state.lang;
  document.body.classList.toggle('lang-ne', state.lang === 'ne');
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (typeof val === 'string') el.textContent = val;
  });
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  state.group = (window.MENU_DATA[0] && window.MENU_DATA[0].group) || 'thakali';

  initLanguagePill();
  initNavDrawer();
  initMenu();
  initVegChip();
  initReservation();
  initHours();
  applyI18n();
  renderSignature();
  renderMenu();
  renderFavourites();
});

/* ===== Language ===== */
function initLanguagePill() {
  $$('.lang-pill button').forEach(btn => {
    btn.addEventListener('click', () => {
      state.lang = btn.dataset.lang;
      $$('.lang-pill button').forEach(b => b.classList.toggle('active', b === btn));
      applyI18n();
      renderSignature();
      renderMenu();
      renderFavourites();
      renderTimePills();
      renderHours();
    });
  });
}

/* ===== Nav drawer ===== */
function openDrawer(el) {
  el.classList.add('open');
  document.body.classList.add('drawer-open');
}
function closeDrawer(el) {
  el.classList.remove('open');
  document.body.classList.remove('drawer-open');
}

function initNavDrawer() {
  const drawer = $('#navDrawer');
  $('#navToggle').addEventListener('click', () => openDrawer(drawer));
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer || e.target.closest('[data-close-drawer]') || e.target.closest('.nav-link')) {
      closeDrawer(drawer);
    }
  });
}

/* ===== Menu ===== */
function initMenu() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      $$('.drawer-scrim.open').forEach(closeDrawer);
    }
  });
}

function activeGroup() {
  return window.MENU_DATA.find(g => g.group === state.group);
}

function renderGroupTabs() {
  const wrap = $('#menuGroupTabs');
  wrap.innerHTML = window.MENU_DATA.map(g => `
    <button class="group-tab ${g.group === state.group ? 'active' : ''}" data-group="${g.group}" type="button">
      ${g.groupLabel[state.lang] || g.groupLabel.de}
    </button>
  `).join('');
  $$('.group-tab', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      state.group = btn.dataset.group;
      state.category = 'all';
      renderMenu();
    });
  });
}

function renderCategoryTabs() {
  const group = activeGroup();
  if (!group) return;
  const wrap = $('#menuTabs');
  const tabs = [{ slug: 'all', label: t('all') }].concat(
    group.categories.map(c => ({ slug: c.slug, label: c.label[state.lang] || c.label.de }))
  );
  wrap.innerHTML = tabs.map(tab => `
    <button class="${tab.slug === state.category ? 'active' : ''}" data-cat="${tab.slug}" type="button">
      ${tab.label}
    </button>
  `).join('');
  $$('button', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      state.category = btn.dataset.cat;
      renderMenu();
    });
  });
}

function isVegItem(item) {
  return (item.badges || []).some(b => b === 'vegetarian' || b === 'vegan');
}

function itemBadges(item) {
  const tags = [];
  if (item.pop) {
    tags.push(`<span class="pop-badge"><svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/></svg>#${item.pop} ${t('menu.pop')}</span>`);
  }
  if (isVegItem(item)) tags.push('<span class="tag veg">veg</span>');
  if ((item.badges || []).includes('spicy')) tags.push('<span class="tag spicy">spicy</span>');
  return tags.join('');
}

function priceHtml(item) {
  const was = item.was ? `<span class="was">${fmt(item.was)}</span>` : '';
  return `${was}${fmt(item.price)}`;
}

function renderMenu() {
  renderGroupTabs();
  renderCategoryTabs();

  const group = activeGroup();
  const list = $('#menuList');
  if (!group) { list.innerHTML = ''; return; }

  const cats = state.category === 'all'
    ? group.categories
    : group.categories.filter(c => c.slug === state.category);

  list.innerHTML = cats.map(cat => {
    const items = cat.items.filter(it => !state.vegOnly || isVegItem(it));
    if (!items.length) return '';
    return `
      <div class="menu-section">
        <div class="menu-section-head">
          <h3>${cat.label[state.lang] || cat.label.de}</h3>
        </div>
        <div class="menu-section-sub">${items.length} ${t('menu.items')}</div>
        <div class="dish-list${items.length >= 5 ? ' cols' : ''}">
        ${items.map(item => {
          const badges = itemBadges(item);
          return `
            <div class="dish">
              <div class="dish-num">${item.num}</div>
              <div class="dish-body">
                <div class="dish-title-row">
                  <h4>${escapeHtml(item.name)}</h4>
                  <span class="dish-dots"></span>
                  <span class="dish-price">${priceHtml(item)}</span>
                </div>
                ${item.desc ? `<div class="dish-desc">${escapeHtml(item.desc)}</div>` : ''}
                ${badges ? `<div class="dish-tags">${badges}</div>` : ''}
              </div>
            </div>
          `;
        }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function initVegChip() {
  $('#vegChip').addEventListener('click', () => {
    state.vegOnly = !state.vegOnly;
    $('#vegChip').classList.toggle('on', state.vegOnly);
    renderMenu();
  });
}

/* ===== Signature dish (features the #1 bestseller) ===== */
function renderSignature() {
  const all = window.MENU_DATA.flatMap(g => g.categories.flatMap(c =>
    c.items.map(it => ({ ...it, cat: c, group: g.group }))
  ));
  if (!all.length) return;
  const pick = all.find(it => it.pop === 1) || all[0];
  const card = $('#signatureCard');
  card.innerHTML = `
    <div class="eyebrow" style="color:var(--mustard)">${t('menu.sig.label')}</div>
    <h3 style="margin-top:6px">${escapeHtml(pick.name)}</h3>
    ${pick.desc ? `<div class="sig-desc">${escapeHtml(pick.desc)}</div>` : ''}
    <div class="imgph">
      <img src="images/signature-flambe-roll.jpg" alt="${escapeHtml(pick.name)}" loading="lazy"/>
      <span class="imgph-tag">PHOTO · 16:10</span>
      <span class="imgph-cap">${t('menu.sig.imgcap')}</span>
    </div>
    <div class="sig-foot">
      <span class="sig-price">${priceHtml(pick)}</span>
      <a class="btn btn-terra" href="${ORDER_URL}" target="_blank" rel="noopener" style="flex:0 0 auto; padding:10px 16px">${t('menu.sig.add')}</a>
    </div>
  `;
}

/* ===== Guest favourites (real most-ordered data) ===== */
function renderFavourites() {
  const grid = $('#favGrid');
  if (!grid) return;
  const favs = window.MENU_DATA.flatMap(g => g.categories.flatMap(c =>
    c.items.filter(it => it.pop).map(it => ({ ...it, catLabel: c.label }))
  )).sort((a, b) => a.pop - b.pop).slice(0, 6);

  grid.innerHTML = favs.map(it => `
    <div class="fav-card">
      <span class="fav-rank">#${it.pop}</span>
      <div>
        <div class="fav-name">${escapeHtml(it.name)}</div>
        <div class="fav-cat">${it.catLabel[state.lang] || it.catLabel.de}</div>
      </div>
    </div>
  `).join('');
}

/* ===== Reservation (opens a prefilled email) ===== */
const TIME_SLOTS = ['17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
const DISABLED_TIMES = ['18:30', '20:00'];

function initReservation() {
  const d = new Date(); d.setDate(d.getDate() + 1);
  const iso = d.toISOString().slice(0, 10);
  $('#resDate').value = iso;

  $('#partyMinus').addEventListener('click', () => {
    state.party = Math.max(1, state.party - 1);
    $('#partyNum').textContent = state.party;
  });
  $('#partyPlus').addEventListener('click', () => {
    state.party = Math.min(12, state.party + 1);
    $('#partyNum').textContent = state.party;
  });

  renderTimePills();

  $('#reservationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = (fd.get('name') || '').toString().trim();
    if (!name) { pushToast(t('toast.book.name')); return; }
    const date = fd.get('date');
    const email = (fd.get('email') || '').toString().trim();
    const phone = (fd.get('phone') || '').toString().trim();
    const notes = (fd.get('notes') || '').toString().trim();

    const subject = `Reservierung / Reservation — ${name} — ${date} ${state.time}`;
    const body = [
      `${t('field.date')}: ${date}`,
      `${t('field.time')}: ${state.time}`,
      `${t('field.party')}: ${state.party}`,
      `${t('field.name')}: ${name}`,
      email ? `${t('field.email')}: ${email}` : null,
      phone ? `${t('field.phone')}: ${phone}` : null,
      notes ? `${t('field.notes')}: ${notes}` : null,
    ].filter(Boolean).join('\n');

    pushToast(t('toast.book.ok'));
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function renderTimePills() {
  const wrap = $('#timePills');
  wrap.innerHTML = TIME_SLOTS.map(tm => {
    const disabled = DISABLED_TIMES.includes(tm);
    const on = tm === state.time;
    return `<button class="time-pill ${on ? 'on' : ''} ${disabled ? 'disabled' : ''}" type="button" ${disabled ? 'disabled' : ''} data-time="${tm}">${tm}</button>`;
  }).join('');
  $$('button', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      state.time = btn.dataset.time;
      renderTimePills();
    });
  });
}

/* ===== Hours ===== */
/* NOTE: placeholder hours (from the live Impressum) — replace with the confirmed Hellkamp hours. */
const HOURS = [
  '12:00–15:00 · 17:00–22:00', // Mon
  '12:00–15:00 · 17:00–22:00', // Tue
  '12:00–15:00 · 17:00–22:00', // Wed
  '12:00–15:00 · 17:00–22:00', // Thu
  '12:00–15:00 · 17:00–22:00', // Fri
  '14:00–22:00',               // Sat
  '14:00–22:00',               // Sun
];
function initHours() { renderHours(); }
function renderHours() {
  const grid = $('#hoursGrid');
  if (!grid) return;
  const todayIdx = (new Date().getDay() + 6) % 7; // Mon=0
  const days = UI[state.lang].days;
  grid.innerHTML = days.map((d, i) => {
    const time = HOURS[i] === 'closed' ? t('closed') : HOURS[i];
    const today = i === todayIdx ? 'today' : '';
    return `<div class="day ${today}">${d}${today ? ' ·' : ''}</div><div class="time ${today}">${time}</div>`;
  }).join('');
}

/* ===== Toasts ===== */
function pushToast(msg) {
  const wrap = $('#toastWrap');
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 2500);
}

/* ===== Escape helpers ===== */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}
