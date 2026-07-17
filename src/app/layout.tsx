import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Ramraj Nagar — Developer & Builder",
  description: "Portfolio of Ramraj Nagar. Developer, builder, and maker of digital things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
