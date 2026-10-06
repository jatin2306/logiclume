"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import SiteContainer from "./SiteContainer";
import PortfolioDeckShowcase from "./PortfolioDeckShowcase";
import PortfolioThumb from "./PortfolioThumb";
import Button from "./Button";
import { getGridProjects, getSpotlightProjects } from "@/data/portfolioProjects";
import "./portfolio-page.css";

const heroPreviews = getSpotlightProjects()
  .concat(getGridProjects().filter((p) => p.imageSrc))
  .slice(0, 3);

export default function PortfolioPageContent() {
  return (
    <div className="portfolio-page">
      <section id="portfolio-hero" className="portfolio-page-hero section-dark">
        <div className="portfolio-page-hero-bg" aria-hidden="true" />
        <SiteContainer className="relative z-[1] portfolio-page-hero-inner">
          <div className="portfolio-page-hero-copy">
            <span className="section-label-dark mb-4 inline-flex items-center gap-2">
              <Sparkles size={14} className="text-[var(--color-accent)]" />
              Our portfolio
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[clamp(2rem,3.5vw,2.75rem)] font-bold text-white leading-[1.15]">
              <span className="block">Products we&apos;ve shipped</span>
              <span className="block text-[var(--color-accent)]">for global brands</span>
            </h1>
            <p className="mt-4 text-base text-[var(--color-text-muted-dark)] leading-relaxed max-w-xl">
              Scroll the industry tabs — each section showcases real projects we engineered
              end-to-end.
            </p>
            <a href="#healthcare" className="inline-block mt-6">
              <Button variant="accent" size="lg" className="gap-2">
                Explore work <ArrowUpRight size={16} />
              </Button>
            </a>
          </div>

          {heroPreviews.length > 0 && (
            <>
              <div className="portfolio-page-hero-previews" aria-hidden="true">
                {heroPreviews.map((project, i) => (
                  <div
                    key={project.id}
                    className={`portfolio-page-hero-preview portfolio-page-hero-preview--${i + 1}`}
                  >
                    <PortfolioThumb
                      title={project.title}
                      imageSrc={project.imageSrc}
                      previewUrl={project.url}
                      previewAccent={project.previewAccent}
                      gradientClass="from-[#1565c0] to-[#0d47a1]"
                      aspectClass="aspect-[4/3] h-full min-h-[140px]"
                      showOverlay
                    />
                    <span className="portfolio-page-hero-preview-label">{project.title}</span>
                  </div>
                ))}
              </div>
              <div className="portfolio-page-hero-previews-mobile lg:hidden">
                {heroPreviews.map((project) => (
                  <div key={project.id} className="portfolio-page-hero-preview-mobile">
                    <PortfolioThumb
                      title={project.title}
                      imageSrc={project.imageSrc}
                      previewUrl={project.url}
                      previewAccent={project.previewAccent}
                      gradientClass="from-[#1565c0] to-[#0d47a1]"
                      aspectClass="aspect-[16/10] w-[200px] shrink-0"
                      showOverlay
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </SiteContainer>
      </section>

      <PortfolioDeckShowcase />
    </div>
  );
}
