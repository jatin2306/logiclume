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
    <section className="home-section section-surface">
      <SiteContainer>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          <div>
            <span className="section-label-light mb-6">About DeopersIndia</span>

            <SectionHeading
              centered={false}
              title="Building Future-Ready Digital Products for Modern Businesses"
              twoColor
              coloredWords={3}
              description={[
                "DeopersIndia is a modern IT solutions company helping startups, SMEs, and enterprises establish a powerful digital presence through cutting-edge technology and thoughtful design.",
                "We combine product thinking with engineering excellence to deliver websites, mobile applications, and custom software that drive real business growth.",
              ]}
            />

            <div className="mt-8 space-y-5">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl icon-badge-blue flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)]">{title}</h4>
                    <p className="text-sm text-[var(--color-text-muted)] mt-0.5 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold transition shadow-md shadow-[rgba(21,101,192,0.2)]"
              >
                Our Services
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white font-semibold transition"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl pointer-events-none"
              style={{ background: "var(--color-gradient)" }}
            />

            <div className="relative home-card card-accent-blue p-5 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between mb-6">
                <p className="text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider">
                  What We Build
                </p>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-[rgba(21,101,192,0.12)] text-[var(--color-primary)]">
                  8+ services
                </span>
              </div>

              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-2.5">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl bg-white border border-[rgba(21,101,192,0.08)] px-3.5 py-3 text-sm text-[var(--color-text)] hover:border-[rgba(21,101,192,0.2)] hover:shadow-sm transition"
                  >
                    <CheckCircle2 size={15} className="text-[var(--color-accent)] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 pt-8 border-t border-[rgba(21,101,192,0.1)]">
                {[
                  { val: "99%", label: "Satisfaction", color: "primary" },
                  { val: "24/7", label: "Support", color: "accent" },
                  { val: "100%", label: "On-Time", color: "primary" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-2 sm:p-3 rounded-xl bg-white/80 min-w-0">
                    <p className={`font-display text-base sm:text-xl font-bold ${
                      s.color === "primary" ? "text-[var(--color-primary)]" : "text-[var(--color-accent)]"
                    }`}>
                      {s.val}
                    </p>
                    <p className="text-[10px] font-medium text-[var(--color-text-muted)] mt-1 uppercase tracking-wide">
                      {s.label}
                    </p>
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
