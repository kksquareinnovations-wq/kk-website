"use client";

import { useEffect, useRef, useState } from "react";

interface UseParallaxOptions {
  offset?: number;
  speed?: number;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { offset = 0, speed = 0.5 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;

      // Only animate when element is in view
      if (elementTop < windowHeight && elementTop + rect.height > 0) {
        const scrollDistance = windowHeight - elementTop;
        const parallaxDistance = scrollDistance * speed;
        setTranslateY(parallaxDistance + offset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset, speed]);

  return { ref, translateY };
};
