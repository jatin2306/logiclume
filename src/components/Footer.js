import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Globe2, MapPin } from "lucide-react";
import Button from "./Button";
import SiteContainer from "./SiteContainer";
import { allOffices, primaryOffice } from "@/data/offices";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";

const serviceLinks = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "E-Commerce",
  "Custom Software",
  "Digital Marketing",
];

const companyLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Team", href: "/#team" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/deopers-india",
    icon: FaLinkedinIn,
    label: "DeopersIndia on LinkedIn",
    className: "site-footer-social-link--linkedin",
  },
  {
    href: "https://facebook.com",
    icon: FaFacebookF,
    label: "Facebook",
    className: "site-footer-social-link--facebook",
  },
  {
    href: "https://www.instagram.com/deopersindia/",
    icon: FaInstagram,
    label: "Instagram",
    className: "site-footer-social-link--instagram",
  },
  {
    href: "https://wa.me/919758403169",
    icon: FaWhatsapp,
    label: "WhatsApp",
    className: "site-footer-social-link--whatsapp",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const globalPills = allOffices.map((o) =>
    o.id === primaryOffice.id ? `${o.countryCode} · HQ` : o.countryCode
  );

  return (
    <footer className="site-footer">
      <div className="site-footer-glow site-footer-glow--blue" aria-hidden="true" />
      <div className="site-footer-glow site-footer-glow--orange" aria-hidden="true" />
      <div className="site-footer-bg bg-grid" aria-hidden="true" />

      <SiteContainer className="site-footer-cta-wrap">
        <div className="site-footer-cta">
          <div className="site-footer-cta-shine" aria-hidden="true" />
          <div className="site-footer-cta-copy">
            <span className="site-footer-cta-label">Let&apos;s build together</span>
            <h2 className="site-footer-cta-title">
              Engineered to scale your{" "}
              <span className="site-footer-cta-title-accent">next product</span>
            </h2>
            <p className="site-footer-cta-desc">
              Web, mobile, and enterprise platforms — from discovery to launch.
            </p>
          </div>
          <Button href="/#contact" variant="accent" size="lg" className="site-footer-cta-action gap-2 rounded-xl shadow-lg">
            Get in Touch
            <ArrowUpRight size={18} aria-hidden="true" />
          </Button>
        </div>
      </SiteContainer>

      <SiteContainer className="site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-brand-panel">
            <Link href="/" className="site-footer-logo-link" aria-label="DeopersIndia home">
              <Image
                src="/images/logo.png"
                alt="DeopersIndia"
                width={172}
                height={48}
                className="site-footer-logo h-10 w-auto"
              />
            </Link>
            <p className="site-footer-brand-tagline">
              A product engineering studio delivering web, mobile, UI/UX, and digital platforms for
              startups and enterprises worldwide.
            </p>
            <div className="site-footer-social" aria-label="Social media">
              {socialLinks.map(({ href, icon: Icon, label, className }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`site-footer-social-link ${className}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <nav className="site-footer-col" aria-label="Services">
            <h3 className="site-footer-col-title">
              <span className="site-footer-col-marker" aria-hidden="true" />
              Services
            </h3>
            <ul className="site-footer-link-list">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a href="/#services">{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer-col" aria-label="Company">
            <h3 className="site-footer-col-title">
              <span className="site-footer-col-marker" aria-hidden="true" />
              Company
            </h3>
            <ul className="site-footer-link-list">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer-col site-footer-contact-col">
            <h3 className="site-footer-col-title">
              <span className="site-footer-col-marker" aria-hidden="true" />
              Get in touch
            </h3>
            <a href="tel:+919758403169" className="site-footer-contact-card">
              <span className="site-footer-contact-icon" aria-hidden="true">
                <FaPhoneAlt size={14} />
              </span>
              <span>
                <span className="site-footer-contact-label">Phone</span>
                <span className="site-footer-contact-value">+91 9758403169</span>
              </span>
            </a>
            <a href="mailto:info@deopersindia.com" className="site-footer-contact-card">
              <span className="site-footer-contact-icon" aria-hidden="true">
                <FaEnvelope size={14} />
              </span>
              <span>
                <span className="site-footer-contact-label">Email</span>
                <span className="site-footer-contact-value">info@deopersindia.com</span>
              </span>
            </a>
          </div>
        </div>

        <section className="site-footer-locations" aria-labelledby="footer-locations-title">
          <header className="site-footer-locations-head">
            <span className="site-footer-section-icon" aria-hidden="true">
              <MapPin size={18} strokeWidth={2.25} />
            </span>
            <div>
              <p className="site-footer-section-kicker">Where we work</p>
              <h3 id="footer-locations-title" className="site-footer-section-title">
                Global delivery hubs
              </h3>
            </div>
          </header>
          <ul className="site-footer-location-grid">
            {allOffices.map((office) => {
              const isHq = office.id === primaryOffice.id;
              return (
                <li
                  key={office.id}
                  className={`site-footer-location-card ${isHq ? "site-footer-location-card--hq" : ""}`}
                >
                  <div className="site-footer-location-top">
                    <span
                      className={`site-footer-office-badge ${isHq ? "site-footer-office-badge--hq" : ""}`}
                    >
                      {office.countryCode}
                      {isHq ? " · HQ" : ""}
                    </span>
                    <span className="site-footer-office-name">
                      {office.label.replace(" — Head office", "")}
                    </span>
                  </div>
                  <p className="site-footer-office-lines">
                    {office.line1}
                    <br />
                    {office.line2}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        <div className="site-footer-trust">
          <div className="site-footer-trust-left">
            <Globe2 size={18} className="site-footer-trust-icon" aria-hidden="true" />
            <span className="site-footer-trust-label">Global presence</span>
          </div>
          <div className="site-footer-global-pills">
            {globalPills.map((pill) => (
              <span key={pill} className="site-footer-global-pill">
                {pill}
              </span>
            ))}
            <span className="site-footer-global-note">50+ countries served</span>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p className="site-footer-copy">
            © {currentYear}{" "}
            <span className="site-footer-copy-brand">
              Deopers<span className="site-footer-copy-accent">India</span>
            </span>
            . All rights reserved.
          </p>
          <nav className="site-footer-legal" aria-label="Legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="site-footer-legal-dot" aria-hidden="true">
              ·
            </span>
            <Link href="/terms-of-service">Terms of Service</Link>
          </nav>
        </div>
      </SiteContainer>
    </footer>
  );
}
