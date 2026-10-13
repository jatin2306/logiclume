import { Suspense } from "react";
import PortfolioPageContent from "@/components/PortfolioPageContent";

const siteUrl = "https://www.deopersindia.com";

export const metadata = {
  title: "Our Work — Products & Platforms",
  description:
    "Explore DeopersIndia portfolio: enterprise rewards, commerce, fintech, health tech, real estate, and AI products shipped for global clients.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | DeopersIndia",
    description:
      "Web, mobile, and enterprise platforms engineered by DeopersIndia for banks, brands, and growth companies.",
    url: `${siteUrl}/portfolio`,
  },
};

function PortfolioFallback() {
  return (
    <div className="portfolio-page min-h-[50vh] flex items-center justify-center text-[var(--color-text-muted)]">
      Loading work…
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={<PortfolioFallback />}>
      <PortfolioPageContent />
    </Suspense>
  );
}
