"use client";

import Link from "next/link";
import { ScrollProgressBar } from "./ScrollProgressBar";

export const Header = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ScrollProgressBar />
      <header className="sticky top-0 z-50 bg-gradient-to-b from-slate-900/90 to-slate-900/80 backdrop-blur border-b border-blue-500/30 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand Link */}
          <Link
            href="/"
            onClick={handleScrollToTop}
            className="flex items-center gap-2 font-bold text-xl hover:text-cyan-400 transition-all duration-300 group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">💡</span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              KK Innovations
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              onClick={handleScrollToTop}
              className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/#extensions"
              className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
            >
              Extensions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/#about"
              className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/#contact"
              className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors">
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
    </>
  );
};
