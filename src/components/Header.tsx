"use client";

import Link from "next/link";

export const Header = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand Link */}
          <Link
            href="/"
            onClick={handleScrollToTop}
            className="flex items-center gap-2 font-bold text-xl hover:text-blue-400 transition-colors"
          >
            <span className="text-2xl">💡</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              KK Innovations
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              onClick={handleScrollToTop}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#extensions"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Extensions
            </Link>
            <Link
              href="/#about"
              className="text-slate-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
