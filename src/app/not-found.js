"use client";

import Link from "next/link";
import Button from "@/components/Button";
import SiteContainer from "@/components/SiteContainer";
import { ArrowUpRight, Home } from "lucide-react";

const helpfulLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/book-a-call", label: "Book a call" },
  { href: "/#contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <div className="not-found-page">
      <SiteContainer className="not-found-inner">
        <span className="section-label-light not-found-eyebrow">404</span>
        <h1 className="not-found-title">
          This page <span className="not-found-title-accent">isn&apos;t here</span>
        </h1>
        <p className="not-found-lead">
          The link may be outdated or mistyped. Head back home or jump to a section below.
        </p>

        <div className="not-found-actions">
          <Button href="/" variant="accent" size="md" className="gap-2 rounded-xl">
            <Home size={18} aria-hidden />
            Go to homepage
          </Button>
          <Link href="/book-a-call" className="not-found-secondary">
            Book a call
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>

        <nav className="not-found-links" aria-label="Helpful links">
          <p className="not-found-links-label">Quick links</p>
          <ul>
            {helpfulLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </SiteContainer>
    </div>
  );
}
