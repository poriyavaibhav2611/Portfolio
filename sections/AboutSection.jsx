import { SectionHeading } from "../components/ui/SectionHeading";
import { Container } from "../components/ui/Container";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="I build frontend systems that stay clean as products grow."
          description="From landing pages to dashboard interfaces, I focus on reusable architecture, motion with purpose, and responsive behavior that feels natural on every screen size."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Component-driven architecture",
            "Readable, scalable codebase setup",
            "SEO and performance best practices",
          ].map((item) => (
            <article key={item} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel)] p-6 text-sm text-[var(--color-subtle)]">
              {item}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}