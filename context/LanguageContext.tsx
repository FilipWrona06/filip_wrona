// context/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, type Lang } from "@/lib/dictionary";

type Dictionary = typeof dictionaries.pl;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  initialLang = "pl",
}: {
  children: React.ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as Lang;
    if (saved === "pl" || saved === "en") {
      setLangState(saved);
    } else if (initialLang) {
      setLangState(initialLang);
    }
  }, [initialLang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("preferred_lang", newLang);
    // Zmienia URL w pasku adresu bez przeładowania
    window.history.replaceState(null, "", `/${newLang}`);
  };

  const t = dictionaries[lang] || dictionaries.pl;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
