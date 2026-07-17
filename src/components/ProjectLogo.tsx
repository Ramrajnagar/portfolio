"use client";

import { motion } from "framer-motion";

function RverityLogo() {
  const nodes = [
    { cx: 100, cy: 45, r: 7 },
    { cx: 55, cy: 80, r: 6 },
    { cx: 145, cy: 80, r: 6 },
    { cx: 40, cy: 135, r: 5 },
    { cx: 100, cy: 155, r: 8 },
    { cx: 160, cy: 135, r: 5 },
    { cx: 75, cy: 110, r: 4 },
    { cx: 125, cy: 110, r: 4 },
  ];

  const edges = [
    [0, 1], [0, 2], [1, 3], [1, 6], [2, 5], [2, 7],
    [3, 4], [5, 4], [6, 4], [7, 4], [6, 7], [0, 6], [0, 7],
  ];

  const particles = [
    { from: 0, to: 4, delay: 2.5 },
    { from: 1, to: 4, delay: 3.0 },
    { from: 2, to: 4, delay: 3.5 },
  ];

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="r-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff7128" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff7128" stopOpacity="0" />
        </radialGradient>
        <filter id="r-blur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="r-glow-filter">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="r-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7128" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffd200" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <motion.circle
        cx="100" cy="100" r="80"
        fill="url(#r-glow)"
        initial={{ r: 0, opacity: 0 }}
        animate={{ r: 80, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Edges */}
      {edges.map(([a, b], i) => (
        <motion.line
          key={`e${i}`}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="url(#r-line-grad)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: [0.23, 1, 0.32, 1] }}
        />
      ))}

      {/* Nodes with glow */}
      {nodes.map((n, i) => (
        <motion.g key={`n${i}`} filter="url(#r-glow-filter)">
          <motion.circle
            cx={n.cx} cy={n.cy} r={n.r}
            fill="#ff7128"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.08, ease: [0.86, 0, 0.07, 1] }}
          />
          <motion.circle
            cx={n.cx} cy={n.cy} r={n.r * 0.4}
            fill="#fff"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1 + i * 0.08 }}
          />
        </motion.g>
      ))}

      {/* Pulse rings from center */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`p${i}`}
          cx="100" cy="155" r="8"
          fill="none" stroke="#ff7128" strokeWidth="0.8"
          initial={{ r: 8, opacity: 0 }}
          animate={{ r: 50, opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 + i * 0.6, ease: "easeOut" }}
        />
      ))}

      {/* Traveling particles */}
      {particles.map((p, i) => {
        const from = nodes[p.from];
        const to = nodes[p.to];
        return (
          <motion.circle
            key={`pp${i}`}
            r="2.5"
            fill="#ffd200"
            filter="url(#r-glow-filter)"
            initial={{ cx: from.cx, cy: from.cy, opacity: 0 }}
            animate={{
              cx: [from.cx, (from.cx + to.cx) / 2 + (i % 2 ? 10 : -10), to.cx],
              cy: [from.cy, (from.cy + to.cy) / 2 - 15, to.cy],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        );
      })}

      {/* Floating micro particles */}
      {[
        { x: 30, y: 60, d: 0.5 }, { x: 170, y: 90, d: 1.2 },
        { x: 60, y: 170, d: 0.8 }, { x: 150, y: 160, d: 1.5 },
        { x: 80, y: 30, d: 2.0 }, { x: 130, y: 45, d: 1.8 },
      ].map((fp, i) => (
        <motion.circle
          key={`fp${i}`}
          cx={fp.x} cy={fp.y} r="1.5"
          fill="#ff7128"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0], y: [fp.y, fp.y - 15, fp.y] }}
          transition={{ duration: 3, repeat: Infinity, delay: fp.d, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

function InkSheLogo() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="i-pen-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fa7692" />
          <stop offset="100%" stopColor="#e34f7f" />
        </linearGradient>
        <radialGradient id="i-ink-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fa7692" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#e34f7f" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#e34f7f" stopOpacity="0" />
        </radialGradient>
        <filter id="i-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="i-pen-clip">
          <path d="M100 25 L82 125 Q100 148 118 125 L100 25Z" />
        </clipPath>
      </defs>

      {/* Soft background glow */}
      <motion.circle
        cx="100" cy="90" r="60"
        fill="url(#i-ink-grad)"
        initial={{ r: 0, opacity: 0 }}
        animate={{ r: 60, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Pen body */}
      <motion.path
        d="M100 25 L82 125 Q100 148 118 125 L100 25Z"
        fill="none" stroke="url(#i-pen-grad)" strokeWidth="2" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: [0.86, 0, 0.07, 1] }}
      />

      {/* Pen fill with clip */}
      <motion.g clipPath="url(#i-pen-clip)">
        <motion.rect
          x="82" y="25" width="36" height="123"
          fill="url(#i-pen-grad)" opacity="0.1"
          initial={{ y: 25 }}
          animate={{ y: [25, 35, 25] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Pen tip glow */}
      <motion.circle
        cx="100" cy="125" r="3" fill="#fa7692"
        filter="url(#i-glow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      {/* Ink drop falling */}
      <motion.circle
        cx="100" cy="125" r="0"
        fill="#fa7692"
        initial={{ cy: 125, r: 0, opacity: 0 }}
        animate={{ cy: [125, 140, 155], r: [0, 4, 6], opacity: [0, 1, 0.8] }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.86, 0, 0.07, 1] }}
      />

      {/* Ink splash ripples */}
      {[0, 1, 2, 3].map((i) => (
        <motion.ellipse
          key={`r${i}`}
          cx="100" cy="155"
          rx="5" ry="2"
          fill="none" stroke="#fa7692" strokeWidth="0.8"
          initial={{ rx: 5, ry: 2, opacity: 0 }}
          animate={{
            rx: [5, 20 + i * 8],
            ry: [2, 4 + i * 2],
            opacity: [0.6, 0],
          }}
          transition={{ duration: 1.5, delay: 1.8 + i * 0.2, ease: "easeOut" }}
        />
      ))}

      {/* Writing lines with stagger */}
      {[
        { x1: 60, x2: 140, y: 168, w: 1.5 },
        { x1: 55, x2: 130, y: 174, w: 1 },
        { x1: 65, x2: 120, y: 180, w: 0.8 },
      ].map((l, i) => (
        <motion.line
          key={`w${i}`}
          x1={l.x1} y1={l.y} x2={l.x2} y2={l.y}
          stroke="#fa7692" strokeWidth={l.w} strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 2.2 + i * 0.15, ease: [0.23, 1, 0.32, 1] }}
        />
      ))}

      {/* Sakura petals */}
      {[
        { x: 55, y: 50, r: 0, rot: 0, d: 0.6 },
        { x: 145, y: 65, r: 0, rot: 45, d: 0.9 },
        { x: 40, y: 110, r: 0, rot: 90, d: 1.2 },
        { x: 160, y: 100, r: 0, rot: 135, d: 1.5 },
        { x: 70, y: 40, r: 0, rot: 180, d: 0.3 },
        { x: 130, y: 40, r: 0, rot: 220, d: 1.8 },
      ].map((p, i) => (
        <motion.g
          key={`s${i}`}
          transform={`translate(${p.x}, ${p.y})`}
          initial={{ opacity: 0, scale: 0, rotate: p.rot }}
          animate={{ opacity: [0, 0.6, 0.4], scale: [0, 1, 0.9], rotate: p.rot + 20 }}
          transition={{ duration: 2, delay: p.d, ease: [0.86, 0, 0.07, 1] }}
        >
          <ellipse cx="0" cy="-4" rx="3" ry="6" fill="#fa7692" opacity="0.3" />
          <ellipse cx="0" cy="-4" rx="3" ry="6" fill="#fa7692" opacity="0.2" transform="rotate(72)" />
          <ellipse cx="0" cy="-4" rx="3" ry="6" fill="#fa7692" opacity="0.15" transform="rotate(144)" />
        </motion.g>
      ))}

      {/* Floating sparkle dots */}
      {[
        { x: 45, y: 80 }, { x: 155, y: 130 }, { x: 85, y: 35 },
        { x: 120, y: 160 }, { x: 35, y: 145 },
      ].map((sp, i) => (
        <motion.circle
          key={`sp${i}`}
          cx={sp.x} cy={sp.y} r="1"
          fill="#fa7692"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.8, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2.5 + i * 0.4 }}
        />
      ))}
    </svg>
  );
}

