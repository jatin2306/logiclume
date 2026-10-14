"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Building2, ChevronLeft, ChevronRight, ArrowUpRight, Rocket, Sparkles } from "lucide-react";
import SiteContainer from "./SiteContainer";
import Button from "./Button";
import "./mi-hero.css";

const stats = [
  { value: "10+", label: "Years' Experience" },
  { value: "140+", label: "Projects Delivered" },
  { value: "100+", label: "In-house Tech Specialists" },
];

/** Hero aside — what DeopersIndia actually delivers (no third-party partner claims). */
const deliveryHighlights = [
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise",
    subtitle: "Banking & fintech",
    tone: "blue",
  },
  {
    id: "squads",
    icon: Rocket,
    title: "Dedicated teams",
    subtitle: "Ramp in days",
    tone: "orange",
  },
  {
    id: "ai",
    icon: Sparkles,
    title: "AI in prod",
    subtitle: "Live automation",
    tone: "blue",
  },
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
    panel: "highlights",
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

const HERO_AUTO_INTERVAL_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [slideImageReady, setSlideImageReady] = useState(false);
  const pauseAutoRef = useRef(false);
  const slide = slides[index];

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    setSlideImageReady(false);
    const img = new window.Image();
    img.src = slide.src;
    if (img.complete) {
      setSlideImageReady(true);
      return;
    }
    const done = () => setSlideImageReady(true);
    img.addEventListener("load", done);
    img.addEventListener("error", done);
    return () => {
      img.removeEventListener("load", done);
      img.removeEventListener("error", done);
    };
  }, [slide.src]);

  useEffect(() => {
    slides.forEach((s) => {
      const img = new window.Image();
      img.src = s.src;
    });
  }, []);

  const onHeroImageLoad = useCallback(() => {
    setSlideImageReady(true);
  }, []);

  const onHeroImageError = useCallback(() => {
    setSlideImageReady(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      if (pauseAutoRef.current) return;
      setIndex((i) => (i + 1) % slides.length);
    }, HERO_AUTO_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [index]);

  return (
    <section
      className="mi-hero"
      id="home"
      aria-label="DeopersIndia homepage hero"
      aria-live="polite"
      onMouseEnter={() => {
        pauseAutoRef.current = true;
      }}
      onMouseLeave={() => {
        pauseAutoRef.current = false;
      }}
      onFocusCapture={() => {
        pauseAutoRef.current = true;
      }}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          pauseAutoRef.current = false;
        }
      }}
    >
      <SiteContainer className="mi-hero-inner">
        <div
          className={`mi-hero-card${slide.key === "digital-transformation" ? " mi-hero-card--ai" : ""}${
            slideImageReady ? "" : " mi-hero-card--loading"
          }`}
        >
          {!slideImageReady ? (
            <div className="mi-hero-skeleton" aria-busy="true" aria-label="Loading hero">
              <div className="mi-hero-skeleton-visual mi-hero-skeleton-shimmer" aria-hidden />
              <div className="mi-hero-skeleton-copy">
                <span className="mi-hero-skeleton-line mi-hero-skeleton-line--pill mi-hero-skeleton-shimmer" />
                <span className="mi-hero-skeleton-line mi-hero-skeleton-line--title mi-hero-skeleton-shimmer" />
                <span className="mi-hero-skeleton-line mi-hero-skeleton-line--title-short mi-hero-skeleton-shimmer" />
              </div>
              <div className="mi-hero-skeleton-aside" aria-hidden>
                <span className="mi-hero-skeleton-block mi-hero-skeleton-shimmer" />
                <span className="mi-hero-skeleton-block mi-hero-skeleton-shimmer" />
                <span className="mi-hero-skeleton-block mi-hero-skeleton-shimmer" />
              </div>
            </div>
          ) : null}

          <div className="mi-hero-visual">
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`mi-hero-visual-img ${slideImageReady ? "mi-hero-visual-img--ready" : ""}`}
              onLoad={onHeroImageLoad}
              onError={onHeroImageError}
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

          <aside className="mi-hero-aside" aria-label="Why DeopersIndia">
            {slide.panel === "highlights" && (
              <div className="mi-hero-partners">
                {deliveryHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="mi-hero-partner">
                      <span className={`mi-hero-partner-mark mi-hero-partner-mark--${item.tone}`}>
                        <Icon size={15} strokeWidth={2.25} aria-hidden />
                      </span>
                      <span className="mi-hero-partner-text">
                        <span className="mi-hero-partner-title">{item.title}</span>
                        <span className="mi-hero-partner-sub">{item.subtitle}</span>
                      </span>
                    </div>
                  );
                })}
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
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                className="mi-hero-carousel-btn"
                aria-label="Next slide"
                onClick={() => go(1)}
              >
                <ChevronRight size={14} />
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
                    <Image src={s.thumb} alt="" fill sizes="80px" className="object-cover" />
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
