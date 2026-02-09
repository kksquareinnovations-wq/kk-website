"use client";

import Link from "next/link";
import { ExpiryTable } from "@/components/expiry-tracker/ExpiryTable";

export default function AccountsExpiryTracker() {
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
            Accounts Expiry Tracker
          </h1>
          <div className="w-12"></div>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <div className="text-6xl mb-6">⏰</div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Accounts Expiry Tracker
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Enterprise-grade account and certificate expiry monitoring system. 
            Track database credentials, SSL certificates, and service accounts 
            across multiple environments with intelligent alerting and automated renewal workflows.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-300 rounded-full text-sm font-semibold">
              Critical Alerts
            </span>
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-full text-sm font-semibold">
              Multi-Environment
            </span>
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 text-purple-300 rounded-full text-sm font-semibold">
              Automated Workflows
            </span>
            <span className="px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-300 rounded-full text-sm font-semibold">
              Enterprise Ready
            </span>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/kksquareinnovations-wq/accounts-expiry-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition"
            >
              Deploy Solution
            </a>
            <a
              href="https://github.com/kksquareinnovations-wq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-500 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition"
            >
              View Documentation
            </a>
          </div>
        </div>

        {/* Screenshot Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Production Screenshot</h2>
          <p className="text-slate-300 mb-6">
            Screenshot from our enterprise deployment showing the full account management interface 
            with real-time status indicators and bulk operations.
          </p>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 overflow-hidden">
            <div className="relative">
              <img 
                src="/account-management-screenshot.png"
                alt="Account Management Dashboard Screenshot - Real-time account expiry tracking with status indicators"
                className="w-full h-auto rounded-lg border border-slate-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Enterprise Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3">
                🚨 Critical Expiry Alerts
              </h3>
              <p className="text-slate-300">
                Automated alerts for certificates and accounts nearing expiry. 
                Configurable thresholds with escalation workflows and integration 
                with popular notification systems like Slack, PagerDuty, and email.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                🏢 Multi-Environment Support
              </h3>
              <p className="text-slate-300">
                Track accounts across PROD, NPE, OLAB, and custom environments. 
                Environment-specific policies and approval workflows ensure proper 
                governance and compliance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">
                🔄 Automated Renewal Workflows
              </h3>
              <p className="text-slate-300">
                Integration with certificate authorities and identity providers 
                for automated renewal. Custom workflows for manual approvals 
                and rollback procedures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-3">
                📊 Comprehensive Reporting
              </h3>
              <p className="text-slate-300">
                Detailed audit trails, compliance reports, and analytics dashboard. 
                Export capabilities for security audits and regulatory compliance 
                documentation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                🔐 Security & Compliance
              </h3>
              <p className="text-slate-300">
                Role-based access control, encrypted credential storage, and audit 
                logging. SOC2, ISO27001, and industry compliance framework support.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                📱 Mobile & API Support
              </h3>
              <p className="text-slate-300">
                Responsive web interface and dedicated mobile app. RESTful APIs 
                for integration with existing DevOps tools and infrastructure 
                automation platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Implementation Guide</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-500/20 border border-red-500/50">
                  <span className="text-red-400 font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Environment Assessment
                </h3>
                <p className="text-slate-300">
                  Identify all accounts, certificates, and credentials across your 
                  infrastructure. Our discovery tools can automatically scan and 
                  catalog existing assets for immediate tracking.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-500/20 border border-red-500/50">
                  <span className="text-red-400 font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  System Integration
                </h3>
                <p className="text-slate-300">
                  Deploy monitoring agents and configure integrations with your 
                  existing identity providers, certificate authorities, and 
                  notification systems for seamless operation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-500/20 border border-red-500/50">
                  <span className="text-red-400 font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Policy Configuration
                </h3>
                <p className="text-slate-300">
                  Set up expiry thresholds, approval workflows, and automated 
                  renewal policies. Configure role-based access and compliance 
                  rules specific to your organization.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-500/20 border border-red-500/50">
                  <span className="text-red-400 font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Monitoring & Maintenance
                </h3>
                <p className="text-slate-300">
                  Enable continuous monitoring with proactive alerting. Regular 
                  compliance reporting and automated health checks ensure system 
                  reliability and regulatory adherence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Environments */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Supported Environments & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="font-bold text-white">Production (PROD)</h3>
              <p className="text-slate-400 text-sm mt-2">
                Critical production systems with strict SLA monitoring
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🧪</div>
              <h3 className="font-bold text-white">Non-Production (NPE)</h3>
              <p className="text-slate-400 text-sm mt-2">
                Development and staging environments
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-bold text-white">On-premises Labs (OLAB)</h3>
              <p className="text-slate-400 text-sm mt-2">
                Research and testing environments
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-white mb-6">Integration Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-700/50 rounded-lg">
                <div className="text-2xl mb-2">🗄️</div>
                <div className="text-sm text-slate-300">Oracle Database</div>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-lg">
                <div className="text-2xl mb-2">🔒</div>
                <div className="text-sm text-slate-300">SSL Certificates</div>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-lg">
                <div className="text-2xl mb-2">👤</div>
                <div className="text-sm text-slate-300">Service Accounts</div>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-lg">
                <div className="text-2xl mb-2">🔑</div>
                <div className="text-sm text-slate-300">API Keys</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/50 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-slate-300 mb-8">
            Deploy enterprise-grade account expiry tracking and never miss a critical renewal again.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/kksquareinnovations-wq/accounts-expiry-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition"
            >
              Start Free Trial →
            </a>
            <a
              href="mailto:kksquareinnovations@gmail.com?subject=Account%20Expiry%20Tracker%20Enterprise%20Demo"
              className="inline-block px-8 py-3 border border-slate-500 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition"
            >
              Request Enterprise Demo
            </a>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Enterprise Support & Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 text-center hover:border-slate-500 transition">
              <p className="text-slate-300 mb-4">Professional implementation and support services</p>
              <a
                href="mailto:kksquareinnovations@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition"
              >
                📧 Contact Enterprise Sales
              </a>
              <p className="text-xs text-slate-500 mt-3">
                kksquareinnovations@gmail.com
              </p>
            </div>

            {/* Donation */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 text-center hover:border-slate-500 transition">
              <p className="text-slate-300 mb-4">Support our open-source initiatives</p>
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
                  value="Account Expiry Tracker - Open Source Support"
                />
                <input type="hidden" name="currency_code" value="USD" />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition"
                >
                  💝 Support Development
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-3">
                Help us build better security tools
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}