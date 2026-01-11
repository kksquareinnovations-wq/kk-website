"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

/**
 * Scroll Fade In Component
 * Fades in content when it enters viewport
 * Supports multiple animation directions
 */
export const ScrollFadeIn = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollFadeInProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const getDirectionClass = () => {
    switch (direction) {
      case "left":
        return "translate-x-10";
      case "right":
        return "-translate-x-10";
      case "down":
        return "-translate-y-10";
      case "up":
      default:
        return "translate-y-10";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${getDirectionClass()}`}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

/**
 * Staggered Scroll Animation
 * Animates multiple items with staggered delays
 */
interface StaggeredScrollProps {
  children: ReactNode[];
  staggerDelay?: number;
  className?: string;
}

export const StaggeredScroll = ({
  children,
  staggerDelay = 100,
  className = "",
}: StaggeredScrollProps) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollFadeIn key={index} delay={index * staggerDelay}>
          {child}
        </ScrollFadeIn>
      ))}
    </div>
  );
};
