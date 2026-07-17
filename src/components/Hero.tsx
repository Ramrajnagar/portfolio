"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [ready, setReady] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      data-section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#fafafa" }}
    >
      {/* Floating accent shapes — Delassus-style decorative blobs */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[15%] right-[10%] w-[320px] h-[320px] rounded-full opacity-[0.12]"
        animate={ready ? { scale: [1, 1.08, 1], rotate: [0, 3, 0] } : {}}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, #ff7128 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-[20%] left-[8%] w-[240px] h-[240px] rounded-full opacity-[0.08]"
        animate={ready ? { scale: [1, 1.12, 1], rotate: [0, -5, 0] } : {}}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, #e7524c 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-[60%] right-[25%] w-[180px] h-[180px] rounded-full opacity-[0.10]"
        animate={ready ? { scale: [1, 1.06, 1] } : {}}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, #ffd200 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Hero content */}
      <motion.div style={{ opacity, scale }} className="relative z-10 text-center px-6 max-w-[900px]">
        {/* Small label like Delassus */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="text-[0.75rem] tracking-[0.3em] uppercase mb-8"
          style={{ color: "#757575" }}
        >
          Developer & Builder
        </motion.p>

        {/* Main heading — Delassus uses enormous type */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.86, 0, 0.07, 1] }}
          className="text-[clamp(3.5rem,11vw,9rem)] leading-[0.92] font-[700] tracking-[-0.04em]"
          style={{ color: "#1a1a1a" }}
        >
          Ramraj
          <br />
          Nagar
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 text-[clamp(0.875rem,2vw,1.125rem)] leading-relaxed max-w-[500px] mx-auto"
          style={{ color: "#757575" }}
        >
          Building digital experiences that people actually enjoy using.
        </motion.p>

        {/* CTA — Delassus-style pill button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.23, 1, 0.32, 1] }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-[0.875rem] font-[500] transition-all duration-[0.8s]"
            style={{
              background: "#ff7128",
              color: "#fff",
              boxShadow: "rgba(140, 49, 4, 0.15) 0px 4px 24px",
            }}
          >
            See my work
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12"
          style={{ background: "#ccc" }}
        />
      </motion.div>
    </section>
  );
}
