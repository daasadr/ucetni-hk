export type Lang = 'cs' | 'en' | 'sl';

export const FOUNDED = 2010;

export const TRANSLATIONS = {
  cs: {
    name: 'Ing. Markéta Horáková',
    tagline: 'Účetnictví bez starostí.',
    sub: 'Daně bez překvapení.',
    claim: 'Svěřte mi svá čísla — vy se soustřeďte na svůj byznys.',
    cta1: 'Nezávazná konzultace zdarma',
    cta2: 'Naše služby',
    sinceLabel: 'Praha · certifikovaná účetní od roku 2010',
    badges: ['✓ Certifikát I. stupně SÚ ČR', '✓ 14+ let praxe', '✓ První konzultace zdarma'],

    nav: {
      links: [
        { label: 'O mně', href: '#o-mne' },
        { label: 'Služby', href: '#sluzby' },
        { label: 'Ceník', href: '#cenik' },
        { label: 'Reference', href: '#reference' },
        { label: 'Kontakt', href: '#kontakt' },
      ],
      cta: 'Konzultace zdarma',
      logoTitle: 'Certifikovaná účetní',
    },

    marquee: ['Certifikovaná účetní', '14+ let praxe', '180+ spokojených klientů', '100% daní podáno včas', 'Praha a okolí', 'Mzdy · DPH · Daně', 'Certifikát I. stupně SÚ ČR', 'První konzultace zdarma'],

    stats: [
      { value: -1, suffix: '', label: 'let praxe', display: undefined as string | undefined },
      { value: 180, suffix: '+', label: 'spokojených klientů', display: undefined as string | undefined },
      { value: 100, suffix: '%', label: 'daní podáno včas', display: undefined as string | undefined },
      { value: 49, suffix: '', label: '★ hodnocení', display: '4.9' },
    ],

    about: {
      tag: 'O mně',
      title: 'Čísla jsou moje vášeň, váš klid je moje práce',
      p1: 'Účetnictví dělám od roku 2010 — ne proto, že musím, ale protože mě baví pomáhat lidem a firmám mít pořádek ve financích. Začínala jsem v big-four poradenství, dnes pracuji jako nezávislá účetní s osobním přístupem ke každému klientovi.',
      p2: 'Specializuji se na OSVČ, živnostníky, malé firmy a startupy. Vím, jak to chodí v praxi — nejen z učebnic. Moji klienti oceňují, že jsem dostupná, odpovídám rychle a mluvím srozumitelně, bez zbytečného žargonu.',
      p3: 'Jsem členem Svazu účetních ČR a držitelka certifikátu I. stupně. Průběžně se vzdělávám, aby moji klienti vždy dostávali aktuální a správné poradenství.',
      credentials: ['Certifikát I. stupně — Svaz účetních ČR', 'Člen Komory certifikovaných účetních', '14+ let praxe v oboru'],
      signature: 'Ing. Markéta Horáková',
      signatureTitle: 'Certifikovaná účetní',
      yearsLabel: 'let praxe',
    },

    services: {
      tag: 'Služby',
      title: 'Co pro vás udělám',
      sub: 'Kompletní účetní péče pod jednou střechou — žádné přeskakování mezi odborníky.',
      cta: 'Nezávazně poptat služby',
      items: [
        { icon: '📊', name: 'Vedení účetnictví', desc: 'Podvojné i jednoduché účetnictví, daňová evidence. Vše přesně, včas a v souladu se zákonem.' },
        { icon: '💰', name: 'Zpracování mezd', desc: 'Mzdy, odvody, přihlášky a odhlášky. Postarám se o veškerou mzdovou agendu za vás.' },
        { icon: '🧾', name: 'Daňová přiznání', desc: 'DPFO, DPPO, přiznání k DPH. Odevzdám vše včas a hledám legální cesty ke snížení daňové zátěže.' },
        { icon: '📋', name: 'DPH agenda', desc: 'Registrace k DPH, pravidelná přiznání, kontrolní a souhrnná hlášení. Bez jediného zpoždění.' },
        { icon: '🚀', name: 'Startupy & OSVČ', desc: 'Pomoc při zahájení podnikání — výběr formy, první kroky, nastavení systému. Jdeme na to společně.' },
        { icon: '💼', name: 'Daňové poradenství', desc: 'Optimalizace daní, poradenství k investicím, přechod na s.r.o., příprava na kontrolu finančního úřadu.' },
      ],
    },

    process: {
      tag: 'Jak to funguje',
      title: 'Jednoduché kroky ke klidu',
      cta: 'Začít spolupráci',
      steps: [
        { num: '01', title: 'Zavolejte nebo napište', desc: 'Domluvíme nezávaznou úvodní konzultaci zdarma — osobně, po telefonu nebo online.' },
        { num: '02', title: 'Předáte podklady', desc: 'Doklady posíláte digitálně přes zabezpečené úložiště, poštou nebo osobně. Jak vám vyhovuje.' },
        { num: '03', title: 'Zpracuji vše za vás', desc: 'Účtuji, počítám mzdy, podávám přiznání. Vy dostáváte přehledné reporty a máte kontrolu.' },
        { num: '04', title: 'Jste v pohodě', desc: 'Termíny jsou hlídané, úřady spokojené, vy se soustředíte na svůj byznys. Tak to má být.' },
      ],
    },

    pricing: {
      tag: 'Ceník',
      title: 'Transparentní ceny bez překvapení',
      sub: 'Žádné skryté poplatky. Cenu vždy domluvíme předem a v jasné smlouvě.',
      note: 'Všechny ceny jsou bez DPH. Nejsem plátcem DPH.',
      popular: 'Nejoblíbenější',
      plans: [
        {
          name: 'OSVČ / Živnostník',
          price: 'od 1 200 Kč',
          period: '/ měsíc',
          highlight: false,
          desc: 'Pro samostatné podnikatele s daňovou evidencí.',
          features: ['Daňová evidence', 'Roční daňové přiznání (DPFO)', 'DPH přiznání (je-li plátce)', 'E-mailová podpora', 'Přehled příjmů a výdajů'],
          cta: 'Mám zájem',
        },
        {
          name: 'Malá firma',
          price: 'od 3 500 Kč',
          period: '/ měsíc',
          highlight: true,
          desc: 'Pro s.r.o. a firmy do 10 zaměstnanců. Nejoblíbenější balíček.',
          features: ['Podvojné účetnictví', 'Zpracování mezd (do 10 os.)', 'Přiznání DPPO + DPH', 'Kontrolní hlášení', 'Měsíční reporty', 'Prioritní podpora'],
          cta: 'Mám zájem',
        },
        {
          name: 'Individuální péče',
          price: 'Na míru',
          period: '',
          highlight: false,
          desc: 'Pro větší firmy, složitější struktury nebo specifické potřeby.',
          features: ['Vše z balíčku Malá firma', 'Neomezený počet zaměstnanců', 'Daňové poradenství', 'Zastoupení před FÚ', 'Pravidelné konzultace', 'SLA a dedikovaný čas'],
          cta: 'Domluvit schůzku',
        },
      ],
    },

    testimonials: {
      tag: 'Reference',
      title: 'Co říkají klienti',
      items: [
        { quote: 'S Markétou spolupracuji přes 5 let. Vždy vše vyřeší včas, proaktivně upozorní na změny v zákonech a je vždy k dispozici. Bez výhrad doporučuji.', author: 'Tomáš V.', role: 'Majitel restaurace, Praha' },
        { quote: 'Jako grafik jsem nechtěl řešit papírování. Markéta vše nastavila od začátku, DPH, živnostenský list, přiznání — prostě klid. Konečně se věnuju jen práci.', author: 'Lukáš M.', role: 'Freelance grafik, OSVČ' },
        { quote: 'Přechod od předchozí účetní byl hladký, Markéta vše převzala a okamžitě zvládla. Mám konečně přehled o financích a vím, kde stojíme.', author: 'Eva K.', role: 'Jednatelka e-shopu, s.r.o.' },
      ],
    },

    faq: {
      tag: 'Časté otázky',
      title: 'Máte otázky? Mám odpovědi',
      items: [
        { q: 'Jak probíhá první konzultace?', a: 'Úvodní konzultace je zdarma a nezávazná. Trvá cca 30–45 minut — osobně v Praze nebo online přes video. Probereme vaši situaci, potřeby a navrhneme řešení. Bez závazku.' },
        { q: 'Jak mi předávám doklady?', a: 'Jak vám vyhovuje — digitálně přes zabezpečené cloudové úložiště (doporučuji), e-mailem, poštou nebo osobně. Přizpůsobím se vašim zvyklostem.' },
        { q: 'Pracujete i se zahraničními příjmy nebo e-commerce?', a: 'Ano. Mám zkušenosti s OSVČ i firmami s příjmy ze zahraničí, fakturací do EU i mimo ni, DPH OSS a přeshraničním obchodem. Stačí se zeptat.' },
        { q: 'Jak rychle odpovídáte?', a: 'Standardně do 24 hodin v pracovní den. Klienti v balíčku Malá firma a Individuální péče mají prioritní podporu — odpovídám do 4 hodin.' },
      ],
    },

    contact: {
      tag: 'Kontakt',
      title: 'Pojďme si promluvit',
      claim: 'První konzultace je zdarma — odpovím do 24 hodin.',
      form: {
        name: 'Vaše jméno',
        email: 'E-mailová adresa',
        phone: 'Telefon (volitelně)',
        type: 'Jsem',
        typeOptions: ['OSVČ / Živnostník', 'Malá firma (s.r.o.)', 'Startup', 'Jiné'],
        message: 'Stručný popis situace nebo otázka',
        submit: 'Odeslat zprávu',
        success: 'Děkuji za zprávu! Ozvu se do 24 hodin.',
        sending: 'Odesílám…',
      },
      info: {
        phone: '+420 731 123 456',
        email: 'info@horackova-ucetni.cz',
        address: 'Václavské náměstí 10, Praha 1, 110 00',
        hours: 'Po–Pá: 8:00–17:00',
        hoursNote: 'Online schůzky i mimo pracovní dobu',
      },
      infoLabels: { phone: 'Telefon', email: 'E-mail', address: 'Adresa', hours: 'Úřední hodiny' },
      mapNote: 'Metro A/C — Muzeum (2 min pěšky)',
    },

    footer: {
      logoSub: 'Certifikovaná účetní · Praha',
      desc: 'Certifikovaná účetní se sídlem v Praze. Individuální přístup, přesnost, diskrétnost. Váš účetní klid od roku 2010.',
      disclaimer: 'Tento web je demonstrační projekt portfolia. Osoba a údaje jsou fiktivní.',
      rights: '© 2025 Ing. Markéta Horáková. Všechna práva vyhrazena.',
      chamber: 'Člen Svazu účetních ČR',
      navTitle: 'Navigace',
      contactTitle: 'Kontakt',
    },

    chatbot: {
      bubble1: 'Potřebujete se zeptat na otázku ohledně mých služeb či ověřit si dostupnost?',
      askBtn: 'ZEPTAT SE',
      bubble2: '✨ Váš osobní chatbot – můžete jej mít na webu taky',
      online: 'Asistentka · online',
      placeholder: 'Napište dotaz…',
      sendBtn: 'OK',
      prompt: 'Ptejte se…',
      fallback: 'Jsem zatím ukázkový chatbot — ale vy můžete mít na svém webu skutečného, který odpoví na cokoliv. Mezitím mi napište přímo: info@horakova-ucetni.cz',
    },
  },

  en: {
    name: 'Ing. Markéta Horáková',
    tagline: 'Accounting without worries.',
    sub: 'Taxes without surprises.',
    claim: 'Hand me your numbers — you focus on your business.',
    cta1: 'Free Consultation',
    cta2: 'Our Services',
    sinceLabel: 'Prague · Certified Accountant since 2010',
    badges: ['✓ Czech Accounting Association — Level I', '✓ 14+ years of experience', '✓ First consultation free'],

    nav: {
      links: [
        { label: 'About', href: '#o-mne' },
        { label: 'Services', href: '#sluzby' },
        { label: 'Pricing', href: '#cenik' },
        { label: 'Testimonials', href: '#reference' },
        { label: 'Contact', href: '#kontakt' },
      ],
      cta: 'Free Consultation',
      logoTitle: 'Certified Accountant',
    },

    marquee: ['Certified Accountant', '14+ years experience', '180+ satisfied clients', '100% filed on time', 'Prague & online', 'Payroll · VAT · Taxes', 'Level I Certificate', 'First consultation free'],

    stats: [
      { value: -1, suffix: '', label: 'years of experience', display: undefined as string | undefined },
      { value: 180, suffix: '+', label: 'satisfied clients', display: undefined as string | undefined },
      { value: 100, suffix: '%', label: 'tax returns on time', display: undefined as string | undefined },
      { value: 49, suffix: '', label: '★ rating', display: '4.9' },
    ],

    about: {
      tag: 'About Me',
      title: 'Numbers are my passion, your peace of mind is my work',
      p1: 'I have been working in accounting since 2010 — not because I have to, but because I genuinely enjoy helping people and businesses keep their finances in order. I started my career at a Big Four consultancy and now work as an independent accountant with a personal approach to every client.',
      p2: 'I specialise in sole traders, freelancers, small businesses, and startups. I know how things work in practice — not just in theory. My clients appreciate that I am accessible, respond promptly, and communicate clearly, without unnecessary jargon.',
      p3: 'I am a member of the Czech Accounting Association and hold a Level I certificate. I continuously update my knowledge to ensure my clients always receive accurate and current advice.',
      credentials: ['Level I Certificate — Czech Accounting Association', 'Member of the Chamber of Certified Accountants', '14+ years of professional experience'],
      signature: 'Ing. Markéta Horáková',
      signatureTitle: 'Certified Accountant',
      yearsLabel: 'years of experience',
    },

    services: {
      tag: 'Services',
      title: 'What I will do for you',
      sub: 'Complete accounting care under one roof — no jumping between specialists.',
      cta: 'Enquire about services',
      items: [
        { icon: '📊', name: 'Bookkeeping', desc: 'Double-entry and cash-basis accounting, tax records. Everything accurate, on time, and fully compliant.' },
        { icon: '💰', name: 'Payroll Processing', desc: 'Salaries, contributions, registrations and deregistrations. I handle all payroll administration for you.' },
        { icon: '🧾', name: 'Tax Returns', desc: 'Personal and corporate income tax, VAT returns. Filed on time, with legal strategies to reduce your tax burden.' },
        { icon: '📋', name: 'VAT Administration', desc: 'VAT registration, regular returns, control and summary statements. Never a day late.' },
        { icon: '🚀', name: 'Startups & Freelancers', desc: 'Help when starting your business — choosing the right structure, first steps, system setup. We do it together.' },
        { icon: '💼', name: 'Tax Advisory', desc: 'Tax optimisation, investment advice, switching to a limited company, preparation for tax authority inspections.' },
      ],
    },

    process: {
      tag: 'How It Works',
      title: 'Simple steps to peace of mind',
      cta: 'Start working together',
      steps: [
        { num: '01', title: 'Call or write', desc: 'We arrange a free, non-binding initial consultation — in person, by phone, or online.' },
        { num: '02', title: 'You send the documents', desc: 'Documents can be sent digitally via secure storage, by post, or in person. Whichever suits you.' },
        { num: '03', title: 'I take care of everything', desc: 'I do the bookkeeping, calculate payroll, and file returns. You receive clear reports and stay in control.' },
        { num: '04', title: 'You are stress-free', desc: 'Deadlines are monitored, authorities are satisfied, you focus on your business. That is how it should be.' },
      ],
    },

    pricing: {
      tag: 'Pricing',
      title: 'Transparent prices with no surprises',
      sub: 'No hidden fees. We always agree the price in advance in a clear contract.',
      note: 'All prices exclude VAT. I am not a VAT payer.',
      popular: 'Most popular',
      plans: [
        {
          name: 'Sole Trader / Freelancer',
          price: 'from 1 200 CZK',
          period: '/ month',
          highlight: false,
          desc: 'For self-employed individuals with cash-basis records.',
          features: ['Cash-basis bookkeeping', 'Annual personal income tax return', 'VAT return (if registered)', 'Email support', 'Income & expense overview'],
          cta: "I'm interested",
        },
        {
          name: 'Small Business',
          price: 'from 3 500 CZK',
          period: '/ month',
          highlight: true,
          desc: 'For Ltd. companies and businesses up to 10 employees. Most popular.',
          features: ['Double-entry bookkeeping', 'Payroll (up to 10 people)', 'Corporate income tax + VAT returns', 'Control statements', 'Monthly reports', 'Priority support'],
          cta: "I'm interested",
        },
        {
          name: 'Individual Care',
          price: 'Custom',
          period: '',
          highlight: false,
          desc: 'For larger companies, complex structures, or specific needs.',
          features: ['Everything in Small Business', 'Unlimited employees', 'Tax advisory', 'Tax authority representation', 'Regular consultations', 'SLA & dedicated time'],
          cta: 'Schedule a meeting',
        },
      ],
    },

    testimonials: {
      tag: 'Testimonials',
      title: 'What clients say',
      items: [
        { quote: 'I have been working with Markéta for over 5 years. She always handles everything on time, proactively alerts me to legal changes, and is always available. I recommend her without reservation.', author: 'Thomas V.', role: 'Restaurant owner, Prague' },
        { quote: 'As a graphic designer, I did not want to deal with paperwork. Markéta set everything up from the start — VAT, business registration, tax returns — simply peace of mind. Now I only focus on my work.', author: 'Luke M.', role: 'Freelance graphic designer' },
        { quote: 'The switch from my previous accountant was seamless. Markéta took everything over and was on top of it immediately. I finally have a clear overview of my finances and know where we stand.', author: 'Eve K.', role: 'E-commerce director, Ltd.' },
      ],
    },

    faq: {
      tag: 'FAQ',
      title: 'Have questions? I have answers',
      items: [
        { q: 'How does the first consultation work?', a: 'The initial consultation is free and non-binding. It lasts about 30–45 minutes — in person in Prague or online via video call. We discuss your situation, needs, and propose a solution. No strings attached.' },
        { q: 'How do I send you documents?', a: 'However suits you — digitally via secure cloud storage (recommended), by email, by post, or in person. I adapt to your preferred method.' },
        { q: 'Do you work with foreign income or e-commerce?', a: 'Yes. I have experience with sole traders and companies earning income from abroad, invoicing within and outside the EU, VAT OSS, and cross-border trade. Just ask.' },
        { q: 'How quickly do you respond?', a: 'Typically within 24 hours on business days. Clients on the Small Business and Individual Care packages have priority support — I respond within 4 hours.' },
      ],
    },

    contact: {
      tag: 'Contact',
      title: "Let's talk",
      claim: 'First consultation is free — I will respond within 24 hours.',
      form: {
        name: 'Your name',
        email: 'Email address',
        phone: 'Phone (optional)',
        type: 'I am',
        typeOptions: ['Sole Trader / Freelancer', 'Small Business (Ltd.)', 'Startup', 'Other'],
        message: 'Brief description of your situation or question',
        submit: 'Send message',
        success: 'Thank you for your message! I will get back to you within 24 hours.',
        sending: 'Sending…',
      },
      info: {
        phone: '+420 731 123 456',
        email: 'info@horackova-ucetni.cz',
        address: 'Václavské náměstí 10, Prague 1, 110 00',
        hours: 'Mon–Fri: 8:00–17:00',
        hoursNote: 'Online meetings also outside business hours',
      },
      infoLabels: { phone: 'Phone', email: 'Email', address: 'Address', hours: 'Office hours' },
      mapNote: 'Metro A/C — Muzeum (2 min walk)',
    },

    footer: {
      logoSub: 'Certified Accountant · Prague',
      desc: 'Certified accountant based in Prague. Personal approach, accuracy, discretion. Your accounting peace of mind since 2010.',
      disclaimer: 'This website is a demonstration portfolio project. The person and data are fictional.',
      rights: '© 2025 Ing. Markéta Horáková. All rights reserved.',
      chamber: 'Member of Czech Accounting Association',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
    },

    chatbot: {
      bubble1: 'Do you have a question about my services or want to check my availability?',
      askBtn: 'ASK ME',
      bubble2: '✨ Your own chatbot — you could have one on your website too',
      online: 'Assistant · online',
      placeholder: 'Type your question…',
      sendBtn: 'OK',
      prompt: 'Go ahead and ask…',
      fallback: 'I am a demo chatbot for now — but you can have a real one on your website that answers anything. In the meantime, write to me directly: info@horakova-ucetni.cz',
    },
  },

  sl: {
    name: 'Ing. Markéta Horáková',
    tagline: 'Računovodstvo brez skrbi.',
    sub: 'Davki brez presenečenj.',
    claim: 'Zaupajte mi svoja števila — vi se osredotočite na svoje podjetje.',
    cta1: 'Brezplačno nezavezujoče svetovanje',
    cta2: 'Naše storitve',
    sinceLabel: 'Praha · certificirana računovodkinja od leta 2010',
    badges: ['✓ Certifikat I. stopnje — Zveza računovodij ČR', '✓ 14+ let izkušenj', '✓ Prvo svetovanje brezplačno'],

    nav: {
      links: [
        { label: 'O meni', href: '#o-mne' },
        { label: 'Storitve', href: '#sluzby' },
        { label: 'Cenik', href: '#cenik' },
        { label: 'Reference', href: '#reference' },
        { label: 'Kontakt', href: '#kontakt' },
      ],
      cta: 'Brezplačno svetovanje',
      logoTitle: 'Certificirana računovodkinja',
    },

    marquee: ['Certificirana računovodkinja', '14+ let izkušenj', '180+ zadovoljnih strank', '100% pravočasno', 'Praha & spletno', 'Plače · DDV · Davki', 'Certifikat I. stopnje', 'Prvo svetovanje brezplačno'],

    stats: [
      { value: -1, suffix: '', label: 'let izkušenj', display: undefined as string | undefined },
      { value: 180, suffix: '+', label: 'zadovoljnih strank', display: undefined as string | undefined },
      { value: 100, suffix: '%', label: 'davčnih napovedi pravočasno', display: undefined as string | undefined },
      { value: 49, suffix: '', label: '★ ocena', display: '4.9' },
    ],

    about: {
      tag: 'O meni',
      title: 'Številke so moja strast, vaš mir je moje delo',
      p1: 'Računovodstvo opravljam od leta 2010 — ne zato, ker moram, ampak ker me veseli pomagati ljudem in podjetjem pri urejanju financ. Začela sem v svetovalnem podjetju Big Four, danes delam kot neodvisna računovodkinja z osebnim pristopom do vsake stranke.',
      p2: 'Specializiram se za s.p., obrtnike, majhna podjetja in startupe. Vem, kako gre v praksi — ne le iz učbenikov. Moje stranke cenijo, da sem dostopna, odgovarjam hitro in komuniciram razumljivo, brez nepotrebnega žargona.',
      p3: 'Sem članica Zveze računovodij ČR in imetnica certifikata I. stopnje. Sproti se izobražujem, da moje stranke vedno dobijo aktualne in pravilne informacije.',
      credentials: ['Certifikat I. stopnje — Zveza računovodij ČR', 'Članica Zbornice certificiranih računovodij', '14+ let izkušenj v stroki'],
      signature: 'Ing. Markéta Horáková',
      signatureTitle: 'Certificirana računovodkinja',
      yearsLabel: 'let izkušenj',
    },

    services: {
      tag: 'Storitve',
      title: 'Kaj bom naredila za vas',
      sub: 'Popolna računovodska oskrba pod eno streho — brez skakanja med strokovnjaki.',
      cta: 'Povprašajte o storitvah',
      items: [
        { icon: '📊', name: 'Vodenje računovodstva', desc: 'Dvostavno in enostavno računovodstvo, davčna evidenca. Vse natančno, pravočasno in v skladu z zakonom.' },
        { icon: '💰', name: 'Obračun plač', desc: 'Plače, prispevki, prijave in odjave. Poskrbela bom za vso plačilno dokumentacijo namesto vas.' },
        { icon: '🧾', name: 'Davčne napovedi', desc: 'Dohodnina, davek od dohodka pravnih oseb, napovedi za DDV. Oddala bom vse pravočasno in iskala zakonite načine za znižanje davčne obremenitve.' },
        { icon: '📋', name: 'DDV agenda', desc: 'Registracija za DDV, redne napovedi, kontrolna in zbirna poročila. Brez zamud.' },
        { icon: '🚀', name: 'Startupi & s.p.', desc: 'Pomoč pri začetku poslovanja — izbira oblike, prvi koraki, vzpostavitev sistema. Skupaj gremo naprej.' },
        { icon: '💼', name: 'Davčno svetovanje', desc: 'Optimizacija davkov, svetovanje glede naložb, prehod na d.o.o., priprava na davčni inšpektorat.' },
      ],
    },

    process: {
      tag: 'Kako deluje',
      title: 'Preprosti koraki do miru',
      cta: 'Začnimo sodelovati',
      steps: [
        { num: '01', title: 'Pokličite ali pišite', desc: 'Dogovorili se bomo za brezplačno nezavezujoče uvodno svetovanje — osebno, po telefonu ali spletno.' },
        { num: '02', title: 'Posredujete dokumentacijo', desc: 'Dokumente pošljete digitalno prek zavarovanega shranjevanja, po pošti ali osebno. Kot vam ustreza.' },
        { num: '03', title: 'Uredim vse namesto vas', desc: 'Knjižim, računam plače, vlagam napovedi. Vi dobivate pregledna poročila in imate nadzor.' },
        { num: '04', title: 'Vi ste brez skrbi', desc: 'Roki so pod nadzorom, uradniki zadovoljni, vi se osredotočite na svoje podjetje. Tako mora biti.' },
      ],
    },

    pricing: {
      tag: 'Cenik',
      title: 'Pregledne cene brez presenečenj',
      sub: 'Brez skritih stroškov. Ceno vedno dogovorimo vnaprej in v jasni pogodbi.',
      note: 'Vse cene so brez DDV. Nisem zavezanec za DDV.',
      popular: 'Najbolj priljubljen',
      plans: [
        {
          name: 'S.p. / Obrtnik',
          price: 'od 1 200 CZK',
          period: '/ mesec',
          highlight: false,
          desc: 'Za samostojne podjetnike z davčno evidenco.',
          features: ['Davčna evidenca', 'Letna dohodninska napoved', 'Napoved za DDV (če zavezanec)', 'Podpora po e-pošti', 'Pregled prihodkov in odhodkov'],
          cta: 'Zanima me',
        },
        {
          name: 'Majhno podjetje',
          price: 'od 3 500 CZK',
          period: '/ mesec',
          highlight: true,
          desc: 'Za d.o.o. in podjetja z do 10 zaposlenimi. Najbolj priljubljen paket.',
          features: ['Dvostavno računovodstvo', 'Obračun plač (do 10 oseb)', 'Davek od dohodka prav. oseb + DDV', 'Kontrolna poročila', 'Mesečna poročila', 'Prednostna podpora'],
          cta: 'Zanima me',
        },
        {
          name: 'Individualna oskrba',
          price: 'Po meri',
          period: '',
          highlight: false,
          desc: 'Za večja podjetja, kompleksnejše strukture ali posebne potrebe.',
          features: ['Vse iz paketa Majhno podjetje', 'Neomejeno število zaposlenih', 'Davčno svetovanje', 'Zastopanje pred davčnim organom', 'Redna svetovanja', 'SLA in namenski čas'],
          cta: 'Dogovorite sestanek',
        },
      ],
    },

    testimonials: {
      tag: 'Reference',
      title: 'Kaj pravijo stranke',
      items: [
        { quote: 'Z Markéto sodelujem že več kot 5 let. Vedno vse uredi pravočasno, proaktivno opozori na spremembe zakonodaje in je vedno na voljo. Priporočam jo brez pridržkov.', author: 'Tomaž V.', role: 'Lastnik restavracije, Praha' },
        { quote: 'Kot grafični oblikovalec nisem hotel reševati papirologije. Markéta je vse uredila od začetka — DDV, registracijo, davčne napovedi — preprosto mir. Zdaj se ukvarjam samo z delom.', author: 'Luka M.', role: 'Freelance grafični oblikovalec, s.p.' },
        { quote: 'Prehod od prejšnje računovodkinje je bil gladek, Markéta je prevzela vse in se takoj znašla. Končno imam pregled nad financami in vem, kje stojimo.', author: 'Eva K.', role: 'Direktorica spletne trgovine, d.o.o.' },
      ],
    },

    faq: {
      tag: 'Pogosta vprašanja',
      title: 'Imate vprašanja? Imam odgovore',
      items: [
        { q: 'Kako poteka prvo svetovanje?', a: 'Uvodno svetovanje je brezplačno in nezavezujoče. Traja ok. 30–45 minut — osebno v Pragi ali spletno prek videoklica. Pogovorimo se o vaši situaciji, potrebah in predlagamo rešitev. Brez obveznosti.' },
        { q: 'Kako vam posredujem dokumentacijo?', a: 'Kot vam ustreza — digitalno prek zavarovanega oblačnega shranjevanja (priporočam), po e-pošti, po pošti ali osebno. Prilagodim se vašim navadam.' },
        { q: 'Delate tudi s tujimi prihodki ali spletno prodajo?', a: 'Da. Imam izkušnje s s.p. in podjetji s prihodki iz tujine, fakturiranjem v EU in izven nje, DDV OSS in čezmejno trgovino. Preprosto vprašajte.' },
        { q: 'Kako hitro odgovarjate?', a: 'Standardno v 24 urah na delovni dan. Stranke v paketu Majhno podjetje in Individualna oskrba imajo prednostno podporo — odgovarjam v 4 urah.' },
      ],
    },

    contact: {
      tag: 'Kontakt',
      title: 'Pogovorimo se',
      claim: 'Prvo svetovanje je brezplačno — odgovorim v 24 urah.',
      form: {
        name: 'Vaše ime',
        email: 'E-poštni naslov',
        phone: 'Telefon (neobvezno)',
        type: 'Sem',
        typeOptions: ['S.p. / Obrtnik', 'Majhno podjetje (d.o.o.)', 'Startup', 'Drugo'],
        message: 'Kratek opis situacije ali vprašanje',
        submit: 'Pošlji sporočilo',
        success: 'Hvala za sporočilo! Oglasila se bom v 24 urah.',
        sending: 'Pošiljam…',
      },
      info: {
        phone: '+420 731 123 456',
        email: 'info@horackova-ucetni.cz',
        address: 'Václavské náměstí 10, Praha 1, 110 00',
        hours: 'Pon–Pet: 8:00–17:00',
        hoursNote: 'Spletna srečanja tudi izven delovnega časa',
      },
      infoLabels: { phone: 'Telefon', email: 'E-pošta', address: 'Naslov', hours: 'Uradne ure' },
      mapNote: 'Metro A/C — Muzeum (2 min peš)',
    },

    footer: {
      logoSub: 'Certificirana računovodkinja · Praha',
      desc: 'Certificirana računovodkinja s sedežem v Pragi. Individualen pristop, natančnost, diskretnost. Vaš računovodski mir od leta 2010.',
      disclaimer: 'Ta spletna stran je demonstracijski projekt portfolia. Oseba in podatki so izmišljeni.',
      rights: '© 2025 Ing. Markéta Horáková. Vse pravice pridržane.',
      chamber: 'Članica Zveze računovodij ČR',
      navTitle: 'Navigacija',
      contactTitle: 'Kontakt',
    },

    chatbot: {
      bubble1: 'Imate vprašanje o mojih storitvah ali želite preveriti razpoložljivost terminov?',
      askBtn: 'VPRAŠAJTE',
      bubble2: '✨ Vaš osebni chatbot — imate ga lahko tudi na svojem spletnem mestu',
      online: 'Asistentka · na voljo',
      placeholder: 'Napišite vprašanje…',
      sendBtn: 'OK',
      prompt: 'Vprašajte…',
      fallback: 'Zaenkrat sem demo chatbot — a vi bi na svojem spletnem mestu lahko imeli pravega, ki odgovori na karkoli. Medtem mi pišite neposredno: info@horakova-ucetni.cz',
    },
  },
};
