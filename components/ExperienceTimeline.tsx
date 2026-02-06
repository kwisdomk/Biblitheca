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
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="border-l-4 border-blue-500 pl-6 py-2"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{exp.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-mono text-blue-500 mb-1">
                    {exp.period}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{exp.org}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-gray-300 text-sm">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
