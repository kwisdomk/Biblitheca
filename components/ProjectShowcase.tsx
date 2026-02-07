export default function ProjectShowcase({ project }) {
  const iconMap = {
    "01": "🏥",
    "02": "🧠",
    "03": "🔒"
  };

  return (
    <div className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{iconMap[project.id] || "⚙️"}</span>
          <span className="text-sm font-bold text-cyan-400">{project.id}</span>
        </div>
        <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-200 transition">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mt-1">{project.tagline}</p>
      </div>

      {/* Content */}
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase mb-1">Problem</p>
          <p className="text-sm text-gray-300">{project.problem}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase mb-1">Solution</p>
          <p className="text-sm text-gray-300">{project.solution}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase mb-1">Result</p>
          <p className="text-sm text-cyan-300">{project.result}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase mb-1">Technical Hurdle</p>
          <p className="text-sm text-gray-300">{project.technicalHurdle}</p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, idx) => (
          <span key={idx} className="px-3 py-1 text-xs font-mono bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-cyan-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
