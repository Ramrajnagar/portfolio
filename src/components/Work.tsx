"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Rverity",
    description: "A digital memory platform that lets AI remember your life context across sessions.",
    color: "#ff7128",
    tag: "Full-Stack SaaS",
    link: "#",
    features: ["Memory graphs", "Multi-source ingestion", "RAG-powered search"],
  },
  {
    title: "LEDGERA",
    description: "Autonomous supply chain control room with AI agents for real-time logistics decisions.",
    color: "#22d3ee",
    tag: "AI/ML Platform",
    link: "#",
    features: ["Digital twins", "Agent orchestration", "Predictive analytics"],
  },
  {
    title: "IntelliTrade",
    description: "Algorithmic trading platform with machine learning models for market prediction.",
    color: "#e7524c",
    tag: "Fintech",
    link: "#",
    features: ["ML models", "Real-time data", "Risk management"],
  },
  {
    title: "CodeGraph",
    description: "Visual codebase exploration tool that maps dependencies as interactive graphs.",
    color: "#ffd200",
    tag: "Dev Tools",
    link: "#",
    features: ["AST parsing", "Interactive graph", "Dependency analysis"],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Delassus-style floating: each card floats at different speeds
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [80 * (index % 2 === 0 ? 1 : -1), -80 * (index % 2 === 0 ? 1 : -1)]
  );
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -4 : 4, 0, index % 2 === 0 ? 4 : -4]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, perspective: 1000 }}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.86, 0, 0.07, 1],
      }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative rounded-3xl p-8 md:p-12 cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.86, 0, 0.07, 1] }}
      >
        {/* Background color blob — Delassus-style product illustrations */}
        <div
          className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full opacity-[0.12] blur-3xl transition-all duration-1000 group-hover:opacity-[0.22] group-hover:scale-110"
          style={{ background: project.color }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Tag */}
          <div
            className="inline-block px-3 py-1 rounded-full text-[0.6875rem] font-[500] tracking-[0.05em] uppercase mb-6"
            style={{
              background: `${project.color}18`,
              color: project.color,
            }}
          >
            {project.tag}
          </div>

          {/* Title */}
          <h3
            className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-[500] leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ color: "#2f2f2f" }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="text-[clamp(0.875rem,1.3vw,1rem)] leading-[1.7] max-w-[440px] mb-8"
            style={{ color: "#757575" }}
          >
            {project.description}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.features.map((f) => (
              <span
                key={f}
                className="px-3 py-1.5 rounded-full text-[0.75rem] font-[500]"
                style={{ background: "#f6f6f6", color: "#2f2f2f" }}
              >
                {f}
              </span>
            ))}
          </div>

          {/* Arrow — Delassus external link style */}
          <div
            className="inline-flex items-center gap-2 text-[0.8125rem] font-[500] group-hover:gap-3 transition-all duration-500"
            style={{ color: project.color }}
          >
            View project
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>

        {/* Border on hover */}
        <div
          className="absolute inset-0 rounded-3xl border transition-all duration-700 group-hover:border-opacity-20"
          style={{ borderColor: `${project.color}00` }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      data-section
      ref={ref}
      id="work"
      className="relative py-32 md:py-48 px-6"
      style={{ background: "#fff" }}
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
          Selected Work
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
          className="text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-[500] tracking-[-0.02em] mb-20 max-w-[600px]"
          style={{ color: "#2f2f2f" }}
        >
          Things I&apos;ve
          <br />
          built.
        </motion.h2>

        {/* Project cards — Delassus floating layout */}
        <div className="space-y-12 md:space-y-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
