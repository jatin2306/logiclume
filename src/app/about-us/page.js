import AboutPageContent from "@/components/AboutPageContent";

const siteUrl = "https://www.deopersindia.com";

export const metadata = {
  title: "About Us — Company Overview",
  description:
    "Learn about DeopersIndia — product engineering from Noida with global delivery. Mission, values, team, and how we build software for fintech, commerce, and enterprise.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | DeopersIndia",
    description:
      "DeopersIndia helps businesses build and scale web, mobile, and custom software with dedicated engineering squads.",
    url: `${siteUrl}/about-us`,
  },
};

export default function AboutUsPage() {
  return <AboutPageContent />;
}
