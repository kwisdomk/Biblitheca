"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [systemStats, setSystemStats] = useState({
    cpu: 0,
    ram: 0,
    net: 0,
  });

  const terminalLines = [
    "> Booting Athena Interface...",
    "> Loading IBM Cybersecurity Modules... ✓",
    "> Connecting to HPI Network... ✓",
    "> System Ready.",
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let index = 0;
    let charIndex = 0;

    const typeChar = () => {
      if (index < terminalLines.length) {
        if (charIndex < terminalLines[index].length) {
          setDisplayText((prev) => prev + terminalLines[index][charIndex]);
          charIndex++;
          timeout = setTimeout(typeChar, 30);
        } else {
          setDisplayText((prev) => prev + "\n");
          index++;
          charIndex = 0;
          timeout = setTimeout(typeChar, 200);
        }
      }
    };

    timeout = setTimeout(typeChar, 500);

    return () => clearTimeout(timeout);
  }, [terminalLines]);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStats({
        cpu: Math.floor(Math.random() * 30) + 60,
        ram: Math.floor(Math.random() * 20) + 40,
        net: Math.floor(Math.random() * 25) + 70,
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const ProgressBar = ({ value }: { value: number }) => (
    <div className="w-24 bg-gray-700 h-1 rounded-full overflow-hidden inline-block">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.5 }}
        className="h-full bg-green-500"
      />
    </div>
  );

  return (
    <section className="hero-grid relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 4 }}
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full px-6 relative z-10">
        {/* Left: Name & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-6xl font-bold mb-4 text-white">Wisdom Kinoti</h1>
          <h2 className="text-3xl text-blue-500 mb-8 font-light">
            Architect of Agentic AI Systems
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            IBM Cybersecurity Specialist | Security Engineer | System Architect
          </p>

          <div className="mt-8 space-y-3 text-sm text-gray-400">
            <p>📍 Thika, Kenya | UTC+3</p>
            <p>💻 HP Victus 15 (i5-13420H, RTX 3050)</p>
            <p>⚙️ 8GB RAM Engineering Workstation</p>
          </div>
        </motion.div>

        {/* Right: Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-900 border border-green-500 rounded p-6 font-mono text-sm h-fit backdrop-blur-sm bg-opacity-80"
        >
          <div className="text-green-500 whitespace-pre-wrap mb-4 text-xs">
            {displayText}
            {cursorVisible && <span className="terminal-cursor">▌</span>}
          </div>

          <div className="mt-8 space-y-3 text-gray-400 text-xs">
            <div className="flex justify-between items-center">
              <span>CPU:</span>
              <div className="flex items-center gap-2">
                <ProgressBar value={systemStats.cpu} />
                <span className="w-8 text-right text-green-500">
                  {systemStats.cpu}%
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>RAM:</span>
              <div className="flex items-center gap-2">
                <ProgressBar value={systemStats.ram} />
                <span className="w-8 text-right text-green-500">
                  {systemStats.ram}%
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>NET:</span>
              <div className="flex items-center gap-2">
                <ProgressBar value={systemStats.net} />
                <span className="w-8 text-right text-green-500">
                  {systemStats.net}%
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-green-500 text-xs text-gray-500">
            <p className="text-green-600 mb-2">{">"} Type 'help' for commands</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
