"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      data-section
      ref={ref}
      className="relative py-32 md:py-48 px-6"
      style={{ background: "#fff" }}
    >
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-[0.75rem] tracking-[0.3em] uppercase mb-16"
          style={{ color: "#757575" }}
        >
          Get in touch
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.86, 0, 0.07, 1],
          }}
          className="text-[clamp(3rem,7vw,6rem)] leading-[1.0] font-[700] tracking-[-0.03em]"
          style={{ color: "#1a1a1a" }}
        >
          Let&apos;s build
          <br />
          something.
        </motion.h2>

        {/* Email CTA — Delassus-style pill button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mt-12"
        >
          <a
            href="mailto:ramrajnagar@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-[1rem] font-[500] transition-all duration-[0.8s] hover:shadow-lg"
            style={{
              background: "#ff7128",
              color: "#fff",
              boxShadow: "rgba(140, 49, 4, 0.15) 0px 4px 24px",
            }}
          >
            ramrajnagar@gmail.com
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {[
            { name: "GitHub", url: "https://github.com/Ramrajnagar" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/ramraj-nagar-784771307/" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] font-[500] transition-colors duration-300 hover:opacity-70"
              style={{ color: "#757575" }}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
