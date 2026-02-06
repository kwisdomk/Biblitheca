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

        <div className="space-y-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-mono font-semibold text-gray-300">
                  {skill.name}
                </span>
                <span className="text-xs text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`h-full ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
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
