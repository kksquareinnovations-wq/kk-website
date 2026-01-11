import { useEffect } from "react";

export const useEntranceAnimation = () => {
  useEffect(() => {
    // Add entrance animation to main content
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.classList.add("animate-entrance-3d");
    }

    // Add staggered entrance to hero section elements
    const heroSection = document.querySelector("section");
    if (heroSection) {
      const children = heroSection.querySelectorAll("h1, p, .flex");
      children.forEach((child, index) => {
        if (index < 5) {
          child.classList.add(`entrance-stagger-${index + 1}`);
        }
      });
    }

    // Cleanup function
    return () => {
      if (mainElement) {
        mainElement.classList.remove("animate-entrance-3d");
      }
    };
  }, []);
};
