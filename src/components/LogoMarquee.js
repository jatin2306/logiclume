"use client";

import SiteContainer from "./SiteContainer";

const brands = [
  "TechStart",
  "HealthPlus",
  "RetailEdge",
  "FinFlow",
  "EduNext",
  "CloudSync",
  "AutoDrive",
  "MediaPulse",
  "PropTech",
  "FoodHub",
];

export default function LogoMarquee() {
  const items = [...brands, ...brands];

  return (
    <section className="py-14 section-surface border-y border-[var(--color-border)]">
      <SiteContainer className="mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Trusted by growing businesses worldwide
        </p>
      </SiteContainer>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-[var(--color-surface)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-[var(--color-surface)] to-transparent z-10 pointer-events-none" />

        <div className="home-marquee-track">
          {items.map((brand, i) => (
            <span key={`${brand}-${i}`} className="home-brand-pill">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
