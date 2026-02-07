"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "SECURITY", level: 100, color: "bg-red-500" },
  { name: "FRONTEND", level: 80, color: "bg-blue-500" },
  { name: "BACKEND", level: 70, color: "bg-green-500" },
  { name: "AI/ML", level: 60, color: "bg-purple-500" },
  { name: "CLOUD", level: 40, color: "bg-cyan-500" },
  { name: "DEVOPS", level: 40, color: "bg-orange-500" },
];

export default function SkillsRadar() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-white">
          Technical Arsenal
        </h2>
        <p className="text-gray-400 mb-12">
          Skill distribution across core competencies.
        </p>

        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-cyan-300 mb-8">SKILL MASTERY</h3>
          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-gray-300">{skill.name}</span>
                  <span className="text-sm text-cyan-400 font-mono">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 card-padding rounded-lg border border-gray-700">
            <h3 className="text-sm font-mono text-red-500 mb-3">
              SECURITY STACK
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ IBM QRadar SIEM</li>
              <li>✓ IBM Guardium Data Protection</li>
              <li>✓ Identity & Access Management</li>
              <li>✓ Network Security & Firewalls</li>
              <li>✓ Vulnerability Assessment</li>
            </ul>
          </div>

          <div className="bg-gray-800 card-padding rounded-lg border border-gray-700">
            <h3 className="text-sm font-mono text-blue-500 mb-3">
              DEVELOPMENT STACK
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ Next.js 15 & React 19</li>
              <li>✓ FastAPI & Python</li>
              <li>✓ Tailwind CSS & Framer Motion</li>
              <li>✓ PostgreSQL & Supabase</li>
              <li>✓ Docker & Linux/RHEL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
