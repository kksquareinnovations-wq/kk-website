"use client";

import React, { useState } from "react";

interface Account {
  id: string;
  name: string;
  type: string;
  owner: string;
  environment: string;
  expiryDate: string;
  status: string;
  countdown: string;
}

const mockAccounts: Account[] = [
  {
    id: "1",
    name: "JAM_DEV",
    type: "Database",
    owner: "TEAM_DEV",
    environment: "PROD",
    expiryDate: "2026-01-26",
    status: "CRITICAL",
    countdown: "3 days"
  },
  {
    id: "2", 
    name: "SVC_PROD_ORA_ABC",
    type: "Database",
    owner: "TEAMOps_PROD",
    environment: "PROD",
    expiryDate: "2026-01-30",
    status: "CRITICAL",
    countdown: "7 days"
  },
  {
    id: "3",
    name: "ENTRUST_NPE", 
    type: "Certificate",
    owner: "TEAMOps_NPE",
    environment: "NPE",
    expiryDate: "2026-01-30",
    status: "CRITICAL",
    countdown: "7 days"
  }
];

export const ExpiryTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 min-h-[600px]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Account Management</h1>
          <p className="text-slate-400">Track and manage account expirations</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
          <div className="text-red-400 text-sm font-medium mb-1">Critical</div>
          <div className="text-red-300 text-2xl font-bold">3</div>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 text-center">
          <div className="text-yellow-400 text-sm font-medium mb-1">Expiring Soon</div>
          <div className="text-yellow-300 text-2xl font-bold">2</div>
        </div>
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
          <div className="text-green-400 text-sm font-medium mb-1">Active</div>
          <div className="text-green-300 text-2xl font-bold">1</div>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center">
          <div className="text-blue-400 text-sm font-medium mb-1">Total</div>
          <div className="text-blue-300 text-2xl font-bold">6</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-600 text-left">
              <th className="pb-3 text-sm font-medium text-slate-400 uppercase tracking-wider">Account Name</th>
              <th className="pb-3 text-sm font-medium text-slate-400 uppercase tracking-wider">Type</th>
              <th className="pb-3 text-sm font-medium text-slate-400 uppercase tracking-wider">Owner</th>
              <th className="pb-3 text-sm font-medium text-slate-400 uppercase tracking-wider">Environment</th>
              <th className="pb-3 text-sm font-medium text-slate-400 uppercase tracking-wider">Expiry Date</th>
              <th className="pb-3 text-sm font-medium text-slate-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {mockAccounts.map((account) => (
              <tr key={account.id} className="hover:bg-slate-700/50 transition-colors">
                <td className="py-4 text-white font-medium">{account.name}</td>
                <td className="py-4 text-slate-300">{account.type}</td>
                <td className="py-4 text-slate-300">{account.owner}</td>
                <td className="py-4">
                  <span className="px-2 py-1 text-xs rounded border text-red-300 bg-red-500/20 border-red-500/30">
                    {account.environment}
                  </span>
                </td>
                <td className="py-4 text-slate-300">{account.expiryDate}</td>
                <td className="py-4">
                  <span className="px-2 py-1 text-xs rounded border font-medium text-red-400 bg-red-500/10 border-red-500/30">
                    {account.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
