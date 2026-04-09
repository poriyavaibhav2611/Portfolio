import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { skills } from "../data/site";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack I use in real client and product work."
          description="I keep the stack practical: tools that ship fast, scale cleanly, and remain easy to maintain in teams."
        />

        <ul className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-panel)] px-4 py-2 text-sm font-medium text-[var(--color-subtle)] transition hover:border-[var(--color-accent)]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}