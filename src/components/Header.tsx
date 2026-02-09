"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollProgressBar } from "./ScrollProgressBar";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((s) => !s);

  return (
    <>
      <ScrollProgressBar />
      <header className="relative sticky top-0 z-40 w-full bg-gradient-to-b from-slate-900/90 to-slate-900/80 backdrop-blur border-b border-blue-500/30 shadow-lg shadow-cyan-500/10">
        <div className="max-w-6xl mx-auto px-6">
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

            {/* Desktop Navigation Links */}
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
                href="/#products "
                className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
              >
                Products
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
            <button
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigation overlay/dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-slate-900/95 border-t border-blue-600/20 backdrop-blur">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
              <Link
                href="/"
                onClick={handleScrollToTop}
                className="text-slate-300 hover:text-cyan-400"
              >
                Home
              </Link>
              <Link
                href="/#products "
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                Products
              </Link>
              <Link
                href="/#about"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                About
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                Contact
              </Link>
              <Link
                href="/products/accounts-expiry-tracker"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                Account Expiry Tracker
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
