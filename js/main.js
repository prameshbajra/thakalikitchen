/* ============================================
   THAKALI KITCHEN — Main script (vanilla)
   ============================================ */

/* ===== External ordering (FoodAmigos) ===== */
const ORDER_URL = 'https://www.crosssushi-hamburg.de/speisekarte/crosssushi';

/* ===== i18n dictionary ===== */
const UI = {
  en: {
    'cta.book': 'Reserve a table', 'cta.order': 'Order online',
    'stamp.1': 'spiced', 'stamp.2': 'by hand', 'stamp.small': 'since 2014',
    'hero.eyebrow': 'EST. 2014 · HELLKAMP, HAMBURG',
    'hero.title.1': 'A taste of the', 'hero.title.accent': 'Annapurna', 'hero.title.2': 'kitchen.',
    'hero.hand': 'from our hearth to yours',
    'hero.sub': "Traditional Thakali thali, hand-folded Mo:Mo, and Cross Sushi — served on copper and clay in the heart of Eimsbüttel.",
    'hero.imgcap': 'Hand-folded Mo:Mo with tomato achar — fresh from the steamer',
    'hero.open.now': 'Open until {t}', 'hero.open.today': 'Opens today at {t}', 'hero.open.next': 'Opens {d} at {t}',
    'story.eyebrow': '01 · OUR STORY',
    'story.title.1': 'Born in', 'story.title.accent': 'Mustang.', 'story.title.2': 'Grown in Hamburg.',
    'story.p': "Thakali Kitchen brings the cooking of the Thak Khola valley — buckwheat, yak butter, timur pepper — to a small cream-walled room on Hellkamp. Run by the Sherchan family since 2014.",
    'story.imgcap': 'Chilli chicken, mo:mo & sukuti — the table is set',
    'story.polaroid': 'our sign on Hellkamp',
    'story.c1.title': 'Family recipes', 'story.c1.p': "Aamaa's spice mixes, ground fresh weekly. Nothing comes from a jar.",
    'story.c2.title': 'Honest ingredients', 'story.c2.p': 'Local produce from Hamburg & surrounds, Himalayan grains and fresh fish.',
    'story.c3.title': 'Slow cooking', 'story.c3.p': 'Dal simmered eight hours. Mo:Mo skins rolled to order. No shortcuts.',
    'menu.eyebrow': '02 · OUR KITCHEN', 'menu.title.1': 'The', 'menu.title.accent': 'menu',
    'menu.sub': 'All {n} dishes across four kitchens — Thakali, Cross Sushi, Asian and the bar. Browse here, then order online for pickup or delivery.',
    'menu.chip.veg': 'Veg only', 'menu.chip.spicy': 'Spicy',
    'menu.order': 'See full menu & order online',
    'menu.pop': 'Loved',
    'menu.hint': 'Tap a dish for its photo, allergens and spice level.',
    'legend.title': 'Allergens & additives',
    'legend.allergens': 'Allergens', 'legend.additives': 'Additives',
    'sheet.num': 'No.', 'sheet.prices': 'Prices',
    'sheet.none': 'No allergen letter is printed for this dish.',
    'sheet.advice': 'The letters come from the printed menu; the spice level is our kitchen’s guide. Please tell us about any allergy or intolerance — we are glad to advise.',
    'price.from': 'from {p}',
    'spice.1': 'mildly spicy', 'spice.2': 'spicy',
    'menu.sig.label': 'OUR BESTSELLER', 'menu.sig.imgcap': 'From our kitchen — torched salmon signature roll', 'menu.sig.add': 'Order online',
    'menu.items': 'items', 'menu.drinks': 'drinks',
    'gallery.eyebrow': '03 · FROM THE KITCHEN', 'gallery.title.1': 'Inside the', 'gallery.title.accent': 'kitchen.',
    'gallery.cap.1': 'Maguro sashimi, freshly fanned',
    'gallery.cap.2': 'Sukuti — spiced, smoky, house-made',
    'gallery.cap.3': 'Cross avocado salad with pumpkin seeds',
    'gallery.cap.4': 'Thukpa — golden Himalayan noodle soup',
    'gallery.cap.5': 'Red Power Roll — avocado and beetroot',
    'gallery.cap.6': 'Salmon sashimi on shiso leaves',
    'gallery.cap.7': 'Thakali set on brass — Thak Khola style',
    'gallery.cap.8': 'Mo:Mo platter with jhol pot',
    'gallery.cap.9': 'Salmon-avocado maki',
    'gallery.cap.10': 'Sel roti with aloo curry — festival classic',
    'gallery.cap.11': 'The full table — chilli chicken, mo:mo & sukuti',
    'gallery.cap.12': 'Salmon hosomaki — simple & precise',
    'gallery.cap.13': 'Tuna-avocado maki — deep red & creamy',
    'gallery.cap.14': 'Maguro nigiri — pure & simple',
    'gallery.cap.15': 'Curry, dal & rice — the thali up close',
    'reviews.eyebrow': '04 · GUEST FAVOURITES', 'reviews.title.1': 'What guests', 'reviews.title.accent': 'order most.',
    'reviews.cta.p': "Enjoyed your meal? We'd love a quick review on Google.",
    'reviews.cta.btn': 'Review us on Google',
    'reviews.google.label': 'Google rating',
    'reviews.google.count': '463 reviews · as of July 2026',
    'reviews.google.all': 'See all Google reviews',
    'reviews.google.4months': 'Google · 4 months ago',
    'reviews.google.3months': 'Google · 3 months ago',
    'book.eyebrow': '05 · RESERVATIONS', 'book.title.1': 'Hold a', 'book.title.accent': 'table.',
    'book.sub': 'We seat 32. Walk-ins welcome at the bar; book ahead for weekends.',
    'book.noSlots': 'No reservation times are available on this date.',
    'field.date': 'DATE', 'field.party': 'PARTY OF', 'field.time': 'TIME',
    'field.name': 'NAME', 'field.email': 'EMAIL', 'field.phone': 'PHONE', 'field.notes': 'NOTES (allergies, occasion)',
    'book.btn': 'Request a reservation',
    'book.seats': 'seats in the room', 'book.call': 'or call us',
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
    'cater.f.date': 'PREFERRED DATE', 'cater.f.guests': 'GUESTS',
    'cater.f.occasion': 'OCCASION', 'cater.f.msg': 'MESSAGE',
    'cater.ph.occasion': 'Wedding, company party …',
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
    'faq.a3': "Hand-folded Mo:Mo, the authentic Thakali set, and our Cross signature sushi rolls — above all the torched 'Premium Smoke Salmon Roll'. Plus Thai classics like crispy Cross duck teriyaki.",
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
    'toast.book.name': 'Please add your name',
    'toast.form.contact': 'Please add an email address or phone number',
    'toast.form.sending': 'Sending your request …',
    'toast.book.sent': 'Thank you! We will confirm your table shortly.',
    'toast.book.invalid': 'Please choose a valid date and an opening-hours time.',
    'toast.cater.sent': 'Thank you! We will send you a quote shortly.',
    'toast.form.fail': 'Could not send — please call +49 160 8176707',
    'toast.form.rate': 'Too many requests — please wait a moment.',
    'closed': 'Closed', 'all': 'All',
    'days': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    'meta.title': 'Nepalese Restaurant Hamburg | Thakali Kitchen',
    'meta.desc': 'Authentic Nepalese restaurant in Hamburg-Eimsbüttel: handmade Mo:Mo, Thakali thali, sushi and Thai food. Reserve, collect or order delivery.',
    'a11y.navopen': 'Open menu', 'a11y.close': 'Close', 'a11y.mainnav': 'Main navigation',
    'a11y.footernav': 'Footer navigation', 'a11y.langsel': 'Choose language',
    'a11y.less': 'Fewer guests', 'a11y.more': 'More guests',
    'ph.name': 'Maya Sherchan', 'ph.email': 'you@email.com', 'ph.phone': '+49 ...',
    'tag.photo': 'PHOTO', 'tag.map': 'MAP',
    'tag.veg': 'veg', 'tag.spicy': 'spicy',
    'legal.impressum': 'Imprint', 'legal.privacy': 'Privacy',
    'footer.namaste.1': 'Namaste,', 'footer.namaste.2': 'Hamburg.',
    'map.consent.p': 'Loading the map sends data to Google. See our privacy notice for details.',
    'map.consent.btn': 'Load map', 'map.consent.alt': 'Open in Google Maps instead',
    'map.title': 'Map — Thakali Kitchen, Hellkamp 22, Hamburg',
  },
  de: {
    'cta.book': 'Tisch reservieren', 'cta.order': 'Online bestellen',
    'stamp.1': 'von Hand', 'stamp.2': 'gewürzt', 'stamp.small': 'seit 2014',
    'hero.eyebrow': 'SEIT 2014 · HELLKAMP, HAMBURG',
    'hero.title.1': 'Ein Stück', 'hero.title.accent': 'Annapurna-', 'hero.title.2': 'Küche.',
    'hero.hand': 'von unserem Herd zu Ihnen',
    'hero.sub': 'Traditionelles Thakali-Thali, handgefaltete Mo:Mo und Cross Sushi — frisch zubereitet auf Kupfer und Ton, mitten in Eimsbüttel.',
    'hero.imgcap': 'Handgefaltete Mo:Mo mit Tomaten-Achar — frisch aus dem Dampf',
    'hero.open.now': 'Geöffnet bis {t}', 'hero.open.today': 'Öffnet heute um {t}', 'hero.open.next': 'Öffnet {d} um {t}',
    'story.eyebrow': '01 · UNSERE GESCHICHTE',
    'story.title.1': 'Geboren in', 'story.title.accent': 'Mustang.', 'story.title.2': 'Gewachsen in Hamburg.',
    'story.p': 'Thakali Kitchen bringt die Küche des Thak-Khola-Tals — Buchweizen, Yak-Butter, Timur-Pfeffer — in einen kleinen, cremefarbenen Raum am Hellkamp. Geführt von der Familie Sherchan seit 2014.',
    'story.imgcap': 'Chilli Chicken, Mo:Mo & Sukuti — der Tisch ist gedeckt',
    'story.polaroid': 'unser Schild am Hellkamp',
    'story.c1.title': 'Familienrezepte', 'story.c1.p': 'Aamaas Gewürzmischungen, wöchentlich frisch gemahlen. Nichts aus dem Glas.',
    'story.c2.title': 'Ehrliche Zutaten', 'story.c2.p': 'Regionale Produkte aus Hamburg & Umland, Himalaya-Getreide und frischer Fisch.',
    'story.c3.title': 'Langsames Kochen', 'story.c3.p': 'Dal acht Stunden geköchelt. Mo:Mo-Teig auf Bestellung gerollt. Keine Abkürzungen.',
    'menu.eyebrow': '02 · UNSERE KÜCHE', 'menu.title.1': 'Die', 'menu.title.accent': 'Karte',
    'menu.sub': 'Alle {n} Gerichte aus vier Küchen — Thakali, Cross Sushi, Asiatisch und Bar. Stöbern Sie hier und bestellen Sie online für Abholung oder Lieferung.',
    'menu.chip.veg': 'Nur vegetarisch', 'menu.chip.spicy': 'Scharf',
    'menu.order': 'Ganze Karte ansehen & online bestellen',
    'menu.pop': 'Beliebt',
    'menu.hint': 'Gericht antippen für Foto, Allergene und Schärfe.',
    'legend.title': 'Allergene & Zusatzstoffe',
    'legend.allergens': 'Allergene', 'legend.additives': 'Zusatzstoffe',
    'sheet.num': 'Nr.', 'sheet.prices': 'Preise',
    'sheet.none': 'Für dieses Gericht ist in der Karte kein Allergen abgedruckt.',
    'sheet.advice': 'Die Buchstaben stammen aus der gedruckten Karte, die Schärfe ist ein Richtwert unserer Küche. Bei Allergien oder Unverträglichkeiten sprechen Sie uns bitte an — wir beraten Sie gern.',
    'price.from': 'ab {p}',
    'spice.1': 'leicht scharf', 'spice.2': 'scharf',
    'menu.sig.label': 'UNSER BESTSELLER', 'menu.sig.imgcap': 'Aus unserer Küche — flambierte Lachs-Signature-Rolle', 'menu.sig.add': 'Online bestellen',
    'menu.items': 'Gerichte', 'menu.drinks': 'Getränke',
    'gallery.eyebrow': '03 · AUS DER KÜCHE', 'gallery.title.1': 'In der', 'gallery.title.accent': 'Küche.',
    'gallery.cap.1': 'Maguro-Sashimi — frisch aufgefächert',
    'gallery.cap.2': 'Sukuti — würzig, rauchig, hausgemacht',
    'gallery.cap.3': 'Cross Avocado-Salat mit Kürbiskernen',
    'gallery.cap.4': 'Thukpa — goldene Himalaya-Nudelsuppe',
    'gallery.cap.5': 'Red Power Roll — Avocado & Rote Bete',
    'gallery.cap.6': 'Lachs-Sashimi auf Shiso-Blättern',
    'gallery.cap.7': 'Thakali-Set auf Messing — wie im Thak Khola',
    'gallery.cap.8': 'Mo:Mo-Teller mit Jhol-Topf',
    'gallery.cap.9': 'Lachs-Avocado-Maki',
    'gallery.cap.10': 'Sel Roti mit Aloo-Curry — Festtagsklassiker',
    'gallery.cap.11': 'Voller Tisch — Chilli Chicken, Mo:Mo & Sukuti',
    'gallery.cap.12': 'Lachs-Hosomaki — schlicht & präzise',
    'gallery.cap.13': 'Thunfisch-Avocado-Maki — tiefrot & cremig',
    'gallery.cap.14': 'Maguro-Nigiri — pur',
    'gallery.cap.15': 'Curry, Dal & Reis — das Thali im Detail',
    'reviews.eyebrow': '04 · GÄSTELIEBLINGE', 'reviews.title.1': 'Was am meisten', 'reviews.title.accent': 'bestellt wird.',
    'reviews.cta.p': 'Hat es dir geschmeckt? Wir freuen uns über deine Bewertung bei Google.',
    'reviews.cta.btn': 'Bei Google bewerten',
    'reviews.google.label': 'Google-Bewertung',
    'reviews.google.count': '463 Bewertungen · Stand Juli 2026',
    'reviews.google.all': 'Alle Google-Bewertungen ansehen',
    'reviews.google.4months': 'Google · vor 4 Monaten',
    'reviews.google.3months': 'Google · vor 3 Monaten',
    'book.eyebrow': '05 · RESERVIERUNG', 'book.title.1': 'Tisch', 'book.title.accent': 'sichern.',
    'book.sub': 'Wir haben 32 Plätze. Walk-ins an der Bar willkommen; am Wochenende bitte vorbestellen.',
    'book.noSlots': 'Für dieses Datum sind keine Reservierungszeiten verfügbar.',
    'field.date': 'DATUM', 'field.party': 'GÄSTE', 'field.time': 'ZEIT',
    'field.name': 'NAME', 'field.email': 'E-MAIL', 'field.phone': 'TELEFON', 'field.notes': 'NOTIZEN (Allergien, Anlass)',
    'book.btn': 'Reservierung anfragen',
    'book.seats': 'Plätze im Raum', 'book.call': 'oder ruft uns an',
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
    'cater.f.date': 'WUNSCHTERMIN', 'cater.f.guests': 'GÄSTE',
    'cater.f.occasion': 'ANLASS', 'cater.f.msg': 'NACHRICHT',
    'cater.ph.occasion': 'Hochzeit, Firmenfeier …',
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
    'faq.a2': 'Ja — viele vegetarische und vegane Optionen, vom Veggie-Mo:Mo bis zu Veggie-Sushi-Rollen. Mit dem Filter „Nur vegetarisch“ oben in der Karte findest du sie schnell. Bei Allergien sprich uns bitte an, wir beraten dich gern.',
    'faq.q3': 'Wofür seid ihr bekannt?',
    'faq.a3': 'Für handgefaltete Mo:Mo, das authentische Thakali-Set und unsere Cross-Signature-Sushi-Rollen — allen voran der flambierte „Premium Smoke Salmon Roll“. Dazu Thai-Klassiker wie die knusprige Cross Ente Teriyaki.',
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
    'toast.book.name': 'Bitte Namen eingeben',
    'toast.form.contact': 'Bitte E-Mail-Adresse oder Telefonnummer angeben',
    'toast.form.sending': 'Anfrage wird gesendet …',
    'toast.book.sent': 'Danke! Wir bestätigen den Tisch in Kürze.',
    'toast.book.invalid': 'Bitte ein gültiges Datum und eine Zeit während der Öffnungszeiten wählen.',
    'toast.cater.sent': 'Danke! Wir senden Ihnen zeitnah ein Angebot.',
    'toast.form.fail': 'Senden fehlgeschlagen — bitte anrufen: +49 160 8176707',
    'toast.form.rate': 'Zu viele Anfragen — bitte kurz warten.',
    'closed': 'Geschlossen', 'all': 'Alle',
    'days': ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
    'meta.title': 'Nepalesisches Restaurant Hamburg | Thakali Kitchen',
    'meta.desc': 'Authentisches nepalesisches Restaurant in Hamburg-Eimsbüttel: handgemachte Mo:Mo, Thakali-Thali, Sushi und Thai. Reservieren, abholen oder liefern lassen.',
    'a11y.navopen': 'Menü öffnen', 'a11y.close': 'Schließen', 'a11y.mainnav': 'Hauptnavigation',
    'a11y.footernav': 'Fußzeilen-Navigation', 'a11y.langsel': 'Sprache wählen',
    'a11y.less': 'Weniger Gäste', 'a11y.more': 'Mehr Gäste',
    'ph.name': 'Maya Sherchan', 'ph.email': 'sie@email.de', 'ph.phone': '+49 ...',
    'tag.photo': 'FOTO', 'tag.map': 'KARTE',
    'tag.veg': 'veg', 'tag.spicy': 'scharf',
    'legal.impressum': 'Impressum', 'legal.privacy': 'Datenschutz',
    'footer.namaste.1': 'Namaste,', 'footer.namaste.2': 'Hamburg.',
    'map.consent.p': 'Wenn Sie die Karte laden, werden Daten an Google übertragen. Details in unserer Datenschutzerklärung.',
    'map.consent.btn': 'Karte laden', 'map.consent.alt': 'Stattdessen in Google Maps öffnen',
    'map.title': 'Karte — Thakali Kitchen, Hellkamp 22, Hamburg',
  },
  ne: {
    'cta.book': 'टेबल बुक गर्नुहोस्', 'cta.order': 'अनलाइन अर्डर',
    'stamp.1': 'हातले', 'stamp.2': 'मसाला', 'stamp.small': '२०१४ देखि',
    'hero.eyebrow': 'स्थापित २०१४ · हेल्काम्प, हाम्बुर्ग',
    'hero.title.1': 'हाम्रो', 'hero.title.accent': 'अन्नपूर्ण', 'hero.title.2': 'भान्साको स्वाद।',
    'hero.hand': 'हाम्रो चुलोबाट तपाईंसम्म',
    'hero.sub': 'परम्परागत थकाली थाली, हातले बनाएको म:म र क्रस सुसी — आइम्सब्युटेलको हृदयमा।',
    'hero.imgcap': 'हातले बनाएको म:म, गोलभेँडाको अचारसँग — भापबाट सिधै',
    'hero.open.now': '{t} सम्म खुला', 'hero.open.today': 'आज {t} बजे खुल्छ', 'hero.open.next': '{d} {t} बजे खुल्छ',
    'story.eyebrow': '०१ · हाम्रो कथा',
    'story.title.1': 'मुस्ताङमा', 'story.title.accent': 'जन्मेको।', 'story.title.2': 'हाम्बुर्गमा हुर्केको।',
    'story.p': 'थकाली किचनले थक खोला उपत्यकाको खाना — फापर, याक मक्खन, टिमुर — हेल्काम्पको सानो कोठामा ल्याउँछ। २०१४ देखि शेर्चन परिवारद्वारा सञ्चालित।',
    'story.imgcap': 'चिल्ली चिकेन, म:म र सुकुटी — टेबल तयार छ',
    'story.polaroid': 'हेल्काम्पमा हाम्रो साइनबोर्ड',
    'story.c1.title': 'पारिवारिक भान्सा', 'story.c1.p': 'आमाको मसाला, हरेक हप्ता ताजा पिँधिएको।',
    'story.c2.title': 'इमानदार सामग्री', 'story.c2.p': 'स्थानीय हाम्बुर्गको उत्पादन, हिमाली अन्न र ताजा माछा।',
    'story.c3.title': 'बिस्तारै पकाइ', 'story.c3.p': 'दाल आठ घण्टा। म:मको छाला अर्डरमा बेलिन्छ।',
    'menu.eyebrow': '०२ · हाम्रो भान्सा', 'menu.title.1': 'हाम्रो', 'menu.title.accent': 'मेनु',
    'menu.sub': 'चार भान्साका सबै {n} परिकार — थकाली, क्रस सुसी, एसियाली र बार। यहाँ हेर्नुहोस्, अनि पिकअप वा डेलिभरीका लागि अनलाइन अर्डर गर्नुहोस्।',
    'menu.chip.veg': 'शाकाहारी मात्र', 'menu.chip.spicy': 'पिरो',
    'menu.order': 'पूरै मेनु हेर्नुहोस् र अनलाइन अर्डर गर्नुहोस्',
    'menu.pop': 'लोकप्रिय',
    'menu.hint': 'फोटो, एलर्जेन र पिरोपन हेर्न परिकारमा थिच्नुहोस्।',
    'legend.title': 'एलर्जेन र थपिने पदार्थ',
    'legend.allergens': 'एलर्जेन', 'legend.additives': 'थपिने पदार्थ',
    'sheet.num': 'नं.', 'sheet.prices': 'मूल्य',
    'sheet.none': 'यो परिकारका लागि कार्डमा कुनै एलर्जेन अक्षर छापिएको छैन।',
    'sheet.advice': 'यी अक्षर छापिएको मेनुबाट लिइएका हुन्; पिरोपन हाम्रो भान्साको अनुमान मात्र हो। एलर्जी वा असहिष्णुता भए हामीलाई भन्नुहोस् — खुसीसाथ सल्लाह दिन्छौं।',
    'price.from': '{p} देखि',
    'spice.1': 'अलिकति पिरो', 'spice.2': 'पिरो',
    'menu.sig.label': 'हाम्रो बेस्टसेलर', 'menu.sig.imgcap': 'हाम्रो भान्साबाट — फ्ल्याम्बे सामन सिग्नेचर रोल', 'menu.sig.add': 'अनलाइन अर्डर गर्नुहोस्',
    'menu.items': 'परिकार', 'menu.drinks': 'पेय',
    'gallery.eyebrow': '०३ · भान्साबाट', 'gallery.title.1': 'भान्साभित्र', 'gallery.title.accent': 'एक झलक।',
    'gallery.cap.1': 'मागुरो (टुना) सासिमी — ताजा काटिएको',
    'gallery.cap.2': 'सुकुटी — पिरो र धुवाँदार',
    'gallery.cap.3': 'क्रस एभोकाडो सलाद, कद्दूको बीउसहित',
    'gallery.cap.4': 'थुक्पा — सुनौलो हिमाली नूडल सुप',
    'gallery.cap.5': 'रेड पावर रोल — एभोकाडो र चुकन्दर',
    'gallery.cap.6': 'सामन सासिमी, शिसो पातमा',
    'gallery.cap.7': 'पित्तलको थालीमा थकाली सेट',
    'gallery.cap.8': 'म:म थाल र झोल',
    'gallery.cap.9': 'सामन-एभोकाडो माकी',
    'gallery.cap.10': 'सेल रोटी र आलु करी — चाडपर्वको स्वाद',
    'gallery.cap.11': 'भरिभराउ टेबल — चिल्ली चिकेन, म:म र सुकुटी',
    'gallery.cap.12': 'सामन होसोमाकी — सरल र सफा',
    'gallery.cap.13': 'टुना-एभोकाडो माकी — गाढा रातो र क्रिमी',
    'gallery.cap.14': 'मागुरो निगिरी — शुद्ध स्वाद',
    'gallery.cap.15': 'करी, दाल र भात — थाली नजिकबाट',
    'reviews.eyebrow': '०४ · ग्राहकका मनपर्ने', 'reviews.title.1': 'सबैभन्दा धेरै', 'reviews.title.accent': 'मगाइने परिकार।',
    'reviews.cta.p': 'मीठो लाग्यो? गुगलमा समीक्षा दिनुभयो भने खुसी हुनेछौं।',
    'reviews.cta.btn': 'गुगलमा समीक्षा दिनुहोस्',
    'reviews.google.label': 'Google मूल्याङ्कन',
    'reviews.google.count': '४६३ समीक्षा · जुलाई २०२६ सम्म',
    'reviews.google.all': 'Google का सबै समीक्षा हेर्नुहोस्',
    'reviews.google.4months': 'Google · ४ महिना अघि',
    'reviews.google.3months': 'Google · ३ महिना अघि',
    'book.eyebrow': '०५ · आरक्षण', 'book.title.1': 'टेबल', 'book.title.accent': 'राख्नुहोस्।',
    'book.sub': 'हामी ३२ जनासम्म सीट गर्छौं। शुक्रवार र शनिबार अग्रिम बुकिङ राम्रो।',
    'book.noSlots': 'यो मितिमा बुकिङ समय उपलब्ध छैन।',
    'field.date': 'मिति', 'field.party': 'मानिस', 'field.time': 'समय',
    'field.name': 'नाम', 'field.email': 'इमेल', 'field.phone': 'फोन', 'field.notes': 'टिप्पणी',
    'book.btn': 'आरक्षण अनुरोध गर्नुहोस्',
    'book.seats': 'कोठामा सिट', 'book.call': 'वा फोन गर्नुहोस्',
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
    'cater.f.date': 'चाहिएको मिति', 'cater.f.guests': 'पाहुना',
    'cater.f.occasion': 'अवसर', 'cater.f.msg': 'सन्देश',
    'cater.ph.occasion': 'विवाह, कार्यालय कार्यक्रम …',
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
    'faq.a2': 'छन् — भेजी म:म देखि भेजी सुसी रोलसम्म धेरै शाकाहारी र भेगन विकल्प। मेनुमा भएको “शाकाहारी मात्र” फिल्टरले छिट्टै भेट्टाउनुहुन्छ। एलर्जी भए हामीलाई सोध्नुहोस्, खुसीसाथ सल्लाह दिन्छौं।',
    'faq.q3': 'तपाईं केका लागि प्रसिद्ध हुनुहुन्छ?',
    'faq.a3': 'हातले बनाएको म:म, प्रामाणिक थकाली सेट, र हाम्रा क्रस सिग्नेचर सुसी रोल — विशेषगरी फ्ल्याम्बे “प्रिमियम स्मोक सामन रोल”। साथै क्रस हाँस तेरियाकी जस्ता थाई क्लासिक।',
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
    'toast.book.name': 'नाम लेख्नुहोस्',
    'toast.form.contact': 'इमेल वा फोन नम्बर लेख्नुहोस्',
    'toast.form.sending': 'अनुरोध पठाउँदै …',
    'toast.book.sent': 'धन्यवाद! हामी चाँडै टेबल पुष्टि गर्नेछौं।',
    'toast.book.invalid': 'कृपया खुल्ने समयभित्रको सही मिति र समय छान्नुहोस्।',
    'toast.cater.sent': 'धन्यवाद! हामी चाँडै मूल्य पठाउनेछौं।',
    'toast.form.fail': 'पठाउन सकिएन — कृपया फोन गर्नुहोस्: +४९ १६० ८१७६७०७',
    'toast.form.rate': 'धेरै अनुरोध — कृपया केही बेर पर्खनुहोस्।',
    'closed': 'बन्द', 'all': 'सबै',
    'days': ['सो', 'मं', 'बु', 'बि', 'शु', 'श', 'आ'],
    'meta.title': 'थकाली किचन — हाम्बुर्ग',
    'meta.desc': 'थकाली किचन — हाम्बुर्ग-आइम्सब्युटेलमा प्रामाणिक नेपाली खाना र क्रस सुसी। हातले बनाएको म:म, थकाली थाली, सुसी र थाई। पिकअप र डेलिभरी।',
    'a11y.navopen': 'मेनु खोल्नुहोस्', 'a11y.close': 'बन्द गर्नुहोस्', 'a11y.mainnav': 'मुख्य नेविगेसन',
    'a11y.footernav': 'फुटर नेविगेसन', 'a11y.langsel': 'भाषा छान्नुहोस्',
    'a11y.less': 'कम पाहुना', 'a11y.more': 'बढी पाहुना',
    'ph.name': 'माया शेर्चन', 'ph.email': 'tapai@email.com', 'ph.phone': '+49 ...',
    'tag.photo': 'फोटो', 'tag.map': 'नक्सा',
    'tag.veg': 'शाकाहारी', 'tag.spicy': 'पिरो',
    'legal.impressum': 'कानुनी विवरण', 'legal.privacy': 'गोपनीयता',
    'footer.namaste.1': 'नमस्ते,', 'footer.namaste.2': 'हाम्बुर्ग।',
    'map.consent.p': 'नक्सा लोड गर्दा तपाईंको डाटा गुगललाई पठाइन्छ। विवरण हाम्रो गोपनीयता नीतिमा छ।',
    'map.consent.btn': 'नक्सा लोड गर्नुहोस्', 'map.consent.alt': 'गुगल म्यापमा खोल्नुहोस्',
    'map.title': 'नक्सा — थकाली किचन, हेल्काम्प २२, हाम्बुर्ग',
  },
};

