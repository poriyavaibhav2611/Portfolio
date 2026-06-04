"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>;

export function ProjectCard({ project, index = 0 }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-[1200px]"
    >
      <motion.article
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.18)"
        }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-panel)] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-[var(--color-accent)]/50"
      >
        <motion.div
          style={{ x: shadowX, y: shadowY }}
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--color-accent)]/20 blur-3xl transition duration-500 group-hover:bg-[var(--color-accent)]/30 group-hover:blur-2xl"
        />
        
        <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
          <p className="mb-5 w-fit rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] shadow-[0_0_10px_rgba(79,111,211,0.1)]">
            Featured
          </p>

          <h3 className="text-2xl font-bold leading-tight text-[var(--color-heading)] mb-4 group-hover:text-[var(--color-accent-contrast)] transition-colors">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-base leading-relaxed text-[var(--color-muted)] font-medium">
            {project.description}
          </p>
        </div>

        <ul style={{ transform: "translateZ(20px)" }} className="mt-8 flex flex-nowrap overflow-x-auto pb-2 gap-2 relative z-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {project.stack.map((item) => (
            <li
              key={item}
              className="flex-shrink-0 whitespace-nowrap rounded-full border border-[var(--color-border)]/50 bg-[var(--color-surface)]/50 px-4 py-1.5 text-[13px] font-semibold text-[var(--color-subtle)] shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        <div style={{ transform: "translateZ(40px)" }} className="mt-8 flex items-center gap-4 text-sm font-bold relative z-10">
          <a
            className="flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-[var(--color-accent-contrast)] shadow-lg transition-all hover:scale-105 hover:bg-[var(--color-accent-2)]"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a
            className="flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-5 py-2.5 text-[var(--color-subtle)] transition-all hover:scale-105 hover:border-[var(--color-accent)] hover:text-[var(--color-heading)] bg-[var(--color-surface)]/30"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={16} /> Source
          </a>
        </div>
      </motion.article>
    </motion.div>
  );
}