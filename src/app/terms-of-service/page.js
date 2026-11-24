import { brandName, contactEmail, siteUrl } from "@/data/site";
import "../privacy-policy/privacy.css";

export const metadata = {
  title: "Terms of Service",
  description: `Terms for using the ${brandName} website, including acceptable use and how to contact the team.`,
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: `Terms of Service | ${brandName}`,
    description: `Terms for using the ${brandName} website.`,
    url: `${siteUrl}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
  return (
    <section className="privacy-page">
      <div className="site-wrap">
        <div className="privacy-page-inner">
          <h1>Terms of Service</h1>
          <p>
            These terms cover use of the {brandName} website. Project work is agreed separately in a proposal or contract.
          </p>

          <h2>Using the site</h2>
          <p>
            You may browse the site and send an inquiry. Do not misuse the forms, attempt to disrupt the site, or copy the content for a competing service.
          </p>

          <h2>Information you send</h2>
          <p>
            Details you submit through the contact form or email are used to reply about your project. Do not send confidential material until we have agreed how it will be handled.
          </p>

          <h2>No offer</h2>
          <p>
            Case studies, timelines, and service descriptions on this site describe past work and typical services. They are not a quote or a promise of a particular result.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can go to{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
