"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Rverity",
    subtitle: "Digital Memory Platform",
    description: "A developer-first digital memory platform with AI-powered knowledge graphs. Captures context from every tool you use and connects it into a queryable system.",
    tags: ["Next.js", "Supabase", "AI", "TypeScript"],
    color: "#00A3FF",
    year: "2026",
  },
  {
    title: "LEDGERA",
    subtitle: "Supply Chain OS",
    description: "A decentralized operating system for autonomous supply chains. Deterministic state machine for global trade execution with zero-trust architecture.",
    tags: ["Next.js", "Three.js", "Prisma", "MapLibre"],
    color: "#22d3ee",
    year: "2026",
  },
  {
    title: "IntelliTrade",
    subtitle: "Trading Intelligence",
    description: "Algorithmic trading platform with real-time market data, strategy backtesting, and automated execution engine.",
    tags: ["Python", "React", "WebSocket", "PostgreSQL"],
    color: "#c8a97e",
    year: "2025",
  },
  {
    title: "CodeGraph",
    subtitle: "Code Intelligence",
    description: "Static analysis tool that maps codebases into knowledge graphs. Understand dependencies, impact analysis, and code evolution.",
    tags: ["TypeScript", "AST", "Graph DB", "CLI"],
    color: "#a78bfa",
    year: "2025",
  },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-32 md:py-40 px-6 md:px-12 border-t border-white/[0.06]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] text-[#c8a97e] tracking-[0.2em] uppercase font-medium block mb-6"
          >
            Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-[#f5f0e8]"
          >
            Things I&apos;ve built
          </motion.h2>
        </div>

        {/* Projects list */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <ProjectRow key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group border-t border-white/[0.06] py-10 md:py-14 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        {/* Number */}
        <div className="text-[11px] text-[#555] font-[family-name:var(--font-mono)] tracking-wider shrink-0 w-8">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Title + subtitle */}
        <div className="flex-1">
          <div className="flex items-baseline gap-4 mb-2">
            <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light text-[#f5f0e8] group-hover:text-[#c8a97e] transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-[11px] text-[#555] font-[family-name:var(--font-mono)]">{project.year}</span>
          </div>
          <p className="text-[13px] text-[#8a8a8a]">{project.subtitle}</p>
        </div>

        {/* Description (hidden on mobile) */}
        <div className="hidden lg:block flex-[1.5]">
          <p className="text-[13px] text-[#666] leading-relaxed">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 shrink-0">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] tracking-wider uppercase border border-white/[0.06] rounded-full text-[#666] group-hover:border-[#c8a97e]/20 group-hover:text-[#8a8a8a] transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div className="shrink-0 hidden md:flex">
          <div className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center group-hover:border-[#c8a97e]/30 group-hover:bg-[#c8a97e]/10 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-[#555] group-hover:text-[#c8a97e] transition-colors" />
          </div>
        </div>
      </div>

      {/* Mobile description */}
      <p className="lg:hidden text-[13px] text-[#666] leading-relaxed mt-4 ml-12">
        {project.description}
      </p>
    </motion.div>
  );
}
