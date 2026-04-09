import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { profile } from "../data/site";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <Container>
        <div className="contact-panel rounded-3xl border border-[var(--color-border)] p-8 md:p-12">
          <SectionHeading
            eyebrow="Contact"
            title="Have a project in mind? Let&apos;s build it the right way."
            description="If you want a polished portfolio, landing page, or frontend for your product, I can help you ship quickly with production quality."
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-contrast)] shadow-[0_10px_24px_var(--color-cta-shadow)] transition hover:bg-[var(--color-accent-2)]"
            >
              {profile.email}
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-heading)] transition hover:border-[var(--color-border-strong)]"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}