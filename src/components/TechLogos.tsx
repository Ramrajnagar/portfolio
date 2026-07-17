"use client";

const logoPaths: Record<string, string[]> = {
  react: [
    "M12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1z",
    "M19.07 4.93a1 1 0 010 1.41l-1.41 1.42a1 1 0 01-1.42-1.42l1.42-1.41a1 1 0 011.41 0z",
    "M21 11h-2a1 1 0 010-2h2a1 1 0 010 2z",
    "M19.07 19.07a1 1 0 01-1.41 0l-1.42-1.42a1 1 0 011.42-1.41l1.41 1.41a1 1 0 010 1.42z",
    "M12 21a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1z",
    "M4.93 19.07a1 1 0 010-1.41l1.42-1.42a1 1 0 011.41 1.42L6.34 19.07a1 1 0 01-1.41 0z",
    "M3 11h2a1 1 0 010 2H3a1 1 0 010-2z",
    "M4.93 4.93a1 1 0 011.41 0l1.42 1.42a1 1 0 01-1.42 1.41L4.93 6.34a1 1 0 010-1.41z",
  ],
  nextjs: ["M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z"],
  typescript: ["M3 3h18v18H3V3zm3 3v12h3v-4h3v4h3V6H6zm6 8h-2v-2h2v2zm4 2h-2v-2h2v2zm0-4h-2V8h2v4z"],
  prisma: ["M12 2L2 19h8l2-4 2 4h8L12 2zm0 6l3 6h-2l-.5-1h-3L9 14H7l5-6z"],
  postgresql: ["M12 3C7 3 3 5 3 8v3c0 3 4 5 9 5s9-2 9-5V8c0-3-4-5-9-5zm0 2c4.4 0 7 1.3 7 3s-2.6 3-7 3-7-1.3-7-3 2.6-3 7-3z"],
  nodejs: ["M12 2l9 5v10l-9 5-9-5V7l9-5zm0 3L6 8v8l6 3 6-3V8l-6-3z"],
  python: ["M12 2c-1.7 0-3 .8-3 2.5v2h3v1H7.5C5.6 7.5 4 9.1 4 11v2c0 1.9 1.6 3.5 3.5 3.5H8v-2c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v2h.5c1.9 0 3.5-1.6 3.5-3.5v-2c0-1.9-1.6-3.5-3.5-3.5H15v-2c0-1.7-1.3-3-3-3zm-2 2a1 1 0 110 2 1 1 0 010-2zm8 14c-1.7 0-3-.8-3-2.5v-2h-3v-1h4.5c1.9 0 3.5 1.6 3.5 3.5v2c0 1.9-1.6 3.5-3.5 3.5H16v2c0 1.7-1.3 3-3 3h-4c-1.7 0-3-1.3-3-3v-2h-.5c-1.9 0-3.5-1.6-3.5-3.5v-2c0-1.9 1.6-3.5 3.5-3.5H9v2c0 1.7 1.3 3 3 3h4c1.7 0 3-1.3 3-3v-2zm-2-2a1 1 0 110-2 1 1 0 010 2z"],
  openai: ["M21.8 8.001a5.6 5.6 0 00-2.4-3.2 6 6 0 00-2.6-1.2A5.5 5.5 0 0012 4a5.5 5.5 0 00-4.8.6 6 6 0 00-2.6 1.2 5.6 5.6 0 00-2.4 3.2A5.7 5.7 0 002 12a5.7 5.7 0 00.2 1.8 5.6 5.6 0 002.4 3.2 6 6 0 002.6 1.2A5.5 5.5 0 0012 20a5.5 5.5 0 004.8-.6 6 6 0 002.6-1.2 5.6 5.6 0 002.4-3.2A5.7 5.7 0 0022 12a5.7 5.7 0 00-.2-1.999zM12 17.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11z"],
  tailwind: ["M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.22 7.15 14.08 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.22 13.15 9.08 12 7 12z"],
  supabase: ["M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.18 7 12 10.18 5.82 7 12 4.18z"],
  vercel: ["M12 2L2 20h20L12 2z"],
  docker: ["M21 10h-1V7a1 1 0 00-1-1h-3V4a1 1 0 00-1-1H9a1 1 0 00-1 1v2H5a1 1 0 00-1 1v3H3a1 1 0 00-1 1v6a1 1 0 001 1h18a1 1 0 001-1v-6a1 1 0 00-1-1z"],
  firebase: ["M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.18L18 8v8l-6 3-6-3V8l6-3.82z"],
  langchain: ["M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"],
};

const logoLabels: Record<string, string> = {
  react: "React",
  nextjs: "Next.js",
  typescript: "TypeScript",
  prisma: "Prisma",
  postgresql: "PostgreSQL",
  nodejs: "Node.js",
  python: "Python",
  openai: "OpenAI",
  tailwind: "Tailwind",
  supabase: "Supabase",
  vercel: "Vercel",
  docker: "Docker",
  firebase: "Firebase",
  langchain: "LangChain",
};

export default function TechLogos({
  logos,
  color,
  size = 20,
}: {
  logos: string[];
  color?: string;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-4">
      {logos.map((key) => {
        const paths = logoPaths[key];
        const label = logoLabels[key];
        if (!paths) return null;
        return (
          <div
            key={key}
            className="flex items-center gap-2 group"
            title={label}
          >
            <svg
              viewBox="0 0 24 24"
              width={size}
              height={size}
              fill={color || "#999"}
              className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            >
              {paths.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </svg>
            <span
              className="text-[0.75rem] font-[500] hidden md:inline opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: color || "#999" }}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
