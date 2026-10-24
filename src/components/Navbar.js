"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { Sparkles, ChevronDown } from "lucide-react";
import NavMegaPanel from "./NavMegaPanel";
import ContactForm from "./ContactForm";
import "./site-header.css";

const navLinks = [
  { id: "ai", label: "AI", href: "/#services", isAi: true, mega: "ai" },
  { id: "services", label: "Services", href: "/#services", mega: "services" },
  { id: "industries", label: "Industries", href: "/#industries" },
  { id: "about", label: "About", href: "/about-us", isRoute: true },
  { id: "portfolio", label: "Work", href: "/work", isRoute: true },
];

const sectionIds = ["home", "services", "industries", "about", "team", "testimonials"];
const CONTACT_DISMISS_KEY = "deopers-work-contact-dismissed";

function contactAlreadyDismissed() {
  try {
    return window.localStorage.getItem(CONTACT_DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [megaMenu, setMegaMenu] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  const updateActiveSection = useCallback(() => {
    const offset = 100;
    let current = pathname === "/work" || pathname.startsWith("/work/") ? "" : "home";
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
    document.body.style.overflow = mobileOpen || megaMenu || contactOpen ? "hidden" : "";
    document.documentElement.style.overflow = contactOpen ? "hidden" : "";
    document.documentElement.classList.toggle("dp-nav-mega-open", Boolean(megaMenu));
  }, [mobileOpen, megaMenu, contactOpen]);

  const closeContact = useCallback(() => {
    try {
      window.localStorage.setItem(CONTACT_DISMISS_KEY, "1");
    } catch {
      /* storage unavailable — closing still sticks for this visit */
    }
    setContactOpen(false);
  }, []);

  useEffect(() => {
    const onWork = pathname === "/work" || pathname.startsWith("/work/");
    if (!onWork || contactAlreadyDismissed()) {
      setContactOpen(false);
      return;
    }
    setMobileOpen(false);
    setMegaMenu(null);
    setContactOpen(true);
  }, [pathname]);

  useEffect(() => {
    if (!contactOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") closeContact();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [contactOpen, closeContact]);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenu(null);
  }, [pathname]);

  const closeMegaMenu = useCallback(() => setMegaMenu(null), []);

  const headerClass = [
    "site-header",
    scrolled ? "site-header--scrolled" : "",
    megaMenu ? "site-header--mega-open" : "",
    contactOpen ? "site-header--contact-lock" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const linkActive = (link) => {
    if (link.isRoute) {
      if (link.href === "/work") return pathname === "/work" || pathname.startsWith("/work/");
      return pathname === link.href;
    }
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

    const linkEl = link.isRoute ? (
      <Link
        key={link.id}
        href={link.href}
        className={className}
        onMouseEnter={closeMegaMenu}
        onClick={closeMegaMenu}
      >
        {content}
      </Link>
    ) : (
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

    if (link.isAi) {
      return (
        <span key={link.id} className="site-header-ai-border">
          {linkEl}
        </span>
      );
    }

    return linkEl;
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
                    <Link href="/book-a-call" className="site-header-btn-outline" onClick={closeMegaMenu}>
                      Book A Call
                    </Link>
                    <Link
                      href="/contact-us"
                      className={`site-header-btn-gradient ${megaMenu === "contact" ? "site-header-btn-gradient--open" : ""}`}
                      onMouseEnter={() => setMegaMenu("contact")}
                      onClick={closeMegaMenu}
                      aria-expanded={megaMenu === "contact"}
                      aria-haspopup="true"
                      aria-current={pathname === "/contact-us" ? "page" : undefined}
                    >
                      Contact Us
                      <ChevronDown size={14} strokeWidth={2.5} className="site-header-chevron" />
                    </Link>
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
          className="absolute inset-0 bg-[var(--color-text)]/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        <aside
          className={`absolute top-0 right-0 h-full w-full max-w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-hidden={!mobileOpen}
          aria-label="Mobile navigation"
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
              const baseClass = `site-header-mobile-link block w-full rounded-lg px-4 py-3 text-left text-[0.9375rem] font-medium ${
                active ? "site-header-mobile-link--active" : ""
              }`;
              const aiClass = `site-header-link site-header-link--ai flex items-center gap-2 rounded-full px-4 py-2.5 ${
                active ? "text-[var(--color-primary)]" : ""
              }`;

              if (link.isRoute) {
                return (
                  <Link key={link.id} href={link.href} className={baseClass} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                );
              }

              const mobileLink = (
                <a
                  key={link.id}
                  href={link.href}
                  className={link.isAi ? aiClass : baseClass}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.isAi && (
                    <Sparkles size={15} strokeWidth={2.25} className="site-header-ai-icon shrink-0" aria-hidden />
                  )}
                  {link.label}
                </a>
              );

              if (link.isAi) {
                return (
                  <span key={link.id} className="site-header-ai-border site-header-ai-border--mobile">
                    {mobileLink}
                  </span>
                );
              }

              return mobileLink;
            })}
          </nav>

          <div className="px-6 pb-8 pt-4 flex flex-col gap-3 border-t border-[var(--color-border)]">
            <Link
              href="/book-a-call"
              className="site-header-btn-outline w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Book A Call
            </Link>
            <Link
              href="/contact-us"
              className="site-header-btn-gradient w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </aside>
      </div>
      {contactOpen
        ? createPortal(
            <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
              <button
                type="button"
                className="contact-modal-backdrop"
                aria-label="Close contact form"
                onClick={closeContact}
              />
              <div className="contact-modal-dialog">
                <button
                  type="button"
                  className="contact-modal-close"
                  aria-label="Close"
                  onClick={closeContact}
                >
                  <FaTimes size={14} />
                </button>
                <ContactForm embedded />
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
