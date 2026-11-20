import BookCallPageContent from "@/components/BookCallPageContent";

const siteUrl = "https://www.logiclume.com";

export const metadata = {
  title: "Book a Call — Discuss Your Project",
  description:
    "Book a 30-minute call with Logiclume. Discuss scope, timelines, and how a dedicated team can build your product.",
  alternates: {
    canonical: "/book-a-call",
  },
  openGraph: {
    title: "Book a Call | Logiclume",
    description:
      "Book a call to discuss your product, dedicated teams, or digital transformation with our senior business consultant.",
    url: `${siteUrl}/book-a-call`,
  },
};

export default function BookCallPage() {
  return <BookCallPageContent />;
}
