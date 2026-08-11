"use client";

import PortfolioCard from "./PortfolioCard";
import SectionHeading from "./SectionHeading";
import { portfolioData } from "@/data/portfolioData";

export default function PortfolioSection() {
  return (
    <section className="py-20 lg:py-28 section-light bg-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Showcasing Products & Digital Transformations"
          description="Explore impactful digital experiences, scalable applications, and solutions engineered for modern businesses."
          centered
          twoColor
          coloredWords={2}
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioData.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
