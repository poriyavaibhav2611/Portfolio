import { Container } from "../components/ui/Container";
import { ProjectCard } from "../components/ui/ProjectCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { projects } from "../data/site";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-36 relative z-10 bg-[var(--color-bg)]">
      <div className="absolute inset-0 bg-grid-[var(--color-heading)]/[0.02] bg-[size:32px_32px]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work crafted for speed, clarity, and conversion."
          description="Each project is built with production mindset: modular code, clean UI, and strong focus on user experience."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}