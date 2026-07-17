"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/Ramrajnagar" },
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 md:py-40 px-6 md:px-12 border-t border-white/[0.06]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] text-[#c8a97e] tracking-[0.2em] uppercase font-medium block mb-6"
          >
            Get in Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] text-[#f5f0e8] mb-8"
          >
            Let&apos;s build
            <br />
            something <span className="text-[#c8a97e]">together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] text-[#8a8a8a] leading-relaxed mb-12 max-w-lg"
          >
            Have a project in mind, want to collaborate, or just want to say hello?
            I&apos;m always open to interesting conversations and opportunities.
          </motion.p>

          {/* Email CTA */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="mailto:hello@ramraj.dev"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#f5f0e8] text-[#0a0a0a] rounded-full text-sm font-medium hover:bg-[#c8a97e] transition-all duration-300 mb-16"
          >
            hello@ramraj.dev
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-white/[0.06] hover:border-[#c8a97e]/20 transition-colors"
              >
                <span className="text-[15px] text-[#8a8a8a] group-hover:text-[#f5f0e8] transition-colors">
                  {link.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#555] group-hover:text-[#c8a97e] transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
