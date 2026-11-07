"use client";

import { ArrowUpRight, Building2, CheckCircle2, Code2, Layers, Palette, Sparkles } from "lucide-react";
import SiteContainer from "./SiteContainer";
import PortfolioThumb from "./PortfolioThumb";
import { companyPillars, featuredClients } from "@/data/featuredClients";

const pillarIcons = [Code2, Layers, Palette];

const accentStyles = {
  blue: {
    card: "home-project-card-blue",
    badge: "bg-[var(--color-surface-blue)] text-[var(--color-primary)]",
    partnerBg: "from-[#1565c0] to-[#0d47a1]",
    tag: "bg-[var(--color-surface-blue)] text-[var(--color-primary)]",
  },
  orange: {
    card: "home-project-card-orange",
    badge: "bg-[var(--color-surface-orange)] text-[var(--color-accent-dark)]",
    partnerBg: "from-[#f58220] to-[#e65100]",
    tag: "bg-[var(--color-surface-orange)] text-[var(--color-accent-dark)]",
  },
};

export default function FeaturedClients() {
  return (
    <section
      id="featured-work"
      className="home-section section-surface border-y border-[var(--color-border)] overflow-hidden"
    >
      <SiteContainer>
        {/* What we do — quick context */}
        <div className="featured-clients-intro home-section-head text-center max-w-3xl mx-auto">
          <span className="section-label-light mb-4 inline-flex">
            <Sparkles size={14} className="text-[var(--color-accent)]" />
            What We Do
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text)] leading-tight">
            Technology Solutions That Drive{" "}
            <span className="whitespace-nowrap text-[var(--color-primary)]">Business Growth</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-[var(--color-text-muted)] leading-relaxed">
            From custom software development to intelligent automation, we build technology
            solutions that help businesses innovate, operate efficiently, and scale.
          </p>
        </div>

        <div className="featured-clients-pillars home-section-head grid sm:grid-cols-3 gap-4 lg:gap-5 max-w-4xl mx-auto">
          {companyPillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <div
                key={pillar.title}
                className="home-pillar-card text-center sm:text-left p-4 lg:p-5 rounded-xl border border-[var(--color-border)] bg-white"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg icon-badge-blue mb-3">
                  <Icon size={18} />
                </span>
                <h3 className="font-display font-bold text-sm lg:text-base text-[var(--color-text)]">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-xs lg:text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Enterprise projects */}
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-10">
          <span className="section-label-orange mb-4 inline-flex">
            <Building2 size={14} />
            Flagship Projects
          </span>
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-text)]">
            Trusted by{" "}
            <span className="text-[var(--color-accent)]">IDFC Bank</span> &{" "}
            <span className="text-[var(--color-primary)]">American Express</span>
          </h3>
          <p className="mt-3 text-sm lg:text-base text-[var(--color-text-muted)]">
            Production platforms we&apos;ve engineered for two of India&apos;s largest financial brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {featuredClients.map((client) => {
            const style = accentStyles[client.accent];
            const hostname = new URL(client.url).hostname.replace(/^www\./, "");

            return (
              <article
                key={client.id}
                className={`home-project-card group flex flex-col h-full ${style.card}`}
              >
                {/* Image preview */}
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-project-preview block relative shrink-0 group/preview"
                >
                  <PortfolioThumb
                    title={client.name}
                    previewUrl={client.url}
                    useIframe={client.useIframe}
                    imageSrc={client.imageSrc}
                    aspectClass="aspect-[16/10] w-full"
                    gradientClass="from-[var(--color-surface-blue)] to-[#eef4fb]"
                    showOverlay={false}
                    imageFit={client.imageFit}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.75)] via-[rgba(10,22,40,0.15)] to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 right-3 flex flex-wrap items-start justify-between gap-2 z-[2]">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${style.partnerBg} shadow-md`}
                      >
                        <Building2 size={11} />
                        Built for {client.partner}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-[var(--color-text-muted)]">
                        Live
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 z-[2]">
                      <p className="text-white/70 text-[10px] font-medium truncate">{hostname}</p>
                      <p className="font-display text-lg sm:text-xl font-bold text-white mt-0.5 truncate">
                        {client.name}
                      </p>
                    </div>
                </a>
                {/* Card body */}
                <div className="flex flex-col flex-1 p-5 lg:p-6 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {client.partnerNote}
                  </p>

                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
                    {client.description}
                  </p>

                  <p className="mt-3 text-sm text-[var(--color-text)] leading-relaxed">
                    <span className="font-semibold">Our role: </span>
                    {client.whatWeDid}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {client.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-text-muted)]"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-[var(--color-accent)] flex-shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {client.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${style.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-5 border-t border-[var(--color-border)]">
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition"
                    >
                      View live project
                      <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}
