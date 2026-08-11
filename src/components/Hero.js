"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden section-light bg-grid-light"
      style={{ background: "var(--color-hero-gradient)" }}
    >
      {/* Soft brand glows */}
      <div className="absolute top-20 -left-24 w-80 h-80 rounded-full bg-[rgba(21,101,192,0.08)] blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-20 -right-24 w-80 h-80 rounded-full bg-[rgba(245,130,32,0.08)] blur-[100px] animate-pulse-glow animation-delay-200" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="max-w-4xl">
          <div className="opacity-0 animate-fade-in-up">
            <span className="section-label-light mb-8">
              <Sparkles size={14} className="text-[var(--color-accent)]" />
              Trusted IT Partner in India
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text)] leading-[1.1] tracking-tight opacity-0 animate-fade-in-up animation-delay-100">
            Engineering{" "}
            <span className="text-gradient">digital products</span>
            <br />
            built to scale
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl opacity-0 animate-fade-in-up animation-delay-200">
            From high-performance websites and mobile apps to AI-powered platforms
            and cloud infrastructure — we help startups and enterprises transform
            ambitious ideas into market-ready digital solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <a href="#contact">
              <Button variant="accent" size="lg" className="gap-2">
                Book a Strategy Call
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg">
                Explore Services
              </Button>
            </a>
          </div>
        </div>

        {/* Stats — light cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 opacity-0 animate-fade-in-up animation-delay-400">
          {[
            { value: "50+", label: "Projects Delivered", accent: "blue" },
            { value: "30+", label: "Happy Clients", accent: "orange" },
            { value: "8+", label: "Expert Team Members", accent: "blue" },
            { value: "5+", label: "Years of Experience", accent: "orange" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl p-6 text-center card-elevated ${
                stat.accent === "blue" ? "card-accent-blue" : "card-accent-orange"
              }`}
            >
              <p className={`font-display text-3xl sm:text-4xl font-bold ${
                stat.accent === "blue" ? "text-[var(--color-primary)]" : "text-[var(--color-accent)]"
              }`}>
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
