"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { achievements } from "../data/site";
import { Award } from "lucide-react";

export function AchievementsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="achievements" className="py-24 md:py-36 relative z-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg-glow-a)] to-transparent opacity-20 pointer-events-none" />
      
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="Proven impact and client satisfaction."
          description="Beyond the code, I focus on delivering real business value through performance optimization and conversion-driven design."
        />

        <motion.div style={{ scale, opacity }} className="mt-16 grid gap-6 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-panel)]/50 p-8 text-center backdrop-blur-xl hover:border-[var(--color-accent)]/50 transition-colors"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-[var(--color-accent)]/20 to-purple-600/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 rounded-2xl bg-[var(--color-surface)]/80 p-4 text-[var(--color-accent)] shadow-inner border border-[var(--color-border)]/50">
                  <Award size={32} />
                </div>
                
                <h3 className="text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-heading)] to-[var(--color-muted)] mb-2">
                  {achievement.metric}
                </h3>
                
                <p className="text-lg font-bold text-[var(--color-accent)] uppercase tracking-widest mb-3">
                  {achievement.label}
                </p>
                
                <p className="text-sm text-[var(--color-muted)] font-medium leading-relaxed max-w-[200px]">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
