import { useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useScrollReveal(index = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const mobileQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    setIsMobile(mobileQuery.matches);

    const onMotionChange = () => setPrefersReducedMotion(motionQuery.matches);
    const onMobileChange = () => setIsMobile(mobileQuery.matches);

    motionQuery.addEventListener("change", onMotionChange);
    mobileQuery.addEventListener("change", onMobileChange);

    return () => {
      motionQuery.removeEventListener("change", onMotionChange);
      mobileQuery.removeEventListener("change", onMobileChange);
    };
  }, []);

  useEffect(() => {
    if (!isMobile || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 75);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile, prefersReducedMotion, index]);

  const style: React.CSSProperties =
    isMobile && !prefersReducedMotion
      ? {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 450ms ease-out, transform 450ms ease-out",
        }
      : {};

  return { ref, style };
}
