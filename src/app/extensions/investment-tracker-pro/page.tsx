"use client";

import Link from "next/link";

export default function InvestmentTrackerPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition"
          >
            ← Back
          </Link>
          <h1 className="text-2xl font-bold text-white">
            Investment Tracker Pro
          </h1>
          <div className="w-12"></div>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <div className="text-6xl mb-6">💼</div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Investment Tracker Pro
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Advanced investment tracking with detailed holdings, performance
            analytics, and comprehensive portfolio insights for smarter
            financial planning and decision-making.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-full text-sm font-semibold">
              Holdings Breakdown
            </span>
            <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 rounded-full text-sm font-semibold">
              Performance Analytics
            </span>
            <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 rounded-full text-sm font-semibold">
              Asset Allocation
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition"
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
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                📋 Holdings Breakdown
              </h3>
              <p className="text-slate-300">
                Get a detailed view of every holding in your portfolio. See
                individual stock positions, quantities, cost basis, and current
                values all in one organized view.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                📊 Performance Analytics
              </h3>
              <p className="text-slate-300">
                Analyze your investment performance with detailed metrics.
                Compare gains/losses, calculate ROI, and identify your best and
                worst performing assets.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-indigo-400 mb-3">
                🎯 Asset Allocation
              </h3>
              <p className="text-slate-300">
                Visualize your asset allocation with interactive charts. See
                percentage breakdowns by sector, asset class, and more to ensure
                proper diversification.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">
                📈 Historical Tracking
              </h3>
              <p className="text-slate-300">
                Track your portfolio performance over time. View daily, weekly,
                monthly, and yearly trends to understand long-term growth
                patterns.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">
                🔔 Rebalancing Alerts
              </h3>
              <p className="text-slate-300">
                Get alerts when your asset allocation drifts from your target
                percentages. Helps maintain your desired investment strategy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-rose-400 mb-3">
                💾 Data Export
              </h3>
              <p className="text-slate-300">
                Export your portfolio data as CSV or PDF for tax preparation,
                record-keeping, or sharing with financial advisors.
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Dashboard Overview
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
              <h3 className="font-bold text-white mb-3">
                Portfolio Summary Card
              </h3>
              <p className="text-slate-300 text-sm">
                Quick glance at your total value, daily change, and percentage
                change. Customizable display colors and metrics.
              </p>
            </div>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
              <h3 className="font-bold text-white mb-3">
                Asset Allocation Chart
              </h3>
              <p className="text-slate-300 text-sm">
                Pie chart showing how your capital is distributed across
                different asset types. Hover for detailed percentages.
              </p>
            </div>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
              <h3 className="font-bold text-white mb-3">Top Holdings Table</h3>
              <p className="text-slate-300 text-sm">
                Sortable table of your largest positions with gain/loss
                indicators and performance metrics.
              </p>
            </div>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
              <h3 className="font-bold text-white mb-3">Performance Chart</h3>
              <p className="text-slate-300 text-sm">
                Line chart tracking your portfolio value over selected time
                period. Compare to benchmarks like S&P 500.
              </p>
            </div>
          </div>
        </div>

        {/* Integration with Other Extensions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Works Great With
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-white mb-2">
                Portfolio Balance Monitor
              </h3>
              <p className="text-slate-300 text-sm">
                Get real-time balance updates in your status bar while viewing
                detailed analytics in Investment Tracker Pro.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="font-bold text-white mb-2">Market Alert System</h3>
              <p className="text-slate-300 text-sm">
                Receive alerts on holdings you&apos;re tracking, and view full
                performance context right in the tracker.
              </p>
            </div>
          </div>
        </div>

        {/* Customization */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Highly Customizable
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-cyan-400 text-xl">✓</span>
              <span className="text-slate-300">
                Choose your preferred currency and number formatting
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 text-xl">✓</span>
              <span className="text-slate-300">
                Custom color themes for charts and dashboard
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 text-xl">✓</span>
              <span className="text-slate-300">
                Select which metrics appear in your summary card
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 text-xl">✓</span>
              <span className="text-slate-300">
                Configure refresh rates and data retention policies
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 text-xl">✓</span>
              <span className="text-slate-300">
                Set target asset allocation percentages
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 text-xl">✓</span>
              <span className="text-slate-300">
                Create custom performance benchmarks
              </span>
            </li>
          </ul>
        </div>

        {/* Technical Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Technical Specifications
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-slate-800 border border-slate-700 rounded-lg">
              <div className="font-bold text-cyan-400 min-w-fit">
                Data Refresh:
              </div>
              <p className="text-slate-300">
                Configurable from 1 minute to 1 hour
              </p>
            </div>
            <div className="flex gap-4 p-6 bg-slate-800 border border-slate-700 rounded-lg">
              <div className="font-bold text-cyan-400 min-w-fit">
                Local Storage:
              </div>
              <p className="text-slate-300">
                All portfolio data stored securely in VS Code settings
                (encrypted)
              </p>
            </div>
            <div className="flex gap-4 p-6 bg-slate-800 border border-slate-700 rounded-lg">
              <div className="font-bold text-cyan-400 min-w-fit">
                Supported Formats:
              </div>
              <p className="text-slate-300">CSV, PDF, JSON export formats</p>
            </div>
            <div className="flex gap-4 p-6 bg-slate-800 border border-slate-700 rounded-lg">
              <div className="font-bold text-cyan-400 min-w-fit">
                Minimum Requirements:
              </div>
              <p className="text-slate-300">
                VS Code 1.75+, 2GB RAM, active internet connection
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-600/20 border border-blue-500/50 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Track Your Investments Like a Pro
          </h2>
          <p className="text-slate-300 mb-8">
            Get deep insights into your portfolio performance and make
            data-driven investment decisions.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition"
          >
            Install Now →
          </a>
        </div>

        {/* Support Section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Support Our Mission
          </h3>
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
              <p className="text-xs text-slate-500 mt-3">
                kksquareinnovations@gmail.com
              </p>
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
                <input
                  type="hidden"
                  name="business"
                  value="kksquareinnovations@gmail.com"
                />
                <input type="hidden" name="lc" value="US" />
                <input
                  type="hidden"
                  name="item_name"
                  value="Investment Tracker Pro - Non-Profit Support"
                />
                <input type="hidden" name="currency_code" value="USD" />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition"
                >
                  💝 Donate
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-3">
                Support our non-profit
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
