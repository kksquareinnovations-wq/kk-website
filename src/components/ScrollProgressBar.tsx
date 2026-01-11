"use client";

import { useEffect, useState } from "react";

export const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress as percentage
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollProgress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setProgress(scrollProgress);
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar with Security Intelligence gradient */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 z-50 shadow-lg shadow-cyan-500/50"
        style={{
          width: `${progress}%`,
          transition: "width 0.15s ease-out",
        }}
      />

      {/* Optional: Glow effect */}
      <div
        className="fixed top-0 left-0 h-1 blur-sm bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-400/30 z-50 pointer-events-none"
        style={{
          width: `${progress}%`,
          transition: "width 0.15s ease-out",
        }}
      />
    </>
  );
};
