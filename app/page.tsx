"use client";

import { portfolioData } from "@/lib/portfolioData";
import MachineStatus from "@/components/MachineStatus";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsRadar from "@/components/SkillsRadar";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FloatingDock from "@/components/FloatingDock";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
      {/* Mesh Noise Background */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
          </filter>
          <rect width="100%" height="100%" fill="rgba(100,100,150,0.1)" filter="url(#noise)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        
        {/* Hero Header */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
            {portfolioData.hero.name}
          </h1>
          <p className="text-xl text-cyan-300 mb-2">{portfolioData.hero.role}</p>
          <p className="text-gray-400">{portfolioData.hero.subRole}</p>
        </section>

        {/* Machine Status Card */}
        <MachineStatus hero={portfolioData.hero} metrics={portfolioData.systemMetrics} />

        {/* Projects Showcase - Hero Section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8 flex items-center gap-2">
            <span className="text-cyan-500">◆</span> PROJECT SHOWROOM
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project) => (
              <ProjectShowcase key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Technical Arsenal - Skills Visualization */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8 flex items-center gap-2">
            <span className="text-cyan-500">◆</span> TECHNICAL ARSENAL
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SkillsRadar skills={portfolioData.skills} />
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-cyan-300 mb-6">CORE STACK</h3>
              <div className="space-y-3">
                {portfolioData.skills.coreStack.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8 flex items-center gap-2">
            <span className="text-cyan-500">◆</span> EXPERIENCE & EDUCATION
          </h2>
          <ExperienceTimeline experience={portfolioData.experience} />
        </section>

        {/* Philosophy Section */}
        <section className="my-16 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">PHILOSOPHY</h2>
          <p className="text-gray-300 leading-relaxed italic text-lg">
            "{portfolioData.philosophy.statement}"
          </p>
        </section>

        {/* Contact Section */}
        <section className="my-16 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6">LET'S CONNECT</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={`mailto:${portfolioData.contact.email}`} className="px-6 py-3 backdrop-blur-sm bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition">
              Email
            </a>
            <a href={`https://${portfolioData.contact.github}`} target="_blank" className="px-6 py-3 backdrop-blur-sm bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition">
              GitHub
            </a>
            <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" className="px-6 py-3 backdrop-blur-sm bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition">
              LinkedIn
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-white/10 text-gray-500 text-sm">
          <p>{portfolioData.footer.copyright}</p>
        </footer>
      </div>

      {/* Floating Dock Navigation */}
      <FloatingDock />
    </div>
  );
}
