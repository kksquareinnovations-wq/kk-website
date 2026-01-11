"use client";

export default function Home() {
  const currentYear = new Date().getFullYear();

  const extensions = [
    {
      id: 1,
      name: "Robinhood Portfolio Balance Monitor",
      originalName: "Robinhood balance viewer",
      description: "Real-time portfolio balance monitoring directly in VS Code. Track your investment accounts and get instant updates on your total portfolio value.",
      icon: "📊",
      features: ["Real-time balance updates", "Multi-account support", "Quick status bar widget"],
      color: "from-green-500 to-emerald-600",
      href: "/extensions/portfolio-balance-monitor"
    },
    {
      id: 2,
      name: "Fidelity Investment Tracker Pro",
      originalName: "Fidelity balance viewer",
      description: "Advanced investment tracking with detailed holdings, performance analytics, and comprehensive portfolio insights for financial planning.",
      icon: "💼",
      features: ["Holdings breakdown", "Performance analytics", "Asset allocation"],
      color: "from-blue-500 to-cyan-600",
      href: "/extensions/investment-tracker-pro"
    },
    {
      id: 3,
      name: "Market Alert System",
      originalName: "Stock alerts",
      description: "Intelligent market alerts and price notifications. Receive timely alerts on stock movements, market conditions, and price targets you care about.",
      icon: "🚨",
      features: ["Custom price alerts", "Market notifications", "Watchlist management"],
      color: "from-orange-500 to-red-600",
      href: "/extensions/market-alert-system"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              KK Innovations
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#extensions" className="text-slate-300 hover:text-white transition">
              Extensions
            </a>
            <a href="#about" className="text-slate-300 hover:text-white transition">
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Powerful Extensions for <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Financial Tracking</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Monitor your investments, track portfolio performance, and stay informed with market alerts—all integrated directly into your development environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#extensions"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition"
            >
              Explore Extensions
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

      {/* Extensions Grid */}
      <section id="extensions" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Featured Extensions</h2>
        <p className="text-slate-300 text-center mb-12">
          Choose the extension that fits your financial tracking needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {extensions.map((extension) => (
            <a
              key={extension.id}
              href={extension.href}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-slate-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${extension.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>

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
                    <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
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
      <section id="about" className="mx-auto max-w-6xl px-6 py-20 border-t border-slate-700">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose These Extensions?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Fast & Efficient</h3>
            <p className="text-slate-400">
              Lightweight extensions that don&apos;t slow down your workflow while providing real-time data.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-3">Secure</h3>
            <p className="text-slate-400">
              Your financial data is encrypted and never stored locally. Secure API integration with leading brokers.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold text-white mb-3">Developer Friendly</h3>
            <p className="text-slate-400">
              Designed by developers for developers. Easy to install and configure right in VS Code.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Donation Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-slate-700">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Support Our Non-Profit Mission</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            We&apos;re dedicated to making financial tools accessible to developers everywhere. Your support helps us continue building amazing extensions and maintaining our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* PayPal Donation Button */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-8 hover:border-slate-500 transition">
              <h3 className="text-xl font-bold text-white mb-4">Make a Donation</h3>
              <p className="text-slate-300 mb-6 text-sm">Support our non-profit organization</p>
              <form 
                action="https://www.paypal.com/cgi-bin/webscr" 
                method="post" 
                target="_blank"
                className="inline-block"
              >
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="kksquareinnovations@gmail.com" />
                <input type="hidden" name="lc" value="US" />
                <input type="hidden" name="item_name" value="KK Innovation Portfolio - Non-Profit Support" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest" />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/50"
                >
                  💝 Donate via PayPal
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-4">100% of donations support our mission</p>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-8 hover:border-slate-500 transition">
              <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-slate-300 mb-6 text-sm">Have questions or suggestions?</p>
              <a
                href="mailto:kksquareinnovations@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/50"
              >
                📧 Email Us
              </a>
              <p className="text-xs text-slate-500 mt-4">kksquareinnovations@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-3">About</h4>
              <p className="text-slate-400 text-sm">
                KK Innovations provides powerful financial tracking extensions for developers.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Contact</h4>
              <p className="text-slate-400 text-sm">
                <a href="mailto:kksquareinnovations@gmail.com" className="hover:text-cyan-400 transition">
                  kksquareinnovations@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Support Us</h4>
              <p className="text-slate-400 text-sm">
                We&apos;re a non-profit organization. <a href="#" className="text-cyan-400 hover:text-cyan-300 transition">Donate today</a> to help us grow.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-500">
            <p>&copy; {currentYear} KK Innovations. Non-Profit Organization. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
