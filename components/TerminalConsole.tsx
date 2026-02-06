"use client";

import { useState, useRef, useEffect } from "react";

const COMMANDS = {
  help: "Available commands: projects | skills | contact | clear | about",
  projects: "HAKI • Aelpher • Perimeter Lab → Scroll down to see projects",
  skills: "Security (100%) • Frontend (80%) • Backend (70%) • AI/ML (60%) • Cloud (40%)",
  contact: "Email: wisdom@example.com | LinkedIn: /in/wisdomkinoti | GitHub: /wisdomkinoti",
  about: "2nd year CS student at Zetech University | IBM Cybersecurity Bootcamp Specialist",
  clear: "CLEAR",
};

export default function TerminalConsole() {
  const [history, setHistory] = useState<{ type: "input" | "output"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.toLowerCase().trim();
    setHistory((prev) => [...prev, { type: "input", text: cmd }]);

    if (trimmed === "clear") {
      setHistory([]);
    } else if (trimmed in COMMANDS) {
      const response = COMMANDS[trimmed as keyof typeof COMMANDS];
      setHistory((prev) => [...prev, { type: "output", text: response }]);
    } else if (trimmed === "") {
      // Do nothing
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "output", text: `Command not found: ${trimmed}. Type 'help'` },
      ]);
    }

    setInput("");
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-mono text-sm transition z-40"
      >
        {isOpen ? "Close" : `${">"}  Terminal`}
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 bg-gray-900 border-2 border-green-500 rounded-lg overflow-hidden shadow-2xl z-50">
          <div className="bg-gray-800 px-4 py-2 border-b border-green-500 flex justify-between items-center">
            <span className="font-mono text-xs text-green-500">{`$`} athena</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          <div
            ref={terminalRef}
            className="h-64 overflow-y-auto bg-black p-4 space-y-1 font-mono text-xs text-green-500"
          >
            {history.length === 0 && (
              <div className="text-gray-500">
                <p>{`>`} Welcome to Athena Terminal</p>
                <p>{`>`} Type 'help' to get started</p>
              </div>
            )}
            {history.map((line, idx) => (
              <div key={idx}>
                {line.type === "input" ? (
                  <span>
                    <span className="text-blue-400">{`$`} </span>
                    {line.text}
                  </span>
                ) : (
                  <span className="text-gray-300">{line.text}</span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gray-800 px-4 py-3 border-t border-green-500 flex gap-2">
            <span className="text-blue-400 font-mono text-xs">{`$`}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCommand(input);
              }}
              placeholder="Type command..."
              className="flex-1 bg-transparent text-green-500 font-mono text-xs outline-none"
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
}
