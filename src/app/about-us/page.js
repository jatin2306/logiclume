import AboutPageContent from "@/components/AboutPageContent";

const siteUrl = "https://www.logiclume.com";

export const metadata = {
  title: "About Us — Company Overview",
  description:
    "About Logiclume — a product engineering company in Noida with delivery in the USA and the UK. Mission, team, and how we build software.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Logiclume",
    description:
      "Logiclume helps businesses build and scale web, mobile, and custom software with dedicated engineering squads.",
    url: `${siteUrl}/about-us`,
  },
};

export default function AboutUsPage() {
  return <AboutPageContent />;
}
