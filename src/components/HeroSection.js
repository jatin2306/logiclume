import SectionHeading from "./SectionHeading";
import { CheckCircle2, Rocket, Users, Award } from "lucide-react";

const highlights = [
  { icon: Rocket, title: "End-to-End Delivery", text: "From discovery and design to development, launch, and ongoing support." },
  { icon: Users, title: "Dedicated Team", text: "Skilled developers, designers, and strategists focused on your success." },
  { icon: Award, title: "Quality First", text: "Clean code, modern architecture, and rigorous testing on every project." },
];

const capabilities = [
  "Website Development",
  "Mobile App Development",
  "UI/UX Design",
  "E-Commerce Solutions",
  "Custom Software",
  "SEO & Digital Marketing",
  "Cloud & DevOps",
  "AI Integration",
];

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-28 section-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

            <div className="mt-8 space-y-4">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl icon-badge-blue flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)]">{title}</h4>
                    <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href="#services"
                className="px-6 py-3 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold transition shadow-md shadow-[rgba(21,101,192,0.2)]"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white font-semibold transition"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          {/* Light accent card */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl opacity-30 blur-2xl" style={{ background: "var(--color-gradient)" }} />
            <div className="relative rounded-3xl overflow-hidden card-elevated card-accent-blue p-8 lg:p-10">
              <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider mb-6">
                What We Build
              </p>

              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-white border border-[rgba(21,101,192,0.1)] px-4 py-3 text-sm text-[var(--color-text)]"
                  >
                    <CheckCircle2 size={16} className="text-[var(--color-accent)] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-[rgba(21,101,192,0.12)]">
                {[
                  { val: "99%", label: "Client Satisfaction", color: "primary" },
                  { val: "24/7", label: "Support Available", color: "accent" },
                  { val: "100%", label: "On-Time Delivery", color: "primary" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className={`font-display text-2xl font-bold ${
                      s.color === "primary" ? "text-[var(--color-primary)]" : "text-[var(--color-accent)]"
                    }`}>
                      {s.val}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
