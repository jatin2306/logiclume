import { portfolioFilters, portfolioServiceFilters } from "@/data/portfolioFilterConfig";
import PortfolioPathRedirect from "./redirect-client";

export function generateStaticParams() {
  const industries = portfolioFilters
    .filter((filter) => filter.id !== "all")
    .map((filter) => ({ path: [filter.id] }));
  const capabilities = portfolioServiceFilters
    .filter((filter) => filter.id !== "all")
    .map((filter) => ({ path: ["capabilities", filter.id] }));

  return [
    { path: ["industries"] },
    { path: ["capabilities"] },
    { path: ["services"] },
    ...industries,
    ...capabilities,
  ];
}

export const metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "/work" },
};

export default function PortfolioPathPage() {
  return <PortfolioPathRedirect />;
}
