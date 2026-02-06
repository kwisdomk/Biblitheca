"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "IBM QRadar Sales Engineer",
    org: "IBM",
    icon: "🔴",
    color: "border-red-500",
  },
  {
    title: "IBM Guardium Data Protection",
    org: "IBM",
    icon: "🟦",
    color: "border-blue-500",
  },
  {
    title: "Red Hat System Administration",
    org: "Red Hat",
    icon: "🔶",
    color: "border-orange-500",
  },
  {
    title: "Cybersecurity Fundamentals",
    org: "CompTIA",
    icon: "🛡️",
    color: "border-green-500",
  },
];

export default function CertificationWall() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-white">
          Certifications
        </h2>
        <p className="text-gray-400 mb-12">
          Industry-recognized credentials validating expertise.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className={`border-2 ${cert.color} bg-gray-800 rounded-lg p-6 text-center cursor-pointer transition`}
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400">{cert.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
