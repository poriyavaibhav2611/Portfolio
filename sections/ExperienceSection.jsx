"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { experience } from "../data/site";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="experience" className="py-24 md:py-36 relative overflow-hidden bg-[var(--color-bg)]">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="My professional journey."
          description="Building and delivering value across different roles and client projects."
        />

        <div className="mt-20 relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-[var(--color-border)] rounded-full -translate-x-1/2" />
          
          {/* Animated Line Fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[27px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent-2)] rounded-full -translate-x-1/2 origin-top shadow-[0_0_15px_var(--color-accent)]"
          />

          <div className="space-y-12 md:space-y-24 relative z-10">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.period} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-[var(--color-panel)] border-4 border-[var(--color-bg)] rounded-full -translate-x-1/2 flex items-center justify-center shadow-lg z-20">
                    <div className="w-10 h-10 bg-[var(--color-surface)] rounded-full flex items-center justify-center border border-[var(--color-border)]">
                      <Briefcase size={18} className="text-[var(--color-accent)]" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:text-left md:pr-16' : 'md:text-right md:pl-16'}`}
                  >
                    <div className="group relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-panel)]/80 p-8 backdrop-blur-md shadow-xl transition-all hover:border-[var(--color-accent)]/50 hover:shadow-2xl">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)]/0 via-[var(--color-accent)]/10 to-[var(--color-accent)]/0 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
                      
                      <div className="relative z-10">
                        <span className="inline-block rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4 border border-[var(--color-accent)]/20">
                          {item.period}
                        </span>
                        <h3 className="text-2xl font-bold text-[var(--color-heading)] mb-1">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-[var(--color-subtle)] uppercase tracking-wider mb-4">
                          {item.company}
                        </p>
                        <p className="text-base text-[var(--color-muted)] leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
