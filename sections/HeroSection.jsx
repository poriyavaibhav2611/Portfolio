"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Container } from "../components/ui/Container";
import { highlights, profile } from "../data/site";
import { ArrowRight, Code2 } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Ambient mouse tracking glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} id="home" className="relative overflow-hidden pt-36 pb-24 md:py-36 min-h-[95vh] flex items-center">
      {/* Ambient background glow tracking mouse */}
      <motion.div
        style={{ left: springX, top: springY, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none fixed z-0 h-[600px] w-[600px] rounded-full bg-[var(--color-accent)]/10 blur-[100px]"
      />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay z-0" />
      <div className="absolute inset-0 bg-grid-[var(--color-heading)]/[0.02] bg-[size:64px_64px] pointer-events-none z-0" />

      <motion.div style={{ y: yText, opacity, scale }} className="w-full relative z-10">
        <Container className="relative grid items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-heading)] shadow-[0_0_15px_rgba(79,111,211,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
                </span>
                Available for freelance work
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] flex items-center gap-2"
              >
                <Code2 size={16} /> {profile.role} • {profile.location}
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl font-bold leading-[1.1] text-balance text-[var(--color-heading)] md:text-7xl lg:text-[5rem] tracking-tight"
              >
                I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]">modern web applications.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-xl text-lg leading-relaxed text-[var(--color-muted)] md:text-xl font-medium"
              >
                {profile.shortBio}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="#projects"
                className="group relative flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 text-sm font-bold text-[var(--color-accent-contrast)] shadow-[0_10px_30px_var(--color-cta-shadow)] transition-all hover:scale-[1.05] hover:bg-[var(--color-accent-2)] hover:shadow-[0_15px_40px_var(--color-cta-shadow)]"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[var(--color-border-strong)] bg-transparent px-8 py-4 text-sm font-bold text-[var(--color-heading)] transition-all hover:bg-[var(--color-panel)] hover:border-[var(--color-accent)]/50"
              >
                Let&apos;s Connect
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="relative perspective-[1000px]"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] rounded-[2rem] blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-panel)]/80 p-8 shadow-2xl backdrop-blur-xl transform transition-transform hover:rotate-y-[-5deg] hover:rotate-x-[5deg] duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Code2 size={100} />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-6">Key Highlights</p>
              <ul className="space-y-4 relative z-10">
                {highlights.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                    className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)]/50 bg-[var(--color-surface)]/50 px-5 py-4 text-sm font-medium text-[var(--color-heading)] shadow-sm backdrop-blur-sm transition-colors hover:bg-[var(--color-surface)]"
                  >
                    <div className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}