"use client";

import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg mb-4 hover:text-blue-400 transition-colors"
            >
              <span className="text-2xl">💡</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                KK Innovations
              </span>
            </Link>
            <p className="text-slate-400 text-sm">
              Professional VS Code extensions for investment tracking and market monitoring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#extensions"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Extensions
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Extensions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Extensions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/extensions/portfolio-balance-monitor"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Portfolio Monitor
                </Link>
              </li>
              <li>
                <Link
                  href="/extensions/investment-tracker-pro"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Investment Tracker
                </Link>
              </li>
              <li>
                <Link
                  href="/extensions/market-alert-system"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Market Alerts
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm">
            <p>
              © {currentYear} KK Innovations. All rights reserved.
            </p>
            <p className="mt-2">
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-1 9-5.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0323 3z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 0H4C1.794 0 0 1.794 0 4v16c0 2.206 1.794 4 4 4h16c2.206 0 4-1.794 4-4V4c0-2.206-1.794-4-4-4zM8 19H5v-9h3v9zm-1.5-10.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784-1.75-1.75-1.75zM19 19h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2V19h-3v-9h3v1.2c.664-1 2.075-1.8 3.5-1.8 2.761 0 5 2.239 5 5v4.8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
