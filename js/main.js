/* ============================================
   THAKALI KITCHEN — Main script (vanilla)
   ============================================ */

/* ===== i18n dictionary ===== */
const UI = {
  en: {
    'cta.book': 'Reserve a table', 'cta.order': 'Order online',
    'stamp.1': 'spiced', 'stamp.2': 'by hand', 'stamp.small': 'since 2018',
    'hero.eyebrow': 'EST. 2018 · OSTERSTRASSE, HAMBURG',
    'hero.title.1': 'A taste of the', 'hero.title.accent': 'Annapurna', 'hero.title.2': 'kitchen.',
    'hero.hand': 'from our hearth to yours',
    'hero.sub': "Traditional Thakali thali, hand-folded Mo:Mo, and Cross Sushi — served on copper and clay in the heart of Eimsbüttel.",
    'hero.imgcap': 'Brass thali on jute mat — overhead, golden hour through window',
    'hero.open': 'Open until 22:30',
    'story.eyebrow': '01 · OUR STORY',
    'story.title.1': 'Born in', 'story.title.accent': 'Mustang.', 'story.title.2': 'Grown in Hamburg.',
    'story.p': "Thakali Kitchen brings the cooking of the Thak Khola valley — buckwheat, yak butter, timur pepper — to a small cream-walled room on Osterstraße. Run by the Sherchan family since 2018.",
    'story.imgcap': 'Family portrait — kitchen pass, three generations, candid',
    'story.c1.title': 'Family recipes', 'story.c1.p': "Aamaa's spice mixes, ground fresh weekly. Nothing comes from a jar.",
    'story.c2.title': 'Honest ingredients', 'story.c2.p': 'Local produce from Hamburg & surrounds, Himalayan grains and fresh fish.',
    'story.c3.title': 'Slow cooking', 'story.c3.p': 'Dal simmered eight hours. Mo:Mo skins rolled to order. No shortcuts.',
    'menu.eyebrow': '02 · OUR KITCHEN', 'menu.title.1': 'The', 'menu.title.accent': 'menu',
    'menu.sub': 'Over 180 dishes across three kitchens — from Thakali classics to Cross Sushi. Tap any item to add.',
    'menu.chip.veg': 'Veg only', 'menu.chip.spicy': 'Spicy', 'menu.chip.glutenfree': 'Gluten-free',
    'menu.sig.label': "TODAY'S SIGNATURE", 'menu.sig.imgcap': 'Hero shot — dramatic side light, copper plate', 'menu.sig.add': 'Add to order',
    'menu.items': 'items',
    'gallery.eyebrow': '03 · THE ROOM', 'gallery.title.1': 'Inside the', 'gallery.title.accent': 'kitchen.',
    'gallery.cap.1': 'Front pass at 20:00 — service in full swing',
    'gallery.cap.2': 'Pile of Mo:Mo, just steamed',
    'gallery.cap.3': 'Hand-ground spice mix in stone mortar',
    'gallery.cap.4': 'Copper thali plate, three achars',
    'gallery.cap.5': 'Warm-lit dining room, candles & brass',
    'gallery.cap.6': 'Courtyard outdoor seating, summer evening',
    'book.eyebrow': '04 · RESERVATIONS', 'book.title.1': 'Hold a', 'book.title.accent': 'table.',
    'book.sub': 'We seat 32. Walk-ins welcome at the bar; book ahead for weekends.',
    'field.date': 'DATE', 'field.party': 'PARTY OF', 'field.time': 'TIME',
    'field.name': 'NAME', 'field.email': 'EMAIL', 'field.phone': 'PHONE', 'field.notes': 'NOTES (allergies, occasion)',
    'book.btn': 'Request reservation',
    'order.eyebrow': '05 · DELIVERY', 'order.title.1': 'Bring it', 'order.title.accent': 'home.',
    'order.sub': 'Pickup in 20 min, or delivery within 4 km. Our own riders.',
    'order.mode.pickup': 'Pickup', 'order.mode.delivery': 'Delivery',
    'order.pickup.label': 'PICKUP TIME',
    'order.pickup.asap': 'As soon as possible · ~20 min',
    'order.pickup.30': 'In 30 min', 'order.pickup.60': 'In 1 hour',
    'order.pickup.info': 'Osterstraße 142 · 2 min from U-Bahn Osterstraße',
    'order.delivery.label': 'DELIVERY POSTCODE',
    'order.delivery.info': 'Delivery within 4 km · €2.50 fee · ~35 min',
    'order.items': 'Items', 'order.subtotal': 'Subtotal', 'order.delivery': 'Delivery',
    'order.review': 'Review order',
    'cater.eyebrow': '06 · CATERING', 'cater.title.1': 'For', 'cater.title.accent': 'gatherings.',
    'cater.label': 'EVENTS · 8 — 200 GUESTS',
    'cater.p': 'From eight-person dinners to weddings of a hundred. We bring the kitchen to you.',
    'cater.imgcap': 'Live Mo:Mo bar at private event — Schanzenviertel loft',
    'cater.pkg1': 'Thali Feast', 'cater.pkg1.p': 'From €28 / head',
    'cater.pkg2': 'Mo:Mo Bar (live)', 'cater.pkg2.p': 'From €36 / head',
    'cater.pkg3': 'Full Banquet', 'cater.pkg3.p': 'From €54 / head',
    'cater.btn': 'Request a quote',
    'contact.eyebrow': '07 · VISIT US', 'contact.title.1': 'Find us on', 'contact.title.accent': 'Osterstraße.',
    'contact.findus': 'Find us',
    'contact.addr': 'Osterstraße 142, 20255 Hamburg-Eimsbüttel',
    'contact.phonesub': 'Daily, 11:00 — 22:00',
    'contact.emailsub': 'For private events',
    'contact.hours': 'Opening hours',
    'contact.mapcap': 'Osterstraße 142 · Eimsbüttel · 2 min walk from U2 Osterstraße',
    'footer.eyebrow': 'COME EAT WITH US',
    'footer.addr': 'Osterstraße 142 · 20255 Hamburg',
    'cart.title': 'Your order', 'cart.empty': "Cart's empty", 'cart.empty.hand': "let's fix that",
    'cart.subtotal': 'Subtotal', 'cart.checkout': 'Checkout',
    'nav.label': 'NAVIGATE',
    'nav.about': 'Story', 'nav.menu': 'Menu', 'nav.book': 'Book', 'nav.order': 'Order',
    'nav.catering': 'Catering', 'nav.contact': 'Visit',
    'toast.added': 'added', 'toast.book.name': 'Please add your name',
    'toast.book.ok': 'Reserved', 'toast.cater.ok': 'Quote request sent',
    'closed': 'Closed', 'all': 'All',
    'days': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  de: {
    'cta.book': 'Tisch reservieren', 'cta.order': 'Online bestellen',
    'stamp.1': 'von Hand', 'stamp.2': 'gewürzt', 'stamp.small': 'seit 2018',
    'hero.eyebrow': 'SEIT 2018 · OSTERSTRASSE, HAMBURG',
    'hero.title.1': 'Ein Stück', 'hero.title.accent': 'Annapurna-', 'hero.title.2': 'Küche.',
    'hero.hand': 'von unserem Herd zu Ihnen',
    'hero.sub': 'Traditionelles Thakali-Thali, handgefaltete Mo:Mo und Cross Sushi — frisch zubereitet auf Kupfer und Ton, mitten in Eimsbüttel.',
    'hero.imgcap': 'Messingthali auf Jute — Vogelperspektive, goldene Stunde am Fenster',
    'hero.open': 'Geöffnet bis 22:30',
    'story.eyebrow': '01 · UNSERE GESCHICHTE',
    'story.title.1': 'Geboren in', 'story.title.accent': 'Mustang.', 'story.title.2': 'Gewachsen in Hamburg.',
    'story.p': 'Thakali Kitchen bringt die Küche des Thak-Khola-Tals — Buchweizen, Yak-Butter, Timur-Pfeffer — in einen kleinen, cremefarbenen Raum an der Osterstraße. Geführt von der Familie Sherchan seit 2018.',
    'story.imgcap': 'Familienporträt — Küchenpass, drei Generationen, ungestellt',
    'story.c1.title': 'Familienrezepte', 'story.c1.p': 'Aamaas Gewürzmischungen, wöchentlich frisch gemahlen. Nichts aus dem Glas.',
    'story.c2.title': 'Ehrliche Zutaten', 'story.c2.p': 'Regionale Produkte aus Hamburg & Umland, Himalaya-Getreide und frischer Fisch.',
    'story.c3.title': 'Langsames Kochen', 'story.c3.p': 'Dal acht Stunden geköchelt. Mo:Mo-Teig auf Bestellung gerollt. Keine Abkürzungen.',
    'menu.eyebrow': '02 · UNSERE KÜCHE', 'menu.title.1': 'Die', 'menu.title.accent': 'Karte',
    'menu.sub': 'Über 180 Gerichte aus drei Küchen — von Thakali-Klassikern bis Cross Sushi. Tippen Sie ein Gericht an, um es hinzuzufügen.',
    'menu.chip.veg': 'Nur vegetarisch', 'menu.chip.spicy': 'Scharf', 'menu.chip.glutenfree': 'Glutenfrei',
    'menu.sig.label': 'HEUTIGES SIGNATURGERICHT', 'menu.sig.imgcap': 'Heldenaufnahme — dramatisches Seitenlicht, Kupferteller', 'menu.sig.add': 'Zum Korb',
    'menu.items': 'Gerichte',
    'gallery.eyebrow': '03 · DER RAUM', 'gallery.title.1': 'In der', 'gallery.title.accent': 'Küche.',
    'gallery.cap.1': 'Küchenpass um 20:00 — Service in vollem Gang',
    'gallery.cap.2': 'Frisch gedämpfte Mo:Mo',
    'gallery.cap.3': 'Handgemahlene Gewürze im Steinmörser',
    'gallery.cap.4': 'Kupfer-Thali, drei Achars',
    'gallery.cap.5': 'Gastraum im warmen Licht, Kerzen & Messing',
    'gallery.cap.6': 'Sommerabend, Innenhof, Außenplätze',
    'book.eyebrow': '04 · RESERVIERUNG', 'book.title.1': 'Tisch', 'book.title.accent': 'sichern.',
    'book.sub': 'Wir haben 32 Plätze. Walk-ins an der Bar willkommen; am Wochenende bitte vorbestellen.',
    'field.date': 'DATUM', 'field.party': 'GÄSTE', 'field.time': 'ZEIT',
    'field.name': 'NAME', 'field.email': 'E-MAIL', 'field.phone': 'TELEFON', 'field.notes': 'NOTIZEN (Allergien, Anlass)',
    'book.btn': 'Reservierung anfragen',
    'order.eyebrow': '05 · LIEFERUNG', 'order.title.1': 'Nehmt es', 'order.title.accent': 'mit nach Hause.',
    'order.sub': 'Abholung in 20 Min., Lieferung im Umkreis von 4 km. Eigene Fahrer.',
    'order.mode.pickup': 'Abholung', 'order.mode.delivery': 'Lieferung',
    'order.pickup.label': 'ABHOLZEIT',
    'order.pickup.asap': 'So bald wie möglich · ~20 Min',
    'order.pickup.30': 'In 30 Min', 'order.pickup.60': 'In 1 Stunde',
    'order.pickup.info': 'Osterstraße 142 · 2 Min. von U-Bahn Osterstraße',
    'order.delivery.label': 'PLZ',
    'order.delivery.info': 'Lieferung im Umkreis 4 km · 2,50 € Gebühr · ~35 Min',
    'order.items': 'Artikel', 'order.subtotal': 'Zwischensumme', 'order.delivery': 'Lieferung',
    'order.review': 'Bestellung prüfen',
    'cater.eyebrow': '06 · CATERING', 'cater.title.1': 'Für', 'cater.title.accent': 'besondere Anlässe.',
    'cater.label': 'EVENTS · 8 — 200 GÄSTE',
    'cater.p': 'Von Acht-Personen-Dinners bis zu Hochzeiten mit hundert Gästen. Wir bringen die Küche zu Ihnen.',
    'cater.imgcap': 'Live Mo:Mo-Bar bei privater Feier — Schanzenviertel Loft',
    'cater.pkg1': 'Thali-Festmahl', 'cater.pkg1.p': 'Ab 28 € / Person',
    'cater.pkg2': 'Mo:Mo-Bar (live)', 'cater.pkg2.p': 'Ab 36 € / Person',
    'cater.pkg3': 'Volles Bankett', 'cater.pkg3.p': 'Ab 54 € / Person',
    'cater.btn': 'Angebot anfragen',
    'contact.eyebrow': '07 · BESUCH', 'contact.title.1': 'Findet uns in der', 'contact.title.accent': 'Osterstraße.',
    'contact.findus': 'Adresse',
    'contact.addr': 'Osterstraße 142, 20255 Hamburg-Eimsbüttel',
    'contact.phonesub': 'Täglich, 11:00 — 22:00',
    'contact.emailsub': 'Für private Veranstaltungen',
    'contact.hours': 'Öffnungszeiten',
    'contact.mapcap': 'Osterstraße 142 · Eimsbüttel · 2 Min. zu Fuß von U2 Osterstraße',
    'footer.eyebrow': 'KOMMT ESSEN',
    'footer.addr': 'Osterstraße 142 · 20255 Hamburg',
    'cart.title': 'Ihre Bestellung', 'cart.empty': 'Warenkorb leer', 'cart.empty.hand': 'lasst uns das ändern',
    'cart.subtotal': 'Zwischensumme', 'cart.checkout': 'Zur Kasse',
    'nav.label': 'NAVIGATION',
    'nav.about': 'Geschichte', 'nav.menu': 'Karte', 'nav.book': 'Reservieren', 'nav.order': 'Bestellen',
    'nav.catering': 'Catering', 'nav.contact': 'Besuch',
    'toast.added': 'hinzugefügt', 'toast.book.name': 'Bitte Namen eingeben',
    'toast.book.ok': 'Reserviert', 'toast.cater.ok': 'Anfrage gesendet',
    'closed': 'Geschlossen', 'all': 'Alle',
    'days': ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
  },
  ne: {
    'cta.book': 'टेबल बुक गर्नुहोस्', 'cta.order': 'अनलाइन अर्डर',
    'stamp.1': 'हातले', 'stamp.2': 'मसाला', 'stamp.small': '२०१८ देखि',
    'hero.eyebrow': 'स्थापित २०१८ · ओस्टर्स्ट्रासे, हाम्बुर्ग',
    'hero.title.1': 'हाम्रो', 'hero.title.accent': 'अन्नपूर्ण', 'hero.title.2': 'भान्साको स्वाद।',
    'hero.hand': 'हाम्रो चुलोबाट तपाईंसम्म',
    'hero.sub': 'परम्परागत थकाली थाली, हातले बनाएको म:म र क्रस सुसी — आइम्सब्युटेलको हृदयमा।',
    'hero.imgcap': 'पित्तलको थाली — जुटको म्याटमा, सुनौलो उज्यालो',
    'hero.open': '२२:३० सम्म खुला',
    'story.eyebrow': '०१ · हाम्रो कथा',
    'story.title.1': 'मुस्ताङमा', 'story.title.accent': 'जन्मेको।', 'story.title.2': 'हाम्बुर्गमा हुर्केको।',
    'story.p': 'थकाली किचनले थक खोला उपत्यकाको खाना — फापर, याक मक्खन, टिमुर — ओस्टर्स्ट्रासेको सानो कोठामा ल्याउँछ। २०१८ देखि शेर्चन परिवारद्वारा सञ्चालित।',
    'story.imgcap': 'पारिवारिक तस्वीर — भान्साको पास, तीन पुस्ता',
    'story.c1.title': 'पारिवारिक भान्सा', 'story.c1.p': 'आमाको मसाला, हरेक हप्ता ताजा पिँधिएको।',
    'story.c2.title': 'इमानदार सामग्री', 'story.c2.p': 'स्थानीय हाम्बुर्गको उत्पादन, हिमाली अन्न र ताजा माछा।',
    'story.c3.title': 'बिस्तारै पकाइ', 'story.c3.p': 'दाल आठ घण्टा। म:मको छाला अर्डरमा बेलिन्छ।',
    'menu.eyebrow': '०२ · हाम्रो भान्सा', 'menu.title.1': 'हाम्रो', 'menu.title.accent': 'मेनु',
    'menu.sub': 'तीन भान्साका १८० भन्दा बढी परिकार — थकाली देखि क्रस सुसी सम्म। थप्न परिकारमा थिच्नुहोस्।',
    'menu.chip.veg': 'शाकाहारी मात्र', 'menu.chip.spicy': 'पिरो', 'menu.chip.glutenfree': 'ग्लुटेन-रहित',
    'menu.sig.label': 'आजको विशेष', 'menu.sig.imgcap': 'मुख्य तस्वीर — साइड लाइट, तामाको प्लेट', 'menu.sig.add': 'थप्नुहोस्',
    'menu.items': 'परिकार',
    'gallery.eyebrow': '०३ · हाम्रो ठाउँ', 'gallery.title.1': 'भान्साभित्र', 'gallery.title.accent': 'एक झलक।',
    'gallery.cap.1': 'बेलुकी २०:०० मा भान्साको पास',
    'gallery.cap.2': 'ताजै बनेका म:म',
    'gallery.cap.3': 'ढुङ्गाको ओखलमा मसाला',
    'gallery.cap.4': 'तामाको थाली, तीन प्रकारका अचार',
    'gallery.cap.5': 'न्यानो उज्यालो भोजनकक्ष, बत्ती र पित्तल',
    'gallery.cap.6': 'गर्मीको साँझ, बाहिरी आँगन',
    'book.eyebrow': '०४ · आरक्षण', 'book.title.1': 'टेबल', 'book.title.accent': 'राख्नुहोस्।',
    'book.sub': 'हामी ३२ जनासम्म सीट गर्छौं। शुक्रवार र शनिबार अग्रिम बुकिङ राम्रो।',
    'field.date': 'मिति', 'field.party': 'मानिस', 'field.time': 'समय',
    'field.name': 'नाम', 'field.email': 'इमेल', 'field.phone': 'फोन', 'field.notes': 'टिप्पणी',
    'book.btn': 'आरक्षण पठाउनुहोस्',
    'order.eyebrow': '०५ · डेलिभरी', 'order.title.1': 'घरमै', 'order.title.accent': 'लानुहोस्।',
    'order.sub': '२० मिनेटमा पिकअप, ४ किमी भित्र डेलिभरी।',
    'order.mode.pickup': 'पिकअप', 'order.mode.delivery': 'डेलिभरी',
    'order.pickup.label': 'पिकअप समय',
    'order.pickup.asap': 'तुरुन्तै · ~२० मिनेट',
    'order.pickup.30': '३० मिनेटमा', 'order.pickup.60': '१ घण्टामा',
    'order.pickup.info': 'ओस्टर्स्ट्रासे १४२ · U-Bahn बाट २ मिनेट',
    'order.delivery.label': 'पोस्टकोड',
    'order.delivery.info': '४ किमी भित्र डेलिभरी · €२.५० शुल्क · ~३५ मिनेट',
    'order.items': 'वस्तु', 'order.subtotal': 'जम्मा', 'order.delivery': 'डेलिभरी',
    'order.review': 'अर्डर हेर्नुहोस्',
    'cater.eyebrow': '०६ · केटरिङ', 'cater.title.1': 'ठूला', 'cater.title.accent': 'जमघटका लागि।',
    'cater.label': 'कार्यक्रम · ८ — २०० जना',
    'cater.p': 'आठ जनाको खानादेखि सय जनाको विवाहसम्म। हामी भान्सा तपाईंकहाँ ल्याउँछौं।',
    'cater.imgcap': 'निजी कार्यक्रममा म:म बार — Schanzenviertel लफ्ट',
    'cater.pkg1': 'थाली भोज', 'cater.pkg1.p': '€२८ / जना देखि',
    'cater.pkg2': 'म:म बार (लाइभ)', 'cater.pkg2.p': '€३६ / जना देखि',
    'cater.pkg3': 'पूर्ण भोज', 'cater.pkg3.p': '€५४ / जना देखि',
    'cater.btn': 'मूल्य सोध्नुहोस्',
    'contact.eyebrow': '०७ · हामीलाई भेट्नुहोस्', 'contact.title.1': 'ओस्टर्स्ट्रासेमा', 'contact.title.accent': 'भेटौं।',
    'contact.findus': 'ठेगाना',
    'contact.addr': 'ओस्टर्स्ट्रासे १४२, २०२५५ हाम्बुर्ग-आइम्सब्युटेल',
    'contact.phonesub': 'दैनिक ११:०० — २२:००',
    'contact.emailsub': 'निजी कार्यक्रमका लागि',
    'contact.hours': 'खुला समय',
    'contact.mapcap': 'ओस्टर्स्ट्रासे १४२ · U2 बाट २ मिनेट पैदल',
    'footer.eyebrow': 'हामीसँग खानुहोस्',
    'footer.addr': 'ओस्टर्स्ट्रासे १४२ · २०२५५ हाम्बुर्ग',
    'cart.title': 'तपाईंको अर्डर', 'cart.empty': 'अर्डर खाली छ', 'cart.empty.hand': 'केही थपौं',
    'cart.subtotal': 'जम्मा', 'cart.checkout': 'अघि बढ्नुहोस्',
    'nav.label': 'नेविगेसन',
    'nav.about': 'कथा', 'nav.menu': 'मेनु', 'nav.book': 'बुकिङ', 'nav.order': 'अर्डर',
    'nav.catering': 'केटरिङ', 'nav.contact': 'सम्पर्क',
    'toast.added': 'थपियो', 'toast.book.name': 'नाम लेख्नुहोस्',
    'toast.book.ok': 'आरक्षित', 'toast.cater.ok': 'अनुरोध पठाइयो',
    'closed': 'बन्द', 'all': 'सबै',
    'days': ['सो', 'मं', 'बु', 'बि', 'शु', 'श', 'आ'],
  },
};

/* ===== State ===== */
const state = {
  lang: 'de',
  cart: [],            // [{id, name, price, qty, num, badges}]
  group: null,         // active menu group slug
  category: 'all',     // active category slug or 'all'
  vegOnly: false,
  orderMode: 'pickup',
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
  initCartDrawer();
  initMenu();
  initVegChip();
  initReservation();
  initOrder();
  initCatering();
  initHours();
  applyI18n();
  renderSignature();
  renderMenu();
  renderOrder();
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
      renderOrder();
      renderTimePills();
      renderHours();
    });
  });
}

