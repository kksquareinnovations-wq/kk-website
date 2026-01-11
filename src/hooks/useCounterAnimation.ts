"use client";

import { useEffect, useState } from "react";

interface UseCounterAnimationOptions {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  trigger?: boolean;
}

export const useCounterAnimation = (
  options: UseCounterAnimationOptions
) => {
  const {
    end,
    start = 0,
    duration = 2000,
    delay = 0,
    trigger = true,
  } = options;
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    // Delay the animation start
    const delayTimer = setTimeout(() => {
      let current = start;
      const increment = end / (duration / 50);
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [end, start, duration, delay, trigger]);

  return count;
};
