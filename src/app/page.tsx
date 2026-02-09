"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { MouseFollow3DContainer } from "@/components/MouseFollow3DContainer";
import { useEntranceAnimation } from "@/hooks/useEntranceAnimation";
import { useEffect } from "react";

export default function Home() {
  // Trigger 3D entrance animation on page load
  useEntranceAnimation();

  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentYear = new Date().getFullYear();

  const extensions = [
    {
      id: 1,
      name: "Expiry Tracker",
      originalName: "Accounts Expiry Tracker",
      description:
        "Centralized management tool designed to help teams monitor and manage the expiration dates of critical resources such as database credentials, service accounts, SSL certificates, and other time-sensitive assets.",
      icon: "⏰",
      features: [
        "Visual alerts for expiring credentials",
        "Filtering and search capabilities",
        "Bulk management features",
      ],
      color: "from-purple-500 to-pink-600",
      href: "/products/accounts-expiry-tracker",
    },
    {
      id: 2,
      name: "Robinhood Portfolio Balance Monitor",
      originalName: "Robinhood balance viewer",
      description:
        "Real-time portfolio balance monitoring directly in VS Code. Track your investment accounts and get instant updates on your total portfolio value.",
      icon: "📊",
      features: [
        "Real-time balance updates",
        "Multi-account support",
        "Quick status bar widget",
      ],
      color: "from-green-500 to-emerald-600",
      href: "/extensions/portfolio-balance-monitor",
    },
    {
      id: 3,
      name: "Fidelity Investment Tracker Pro",
      originalName: "Fidelity balance viewer",
      description:
        "Advanced investment tracking with detailed holdings, performance analytics, and comprehensive portfolio insights for financial planning.",
      icon: "💼",
      features: [
        "Holdings breakdown",
        "Performance analytics",
        "Asset allocation",
      ],
      color: "from-blue-500 to-cyan-600",
      href: "/extensions/investment-tracker-pro",
    },
    {
      id: 4,
      name: "Market Alert System",
      originalName: "Stock alerts",
      description:
        "Intelligent market alerts and price notifications. Receive timely alerts on stock movements, market conditions, and price targets you care about.",
      icon: "🚨",
      features: [
        "Custom price alerts",
        "Market notifications",
        "Watchlist management",
      ],
      color: "from-orange-500 to-red-600",
      href: "/extensions/market-alert-system",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black flex flex-col">
      {/* Header with KK Innovations Link */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
      <MouseFollow3DContainer
        className="mx-auto max-w-6xl px-6 py-20"
        intensity={0.3}
        maxRotation={8}
      >
      <section className="text-center">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Next-Gen Modules for {" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Product Development
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Discover innovative products, extensions and modules for financial tracking, 
            credential management, and much more. Powerful tools designed to enhance 
            your development workflow with cutting-edge capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition"
            >
              Explore Innovative Products
            </a>
            <a
              href="https://github.com/kksquareinnovations-wq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-slate-500 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
      </MouseFollow3DContainer>

      {/* Extensions Grid */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Featured Products
        </h2>
        <p className="text-slate-300 text-center mb-12">
          Explore our innovative products, extensions, and more tailored for your needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {extensions.map((extension) => (
            <a
              key={extension.id}
              href={extension.href}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-slate-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${extension.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">{extension.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
                  {extension.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-6">
                  {extension.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {extension.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-slate-300 text-sm"
                    >
                      <span className="text-cyan-400">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="inline-block px-4 py-2 bg-slate-700 group-hover:bg-cyan-600 text-white rounded-lg font-semibold text-sm transition">
                  Learn More →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-20 border-t border-slate-700"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Why Choose These Products?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Fast & Efficient
            </h3>
            <p className="text-slate-400">
              Lightweight products that don&apos;t slow down your workflow
              while providing real-time data.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-3">Secure</h3>
            <p className="text-slate-400">
              Your financial data is encrypted and never stored locally. Secure
              API integration with leading brokers.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Developer Friendly
            </h3>
            <p className="text-slate-400">
              Designed by developers for developers. Easy to install and
              configure right in VS Code.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Donation Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-slate-700">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">
            Support Our Non-Profit Mission
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            We&apos;re dedicated to making products and tools accessible to
            developers everywhere. Your support helps us continue building the best,
            amazing products and maintaining our community.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* PayPal Donation Button */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-8 hover:border-slate-500 transition">
              <h3 className="text-xl font-bold text-white mb-4">
                Make a Donation
              </h3>
              <p className="text-slate-300 mb-6 text-sm">
                Support our non-profit organization
              </p>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_blank"
                className="inline-block"
              >
                <input type="hidden" name="cmd" value="_donations" />
                <input
                  type="hidden"
                  name="business"
                  value="kksquareinnovations@gmail.com"
                />
                <input type="hidden" name="lc" value="US" />
                <input
                  type="hidden"
                  name="item_name"
                  value="KK Innovation Portfolio - Non-Profit Support"
                />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="currency_code" value="USD" />
                <input
                  type="hidden"
                  name="bn"
                  value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/50"
                >
                  💝 Donate via PayPal
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-4">
                100% of donations support our mission
              </p>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-8 hover:border-slate-500 transition">
              <h3 className="text-xl font-bold text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-slate-300 mb-6 text-sm">
                Have questions or suggestions?
              </p>
              <a
                href="mailto:kksquareinnovations@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/50"
              >
                📧 Email Us
              </a>
              <p className="text-xs text-slate-500 mt-4">
                kksquareinnovations@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
      </main>

      {/* Footer with KK Innovations Links */}
      <Footer />
    </div>
  );
}

