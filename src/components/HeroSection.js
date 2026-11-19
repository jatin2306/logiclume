import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";
import { CheckCircle2, Rocket, Users, Award, ArrowUpRight } from "lucide-react";

const highlights = [
  { icon: Rocket, title: "End-to-End Delivery", text: "From discovery and design to development, launch, and ongoing support." },
  { icon: Users, title: "Dedicated Team", text: "Skilled developers, designers, and strategists focused on your success." },
  { icon: Award, title: "Quality First", text: "Clean code, modern architecture, and rigorous testing on every project." },
];

const capabilities = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "E-Commerce",
  "Custom Software",
  "SEO & Marketing",
  "Cloud & DevOps",
  "AI Integration",
];

export default function HeroSection() {
  return (
    <section className="about-section home-section section-surface">
      <SiteContainer>
        <div className="home-section-layout about-layout">
          <div className="about-copy">
            <span className="section-label-light about-label">About Logic Lume</span>

            <SectionHeading
              centered={false}
              compact
              title="Building Future-Ready Digital Products for Modern Businesses"
              twoColor
              coloredWords={3}
              className="about-heading mb-0 md:mb-0"
              description={[
                "Logic Lume is a modern IT solutions company helping startups, SMEs, and enterprises establish a powerful digital presence through cutting-edge technology and thoughtful design.",
                "We combine product thinking with engineering excellence to deliver websites, mobile applications, and custom software that drive real business growth.",
              ]}
            />

            <ul className="about-highlights">
              {highlights.map(({ icon: Icon, title, text }) => (
                <li key={title} className="about-highlight group">
                  <div className="about-highlight-icon icon-badge-blue flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[var(--color-text)] text-sm sm:text-base">{title}</h4>
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-0.5 leading-snug">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="about-actions">
              <a
                href="#services"
                className="about-btn about-btn-primary"
              >
                Our Services
                <ArrowUpRight size={16} />
              </a>
              <a
                href="/contact-us"
                className="about-btn about-btn-outline"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          <div className="about-panel relative">
            <div className="about-panel-glow" aria-hidden="true" />

            <div className="about-panel-card home-card card-accent-blue">
              <div className="about-panel-head">
                <p className="text-[var(--color-primary)] text-xs sm:text-sm font-bold uppercase tracking-wider">
                  What We Build
                </p>
                <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-[rgba(0,102,245,0.12)] text-[var(--color-primary)]">
                  8+ services
                </span>
              </div>

              <div className="about-cap-grid">
                {capabilities.map((item) => (
                  <div key={item} className="about-cap-item">
                    <CheckCircle2 size={14} className="text-[var(--color-accent)] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="about-stats">
                {[
                  { val: "99%", label: "Satisfaction", color: "primary" },
                  { val: "24/7", label: "Support", color: "accent" },
                  { val: "100%", label: "On-Time", color: "primary" },
                ].map((s) => (
                  <div key={s.label} className="about-stat">
                    <p
                      className={`font-display font-bold ${
                        s.color === "primary" ? "text-[var(--color-primary)]" : "text-[var(--color-accent)]"
                      }`}
                    >
                      {s.val}
                    </p>
                    <p className="about-stat-label">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
