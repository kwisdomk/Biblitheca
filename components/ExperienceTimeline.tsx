"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2024 - Present",
    title: "IBM Cybersecurity Bootcamp",
    org: "i3 Technologies",
    bullets: [
      "QRadar SIEM Specialist - real-time threat detection",
      "Guardium Data Protection - database security & compliance",
      "RHEL System Administration - Linux hardening",
      "Identity & Access Management - OAuth, SSO, LDAP",
    ],
    icon: "🔒",
  },
  {
    period: "2023 - Present",
    title: "Computer Science",
    org: "Zetech University",
    bullets: [
      "Year 2, Semester 2 - Strong Academic Standing",
      "Focus: Algorithms, Data Structures, Networks",
      "Security: Cryptography, System Security",
      "GPA: 3.8/4.0",
    ],
    icon: "🎓",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-white">
          Experience & Education
        </h2>
        <p className="text-gray-400 mb-12">
          Building expertise through structured learning.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-6">
              {/* Timeline Dot */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-cyan-400 border-2 border-cyan-300"></div>
                {idx !== experiences.length - 1 && (
                  <div className="w-0.5 h-24 bg-gradient-to-b from-cyan-400 to-transparent mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 flex-1">
                <p className="text-sm font-bold text-cyan-400 mb-1">
                  {exp.period}
                </p>
                <h4 className="text-lg font-bold text-cyan-300 mb-1">
                  {exp.title}
                </h4>
                <p className="text-sm text-gray-400 mb-3">{exp.org}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-gray-300 flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
