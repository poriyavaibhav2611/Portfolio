import { Container } from "../components/ui/Container";
import { ProjectCard } from "../components/ui/ProjectCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { projects } from "../data/site";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work crafted for speed, clarity, and conversion."
          description="Each project is built with production mindset: modular code, clean UI, and strong focus on user experience."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}