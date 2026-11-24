import ContactForm from "@/components/ContactForm";
import { brandName, siteUrl } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description: `Contact ${brandName} about your project. Share your goals and the team will reply with a plan for web, mobile, and custom software.`,
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: `Contact Us | ${brandName}`,
    description: `Start a project with ${brandName}. Send an inquiry and we will follow up with scope, timeline, and next steps.`,
    url: `${siteUrl}/contact-us`,
  },
};

export default function ContactUsPage() {
  return <ContactForm />;
}
