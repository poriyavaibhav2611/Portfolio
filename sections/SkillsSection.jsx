"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { skills } from "../data/site";

export function SkillsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <section ref={containerRef} id="skills" className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack I use in real client and product work."
          description="I keep the stack practical: tools that ship fast, scale cleanly, and remain easy to maintain in teams."
        />

        <motion.div style={{ y }} className="mt-16">
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {skills.map((skill) => (
              <motion.li
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: Math.random() * 6 - 3 }}
                className="cursor-pointer rounded-2xl border border-[var(--color-border)]/50 bg-[var(--color-panel)]/80 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-[var(--color-heading)] shadow-lg backdrop-blur-md transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)] hover:shadow-[0_0_20px_var(--color-glow-1)]"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  );
}