/* ===== State ===== */
const state = {
  lang: 'de',
  group: null,         // active menu group slug
  category: 'all',     // active category slug or 'all'
  vegOnly: false,
  spicyOnly: false,
  party: 2,
  time: '19:30',
};

/* ===== Helpers ===== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const t = (key) => UI[state.lang][key] ?? UI.en[key] ?? key;
/* German writes 14,90 € — the printed card does too, so match it per language. */
const fmt = (n) => {
  const amount = localiseDigits(n.toFixed(2));
  return state.lang === 'de' ? `${amount.replace('.', ',')} €` : `€${amount}`;
};
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileHeaderQuery = window.matchMedia('(max-width: 1023px)');
const activeAnimations = new WeakMap();

function motionEnabled() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  return !reduceMotionQuery.matches && !connection?.saveData;
}

function playMotion(el, keyframes, options) {
  if (!el || !motionEnabled() || typeof el.animate !== 'function') return null;
  activeAnimations.get(el)?.cancel();
  const animation = el.animate(keyframes, options);
  activeAnimations.set(el, animation);
  animation.addEventListener('finish', () => {
    if (activeAnimations.get(el) !== animation) return;
    activeAnimations.delete(el);
    animation.cancel();
  }, { once: true });
  return animation;
}

/* Menu content is either a plain string (reads the same in every language —
   producer names, volumes) or a {en,de,ne} map. */
