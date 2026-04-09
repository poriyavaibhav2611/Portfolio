export function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="max-w-2xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-balance text-[var(--color-heading)] md:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-[var(--color-muted)] md:text-lg">{description}</p>
    </header>
  );
}