function LedgeraLogo() {
  const hexNodes = [
    { x: 100, y: 40 }, { x: 55, y: 70 }, { x: 145, y: 70 },
    { x: 55, y: 130 }, { x: 145, y: 130 }, { x: 100, y: 160 },
  ];

  function hexPath(cx: number, cy: number, r: number) {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 2;
      pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
    }
    return `M${pts.join("L")}Z`;
  }

  const connections = [
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5],
    [1, 2], [3, 4], [1, 4], [2, 3],
  ];

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="l-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="l-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="l-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <motion.circle cx="100" cy="100" r="70" fill="url(#l-bg)"
        initial={{ r: 0 }} animate={{ r: 70 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Grid lines — faint tech grid */}
      {[40, 70, 100, 130, 160].map((pos, i) => (
        <motion.g key={`grid${i}`}>
          <motion.line x1={pos} y1="30" x2={pos} y2="170" stroke="#22d3ee" strokeWidth="0.3" opacity="0.1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          />
          <motion.line x1="30" y1={pos} x2="170" y2={pos} stroke="#22d3ee" strokeWidth="0.3" opacity="0.1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 + 0.3 }}
          />
        </motion.g>
      ))}

      {/* Connections */}
      {connections.map(([a, b], i) => (
        <motion.line
          key={`c${i}`}
          x1={hexNodes[a].x} y1={hexNodes[a].y}
          x2={hexNodes[b].x} y2={hexNodes[b].y}
          stroke="#22d3ee" strokeWidth="1" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease: [0.23, 1, 0.32, 1] }}
        />
      ))}

      {/* Hexagonal nodes */}
      {hexNodes.map((n, i) => (
        <motion.g key={`h${i}`} filter="url(#l-glow)">
          <motion.path
            d={hexPath(n.x, n.y, 14)}
            fill="none" stroke="#22d3ee" strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: [0.86, 0, 0.07, 1] }}
          />
          <motion.path
            d={hexPath(n.x, n.y, 14)}
            fill="#22d3ee" opacity="0.08"
            initial={{ opacity: 0 }} animate={{ opacity: 0.08 }}
            transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
          />
          <motion.circle
            cx={n.x} cy={n.y} r="3"
            fill="#22d3ee"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
          />
          <motion.circle
            cx={n.x} cy={n.y} r="1.2"
            fill="#fff"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 1.1 + i * 0.1 }}
          />
        </motion.g>
      ))}

      {/* Traveling data packet — path through network */}
      <motion.circle
        r="3" fill="#22d3ee" filter="url(#l-glow)"
        initial={{ opacity: 0 }}
        animate={{
          cx: [55, 100, 145, 100, 55, 100, 145],
          cy: [70, 40, 70, 130, 130, 160, 130],
          opacity: [0, 1, 1, 1, 1, 1, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2, ease: "linear" }}
      />

      {/* Secondary packet */}
      <motion.circle
        r="2" fill="#06b6d4"
        initial={{ opacity: 0 }}
        animate={{
          cx: [145, 100, 55, 100, 145],
          cy: [70, 160, 130, 40, 70],
          opacity: [0, 0.8, 0.8, 0.8, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 3.5, ease: "linear" }}
      />

      {/* Pulse on each node */}
      {hexNodes.map((n, i) => (
        <motion.circle
          key={`pu${i}`}
          cx={n.x} cy={n.y} r="14"
          fill="none" stroke="#22d3ee" strokeWidth="0.6"
          initial={{ r: 14, opacity: 0 }}
          animate={{ r: 30, opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2.5 + i * 0.3, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

function IntelliTradeLogo() {
  const bars = [
    { x: 28, h: 50 }, { x: 50, h: 80 }, { x: 72, h: 35 },
    { x: 94, h: 100 }, { x: 116, h: 65 }, { x: 138, h: 90 }, { x: 160, h: 45 },
  ];

  const linePoints = bars.map((b) => `${b.x + 9},${170 - b.h}`).join(" ");

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="t-bar-grad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#e7524c" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#e7524c" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="t-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e7524c" />
          <stop offset="100%" stopColor="#ffd200" />
        </linearGradient>
        <filter id="t-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="t-area" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e7524c" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#e7524c" stopOpacity="0" />
        </linearGradient>
        <clipPath id="t-clip">
          <rect x="20" y="30" width="170" height="145" />
        </clipPath>
      </defs>

      {/* Baseline */}
      <motion.line x1="20" y1="170" x2="185" y2="170"
        stroke="#e7524c" strokeWidth="0.5" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Horizontal grid lines */}
      {[60, 90, 120, 150].map((y, i) => (
        <motion.line key={`gl${i}`} x1="20" y1={y} x2="185" y2={y}
          stroke="#e7524c" strokeWidth="0.3" opacity="0.1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        />
      ))}

      {/* Bars */}
      <motion.g clipPath="url(#t-clip)">
        {bars.map((b, i) => (
          <motion.g key={`b${i}`}>
            <motion.rect
              x={b.x} width="18" rx="3"
              fill="url(#t-bar-grad)"
              initial={{ height: 0, y: 170 }}
              animate={{ height: b.h, y: 170 - b.h }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.86, 0, 0.07, 1] }}
            />
            {/* Bar border */}
            <motion.rect
              x={b.x} width="18" rx="3"
              fill="none" stroke="#e7524c" strokeWidth="0.8" opacity="0.3"
              initial={{ height: 0, y: 170 }}
              animate={{ height: b.h, y: 170 - b.h }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.86, 0, 0.07, 1] }}
            />
          </motion.g>
        ))}
      </motion.g>

      {/* Area under line */}
      <motion.polygon
        points={`28,170 ${linePoints} 169,170`}
        fill="url(#t-area)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
      />

      {/* Trend line */}
      <motion.polyline
        points={linePoints}
        fill="none" stroke="url(#t-line-grad)" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.86, 0, 0.07, 1] }}
      />

      {/* Data points */}
      {bars.map((b, i) => (
        <motion.g key={`pt${i}`} filter="url(#t-glow)">
          <motion.circle
            cx={b.x + 9} cy={170 - b.h} r="4"
            fill="#fff" stroke="#e7524c" strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.5 + i * 0.08, ease: [0.86, 0, 0.07, 1] }}
          />
          <motion.circle
            cx={b.x + 9} cy={170 - b.h} r="1.5"
            fill="#e7524c"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 1.7 + i * 0.08 }}
          />
        </motion.g>
      ))}

      {/* Candlestick accents — mini OHLC above bars */}
      {[
        { x: 60, o: 85, c: 70 }, { x: 100, o: 55, c: 65 }, { x: 145, o: 75, c: 60 },
      ].map((c, i) => (
        <motion.g key={`cd${i}`} opacity="0.4"
          initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
          transition={{ duration: 0.5, delay: 2 + i * 0.15 }}
        >
          <line x1={c.x} y1={c.o - 15} x2={c.x} y2={c.c - 5}
            stroke={c.c < c.o ? "#22c55e" : "#e7524c"} strokeWidth="1" />
          <rect x={c.x - 4} y={Math.min(c.o, c.c) - 12} width="8" height="5" rx="1"
            fill={c.c < c.o ? "#22c55e" : "#e7524c"} opacity="0.6" />
        </motion.g>
      ))}

      {/* Arrow indicator — bullish */}
      <motion.g
        initial={{ opacity: 0, x: -5, y: 5 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        filter="url(#t-glow)"
      >
        <motion.path
          d="M165 45 L178 32 M178 32 L178 42 M178 32 L168 32"
          fill="none" stroke="#22c55e" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 2.7 }}
        />
      </motion.g>

      {/* Sparkle particles */}
      {[
        { x: 35, y: 55 }, { x: 175, y: 85 }, { x: 50, y: 140 },
        { x: 160, y: 50 }, { x: 90, y: 40 },
      ].map((sp, i) => (
        <motion.circle
          key={`sp${i}`}
          cx={sp.x} cy={sp.y} r="1"
          fill="#ffd200"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.8, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 3 + i * 0.3 }}
        />
      ))}
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
