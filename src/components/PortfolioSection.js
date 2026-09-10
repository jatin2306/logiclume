"use client";

import PortfolioCard from "./PortfolioCard";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";
import { portfolioData } from "@/data/portfolioData";

export default function PortfolioSection() {
  return (
    <section className="home-section section-light bg-grid-light">
      <SiteContainer>
        <SectionHeading
          label="Portfolio"
          title="Showcasing Products & Digital Transformations"
          description="Explore more of our work — from enterprise platforms above to apps, dashboards, and websites across industries."
          centered
          twoColor
          coloredWords={2}
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioData
            .filter((p) => !p.featured)
            .map((project) => (
              <PortfolioCard key={project.id} {...project} />
            ))}
        </div>
      </SiteContainer>
    </section>
  );
}
