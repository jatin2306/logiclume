import Link from "next/link";
import Image from "next/image";
import SiteContainer from "./SiteContainer";
import { allOffices, primaryOffice } from "@/data/offices";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import "./footer.css";

const serviceLinks = [
  { label: "Website Development", href: "/#services" },
  { label: "Mobile Apps", href: "/#services" },
  { label: "UI/UX Design", href: "/#services" },
  { label: "E-Commerce", href: "/#services" },
  { label: "Custom Software", href: "/#services" },
  { label: "Digital Marketing", href: "/#services" },
];

const solutionLinks = [
  { label: "Dedicated Development Teams", href: "/#services" },
  { label: "AI & Automation", href: "/#services" },
  { label: "Digital Transformation", href: "/#services" },
  { label: "Cloud & DevOps", href: "/#services" },
  { label: "Staff Augmentation", href: "/#services" },
  { label: "Product Engineering", href: "/#services" },
];

const industryLinks = [
  { label: "Healthcare & Wellness", href: "/#industries" },
  { label: "Retail & E-Commerce", href: "/#industries" },
  { label: "Transport & Mobility", href: "/#industries" },
  { label: "Education & EdTech", href: "/#industries" },
  { label: "Real Estate & PropTech", href: "/#industries" },
  { label: "Travel & Tourism", href: "/#industries" },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Our Team", href: "/#team" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Book a Call", href: "/book-a-call" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/deopers-india",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/deopersindia/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://facebook.com",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://wa.me/919758403169",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

function officeRegionTitle(office) {
  if (office.id === primaryOffice.id) return "India";
  if (office.id === "uae") return "United Arab Emirates";
  return office.label.replace(" — Head office", "");
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <SiteContainer className="site-footer-shell">
        <section className="site-footer-offices" aria-labelledby="footer-offices-title">
          <div className="site-footer-offices-top">
            <Link href="/" className="site-footer-offices-logo" aria-label="DeopersIndia home">
              <Image
                src="/images/logo.png"
                alt="DeopersIndia"
                width={168}
                height={44}
                className="site-footer-offices-logo-img"
              />
            </Link>
            <div className="site-footer-offices-social" aria-label="Social media">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="site-footer-offices-social-link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="site-footer-offices-divider" role="presentation" />

          <div className="site-footer-offices-body">
            <h2 id="footer-offices-title" className="site-footer-offices-title">
              Our offices
            </h2>
            <ul className="site-footer-offices-grid">
              {allOffices.map((office) => (
                <li key={office.id} className="site-footer-offices-item">
                  <h3 className="site-footer-offices-region">
                    {officeRegionTitle(office)}
                    {office.id === primaryOffice.id ? (
                      <span className="site-footer-offices-hq"> · HQ</span>
                    ) : null}
                  </h3>
                  <p className="site-footer-offices-address">
                    {office.line1}
                    <br />
                    {office.line2}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="site-footer-links-band">
          <div className="site-footer-links-inner">
            <nav className="site-footer-col" aria-label="Services">
              <h3 className="site-footer-col-heading">Services</h3>
              <ul className="site-footer-col-list">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="site-footer-col" aria-label="Solutions">
              <h3 className="site-footer-col-heading">Solutions</h3>
              <ul className="site-footer-col-list">
                {solutionLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="site-footer-col" aria-label="Industries">
              <h3 className="site-footer-col-heading">Industries</h3>
              <ul className="site-footer-col-list">
                {industryLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="site-footer-col" aria-label="Company">
              <h3 className="site-footer-col-heading">Company</h3>
              <ul className="site-footer-col-list">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="site-footer-bar">
          <p className="site-footer-bar-copy">
            © {currentYear}{" "}
            <span className="site-footer-bar-brand">
              Deopers<span className="site-footer-bar-accent">India</span>
            </span>
            . All rights reserved.
          </p>

          <div className="site-footer-bar-badge" aria-label="Client delivery">
            <span className="site-footer-bar-badge-mark" aria-hidden>
              140+
            </span>
            <span className="site-footer-bar-badge-text">Projects delivered</span>
          </div>

          <nav className="site-footer-bar-legal" aria-label="Legal">
            <Link href="/#contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </nav>
        </div>
      </SiteContainer>
    </footer>
  );
}
