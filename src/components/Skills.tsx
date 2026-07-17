"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    color: "#ff7128",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    color: "#e7524c",
    skills: ["Node.js", "Python", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    title: "AI / ML",
    color: "#ffd200",
    skills: ["OpenAI API", "RAG Systems", "Vector DBs", "LangChain", "Embeddings"],
  },
  {
    title: "Tools",
    color: "#8bd3b9",
    skills: ["Git", "Docker", "Vercel", "Linux", "Figma"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      data-section
      ref={ref}
      className="relative py-32 md:py-48 px-6"
      style={{ background: "#fafafa" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-[0.75rem] tracking-[0.3em] uppercase mb-6"
          style={{ color: "#757575" }}
        >
          Skills
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.86, 0, 0.07, 1],
          }}
          className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.0] font-[700] tracking-[-0.03em] mb-20 max-w-[600px]"
          style={{ color: "#1a1a1a" }}
        >
          What I
          <br />
          work with.
        </motion.h2>

        {/* Skill groups — Delassus-style colored cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative rounded-3xl p-8 md:p-10 overflow-hidden group"
              style={{ background: "#fff" }}
            >
              {/* Color accent blob */}
              <div
                className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full opacity-[0.08] blur-2xl transition-all duration-700 group-hover:opacity-[0.15]"
                style={{ background: group.color }}
              />

              <div className="relative z-10">
                {/* Group title with color dot */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: group.color }}
                  />
                  <h3
                    className="text-[0.8125rem] font-[500] tracking-[0.1em] uppercase"
                    style={{ color: "#2f2f2f" }}
                  >
                    {group.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + i * 0.1 + j * 0.05,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      className="px-4 py-2 rounded-full text-[0.8125rem] font-[500] transition-colors duration-300"
                      style={{
                        background: `${group.color}10`,
                        color: "#2f2f2f",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
