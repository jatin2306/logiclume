"use client";

import Image from "next/image";
import { Building2, Globe2, Sparkles } from "lucide-react";

const marqueeItems = [
  { id: "idfc", name: "IDFC Bank", image: "/images/portfolio/first-rewards.jpg" },
  { id: "amex", name: "American Express", image: "/images/portfolio/shopwise-home.png" },
  { id: "tr-capital", name: "TR Capital", image: "/images/portfolio/tr-capital.png" },
  { id: "kayzen", name: "Kayzen", image: "/images/portfolio/kayzen.webp" },
  { id: "pharmatop", name: "Pharmatop", image: "/images/portfolio/pharmatop.webp" },
  { id: "wasalt", name: "Wasalt", image: "/images/portfolio/wasalt-hero.png" },
  { id: "risk-roses", name: "Risk & Roses", image: "/images/portfolio/risk-and-roses.png" },
  { id: "goldsky", name: "Goldsky", image: "/images/portfolio/goldsky.png" },
  { id: "plutheia", name: "Plutheia", image: "/images/portfolio/plutheia-pricing.png" },
  { id: "arcx", name: "Arcx", image: "/images/portfolio/arcx.webp" },
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
            width={32}
            height={20}
            className="home-trust-marquee-logo-img"
          />
        ) : (
          Icon && <Icon className="home-trust-marquee-icon" size={15} strokeWidth={2} />
        )}
      </span>
      <span className="home-trust-marquee-brand-name">{item.name}</span>
    </span>
  );
}

export default function HomeTrustStrip() {
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
