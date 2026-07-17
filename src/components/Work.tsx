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
    title: "InkShe",
    description: "Anonymous writing platform for women — a safe, cozy digital sanctuary with themes, pen names, and a toxic-free community.",
    color: "#fa7692",
    tag: "Community Platform",
    link: "https://ink-she.vercel.app",
    features: ["Tiptap editor", "Anonymous pen names", "Sakura themes", "Prisma + PostgreSQL"],
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
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
        className="group relative rounded-3xl p-10 md:p-14 cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.015, y: -4 }}
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
            className="inline-block px-4 py-1.5 rounded-full text-[0.75rem] font-[700] tracking-[0.08em] uppercase mb-8"
            style={{
              background: `${project.color}18`,
              color: project.color,
            }}
          >
            {project.tag}
          </div>

          {/* Title */}
          <h3
            className="text-[clamp(2rem,4vw,3.25rem)] font-[700] leading-[1.05] tracking-[-0.03em] mb-5"
            style={{ color: "#1a1a1a" }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="text-[clamp(0.9375rem,1.4vw,1.125rem)] leading-[1.7] max-w-[480px] mb-8 font-[400]"
            style={{ color: "#555" }}
          >
            {project.description}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.features.map((f) => (
              <span
                key={f}
                className="px-4 py-2 rounded-full text-[0.8125rem] font-[600]"
                style={{ background: "#f0f0f0", color: "#1a1a1a" }}
              >
                {f}
              </span>
            ))}
          </div>

          {/* Arrow — Delassus external link style */}
          <div
            className="inline-flex items-center gap-2 text-[0.875rem] font-[700] group-hover:gap-3 transition-all duration-500"
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
          className="text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.0] font-[700] tracking-[-0.03em] mb-20 max-w-[600px]"
          style={{ color: "#1a1a1a" }}
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
