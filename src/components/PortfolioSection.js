"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PortfolioCard from "./PortfolioCard";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";
import Button from "./Button";
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
          className="home-section-head max-w-3xl mx-auto"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioData
            .filter((p) => !p.featured)
            .map((project) => (
              <PortfolioCard key={project.id} {...project} />
            ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/portfolio">
            <Button variant="outline" size="lg" className="gap-2">
              View full portfolio <ArrowUpRight size={16} />
            </Button>
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
