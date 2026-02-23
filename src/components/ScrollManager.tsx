import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Manages scroll behaviour on route changes:
 * - PUSH / REPLACE → scroll to top (unless URL has a hash)
 * - POP (Back / Forward) → restore saved scroll position
 */
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType();
  const positions = useRef<Record<string, number>>({});

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
    if (hash) return; // let the browser handle anchor scrolling

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
