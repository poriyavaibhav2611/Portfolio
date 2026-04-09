import { navItems, profile } from "../../data/site";
import { Container } from "../ui/Container";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-nav-bg)] backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#home" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-panel)] text-sm font-bold text-[var(--color-accent)] transition group-hover:border-[var(--color-accent)]/70">
            {profile.name.slice(0, 1)}
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-wide text-[var(--color-heading)]">
              {profile.name}
            </span>
            <span className="hidden text-[11px] font-medium tracking-[0.12em] text-[var(--color-muted)] md:block">
              FRONTEND PORTFOLIO
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-heading)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full border border-[var(--color-accent)]/60 px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-contrast)]"
          >
            Hire Me
          </a>
        </div>
      </Container>
    </header>
  );
}