"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navItems, profile } from "../../data/site";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 150 && latest > previous) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="flex h-14 w-full max-w-5xl items-center justify-between rounded-full border border-[var(--color-border)]/50 bg-[var(--color-panel)]/80 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        {/* Logo Area */}
        <a href="#home" className="group relative flex items-center gap-3 px-2 z-10">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent)] text-xs font-bold text-[var(--color-accent-contrast)] shadow-[0_0_15px_var(--color-glow-1)] transition-transform duration-300 group-hover:scale-110">
            {profile.name.slice(0, 1)}
          </span>
          <span className="hidden md:flex flex-col leading-none">
            <span className="text-sm font-bold tracking-wide text-[var(--color-heading)]">
              {profile.name}
            </span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden items-center md:flex relative z-10">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-5 py-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-heading)]"
            >
              <span className="relative z-10">{item.label}</span>
              {hoveredIndex === index && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 z-0 rounded-full bg-[var(--color-surface)]/80 shadow-sm border border-[var(--color-border)]/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 z-10">
          <ThemeToggle />
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-[var(--color-heading)] px-5 py-2 text-sm font-bold text-[var(--color-bg)] transition-transform hover:scale-105 shadow-md"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-bg)]/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}