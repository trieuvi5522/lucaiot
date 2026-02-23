import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Extracts the path without the locale prefix: /en/services → /services
 */
const stripLocale = (path: string) => path.replace(/^\/(en|vi)/, "") || "/";

/**
 * Manages scroll behaviour on route changes:
 * - PUSH / REPLACE → scroll to top (unless URL has a hash or it's a locale-only switch)
 * - POP (Back / Forward) → restore saved scroll position
 * - Language switch (same page, different locale) → preserve current scroll position
 */
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType();
  const positions = useRef<Record<string, number>>({});
  const prevPathRef = useRef(pathname);

  /* Save scroll position before leaving */
  useEffect(() => {
    const save = () => {
      positions.current[key] = window.scrollY;
    };

    window.addEventListener("beforeunload", save);
    return () => {
      save(); // save when route changes (cleanup runs before next effect)
      window.removeEventListener("beforeunload", save);
    };
  }, [key]);

  /* Restore or reset scroll on route change */
  useEffect(() => {
    const prevPage = stripLocale(prevPathRef.current);
    const currPage = stripLocale(pathname);
    prevPathRef.current = pathname;

    if (hash) return; // let the browser handle anchor scrolling

    // Language switch on same page — preserve scroll position
    if (prevPage === currPage && navType === "REPLACE") {
      return;
    }

    if (navType === "POP") {
      const saved = positions.current[key];
      if (saved != null) {
        window.scrollTo({ top: saved, behavior: "auto" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hash, key, navType]);

  return null;
};

export default ScrollManager;
