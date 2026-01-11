"use client";

interface LoadingSkeletonProps {
  width?: string;
  height?: string;
  count?: number;
  circle?: boolean;
  className?: string;
}

/**
 * Loading Skeleton Component
 * Shows placeholder while content loads
 */
export const LoadingSkeleton = ({
  width = "w-full",
  height = "h-12",
  count = 1,
  circle = false,
  className = "",
}: LoadingSkeletonProps) => {
  return (
    <div className={className}>
      {[...Array(count)].map((_, idx) => (
        <div
          key={idx}
          className={`
            ${width} ${height}
            ${circle ? "rounded-full" : "rounded-lg"}
            bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700
            animate-pulse
            ${count > 1 ? "mb-4" : ""}
          `}
        />
      ))}
    </div>
  );
};

/**
 * Skeleton Card Component
 * Shows placeholder for card content
 */
export const SkeletonCard = () => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6">
      {/* Image skeleton */}
      <LoadingSkeleton height="h-48" className="mb-4" />

      {/* Badge skeleton */}
      <LoadingSkeleton width="w-24" height="h-6" className="mb-3" />

      {/* Title skeleton */}
      <LoadingSkeleton height="h-6" className="mb-3 w-3/4" />

      {/* Description skeleton */}
      <LoadingSkeleton height="h-4" count={2} className="mb-4" />

      {/* Footer skeleton */}
      <div className="flex gap-4 justify-between">
        <LoadingSkeleton width="w-24" height="h-4" />
        <LoadingSkeleton width="w-32" height="h-4" />
      </div>
    </div>
  );
};

/**
 * List Skeleton Component
 * Shows placeholder for list items
 */
export const ListSkeleton = ({ count = 5 }: { count?: number }) => {
  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, idx) => (
        <div
          key={idx}
          className="bg-slate-800 rounded-lg p-4 border border-slate-700"
        >
          <div className="flex gap-4">
            <LoadingSkeleton width="w-12" height="h-12" circle />
            <div className="flex-1">
              <LoadingSkeleton height="h-4 w-1/2 mb-2" />
              <LoadingSkeleton height="h-3" count={2} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
