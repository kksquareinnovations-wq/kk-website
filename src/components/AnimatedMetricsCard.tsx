"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

/**
 * Metrics Card with Animated Counter
 * Displays animated number counters with fade-in on scroll
 */
interface AnimatedMetricsCardProps {
  title: string;
  value: number;
  suffix?: string;
  icon: string;
  color: string;
}

export const AnimatedMetricsCard = ({
  title,
  value,
  suffix = "",
  icon,
  color,
}: AnimatedMetricsCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });
  const animatedValue = useCounterAnimation({
    end: value,
    duration: 2000,
    trigger: isVisible,
  });

  return (
    <div
      ref={ref}
      className={`
        bg-gradient-to-br ${color} border border-slate-700 rounded-lg p-6
        transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:border-slate-500 hover:shadow-xl hover:shadow-blue-500/10
        hover:-translate-y-1
      `}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-slate-300 text-sm font-medium">{title}</p>
        </div>
        <span className={`text-3xl ${isVisible ? "animate-counter-pulse" : ""}`}>
          {icon}
        </span>
      </div>

      <h3 className="text-4xl font-bold text-white mb-2">
        {animatedValue.toLocaleString()}
        <span className="text-xl ml-1">{suffix}</span>
      </h3>

      <div className="text-sm text-slate-400">
        Real-time metrics updated continuously
      </div>
    </div>
  );
};
