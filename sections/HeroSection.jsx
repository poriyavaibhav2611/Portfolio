import { Container } from "../components/ui/Container";
import { highlights, profile } from "../data/site";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-28">
      <Container className="relative grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-panel)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-subtle)]">
            Available for freelance work
          </span>

          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {profile.role} • {profile.location}
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-balance text-[var(--color-heading)] md:text-6xl">
              I design and build smooth, fast, and modern web experiences.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              {profile.shortBio}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-contrast)] shadow-[0_10px_24px_var(--color-cta-shadow)] transition hover:scale-[1.02] hover:bg-[var(--color-accent-2)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-heading)] transition hover:border-[var(--color-border-strong)]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-panel)] p-6 shadow-2xl backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">Highlights</p>
          <ul className="mt-4 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] px-4 py-3 text-sm text-[var(--color-subtle)]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}