// lib/dictionary.ts
export type Lang = "pl" | "en";

export const dictionaries = {
  pl: {
    meta: {
      title: "Filip Wrona — Fullstack & Next.js Engineer",
      description:
        "Projektuję i programuję ultraszybkie aplikacje webowe, serwisy biznesowe oraz MVP w Next.js, TypeScript i Tailwind CSS.",
    },
    nav: {
      menu: "MENU",
      close: "ZAMKNIJ",
      items: [
        { label: "PROJEKTY", href: "#projekty" },
        { label: "OFERTA", href: "#oferta" },
        { label: "PROCES", href: "#proces" },
        { label: "OPINIE", href: "#opinie" },
        { label: "FAQ", href: "#faq" },
        { label: "KONTAKT", href: "#kontakt" },
      ],
      socials: [
        { label: "GitHub", href: "https://github.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "X [Twitter]", href: "https://twitter.com" },
      ],
    },
    hero: {
      badge: "DOSTĘPNY DO NOWYCH PROJEKTÓW • 2026",
      bgText: "FILIP WRONA",
      role: "FULLSTACK & NEXT.JS ENGINEER",
      titleStart: "Tworzę ultraszybkie strony i aplikacje w",
      titleEnd: "które rozwijają Twój biznes.",
      desc: "Łączę nowoczesny, surowy minimalizm z bezpieczną architekturą backendową i bezkompromisową wydajnością. Zero zbędnego kodu, maksymalny zysk.",
      ctaPrimary: "Wyceń swój projekt",
      ctaSecondary: "Zobacz realizacje",
    },
    metrics: [
      { value: "100/100", label: "Google PageSpeed Insights" },
      { value: "< 0.4s", label: "Średni czas ładowania" },
      { value: "99.9%", label: "Uptime & Niezawodność" },
      { value: "100%", label: "Pokrycie Type-Safe (TypeScript)" },
    ],
    techStack: {
      title: "TECHNOLOGIE & NARZĘDZIA",
      items: [
        "Next.js (App Router)",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Supabase",
        "Node.js",
        "Prisma ORM",
        "Stripe API",
        "Vercel",
      ],
    },
    projects: {
      tag: "// 01. WYBRANE REALIZACJE",
      title: "Projekty, które przynoszą wyniki",
      ctaLive: "Zobacz Live ↗",
      items: [
        {
          num: "01",
          title: "Vortex Motion SaaS",
          category: "Aplikacja Webowa / SaaS Platform",
          stack: "Next.js • TypeScript • Supabase • Stripe",
          desc: "Kompletna platforma subskrypcyjna z panelem klienta, generowaniem raportów PDF w czasie rzeczywistym i webhooks Stripe.",
          result:
            "+180% wzrost konwersji rejestracji • Czas odpowiedzi API: 85ms",
        },
        {
          num: "02",
          title: "Aura Architecture Studio",
          category: "Serwis Biznesowy / Portfolio",
          stack: "Next.js • Tailwind CSS • Sanity CMS",
          desc: "Ultraszybka strona portfolio dla biura architektonicznego zoptymalizowana pod Core Web Vitals i najwyższe pozycje w Google.",
          result: "Wynik 100/100 PageSpeed • Czas ładowania: 0.35s",
        },
        {
          num: "03",
          title: "Nexus Commerce",
          category: "Sklep Headless E-Commerce",
          stack: "Next.js • Node.js • PostgreSQL • PayU",
          desc: "Błyskawiczny sklep internetowy z autorskim koszykiem, natychmiastowym filtrowaniem produktów i integracją płatności BLIK/Stripe.",
          result: "Spadek porzuconych koszyków o 34% • +65% sprzedaży mobilnej",
        },
      ],
    },
    services: {
      tag: "// 02. ZAKRES USŁUG",
      title: "W czym dokładnie mogę Ci pomóc?",
      list: [
        {
          num: "01",
          name: "Dedykowane Aplikacje Webowe & SaaS",
          desc: "Kompletne aplikacje od podstaw: bazy danych, systemy logowania (Auth), panele użytkowników, integracje API i płatności cykliczne.",
        },
        {
          num: "02",
          name: "Strony Firmowe & Landing Pages",
          desc: "Projektowane bezpośrednio w kodzie, zoptymalizowane pod generowanie leadów, sprzedaż i perfekcyjne wyniki SEO w Google.",
        },
        {
          num: "03",
          name: "Wdrożenia Headless CMS",
          desc: "Integracja nowoczesnych paneli (Sanity, Strapi), dzięki którym sam zmieniasz teksty i zdjęcia w 3 kliknięciach bez pomocy programisty.",
        },
        {
          num: "04",
          name: "Optymalizacja & Migracja z WordPressa",
          desc: "Ratowanie powolnych, zawieszających się stron. Przepisanie na Next.js, przyspieszenie do < 0.5s i zabezpieczenie przed atakami.",
        },
      ],
    },
    about: {
      tag: "// 03. PROCES WSPÓŁPRACY",
      title: "Szybka realizacja w podejściu Code-First.",
      desc: "Zamiast marnować tygodnie na statyczne rysunki, buduję od razu żywy prototyp w Next.js. Testujesz prawdziwą stronę w przeglądarce od pierwszych dni.",
      steps: [
        {
          step: "01",
          name: "Brief & Strategia",
          text: "Ustalamy cele biznesowe, strukturę podstron, architekturę danych oraz styl wizualny.",
        },
        {
          step: "02",
          name: "Żywy Prototyp w Next.js",
          text: "Tworzę klikalny szkielet strony w przeglądarce, który możesz przetestować na telefonie.",
        },
        {
          step: "03",
          name: "Backend, CMS & Animacje",
          text: "Koduję logikę biznesową, podpinam bazy danych, dopracowuję mikro-interakcje i treść.",
        },
        {
          step: "04",
          name: "Wdrożenie & SEO 100%",
          text: "Optymalizacja Core Web Vitals, konfiguracja domeny, analityka i zgłoszenie do indeksu Google.",
        },
      ],
    },
    testimonials: {
      tag: "// 04. REKOMENDACJE",
      title: "Opinie klientów o współpracy",
      list: [
        {
          quote:
            "Filip przepisał nasz serwis na Next.js. Czas ładowania spadł z 4.5s do 0.4s, a wynik w Google PageSpeed to stałe 100/100. Liczba zapytań z formularza wzrosła o 45% w pierwszym miesiącu.",
          author: "Michał Kowalski",
          role: "Founder & CEO",
          company: "SaaSify Studio",
        },
        {
          quote:
            "W 3 tygodnie dowieźliśmy kompletne MVP z autoryzacją i płatnościami Stripe. Świetny kontakt, zero lania wody i codzienne podglądy kodu w przeglądarce. Zdecydowanie polecam.",
          author: "Anna Nowak",
          role: "Product Manager",
          company: "FinEdge Tech",
        },
        {
          quote:
            "Dostaliśmy czysty kod w TypeScripcie i intuicyjny panel CMS. Zmiana oferty zajmuje nam 2 minuty. Najlepsza współpraca programistyczna od lat.",
          author: "Tomasz Wiśniewski",
          role: "Dyrektor Zarządzający",
          company: "Studio Form",
        },
      ],
    },
    faq: {
      tag: "// 05. FAQ",
      title: "Często Zadawane Pytania",
      items: [
        {
          q: "Kto jest właścicielem kodu po zakończeniu projektu?",
          a: "Ty w 100%. Otrzymujesz pełne autorskie prawa majątkowe, dostęp do repozytorium GitHub oraz baz danych bez żadnych ukrytych opłat licencyjnych.",
        },
        {
          q: "Ile kosztuje stworzenie strony lub aplikacji?",
          a: "Proste strony wizytówkowe i landing page zaczynają się od 3 500 zł, a dedykowane systemy fullstack / MVP z bazą danych od 7 500 zł. Wycena jest zawsze darmowa i przejrzysta.",
        },
        {
          q: "Jak długo trwa realizacja?",
          a: "Dzięki pracy bezpośrednio w kodzie (bez przeciągania faz makiety): strona firmowa powstaje w 1–2 tygodnie, a kompletna aplikacja MVP w 3–4 tygodnie.",
        },
        {
          q: "Dlaczego Next.js zamiast zwykłego WordPressa?",
          a: "Next.js jest 5-10x szybszy, nie wymaga dziurawych wtyczek podatnych na wirusy, nie zawiesza się pod ruchem i osiąga maksymalne pozycje w wyszukiwarce Google.",
        },
        {
          q: "Czy będę mógł samodzielnie edytować teksty i zdjęcia?",
          a: "Tak. Integruję stronę z prostym panelem CMS i nagrywam dla Ciebie instrukcję wideo, dzięki czemu edycja treści jest banalnie prosta.",
        },
        {
          q: "Jakie są miesięczne koszty hostingu i infrastruktury?",
          a: "W 95% przypadków 0 zł miesięcznie. Korzystam z nowoczesnej infrastruktury chmurowej (Vercel, Supabase), której darmowe pakiety w zupełności wystarczają dla standardowego ruchu firmowego.",
        },
      ],
    },
    contact: {
      tag: "// 06. KONTAKT",
      title: "Zbudujmy Twój produkt od zera.",
      desc: "Masz pomysł na aplikację, potrzebujesz nowej strony lub chcesz przyspieszyć obecną? Napisz do mnie – odpowiadam zazwyczaj w ciągu kilku godzin.",
      email: "kontakt@filipwrona.pl",
      copyEmail: "Kopiuj e-mail",
      copied: "Skopiowano do schowka! ✓",
      bookCall: "Umów 15-min rozmowę ↗",
      formTitle: "Krótki brief projektu",
      namePlaceholder: "Twoje imię i nazwisko",
      emailPlaceholder: "Twój adres e-mail",
      budgetPlaceholder: "Szacowany budżet (np. 5k - 10k zł)",
      messagePlaceholder: "Opisz krótko swój projekt...",
      submitBtn: "Wyślij zapytanie →",
    },
    footer: {
      copyright: "© 2026 FILIP WRONA. FULLSTACK & NEXT.JS ENGINEER.",
      rights: "ALL RIGHTS RESERVED • BUILT WITH NEXT.JS & TAILWIND CSS",
    },
  },

  en: {
    meta: {
      title: "Filip Wrona — Fullstack & Next.js Engineer",
      description:
        "Engineering high-performance web applications, digital platforms, and Next.js websites built with TypeScript and Tailwind CSS.",
    },
    nav: {
      menu: "MENU",
      close: "CLOSE",
      items: [
        { label: "PROJECTS", href: "#projekty" },
        { label: "SERVICES", href: "#oferta" },
        { label: "PROCESS", href: "#proces" },
        { label: "REVIEWS", href: "#opinie" },
        { label: "FAQ", href: "#faq" },
        { label: "CONTACT", href: "#kontakt" },
      ],
      socials: [
        { label: "GitHub", href: "https://github.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "X [Twitter]", href: "https://twitter.com" },
      ],
    },
    hero: {
      badge: "AVAILABLE FOR NEW PROJECTS • 2026",
      bgText: "FILIP WRONA",
      role: "FULLSTACK & NEXT.JS ENGINEER",
      titleStart: "Crafting ultra-fast web apps in",
      titleEnd: "engineered to scale your business.",
      desc: "Merging brutalist minimalism with robust backend architecture and uncompromising performance. Zero code bloat, maximum conversion.",
      ctaPrimary: "Estimate Your Project",
      ctaSecondary: "View Selected Work",
    },
    metrics: [
      { value: "100/100", label: "Google PageSpeed Score" },
      { value: "< 0.4s", label: "Average Load Time" },
      { value: "99.9%", label: "Production Uptime" },
      { value: "100%", label: "Type-Safe Coverage (TypeScript)" },
    ],
    techStack: {
      title: "CORE TECHNOLOGIES & STACK",
      items: [
        "Next.js (App Router)",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Supabase",
        "Node.js",
        "Prisma ORM",
        "Stripe API",
        "Vercel",
      ],
    },
    projects: {
      tag: "// 01. SELECTED CASE STUDIES",
      title: "Projects engineered for real impact",
      ctaLive: "Live Demo ↗",
      items: [
        {
          num: "01",
          title: "Vortex Motion SaaS",
          category: "Web Application / SaaS Platform",
          stack: "Next.js • TypeScript • Supabase • Stripe",
          desc: "Full-scale subscription platform with user dashboard, real-time PDF generation engine, and automated Stripe webhooks.",
          result: "+180% signup conversion rate • 85ms API latency",
        },
        {
          num: "02",
          title: "Aura Architecture Studio",
          category: "Business Website / Portfolio",
          stack: "Next.js • Tailwind CSS • Sanity CMS",
          desc: "Ultra-fast architecture portfolio engineered for flawless Core Web Vitals and top Google search rankings.",
          result: "100/100 PageSpeed Score • 0.35s Initial Load",
        },
        {
          num: "03",
          title: "Nexus Commerce",
          category: "Headless E-Commerce Store",
          stack: "Next.js • Node.js • PostgreSQL • Stripe",
          desc: "Blazing fast online store with custom cart, instant client-side filtering, and frictionless checkout integration.",
          result: "34% drop in cart abandonment • +65% mobile sales",
        },
      ],
    },
    services: {
      tag: "// 02. SERVICES",
      title: "How I can help your product scale",
      list: [
        {
          num: "01",
          name: "Bespoke Fullstack Apps & SaaS MVPs",
          desc: "End-to-end web applications: relational databases, secure authentication, user roles, API design, and recurring subscription billing.",
        },
        {
          num: "02",
          name: "High-Performance Marketing Websites",
          desc: "Coded directly in Next.js, tailored for lead generation, maximum conversion rates, and top-tier SEO benchmarks.",
        },
        {
          num: "03",
          name: "Headless CMS Integration",
          desc: "Connecting modular CMS backends (Sanity, Strapi) allowing you to edit all content and media in seconds without touching code.",
        },
        {
          num: "04",
          name: "Performance Tuning & Migrations",
          desc: "Rescuing slow, vulnerable legacy sites. Migrating from WordPress to Next.js with sub-500ms load times and hardened security.",
        },
      ],
    },
    about: {
      tag: "// 03. WORKFLOW",
      title: "Rapid execution with Code-First development.",
      desc: "Instead of wasting weeks on static design files, I build interactive web prototypes directly in Next.js. You test real code on real devices from day one.",
      steps: [
        {
          step: "01",
          name: "Brief & Strategy",
          text: "We define core business targets, data architecture, page hierarchy, and visual direction.",
        },
        {
          step: "02",
          name: "Interactive Next.js Prototype",
          text: "I build a clickable web prototype you can test and review on mobile and desktop.",
        },
        {
          step: "03",
          name: "Backend, CMS & Polish",
          text: "Engineering database queries, integrating API endpoints, and polishing micro-interactions.",
        },
        {
          step: "04",
          name: "Production Launch & SEO",
          text: "Core Web Vitals tuning, domain DNS deployment, and search engine index submission.",
        },
      ],
    },
    testimonials: {
      tag: "// 04. TESTIMONIALS",
      title: "Client feedback & track record",
      list: [
        {
          quote:
            "Filip migrated our platform to Next.js. Load times dropped from 4.5s to 0.4s, and our PageSpeed score is a solid 100/100. Inbound leads increased by 45% in the first month.",
          author: "Michał Kowalski",
          role: "Founder & CEO",
          company: "SaaSify Studio",
        },
        {
          quote:
            "We shipped a full-featured MVP with auth and Stripe billing in just 3 weeks. Direct communication, zero fluff, and daily live code previews. Highly recommended.",
          author: "Anna Nowak",
          role: "Product Manager",
          company: "FinEdge Tech",
        },
        {
          quote:
            "Delivered crystal-clear TypeScript code and an intuitive CMS. Updating our services takes 2 minutes. Best engineering collaboration we've had.",
          author: "Tomasz Wiśniewski",
          role: "Managing Director",
          company: "Studio Form",
        },
      ],
    },
    faq: {
      tag: "// 05. FAQ",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Who owns the source code once the project is finished?",
          a: "You own 100%. Full intellectual property rights, GitHub repository access, and database credentials are transferred to you with zero vendor lock-in.",
        },
        {
          q: "What are the typical project costs?",
          a: "Standard high-performance landing pages and business sites start from €900, while bespoke fullstack applications / MVPs start from €1,800. All quotes are transparent and upfront.",
        },
        {
          q: "What is the typical turnaround time?",
          a: "Thanks to our code-first approach: marketing websites are delivered in 1–2 weeks, and complete fullstack MVPs in 3–4 weeks.",
        },
        {
          q: "Why Next.js instead of WordPress or Webflow?",
          a: "Next.js is 5–10x faster, immune to bloated plugin vulnerabilities, doesn't crash under high traffic, and achieves perfect Google PageSpeed scores.",
        },
        {
          q: "Will I be able to edit content independently?",
          a: "Yes. I integrate a modern, easy-to-use CMS and provide a personalized video walkthrough demonstrating how to update text and media effortlessly.",
        },
        {
          q: "What are the ongoing monthly hosting costs?",
          a: "Typically $0/month. Modern serverless cloud stacks (Vercel, Supabase) offer generous free tiers that effortlessly handle standard production traffic.",
        },
      ],
    },
    contact: {
      tag: "// 06. CONTACT",
      title: "Let's build your product from scratch.",
      desc: "Have a project in mind, need a new platform, or want to supercharge your current web app? Get in touch – I reply within a few hours.",
      email: "kontakt@filipwrona.pl",
      copyEmail: "Copy email",
      copied: "Copied to clipboard! ✓",
      bookCall: "Book a 15-min Call ↗",
      formTitle: "Project Quick Inquiry",
      namePlaceholder: "Your full name",
      emailPlaceholder: "Your email address",
      budgetPlaceholder: "Estimated budget (e.g. $2k - $5k)",
      messagePlaceholder: "Briefly tell me about your project...",
      submitBtn: "Send Inquiry →",
    },
    footer: {
      copyright: "© 2026 FILIP WRONA. FULLSTACK & NEXT.JS ENGINEER.",
      rights: "ALL RIGHTS RESERVED • BUILT WITH NEXT.JS & TAILWIND CSS",
    },
  },
};
