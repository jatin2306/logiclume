"use client";

import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";
import { Search, PenTool, Code, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  { step: "01", icon: Search, title: "Discovery & Strategy", description: "We analyze your business goals, target audience, and technical requirements to craft a clear product roadmap.", badge: "blue" },
  { step: "02", icon: PenTool, title: "Design & Prototype", description: "Wireframes, UI designs, and interactive prototypes that validate the user experience before development begins.", badge: "orange" },
  { step: "03", icon: Code, title: "Development & Testing", description: "Agile development with clean code, regular demos, and rigorous QA to ensure quality at every milestone.", badge: "blue" },
  { step: "04", icon: Rocket, title: "Launch & Deploy", description: "Smooth deployment to production with performance optimization, security hardening, and monitoring setup.", badge: "orange" },
  { step: "05", icon: HeadphonesIcon, title: "Support & Growth", description: "Ongoing maintenance, feature updates, and strategic guidance to help your product evolve and scale.", badge: "blue" },
];

const badgeClass = { blue: "icon-badge-blue", orange: "icon-badge-orange" };

export default function ProcessSection() {
  return (
    <section className="home-section section-surface-blue bg-grid-light">
      <SiteContainer>
        <SectionHeading
          label="Our Process"
          title="From Idea to Launch in Five Steps"
          description="A proven, transparent workflow that keeps you informed and in control at every stage of your project."
          centered
          twoColor
          coloredWords={2}
          className="home-section-head max-w-3xl mx-auto"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6">
          {steps.map((item, index) => (
            <div key={item.step} className="relative group">
              {index < steps.length - 1 && (
                <div
                  className="process-connector absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px"
                  style={{ background: "linear-gradient(90deg, rgba(21,101,192,0.3), transparent)" }}
                />
              )}

              <div className="card-elevated rounded-2xl p-6 h-full bg-white hover:shadow-lg transition duration-300 hover:-translate-y-1">
                <span className={`font-display text-3xl font-bold ${
                  item.badge === "blue" ? "text-[rgba(21,101,192,0.2)]" : "text-[rgba(245,130,32,0.25)]"
                } group-hover:opacity-80 transition`}>
                  {item.step}
                </span>

                <div className={`mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${badgeClass[item.badge]}`}>
                  <item.icon size={20} />
                </div>

                <h3 className="mt-4 font-bold text-[var(--color-text)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
