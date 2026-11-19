import ContactForm from "@/components/ContactForm";

const siteUrl = "https://www.logiclume.com";

export const metadata = {
  title: "Contact Us",
  description:
    "Tell Logic Lume about your project. Share your goals and our team will reply with a tailored plan for web, mobile, and custom software.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Logic Lume",
    description:
      "Start a project with Logic Lume. Send an inquiry and we will follow up with scope, timeline, and next steps.",
    url: `${siteUrl}/contact-us`,
  },
};

export default function ContactUsPage() {
  return <ContactForm />;
}
