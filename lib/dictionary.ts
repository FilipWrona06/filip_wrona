export type Lang = "pl" | "en";

export const dictionaries = {
  pl: {
    meta: {
      title: "Filip Wrona — Nowoczesne Strony Internetowe w Next.js",
      description:
        "Projektuję i programuję ultraszybkie strony internetowe, landing page i sklepy w oparciu o Next.js i Tailwind CSS. Sprawdź portfolio.",
    },
    nav: {
      menu: "MENU",
      close: "ZAMKNIJ",
      items: [
        { label: "PROJEKTY", href: "#projekty" },
        { label: "OFERTA", href: "#oferta" },
        { label: "PROCES & O MNIE", href: "#o-mnie" },
        { label: "KONTAKT", href: "#kontakt" },
      ],
      socials: [
        { label: "GitHub", href: "https://github.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "X [Twitter]", href: "https://twitter.com" },
      ],
    },
    hero: {
      badge: "DOSTĘPNY DO PROJEKTÓW • 2026",
      titleStart: "Tworzę ultraszybkie strony w",
      titleEnd: "które rozwijają Twój biznes.",
      desc: "Łączę surowy, nowoczesny minimalizm z bezkompromisową wydajnością i SEO. Zero zbędnego kodu, maksymalna konwersja.",
      ctaPrimary: "Wyceń swój projekt",
      ctaSecondary: "Zobacz wybrane prace",
    },
    services: {
      tag: "// OFERTA",
      title: "W czym mogę Ci pomóc?",
      list: [
        {
          num: "01",
          name: "Strony Firmowe & Landing Page",
          desc: "Indywidualnie projektowane strony w Next.js zoptymalizowane pod konwersję, Core Web Vitals i najwyższe pozycje w Google.",
        },
        {
          num: "02",
          name: "Wdrożenia Headless CMS",
          desc: "Integracja z nowoczesnymi panelami administracyjnymi (Sanity, Strapi), które pozwalają Ci wygodnie edytować treści bez pomocy programisty.",
        },
        {
          num: "03",
          name: "E-Commerce & Aplikacje Webowe",
          desc: "Szybkie i bezpieczne sklepy internetowe zintegrowane ze Stripe, Shopify lub MedusaJS.",
        },
        {
          num: "04",
          name: "Audyt & Przyspieszanie Stron",
          desc: "Migracja przestarzałych serwisów z WordPressa do Next.js. Wyniki 95-100/100 w PageSpeed Insights.",
        },
      ],
    },
    projects: {
      tag: "// PORTFOLIO",
      title: "Wybrane Realizacje",
      cta: "Zobacz Case Study →",
      items: [
        {
          title: "Vortex Motion Studio",
          category: "Brand Identity & Web",
          tech: "Next.js • Tailwind • SSG",
          result: "100/100 PageSpeed • +140% Leadów",
        },
        {
          title: "Aura Architecture",
          category: "Minimalist Portfolio",
          tech: "Next.js • Headless CMS",
          result: "Czas ładowania 0.4s",
        },
        {
          title: "Nexus Platform",
          category: "SaaS Landing Page",
          tech: "Next.js • TypeScript",
          result: "Konwersja na poziomie 8.2%",
        },
      ],
    },
    about: {
      tag: "// PROCES & PODEJŚCIE",
      title: "Nie tworzę szablonowych stron z generatorów.",
      desc: "Każda strona to szyte na miarę oprogramowanie w czystym Next.js. Otrzymujesz kod, który ładuje się natychmiast, jest bezpieczny przed atakami i buduje zaufanie Twoich klientów od pierwszej sekundy.",
      steps: [
        {
          step: "01",
          name: "Konsultacja i Strategia",
          text: "Analizujemy Twoją branżę, konkurencję i cel biznesowy strony.",
        },
        {
          step: "02",
          name: "Projekt UI/UX w Figma",
          text: "Przygotowuję unikalną makietę dopasowaną do Twojej identyfikacji.",
        },
        {
          step: "03",
          name: "Kodowanie w Next.js",
          text: "Czysty, semantyczny kod, bezkompromisowa optymalizacja i testy.",
        },
        {
          step: "04",
          name: "Wdrożenie i Szkolenie",
          text: "Podpięcie domeny, analityki, indeksacja w Google i przekazanie serwisu.",
        },
      ],
    },
    contact: {
      tag: "// KONTAKT",
      title: "Porozmawiajmy o Twoim projekcie.",
      desc: "Masz pomysł na stronę lub chcesz odświeżyć obecną? Napisz do mnie – odpowiadam zazwyczaj w ciągu 24h.",
      email: "kontakt@filipwrona.pl",
      cta: "Napisz wiadomość",
    },
  },
  en: {
    meta: {
      title: "Filip Wrona — High-Performance Next.js Web Development",
      description:
        "Custom websites, landing pages, and web apps built with Next.js and Tailwind CSS. Explore my work and get a quote.",
    },
    nav: {
      menu: "MENU",
      close: "CLOSE",
      items: [
        { label: "PROJECTS", href: "#projects" },
        { label: "SERVICES", href: "#services" },
        { label: "PROCESS & ABOUT", href: "#about" },
        { label: "CONTACT", href: "#contact" },
      ],
      socials: [
        { label: "GitHub", href: "https://github.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "X [Twitter]", href: "https://twitter.com" },
      ],
    },
    hero: {
      badge: "AVAILABLE FOR WORK • 2026",
      titleStart: "Crafting ultra-fast websites in",
      titleEnd: "engineered to grow your brand.",
      desc: "Merging brutalist minimalism with state-of-the-art performance and SEO. Zero bloat, maximum conversion rate.",
      ctaPrimary: "Start a Project",
      ctaSecondary: "View Selected Work",
    },
    services: {
      tag: "// SERVICES",
      title: "How I can help you",
      list: [
        {
          num: "01",
          name: "Bespoke Websites & Landing Pages",
          desc: "Tailored Next.js websites optimized for high conversion, flawless Core Web Vitals, and top Google rankings.",
        },
        {
          num: "02",
          name: "Headless CMS Integration",
          desc: "Connecting flexible CMS platforms (Sanity, Strapi) allowing effortless content management without touching code.",
        },
        {
          num: "03",
          name: "E-Commerce & Web Applications",
          desc: "Lightning-fast and secure online stores built with Stripe, Shopify, or MedusaJS.",
        },
        {
          num: "04",
          name: "Web Performance & Migration",
          desc: "Migrating legacy WordPress sites to Next.js. Guaranteed 95-100 PageSpeed scores.",
        },
      ],
    },
    projects: {
      tag: "// PORTFOLIO",
      title: "Selected Projects",
      cta: "Read Case Study →",
      items: [
        {
          title: "Vortex Motion Studio",
          category: "Brand Identity & Web",
          tech: "Next.js • Tailwind • SSG",
          result: "100/100 PageSpeed • +140% Leads",
        },
        {
          title: "Aura Architecture",
          category: "Minimalist Portfolio",
          tech: "Next.js • Headless CMS",
          result: "0.4s Initial Load Time",
        },
        {
          title: "Nexus Platform",
          category: "SaaS Landing Page",
          tech: "Next.js • TypeScript",
          result: "8.2% Conversion Rate",
        },
      ],
    },
    about: {
      tag: "// PROCESS & PHILOSOPHY",
      title: "I don't build generic template sites.",
      desc: "Every website is bespoke software engineered in clean Next.js. You receive code that loads instantly, is resilient against security threats, and builds immediate trust with your audience.",
      steps: [
        {
          step: "01",
          name: "Consultation & Strategy",
          text: "We define your core goals, competitive edge, and ideal user journey.",
        },
        {
          step: "02",
          name: "UI/UX Design in Figma",
          text: "Custom layouts tailored specifically to your branding.",
        },
        {
          step: "03",
          name: "Next.js Engineering",
          text: "Semantic code, aggressive performance tuning, and rigorous testing.",
        },
        {
          step: "04",
          name: "Launch & Handover",
          text: "Domain DNS setup, search console indexing, and full CMS training.",
        },
      ],
    },
    contact: {
      tag: "// CONTACT",
      title: "Let's build something exceptional.",
      desc: "Have a new project or looking to re-architect your current site? Reach out directly – I reply within 24 hours.",
      email: "hello@filipwrona.com",
      cta: "Send an Inquiry",
    },
  },
};
