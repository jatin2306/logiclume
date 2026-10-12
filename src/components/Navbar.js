"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { Sparkles, ChevronDown } from "lucide-react";
import NavMegaPanel from "./NavMegaPanel";
import "./site-header.css";

const navLinks = [
  { id: "ai", label: "AI", href: "/#services", isAi: true, mega: "ai" },
  { id: "services", label: "Services", href: "/#services", mega: "services" },
  { id: "industries", label: "Industries", href: "/#industries" },
  { id: "about", label: "About", href: "/#about" },
  { id: "portfolio", label: "Work", href: "/portfolio", isRoute: true },
];

const sectionIds = ["home", "contact", "services", "industries", "about", "team", "testimonials"];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [megaMenu, setMegaMenu] = useState(null);

  const updateActiveSection = useCallback(() => {
    const offset = 100;
    let current = pathname === "/portfolio" ? "" : "home";
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) current = id;
    }
    if (current) setActiveSection(current);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      updateActiveSection();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActiveSection]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || megaMenu ? "hidden" : "";
    document.documentElement.classList.toggle("dp-nav-mega-open", Boolean(megaMenu));
  }, [mobileOpen, megaMenu]);

  const closeMegaMenu = useCallback(() => setMegaMenu(null), []);

  const headerClass = [
    "site-header",
    scrolled ? "site-header--scrolled" : "",
    megaMenu ? "site-header--mega-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const linkActive = (link) => {
    if (link.isRoute) return pathname === link.href;
    const section = link.href.replace("/#", "").replace("#", "");
    return activeSection === section;
  };

  const handleMegaLink = (e, megaKey) => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      closeMegaMenu();
      return;
    }
    if (megaMenu !== megaKey) {
      e.preventDefault();
      setMegaMenu(megaKey);
      return;
    }
    closeMegaMenu();
  };

  const renderDesktopLink = (link) => {
    const active = linkActive(link);
    const open = megaMenu === link.mega;
    const className = [
      "site-header-link",
      link.isAi ? "site-header-link--ai" : "",
      active ? "site-header-link--active" : "",
      open ? "site-header-link--open" : "",
    ]
      .filter(Boolean)
      .join(" ");

    const onEnter = () => {
      if (link.mega) setMegaMenu(link.mega);
      else closeMegaMenu();
    };

    const content = (
      <>
        {link.isAi && (
          <Sparkles size={15} strokeWidth={2.25} className="site-header-ai-icon" aria-hidden />
        )}
        {link.label}
        {link.mega && (
          <ChevronDown size={14} strokeWidth={2.5} className="site-header-chevron" aria-hidden />
        )}
      </>
    );

    if (link.isRoute) {
      return (
        <Link
          key={link.id}
          href={link.href}
          className={className}
          onMouseEnter={closeMegaMenu}
          onClick={closeMegaMenu}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        key={link.id}
        href={link.href}
        className={className}
        onMouseEnter={onEnter}
        onClick={(e) => link.mega && handleMegaLink(e, link.mega)}
        aria-expanded={link.mega ? open : undefined}
        aria-haspopup={link.mega ? "true" : undefined}
      >
        {content}
      </a>
    );
  };

  return (
    <>
      <header className={headerClass} onMouseLeave={closeMegaMenu}>
        <div className="site-header-bar">
          <div className="site-wrap">
            <div className="site-container relative">
              <div className="site-container-inner site-header-inner">
                <Link
                  href="/"
                  className="site-header-logo"
                  aria-label="DeopersIndia home"
                  onMouseEnter={closeMegaMenu}
                  onClick={closeMegaMenu}
                >
                  <span className="relative block w-[9.5rem] sm:w-[10.25rem] h-10">
                    <Image
                      src="/images/logo.png"
                      alt="DeopersIndia"
                      title="DeopersIndia"
                      fill
                      sizes="(max-width: 640px) 152px, 164px"
                      className="object-contain object-left"
                      priority
                    />
                  </span>
                </Link>

                <nav className="site-header-nav" aria-label="Primary">
                  {navLinks.map(renderDesktopLink)}
                </nav>

                <div className="site-header-mobile-row lg:contents">
                  <div className="site-header-actions">
                    <a href="/#contact" className="site-header-btn-outline" onClick={closeMegaMenu}>
                      Book A Call
                    </a>
                    <button
                      type="button"
                      className={`site-header-btn-gradient ${megaMenu === "contact" ? "site-header-btn-gradient--open" : ""}`}
                      onMouseEnter={() => setMegaMenu("contact")}
                      onClick={(e) => handleMegaLink(e, "contact")}
                      aria-expanded={megaMenu === "contact"}
                      aria-haspopup="true"
                    >
                      Contact Us
                      <ChevronDown size={14} strokeWidth={2.5} className="site-header-chevron" />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="site-header-mobile-toggle"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMobileOpen(!mobileOpen)}
                  >
                    {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                  </button>
                </div>
              </div>

              <NavMegaPanel type={megaMenu} onClose={closeMegaMenu} />
            </div>
          </div>
        </div>
      </header>

      <div className="dp-nav-spacer" aria-hidden="true" />

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "var(--dp-nav-bar-h)" }}
      >
        <div
          className="absolute inset-0 bg-black/25 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        <aside
          className={`absolute top-0 right-0 h-full w-full max-w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
            <span className="font-display text-lg font-bold text-[var(--color-text)]">Menu</span>
            <button type="button" className="site-header-mobile-toggle" onClick={() => setMobileOpen(false)}>
              <FaTimes size={18} />
            </button>
          </div>

          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = linkActive(link);
              const className = `block rounded-lg px-4 py-3 text-[0.9375rem] font-medium ${
                active ? "bg-slate-100 text-[var(--color-primary)]" : "text-slate-800 hover:bg-slate-50"
              }`;
              if (link.isRoute) {
                return (
                  <Link key={link.id} href={link.href} className={className} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                );
              }
              return (
                <a key={link.id} href={link.href} className={className} onClick={() => setMobileOpen(false)}>
                  {link.isAi && "✦ "}
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="px-6 pb-8 pt-4 flex flex-col gap-3 border-t border-[var(--color-border)]">
            <a
              href="/#contact"
              className="site-header-btn-outline w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Book A Call
            </a>
            <a
              href="/#contact"
              className="site-header-btn-gradient w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