const loc = (v) => {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  return v[state.lang] || v.de || v.en || '';
};

/* Attributes that carry user-visible text and so need translating too. */
const I18N_ATTRS = ['aria-label', 'placeholder', 'title', 'alt'];

function applyI18n() {
  document.documentElement.lang = state.lang === 'ne' ? 'ne' : state.lang;
  document.body.classList.toggle('lang-ne', state.lang === 'ne');

  document.title = t('meta.title');
  const desc = $('meta[name="description"]');
  if (desc) desc.setAttribute('content', t('meta.desc'));

  $$('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    /* {n} stands for the dish count, so the copy can never drift from the data. */
    if (typeof val === 'string') el.textContent = val.replace('{n}', localiseDigits(dishCount()));
  });

  I18N_ATTRS.forEach(attr => {
    $$(`[data-i18n-${attr}]`).forEach(el => {
      const val = t(el.getAttribute(`data-i18n-${attr}`));
      if (typeof val === 'string') el.setAttribute(attr, val);
    });
  });

  /* "PHOTO · 4:5" scaffolding labels: word translates, ratio does not. */
  $$('[data-i18n-tag]').forEach(el => {
    el.textContent = `${t(el.getAttribute('data-i18n-tag'))} · ${el.getAttribute('data-ratio')}`;
  });
  /* gallery plate numbers follow the numeral system of the language */
  $$('[data-num]').forEach(el => { el.textContent = localiseDigits(el.getAttribute('data-num')); });
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  state.group = (window.MENU_DATA[0] && window.MENU_DATA[0].group) || 'thakali';

  initLanguagePill();
  initNavDrawer();
  initMenuFilters();
  initReservation();
  initCatering();
  initHours();
  initMap();
  initFaqMotion();
  applyI18n();
  renderSignature();
  renderMenu();
  renderAllergenLegend();
  initDishSheet();
  renderFavourites();
  prepareImages();
  initRevealMotion();
  initMobileHeader();
});

