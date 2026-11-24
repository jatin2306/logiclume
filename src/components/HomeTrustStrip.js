"use client";

import Image from "next/image";
import { Building2, Globe2, Sparkles } from "lucide-react";

const marqueeItems = [
  { id: "myclinicdesk", name: "MyClinicDesk", image: "/images/portfolio/myclinicdesk.png" },
  { id: "altuwell", name: "AltuWell", image: "/images/portfolio/altuwell.png" },
  { id: "careadjustor", name: "CareAdjustor", image: "/images/portfolio/careadjustor.png" },
  { id: "siderina", name: "Siderina", image: "/images/portfolio/siderina.png" },
  { id: "stillra", name: "Stillra", image: "/images/portfolio/stillra.png" },
  { id: "idfc", name: "IDFC Bank", image: "/images/portfolio/first-rewards.jpg" },
  { id: "amex", name: "American Express", image: "/images/portfolio/shopwise-home.png" },
  { id: "tr-capital", name: "TR Capital", image: "/images/portfolio/tr-capital.png" },
  { id: "wasalt", name: "Wasalt", image: "/images/portfolio/wasalt-hero.png" },
  { id: "risk-roses", name: "Risk & Roses", image: "/images/portfolio/risk-and-roses.png" },
  { id: "goldsky", name: "Goldsky", image: "/images/portfolio/goldsky.png" },
  { id: "plutheia", name: "Plutheia", image: "/images/portfolio/plutheia-pricing.png" },
  { id: "agarwal", name: "Agarwal", image: "/images/portfolio/agarwal-home.png" },
  { id: "motilal", name: "Motilal Oswal", icon: Building2 },
  { id: "global", name: "Global startups", icon: Globe2 },
  { id: "ai", name: "AI products", icon: Sparkles },
];

function MarqueeBrand({ item }) {
  const Icon = item.icon;

  return (
    <span className="home-trust-marquee-brand">
      <span className="home-trust-marquee-mark" aria-hidden>
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            width={56}
            height={36}
            className="home-trust-marquee-logo-img"
          />
        ) : (
          Icon && <Icon className="home-trust-marquee-icon" size={22} strokeWidth={2} />
        )}
      </span>
      <span className="home-trust-marquee-brand-name">{item.name}</span>
    </span>
  );
}

const heroNames = [
  "MyClinicDesk",
  "AltuWell",
  "CareAdjustor",
  "Siderina",
  "Stillra",
  "TR Capital",
  "Wasalt",
  "Goldsky",
];

export default function HomeTrustStrip({ variant = "marquee" }) {
  if (variant === "logos") {
    const loop = [...heroNames, ...heroNames];
    return (
      <section className="mi-hero-logos" aria-label="Trusted by global clients">
        <div className="site-wrap">
          <div className="mi-hero-logos-row">
            <p>Trusted by</p>
            <div className="mi-hero-logos-viewport">
              <ul className="mi-hero-logos-track">
                {loop.map((name, index) => (
                  <li key={`${name}-${index}`}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <section className="home-trust-marquee" aria-label="Trusted by global clients">
      <div className="site-wrap">
        <div className="home-trust-marquee-shell">
          <p className="home-trust-marquee-label">
            <span className="home-trust-marquee-label-strong">Trusted by 80+ global clients,</span>
            <span className="home-trust-marquee-label-sub">including enterprise &amp; growth-stage brands</span>
          </p>

          <div className="home-trust-marquee-viewport">
            <div className="home-trust-marquee-track">
              {loop.map((item, index) => (
                <MarqueeBrand key={`${item.id}-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
