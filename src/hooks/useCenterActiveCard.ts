import { useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Tracks which card (by index) is closest to the viewport center on mobile.
 * Returns activeIndex (-1 if none). Only runs on screens < md.
 */
export function useCenterActiveCard(enabled = true) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const rmq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsMobile(mq.matches);
    setPrefersReducedMotion(rmq.matches);
    const onM = () => setIsMobile(mq.matches);
    const onR = () => setPrefersReducedMotion(rmq.matches);
    mq.addEventListener("change", onM);
    rmq.addEventListener("change", onR);
    return () => { mq.removeEventListener("change", onM); rmq.removeEventListener("change", onR); };
  }, []);

  useEffect(() => {
    if (!enabled || !isMobile) {
      setActiveIndex(-1);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let rafId = 0;
    let lastActive = -1;

    const update = () => {
      const cards = container.querySelectorAll<HTMLElement>("[data-card-index]");
      if (!cards.length) return;

      const viewportCenter = window.innerHeight / 2;
      let closest = -1;
      let closestDist = Infinity;

      cards.forEach((card) => {
        const idx = Number(card.dataset.cardIndex);
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = idx;
        }
      });

      if (closest !== lastActive) {
        lastActive = closest;
        setActiveIndex(closest);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial check
    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [enabled, isMobile]);

  return { containerRef, activeIndex, isMobile, prefersReducedMotion };
}
