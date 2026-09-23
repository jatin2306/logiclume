"use client";

import { Trophy, Star, Shield, BadgeCheck, Medal, Crown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

const awards = [
  {
    icon: Trophy,
    title: "Proven Track Record",
    description:
      "50+ successful projects delivered across web, mobile, and enterprise software with consistent client satisfaction.",
    badge: "blue",
  },
  {
    icon: Star,
    title: "Top-Rated Service",
    description:
      "Recognized for quality delivery, transparent communication, and exceeding client expectations on every engagement.",
    badge: "orange",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Industry-standard security practices, SSL encryption, and robust infrastructure on every project we deliver.",
    badge: "blue",
  },
  {
    icon: BadgeCheck,
    title: "Certified Expertise",
    description:
      "Skilled team proficient in React, Next.js, Node.js, Flutter, AWS, and modern development frameworks.",
    badge: "orange",
  },
  {
    icon: Medal,
    title: "Agile Methodology",
    description:
      "Iterative development with regular demos, sprint reviews, and flexible adaptation to changing requirements.",
    badge: "blue",
  },
  {
    icon: Crown,
    title: "Client-First Approach",
    description:
      "Dedicated project managers, clear timelines, and post-launch support that keeps your business running smoothly.",
    badge: "orange",
  },
];

const badgeClass = {
  blue: "icon-badge-blue",
  orange: "icon-badge-orange",
};

export default function AwardsSection() {
  return (
    <section className="home-section section-surface">
      <SiteContainer>
        <SectionHeading
          label="Why Choose Us"
          title="Recognized for Quality That Scales"
          description="We combine technical excellence with a commitment to delivering real business value on every project."
          centered
          twoColor
          coloredWords={2}
          className="home-section-head max-w-3xl mx-auto"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award.title}
              className="group rounded-2xl card-light p-8 hover:shadow-lg hover:border-[rgba(21,101,192,0.2)] transition-all duration-300"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${badgeClass[award.badge]} shadow-md`}>
                <award.icon size={26} />
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-[var(--color-text)]">
                {award.title}
              </h3>

              <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
