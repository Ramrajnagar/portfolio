"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Built" },
  { value: "5", label: "Open Source Repos" },
  { value: "100%", label: "Commitment" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: label + heading */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[11px] text-[#c8a97e] tracking-[0.2em] uppercase font-medium block mb-6"
            >
              About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] text-[#f5f0e8]"
            >
              Crafting software
              <br />
              with <span className="text-[#c8a97e]">intention</span>
            </motion.h2>
          </div>

          {/* Right: bio text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] leading-[1.8] text-[#8a8a8a] mb-8"
            >
              I&apos;m Ramraj Nagar, a developer and builder based in India. I work across the stack — from
              designing interfaces to architecting backend systems. My focus is on building products that
              are fast, reliable, and thoughtfully designed.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[15px] leading-[1.8] text-[#8a8a8a] mb-10"
            >
              I believe in clean architecture, honest engineering, and building things that last.
              Currently focused on AI-powered tools, decentralized systems, and developer experience.
            </motion.p>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="border-t border-white/[0.06] pt-4">
                  <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light text-[#f5f0e8] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[#555] tracking-[0.15em] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
