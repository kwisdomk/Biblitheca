"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileDown } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("wisdom@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleResumeDownload = () => {
    // Track download (you can integrate with Vercel Analytics)
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Wisdom_Kinoti_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Log to analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "resume_download", {
        timestamp: new Date().toISOString(),
      });
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gray-900 border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-4 text-white">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Ready to discuss AI security, system architecture, or opportunities?
          </p>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Email */}
            <motion.button
              onClick={handleEmailCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 hover:bg-blue-700 p-6 rounded-lg transition group"
            >
              <Mail className="w-8 h-8 mx-auto mb-2 text-white" />
              <p className="text-sm text-gray-200">wisdom@example.com</p>
              <p className="text-xs text-gray-300 mt-1">
                {copiedEmail ? "✓ Copied" : "Click to copy"}
              </p>
            </motion.button>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/wisdomkinoti"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 p-6 rounded-lg transition"
            >
              <Linkedin className="w-8 h-8 mx-auto mb-2 text-white" />
              <p className="text-sm text-gray-200">LinkedIn</p>
              <p className="text-xs text-gray-300 mt-1">/wisdomkinoti</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/wisdomkinoti"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg transition border border-gray-700"
            >
              <Github className="w-8 h-8 mx-auto mb-2 text-white" />
              <p className="text-sm text-gray-200">GitHub</p>
              <p className="text-xs text-gray-300 mt-1">/wisdomkinoti</p>
            </a>

            {/* Resume Download */}
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-green-600 hover:bg-green-700 p-6 rounded-lg transition"
            >
              <FileDown className="w-8 h-8 mx-auto mb-2 text-white" />
              <p className="text-sm text-gray-200">Resume</p>
              <p className="text-xs text-gray-300 mt-1">Download PDF</p>
            </motion.button>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Wisdom Kinoti. Built with Next.js 15 & Tailwind CSS.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
