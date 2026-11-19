"use client";

import { ArrowUpRight, Building2, CheckCircle2 } from "lucide-react";
import SiteContainer from "./SiteContainer";
import PortfolioThumb from "./PortfolioThumb";
import { getFlagshipProjects } from "@/data/portfolioProjects";

const accentStyles = {
  blue: {
    card: "home-project-card-blue",
    partnerBg: "from-[#0066f5] to-[#0040d0]",
    tag: "bg-[var(--color-surface-blue)] text-[var(--color-primary)]",
  },
  orange: {
    card: "home-project-card-orange",
    partnerBg: "from-[#8b2cf5] to-[#6d28d9]",
    tag: "bg-[var(--color-surface-orange)] text-[var(--color-accent-dark)]",
  },
};

export default function PortfolioFeaturedBand() {
  const featuredClients = getFlagshipProjects();

  return (
    <section className="portfolio-featured-band section-surface border-b border-[var(--color-border)]">
      <SiteContainer className="py-10 lg:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 lg:mb-10">
          <div className="max-w-xl">
            <span className="section-label-orange mb-3 inline-flex">
              <Building2 size={14} />
              Flagship work
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)] leading-tight">
              Enterprise platforms{" "}
              <span className="text-[var(--color-primary)]">in production</span>
            </h2>
            <p className="mt-2 text-sm lg:text-base text-[var(--color-text-muted)]">
              Live products for IDFC Bank and American Express — engineered end-to-end by
              Logic Lume.
            </p>
          </div>
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
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-project-preview block relative shrink-0 group/preview"
                >
                  <PortfolioThumb
                    title={client.name}
                    previewUrl={client.url}
                    previewAccent={client.previewAccent}
                    imageSrc={client.imageSrc}
                    aspectClass="aspect-[16/10] w-full"
                    gradientClass="from-[var(--color-surface-blue)] to-[#eef3ff]"
                    showOverlay={false}
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
                <div className="flex flex-col flex-1 p-5 lg:p-6 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {client.partnerNote}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
                    {client.description}
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
                      <ArrowUpRight size={16} />
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
