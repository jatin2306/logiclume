"use client";

import { ArrowUpRight } from "lucide-react";
import SiteContainer from "./SiteContainer";
import BrandLogoMark from "./BrandLogoMark";
import "./hero-section.css";

const stats = [
  { value: "140+", label: "Projects", tone: "blue" },
  { value: "80+", label: "Clients", tone: "orange" },
  { value: "100+", label: "Inhouse team", tone: "blue" },
  { value: "10+", label: "Years", tone: "orange" },
];

const ORBIT_SPARKS = 8;

export default function Hero() {
  return (
    <section className="dp-hero" id="home-hero" aria-label="DeopersIndia homepage hero">
      <div className="dp-hero-bg" aria-hidden="true">
        <div className="dp-hero-aurora" />
        <div className="dp-hero-noise" />
        <div className="dp-hero-grid-lines" />
        <div className="dp-hero-orb dp-hero-orb-a" />
        <div className="dp-hero-orb dp-hero-orb-b" />
      </div>

      <SiteContainer className="dp-hero-shell">
        <div className="dp-hero-layout">
          <div className="dp-hero-copy">
            <div className="dp-hero-eyebrow-wrap dp-hero-reveal dp-hero-reveal-d1">
              <span className="dp-hero-eyebrow-beam" aria-hidden="true" />
              <span className="dp-hero-eyebrow">
                <span className="dp-hero-eyebrow-dot" aria-hidden="true" />
                Product Engineering Studio
              </span>
            </div>

            <h1 className="dp-hero-title dp-hero-reveal dp-hero-reveal-d2">
              <span className="dp-hero-title-line">Build software products</span>
              <span className="dp-hero-title-line dp-hero-title-line--accent">
                that scale with confidence
              </span>
            </h1>

            <p className="dp-hero-lead dp-hero-reveal dp-hero-reveal-d3">
              We design and ship web apps, mobile products, and enterprise platforms
              for startups and global brands — from strategy to production.
            </p>

            <div className="dp-hero-actions dp-hero-reveal dp-hero-reveal-d3">
              <a href="#contact" className="dp-hero-btn-primary">
                Let&apos;s Work Together
                <span className="dp-hero-btn-icon" aria-hidden="true">
                  <ArrowUpRight size={17} />
                </span>
              </a>
              <a href="#featured-work" className="dp-hero-btn-secondary">
                Explore Our Work
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="dp-hero-trust dp-hero-reveal dp-hero-reveal-d4">
              {stats.map((stat, i) => (
                <div key={stat.label} className="dp-hero-trust-item">
                  {i > 0 && <span className="dp-hero-trust-divider" aria-hidden="true" />}
                  <div className="dp-hero-trust-stat">
                    <span
                      className={`dp-hero-trust-val ${
                        stat.tone === "blue"
                          ? "dp-hero-trust-val--blue"
                          : "dp-hero-trust-val--orange"
                      }`}
                    >
                      {stat.value}
                    </span>
                    <span className="dp-hero-trust-lbl">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dp-hero-visual dp-hero-reveal dp-hero-reveal-d4" aria-hidden="true">
            <div className="dp-hero-brand">
              <div className="dp-hero-brand-aura" />

              <div className="dp-hero-brand-stage">
                <div className="dp-hero-brand-ring dp-hero-brand-ring--outer" />
                <div className="dp-hero-brand-ring dp-hero-brand-ring--spin-a" />
                <div className="dp-hero-brand-ring dp-hero-brand-ring--spin-b" />
                <div className="dp-hero-brand-sweep" />

                <div className="dp-hero-brand-orbit">
                  {Array.from({ length: ORBIT_SPARKS }, (_, i) => (
                    <span
                      key={i}
                      className="dp-hero-brand-spark-arm"
                      style={{ "--spark-i": i }}
                    >
                      <span
                        className={`dp-hero-brand-spark ${i % 2 === 0 ? "dp-hero-brand-spark--blue" : "dp-hero-brand-spark--orange"}`}
                      />
                    </span>
                  ))}
                </div>

                <div className="dp-hero-brand-core">
                  <div className="dp-hero-brand-core-ring">
                    <BrandLogoMark size="hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
