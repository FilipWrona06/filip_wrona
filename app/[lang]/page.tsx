// app/[lang]/page.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  // Pobieramy aktywny słownik i język z kontekstu
  const { t, lang } = useLanguage();

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 pt-28 md:pt-36">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-start pb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 font-mono text-[11px] uppercase tracking-wider mb-8 text-neutral-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {t.hero.badge}
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] mb-8">
          {t.hero.titleStart}{" "}
          <span className="underline decoration-neutral-300 decoration-wavy underline-offset-8">
            Next.js
          </span>
          , <br className="hidden sm:inline" />
          {t.hero.titleEnd}
        </h1>

        <p className="text-lg sm:text-2xl text-neutral-600 max-w-2xl font-light leading-relaxed mb-12">
          {t.hero.desc}
        </p>

        <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-wider">
          <a
            href="#kontakt"
            className="px-8 py-4 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
          >
            {t.hero.ctaPrimary} →
          </a>
          <a
            href="#projekty"
            className="px-8 py-4 border border-neutral-300 rounded-full hover:bg-neutral-50 transition-colors"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </section>

      {/* Oferta Section */}
      <section id="oferta" className="py-24 border-t border-neutral-200">
        <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
          {t.services.tag}
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-16">
          {t.services.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.list.map((service) => (
            <div
              key={service.num}
              className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-400 transition-colors"
            >
              <span className="font-mono text-xs text-neutral-400 font-bold block mb-6">
                {service.num}
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">
                {service.name}
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projekty" className="py-24 border-t border-neutral-200">
        <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
          {t.projects.tag}
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-16">
          {t.projects.title}
        </h2>

        <div className="space-y-6">
          {t.projects.items.map((project, idx) => (
            <div
              key={idx}
              className="group p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-neutral-200 hover:bg-neutral-100/80 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div>
                <div className="flex gap-4 font-mono text-xs text-neutral-400 uppercase mb-2">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.tech}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                  {project.title}
                </h3>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                  {project.result}
                </span>
                <span className="font-mono text-xs text-neutral-500 uppercase mt-2">
                  {t.projects.cta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* O Mnie Section */}
      <section id="o-mnie" className="py-24 border-t border-neutral-200">
        <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
          {t.about.tag}
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-8">
          {t.about.title}
        </h2>
        <p className="text-xl sm:text-2xl text-neutral-700 font-light max-w-3xl leading-relaxed mb-16">
          {t.about.desc}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.steps.map((step) => (
            <div key={step.step} className="p-6 border-l-2 border-black">
              <span className="font-mono text-xs text-neutral-400 font-bold block mb-2">
                STEP {step.step}
              </span>
              <h4 className="font-bold text-lg uppercase tracking-tight mb-2">
                {step.name}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-28 border-t border-neutral-200">
        <div className="p-10 sm:p-16 rounded-3xl bg-neutral-950 text-white flex flex-col items-start justify-between">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4">
            {t.contact.tag}
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 max-w-2xl">
            {t.contact.title}
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mb-10">
            {t.contact.desc}
          </p>

          <a
            href={`mailto:${t.contact.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-mono text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors"
          >
            <span>{t.contact.email}</span>
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* Stopka */}
      <footer className="py-12 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-neutral-400 uppercase">
        <div>© {new Date().getFullYear()} FILIP WRONA. NEXT.JS ENGINEER.</div>
        <div>BUILT WITH NEXT.JS &amp; TAILWIND CSS</div>
      </footer>
    </main>
  );
}
