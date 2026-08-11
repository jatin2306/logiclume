"use client";

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
    <section className="py-12 section-light border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          Trusted by growing businesses
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee w-max">
          {items.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex items-center justify-center mx-8 px-8 py-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] min-w-[180px]"
            >
              <span className="font-display text-lg font-bold text-[var(--color-text-muted)] tracking-wide">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
