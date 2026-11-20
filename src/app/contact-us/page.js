import ContactForm from "@/components/ContactForm";

const siteUrl = "https://www.logiclume.com";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Logiclume about your project. Share your goals and the team will reply with a plan for web, mobile, and custom software.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Logiclume",
    description:
      "Start a project with Logiclume. Send an inquiry and we will follow up with scope, timeline, and next steps.",
    url: `${siteUrl}/contact-us`,
  },
};

export default function ContactUsPage() {
  return <ContactForm />;
}
