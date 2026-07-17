"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import TechLogos from "./TechLogos";
import ProjectLogo from "./ProjectLogo";

const projects = [
  {
    id: "rverity",
    title: "Rverity",
    description:
      "A digital memory platform that lets AI remember your life context across sessions. Ingests from WhatsApp, PDFs, browser history, and more — then lets you search your life with natural language.",
    color: "#ff7128",
    colorLight: "#ff712818",
    tag: "Full-Stack SaaS",
    link: "https://rverityai.vercel.app/",
    githubLink: "https://github.com/Ramrajnagar/Rverity",
    features: ["Memory graphs", "Multi-source ingestion", "RAG-powered search"],
    stats: [
      { label: "Sources", value: "12+" },
      { label: "Latency", value: "<200ms" },
      { label: "Stack", value: "Vector + Graph" },
    ],
    techLogos: ["react", "nextjs", "openai"],
  },
  {
    id: "inkshe",
    title: "InkShe",
    description:
      "Anonymous writing platform for women — a safe, cozy digital sanctuary. Write freely with pen names, beautiful Sakura themes, and a toxic-free community built on trust.",
    color: "#fa7692",
    colorLight: "#fa769218",
    tag: "Community Platform",
    link: "https://ink-she.vercel.app",
    githubLink: "https://github.com/Ramrajnagar/inkShe",
    features: ["Tiptap editor", "Anonymous pen names", "Sakura themes", "Prisma + PostgreSQL"],
    stats: [
      { label: "Themes", value: "5+" },
      { label: "Editor", value: "Tiptap" },
      { label: "Stack", value: "Next.js 16" },
    ],
    techLogos: ["nextjs", "prisma", "postgresql"],
  },
  {
    id: "ledgera",
    title: "LEDGERA",
    description:
      "Autonomous supply chain control room with AI agents for real-time logistics decisions. Digital twins of your entire supply chain, predictive analytics, and autonomous agent orchestration.",
    color: "#22d3ee",
    colorLight: "#22d3ee18",
    tag: "AI/ML Platform",
    link: "https://ledgera-tawny.vercel.app/",
    githubLink: "https://github.com/Ramrajnagar/LEDGERA",
    features: ["Digital twins", "Agent orchestration", "Predictive analytics"],
    stats: [
      { label: "Agents", value: "Autonomous" },
      { label: "Data", value: "Real-time" },
      { label: "Models", value: "LLM + ML" },
    ],
    techLogos: ["react", "nodejs", "python"],
  },
  {
    id: "intellitrade",
    title: "IntelliTrade",
    description:
      "Algorithmic trading platform with machine learning models for market prediction. Backtest strategies, analyze patterns, and execute trades with confidence.",
    color: "#e7524c",
    colorLight: "#e7524c18",
    tag: "Fintech",
    link: "https://intellitrade.live/",
    githubLink: null,
    features: ["ML models", "Real-time data", "Risk management"],
    stats: [
      { label: "Models", value: "5+" },
      { label: "Backtest", value: "Historical" },
      { label: "Latency", value: "Real-time" },
    ],
    techLogos: ["typescript", "python", "nodejs"],
  },
  {
    id: "codegraphcontext",
    title: "CodeGraphContext",
    description:
      "Open source contributor to a 3.9k-star MCP server that indexes codebases into graph databases for AI assistants. Helping bridge the gap between deep code graphs and AI context across 23 programming languages.",
    color: "#a855f7",
    colorLight: "#a855f718",
    tag: "Open Source · 3.9k ★",
    link: "https://github.com/CodeGraphContext/CodeGraphContext",
    githubLink: "https://github.com/CodeGraphContext/CodeGraphContext",
    features: ["MCP Server", "Graph DB indexing", "23 languages", "AI context"],
    stats: [
      { label: "Stars", value: "3.9k" },
      { label: "Forks", value: "779" },
      { label: "Lang", value: "Python" },
    ],
    techLogos: ["python", "typescript", "docker"],
  },
  {
    id: "kmesh",
    title: "Kmesh",
    description:
      "LFX contributor to a Linux Foundation project — high-performance service mesh data plane built on eBPF and programmable kernel. 60% lower forwarding delay, 70% less overhead than Envoy-based sidecars.",
    color: "#3b82f6",
    colorLight: "#3b82f618",
    tag: "LFX · Linux Foundation",
    link: "https://github.com/kmesh-net/kmesh",
    githubLink: "https://github.com/kmesh-net/kmesh",
    features: ["eBPF", "Service mesh", "Kernel-native", "Sidecarless"],
    stats: [
      { label: "Stars", value: "738" },
      { label: "Perf", value: "60%↓" },
      { label: "Stack", value: "Go + C" },
    ],
    techLogos: ["nodejs", "docker", "tailwind"],
  },
];

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.1 + index * 0.12,
        ease: [0.86, 0, 0.07, 1],
      }}
      onClick={() => scrollTo(project.id)}
      className="group relative rounded-[1.5rem] overflow-hidden cursor-pointer"
      style={{ background: project.colorLight }}
    >
      {/* Hover color fill */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: `${project.color}10` }}
      />

      <div className="relative z-10 p-8 md:p-10">
        {/* Big letter — like Delassus product icon */}
        <div className="flex items-start justify-between mb-8">
          <ProjectLogo project={project.id} size={80} />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={project.color}
            strokeWidth="2"
            className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>

        {/* Title */}
        <h3
          className="text-[clamp(1.5rem,3vw,2.25rem)] font-[700] leading-[1.05] tracking-[-0.02em] mb-3"
          style={{ color: "#1a1a1a" }}
        >
          {project.title}
        </h3>

        {/* Tag */}
        <p
          className="text-[0.8125rem] font-[500] mb-6"
          style={{ color: "#757575" }}
        >
          {project.tag}
        </p>

        {/* Tech logos */}
        <TechLogos logos={project.techLogos} color={project.color} size={18} />
      </div>
    </motion.div>
  );
}

