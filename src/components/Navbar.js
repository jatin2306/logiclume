"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import NavbarDropdown from "./NavbarDropdown";
import Button from "./Button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  const servicesItems = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/mobile-app-development", label: "Mobile App Development" },
    { href: "/services/ui-ux-design", label: "UI/UX Design" },
    { href: "/services/ecommerce-development", label: "E-Commerce Development" },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/seo-services", label: "SEO Services" },
  ];

  const technologiesItems = [
    { href: "/technologies/react", label: "React.js" },
    { href: "/technologies/nextjs", label: "Next.js" },
    { href: "/technologies/nodejs", label: "Node.js" },
    { href: "/technologies/dotnet", label: ".NET" },
    { href: "/technologies/laravel", label: "Laravel" },
    { href: "/technologies/aws", label: "AWS Cloud" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
    >
      {/* Gradient top bar */}
      <div
        className="w-full h-[3px]"
        style={{
          background: "var(--color-gradient)",
        }}
      />

      {/* === Desktop Navbar Single Row === */}
      <div className="hidden lg:flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 h-20">

        {/* Logo */}
        <Link href="/" className="flex-none">
          <div className="relative w-56 xl:w-xs h-18">
            <Image
              src="/images/logo.jpeg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Center Menu */}
        <nav className="flex items-center justify-end xl:justify-center gap-6 font-semibold text-lg xl:text-base w-full ">
          <a
            href="#home"
            className="hover:text-[var(--color-secondary)] transition"
          >
            Home
          </a>

          <a href="#about" className="hover:text-[var(--color-secondary)] transition">About</a>
          <a href="#services" className="hover:text-[var(--color-secondary)] transition">Services</a>
          <a href="#testimonials" className="hover:text-[var(--color-secondary)] transition">Testimonials</a>
          <a href="#team" className="hover:text-[var(--color-secondary)] transition">Team</a>
          {/* <a href="#portfolio" className="hover:text-[var(--color-secondary)] transition">Portfolio</a> */}
          <a href="#contact" className="hover:text-[var(--color-secondary)] transition">Contact</a>
        </nav>

        {/* Right Buttons */}
        <div className="hidden xl:flex items-center gap-3 flex-none">
          <a
            href="tel:+919758403169"
            className="flex items-center gap-2 text-[var(--color-black)] font-semibold hover:text-[var(--color-secondary)] transition"
          >
            <FaPhone className="text-[var(--color-accent)]" /> +91-9758403169
          </a>
        </div>

      </div>

      {/* === Mobile Hamburger === */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
          <Link href="/" className="flex items-center flex-none">
            <div className="relative w-48 h-16">
              <Image src="/images/logo.jpeg" alt="Logo" fill className="object-contain" priority />
            </div>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-2 rounded-md bg-slate-900 text-white shadow-lg hover:bg-slate-800 transition"
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setOpen(false)}
        />

        {/* Mobile Drawer */}
        <aside
          className={`fixed top-0 left-0 h-full w-80 max-w-[85%] z-50 bg-white transform transition-transform duration-300
          border-r border-[var(--color-border)] shadow-[4px_0_15px_rgba(0,0,0,0.1)]
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4">
            <div className="relative w-48 h-16">
              <Image src="/images/logo.jpeg" alt="Logo" fill className="object-contain" />
            </div>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              <FaTimes size={22} />
            </button>
          </div>
          <div className="w-full h-[3px]" style={{ background: "var(--color-gradient)" }} />

          {/* Scrollable Nav */}
          <nav className="px-4 py-4 overflow-y-auto max-h-[calc(100vh-180px)] flex flex-col gap-3">
            <ul className="flex flex-col gap-2 font-medium text-gray-900 text-[15px]">

              {/* Home */}
              <li>
                <a
                  href="#home"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md transition hover:bg-[var(--color-secondary)]/10"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md transition hover:bg-[var(--color-secondary)]/10"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md transition hover:bg-[var(--color-secondary)]/10"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md transition hover:bg-[var(--color-secondary)]/10"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md transition hover:bg-[var(--color-secondary)]/10"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#team"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md transition hover:bg-[var(--color-secondary)]/10"
                >
                  Team
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md transition hover:bg-[var(--color-secondary)]/10"
                >
                  Contact
                </a>
              </li>

            </ul>
          </nav>
        </aside>
      </div>
    </header>
  );
}
