import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoadingSkeleton, SkeletonCard, ListSkeleton } from "@/components/LoadingSkeleton";
import { AnimatedCard, Card3DFlip } from "@/components/AnimatedCard";

describe("Animation Components", () => {
  describe("LoadingSkeleton", () => {
    it("should render a single skeleton by default", () => {
      const { container } = render(<LoadingSkeleton />);
      expect(container.querySelector(".animate-pulse")).toBeInTheDocument();
    });

    it("should render multiple skeletons based on count prop", () => {
      const { container } = render(<LoadingSkeleton count={3} />);
      const skeletons = container.querySelectorAll(".animate-pulse");
      expect(skeletons).toHaveLength(3);
    });

    it("should support circle skeleton", () => {
      const { container } = render(<LoadingSkeleton circle />);
      expect(container.querySelector(".rounded-full")).toBeInTheDocument();
    });

    it("should apply custom width and height", () => {
      const { container } = render(
        <LoadingSkeleton width="w-32" height="h-8" />
      );
      const skeleton = container.querySelector(".animate-pulse");
      expect(skeleton).toHaveClass("w-32", "h-8");
    });
  });

  describe("SkeletonCard", () => {
    it("should render skeleton card with all sections", () => {
      const { container } = render(<SkeletonCard />);
      const skeletons = container.querySelectorAll(".animate-pulse");
      expect(skeletons.length).toBeGreaterThan(0);
    });

    it("should render within a card container", () => {
      const { container } = render(<SkeletonCard />);
      expect(container.querySelector(".border")).toBeInTheDocument();
      expect(container.querySelector(".rounded-lg")).toBeInTheDocument();
    });
  });

  describe("ListSkeleton", () => {
    it("should render default 5 items", () => {
      const { container } = render(<ListSkeleton />);
      const items = container.querySelectorAll(".border");
      expect(items.length).toBe(5);
    });

    it("should render custom count of items", () => {
      const { container } = render(<ListSkeleton count={3} />);
      const items = container.querySelectorAll(".border");
      expect(items.length).toBe(3);
    });
  });

  describe("AnimatedCard", () => {
    it("should render content", () => {
      render(
        <AnimatedCard>
          <div>Test Content</div>
        </AnimatedCard>
      );
      expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("should apply gradient and border styling", () => {
      const { container } = render(
        <AnimatedCard>
          <div>Test</div>
        </AnimatedCard>
      );
      const card = container.querySelector(".bg-gradient-to-br");
      expect(card).toHaveClass("border", "rounded-lg");
    });

    it("should support 3D hover effect", () => {
      const { container } = render(
        <AnimatedCard hover3d>
          <div>Test</div>
        </AnimatedCard>
      );
      const card = container.querySelector("div");
      expect(card).toHaveClass("hover:[transform:perspective(1000px)_rotateX(5deg)_rotateY(-5deg)]");
    });

    it("should accept custom className", () => {
      const { container } = render(
        <AnimatedCard className="custom-class">
          <div>Test</div>
        </AnimatedCard>
      );
      const card = container.querySelector(".custom-class");
      expect(card).toBeInTheDocument();
    });
  });

  describe("Card3DFlip", () => {
    it("should render front and back content", () => {
      render(
        <Card3DFlip
          front={<div>Front Side</div>}
          back={<div>Back Side</div>}
        />
      );
      expect(screen.getByText("Front Side")).toBeInTheDocument();
      expect(screen.getByText("Back Side")).toBeInTheDocument();
    });

    it("should have perspective and group classes", () => {
      const { container } = render(
        <Card3DFlip
          front={<div>Front</div>}
          back={<div>Back</div>}
        />
      );
      const card = container.firstChild;
      expect(card).toHaveClass("group");
    });

    it("should apply aspect-square for square ratio", () => {
      const { container } = render(
        <Card3DFlip
          front={<div>Front</div>}
          back={<div>Back</div>}
        />
      );
      const card = container.querySelector(".aspect-square");
      expect(card).toBeInTheDocument();
    });
  });
});
