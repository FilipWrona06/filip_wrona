// components/Hero.tsx
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-180 bg-[#fbfbfb] text-neutral-950 overflow-hidden flex flex-col justify-between pt-32 sm:pt-36 pb-10 sm:pb-14 select-none">
      {/* ── 1. Subtelne, luksusowe światło studyjne (Vignette) ── */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        {/* Miękki gradient nadający głębię postaci */}
        <div className="w-[85vw] max-w-275 h-[75vh] bg-linear-to-t from-neutral-200/50 via-neutral-100/20 to-transparent rounded-full blur-3xl" />

        {/* Dyskretna linia horyzontu */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent" />
      </div>

      {/* ── 2. Górny wiersz edytorialny ── */}
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-14 flex justify-between items-start z-20 pointer-events-none">
        {/* Lewa strona: Tytuł i specjalizacja */}
        <div className="pointer-events-auto max-w-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              Independent Studio
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black leading-none mb-2">
            Filip Wrona
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-snug">
            Freelance Designer &amp; Next.js Developer crafting high-impact
            digital experiences.
          </p>
        </div>

        {/* Prawa strona: Dostępność i lokalizacja */}
        <div className="pointer-events-auto hidden sm:flex flex-col items-end text-right font-mono text-xs">
          <div className="flex items-center gap-2 text-black font-semibold uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Q3/Q4
          </div>
          <span className="text-neutral-400 uppercase tracking-widest text-[11px]">
            Poland — Working Worldwide
          </span>
        </div>
      </div>

      {/* ── 3. Centralna postać (Wielka, osadzona w świetle studyjnym) ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-312.5 h-[82vh] sm:h-[86vh] md:h-[90vh] pointer-events-none flex items-end justify-center">
        <Image
          src="/carton.webp"
          alt="Filip Wrona"
          fill
          priority
          quality={100}
          className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          sizes="(max-width: 1400px) 100vw, 1250px"
        />
      </div>

      {/* ── 4. Dolny wiersz akcji i mikro-interakcji ── */}
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-14 flex justify-between items-end z-20 pointer-events-none">
        {/* Lewy dolny róg: Czysty, bezkompromisowy przycisk kontaktu */}
        <div className="pointer-events-auto flex items-center gap-4">
          <a
            href="#kontakt"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-mono text-xs uppercase tracking-widest font-bold overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            <span className="relative z-10">Rozpocznij projekt</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#projekty"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-4 bg-white/80 backdrop-blur-md text-black border border-neutral-200/90 rounded-full font-mono text-xs uppercase tracking-widest font-semibold hover:border-neutral-400 hover:bg-white transition-all duration-300"
          >
            <span>Wybrane prace</span>
          </a>
        </div>

        {/* Prawy dolny róg: Dyskretny, nowoczesny Scroll */}
        <a
          href="#projekty"
          className="pointer-events-auto flex items-center gap-3 text-neutral-400 hover:text-black transition-colors duration-300 font-mono text-xs uppercase tracking-widest group"
        >
          <span className="hidden sm:inline">Explore works</span>
          <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-black transition-colors">
            <span className="text-black text-xs group-hover:translate-y-0.5 transition-transform duration-200">
              ↓
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
