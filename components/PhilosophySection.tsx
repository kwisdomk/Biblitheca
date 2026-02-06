"use client";

import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-8 text-white">
            Philosophy
          </h2>

          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg card-padding border border-blue-500">
            <p className="text-lg text-gray-100 leading-relaxed mb-6">
              "I believe security isn't about building walls, but about
              understanding flows. My approach combines{" "}
              <span className="text-blue-300 font-semibold">Stoic discipline</span>{" "}
              with{" "}
              <span className="text-green-300 font-semibold">systems thinking</span>
              —architecting resilient systems that fail gracefully."
            </p>

            <div className="space-y-4 text-gray-200">
              <div>
                <p className="text-sm font-mono text-blue-400 mb-2">
                  CORE PRINCIPLES
                </p>
                <ul className="space-y-2">
                  <li>
                    ✓ <span className="font-semibold">Clarity First</span> - Complex
                    systems require crystal-clear thinking
                  </li>
                  <li>
                    ✓ <span className="font-semibold">Evidence Over Opinion</span> - Let
                    metrics guide decisions
                  </li>
                  <li>
                    ✓ <span className="font-semibold">User-Centric Security</span> - Security
                    that doesn't burden users fails
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Interested in collaborating or want to discuss security architecture?
            </p>
            <a href="#contact" className="btn-primary inline-block">
              Get in Touch →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
