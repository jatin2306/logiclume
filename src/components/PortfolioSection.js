"use client";

import PortfolioCard from "./PortfolioCard";
import SectionHeading from "./SectionHeading";
import { portfolioData } from "@/data/portfolioData";

export default function PortfolioSection() {
  return (
    <section className="py-16 lg:py-5 bg-[var(--color-surface)]">
      <div className="container mx-auto px-4 lg:px-8">

        <SectionHeading
          title="Our Recent Digital Projects"
          description="Explore our portfolio of websites, mobile applications, UI/UX designs, e-commerce solutions, and custom software developed for businesses across multiple industries."
          centered
          twoColor
          coloredWords={2}
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioData.map((project) => (
            <PortfolioCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}