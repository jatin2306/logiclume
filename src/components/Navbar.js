"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";
import AiNavButton from "./AiNavButton";
import NavMegaPanel from "./NavMegaPanel";

const primaryLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services", hasDropdown: true },
  { href: "#portfolio", label: "Portfolio" },
];

const secondaryLinks = [
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
];

const allSectionIds = ["home", "contact", ...primaryLinks, ...secondaryLinks].map((l) =>
  typeof l === "string" ? l : l.href.replace("#", "")
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [megaMenu, setMegaMenu] = useState(null);
  const [promoVisible, setPromoVisible] = useState(true);

  const updateActiveSection = useCallback(() => {
    const offset = 120;
    let current = "home";
    for (const id of allSectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) current = id;
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      updateActiveSection();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActiveSection]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const renderNavLink = (link) => {
    const isActive = activeSection === link.href.replace("#", "");

    if (link.hasDropdown) {
      return (
        <a
          key={link.href}
          href={link.href}
          onMouseEnter={() => setMegaMenu("services")}
          className={`nav-link ${isActive ? "nav-link-active" : ""} ${megaMenu === "services" ? "nav-link-mega-open" : ""}`}
        >
          {link.label}
          <ChevronDown
            size={14}
            strokeWidth={2.5}
            className={`nav-chevron transition-transform duration-300 ${megaMenu === "services" ? "rotate-180" : ""}`}
          />
        </a>
      );
    }

    return (
      <a
        key={link.href}
        href={link.href}
        className={`nav-link ${isActive ? "nav-link-active" : ""}`}
      >
        {link.label}
      </a>
    );
  };

  return (
    <>
      {promoVisible && (
        <div className="fixed top-0 left-0 right-0 z-[60] nav-promo-bar">
          <div className="site-wrap">
            <div className="site-container site-container-inner py-2.5 flex items-center justify-center text-sm relative">
            <p className="text-white/90 text-center pr-8">
              Free strategy consultation —{" "}
              <a href="#contact" className="text-white font-semibold underline underline-offset-2 hover:no-underline">
                book a call
              </a>
            </p>
            <button
              onClick={() => setPromoVisible(false)}
              aria-label="Dismiss"
              className="absolute right-4 p-1 text-white/50 hover:text-white transition"
            >
              <X size={15} />
            </button>
            </div>
          </div>
        </div>
      )}

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          promoVisible ? "top-9" : "top-0"
        }`}
        onMouseLeave={() => setMegaMenu(null)}
      >
        <div className="relative">
          <div className="site-wrap pt-4">
            {/* Desktop */}
            <div className="hidden lg:block site-container relative">
              <div
                className={`nav-marquee-wrap transition-all duration-500 ${
                  scrolled ? "nav-marquee-wrap-scrolled" : ""
                } ${megaMenu ? "nav-marquee-wrap-dropdown-open" : ""}`}
              >
                <div className="nav-shell-inner">
                  <div className="flex items-center justify-between h-[4.5rem] site-container-inner">
              <Link href="/" className="flex-none shrink-0" aria-label="DeopersIndia home">
                <div className="relative w-40 xl:w-44 h-11">
                  <Image
                    src="/images/logo.jpeg"
                    alt="DeopersIndia logo"
                    title="DeopersIndia"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

                    <nav className="flex items-center gap-1 xl:gap-2">
                      {primaryLinks.map(renderNavLink)}
                      <span className="nav-divider hidden xl:block" aria-hidden="true" />
                      {secondaryLinks.map(renderNavLink)}
                    </nav>

                    <div className="flex items-center gap-3 flex-none">
                      <AiNavButton
                        variant="desktop"
                        isOpen={megaMenu === "ai"}
                        onMouseEnter={() => setMegaMenu("ai")}
                      />

                      <a href="#contact" className="nav-contact-btn group">
                        <span>Contact Us</span>
                        <ArrowUpRight size={16} strokeWidth={2.25} className="nav-contact-btn-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <NavMegaPanel type={megaMenu} />
            </div>

            {/* Mobile */}
            <div
              className={`lg:hidden site-container nav-marquee-wrap transition-all duration-300 ${
                scrolled ? "nav-marquee-wrap-scrolled" : ""
              }`}
            >
              <div className="nav-shell-inner flex items-center justify-between site-container-inner h-[3.75rem]">
            <Link href="/" className="relative w-36 h-10" aria-label="DeopersIndia home">
              <Image
                src="/images/logo.jpeg"
                alt="DeopersIndia logo"
                title="DeopersIndia"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

              <div className="flex items-center gap-2">
                <AiNavButton variant="compact" />
                <button
                  onClick={() => setOpen(!open)}
                  aria-label={open ? "Close menu" : "Open menu"}
                  className="nav-menu-toggle"
                >
                  {open ? <FaTimes size={18} /> : <FaBars size={18} />}
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-4" aria-hidden="true" />

        {/* Mobile drawer */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ top: promoVisible ? "2.25rem" : "0" }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <aside
            className={`absolute top-0 right-0 h-full w-full max-w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
              <span className="font-display text-lg font-bold text-[var(--color-text)]">Menu</span>
              <button onClick={() => setOpen(false)} className="nav-menu-toggle">
                <FaTimes size={18} />
              </button>
            </div>

            <nav className="px-4 py-4 flex flex-col gap-1">
              <AiNavButton variant="mobile" onNavigate={() => setOpen(false)} />

              {[...primaryLinks, ...secondaryLinks].map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`nav-mobile-link ${isActive ? "nav-mobile-link-active" : ""}`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="px-6 pb-8 mt-auto border-t border-[var(--color-border)] pt-6">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="nav-contact-btn w-full justify-center py-3.5 group"
              >
                <span>Contact Us</span>
                <ArrowUpRight size={16} strokeWidth={2.25} className="nav-contact-btn-arrow" />
              </a>
            </div>
          </aside>
        </div>
      </header>

      <div
        className={`shrink-0 transition-all duration-500 ${
          promoVisible ? "h-[5.75rem] lg:h-[6.75rem]" : "h-[4.5rem] lg:h-[5.75rem]"
        }`}
        aria-hidden="true"
      />
    </>
  );
}
