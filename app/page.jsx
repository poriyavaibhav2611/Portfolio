import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { ContactSection } from "../sections/ContactSection";
import { HeroSection } from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";
import { AchievementsSection } from "../sections/AchievementsSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { ThreeBackground } from "../components/ui/ThreeBackground";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)]">
      <ThreeBackground />
      <div className="page-glow-top pointer-events-none absolute inset-x-0 top-[-16rem] h-[30rem] z-0" />
      <div className="page-glow-bottom pointer-events-none absolute inset-x-0 bottom-0 h-[24rem] z-0" />

      <Navbar />
      <main className="flex-1 relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