/* ===== Language ===== */
function initLanguagePill() {
  $$('.lang-pill button').forEach(btn => {
    btn.addEventListener('click', () => {
      state.lang = btn.dataset.lang;
      $$('.lang-pill button').forEach(b => b.classList.toggle('active', b === btn));
      applyI18n();
      renderSignature();
      renderMenu({ animate: true });
      renderAllergenLegend();
      if (openDishKey) renderDishSheet(openDishKey);
      renderFavourites();
      renderTimePills();
      renderHours();
      renderOpenBadge();
      refreshMapLang();
      playMotion(btn, [
        { transform: 'scale(0.92)' },
        { transform: 'scale(1)' },
      ], { duration: 260, easing: 'cubic-bezier(0.2, 0.85, 0.25, 1.15)' });
    });
  });
}

/* ===== Nav drawer ===== */
let drawerReturnFocus = null;

function openDrawer(el, trigger = document.activeElement) {
  drawerReturnFocus = trigger instanceof HTMLElement ? trigger : null;
  document.body.classList.remove('nav-compact');
  el.classList.add('open');
  el.inert = false;
  el.setAttribute('aria-hidden', 'false');
  document.body.classList.add('drawer-open');
  $('#navToggle')?.setAttribute('aria-expanded', 'true');
  requestAnimationFrame(() => $('[data-close-drawer]', el)?.focus({ preventScroll: true }));
}

