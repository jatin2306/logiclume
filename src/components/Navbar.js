"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";
import AiNavButton from "./AiNavButton";
import NavMegaPanel from "./NavMegaPanel";
import "./nav-hero.css";

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
  const [onHero, setOnHero] = useState(true);
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

  const updateHeroState = useCallback(() => {
    const hero = document.getElementById("home") || document.getElementById("home-hero");
    if (!hero) {
      setOnHero(false);
      return;
    }
    const spacer = document.querySelector(".dp-nav-spacer");
    const navOffset = spacer?.getBoundingClientRect().height ?? 104;
    setOnHero(hero.getBoundingClientRect().bottom > navOffset + 8);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      updateActiveSection();
      updateHeroState();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActiveSection, updateHeroState]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    document.documentElement.classList.toggle("dp-promo-hidden", !promoVisible);
  }, [promoVisible]);

  const closeMegaMenu = useCallback(() => setMegaMenu(null), []);

  const navModeClass = onHero ? "dp-nav-over-hero" : "dp-nav-solid";
  const navStateClass = [
    navModeClass,
    scrolled ? "dp-nav-scrolled" : "",
    megaMenu ? "dp-nav-dropdown-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const renderNavLink = (link) => {
    const isActive = activeSection === link.href.replace("#", "");

    if (link.hasDropdown) {
      return (
        <a
          key={link.href}
          href={link.href}
          onMouseEnter={() => setMegaMenu("services")}
          onClick={closeMegaMenu}
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
        onMouseEnter={closeMegaMenu}
        onClick={closeMegaMenu}
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
            <div className="site-container">
              <div className="site-container-inner py-2.5 flex items-center justify-center text-xs sm:text-sm relative">
                <p className="text-white/90 text-center px-8 sm:px-10 leading-snug">
                  Free strategy consultation —{" "}
                  <a
                    href="#contact"
                    className="text-white font-semibold underline underline-offset-2 hover:no-underline"
                  >
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
        </div>
      )}

      <div
        className={`dp-nav fixed left-0 right-0 z-50 transition-all duration-500 ${navStateClass} ${
          promoVisible ? "top-9" : "top-0"
        }`}
        onMouseLeave={closeMegaMenu}
      >
        {/* Desktop */}
        <div className="hidden lg:block site-wrap">
          <div className="site-container relative">
            <div
              className={`nav-marquee-wrap transition-all duration-500 ${
                scrolled ? "nav-marquee-wrap-scrolled" : ""
              } ${megaMenu ? "nav-marquee-wrap-dropdown-open" : ""}`}
            >
              <div className="nav-shell-inner">
                <div className="dp-nav-inner site-container-inner">
                  <Link
                    href="/"
                    className="flex-none shrink-0"
                    aria-label="DeopersIndia home"
                    onMouseEnter={closeMegaMenu}
                    onClick={closeMegaMenu}
                  >
                    <div className="relative w-[9.875rem] xl:w-[10.875rem] h-11 bg-transparent">
                      <Image
                        src="/images/logo.png"
                        alt="DeopersIndia logo"
                        title="DeopersIndia"
                        fill
                        sizes="(max-width: 1280px) 158px, 174px"
                        className="dp-nav-logo object-contain object-left bg-transparent"
                        priority
                      />
                    </div>
                  </Link>

                  <nav>
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

                    <a
                      href="#contact"
                      className="nav-contact-btn group"
                      onMouseEnter={closeMegaMenu}
                      onClick={closeMegaMenu}
                    >
                      <span>Contact Us</span>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={2.25}
                        className="nav-contact-btn-arrow"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <NavMegaPanel type={megaMenu} onClose={closeMegaMenu} />
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden site-wrap">
          <div
            className={`site-container nav-marquee-wrap transition-all duration-300 ${
              scrolled ? "nav-marquee-wrap-scrolled" : ""
            }`}
          >
            <div className="nav-shell-inner">
              <div className="dp-nav-inner site-container-inner">
                <Link
                  href="/"
                  className="relative flex shrink-0 items-center bg-transparent"
                  aria-label="DeopersIndia home"
                >
                  <span className="relative block w-[8.75rem] h-10 bg-transparent">
                    <Image
                      src="/images/logo.png"
                      alt="DeopersIndia logo"
                      title="DeopersIndia"
                      fill
                      sizes="140px"
                  className="dp-nav-logo object-contain object-left bg-transparent"
                  priority
                />
              </span>
            </Link>

              <div className="flex items-center gap-2 ml-auto">
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

        {/* Mobile drawer */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ top: promoVisible ? "2.25rem" : "0" }}
        >
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <aside
            className={`absolute top-0 right-0 h-full w-full max-w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
              <span className="font-display text-lg font-bold text-[var(--color-text)]">
                Menu
              </span>
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
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.25}
                  className="nav-contact-btn-arrow"
                />
              </a>
            </div>
          </aside>
        </div>
      </div>

      <div
        className={`dp-nav-spacer ${promoVisible ? "dp-nav-spacer-promo" : ""}`}
        aria-hidden="true"
      />
    </>
  );
}
