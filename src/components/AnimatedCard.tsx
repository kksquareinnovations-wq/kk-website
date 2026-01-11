"use client";

import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hover3d?: boolean;
}

/**
 * Animated Card with enhanced hover effects
 * Features: smooth transitions, gradient animations, 3D transforms
 */
export const AnimatedCard = ({
  children,
  className = "",
  hover3d = false,
}: AnimatedCardProps) => {
  return (
    <div
      className={`
        bg-gradient-to-br from-slate-800 to-slate-900
        border border-slate-700
        rounded-lg
        p-6
        transition-all duration-300 ease-out
        hover:border-slate-500
        hover:shadow-xl
        hover:shadow-blue-500/10
        ${hover3d ? "hover:[transform:perspective(1000px)_rotateX(5deg)_rotateY(-5deg)]" : "hover:-translate-y-1"}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

/**
 * 3D Flip Card Component
 * Advanced 3D effect with flip animation on hover
 */
interface Card3DFlipProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export const Card3DFlip = ({ front, back, className = "" }: Card3DFlipProps) => {
  return (
    <div
      className={`
        relative w-full aspect-square
        [perspective:1000px]
        cursor-pointer
        group
        ${className}
      `}
    >
      {/* Front side */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-br from-slate-800 to-slate-900
          border border-slate-700 rounded-lg p-6
          transition-all duration-500 ease-out
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
          flex flex-col items-center justify-center
        `}
      >
        {front}
      </div>

      {/* Back side */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-br from-blue-900/50 to-cyan-900/50
          border border-blue-500 rounded-lg p-6
          transition-all duration-500 ease-out
          [transform-style:preserve-3d]
          [transform:rotateY(180deg)]
          group-hover:[transform:rotateY(0deg)]
          flex flex-col items-center justify-center
        `}
      >
        {back}
      </div>
    </div>
  );
};