/* ===== Drawers (cart + nav) ===== */
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

function initCartDrawer() {
  const drawer = $('#cartDrawer');
  $('#cartToggle').addEventListener('click', () => openDrawer(drawer));
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer || e.target.closest('[data-close-drawer]')) {
      closeDrawer(drawer);
    }
  });
}

/* ===== Menu ===== */
function initMenu() {
  // ESC closes drawers
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

function dishTags(item) {
  const tags = [];
  const isVeg = (item.badges || []).some(b => b === 'vegetarian' || b === 'vegan');
  const isSpicy = (item.badges || []).includes('spicy');
  if (isVeg) tags.push('<span class="tag veg">veg</span>');
  if (isSpicy) tags.push('<span class="tag spicy">spicy</span>');
  return tags.join('');
}

function isVegItem(item) {
  return (item.badges || []).some(b => b === 'vegetarian' || b === 'vegan');
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

  const cartIds = new Set(state.cart.map(c => c.id));

  list.innerHTML = cats.map(cat => {
    const items = cat.items.filter(it => !state.vegOnly || isVegItem(it));
    if (!items.length) return '';
    return `
      <div class="menu-section">
        <div class="menu-section-head">
          <h3>${cat.label[state.lang] || cat.label.de}</h3>
        </div>
        <div class="menu-section-sub">${items.length} ${t('menu.items')}</div>
        ${items.map(item => {
          const id = `${cat.slug}-${item.num}`;
          const inCart = cartIds.has(id);
          return `
            <div class="dish" data-id="${id}" data-num="${item.num}" data-name="${escapeAttr(item.name)}" data-price="${item.price}">
              <div class="dish-num">${item.num}</div>
              <div class="dish-body">
                <div class="dish-title-row">
                  <h4>${escapeHtml(item.name)}</h4>
                  <span class="dish-dots"></span>
                  <span class="dish-price">${fmt(item.price)}</span>
                </div>
                ${item.desc ? `<div class="dish-desc">${escapeHtml(item.desc)}</div>` : ''}
                ${dishTags(item) ? `<div class="dish-tags">${dishTags(item)}</div>` : ''}
              </div>
              <button class="add-btn ${inCart ? 'added' : ''}" type="button" aria-label="Hinzufügen">${inCart ? '✓' : '+'}</button>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }).join('');

  $$('.dish', list).forEach(row => {
    row.addEventListener('click', () => {
      addToCart({
        id: row.dataset.id,
        num: row.dataset.num,
        name: row.dataset.name,
        price: parseFloat(row.dataset.price),
      });
    });
  });
}

function initVegChip() {
  $('#vegChip').addEventListener('click', () => {
    state.vegOnly = !state.vegOnly;
    $('#vegChip').classList.toggle('on', state.vegOnly);
    renderMenu();
  });
}

/* ===== Signature dish ===== */
function renderSignature() {
  // Pick a deterministic dish based on date — prefers Thakali Mo:Mo, falls back to first item
  const all = window.MENU_DATA.flatMap(g => g.categories.flatMap(c =>
    c.items.map(it => ({ ...it, cat: c, group: g.group }))
  ));
  if (!all.length) return;
  const pick = all[new Date().getDate() % all.length];
  const card = $('#signatureCard');
  card.innerHTML = `
    <div class="eyebrow" style="color:var(--mustard)">${t('menu.sig.label')}</div>
    <h3 style="margin-top:6px">${escapeHtml(pick.name)}</h3>
    ${pick.desc ? `<div class="sig-desc">${escapeHtml(pick.desc)}</div>` : ''}
    <div class="imgph">
      <img src="images/signature.jpg" alt="${escapeHtml(pick.name)}" loading="lazy"/>
      <span class="imgph-tag">PHOTO · 16:10</span>
      <span class="imgph-cap">${t('menu.sig.imgcap')}</span>
    </div>
    <div class="sig-foot">
      <span class="sig-price">${fmt(pick.price)}</span>
      <button class="btn btn-terra" type="button" id="sigAdd" style="flex:0 0 auto; padding:10px 16px">${t('menu.sig.add')}</button>
    </div>
  `;
  $('#sigAdd').addEventListener('click', () => addToCart({
    id: `${pick.cat.slug}-${pick.num}`,
    num: pick.num,
    name: pick.name,
    price: pick.price,
  }));
}

/* ===== Cart ===== */
function addToCart(item) {
  const ex = state.cart.find(c => c.id === item.id);
  if (ex) ex.qty += 1;
  else state.cart.push({ ...item, qty: 1 });
  pushToast(`${item.name} · ${t('toast.added')}`);
  renderCart();
  renderMenu();
  renderOrder();
}

function updateQty(id, delta) {
  const it = state.cart.find(c => c.id === id);
  if (!it) return;
  it.qty += delta;
  state.cart = state.cart.filter(c => c.qty > 0);
  renderCart();
  renderMenu();
  renderOrder();
}

function renderCart() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  const dot = $('#cartDot');
  if (count > 0) { dot.hidden = false; dot.textContent = count; }
  else { dot.hidden = true; }

  const list = $('#cartList');
  const foot = $('#cartFoot');
  if (state.cart.length === 0) {
    list.innerHTML = `
      <div class="cart-empty">
        ${t('cart.empty')}
        <span class="hand">${t('cart.empty.hand')}</span>
      </div>
    `;
    foot.hidden = true;
    return;
  }
  list.innerHTML = state.cart.map(it => `
    <div class="cart-row">
      <span class="name">${escapeHtml(it.name)}</span>
      <div class="qty">
        <button type="button" data-id="${it.id}" data-delta="-1" aria-label="−">−</button>
        <span>${it.qty}</span>
        <button type="button" data-id="${it.id}" data-delta="1" aria-label="+">+</button>
      </div>
      <span class="price">${fmt(it.price * it.qty)}</span>
    </div>
  `).join('');
  foot.hidden = false;
  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  $('#cartTotal').textContent = fmt(subtotal);
  $$('.cart-row .qty button', list).forEach(btn => {
    btn.addEventListener('click', () => updateQty(btn.dataset.id, parseInt(btn.dataset.delta, 10)));
  });
}

