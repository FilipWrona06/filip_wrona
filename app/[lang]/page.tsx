// app/[lang]/page.tsx
"use client";

import { useState } from "react";
import Hero from "@/components/landing/Hero";
import { useLanguage } from "@/context/LanguageContext";

// ─── Komponent akordeonu FAQ ──────────────────────────────────────────────────
function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-neutral-200 py-6 md:py-8 transition-colors">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-neutral-900 group-hover:translate-x-1.5 transition-transform duration-200 pr-4">
          {question}
        </span>
        <span className="text-2xl sm:text-3xl font-mono text-neutral-400 group-hover:text-black transition-colors shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "max-h-96 opacity-100 mt-4 md:mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl font-light">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.contact.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <main className="w-full bg-[#d5d8da] min-h-screen text-black antialiased">
      {/* ── 1. KOMPONENT HERO ── */}
      <Hero />

      {/* ── KONTENER DLA POZOSTAŁYCH SEKCJI ── */}
      <div className="bg-white text-neutral-900">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* ── 2. METRYKI & STOS TECHNOLOGICZNY ── */}
          <section id="metryki" className="py-20 border-t border-neutral-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {t.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col justify-between"
                >
                  <span className="font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-950 mb-2">
                    {metric.value}
                  </span>
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-wide">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-neutral-400 uppercase pt-4">
              <span className="shrink-0 text-neutral-900 font-bold">
                {t.techStack.title}:
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {t.techStack.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-800 border border-neutral-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ── 3. PORTFOLIO / CASE STUDIES ── */}
          <section id="projekty" className="py-24 border-t border-neutral-200">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
              {t.projects.tag}
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16">
              {t.projects.title}
            </h2>

            <div className="space-y-8">
              {t.projects.items.map((project) => (
                <div
                  key={project.num}
                  className="group p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-all flex flex-col justify-between"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 font-mono text-xs text-neutral-400 uppercase mb-2">
                        <span>{project.num}</span>
                        <span>•</span>
                        <span>{project.category}</span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight group-hover:translate-x-1.5 transition-transform">
                        {project.title}
                      </h3>
                    </div>

                    <span className="font-mono text-xs text-neutral-700 bg-neutral-200/70 px-3 py-1.5 rounded-full">
                      {project.stack}
                    </span>
                  </div>

                  <p className="text-neutral-600 text-base sm:text-lg max-w-3xl font-light mb-8 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-neutral-200/70">
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-200">
                      {project.result}
                    </span>
                    <button className="font-mono text-xs uppercase font-bold text-neutral-900 group-hover:translate-x-1 transition-transform cursor-pointer">
                      {t.projects.ctaLive}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4. OFERTA / USŁUGI ── */}
          <section id="oferta" className="py-24 border-t border-neutral-200">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
              {t.services.tag}
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16">
              {t.services.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.services.list.map((service) => (
                <div
                  key={service.num}
                  className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-400 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-neutral-400 font-bold block mb-6">
                      SERVICE // {service.num}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
                      {service.name}
                    </h3>
                    <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 5. PROCES WSPÓŁPRACY ── */}
          <section id="proces" className="py-24 border-t border-neutral-200">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
              {t.about.tag}
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6">
              {t.about.title}
            </h2>
            <p className="text-xl sm:text-2xl text-neutral-700 font-light max-w-3xl leading-relaxed mb-16">
              {t.about.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.about.steps.map((step) => (
                <div
                  key={step.step}
                  className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-neutral-400 font-bold block mb-4">
                      STEP // {step.step}
                    </span>
                    <h4 className="font-black text-xl uppercase tracking-tight mb-3">
                      {step.name}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 6. REKOMENDACJE / OPINIE ── */}
          <section id="opinie" className="py-24 border-t border-neutral-200">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
              {t.testimonials.tag}
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16">
              {t.testimonials.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.testimonials.list.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between"
                >
                  <p className="text-neutral-800 text-lg sm:text-xl font-light leading-relaxed mb-8 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="border-t border-neutral-200/70 pt-4 font-mono text-xs">
                    <span className="font-bold text-neutral-950 block">
                      {item.author}
                    </span>
                    <span className="text-neutral-500 block">
                      {item.role} • {item.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 7. FAQ (AKORDEON) ── */}
          <section id="faq" className="py-24 border-t border-neutral-200">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
              {t.faq.tag}
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-12">
              {t.faq.title}
            </h2>

            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {t.faq.items.map((item, idx) => (
                <FAQItem
                  key={idx}
                  question={item.q}
                  answer={item.a}
                  isOpen={openFaqIndex === idx}
                  onToggle={() =>
                    setOpenFaqIndex(openFaqIndex === idx ? null : idx)
                  }
                />
              ))}
            </div>
          </section>

          {/* ── 8. KONTAKT & FORMULARZ ── */}
          <section id="kontakt" className="py-28 border-t border-neutral-200">
            <div className="p-8 sm:p-16 rounded-3xl bg-neutral-950 text-white flex flex-col lg:flex-row justify-between gap-12">
              <div className="max-w-xl">
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
                  {t.contact.tag}
                </span>
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 leading-none">
                  {t.contact.title}
                </h2>
                <p className="text-neutral-400 text-base sm:text-lg mb-10 font-light leading-relaxed">
                  {t.contact.desc}
                </p>

                <div className="flex flex-wrap gap-4 font-mono text-xs uppercase">
                  <button
                    onClick={handleCopyEmail}
                    className="px-6 py-3.5 bg-white text-black rounded-full hover:bg-neutral-200 transition-all font-bold cursor-pointer"
                  >
                    {isCopied ? t.contact.copied : `${t.contact.email} 📋`}
                  </button>

                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 border border-neutral-700 text-white rounded-full hover:border-white transition-colors"
                  >
                    {t.contact.bookCall}
                  </a>
                </div>
              </div>

              <div className="w-full lg:max-w-md bg-neutral-900/80 p-8 rounded-2xl border border-neutral-800">
                <h3 className="font-bold uppercase tracking-wider text-sm font-mono mb-6 text-neutral-300">
                  // {t.contact.formTitle}
                </h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-4 font-mono text-xs"
                >
                  <input
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                  <input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                  <input
                    type="text"
                    placeholder={t.contact.budgetPlaceholder}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                  <textarea
                    rows={3}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    {t.contact.submitBtn}
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* ── STOPKA ── */}
          <footer className="py-12 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-neutral-400 uppercase">
            <div>{t.footer.copyright}</div>
            <div>{t.footer.rights}</div>
          </footer>
        </div>
      </div>
    </main>
  );
}
