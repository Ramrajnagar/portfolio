"use client";

import { motion } from "framer-motion";

function RverityLogo() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Neural network nodes */}
      {[
        { cx: 60, cy: 50, delay: 0 },
        { cx: 140, cy: 50, delay: 0.2 },
        { cx: 100, cy: 100, delay: 0.4 },
        { cx: 50, cy: 140, delay: 0.6 },
        { cx: 150, cy: 140, delay: 0.8 },
        { cx: 100, cy: 160, delay: 1.0 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r="6"
          fill="#ff7128"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: node.delay,
            ease: [0.86, 0, 0.07, 1],
          }}
        />
      ))}

      {/* Connecting lines */}
      {[
        { x1: 60, y1: 50, x2: 100, y2: 100 },
        { x1: 140, y1: 50, x2: 100, y2: 100 },
        { x1: 100, y1: 100, x2: 50, y2: 140 },
        { x1: 100, y1: 100, x2: 150, y2: 140 },
        { x1: 50, y1: 140, x2: 100, y2: 160 },
        { x1: 150, y1: 140, x2: 100, y2: 160 },
        { x1: 60, y1: 50, x2: 50, y2: 140 },
        { x1: 140, y1: 50, x2: 150, y2: 140 },
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="#ff7128"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.3 + i * 0.1,
            ease: [0.23, 1, 0.32, 1],
          }}
        />
      ))}

      {/* Pulse rings on center node */}
      <motion.circle
        cx="100"
        cy="100"
        r="6"
        fill="none"
        stroke="#ff7128"
        strokeWidth="1"
        initial={{ r: 6, opacity: 0.6 }}
        animate={{ r: 30, opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1.5,
        }}
      />
      <motion.circle
        cx="100"
        cy="100"
        r="6"
        fill="none"
        stroke="#ff7128"
        strokeWidth="1"
        initial={{ r: 6, opacity: 0.4 }}
        animate={{ r: 45, opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 2,
        }}
      />
    </svg>
  );
}

function InkSheLogo() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Pen nib */}
      <motion.path
        d="M100 30 L85 120 Q100 140 115 120 L100 30Z"
        fill="none"
        stroke="#fa7692"
        strokeWidth="2"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.86, 0, 0.07, 1],
        }}
      />

      {/* Ink drop */}
      <motion.circle
        cx="100"
        cy="150"
        r="0"
        fill="#fa7692"
        initial={{ r: 0, opacity: 0 }}
        animate={{ r: 12, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: [0.86, 0, 0.07, 1],
        }}
      />

      {/* Ink ripples */}
      {[18, 28, 38].map((r, i) => (
        <motion.circle
          key={i}
          cx="100"
          cy="150"
          r={r}
          fill="none"
          stroke="#fa7692"
          strokeWidth="0.8"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1.5 + i * 0.3,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Writing lines */}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1={70 + i * 5}
          y1={165}
          x2={130 - i * 10}
          y2={165}
          stroke="#fa7692"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 1.8 + i * 0.15,
            ease: [0.23, 1, 0.32, 1],
          }}
        />
      ))}

      {/* Flower petal accent */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <motion.ellipse
          key={i}
          cx="100"
          cy="55"
          rx="4"
          ry="12"
          fill="#fa7692"
          opacity="0.15"
          transform={`rotate(${angle} 100 55)`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.8 + i * 0.08,
            ease: [0.86, 0, 0.07, 1],
          }}
        />
      ))}
    </svg>
  );
}

