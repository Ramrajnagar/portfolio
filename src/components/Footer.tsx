"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-6"
      style={{ background: "#fafafa", borderTop: "1px solid #eee" }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[0.8125rem]"
          style={{ color: "#757575" }}
        >
          © 2026 Ramraj Nagar
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[0.8125rem]"
          style={{ color: "#757575" }}
        >
          Built with care.
        </motion.p>
      </div>
    </footer>
  );
}
