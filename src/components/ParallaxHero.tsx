"use client";

import { useParallax } from "@/hooks/useParallax";
import { ReactNode } from "react";

interface ParallaxHeroProps {
  children: ReactNode;
  speed?: number;
  backgroundImage?: string;
  minHeight?: string;
  className?: string;
}

/**
 * Parallax Hero Section
 * Creates depth effect with parallax scrolling
 * Background image moves slower than content
 */
export const ParallaxHero = ({
  children,
  speed = 0.5,
  backgroundImage,
  minHeight = "min-h-screen",
  className = "",
}: ParallaxHeroProps) => {
  const { ref, translateY } = useParallax({ speed });

  return (
    <div
      ref={ref}
      className={`
        relative overflow-hidden ${minHeight}
        ${className}
      `}
    >
      {/* Parallax Background */}
      {backgroundImage && (
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            transform: `translateY(${translateY}px)`,
            filter: "brightness(0.4)",
          }}
        />
      )}

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900" />

      {/* Content */}
      <div className="relative h-full">{children}</div>
    </div>
  );
};

/**
 * Parallax Layer Component
 * Individual parallax layer for multi-layer effects
 */
interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxLayer = ({
  children,
  speed = 0.3,
  className = "",
}: ParallaxLayerProps) => {
  const { ref, translateY } = useParallax({ speed });

  return (
    <div
      ref={ref}
      style={{ transform: `translateY(${translateY}px)` }}
      className={`transition-transform duration-75 ease-out ${className}`}
    >
      {children}
    </div>
  );
};
