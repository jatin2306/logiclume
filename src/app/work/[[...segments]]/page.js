import { Suspense } from "react";
import PortfolioPageContent from "@/components/PortfolioPageContent";
import { portfolioFilters, portfolioServiceFilters } from "@/data/portfolioFilterConfig";
import { brandName, siteUrl } from "@/data/site";

export function generateStaticParams() {
  const industries = portfolioFilters
    .filter((filter) => filter.id !== "all")
    .map((filter) => ({ segments: [filter.id] }));
  const capabilities = portfolioServiceFilters
    .filter((filter) => filter.id !== "all")
    .map((filter) => ({ segments: ["capabilities", filter.id] }));

  return [
    { segments: [] },
    { segments: ["industries"] },
    { segments: ["capabilities"] },
    { segments: ["services"] },
    ...industries,
    ...capabilities,
  ];
}

export const metadata = {
  title: "Our Best Projects",
  description: `${brandName} project portfolio: web, mobile, and enterprise platforms for fintech, commerce, health, real estate, and AI.`,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: `Our Best Projects | ${brandName}`,
    description: `Web, mobile, and enterprise platforms engineered by ${brandName} for banks, brands, and growth companies.`,
    url: `${siteUrl}/work`,
  },
};

function WorkFallback() {
  return (
    <div className="portfolio-page min-h-[50vh] flex items-center justify-center text-[var(--color-text-muted)]">
      Loading work…
    </div>
  );
}

export default function WorkPage() {
  return (
    <Suspense fallback={<WorkFallback />}>
      <PortfolioPageContent />
    </Suspense>
  );
}
