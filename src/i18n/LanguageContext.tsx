import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { translations, type Locale, type TranslationStrings } from "./translations";
import type { LocaleString } from "@/data/types";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationStrings;
  loc: (s: LocaleString) => string;
  /** Prefix a path with the current locale: localePath("/about") → "/en/about" */
  localePath: (path: string) => string;
}

const STORAGE_KEY = "luca-iot-lang";
const SUPPORTED_LOCALES: Locale[] = ["en", "vi"];

export function isValidLocale(val: string): val is Locale {
  return SUPPORTED_LOCALES.includes(val as Locale);
}

function getStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && isValidLocale(stored)) return stored;
  } catch {
    // ignore
  }
  return null;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

/**
 * Inner provider that lives INSIDE the <Route path="/:locale"> tree.
 * Reads the locale from the URL param and keeps context + localStorage in sync.
 */
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const params = useParams<{ locale: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine locale: from URL param if valid, otherwise fallback
  const urlLocale = params.locale && isValidLocale(params.locale) ? params.locale : null;
  const [locale, setLocaleState] = useState<Locale>(urlLocale ?? getStoredLocale() ?? "en");

  // Sync locale state when URL param changes (e.g. browser back/forward)
  useEffect(() => {
    if (urlLocale && urlLocale !== locale) {
      setLocaleState(urlLocale);
      try { localStorage.setItem(STORAGE_KEY, urlLocale); } catch { /* ignore */ }
    }
  }, [urlLocale]);

  const setLocale = useCallback((newLocale: Locale) => {
    if (newLocale === locale) return;
    setLocaleState(newLocale);
    try { localStorage.setItem(STORAGE_KEY, newLocale); } catch { /* ignore */ }

    // Navigate to the equivalent page with the new locale prefix
    const currentPath = location.pathname;
    // Strip the current locale prefix
    const withoutLocale = currentPath.replace(/^\/(en|vi)/, "") || "/";
    const newPath = `/${newLocale}${withoutLocale === "/" ? "" : withoutLocale}`;
    navigate(newPath + location.search + location.hash, { replace: true });
  }, [locale, location, navigate]);

  const t = translations[locale];

  const loc = useCallback((s: LocaleString): string => {
    return s[locale] ?? s.en;
  }, [locale]);

  const localePath = useCallback((path: string): string => {
    // If path already starts with a locale prefix, replace it
    if (/^\/(en|vi)(\/|$)/.test(path)) {
      return path.replace(/^\/(en|vi)/, `/${locale}`);
    }
    // Ensure path starts with /
    const clean = path.startsWith("/") ? path : `/${path}`;
    return `/${locale}${clean === "/" ? "" : clean}`;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, loc, localePath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
