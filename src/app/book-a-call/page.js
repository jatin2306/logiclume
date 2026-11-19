import BookCallPageContent from "@/components/BookCallPageContent";

const siteUrl = "https://www.logiclume.com";

export const metadata = {
  title: "Book a Call — Discuss Your Project",
  description:
    "Schedule a 30-minute call with a Senior Business Consultant at Logic Lume. Discuss scope, timelines, and engagement options.",
  alternates: {
    canonical: "/book-a-call",
  },
  openGraph: {
    title: "Book a Call | Logic Lume",
    description:
      "Book a call to discuss your product, dedicated teams, or digital transformation with our senior business consultant.",
    url: `${siteUrl}/book-a-call`,
  },
};

export default function BookCallPage() {
  return <BookCallPageContent />;
}
