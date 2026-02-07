"use client";

import { useEffect, useState } from "react";

export default function MachineStatus({ hero, metrics }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Machine Info */}
        <div>
          <h3 className="text-lg font-bold text-cyan-300 mb-6">SYSTEM INFORMATION</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Host:</span>
              <span className="text-cyan-300 font-mono">{hero.status.machine}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Processor:</span>
              <span className="text-cyan-300 font-mono">13th Gen i5-13420H</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Graphics:</span>
              <span className="text-cyan-300 font-mono">NVIDIA RTX 3050 (6GB)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Memory:</span>
              <span className="text-cyan-300 font-mono">8.00 GB (3200 MT/s)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Current Focus:</span>
              <span className="text-cyan-300 font-mono">{hero.status.currentFocus}</span>
            </div>
          </div>
        </div>

        {/* Right: Real-time Metrics */}
        <div>
          <h3 className="text-lg font-bold text-cyan-300 mb-6">LIVE METRICS</h3>
          <div className="space-y-4">
            {/* CPU */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">CPU Usage</span>
                <span className="text-cyan-300 font-mono">{metrics.cpu}%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${metrics.cpu}%` }}
                />
              </div>
            </div>

            {/* RAM */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">RAM Usage</span>
                <span className="text-cyan-300 font-mono">{metrics.ram}%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-300"
                  style={{ width: `${metrics.ram}%` }}
                />
              </div>
            </div>

            {/* Network */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Network</span>
                <span className="text-cyan-300 font-mono">{metrics.net}</span>
              </div>
              <div className="flex gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex-1 bg-white/10 rounded-sm h-1"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
