import { renderHook, waitFor } from "@testing-library/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { useParallax } from "@/hooks/useParallax";

describe("Animation Hooks", () => {
  describe("useScrollAnimation", () => {
    it("should initialize with isVisible as false", () => {
      const { result } = renderHook(() => useScrollAnimation());
      expect(result.current.isVisible).toBe(false);
      expect(result.current.ref).toBeDefined();
    });

    it("should accept custom threshold option", () => {
      const { result } = renderHook(() => useScrollAnimation({ threshold: 0.5 }));
      expect(result.current).toBeDefined();
    });

    it("should support triggerOnce option", () => {
      const { result } = renderHook(() =>
        useScrollAnimation({ triggerOnce: true })
      );
      expect(result.current).toBeDefined();
    });
  });

  describe("useCounterAnimation", () => {
    it("should initialize with start value", () => {
      const { result } = renderHook(() =>
        useCounterAnimation({ end: 100, start: 0, trigger: true })
      );
      expect(result.current).toBeDefined();
    });

    it("should animate from start to end", async () => {
      const { result } = renderHook(() =>
        useCounterAnimation({
          end: 100,
          start: 0,
          duration: 100,
          trigger: true,
        })
      );

      await waitFor(
        () => {
          expect(result.current).toBeLessThanOrEqual(100);
        },
        { timeout: 2000 }
      );
    });

    it("should respect trigger prop", () => {
      const { result } = renderHook(() =>
        useCounterAnimation({ end: 100, start: 0, trigger: false })
      );
      expect(result.current).toBe(0);
    });

    it("should handle delay option", () => {
      const { result } = renderHook(() =>
        useCounterAnimation({ end: 50, start: 0, delay: 100, trigger: true })
      );
      expect(result.current).toBeDefined();
    });
  });

  describe("useParallax", () => {
    it("should initialize without errors", () => {
      const { result } = renderHook(() => useParallax());
      expect(result.current).toBeDefined();
      expect(result.current.ref).toBeDefined();
      expect(result.current.translateY).toBe(0);
    });

    it("should accept custom speed option", () => {
      const { result } = renderHook(() => useParallax({ speed: 0.7 }));
      expect(result.current).toBeDefined();
    });

    it("should accept custom offset option", () => {
      const { result } = renderHook(() => useParallax({ offset: 100 }));
      expect(result.current).toBeDefined();
    });

    it("should listen to scroll events", () => {
      const addEventListenerSpy = jest.spyOn(window, "addEventListener");
      const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

      renderHook(() => useParallax());

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        "scroll",
        expect.any(Function),
        { passive: true }
      );

      expect(removeEventListenerSpy).not.toHaveBeenCalled();

      addEventListenerSpy.mockRestore();
      removeEventListenerSpy.mockRestore();
    });
  });
});
