export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[11px] text-[#555] tracking-wider">
          &copy; {new Date().getFullYear()} Ramraj Nagar
        </div>
        <div className="text-[11px] text-[#555] tracking-wider">
          Built with Next.js &amp; Tailwind
        </div>
      </div>
    </footer>
  );
}
