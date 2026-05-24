export const Footer = () => (
  <footer className="border-t border-white/70 bg-white/70 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <span>© {new Date().getFullYear()} Tirthankar Roy</span>
      <span>Full Stack Developer · Bengaluru, India</span>
    </div>
  </footer>
);
