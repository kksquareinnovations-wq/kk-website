"use client";

import { ReactNode } from "react";
import { useMouseFollow3D } from "@/hooks/useMouseFollow3D";

interface MouseFollow3DContainerProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  maxRotation?: number;
}

export const MouseFollow3DContainer = ({
  children,
  className = "",
  intensity = 0.5,
  maxRotation = 12,
}: MouseFollow3DContainerProps) => {
  const { ref, transform } = useMouseFollow3D({ intensity, maxRotation });

  return (
    <div
      ref={ref}
      className={`transition-transform duration-100 ease-out ${className}`}
      style={{
        transform,
        transformStyle: "preserve-3d" as any,
      }}
    >
      {children}
    </div>
  );
};
