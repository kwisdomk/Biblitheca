"use client";

import { useState } from "react";

export default function FloatingDock() {
  const dockItems = [
    { icon: "🤖", label: "AI", color: "from-cyan-400 to-blue-500" },
    { icon: "🔒", label: "Security", color: "from-purple-400 to-pink-500" },
    { icon: "⚙️", label: "Systems", color: "from-orange-400 to-red-500" },
    { icon: "📊", label: "Data", color: "from-green-400 to-emerald-500" }
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-full px-8 py-4 flex gap-8">
        {dockItems.map((item, idx) => (
          <button
            key={idx}
            className="relative group"
            title={item.label}
          >
            <div className={`text-2xl transition-transform group-hover:scale-125`}>
              {item.icon}
            </div>
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
