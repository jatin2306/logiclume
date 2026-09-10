"use client";

import Image from "next/image";
import { ArrowUpRight, Globe, Smartphone, Cloud, Sparkles } from "lucide-react";
import SiteContainer from "./SiteContainer";
import "./hero-section.css";

const stats = [
  { value: "50+", label: "Projects", tone: "blue" },
  { value: "30+", label: "Clients", tone: "orange" },
  { value: "8+", label: "Experts", tone: "blue" },
  { value: "5+", label: "Years", tone: "orange" },
];

const productPills = [
  { icon: Globe, label: "Web Apps", tone: "blue" },
  { icon: Smartphone, label: "Mobile", tone: "orange" },
  { icon: Cloud, label: "Cloud", tone: "blue" },
  { icon: Sparkles, label: "AI", tone: "orange" },
];

const HERO_BG =
  "https://images.unsplash.com/photo-1639762681485-074b7f938ee0?auto=format&fit=crop&w=1920&q=85";

export default function Hero() {
  return (
    <section className="dp-hero" id="home-hero" aria-label="DeopersIndia homepage hero">
      <div className="dp-hero-bg" aria-hidden="true">
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="dp-hero-bg-img"
        />
        <div className="dp-hero-overlay" />
        <div className="dp-hero-grid-lines" />
        <div className="dp-hero-orb dp-hero-orb-a" />
        <div className="dp-hero-orb dp-hero-orb-b" />
      </div>

      <SiteContainer className="dp-hero-shell">
        <div className="dp-hero-layout">
          <div className="dp-hero-copy">
            <span className="dp-hero-eyebrow dp-hero-reveal dp-hero-reveal-d1">
              Product Engineering Studio
            </span>

            <h1 className="dp-hero-title dp-hero-reveal dp-hero-reveal-d2">
              Build software products
              <span className="dp-hero-title-accent">that scale with confidence</span>
            </h1>

            <p className="dp-hero-lead dp-hero-reveal dp-hero-reveal-d3">
              We design and ship web apps, mobile products, and enterprise platforms
              for startups and global brands — from strategy to production.
            </p>

            <div className="dp-hero-actions dp-hero-reveal dp-hero-reveal-d3">
              <a href="#contact" className="dp-hero-btn-primary">
                Let&apos;s Work Together
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="#featured-work" className="dp-hero-btn-secondary">
                Explore Our Work
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="dp-hero-metrics dp-hero-reveal dp-hero-reveal-d4">
              {stats.map((stat) => (
                <div key={stat.label} className="dp-hero-metric">
                  <p
                    className={`dp-hero-metric-val ${
                      stat.tone === "blue"
                        ? "dp-hero-metric-val--blue"
                        : "dp-hero-metric-val--orange"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className="dp-hero-metric-lbl">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="dp-hero-visual dp-hero-reveal dp-hero-reveal-d4" aria-hidden="true">
            <div className="dp-hero-showcase">
              <div className="dp-hero-showcase-glow" />

              {productPills.map(({ icon: Icon, label, tone }, i) => (
                <div
                  key={label}
                  className={`dp-hero-pill dp-hero-pill--${tone} dp-hero-pill--pos-${i + 1}`}
                >
                  <span className="dp-hero-pill-icon">
                    <Icon size={12} strokeWidth={2.25} />
                  </span>
                  {label}
                </div>
              ))}

              <div className="dp-hero-laptop">
                <div className="dp-hero-laptop-screen">
                  <div className="dp-hero-laptop-bar">
                    <span className="dp-hero-laptop-dot bg-red-400/90" />
                    <span className="dp-hero-laptop-dot bg-amber-400/90" />
                    <span className="dp-hero-laptop-dot bg-emerald-400/90" />
                    <span className="dp-hero-laptop-url">app.deopersindia.com</span>
                  </div>
                  <div className="dp-hero-laptop-ui">
                    <div className="dp-hero-laptop-nav">
                      <span className="dp-hero-laptop-nav-item dp-hero-laptop-nav-item--active" />
                      <span className="dp-hero-laptop-nav-item" />
                      <span className="dp-hero-laptop-nav-item" />
                      <span className="dp-hero-laptop-nav-item" />
                    </div>
                    <div className="dp-hero-laptop-content">
                      <div className="dp-hero-laptop-header">
                        <span className="dp-hero-laptop-title">Product Dashboard</span>
                        <span className="dp-hero-laptop-badge">Live</span>
                      </div>
                      <div className="dp-hero-laptop-cards">
                        <div className="dp-hero-laptop-card dp-hero-laptop-card--blue">
                          <span className="dp-hero-laptop-card-val">Web</span>
                          <span className="dp-hero-laptop-card-lbl">Platform</span>
                        </div>
                        <div className="dp-hero-laptop-card dp-hero-laptop-card--orange">
                          <span className="dp-hero-laptop-card-val">API</span>
                          <span className="dp-hero-laptop-card-lbl">Services</span>
                        </div>
                      </div>
                      <div className="dp-hero-laptop-rows">
                        <span className="dp-hero-laptop-row dp-hero-laptop-row--long" />
                        <span className="dp-hero-laptop-row" />
                        <span className="dp-hero-laptop-row dp-hero-laptop-row--medium" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dp-hero-laptop-base" />
                <div className="dp-hero-laptop-shadow" />
              </div>

              <div className="dp-hero-phone">
                <div className="dp-hero-phone-frame">
                  <div className="dp-hero-phone-notch" />
                  <div className="dp-hero-phone-ui">
                    <div className="dp-hero-phone-hero-block" />
                    <div className="dp-hero-phone-line" />
                    <div className="dp-hero-phone-line dp-hero-phone-line--short" />
                    <div className="dp-hero-phone-actions">
                      <span className="dp-hero-phone-btn dp-hero-phone-btn--primary" />
                      <span className="dp-hero-phone-btn" />
                    </div>
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
