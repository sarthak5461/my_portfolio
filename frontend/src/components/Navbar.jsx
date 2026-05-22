import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4 sm:pt-6"
      data-testid="navbar"
    >
      <nav
        className={`mx-auto max-w-7xl flex items-center justify-between gap-4 px-4 sm:px-6 py-3 brutal-border rounded-full bg-cream transition-shadow ${
          scrolled ? "shadow-brutal-sm" : "shadow-none"
        }`}
      >
        <a
          href="#hero"
          className="font-display font-black text-xl tracking-tighter"
          data-testid="nav-logo"
        >
          SS<span className="text-tomato">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="px-3 py-2 font-mono text-xs uppercase tracking-widest hover:bg-gold rounded-full transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resume}
          download
          target="_blank"
          rel="noopener noreferrer"
          data-testid="download-resume-btn-nav"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-tomato text-cream brutal-border rounded-full font-display font-bold text-sm shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          <Download size={14} /> Resume
        </a>

        <button
          className="md:hidden p-2 brutal-border rounded-full bg-gold"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-auto max-w-7xl mt-3 brutal-border rounded-2xl bg-cream shadow-brutal p-4"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 font-mono text-sm uppercase tracking-widest hover:bg-gold rounded-md"
                    data-testid={`nav-link-mobile-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resume}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="download-resume-btn-nav-mobile"
                  className="mt-2 inline-flex w-full justify-center items-center gap-2 px-4 py-3 bg-tomato text-cream brutal-border rounded-md font-display font-bold"
                >
                  <Download size={14} /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
