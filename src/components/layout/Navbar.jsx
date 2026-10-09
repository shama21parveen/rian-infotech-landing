import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Why Rian", href: "#why" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const reduceMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    setHidden(latest > previous && latest > 160 && !open);
  });

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -90, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onFocusCapture={() => setHidden(false)}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        aria-label="Main"
        className={`relative mx-auto flex items-center justify-between rounded-full border border-ink/5 px-3 transition-all duration-500 ease-out sm:px-4 ${
          scrolled
            ? "h-14 max-w-4xl bg-white/80 shadow-lg shadow-ink/5 backdrop-blur-xl"
            : "h-16 max-w-6xl bg-white/50 backdrop-blur-md"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-1 text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-white">R</span>
          <span>
            Rian<span className="text-brand-600">Infotech</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex" onMouseLeave={() => setHovered(null)}>
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                onFocus={() => setHovered(link.href)}
                onBlur={() => setHovered(null)}
                className="relative z-10 block rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:text-ink"
              >
                {link.label}
              </a>
              {hovered === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-brand-50 ring-1 ring-brand-100"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact" size="sm" withArrow>
            Book a call
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full hover:bg-brand-50 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {!reduceMotion && (
          <motion.span
            aria-hidden="true"
            style={{ scaleX: scrollYProgress }}
            className="absolute inset-x-8 bottom-0 h-0.5 origin-left rounded-full bg-linear-to-r from-brand-600 to-accent"
          />
        )}
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-ink/5 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-medium hover:bg-brand-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="#contact" className="mt-3 w-full" withArrow onClick={() => setOpen(false)}>
              Book a call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}