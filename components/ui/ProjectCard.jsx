export function ProjectCard({ project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-panel)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.24)]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[var(--color-accent)]/12 blur-2xl transition group-hover:bg-[var(--color-accent)]/18" />
      <p className="mb-4 w-fit rounded-full border border-[var(--color-border)] bg-[var(--color-panel-2)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
        Featured Project
      </p>

      <h3 className="text-xl font-semibold leading-snug text-[var(--color-heading)]">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-panel-2)] px-3 py-1 text-xs font-medium text-[var(--color-subtle)]"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-3 text-sm font-semibold">
        <a
          className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-[var(--color-accent-contrast)] transition hover:bg-[var(--color-accent-2)]"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
        <a
          className="inline-flex items-center rounded-full border border-[var(--color-border)] px-4 py-2 text-[var(--color-subtle)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-heading)]"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}