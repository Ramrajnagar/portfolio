"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250, 250, 250, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-[1.125rem] font-[700] tracking-[-0.02em]"
          style={{ color: "#2f2f2f" }}
        >
          RN
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.8125rem] font-[500] transition-opacity duration-300 hover:opacity-60"
              style={{ color: "#2f2f2f" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
