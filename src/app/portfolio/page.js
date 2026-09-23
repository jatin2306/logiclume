import PortfolioPageContent from "@/components/PortfolioPageContent";

const siteUrl = "https://www.deopersindia.com";

export const metadata = {
  title: "Portfolio — Products & Digital Platforms",
  description:
    "Explore DeopersIndia portfolio: enterprise rewards, e-commerce marketplaces, health tech, real estate platforms, and custom software built for scale.",
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

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
