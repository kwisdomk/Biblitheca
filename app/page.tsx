import HeroSection from "@/components/HeroSection";
import ProjectShowroom from "@/components/ProjectShowroom";
import SkillsRadar from "@/components/SkillsRadar";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CertificationWall from "@/components/CertificationWall";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import TerminalConsole from "@/components/TerminalConsole";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <ProjectShowroom />
      <SkillsRadar />
      <ExperienceTimeline />
      <CertificationWall />
      <PhilosophySection />
      <ContactSection />
      <TerminalConsole />
    </main>
  );
}
