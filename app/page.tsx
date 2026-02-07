"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Cpu, Network, Shield, Activity, Lock, Code2, Server } from "lucide-react";

// --- Components ---

const GlassCard = ({ children, className = "", title, status = "ACTIVE" }) => (
  <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl transition-all hover:border-white/20 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative p-6 h-full flex flex-col">
      {title && (
        <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
          <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-wider">{title}</h3>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
            status === 'ACTIVE' ? 'bg-emerald-500/20 text-emerald-400' : 
            status === 'BUILDING' ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'
          }`}>
            {status}
          </span>
        </div>
      )}
      {children}
    </div>
  </div>
);

const ProgressBar = ({ label, value, color = "bg-blue-500" }) => (
  <div className="mb-3">
    <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <div 
        className={`h-full ${color} transition-all duration-1000 ease-out`} 
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export default function Portfolio() {
  // Simulate Live Metrics
  const [metrics, setMetrics] = useState({ cpu: 42, ram: 48, net: 120 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(35 + Math.random() * 20),
        ram: Math.floor(45 + Math.random() * 10),
        net: Math.floor(100 + Math.random() * 150),
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 p-4 md:p-8 font-sans selection:bg-blue-500/30">
      
      {/* HEADER / IDENTITY */}
      <header className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 tracking-tight mb-2">
            WISDOM KINOTI
          </h1>
          <p className="text-lg text-neutral-400 font-light flex items-center gap-2">
            Architect of Agentic AI Systems <span className="text-neutral-700">|</span> 2026
          </p>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <div className="text-xs font-mono text-neutral-500 mb-1">CURRENT STATUS</div>
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono bg-emerald-950/30 px-3 py-1 rounded-full border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            IBM INTERNSHIP: ACTIVE
          </div>
        </div>
      </header>

      {/* BENTO GRID LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* 1. SYSTEM MONITOR (Top Left) - 4 Columns */}
        <GlassCard className="md:col-span-4" title="SYSTEM: ATHENA" status="ONLINE">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Cpu className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">HP VICTUS 15</div>
                  <div className="text-xs text-neutral-500 font-mono">i5-13420H • RTX 3050 (6GB)</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 mt-4">
              <ProgressBar label="CPU LOAD" value={metrics.cpu} color="bg-blue-500" />
              <ProgressBar label="RAM (8GB)" value={metrics.ram} color="bg-purple-500" />
              <div className="flex justify-between text-xs font-mono text-neutral-500 pt-2 border-t border-white/5">
                <span>NET: {metrics.net} KB/s</span>
                <span>UPTIME: 24D 03H</span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* 2. PROJECT HAKI (Main Center) - 5 Columns */}
        <GlassCard className="md:col-span-5" title="PROJECT: HAKI" status="ACTIVE">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Agentic Healthcare Orchestrator</h2>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Deploying autonomous AI agents using <span className="text-blue-300">IBM Granite</span> & <span className="text-blue-300">watsonx</span> to triage patients and allocate hospital resources in rural regions.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {['IBM Granite', 'watsonx', 'Next.js 14', 'IBM Maximo'].map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 rounded text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-xs text-neutral-500 font-mono">ROLE: TEAM LEAD</span>
                <span className="text-xs text-neutral-500 font-mono">DEPLOY: IBM CLOUD</span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* 3. EXPERIENCE LOG (Top Right) - 3 Columns */}
        <GlassCard className="md:col-span-3 row-span-2" title="EXECUTION_LOG" status="SYNCED">
          <div className="relative border-l border-white/10 ml-2 space-y-6 pl-6 py-2">
            
            {/* Log Item 1 */}
            <div className="relative">
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-neutral-900 bg-emerald-500"></span>
              <div className="text-xs font-mono text-emerald-400 mb-0.5">JAN 19, 2026</div>
              <div className="text-sm font-medium text-white">IBM Internship Activated</div>
              <div className="text-xs text-neutral-500 mt-1">i3 Technologies • Software Dev</div>
            </div>

            {/* Log Item 2 */}
            <div className="relative">
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-neutral-900 bg-blue-500"></span>
              <div className="text-xs font-mono text-blue-400 mb-0.5">JAN 2026</div>
              <div className="text-sm font-medium text-white">Project HAKI Launch</div>
              <div className="text-xs text-neutral-500 mt-1">Dev Day Hackathon Lead</div>
            </div>

            {/* Log Item 3 */}
            <div className="relative">
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-neutral-900 bg-neutral-600"></span>
              <div className="text-xs font-mono text-neutral-500 mb-0.5">SEP 2025</div>
              <div className="text-sm font-medium text-neutral-300">Cybersecurity Bootcamp</div>
              <div className="text-xs text-neutral-500 mt-1">QRadar • Guardium • Verify</div>
            </div>

            {/* Log Item 4 */}
            <div className="relative">
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-neutral-900 bg-neutral-600"></span>
              <div className="text-xs font-mono text-neutral-500 mb-0.5">CURRENT</div>
              <div className="text-sm font-medium text-neutral-300">Zetech University</div>
              <div className="text-xs text-neutral-500 mt-1">Year 2, Sem 2 • Data Science</div>
            </div>

          </div>
        </GlassCard>

        {/* 4. AELPHER (Side Card) - 3 Columns */}
        <GlassCard className="md:col-span-3" title="PROCESS: AELPHER" status="RUNNING">
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <Activity className="w-5 h-5 text-purple-400 mt-1" />
              <div>
                <h3 className="text-white font-medium">Internship Co-Pilot</h3>
                <p className="text-xs text-neutral-500 mt-1">RAG Pipeline managing academic & corporate workflows.</p>
              </div>
            </div>
            <div className="mt-2 p-3 bg-black/20 rounded border border-white/5 font-mono text-[10px] text-green-400/80">
              {`> NEXT_TASK: CALC_II_ASSIGNMENT`}<br/>
              {`> PENDING: IBM_GRANITE_DOCS`}<br/>
              {`> STATUS: OPTIMAL`}
            </div>
          </div>
        </GlassCard>

        {/* 5. RHEL LAB (Bottom Center) - 6 Columns */}
        <GlassCard className="md:col-span-6" title="ENV: RHEL_10_SANDBOX" status="SECURE">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-400" />
                System Hardening
              </h3>
              <p className="text-xs text-neutral-400 mt-2">
                Enterprise-grade virtualization environment for testing SELinux policies and kernel tuning.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-[10px] bg-red-900/20 text-red-400 px-2 py-1 rounded border border-red-500/20">RH124</span>
                <span className="text-[10px] bg-neutral-800 text-neutral-400 px-2 py-1 rounded border border-white/10">VMware</span>
              </div>
            </div>
            <div className="bg-black/40 rounded-lg border border-white/5 p-3 font-mono text-[10px] text-neutral-400 overflow-hidden">
              <div className="text-neutral-500 mb-1"># root@athena-rhel10 [~]</div>
              <div className="text-white">$ systemctl status firewalld</div>
              <div className="text-emerald-500">● active (running)</div>
              <div className="text-white mt-1">$ sestatus</div>
              <div className="text-neutral-300">SELinux status: enabled</div>
              <div className="text-neutral-300">Current mode: enforcing</div>
            </div>
          </div>
        </GlassCard>

        {/* 6. TECH STACK (Bottom Right) - 3 Columns */}
        <GlassCard className="md:col-span-3" title="LOADED_MODULES" status="READY">
          <div className="space-y-4 text-sm">
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase mb-2">AI & Orchestration</div>
              <div className="space-y-1">
                <div className="text-neutral-300">IBM Granite</div>
                <div className="text-neutral-300">watsonx Orchestrate</div>
                <div className="text-neutral-300">RAG Pipelines</div>
              </div>
            </div>
            <div className="border-t border-white/5 pt-3">
              <div className="text-xs font-mono text-neutral-400 uppercase mb-2">Systems</div>
              <div className="space-y-1">
                <div className="text-neutral-300">RHEL 10</div>
                <div className="text-neutral-300">VMware</div>
                <div className="text-neutral-300">Systemd</div>
              </div>
            </div>
            <div className="border-t border-white/5 pt-3">
              <div className="text-xs font-mono text-neutral-400 uppercase mb-2">Frontend</div>
              <div className="space-y-1">
                <div className="text-neutral-300">Next.js 14</div>
                <div className="text-neutral-300">Tailwind CSS</div>
                <div className="text-neutral-300">Supabase</div>
              </div>
            </div>
          </div>
        </GlassCard>

      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-xs text-neutral-600 font-mono">
        © 2026 Wisdom Kinoti • System Architect • Built with Next.js 14 & Tailwind CSS
      </footer>
    </main>
  );
}
