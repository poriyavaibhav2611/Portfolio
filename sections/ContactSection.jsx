"use client";

import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { profile } from "../data/site";
import { Mail, ArrowRight } from "lucide-react";

const LinkedinIcon = ({ size, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-36 relative z-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-[2.5rem] p-8 md:p-16 overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)] shadow-2xl"
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-[var(--color-surface)] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute -inset-[100%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-bg)_0%,var(--color-accent)_50%,var(--color-bg)_100%)] opacity-20 blur-2xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-heading)] mb-6 tracking-tight">
                Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]">extraordinary?</span>
              </h2>
              <p className="text-lg text-[var(--color-muted)] font-medium leading-relaxed">
                If you want a polished portfolio, landing page, or frontend for your product, I can help you ship quickly with production quality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${profile.email}`}
                className="group/btn whitespace-nowrap flex items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-8 py-4 text-sm font-bold text-[var(--color-accent-contrast)] shadow-[0_10px_30px_var(--color-cta-shadow)] transition hover:bg-[var(--color-accent-2)]"
              >
                <Mail size={18} />
                Send an Email
                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex whitespace-nowrap items-center justify-center gap-3 rounded-full border border-[var(--color-border-strong)] bg-transparent px-8 py-4 text-sm font-bold text-[var(--color-heading)] transition hover:bg-[var(--color-panel)] hover:border-[var(--color-accent)]/50"
              >
                <LinkedinIcon size={18} className="text-[#0a66c2] group-hover:text-[#0a66c2]" />
                LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}