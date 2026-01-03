"use client";

import Link from "next/link";

export default function PortfolioBalanceMonitor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition">
            ← Back
          </Link>
          <h1 className="text-2xl font-bold text-white">Portfolio Balance Monitor</h1>
          <div className="w-12"></div>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <div className="text-6xl mb-6">📊</div>
          <h1 className="text-5xl font-bold text-white mb-6">Portfolio Balance Monitor</h1>
          <p className="text-xl text-slate-300 mb-8">
            Real-time portfolio balance monitoring directly in VS Code. Track your investment accounts and get instant updates on your total portfolio value without leaving your development environment.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-300 rounded-full text-sm font-semibold">
              Real-Time Updates
            </span>
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-full text-sm font-semibold">
              Multi-Account
            </span>
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 text-purple-300 rounded-full text-sm font-semibold">
              Status Bar Widget
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition"
            >
              Install Extension
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-500 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition"
            >
              View Source Code
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-3">📈 Real-Time Balance Updates</h3>
              <p className="text-slate-300">
                Get live updates of your portfolio balance in the VS Code status bar. No need to switch windows or refresh browsers—stay focused on coding while monitoring your investments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-3">🔗 Multi-Account Support</h3>
              <p className="text-slate-300">
                Connect multiple investment accounts from Robinhood and other brokers. View consolidated balance across all accounts at a glance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">⚡ Quick Status Bar Widget</h3>
              <p className="text-slate-300">
                Always-visible status bar widget shows your current portfolio value. Click to expand for detailed account breakdown.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">🔐 Secure Authentication</h3>
              <p className="text-slate-300">
                Your credentials are never stored. We use OAuth 2.0 and secure API connections for safe account access.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-500/20 border border-green-500/50">
                  <span className="text-green-400 font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Install the Extension</h3>
                <p className="text-slate-300">
                  Search for &quot;Portfolio Balance Monitor&quot; in the VS Code Extensions marketplace and click Install.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-500/20 border border-green-500/50">
                  <span className="text-green-400 font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Connect Your Broker Account</h3>
                <p className="text-slate-300">
                  Open the extension settings and authenticate with your Robinhood or other supported broker. You&apos;ll be redirected to their secure login.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-500/20 border border-green-500/50">
                  <span className="text-green-400 font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">View Your Balance</h3>
                <p className="text-slate-300">
                  Your balance appears instantly in the status bar at the bottom of VS Code. Updates refresh every 30 seconds (configurable).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-500/20 border border-green-500/50">
                  <span className="text-green-400 font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Customize Settings</h3>
                <p className="text-slate-300">
                  Choose update frequency, currency display format, and which accounts to display. All preferences saved locally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Brokers */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Supported Brokers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🦅</div>
              <h3 className="font-bold text-white">Robinhood</h3>
              <p className="text-slate-400 text-sm mt-2">Full support for stock & crypto balances</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-white">Fidelity</h3>
              <p className="text-slate-400 text-sm mt-2">Coming soon in v2.0</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-white">E*TRADE</h3>
              <p className="text-slate-400 text-sm mt-2">Coming soon in v2.0</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group cursor-pointer">
              <summary className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg border border-slate-700 group-open:bg-slate-700 transition">
                <span className="font-bold text-white text-lg">Is my data secure?</span>
                <span className="ml-auto text-slate-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="p-6 text-slate-300">
                Yes! We never store your credentials locally. All communication uses encrypted OAuth 2.0 with broker APIs. Your data never passes through our servers.
              </p>
            </details>

            <details className="group cursor-pointer">
              <summary className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg border border-slate-700 group-open:bg-slate-700 transition">
                <span className="font-bold text-white text-lg">What if I lose internet connection?</span>
                <span className="ml-auto text-slate-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="p-6 text-slate-300">
                The extension caches your last balance locally. Once you&apos;re back online, it will update automatically.
              </p>
            </details>

            <details className="group cursor-pointer">
              <summary className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg border border-slate-700 group-open:bg-slate-700 transition">
                <span className="font-bold text-white text-lg">How often does it update?</span>
                <span className="ml-auto text-slate-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="p-6 text-slate-300">
                Default is every 30 seconds, but you can configure it from 10 seconds to 5 minutes in settings.
              </p>
            </details>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/50 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Monitor Your Portfolio?</h2>
          <p className="text-slate-300 mb-8">
            Install Portfolio Balance Monitor today and never lose focus on your investments again.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition"
          >
            Install Now →
          </a>
        </div>

        {/* Support Section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Support Our Mission</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 text-center hover:border-slate-500 transition">
              <p className="text-slate-300 mb-4">Have questions or feedback?</p>
              <a
                href="mailto:kksquareinnovations@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition"
              >
                📧 Email Us
              </a>
              <p className="text-xs text-slate-500 mt-3">kksquareinnovations@gmail.com</p>
            </div>

            {/* Donation */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 text-center hover:border-slate-500 transition">
              <p className="text-slate-300 mb-4">Help us build better tools</p>
              <form 
                action="https://www.paypal.com/cgi-bin/webscr" 
                method="post" 
                target="_blank"
                className="inline-block"
              >
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="kksquareinnovations@gmail.com" />
                <input type="hidden" name="lc" value="US" />
                <input type="hidden" name="item_name" value="Portfolio Balance Monitor - Non-Profit Support" />
                <input type="hidden" name="currency_code" value="USD" />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition"
                >
                  💝 Donate
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-3">Support our non-profit</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
