"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// ─── Sygnet wrony z reagującym okiem na hover ─────────────────────────────────
function CrowIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M1.5 11.5L8.5 7L15 7.5L22 13.5L18.5 21L11.5 19.5L8.5 14.5L1.5 11.5Z" />
      <circle
        cx="12.5"
        cy="9.5"
        r="1.1"
        fill="#ffffff"
        className="transition-transform duration-300 origin-[12.5px_9.5px] group-hover:scale-150"
      />
    </svg>
  );
}

// ─── Kreski menu: rozsuwanie przy MENU oraz obrót 90° przy X ──────────────────
function AnimatedMenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`relative w-4 h-4 flex items-center justify-center pointer-events-none transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isOpen ? "group-hover:rotate-90 group-hover:scale-110" : ""
      }`}
    >
      <span
        className={`absolute h-0.5 w-4 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen
            ? "rotate-45 translate-y-0"
            : "-translate-y-0.75 group-hover:-translate-x-0.5"
        }`}
      />
      <span
        className={`absolute h-0.5 w-4 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen
            ? "-rotate-45 translate-y-0"
            : "translate-y-0.75 group-hover:translate-x-0.5"
        }`}
      />
    </div>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nav = t.nav;

  // Wejście na start
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  // Zamykanie ESC
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blokowanie scrolla
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isPill = isScrolled && !isOpen;

  return (
    <>
      {/* ─── Pasek główny ────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isPill ? "py-4 px-4" : "p-6 md:px-14 md:py-10"
        }`}
      >
        {/* Kontener paska z efektem 3D Float na hoverze w pigułce */}
        <div
          className={`pointer-events-auto w-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isPill
              ? "max-w-55 bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-4 py-2 gap-3.5 hover:shadow-[0_16px_40px_rgb(0,0,0,0.12)] hover:border-neutral-300 hover:scale-[1.025] hover:-translate-y-0.5"
              : "max-w-7xl bg-transparent border-transparent shadow-none px-2 py-0 gap-6"
          }`}
        >
          {/* LEWA STRONA: Interaktywne Logo */}
          <div
            className={`flex items-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              hasMounted
                ? "translate-x-0 opacity-100 blur-0"
                : "-translate-x-6 opacity-0 blur-[3px]"
            }`}
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 md:gap-3.5 text-black group select-none overflow-hidden shrink-0"
              aria-label="Filip Wrona Homepage"
            >
              <CrowIcon
                className={`shrink-0 text-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-12 group-hover:scale-105 ${
                  isPill ? "w-5 h-5" : "w-7 h-7 md:w-8 md:h-8"
                }`}
              />
              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden whitespace-nowrap ${
                  isPill
                    ? "max-w-0 opacity-0 -translate-x-3 scale-95"
                    : "max-w-70 opacity-100 translate-x-0 scale-100"
                }`}
              >
                <span className="font-black tracking-tight uppercase leading-none text-lg sm:text-xl md:text-2xl pl-0.5 transition-all duration-300 group-hover:tracking-normal">
                  Filip Wrona
                </span>
              </div>
            </Link>
          </div>

          {/* PRAWA STRONA: Języki i Menu */}
          <div
            className={`flex items-center gap-3 sm:gap-4 shrink-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              hasMounted
                ? "translate-x-0 opacity-100 blur-0"
                : "translate-x-6 opacity-0 blur-[3px]"
            }`}
          >
            {/* Separator 1 */}
            <div
              className={`transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shrink-0 overflow-hidden ${
                isPill
                  ? "w-px h-3.5 bg-neutral-200 opacity-100 scale-y-100"
                  : "w-0 h-0 opacity-0 scale-y-0"
              }`}
            />

            {/* Przełącznik języka */}
            <div className="relative flex items-center p-0.5 bg-neutral-100/90 rounded-full font-mono text-[11px] tracking-wider uppercase select-none shrink-0 border border-neutral-200/70">
              <span
                className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  lang === "pl" ? "left-0.5" : "left-[50%]"
                }`}
              />
              <button
                onClick={() => setLang("pl")}
                className={`relative z-10 px-2 py-0.5 transition-colors duration-200 cursor-pointer ${
                  lang === "pl"
                    ? "font-bold text-black"
                    : "text-neutral-400 hover:text-neutral-700"
                }`}
              >
                PL
              </button>
              <button
                onClick={() => setLang("en")}
                className={`relative z-10 px-2 py-0.5 transition-colors duration-200 cursor-pointer ${
                  lang === "en"
                    ? "font-bold text-black"
                    : "text-neutral-400 hover:text-neutral-700"
                }`}
              >
                EN
              </button>
            </div>

            {/* Separator 2 */}
            <div
              className={`transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shrink-0 overflow-hidden ${
                isPill
                  ? "w-px h-3.5 bg-neutral-200 opacity-100 scale-y-100"
                  : "w-0 h-0 opacity-0 scale-y-0"
              }`}
            />

            {/* Przycisk Menu / Close */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? nav.close : nav.menu}
              className="group flex items-center gap-2 cursor-pointer text-black hover:opacity-80 transition-all duration-300 shrink-0"
            >
              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden whitespace-nowrap ${
                  isPill
                    ? "max-w-0 opacity-0 translate-x-2 scale-90"
                    : "max-w-22.5 opacity-100 translate-x-0 scale-100"
                }`}
              >
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase transition-opacity group-hover:opacity-75">
                  {isOpen ? nav.close : nav.menu}
                </span>
              </div>

              <AnimatedMenuIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Pełnoekranowy Overlay Menu (Idealne dopasowanie bez scrollbara) ─── */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-xl h-screen overflow-hidden scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-[0.99] blur-sm"
        }`}
      >
        <div className="h-full flex flex-col justify-between px-8 pt-20 pb-6 md:px-14 md:pt-24 md:pb-8 max-w-7xl mx-auto">
          {/* Główne linki z dopasowaną wielkością i odstępami – 100% w kadrze */}
          <nav
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-3.5 my-auto"
          >
            {nav.items.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;
              const formattedIndex = `0${index + 1}`;

              return (
                <div
                  key={item.label}
                  style={{
                    transitionDelay: isOpen ? `${index * 45 + 50}ms` : "0ms",
                  }}
                  className={`transform transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isOpen
                      ? "translate-y-0 opacity-100 blur-0"
                      : "translate-y-6 opacity-0 blur-[3px]"
                  }`}
                >
                  <a
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onClick={() => setIsOpen(false)}
                    className={`group/link relative inline-flex items-baseline gap-2.5 sm:gap-4 md:gap-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight uppercase text-black transition-all duration-300 ease-out select-none ${
                      isAnyHovered && !isHovered
                        ? "opacity-15 blur-[6px] scale-[0.97]"
                        : "opacity-100 blur-0 scale-100 hover:scale-[1.02]"
                    }`}
                  >
                    {/* Wsuwający się indeks numeryczny */}
                    <span
                      className={`font-mono text-xs sm:text-sm md:text-lg font-normal transition-all duration-300 ${
                        isHovered
                          ? "opacity-100 translate-x-0 text-black"
                          : "opacity-0 -translate-x-3 text-neutral-400"
                      }`}
                    >
                      {formattedIndex}
                    </span>

                    {/* Tekst z architektoniczną linią pod spodem */}
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute left-0 -bottom-1 w-full h-0.5 sm:h-[2.5px] bg-black transition-transform duration-300 ease-out origin-left ${
                          isHovered ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </span>
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Stopka menu – czyste, wyśrodkowane linki do Social Mediów */}
          <div
            style={{ transitionDelay: isOpen ? "280ms" : "0ms" }}
            className={`flex items-center justify-center gap-6 md:gap-14 font-mono text-xs sm:text-sm text-neutral-500 border-t border-neutral-100 pt-4 md:pt-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            {nav.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social inline-flex items-center gap-1 hover:text-black transition-colors duration-200"
              >
                <span>{social.label}</span>
                <span className="transition-transform duration-200 group-hover/social:translate-x-1 group-hover/social:-translate-y-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
