import BookCallPageContent from "@/components/BookCallPageContent";

const siteUrl = "https://www.deopersindia.com";

export const metadata = {
  title: "Book a Call — Discuss Your Project",
  description:
    "Schedule a 30-minute call with a Senior Business Consultant at DeopersIndia. Discuss scope, timelines, and engagement options.",
  alternates: {
    canonical: "/book-a-call",
  },
  openGraph: {
    title: "Book a Call | DeopersIndia",
    description:
      "Book a call to discuss your product, dedicated teams, or digital transformation with our senior business consultant.",
    url: `${siteUrl}/book-a-call`,
  },
};

export default function BookCallPage() {
  return <BookCallPageContent />;
}
