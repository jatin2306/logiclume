"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import SiteContainer from "./SiteContainer";
import Button from "./Button";
import "./mi-hero.css";

const stats = [
  { value: "10+", label: "Years' Experience" },
  { value: "140+", label: "Projects Delivered" },
  { value: "100+", label: "In-house Tech Specialists" },
];

const partners = [
  { id: "gcp", title: "Google Cloud", subtitle: "Partner", tone: "gcp" },
  { id: "aws", title: "AWS Partner", subtitle: "Network", tone: "aws" },
  { id: "openai", title: "OpenAI", subtitle: "Select Partner", tone: "openai" },
];

const slides = [
  {
    key: "dedicated-teams",
    src: "/images/hero/team-meeting.jpg",
    thumb: "/images/hero/team-collab.jpg",
    cardLabel: "Dedicated Teams",
    alt: "Dedicated software development team collaborating with clients",
    eyebrow: "Dedicated delivery",
    titleMain: "Hire a Dedicated Software Development Team",
    titleAccent: "That Starts in 2 Days",
    support:
      "Get vetted engineers, AI specialists, Full-Stack Developers, DevOps experts, and UI/UX designers with 6+ years of average experience. They join your stand-ups, work in your tools, and scale up or down as your roadmap changes.",
    ctaLabel: "Build Your Dedicated Team",
    ctaHref: "/#contact",
    panel: "partners",
  },
  {
    key: "digital-transformation",
    src: "/images/hero/ai-tech.jpg",
    thumb: "/images/hero/ai-tech.jpg",
    cardLabel: "Digital Transformation",
    alt: "AI and digital product engineering",
    eyebrow: "Product engineering",
    titleMain: "Custom Software and AI Product Development",
    titleAccent: "That Drives Business Growth",
    support:
      "Build custom software and AI-powered products designed around your business goals, workflows, and growth plans. From strategy to deployment, we engineer scalable solutions that deliver measurable business impact.",
    ctaLabel: "Consult Our Strategy Team",
    ctaHref: "/#contact",
    panel: "stats",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  const slide = slides[index];

  return (
    <section className="mi-hero" id="home" aria-label="DeopersIndia homepage hero">
      <SiteContainer className="mi-hero-inner">
        <div className="mi-hero-card">
          <div className="mi-hero-visual">
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority
              sizes="100vw"
              className="mi-hero-visual-img"
            />
            <div className="mi-hero-visual-fade" aria-hidden />
          </div>

          <div className="mi-hero-copy" key={slide.key}>
            <span className="site-header-ai-border mi-hero-eyebrow-border">
              <span className="mi-hero-eyebrow section-label-light">{slide.eyebrow}</span>
            </span>
            <h1 className="mi-hero-title">
              <span className="mi-hero-title-main">{slide.titleMain}</span>{" "}
              <span className="mi-hero-title-accent">{slide.titleAccent}</span>
            </h1>
          </div>

          <aside className="mi-hero-aside" aria-label="Highlights">
            {slide.panel === "partners" && (
              <div className="mi-hero-partners">
                {partners.map((partner) => (
                  <div key={partner.id} className="mi-hero-partner">
                    <span className={`mi-hero-partner-mark mi-hero-partner-mark--${partner.tone}`}>
                      {partner.tone === "gcp" && "GCP"}
                      {partner.tone === "aws" && "AWS"}
                      {partner.tone === "openai" && "AI"}
                    </span>
                    <span className="mi-hero-partner-text">
                      <span className="mi-hero-partner-title">{partner.title}</span>
                      <span className="mi-hero-partner-sub">{partner.subtitle}</span>
                    </span>
                  </div>
                ))}
              </div>
            )}
            {slide.panel === "stats" && (
              <div className="mi-hero-stats">
                {stats.map((stat) => (
                  <div key={stat.label} className="mi-hero-stat">
                    <span className="mi-hero-stat-value">{stat.value}</span>
                    <span className="mi-hero-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </aside>

          <div className="mi-hero-action">
            <p className="mi-hero-support">{slide.support}</p>
            <Button
              href={slide.ctaHref}
              variant="accent"
              size="md"
              className="mi-hero-cta gap-2 rounded-xl shadow-lg shadow-[rgba(245,130,32,0.28)] hover:scale-[1.02]"
            >
              {slide.ctaLabel}
              <ArrowUpRight size={17} aria-hidden />
            </Button>
          </div>

          <div className="mi-hero-carousel" aria-label="Hero gallery">
            <div className="mi-hero-carousel-nav">
              <button
                type="button"
                className="mi-hero-carousel-btn"
                aria-label="Previous slide"
                onClick={() => go(-1)}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                className="mi-hero-carousel-btn"
                aria-label="Next slide"
                onClick={() => go(1)}
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="mi-hero-slide-cards">
              {slides.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  className={`mi-hero-slide-card ${i === index ? "mi-hero-slide-card--active" : ""}`}
                  aria-label={`Show ${s.cardLabel}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => setIndex(i)}
                >
                  <span className="mi-hero-slide-card-img">
                    <Image src={s.thumb} alt="" fill sizes="120px" className="object-cover" />
                  </span>
                  <span className="mi-hero-slide-card-label">{s.cardLabel}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
