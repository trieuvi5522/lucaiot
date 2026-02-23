import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Locale, type TranslationStrings } from "./translations";
import type { LocaleString } from "@/data/types";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationStrings;
  /** Resolve a LocaleString to the current locale */
  loc: (s: LocaleString) => string;
}

const STORAGE_KEY = "luca-iot-lang";

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "vi") return stored;
  } catch {
    // SSR or storage blocked
  }
  return "en";
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  }, []);

  const t = translations[locale];

  const loc = useCallback((s: LocaleString): string => {
    return s[locale] ?? s.en;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, loc }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
