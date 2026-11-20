import Link from "next/link";
import SiteContainer from "./SiteContainer";
import BrandLockup from "./BrandLockup";
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
  { label: "Dedicated Teams", href: "/#services" },
  { label: "AI & Automation", href: "/#services" },
  { label: "Digital Transformation", href: "/#services" },
  { label: "Cloud & DevOps", href: "/#services" },
  { label: "Staff Augmentation", href: "/#services" },
  { label: "Product Engineering", href: "/#services" },
];

const industryLinks = [
  { label: "Healthcare", href: "/#industries" },
  { label: "Retail & E-Commerce", href: "/#industries" },
  { label: "Transport", href: "/#industries" },
  { label: "Education", href: "/#industries" },
  { label: "Real Estate", href: "/#industries" },
  { label: "Travel", href: "/#industries" },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Work", href: "/work" },
  { label: "Our Team", href: "/#team" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Book a Call", href: "/book-a-call" },
  { label: "Contact", href: "/contact-us" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/logic-lume",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/logiclume/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://facebook.com",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://wa.me/919205210930",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

function officeRegionTitle(office) {
  if (office.id === primaryOffice.id) return "India";
  return office.label.replace(" — Head office", "");
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <SiteContainer className="site-footer-shell">
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <BrandLockup className="site-footer-logo" />
            <p className="site-footer-tagline">
              Product engineering for startups and enterprises — web, mobile, AI,
              and platforms.
            </p>
            <div className="site-footer-contact">
              <a href="tel:+919205210930">+91 92052 10930</a>
              <a href="mailto:info@logiclume.com">info@logiclume.com</a>
            </div>
            <div className="site-footer-social" aria-label="Social media">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="site-footer-social-link"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <nav className="site-footer-nav" aria-label="Footer">
            <div className="site-footer-col">
              <h3 className="site-footer-col-heading">Services</h3>
              <ul className="site-footer-col-list">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer-col">
              <h3 className="site-footer-col-heading">Solutions</h3>
              <ul className="site-footer-col-list">
                {solutionLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer-col">
              <h3 className="site-footer-col-heading">Industries</h3>
              <ul className="site-footer-col-list">
                {industryLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer-col">
              <h3 className="site-footer-col-heading">Company</h3>
              <ul className="site-footer-col-list">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <section className="site-footer-offices" aria-labelledby="footer-offices-title">
          <h2 id="footer-offices-title" className="site-footer-offices-label">
            Offices
          </h2>
          <ul className="site-footer-offices-list">
            {allOffices.map((office) => {
              const isHq = office.id === primaryOffice.id;
              return (
                <li key={office.id}>
                  <p className="site-footer-office-region">
                    {officeRegionTitle(office)}
                    {isHq ? <span> HQ</span> : null}
                  </p>
                  <p className="site-footer-office-address">
                    {office.line1}, {office.line2}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        <div className="site-footer-bar">
          <p className="site-footer-bar-copy">
            © {currentYear} Logic <span>Lume</span>. All rights reserved.
          </p>
          <p className="site-footer-bar-meta">80+ projects · 150+ team</p>
          <nav className="site-footer-bar-legal" aria-label="Legal">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
            <Link href="/contact-us">Contact</Link>
          </nav>
        </div>
      </SiteContainer>
    </footer>
  );
}
