import { useEffect, useRef, useState } from "react";

interface UseMouseFollow3DOptions {
  intensity?: number; // 0-1, how much the card tilts
  maxRotation?: number; // max degrees to rotate
}

interface MousePosition {
  x: number;
  y: number;
}

export const useMouseFollow3D = (
  options: UseMouseFollow3DOptions = {}
) => {
  const { intensity = 0.5, maxRotation = 15 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse position relative to element center
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;

      // Calculate rotation angles based on mouse position
      const rotateY = (mouseX / (rect.width / 2)) * maxRotation * intensity;
      const rotateX = -(mouseY / (rect.height / 2)) * maxRotation * intensity;

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      // Smoothly return to center when mouse leaves
      setRotation({ x: 0, y: 0 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity, maxRotation]);

  return {
    ref,
    rotation,
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
  };
};
