import Link from "next/link";
import Button from "./Button";
import SiteContainer from "./SiteContainer";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90%)] h-px"
        style={{ background: "var(--color-gradient)" }}
      />

      <div className="relative border-b border-[var(--color-border-dark)]">
        <SiteContainer className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Engineered to Scale
            </h3>
            <p className="text-[var(--color-text-muted-dark)] mt-1.5 text-sm">
              Ready to start your next digital project?
            </p>
          </div>
          <a href="/#contact">
            <Button variant="accent" size="lg" className="gap-2">
              Get in Touch <FaArrowRight size={14} />
            </Button>
          </a>
        </SiteContainer>
      </div>

      <SiteContainer className="relative py-10 lg:py-11">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <h3 className="font-display text-lg font-bold text-white mb-3">
              Deopers<span className="text-[var(--color-accent)]">India</span>
            </h3>
            <p className="text-[var(--color-text-muted-dark)] text-sm leading-relaxed mb-4">
              A modern IT solutions company delivering web development, mobile apps,
              UI/UX design, and digital marketing services worldwide.
            </p>
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.linkedin.com/company/deopers-india",
                  icon: FaLinkedinIn,
                  label: "DeopersIndia on LinkedIn",
                  hover: "hover:bg-[#0A66C2]",
                },
                { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook", hover: "hover:bg-[var(--color-primary)]" },
                { href: "https://www.instagram.com/deopersindia/", icon: FaInstagram, label: "Instagram", hover: "hover:bg-[var(--color-accent)]" },
                { href: "https://wa.me/919758403169", icon: FaWhatsapp, label: "WhatsApp", hover: "hover:bg-green-600" },
              ].map(({ href, icon: Icon, label, hover }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl card-dark flex items-center justify-center text-[var(--color-text-muted-dark)] hover:text-white ${hover} transition`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Services</h4>
            <ul className="space-y-3 text-sm text-[var(--color-text-muted-dark)]">
              {["Web Development", "Mobile Apps", "UI/UX Design", "E-Commerce", "Custom Software", "Digital Marketing"].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-[var(--color-accent-light)] transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-3 text-sm text-[var(--color-text-muted-dark)]">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Our Team", href: "#team" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[var(--color-accent-light)] transition">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Contact</h4>
            <div className="space-y-3 text-sm text-[var(--color-text-muted-dark)]">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                7th Floor, Noida, Uttar Pradesh (201301)
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-[var(--color-accent)] flex-shrink-0" />
                <a href="tel:+919758403169" className="hover:text-white transition">+91-9758403169</a>
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--color-accent)] flex-shrink-0" />
                <a href="mailto:info@deopersindia.com" className="hover:text-white transition">info@deopersindia.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-border-dark)] pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-[var(--color-text-muted-dark)]">
            © {currentYear}{" "}
            <span className="text-white font-medium">
              Deopers<span className="text-[var(--color-accent)]">India</span>
            </span>
            . All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[var(--color-text-muted-dark)]">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </SiteContainer>
    </footer>
  );
}
