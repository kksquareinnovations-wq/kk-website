"use client";

import Link from "next/link";

export default function MarketAlertSystem() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition">
            ← Back
          </Link>
          <h1 className="text-2xl font-bold text-white">Market Alert System</h1>
          <div className="w-12"></div>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <div className="text-6xl mb-6">🚨</div>
          <h1 className="text-5xl font-bold text-white mb-6">Market Alert System</h1>
          <p className="text-xl text-slate-300 mb-8">
            Intelligent market alerts and price notifications. Receive timely alerts on stock movements, market conditions, and price targets you care about—all without leaving VS Code.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/50 text-orange-300 rounded-full text-sm font-semibold">
              Custom Price Alerts
            </span>
            <span className="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-300 rounded-full text-sm font-semibold">
              Market Notifications
            </span>
            <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 rounded-full text-sm font-semibold">
              Watchlist Management
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition"
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
              <h3 className="text-xl font-bold text-orange-400 mb-3">📍 Custom Price Alerts</h3>
              <p className="text-slate-300">
                Set price targets for any stock. Get notified instantly when a stock reaches your target price, whether it&apos;s above or below your threshold.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3">📢 Real-Time Notifications</h3>
              <p className="text-slate-300">
                Receive desktop notifications, status bar indicators, and optional sound alerts. Never miss important market movements again.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">📋 Watchlist Management</h3>
              <p className="text-slate-300">
                Create custom watchlists for different sectors or strategies. Organize and manage multiple alerts for hundreds of stocks effortlessly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-3">📊 Market-Wide Alerts</h3>
              <p className="text-slate-300">
                Set alerts for market conditions like S&P 500 movements, VIX levels, or sector performance changes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">📱 Multi-Channel Notifications</h3>
              <p className="text-slate-300">
                Receive alerts via VS Code notification, email, webhook, or custom integrations. Choose how you want to be notified.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-rose-400 mb-3">⚙️ Intelligent Filtering</h3>
              <p className="text-slate-300">
                Filter alerts by time of day, volume changes, percentage moves, or custom conditions to reduce notification noise.
              </p>
            </div>
          </div>
        </div>

        {/* Alert Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Types of Alerts</h2>
          <div className="space-y-4">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">💰</span>
                <div>
                  <h3 className="font-bold text-white mb-2">Price Target Alerts</h3>
                  <p className="text-slate-300 text-sm">
                    Alert when stock price hits your target. Set separate thresholds for buy signals and take-profit levels.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📈</span>
                <div>
                  <h3 className="font-bold text-white mb-2">Percentage Change Alerts</h3>
                  <p className="text-slate-300 text-sm">
                    Get notified when a stock moves up or down by a specific percentage from its opening price or previous close.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📊</span>
                <div>
                  <h3 className="font-bold text-white mb-2">Volume Surge Alerts</h3>
                  <p className="text-slate-300 text-sm">
                    Monitor trading volume and get alerted when volume spikes above average, indicating potential price movements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-bold text-white mb-2">Technical Indicator Alerts</h3>
                  <p className="text-slate-300 text-sm">
                    Track RSI, MACD, Moving Averages and get alerts when indicators cross thresholds or form patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🔔</span>
                <div>
                  <h3 className="font-bold text-white mb-2">Market-Wide Alerts</h3>
                  <p className="text-slate-300 text-sm">
                    Monitor market indices, sectors, or economic indicators. Get broad market context for your individual stock alerts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📰</span>
                <div>
                  <h3 className="font-bold text-white mb-2">News-Based Alerts</h3>
                  <p className="text-slate-300 text-sm">
                    Get notified when major news breaks about companies in your watchlist. Integrated with financial news sources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Set Alerts */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">How to Set Alerts</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-500/20 border border-orange-500/50">
                  <span className="text-orange-400 font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Open the Alert Panel</h3>
                <p className="text-slate-300">
                  Click the alert bell icon in the VS Code sidebar to open the Market Alert System panel.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-500/20 border border-orange-500/50">
                  <span className="text-orange-400 font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Add a Stock or Index</h3>
                <p className="text-slate-300">
                  Search and add the stock symbol or index you want to monitor. Add to an existing watchlist or create a new one.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-500/20 border border-orange-500/50">
                  <span className="text-orange-400 font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Configure Alert Conditions</h3>
                <p className="text-slate-300">
                  Set your alert conditions: price targets, percentage changes, volume surges, or technical indicators.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-500/20 border border-orange-500/50">
                  <span className="text-orange-400 font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Choose Notification Method</h3>
                <p className="text-slate-300">
                  Select how you want to be notified: VS Code popup, sound alert, email, or webhook integration.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-500/20 border border-orange-500/50">
                  <span className="text-orange-400 font-bold">5</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Save and Monitor</h3>
                <p className="text-slate-300">
                  Save your alert and start monitoring. The extension runs continuously in the background and notifies you instantly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Multiple Notification Methods</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="text-3xl mb-3">🔔</div>
              <h3 className="font-bold text-white mb-2">VS Code Notification</h3>
              <p className="text-slate-300 text-sm">
                Standard VS Code notification popup with alert details and quick actions.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="text-3xl mb-3">🔊</div>
              <h3 className="font-bold text-white mb-2">Sound Alert</h3>
              <p className="text-slate-300 text-sm">
                Optional audio cue to grab your attention (customizable volume and sound).
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-white mb-2">Email Notification</h3>
              <p className="text-slate-300 text-sm">
                Send alert details to your email with chart snapshots and trading recommendations.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="font-bold text-white mb-2">Webhook Integration</h3>
              <p className="text-slate-300 text-sm">
                Send alerts to custom webhooks for integration with trading bots or other systems.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-white mb-2">Slack Integration</h3>
              <p className="text-slate-300 text-sm">
                Send alerts directly to your Slack channel for team notifications.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-white mb-2">Push Notification</h3>
              <p className="text-slate-300 text-sm">
                Mobile push notifications via VS Code companion mobile app (coming soon).
              </p>
            </div>
          </div>
        </div>

        {/* Performance & Privacy */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Performance & Privacy</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-orange-400 text-xl flex-shrink-0">⚡</span>
              <div>
                <h3 className="font-bold text-white">Lightweight & Fast</h3>
                <p className="text-slate-300 text-sm">Minimal impact on VS Code performance with optimized background processing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-orange-400 text-xl flex-shrink-0">🔒</span>
              <div>
                <h3 className="font-bold text-white">Private & Secure</h3>
                <p className="text-slate-300 text-sm">Your watchlists and alert preferences stored locally. No data sold or shared.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-orange-400 text-xl flex-shrink-0">⚙️</span>
              <div>
                <h3 className="font-bold text-white">Configurable Refresh Rate</h3>
                <p className="text-slate-300 text-sm">Control how frequently alerts are checked (1 second to 5 minutes).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-orange-400 text-xl flex-shrink-0">🔄</span>
              <div>
                <h3 className="font-bold text-white">Data Backup</h3>
                <p className="text-slate-300 text-sm">Automatic backup of your alerts and preferences to cloud storage.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/50 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Market Opportunity Again</h2>
          <p className="text-slate-300 mb-8">
            Set intelligent alerts and stay informed about the stocks and markets that matter to you.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition"
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
                <input type="hidden" name="item_name" value="Market Alert System - Non-Profit Support" />
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
