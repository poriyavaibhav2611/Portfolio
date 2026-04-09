import { Container } from "../ui/Container";
import { profile } from "../../data/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/40 py-6">
      <Container className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-[var(--color-muted)]">{`© ${new Date().getFullYear()} ${profile.name}. All rights reserved.`}</p>

        <div className="flex items-center gap-4 text-[var(--color-muted)]">
          <a href="#home" className="transition hover:text-[var(--color-heading)]">
            Back to top
          </a>
          <span className="h-4 w-px bg-[var(--color-border)]" />
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[var(--color-heading)]"
          >
            Built with Next.js
          </a>
        </div>
      </Container>
    </footer>
  );
}