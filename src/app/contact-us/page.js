import ContactForm from "@/components/ContactForm";

const siteUrl = "https://www.deopersindia.com";

export const metadata = {
  title: "Contact Us",
  description:
    "Tell DeopersIndia about your project. Share your goals and our team will reply with a tailored plan for web, mobile, and custom software.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | DeopersIndia",
    description:
      "Start a project with DeopersIndia. Send an inquiry and we will follow up with scope, timeline, and next steps.",
    url: `${siteUrl}/contact-us`,
  },
};

export default function ContactUsPage() {
  return <ContactForm />;
}
