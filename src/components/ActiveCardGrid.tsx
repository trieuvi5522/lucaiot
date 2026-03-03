import React from "react";
import { useCenterActiveCard } from "@/hooks/useCenterActiveCard";

interface Props {
  children: (activeIndex: number) => React.ReactNode;
  className?: string;
}

/**
 * Wraps a grid of ServiceCards and provides the active (center) card index on mobile.
 */
const ActiveCardGrid = ({ children, className }: Props) => {
  const { containerRef, activeIndex } = useCenterActiveCard();

  return (
    <div ref={containerRef} className={className}>
      {children(activeIndex)}
    </div>
  );
};

export default ActiveCardGrid;