function ProjectDetail({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.97]);
  const visualRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -2 : 2, 0, index % 2 === 0 ? 1.5 : -1.5]
  );

  const isReversed = index % 2 !== 0;

  return (
    <section
      data-section
      ref={ref}
      id={project.id}
      className="relative min-h-screen flex items-center py-20 md:py-0"
      style={{ background: index % 2 === 0 ? "#fff" : "#fafafa" }}
    >
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Visual */}
          <motion.div
            style={{
              y: visualY,
              scale: visualScale,
              rotate: visualRotate,
              perspective: 1200,
            }}
            initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.86, 0, 0.07, 1],
            }}
            className={`relative ${isReversed ? "md:order-2" : "md:order-1"}`}
          >
            <div
              className="relative rounded-[2rem] overflow-hidden aspect-[4/3]"
              style={{ background: project.colorLight }}
            >
              {/* Blob */}
              <motion.div
                className="absolute inset-0"
                animate={inView ? { scale: [1, 1.06, 1], rotate: [0, 2, 0] } : {}}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="absolute top-[10%] left-[10%] w-[70%] h-[70%] rounded-full blur-3xl opacity-25"
                  style={{ background: project.color }}
                />
              </motion.div>

              {/* Animated project logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.86, 0, 0.07, 1] }}
                >
                  <ProjectLogo project={project.id} size={200} />
                </motion.div>
              </div>

              {/* Floating tech logos on the visual */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-5 left-5 flex gap-3 px-4 py-2.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                {project.techLogos.map((key) => (
                  <TechLogos key={key} logos={[key]} color={project.color} size={16} />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.86, 0, 0.07, 1],
            }}
            className={`flex flex-col justify-center ${
              isReversed ? "md:order-1" : "md:order-2"
            }`}
          >
            {/* Color dot + tag */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: project.color }}
              />
              <span
                className="text-[0.8125rem] font-[600] tracking-[0.1em] uppercase"
                style={{ color: "#757575" }}
              >
                {project.tag}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-[700] leading-[1.0] tracking-[-0.03em] mb-6"
              style={{ color: "#1a1a1a" }}
            >
              {project.title}
            </h2>

            {/* Description */}
            <p
              className="text-[clamp(0.9375rem,1.4vw,1.125rem)] leading-[1.8] max-w-[480px] mb-8"
              style={{ color: "#555" }}
            >
              {project.description}
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              {project.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <div
                    className="text-[1.25rem] font-[700] leading-none"
                    style={{ color: "#1a1a1a" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="mt-1 text-[0.75rem] font-[500]"
                    style={{ color: "#999" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech logos row */}
            <div className="mb-10">
              <TechLogos
                logos={project.techLogos}
                color={project.color}
                size={22}
              />
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {project.features.map((f, i) => (
                <motion.span
                  key={f}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                  className="px-4 py-2 rounded-full text-[0.8125rem] font-[600]"
                  style={{ background: "#f0f0f0", color: "#1a1a1a" }}
                >
                  {f}
                </motion.span>
              ))}
            </div>

            {/* CTAs — live site + GitHub */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[0.9375rem] font-[700] transition-all duration-500 hover:shadow-lg"
                style={{
                  background: project.color,
                  color: "#fff",
                  boxShadow: `0 4px 24px ${project.color}30`,
                }}
              >
                {project.githubLink && project.githubLink !== project.link
                  ? "View live site"
                  : "View on GitHub"}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.a>

              {project.githubLink && project.githubLink !== project.link && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[0.9375rem] font-[700] transition-all duration-500 hover:shadow-lg border"
                  style={{
                    background: "transparent",
                    color: "#1a1a1a",
                    borderColor: "#ddd",
                  }}
                >
                  GitHub
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Work() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  return (
    <div id="work">
      {/* Section header */}
      <section
        data-section
        ref={headerRef}
        className="relative py-32 md:py-48 px-6"
        style={{ background: "#fafafa" }}
      >
        <div className="max-w-[1300px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-[0.8125rem] tracking-[0.3em] uppercase mb-6"
            style={{ color: "#999" }}
          >
            Selected Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.86, 0, 0.07, 1],
            }}
            className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.0] font-[700] tracking-[-0.03em] mb-6"
            style={{ color: "#1a1a1a" }}
          >
            Things I&apos;ve
            <br />
            built.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="text-[clamp(0.9375rem,1.4vw,1.125rem)] leading-[1.8] max-w-[480px]"
            style={{ color: "#757575" }}
          >
            Click a project to explore it. Each one is a full product I built from
            concept to deployment.
          </motion.p>
        </div>
      </section>

      {/* Delassus-style project cards grid */}
      <section
        data-section
        ref={cardsRef}
        className="relative py-12 md:py-16 px-6"
        style={{ background: "#fafafa" }}
      >
        <div className="max-w-[1300px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={cardsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Individual project detail sections — full viewport */}
      {projects.map((project, i) => (
        <ProjectDetail key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}
