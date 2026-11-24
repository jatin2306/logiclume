import AboutPageContent from "@/components/AboutPageContent";
import { brandName, siteUrl } from "@/data/site";

export const metadata = {
  title: "About Us — Company Overview",
  description: `About ${brandName} — a product engineering company in Noida with delivery in the USA and the UK. Mission, team, and how we build software.`,
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: `About Us | ${brandName}`,
    description: `${brandName} helps businesses build and scale web, mobile, and custom software with dedicated engineering squads.`,
    url: `${siteUrl}/about-us`,
  },
};

export default function AboutUsPage() {
  return <AboutPageContent />;
}
