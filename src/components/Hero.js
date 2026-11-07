"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import SiteContainer from "./SiteContainer";
import Button from "./Button";
import "./mi-hero.css";

const stats = [
  { value: "10+", label: "Years' Experience" },
  { value: "80+", label: "Projects Delivered" },
  { value: "150+", label: "In-house Tech Specialists" },
];

const slides = [
  {
    key: "dedicated-teams",
    src: "/images/hero/team-meeting.jpg",
    thumb: "/images/hero/team-collab.jpg",
    cardLabel: "Dedicated Teams",
    alt: "Dedicated software development team collaborating with clients",
    eyebrow: "Dedicated delivery",
    titleMain: "Custom Software Development & Dedicated Engineering Teams",
    titleAccent: "for Growing Businesses",
    support:
      "We design, develop, and scale enterprise software, SaaS platforms, mobile applications, and AI-powered solutions — from initial concept to production.",
    ctaLabel: "Discuss Your Project",
    ctaHref: "/contact-us",
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
    ctaHref: "/contact-us",
  },
];

const HERO_AUTO_INTERVAL_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visualReady, setVisualReady] = useState(false);
  const pauseAutoRef = useRef(false);
  const slide = slides[index];

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  const markVisualReady = useCallback(() => {
    setVisualReady(true);
  }, []);

  useEffect(() => {
    slides.forEach((s) => {
      const img = new window.Image();
      img.src = s.src;
      if (img.complete) markVisualReady();
      else {
        img.addEventListener("load", markVisualReady, { once: true });
        img.addEventListener("error", markVisualReady, { once: true });
      }
    });
  }, [markVisualReady]);

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
        <div className={`mi-hero-card${visualReady ? "" : " mi-hero-card--loading"}`}>
          {!visualReady ? (
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
            {slides.map((s, i) => (
              <Image
                key={s.key}
                src={s.src}
                alt={i === index ? s.alt : ""}
                fill
                priority
                sizes="100vw"
                className={`mi-hero-visual-img${i === index ? " mi-hero-visual-img--active" : ""}${
                  s.key === "digital-transformation" ? " mi-hero-visual-img--ai" : ""
                }`}
                onLoad={markVisualReady}
                onError={markVisualReady}
              />
            ))}
            <div className="mi-hero-visual-fade" aria-hidden />
          </div>

          <div className="mi-hero-copy-stack">
            {slides.map((s, i) => {
              const TitleTag = i === index ? "h1" : "div";
              return (
                <div
                  key={s.key}
                  className={`mi-hero-copy${i === index ? " is-active" : ""}`}
                  aria-hidden={i === index ? undefined : true}
                >
                  <span className="site-header-ai-border mi-hero-eyebrow-border">
                    <span className="mi-hero-eyebrow section-label-light">{s.eyebrow}</span>
                  </span>
                  <TitleTag className="mi-hero-title">
                    <span className="mi-hero-title-main">{s.titleMain}</span>
                    <br />
                    <span className="mi-hero-title-accent">{s.titleAccent}</span>
                  </TitleTag>
                  {s.support ? <p className="mi-hero-support">{s.support}</p> : null}
                </div>
              );
            })}
          </div>

          <aside className="mi-hero-aside" aria-label="Why DeopersIndia">
            <div className="mi-hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="mi-hero-stat">
                  <span className="mi-hero-stat-value">{stat.value}</span>
                  <span className="mi-hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="mi-hero-action">
            <Button
              href={slide.ctaHref}
              variant="accent"
              size="md"
              className="mi-hero-cta gap-2 rounded-xl shadow-lg shadow-[rgba(245,130,32,0.28)] hover:scale-[1.02]"
            >
              <span className="mi-hero-cta-labels">
                {slides.map((s, i) => (
                  <span key={s.key} className={i === index ? "is-active" : undefined}>
                    {s.ctaLabel}
                  </span>
                ))}
              </span>
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
