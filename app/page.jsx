import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { HeroSection } from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="page-glow-top pointer-events-none absolute inset-x-0 top-[-16rem] h-[30rem]" />
      <div className="page-glow-bottom pointer-events-none absolute inset-x-0 bottom-0 h-[24rem]" />

      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


