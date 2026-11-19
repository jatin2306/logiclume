import { Suspense } from "react";
import PortfolioPageContent from "@/components/PortfolioPageContent";

const siteUrl = "https://www.logiclume.com";

export const metadata = {
  title: "Our Best Projects",
  description:
    "Our best projects: enterprise rewards, commerce, fintech, health tech, real estate, and AI products shipped for global clients.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Best Projects | Logic Lume",
    description:
      "Web, mobile, and enterprise platforms engineered by Logic Lume for banks, brands, and growth companies.",
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
