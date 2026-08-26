"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Wrona
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
      <circle cx="12.5" cy="9.5" r="1" fill="#ffffff" />
    </svg>
  );
}

// Ikona Menu i X
function AnimatedMenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-4 h-4 flex items-center justify-center pointer-events-none transform-gpu">
      <span
        className={`absolute h-0.5 w-4 bg-current rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-0.75"
        }`}
      />
      <span
        className={`absolute h-0.5 w-4 bg-current rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-0.75"
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
      {/* Kontener paska*/}
      <header
        className={`fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isPill ? "py-4 px-4" : "p-6 md:px-14 md:py-10"
        }`}
      >
        <div
          className={`pointer-events-auto w-full flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isPill
              ? "max-w-52.5 bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-4 py-2 gap-3.5"
              : "max-w-7xl bg-transparent border-transparent shadow-none px-2 py-0 gap-6"
          }`}
        >
          {/* Lewa strona (wrona i logo) */}
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
                className={`shrink-0 text-black transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-6 ${
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
                <span className="font-black tracking-tight uppercase leading-none text-lg sm:text-xl md:text-2xl pl-0.5">
                  Filip Wrona
                </span>
              </div>
            </Link>
          </div>

          {/* Prawa strona (język i menu) */}
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
            <div className="flex items-center font-mono text-xs tracking-wider uppercase select-none shrink-0 leading-none">
              <button
                onClick={() => setLang("pl")}
                className={`transition-all duration-300 px-1 py-0.5 rounded cursor-pointer ${
                  lang === "pl"
                    ? "font-bold text-black scale-105"
                    : "text-neutral-400 hover:text-black"
                }`}
              >
                PL
              </button>
              <span className="text-neutral-300 mx-0.5">/</span>
              <button
                onClick={() => setLang("en")}
                className={`transition-all duration-300 px-1 py-0.5 rounded cursor-pointer ${
                  lang === "en"
                    ? "font-bold text-black scale-105"
                    : "text-neutral-400 hover:text-black"
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

            {/* Przycisk Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? nav.close : nav.menu}
              className="flex items-center gap-2 cursor-pointer text-black hover:opacity-60 transition-all duration-300 shrink-0"
            >
              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden whitespace-nowrap ${
                  isPill
                    ? "max-w-0 opacity-0 translate-x-2 scale-90"
                    : "max-w-22.5 opacity-100 translate-x-0 scale-100"
                }`}
              >
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase">
                  {isOpen ? nav.close : nav.menu}
                </span>
              </div>

              <AnimatedMenuIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* Pełnoekranowy Overlay Menu */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-xl overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-[0.99] blur-sm"
        }`}
      >
        <div className="min-h-full flex flex-col justify-between px-8 pt-24 pb-8 md:px-14 md:pt-32 md:pb-12 max-w-7xl mx-auto">
          {/* Główne linki */}
          <nav
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 md:space-y-6 my-auto py-6"
          >
            {nav.items.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              return (
                <div
                  key={item.label}
                  style={{
                    transitionDelay: isOpen ? `${index * 60 + 80}ms` : "0ms",
                  }}
                  className={`transform transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isOpen
                      ? "translate-y-0 opacity-100 blur-0"
                      : "translate-y-8 opacity-0 blur-xs"
                  }`}
                >
                  <a
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onClick={() => setIsOpen(false)}
                    className={`inline-block text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-black transition-all duration-300 ease-out select-none ${
                      isAnyHovered && !isHovered
                        ? "opacity-15 blur-[6px] scale-[0.97]"
                        : "opacity-100 blur-0 scale-100 hover:scale-[1.02]"
                    }`}
                  >
                    {item.label}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Stopka menu */}
          <div
            style={{ transitionDelay: isOpen ? "320ms" : "0ms" }}
            className={`flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-100 pt-6 mt-4 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex items-center gap-6 md:gap-14 font-mono text-xs sm:text-sm text-neutral-500">
              {nav.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black hover:-translate-y-0.5 transition-all duration-200"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>

            <div className="flex items-center font-mono text-xs text-neutral-400 uppercase">
              <span className="mr-3">LANGUAGE:</span>
              <button
                onClick={() => setLang("pl")}
                className={`cursor-pointer transition-colors ${
                  lang === "pl" ? "text-black font-bold" : "hover:text-black"
                }`}
              >
                PL
              </button>
              <span className="mx-2">|</span>
              <button
                onClick={() => setLang("en")}
                className={`cursor-pointer transition-colors ${
                  lang === "en" ? "text-black font-bold" : "hover:text-black"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