function closeDrawer(el) {
  if (!el.classList.contains('open')) return;
  el.classList.remove('open');
  el.inert = true;
  el.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('drawer-open');
  $('#navToggle')?.setAttribute('aria-expanded', 'false');
  drawerReturnFocus?.focus({ preventScroll: true });
  drawerReturnFocus = null;
}

function initNavDrawer() {
  const drawer = $('#navDrawer');
  const toggle = $('#navToggle');
  drawer.inert = true;
  toggle.addEventListener('click', () => openDrawer(drawer, toggle));
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer || e.target.closest('[data-close-drawer]') || e.target.closest('.nav-link')) {
      closeDrawer(drawer);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!drawer.classList.contains('open')) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeDrawer(drawer);
      return;
    }
    if (e.key === 'Tab') {
      const focusable = $$('a[href], button:not([disabled])', drawer);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ===== Menu ===== */
function activeGroup() {
  return window.MENU_DATA.find(g => g.group === state.group);
}

function renderGroupTabs() {
  const wrap = $('#menuGroupTabs');
  wrap.innerHTML = window.MENU_DATA.map(g => `
    <button class="group-tab ${g.group === state.group ? 'active' : ''}" data-group="${g.group}" type="button" aria-pressed="${g.group === state.group}">
      ${loc(g.groupLabel)}
    </button>
  `).join('');
  $$('.group-tab', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      state.group = btn.dataset.group;
      state.category = 'all';
      renderMenu({ animate: true });
    });
  });
}

function renderCategoryTabs() {
  const group = activeGroup();
  if (!group) return;
  const wrap = $('#menuTabs');
  const tabs = [{ slug: 'all', label: t('all') }].concat(
    group.categories.map(c => ({ slug: c.slug, label: loc(c.label) }))
  );
  wrap.innerHTML = tabs.map(tab => `
    <button class="${tab.slug === state.category ? 'active' : ''}" data-cat="${tab.slug}" type="button" aria-pressed="${tab.slug === state.category}">
      ${tab.label}
    </button>
  `).join('');
  $$('button', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      state.category = btn.dataset.cat;
      renderMenu({ animate: true, keepActiveTabVisible: true });
    });
  });
}

function dishCount() {
  return window.MENU_DATA.reduce(
    (total, g) => total + g.categories.reduce((n, c) => n + c.items.length, 0), 0);
}

function isVegItem(item) {
  return item.veg === true;
}

function itemMatchesFilters(item) {
  return (!state.vegOnly || isVegItem(item))
    && (!state.spicyOnly || Boolean(item.spice));
}

const flameSvg = (lit) => `<svg class="${lit ? 'spice-on' : 'spice-off'}" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M13 2c1.7 3.3.6 5.3-1.1 7.2 3-.8 5.9 1.4 5.9 5.2A6.8 6.8 0 0 1 11 21.2a6.5 6.5 0 0 1-6.4-6.6c0-3 1.8-5 2.8-6.8.2 1 .7 1.9 1.6 2.4C8.1 7 9.8 4 13 2z"/></svg>`;

/* Two pips, matching the card's own scale: leicht scharf / scharf. */
function spiceTagHtml(level) {
  const pips = [1, 2].map(i => flameSvg(i <= level)).join('');
  return `<span class="tag spicy"><span class="spice-meter">${pips}</span>${escapeHtml(t(`spice.${level}`))}</span>`;
}

function popBadgeHtml(item) {
  return `<span class="pop-badge"><svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/></svg>#${localiseDigits(item.pop)} ${escapeHtml(t('menu.pop'))}</span>`;
}

/* The printed card sets the allergen letters as small superscript behind the
   dish name; keep that so the card and the site read the same way. Inside the
   name span, not beside it, so it hugs the last word instead of becoming its
   own flex item. */
function allergenSupHtml(item) {
  const codes = item.allergens || [];
  return codes.length ? `<sup class="dish-allergens">${escapeHtml(codes.join(','))}</sup>` : '';
}

function itemBadges(item) {
  const tags = [];
  if (item.pop) tags.push(popBadgeHtml(item));
  if (isVegItem(item)) tags.push(`<span class="tag veg">${escapeHtml(t('tag.veg'))}</span>`);
  if (item.spice) tags.push(spiceTagHtml(item.spice));
  if (item.img) {
    tags.push(`<span class="tag has-photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8.5A2 2 0 0 1 5 6.5h1.8l1.2-2h8l1.2 2H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3.4"/></svg>${escapeHtml(t('tag.photo'))}</span>`);
  }
  return tags.join('');
}

/* Where the card prints several prices the row shows the lowest, prefixed —
   the sheet lists every option. */
function priceHtml(item) {
  const price = item.variants
    ? t('price.from').replace('{p}', fmt(item.price))
    : fmt(item.price);
  return escapeHtml(price);
}

function renderMenu({ animate = false, keepActiveTabVisible = false } = {}) {
  renderGroupTabs();
  renderCategoryTabs();

  const group = activeGroup();
  const list = $('#menuList');
  if (!group) { list.innerHTML = ''; return; }

  /* Rows carry their position in MENU_DATA rather than a dish id: the card
     prints some numbers twice (52, 250, 252, 314), so the number alone would
     not identify a dish. */
  const gi = window.MENU_DATA.indexOf(group);

  list.innerHTML = group.categories.map((cat, ci) => {
    if (state.category !== 'all' && cat.slug !== state.category) return '';
    const rows = cat.items
      .map((item, ii) => ({ item, ii }))
      .filter(({ item }) => itemMatchesFilters(item));
    if (!rows.length) return '';
    return `
      <div class="menu-section">
        <div class="menu-section-head">
          <h3>${escapeHtml(loc(cat.label))}</h3>
        </div>
        <div class="menu-section-sub">${localiseDigits(rows.length)} ${t(group.group === 'drinks' ? 'menu.drinks' : 'menu.items')}</div>
        ${cat.note ? `<p class="menu-section-note">${escapeHtml(loc(cat.note))}</p>` : ''}
        <div class="dish-list${rows.length >= 5 ? ' cols' : ''}">
        ${rows.map(({ item, ii }) => {
          const badges = itemBadges(item);
          return `
            <button class="dish" type="button" data-dish="${gi}.${ci}.${ii}" aria-haspopup="dialog">
              <span class="dish-num">${escapeHtml(localiseDigits(item.num))}</span>
              <span class="dish-body">
                <span class="dish-title-row">
                  <span class="dish-name">${escapeHtml(loc(item.name))}${allergenSupHtml(item)}</span>
                  <span class="dish-dots"></span>
                  <span class="dish-price">${priceHtml(item)}</span>
                </span>
                ${loc(item.desc) ? `<span class="dish-desc">${escapeHtml(loc(item.desc))}</span>` : ''}
                ${badges ? `<span class="dish-tags">${badges}</span>` : ''}
              </span>
            </button>
          `;
        }).join('')}
        </div>
      </div>
    `;
  }).join('');

  if (animate) animateMenuResults({ keepActiveTabVisible });
}

function animateMenuResults({ keepActiveTabVisible = false } = {}) {
  requestAnimationFrame(() => {
    const activeControl = $('#menuTabs button.active') || $('#menuGroupTabs .group-tab.active');
    playMotion(activeControl, [
      { transform: 'scale(0.96)' },
      { transform: 'scale(1)' },
    ], { duration: 240, easing: 'cubic-bezier(0.2, 0.85, 0.25, 1.15)' });

    if (keepActiveTabVisible) {
      const wrap = $('#menuTabs');
      const activeTab = $('button.active', wrap);
      if (activeTab) {
        const wrapRect = wrap.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        if (tabRect.left < wrapRect.left || tabRect.right > wrapRect.right) {
          activeTab.scrollIntoView({
            behavior: motionEnabled() ? 'smooth' : 'auto',
            block: 'nearest',
            inline: 'center',
          });
        }
      }
    }

    const nearViewport = $$('.menu-section-head, .menu-section-sub, .dish', $('#menuList'))
      .filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight + 160;
      })
      .slice(0, 8);

    nearViewport.forEach((el, index) => {
      playMotion(el, [
        { opacity: 0.35, transform: 'translate3d(0, 7px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      ], {
        duration: 280,
        delay: index * 22,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'both',
      });
    });
  });
}

