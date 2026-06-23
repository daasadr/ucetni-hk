export const CONTENT = {
  name: 'Ing. Markéta Horáková',
  title: 'Certifikovaná účetní',
  location: 'Praha',
  since: 2010,
  tagline: 'Účetnictví bez starostí.',
  sub: 'Daně bez překvapení.',
  claim: 'Svěřte mi svá čísla — vy se soustřeďte na svůj byznys.',
  cta1: 'Nezávazná konzultace zdarma',
  cta2: 'Naše služby',
  sinceLabel: 'Praha · certifikovaná účetní od roku 2010',

  stats: [
    { value: -1, suffix: '', label: 'let praxe' },
    { value: 180, suffix: '+', label: 'spokojených klientů' },
    { value: 100, suffix: '%', label: 'daní podáno včas' },
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
  },

  services: {
    tag: 'Služby',
    title: 'Co pro vás udělám',
    sub: 'Kompletní účetní péče pod jednou střechou — žádné přeskakování mezi odborníky.',
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
    mapNote: 'Metro A/C — Muzeum (2 min pěšky)',
    mapTitle: 'Václavské náměstí, Praha 1',
  },

  footer: {
    desc: 'Certifikovaná účetní se sídlem v Praze. Individuální přístup, přesnost, diskrétnost. Váš účetní klid od roku 2010.',
    disclaimer: 'Tento web je demonstrační projekt portfolia. Osoba a údaje jsou fiktivní.',
    rights: '© 2025 Ing. Markéta Horáková. Všechna práva vyhrazena.',
    chamber: 'Člen Svazu účetních ČR',
    links: ['Služby', 'Ceník', 'Reference', 'Kontakt'],
  },
};

export const FOUNDED = 2010;
