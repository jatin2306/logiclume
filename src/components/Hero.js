"use client";

import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, Zap, Globe, Smartphone } from "lucide-react";
import SiteContainer from "./SiteContainer";
import Button from "./Button";

const stats = [
  { value: "50+", label: "Projects", color: "primary" },
  { value: "30+", label: "Clients", color: "accent" },
  { value: "8+", label: "Experts", color: "primary" },
  { value: "5+", label: "Years", color: "accent" },
];

const mockBars = [72, 48, 88, 56, 94, 40];

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="absolute inset-0 home-hero-grid pointer-events-none" aria-hidden="true" />

      <SiteContainer className="relative z-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-w-0">
          {/* Copy */}
          <div className="min-w-0">
            <div className="opacity-0 animate-fade-in-up">
              <span className="section-label-light mb-6">
                <Sparkles size={14} className="text-[var(--color-accent)]" />
                Trusted IT Partner in India
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-[var(--color-text)] leading-[1.08] tracking-tight opacity-0 animate-fade-in-up animation-delay-100">
              Engineering{" "}
              <span className="text-gradient">digital products</span>
              {" "}built to scale
            </h1>

            <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed max-w-lg opacity-0 animate-fade-in-up animation-delay-200">
              Websites, mobile apps, AI platforms & custom software — we help startups
              and enterprises ship faster with modern tech and product-first thinking.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 opacity-0 animate-fade-in-up animation-delay-300">
              <a href="#contact">
                <Button variant="accent" size="lg" className="gap-2 rounded-xl">
                  Book a Strategy Call
                  <ArrowUpRight size={18} />
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className="rounded-xl">
                  Explore Services
                </Button>
              </a>
            </div>

            <div className="home-trust-row opacity-0 animate-fade-in-up animation-delay-400">
              <span className="home-trust-item">
                <span className="home-trust-dot" />
                Free consultation
              </span>
              <span className="home-trust-item">
                <CheckCircle2 size={15} className="text-[var(--color-primary)]" />
                On-time delivery
              </span>
              <span className="home-trust-item">
                <Zap size={15} className="text-[var(--color-accent)]" />
                Agile process
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="home-hero-visual opacity-0 animate-fade-in-up animation-delay-300">
            <div className="home-hero-mock">
              <div className="home-hero-mock-bar">
                <span className="home-hero-mock-dot bg-red-400" />
                <span className="home-hero-mock-dot bg-amber-400" />
                <span className="home-hero-mock-dot bg-green-400" />
                <span className="ml-3 text-xs text-[var(--color-text-muted)] font-medium">
                  deopersindia.com — dashboard
                </span>
              </div>

              <div className="home-hero-mock-body space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      Growth overview
                    </p>
                    <p className="font-display text-2xl font-bold text-[var(--color-text)] mt-1">
                      +127<span className="text-[var(--color-accent)]">%</span>
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-surface-orange)] text-[var(--color-accent-dark)]">
                    Live
                  </span>
                </div>

                <div className="flex items-end gap-2 h-24 pt-2">
                  {mockBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md transition-all duration-500"
                      style={{
                        height: `${h}%`,
                        background: i % 2 === 0
                          ? "linear-gradient(180deg, #1565c0, #0d47a1)"
                          : "linear-gradient(180deg, #f58220, #e65100)",
                        opacity: 0.85,
                      }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[
                    { icon: Globe, label: "Web" },
                    { icon: Smartphone, label: "Mobile" },
                    { icon: Sparkles, label: "AI" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-1.5 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]"
                    >
                      <Icon size={16} className="text-[var(--color-primary)]" />
                      <span className="text-[10px] font-semibold text-[var(--color-text-muted)]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="home-hero-float home-hero-float-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Projects</p>
              <p className="font-display text-xl font-bold text-[var(--color-primary)]">50+</p>
            </div>

            <div className="home-hero-float home-hero-float-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg icon-badge-orange">
                <Sparkles size={14} />
              </span>
              <div>
                <p className="text-xs font-semibold text-[var(--color-text)]">AI Solutions</p>
                <p className="text-[10px] text-[var(--color-text-muted)]">Chatbots & automation</p>
              </div>
            </div>

            <div className="home-hero-float home-hero-float-3">
              <p className="text-xs font-semibold text-[var(--color-text)] flex items-center gap-1">
                <CheckCircle2 size={12} className="text-green-500" />
                99% satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-14 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-fade-in-up animation-delay-500">
          {stats.map((stat) => (
            <div key={stat.label} className="home-stat-pill">
              <p className={`font-display text-3xl font-bold ${
                stat.color === "primary" ? "text-[var(--color-primary)]" : "text-[var(--color-accent)]"
              }`}>
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
