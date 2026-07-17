"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "3+", label: "Projects Shipped" },
    { number: "2", label: "Full-Stack Apps" },
    { number: "1", label: "Startup MVP" },
    { number: "∞", label: "Curiosity" },
  ];

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
          className="text-[0.75rem] tracking-[0.3em] uppercase mb-16"
          style={{ color: "#757575" }}
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 md:gap-24 items-start">
          {/* Left — Bio */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.86, 0, 0.07, 1],
              }}
              className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-[500] tracking-[-0.02em]"
              style={{ color: "#2f2f2f" }}
            >
              I build things
              <br />
              that work.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="mt-8 text-[clamp(0.875rem,1.5vw,1.0625rem)] leading-[1.8] max-w-[480px]"
              style={{ color: "#757575" }}
            >
              Full-stack developer focused on building complete products — from
              database design to pixel-perfect UIs. I care about craft, clean
              code, and creating experiences that feel intentional.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="mt-4 text-[clamp(0.875rem,1.5vw,1.0625rem)] leading-[1.8] max-w-[480px]"
              style={{ color: "#757575" }}
            >
              Currently building tools for developers and exploring the
              intersection of AI and real-world products.
            </motion.p>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-8 mt-4 md:mt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="p-6 rounded-2xl"
                style={{
                  background: i % 2 === 0 ? "#fff" : "transparent",
                }}
              >
                <div
                  className="text-[2.5rem] font-[500] leading-none"
                  style={{ color: "#2f2f2f" }}
                >
                  {stat.number}
                </div>
                <div
                  className="mt-3 text-[0.8125rem]"
                  style={{ color: "#757575" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