function initMenuFilters() {
  [
    { selector: '#vegChip', stateKey: 'vegOnly' },
    { selector: '#spicyChip', stateKey: 'spicyOnly' },
  ].forEach(({ selector, stateKey }) => {
    const chip = $(selector);
    if (!chip) return;
    chip.setAttribute('aria-pressed', 'false');
    chip.addEventListener('click', () => {
      state[stateKey] = !state[stateKey];
      chip.classList.toggle('on', state[stateKey]);
      chip.setAttribute('aria-pressed', String(state[stateKey]));
      renderMenu({ animate: true });
      playMotion(chip, [
        { transform: 'scale(0.95)' },
        { transform: 'scale(1)' },
      ], { duration: 240, easing: 'cubic-bezier(0.2, 0.85, 0.25, 1.15)' });
    });
  });
}

/* ===== Dish detail sheet =====
 * A bottom sheet on phones, a centred card from 720px up. It is the only place
 * the full allergen wording appears, so it has to survive a language switch
 * while open — hence the remembered key. */
let sheetReturnFocus = null;
let openDishKey = null;

function dishAt(key) {
  const [gi, ci, ii] = String(key).split('.').map(Number);
  const group = window.MENU_DATA[gi];
  const cat = group && group.categories[ci];
  const item = cat && cat.items[ii];
  return item ? { group, cat, item } : null;
}

/* One builder for both the sheet and the legend under the menu. */
function allergenListHtml(codes, kind) {
  const rows = codes
    .map(code => ({ code, info: window.ALLERGEN_INFO[code] }))
    .filter(({ info }) => info && info.kind === kind);
  if (!rows.length) return '';
  const heading = kind === 'allergen' ? 'legend.allergens' : 'legend.additives';
  return `
    <div class="sheet-section-title">${escapeHtml(t(heading))}</div>
    <ul class="allergen-list${kind === 'allergen' ? ' is-allergen' : ''}">
      ${rows.map(({ code, info }) => `
        <li><span class="allergen-code">${escapeHtml(code)}</span><span>${escapeHtml(loc(info))}</span></li>
      `).join('')}
    </ul>`;
}

function renderDishSheet(key) {
  const found = dishAt(key);
  if (!found) return;
  const { cat, item } = found;
  const codes = item.allergens || [];

  const tags = [];
  if (item.pop) tags.push(popBadgeHtml(item));
  if (isVegItem(item)) tags.push(`<span class="tag veg">${escapeHtml(t('tag.veg'))}</span>`);
  if (item.spice) tags.push(spiceTagHtml(item.spice));

  $('#dishSheetBody').innerHTML = `
    ${item.img ? `
      <div class="sheet-photo">
        <img src="images/${item.img}.jpg" alt="${escapeHtml(loc(item.name))}" loading="lazy"/>
      </div>` : ''}
    <div class="sheet-eyebrow">${escapeHtml(`${t('sheet.num')} ${localiseDigits(item.num)} · ${loc(cat.label)}`)}</div>
    <h3 id="dishSheetTitle">${escapeHtml(loc(item.name))}${allergenSupHtml(item)}</h3>
    ${tags.length ? `<div class="sheet-tags">${tags.join('')}</div>` : ''}
    <div class="sheet-price">${priceHtml(item)}</div>
    ${item.variants ? `
      <ul class="sheet-variants">
        ${item.variants.map(v => `
          <li>
            <span>${escapeHtml(loc(v.label))}</span>
            <span class="leader"></span>
            <span class="v-price">${escapeHtml(fmt(v.price))}</span>
          </li>
        `).join('')}
      </ul>` : ''}
    ${loc(item.desc) ? `<p class="sheet-desc">${escapeHtml(loc(item.desc))}</p>` : ''}
    ${cat.note ? `<p class="sheet-note">${escapeHtml(loc(cat.note))}</p>` : ''}
    ${item.note ? `<p class="sheet-note">${escapeHtml(loc(item.note))}</p>` : ''}
    ${allergenListHtml(codes, 'allergen')}
    ${allergenListHtml(codes, 'additive')}
    ${codes.length ? '' : `<p class="sheet-note">${escapeHtml(t('sheet.none'))}</p>`}
    <p class="sheet-advice">${escapeHtml(t('sheet.advice'))}</p>
  `;
  prepareImages($('#dishSheetBody'));
}

function openDishSheet(key, trigger) {
  if (!dishAt(key)) return;
  const scrim = $('#dishScrim');
  openDishKey = key;
  renderDishSheet(key);
  sheetReturnFocus = trigger instanceof HTMLElement ? trigger : null;
  scrim.inert = false;
  scrim.setAttribute('aria-hidden', 'false');
  scrim.classList.add('open');
  document.body.classList.add('drawer-open');
  $('#dishSheetBody').scrollTop = 0;
  requestAnimationFrame(() => $('#dishSheetClose').focus({ preventScroll: true }));
}

function closeDishSheet() {
  const scrim = $('#dishScrim');
  if (!scrim.classList.contains('open')) return;
  scrim.classList.remove('open');
  scrim.inert = true;
  scrim.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('drawer-open');
  openDishKey = null;
  sheetReturnFocus?.focus({ preventScroll: true });
  sheetReturnFocus = null;
}

function initDishSheet() {
  const scrim = $('#dishScrim');
  const sheet = $('#dishSheet');
  if (!scrim || !sheet) return;
  scrim.inert = true;

  /* Delegated, so re-rendering the list on every filter change costs nothing. */
  $('#menuList')?.addEventListener('click', (e) => {
    const row = e.target.closest('[data-dish]');
    if (row) openDishSheet(row.dataset.dish, row);
  });

  $('#dishSheetClose').addEventListener('click', () => closeDishSheet());
  scrim.addEventListener('click', (e) => { if (e.target === scrim) closeDishSheet(); });

  document.addEventListener('keydown', (e) => {
    if (!scrim.classList.contains('open')) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeDishSheet();
      return;
    }
    if (e.key !== 'Tab') return;
    const focusable = $$('a[href], button:not([disabled])', sheet);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  initSheetDrag(sheet, $('#dishSheetGrip'));
}

/* Flick the grip down to dismiss — the gesture people already expect from a
   bottom sheet. The grip is hidden on desktop, where this never runs. */
function initSheetDrag(sheet, grip) {
  if (!grip) return;
  let dragging = false;
  let startY = 0;
  let offset = 0;

  const finish = () => {
    if (!dragging) return;
    dragging = false;
    sheet.classList.remove('is-dragging');
    sheet.style.transform = '';
    if (offset > 96) closeDishSheet();
  };

  grip.addEventListener('pointerdown', (e) => {
    if (e.button > 0) return;
    dragging = true;
    startY = e.clientY;
    offset = 0;
    sheet.classList.add('is-dragging');
    grip.setPointerCapture(e.pointerId);
  });
  grip.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    offset = Math.max(0, e.clientY - startY);
    sheet.style.transform = `translateY(${offset}px)`;
  });
  grip.addEventListener('pointerup', finish);
  grip.addEventListener('pointercancel', finish);
}

function renderAllergenLegend() {
  const body = $('#allergenLegendBody');
  if (!body) return;
  /* JS object key order puts the numeric codes first; the card lists a–k, then
     1 and 2, so restore that. */
  const isDigit = (code) => /^[0-9]$/.test(code);
  const codes = Object.keys(window.ALLERGEN_INFO).sort((a, b) => {
    if (isDigit(a) !== isDigit(b)) return isDigit(a) ? 1 : -1;
    return a.localeCompare(b);
  });
  body.innerHTML = allergenListHtml(codes, 'allergen') + allergenListHtml(codes, 'additive');
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
    <h3 style="margin-top:6px">${escapeHtml(loc(pick.name))}</h3>
    ${loc(pick.desc) ? `<div class="sig-desc">${escapeHtml(loc(pick.desc))}</div>` : ''}
    <div class="imgph">
      <img src="images/signature-flambe-roll.jpg" alt="${escapeHtml(loc(pick.name))}" loading="lazy"/>
      <span class="imgph-tag">${escapeHtml(t('tag.photo'))} · 16:10</span>
      <span class="imgph-cap">${t('menu.sig.imgcap')}</span>
    </div>
    <div class="sig-foot">
      <span class="sig-price">${priceHtml(pick)}</span>
      <a class="btn btn-terra" href="${ORDER_URL}" target="_blank" rel="noopener" style="flex:0 0 auto; padding:10px 16px">${t('menu.sig.add')}</a>
    </div>
  `;
  prepareImages(card);
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
        <div class="fav-name">${escapeHtml(loc(it.name))}</div>
        <div class="fav-cat">${escapeHtml(loc(it.catLabel))}</div>
      </div>
    </div>
  `).join('');
}

