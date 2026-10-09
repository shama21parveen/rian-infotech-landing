import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Why Rian", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Web Development",
  "App Development",
  "AI-Driven Automation",
  "Customized Software Solutions",
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
  { label: "Facebook", href: "https://www.facebook.com/", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
];

const linkClass = "text-sm text-muted transition hover:text-brand-600";
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#top" className="flex items-center gap-2 text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-white">
              R
            </span>
            <span>
              Rian<span className="text-brand-600">Infotech</span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm text-muted">
            An AI and software studio building intelligent, scalable digital
            products for ambitious businesses.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-sm font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="text-sm font-bold">Services</h3>
          <ul className="mt-4 space-y-3">
            {serviceLinks.map((name) => (
              <li key={name}>
                <a href="#services" className={linkClass}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold">Contact us</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-brand-600" aria-hidden="true" />
              <a href="mailto:info@rianinfotech.com" className={linkClass}>
                info@rianinfotech.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand-600" aria-hidden="true" />
              <a href="tel:+919661810305" className={linkClass}>
                +91-9661810305
              </a>
            </li>
          </ul>

          <ul className="mt-5 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink ring-1 ring-ink/10 transition duration-300 hover:-translate-y-1 hover:bg-brand-600 hover:text-white hover:ring-brand-600"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/5 py-6 text-center text-xs text-muted">
        © {currentYear} Rian Infotech. All rights reserved.
      </div>
    </footer>
  );
}