/* ===== Reservation ===== */
const TIME_SLOTS = ['17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
const DISABLED_TIMES = ['18:30', '20:00'];

function initReservation() {
  // default date = tomorrow
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
    pushToast(`${t('toast.book.ok')} · ${date} · ${state.time} · ${state.party}`);
    e.target.reset();
    state.party = 2; $('#partyNum').textContent = 2;
    $('#resDate').value = iso;
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

/* ===== Order ===== */
function initOrder() {
  $$('.order-mode-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      state.orderMode = btn.dataset.mode;
      $$('.order-mode-toggle button').forEach(b => b.classList.toggle('on', b === btn));
      renderOrder();
    });
  });
}

function renderOrder() {
  const card = $('#orderCard');
  if (!card) return;
  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const fee = state.orderMode === 'delivery' ? 2.50 : 0;
  const total = subtotal + fee;

  const pinSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>';
  const bikeSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-9h5l3 9M14 8h3"/></svg>';

  const pickupBlock = `
    <div class="field">
      <label>${t('order.pickup.label')}</label>
      <select id="pickupTime">
        <option value="asap">${t('order.pickup.asap')}</option>
        <option value="30">${t('order.pickup.30')}</option>
        <option value="60">${t('order.pickup.60')}</option>
      </select>
    </div>
    <div style="font-size:13px; color:var(--ink-2); padding:10px 0; display:flex; align-items:center; gap:6px">
      <span style="color:var(--terracotta-deep); display:inline-flex">${pinSvg}</span>
      <span>${t('order.pickup.info')}</span>
    </div>
  `;
  const deliveryBlock = `
    <div class="field">
      <label>${t('order.delivery.label')}</label>
      <input type="text" id="deliveryPostcode" value="20255"/>
    </div>
    <div style="font-size:13px; color:var(--ink-2); padding:10px 0; display:flex; align-items:center; gap:6px">
      <span style="color:var(--terracotta-deep); display:inline-flex">${bikeSvg}</span>
      <span>${t('order.delivery.info')}</span>
    </div>
  `;

  card.innerHTML = `
    ${state.orderMode === 'pickup' ? pickupBlock : deliveryBlock}
    <hr class="dashed-rule"/>
    <div style="display:flex; justify-content:space-between; margin-top:14px; font-size:14px">
      <span style="color:var(--ink-2)">${t('order.items')}</span>
      <span>${state.cart.reduce((s, i) => s + i.qty, 0)}</span>
    </div>
    <div style="display:flex; justify-content:space-between; margin-top:6px; font-size:14px">
      <span style="color:var(--ink-2)">${t('order.subtotal')}</span>
      <span>${fmt(subtotal)}</span>
    </div>
    ${fee > 0 ? `
      <div style="display:flex; justify-content:space-between; margin-top:6px; font-size:14px">
        <span style="color:var(--ink-2)">${t('order.delivery')}</span>
        <span>${fmt(fee)}</span>
      </div>
    ` : ''}
    <button class="btn btn-primary" id="orderReview" style="width:100%; margin-top:18px" type="button">
      ${t('order.review')} · ${fmt(total)}
    </button>
  `;
  $('#orderReview').addEventListener('click', () => openDrawer($('#cartDrawer')));
}

/* ===== Catering ===== */
function initCatering() {
  $('#caterBtn').addEventListener('click', () => pushToast(t('toast.cater.ok')));
}

/* ===== Hours ===== */
const HOURS_KEYS = ['12:00 — 22:30','12:00 — 22:30','closed','12:00 — 22:30','12:00 — 23:00','12:00 — 23:00','13:00 — 22:00'];
function initHours() { renderHours(); }
function renderHours() {
  const grid = $('#hoursGrid');
  if (!grid) return;
  const today = new Date().getDay();
  const todayIdx = (today + 6) % 7; // Mon=0
  const days = UI[state.lang].days;
  grid.innerHTML = days.map((d, i) => {
    const time = HOURS_KEYS[i] === 'closed' ? t('closed') : HOURS_KEYS[i];
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
function escapeAttr(s) {
  return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}