/* ===== Motion system ===== */
function prepareImages(root = document) {
  $$('img', root).forEach(img => {
    if (img.dataset.motionImage === 'ready') return;
    img.dataset.motionImage = 'ready';
    const reveal = () => img.classList.add('is-loaded');
    if (img.complete && img.naturalWidth > 0) reveal();
    else img.addEventListener('load', reveal, { once: true });
  });
}

function initRevealMotion() {
  if (!motionEnabled()) {
    document.documentElement.classList.add('motion-reduced');
    return;
  }

  const revealGroups = [
    { selector: '.section-head', stagger: 0 },
    { selector: '.story-photos, .signature-card, .reviews-cta, #reservationForm, #order .reservation-card, .catering-card, .contact-card, .map-card', stagger: 45 },
    { selector: '.story-card, .gallery-grid .imgph, .offer-card, .faq-item', stagger: 45 },
    { selector: '.fav-grid, .footer-logo, .footer > .eyebrow, .footer > h2, .footer > p, .footer-hand, .footer > .social-row, .footer-meta', stagger: 35 },
  ];
  const targets = [];

  revealGroups.forEach(({ selector, stagger }) => {
    $$(selector).forEach((el, index) => {
      if (el.dataset.reveal) return;
      el.dataset.reveal = 'rise';
      if (stagger) el.style.setProperty('--reveal-delay', `${(index % 3) * stagger}ms`);
      targets.push(el);
    });
  });

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-visible'));
    document.documentElement.classList.add('motion-ready');
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  targets.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) el.classList.add('is-visible');
    else observer.observe(el);
  });

  document.documentElement.classList.add('motion-ready');
  reduceMotionQuery.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    targets.forEach(el => el.classList.add('is-visible'));
    document.documentElement.classList.remove('motion-ready');
    document.documentElement.classList.add('motion-reduced');
    document.body.classList.remove('nav-compact');
  }, { once: true });
}

function initMobileHeader() {
  let lastY = Math.max(window.scrollY, 0);
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = Math.max(window.scrollY, 0);
    if (!mobileHeaderQuery.matches || !motionEnabled() || document.body.classList.contains('drawer-open')) {
      document.body.classList.remove('nav-compact');
      lastY = y;
      return;
    }

    if (y < 120 || y < lastY - 4) document.body.classList.remove('nav-compact');
    else if (y > 150 && y > lastY + 4) document.body.classList.add('nav-compact');
    lastY = y;
  };

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });

  mobileHeaderQuery.addEventListener('change', () => {
    document.body.classList.remove('nav-compact');
    lastY = Math.max(window.scrollY, 0);
  });
}

function initFaqMotion() {
  $$('.faq-item').forEach(item => {
    const summary = $('summary', item);
    const content = $('.faq-a', item);
    summary.setAttribute('aria-expanded', String(item.open));

    item.addEventListener('toggle', () => {
      summary.setAttribute('aria-expanded', String(item.open));
    });

    summary.addEventListener('click', event => {
      if (!motionEnabled() || typeof content.animate !== 'function') return;
      event.preventDefault();
      if (item.dataset.animating === 'true') return;

      item.dataset.animating = 'true';
      const opening = !item.open;
      if (opening) item.open = true;
      summary.setAttribute('aria-expanded', String(opening));
      const height = content.scrollHeight;
      const frames = opening
        ? [
            { height: '0px', opacity: 0, transform: 'translate3d(0, -5px, 0)' },
            { height: `${height}px`, opacity: 1, transform: 'translate3d(0, 0, 0)' },
          ]
        : [
            { height: `${height}px`, opacity: 1, transform: 'translate3d(0, 0, 0)' },
            { height: '0px', opacity: 0, transform: 'translate3d(0, -5px, 0)' },
          ];

      const animation = content.animate(frames, {
        duration: opening ? 300 : 220,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      });
      animation.addEventListener('finish', () => {
        if (!opening) item.open = false;
        delete item.dataset.animating;
      }, { once: true });
      animation.addEventListener('cancel', () => {
        delete item.dataset.animating;
      }, { once: true });
    });
  });
}

/* ===== Enquiry forms (reservation + catering) =====
 * Both post to the Worker in worker/index.js, which mails the restaurant. The
 * page is otherwise static, so these two fetches are the only server calls the
 * site makes. */
/* Stamped once at load and sent with the form, so the Worker can spot a
 * submission that arrived faster than a human could type. */
const PAGE_LOADED_AT = Date.now();

function hamburgReservationNow() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Berlin',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const value = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return {
    date: `${value.year}-${value.month}-${value.day}`,
    minutes: Number(value.hour) * 60 + Number(value.minute),
  };
}

function dateInputValue(offsetDays = 0) {
  const [year, month, day] = hamburgReservationNow().date.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + offsetDays));
  return [
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, '0'),
    String(date.getUTCDate()).padStart(2, '0'),
  ].join('-');
}

function dayIndexFromDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || '');
  if (!match) return null;
  const [, year, month, day] = match.map(Number);
  const date = new Date(year, month - 1, day, 12);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
  return (date.getDay() + 6) % 7;
}

function clockMinutes(value) {
  const [hour, minute] = value.split(':').map(Number);
  return hour * 60 + minute;
}

function timeSlotsForDate(value) {
  const hours = HOURS[dayIndexFromDate(value)];
  if (!hours) return [];

  const now = hamburgReservationNow();
  const slots = [];
  const close = clockMinutes(hours.close);
  for (let minute = clockMinutes(hours.open); minute <= close - 30; minute += 30) {
    if (value === now.date && minute <= now.minutes) continue;
    slots.push(`${String(Math.floor(minute / 60)).padStart(2, '0')}:${String(minute % 60).padStart(2, '0')}`);
  }
  return slots;
}

function initReservation() {
  const dateInput = $('#resDate');
  dateInput.min = dateInputValue();
  dateInput.value = dateInputValue(1);
  dateInput.addEventListener('change', () => renderTimePills());

  $('#partyMinus').addEventListener('click', () => {
    updateParty(Math.max(1, state.party - 1));
  });
  $('#partyPlus').addEventListener('click', () => {
    updateParty(Math.min(12, state.party + 1));
  });

  renderTimePills();

  wireEnquiryForm($('#reservationForm'), {
    endpoint: '/api/reserve',
    sentKey: 'toast.book.sent',
    payload: (fd) => ({
      date: fd.get('date'),
      time: state.time,
      party: state.party,
    }),
    validate: (fd) => timeSlotsForDate(fd.get('date')).includes(state.time),
  });
}

function initCatering() {
  const form = $('#cateringForm');
  if (!form) return;

  /* Catering needs lead time; a fortnight out is a friendlier default than
   * today's date, which is never a realistic answer. */
  const dateInput = $('#caterDate');
  dateInput.min = dateInputValue();
  dateInput.value = dateInputValue(14);

  wireEnquiryForm(form, {
    endpoint: '/api/catering',
    sentKey: 'toast.cater.sent',
    payload: (fd) => ({
      date: fd.get('date'),
      guests: Number(fd.get('guests')) || null,
      occasion: (fd.get('occasion') || '').toString().trim(),
    }),
  });
}

