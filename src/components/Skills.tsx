"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "Supabase", "Prisma"],
  },
  {
    category: "Tools & Systems",
    items: ["Three.js", "MapLibre", "Docker", "Git", "CI/CD"],
  },
  {
    category: "Interests",
    items: ["AI/ML", "Decentralized Systems", "Developer Experience", "Open Source"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-40 px-6 md:px-12 border-t border-white/[0.06]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left heading */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[11px] text-[#c8a97e] tracking-[0.2em] uppercase font-medium block mb-6"
            >
              Capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] text-[#f5f0e8]"
            >
              Tools of
              <br />
              <span className="text-[#c8a97e]">the trade</span>
            </motion.h2>
          </div>

          {/* Right: skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                <h3 className="text-[11px] text-[#555] tracking-[0.2em] uppercase font-medium mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-[15px] text-[#8a8a8a] hover:text-[#f5f0e8] transition-colors duration-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
