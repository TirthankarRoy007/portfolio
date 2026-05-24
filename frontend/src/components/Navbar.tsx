import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-ink text-white shadow-sm"
        : "text-muted hover:bg-white/80 hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="group inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-sm font-bold text-white shadow-soft transition group-hover:bg-brand">
            TR
          </span>
          <span className="grid">
            <span className="text-base font-semibold text-ink">Tirthankar Roy</span>
            <span className="text-xs font-medium text-muted">Full Stack Developer</span>
          </span>
        </NavLink>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="ml-2 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink">
            Hire Me <ArrowUpRight size={16} />
          </NavLink>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-ink shadow-sm md:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-white/70 bg-white/90 px-4 py-3 backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