function LedgeraLogo() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Chain links forming a network */}
      {[
        { x: 50, y: 60, delay: 0 },
        { x: 100, y: 40, delay: 0.15 },
        { x: 150, y: 60, delay: 0.3 },
        { x: 70, y: 110, delay: 0.45 },
        { x: 130, y: 110, delay: 0.6 },
        { x: 100, y: 160, delay: 0.75 },
      ].map((node, i) => (
        <motion.g key={i}>
          <motion.rect
            x={node.x - 12}
            y={node.y - 12}
            width="24"
            height="24"
            rx="6"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: node.delay,
              ease: [0.86, 0, 0.07, 1],
            }}
          />
          <motion.rect
            x={node.x - 5}
            y={node.y - 5}
            width="10"
            height="10"
            rx="2"
            fill="#22d3ee"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{
              duration: 0.4,
              delay: node.delay + 0.2,
              ease: [0.86, 0, 0.07, 1],
            }}
          />
        </motion.g>
      ))}

      {/* Connection lines */}
      {[
        { x1: 50, y1: 60, x2: 100, y2: 40 },
        { x1: 100, y1: 40, x2: 150, y2: 60 },
        { x1: 50, y1: 60, x2: 70, y2: 110 },
        { x1: 150, y1: 60, x2: 130, y2: 110 },
        { x1: 70, y1: 110, x2: 130, y2: 110 },
        { x1: 70, y1: 110, x2: 100, y2: 160 },
        { x1: 130, y1: 110, x2: 100, y2: 160 },
        { x1: 100, y1: 40, x2: 100, y2: 160 },
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="#22d3ee"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.25 }}
          transition={{
            duration: 0.6,
            delay: 0.4 + i * 0.08,
            ease: [0.23, 1, 0.32, 1],
          }}
        />
      ))}

      {/* Pulse traveling along a line */}
      <motion.circle
        cx="50"
        cy="60"
        r="3"
        fill="#22d3ee"
        initial={{ cx: 50, cy: 60, opacity: 0 }}
        animate={{
          cx: [50, 100, 130, 100, 50],
          cy: [60, 40, 110, 160, 60],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />
    </svg>
  );
}

function IntelliTradeLogo() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Chart bars */}
      {[
        { x: 30, h: 60, delay: 0 },
        { x: 55, h: 90, delay: 0.1 },
        { x: 80, h: 45, delay: 0.2 },
        { x: 105, h: 110, delay: 0.3 },
        { x: 130, h: 75, delay: 0.4 },
        { x: 155, h: 95, delay: 0.5 },
      ].map((bar, i) => (
        <motion.rect
          key={i}
          x={bar.x}
          y={170 - bar.h}
          width="18"
          height={bar.h}
          rx="4"
          fill="#e7524c"
          opacity="0.2"
          initial={{ height: 0, y: 170 }}
          animate={{ height: bar.h, y: 170 - bar.h }}
          transition={{
            duration: 0.6,
            delay: bar.delay,
            ease: [0.86, 0, 0.07, 1],
          }}
        />
      ))}

      {/* Trend line */}
      <motion.polyline
        points="39,110 64,80 89,125 114,60 139,95 164,75"
        fill="none"
        stroke="#e7524c"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.6,
          ease: [0.86, 0, 0.07, 1],
        }}
      />

      {/* Data points */}
      {[
        { cx: 39, cy: 110, delay: 0.8 },
        { cx: 64, cy: 80, delay: 0.95 },
        { cx: 89, cy: 125, delay: 1.1 },
        { cx: 114, cy: 60, delay: 1.25 },
        { cx: 139, cy: 95, delay: 1.4 },
        { cx: 164, cy: 75, delay: 1.55 },
      ].map((pt, i) => (
        <motion.circle
          key={i}
          cx={pt.cx}
          cy={pt.cy}
          r="4"
          fill="#fff"
          stroke="#e7524c"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
            delay: pt.delay,
            ease: [0.86, 0, 0.07, 1],
          }}
        />
      ))}

      {/* Arrow indicator */}
      <motion.g
        initial={{ opacity: 0, x: -10, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <motion.path
          d="M155 55 L170 40 L170 52 L180 52 L180 40 L170 30"
          fill="none"
          stroke="#e7524c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
      </motion.g>
    </svg>
  );
}

const logoMap: Record<string, React.FC> = {
  rverity: RverityLogo,
  inkShe: InkSheLogo,
  inkshe: InkSheLogo,
  ledgera: LedgeraLogo,
  intellitrade: IntelliTradeLogo,
};

export default function ProjectLogo({
  project,
  size = 200,
}: {
  project: string;
  size?: number;
}) {
  const Logo = logoMap[project.toLowerCase()];
  if (!Logo) return null;

  return (
    <div style={{ width: size, height: size }} className="flex items-center justify-center">
      <Logo />
    </div>
  );
}