function wireEnquiryForm(form, { endpoint, sentKey, payload, validate = null }) {
  const submit = form.querySelector('button[type="submit"]');
  let inFlight = false;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (inFlight) return;

    const fd = new FormData(form);
    const name = (fd.get('name') || '').toString().trim();
    if (!name) { pushToast(t('toast.book.name')); return; }

    const email = (fd.get('email') || '').toString().trim();
    const phone = (fd.get('phone') || '').toString().trim();
    /* Without one of these there is no way to answer, so the enquiry is
     * worthless — catch it here rather than after a round trip. */
    if (!email && !phone) { pushToast(t('toast.form.contact')); return; }
    if (validate && !validate(fd)) { pushToast(t('toast.book.invalid')); return; }

    const body = {
      ...payload(fd),
      name,
      email,
      phone,
      notes: (fd.get('notes') || '').toString().trim(),
      ref_code: (fd.get('ref_code') || '').toString(),
      ts: PAGE_LOADED_AT,
      lang: state.lang,
    };

    inFlight = true;
    setBusy(submit, true);
    pushToast(t('toast.form.sending'));

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        pushToast(t(sentKey));
        form.reset();
        /* reset() wipes the prefilled date and the stepper's hidden state, so
         * put the defaults back. */
        resetEnquiryDefaults(form);
      } else if (res.status === 429) {
        pushToast(t('toast.form.rate'));
      } else if (data.error === 'contact_required') {
        pushToast(t('toast.form.contact'));
      } else if (data.error === 'invalid_reservation') {
        pushToast(t('toast.book.invalid'));
      } else {
        pushToast(t('toast.form.fail'));
      }
    } catch {
      /* Offline, DNS failure, blocked request — the guest still needs a way to
       * reach us, so the toast carries the phone number. */
      pushToast(t('toast.form.fail'));
    } finally {
      inFlight = false;
      setBusy(submit, false);
    }
  });
}

function resetEnquiryDefaults(form) {
  const offsetDays = form.id === 'cateringForm' ? 14 : 1;
  const dateInput = form.querySelector('input[type="date"]');
  if (dateInput) {
    dateInput.min = dateInputValue();
    dateInput.value = dateInputValue(offsetDays);
  }
  if (form.id === 'reservationForm') {
    updateParty(2);
    state.time = '19:30';
    renderTimePills();
  }
}

function setBusy(btn, busy) {
  if (!btn) return;
  btn.setAttribute('aria-busy', busy ? 'true' : 'false');
  btn.disabled = busy;
}

function updateParty(nextParty) {
  if (nextParty === state.party) return;
  state.party = nextParty;
  const num = $('#partyNum');
  num.textContent = state.party;
  playMotion(num, [
    { opacity: 0.45, transform: 'translate3d(0, 4px, 0) scale(0.9)' },
    { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
  ], { duration: 260, easing: 'cubic-bezier(0.2, 0.85, 0.25, 1.15)' });
}

function renderTimePills(animateSelected = false) {
  const wrap = $('#timePills');
  const slots = timeSlotsForDate($('#resDate')?.value);
  if (!slots.includes(state.time)) {
    state.time = slots.includes('19:30') ? '19:30' : (slots[0] || '');
  }
  if (!slots.length) {
    wrap.innerHTML = `<p class="time-empty">${escapeHtml(t('book.noSlots'))}</p>`;
    return;
  }

  wrap.innerHTML = slots.map(tm => {
    const on = tm === state.time;
    return `<button class="time-pill ${on ? 'on' : ''}" type="button" aria-pressed="${on}" data-time="${tm}">${tm}</button>`;
  }).join('');
  $$('button', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      state.time = btn.dataset.time;
      renderTimePills(true);
    });
  });

  if (animateSelected) {
    const selected = $('.time-pill.on', wrap);
    playMotion(selected, [
      { transform: 'scale(0.92)' },
      { transform: 'scale(1)' },
    ], { duration: 240, easing: 'cubic-bezier(0.2, 0.85, 0.25, 1.15)' });
  }
}

/* ===== Hours ===== */
/* Mon-first. `null` = closed that day. */
const HOURS = [
  { open: '12:00', close: '22:00' }, // Mon
  { open: '12:00', close: '22:00' }, // Tue
  { open: '12:00', close: '22:00' }, // Wed
  { open: '12:00', close: '22:00' }, // Thu
  { open: '12:00', close: '23:00' }, // Fri
  { open: '14:00', close: '23:00' }, // Sat
  { open: '14:00', close: '22:00' }, // Sun
];

/* The restaurant is in Hamburg, so "is it open now?" has to be answered in
   Hamburg's clock — not the visitor's, which may be hours ahead. */
function hamburgNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(new Date());
  const get = (type) => parts.find(p => p.type === type).value;
  const dayIdx = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(get('weekday'));
  return { dayIdx, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

const toMinutes = (hhmm) => Number(hhmm.slice(0, 2)) * 60 + Number(hhmm.slice(3, 5));
const localiseDigits = (s) => state.lang === 'ne'
  ? String(s).replace(/[0-9]/g, d => '०१२३४५६७८९'[d])
  : String(s);

function hoursLabel(entry) {
  return entry ? localiseDigits(`${entry.open}–${entry.close}`) : t('closed');
}

/* Current open/closed state, plus the next opening if we're shut. */
function openState() {
  const { dayIdx, minutes } = hamburgNow();
  const today = HOURS[dayIdx];
  if (today && minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
    return { open: true, time: today.close };
  }
  if (today && minutes < toMinutes(today.open)) {
    return { open: false, sameDay: true, time: today.open };
  }
  for (let step = 1; step <= 7; step++) {
    const idx = (dayIdx + step) % 7;
    if (HOURS[idx]) return { open: false, sameDay: false, time: HOURS[idx].open, dayIdx: idx };
  }
  return { open: false, sameDay: false, time: null };
}

function initHours() { renderHours(); renderOpenBadge(); }

function renderOpenBadge() {
  const badge = $('#openBadge');
  if (!badge) return;
  const st = openState();
  const time = st.time ? localiseDigits(st.time) : '';
  let label;
  if (st.open) label = t('hero.open.now').replace('{t}', time);
  else if (st.sameDay) label = t('hero.open.today').replace('{t}', time);
  else if (st.time) label = t('hero.open.next').replace('{d}', UI[state.lang].days[st.dayIdx]).replace('{t}', time);
  else label = t('closed');
  badge.textContent = label;
  const dot = $('#openDot');
  if (dot) dot.classList.toggle('is-closed', !st.open);
}

function renderHours() {
  const grid = $('#hoursGrid');
  if (!grid) return;
  const todayIdx = hamburgNow().dayIdx;
  const days = UI[state.lang].days;
  grid.innerHTML = days.map((d, i) => {
    const today = i === todayIdx ? 'today' : '';
    return `<div class="day ${today}">${d}${today ? ' ·' : ''}</div><div class="time ${today}">${hoursLabel(HOURS[i])}</div>`;
  }).join('');
}

/* ===== Map (Google embed, loaded only on request) ===== */
const MAP_QUERY = 'Hellkamp 22, 20255 Hamburg';
const MAP_CONSENT_KEY = 'tk.mapConsent';

function mapEmbedSrc() {
  const params = new URLSearchParams({ q: MAP_QUERY, output: 'embed', hl: state.lang, z: '16' });
  return `https://www.google.com/maps?${params}`;
}

function loadMap() {
  const card = $('#mapCard');
  if (!card || card.classList.contains('map-live') || card.classList.contains('map-loading')) return;
  const frame = document.createElement('iframe');
  frame.className = 'map-frame';
  frame.src = mapEmbedSrc();
  frame.loading = 'lazy';
  frame.referrerPolicy = 'no-referrer-when-downgrade';
  frame.allowFullscreen = true;
  frame.title = t('map.title');
  card.classList.add('map-loading');
  frame.addEventListener('load', () => {
    card.classList.remove('map-loading');
    card.classList.add('map-live');
    $('#mapConsentBtn')?.removeAttribute('aria-busy');
    window.setTimeout(() => {
      const consent = $('#mapConsent', card);
      const sketch = $('.map-sketch', card);
      if (consent) consent.hidden = true;
      if (sketch) sketch.hidden = true;
    }, 340);
  }, { once: true });
  frame.addEventListener('error', () => {
    card.classList.remove('map-loading');
    $('#mapConsentBtn')?.removeAttribute('aria-busy');
    frame.remove();
  }, { once: true });
  card.appendChild(frame);
}

function initMap() {
  const btn = $('#mapConsentBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    try { localStorage.setItem(MAP_CONSENT_KEY, '1'); } catch { /* private mode — consent lasts this visit only */ }
    btn.setAttribute('aria-busy', 'true');
    loadMap();
  });
  let consented = false;
  try { consented = localStorage.getItem(MAP_CONSENT_KEY) === '1'; } catch { /* storage blocked */ }
  if (consented) loadMap();
}

/* Keep an already-loaded map in the selected language. */
function refreshMapLang() {
  const frame = $('.map-frame');
  if (!frame) return;
  frame.src = mapEmbedSrc();
  frame.title = t('map.title');
}

/* ===== Toasts ===== */
function pushToast(msg) {
  const wrap = $('#toastWrap');
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => {
    el.classList.add('is-leaving');
    setTimeout(() => el.remove(), 180);
  }, 2320);
}

/* ===== Escape helpers ===== */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}
