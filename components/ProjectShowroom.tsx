"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    name: "HAKI - AI Security Scanner",
    problem: "Manual security audits are time-consuming and error-prone",
    solution: "Built an AI-powered SIEM dashboard analyzing network traffic in real-time using FastAPI & Next.js",
    result: "Reduced audit time by 65% | Detects anomalies in <2s",
    hurdle: "Integrating real-time WebSocket events with QRadar API",
    tech: ["FastAPI", "Next.js", "QRadar", "WebSocket", "PostgreSQL"],
    github: "https://github.com/wisdomkinoti/haki",
    demo: "https://haki-demo.vercel.app",
    demoEmbed: true,
  },
  {
    name: "Aelpher - Personal Execution OS",
    problem: "Context switching kills productivity; teams need unified execution environment",
    solution: "Developed a task management OS with AI agent that schedules & executes work autonomously",
    result: "Users complete 40% more tasks | AI handles 30% of planning",
    hurdle: "Building reliable autonomous scheduling without human intervention failures",
    tech: ["Next.js 15", "Tailwind", "Supabase", "Claude API", "Vercel"],
    github: "https://github.com/wisdomkinoti/aelpher",
    demo: "https://aelpher.vercel.app",
  },
  {
    name: "Perimeter Lab - Network Security Sandbox",
    problem: "Security teams can't safely test malware or attack vectors",
    solution: "Created isolated Docker-based lab environment with Guardium monitoring & vulnerability scanning",
    result: "Safe testing for 50+ attack scenarios | Zero escape incidents",
    hurdle: "Achieving true network isolation while maintaining realistic traffic patterns",
    tech: ["Docker", "Guardium", "RHEL", "Bash", "Python"],
    github: "https://github.com/wisdomkinoti/perimeter-lab",
    demo: "https://github.com/wisdomkinoti/perimeter-lab#demo",
  },
];

export default function ProjectShowroom() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section className="section-padding bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-white">
          Project Showroom
        </h2>
        <p className="text-gray-400 mb-12">
          Evidence of impact. Not portfolio fluff.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition group"
            >
              {/* Demo Iframe Toggle */}
              {project.demoEmbed && expandedIdx === idx && (
                <div className="relative w-full h-64 bg-black border-b border-gray-700">
                  <iframe
                    src={project.demo}
                    className="w-full h-full"
                    title={project.name}
                    loading="lazy"
                  />
                </div>
              )}

              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                <h3 className="text-xl font-bold text-white">
                  {project.name}
                </h3>
              </div>

              {/* Card Body */}
              <div className="card-padding space-y-4">
                <div>
                  <p className="text-xs font-mono text-orange-500 mb-1">
                    PROBLEM
                  </p>
                  <p className="text-sm text-gray-300">{project.problem}</p>
                </div>

                <div>
                  <p className="text-xs font-mono text-blue-500 mb-1">
                    SOLUTION
                  </p>
                  <p className="text-sm text-gray-300">{project.solution}</p>
                </div>

                <div>
                  <p className="text-xs font-mono text-green-500 mb-1">
                    RESULT
                  </p>
                  <p className="text-sm text-gray-300 font-semibold">
                    {project.result}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-mono text-yellow-500 mb-1">
                    TECHNICAL HURDLE
                  </p>
                  <p className="text-sm text-gray-400">{project.hurdle}</p>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-800 text-blue-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  {project.demoEmbed && (
                    <button
                      onClick={() =>
                        setExpandedIdx(expandedIdx === idx ? null : idx)
                      }
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-500 transition"
                    >
                      {expandedIdx === idx ? "Hide" : "Show"} Demo
                    </button>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-500 transition"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-500 transition"
                  >
                    <ExternalLink size={16} /> Link
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
