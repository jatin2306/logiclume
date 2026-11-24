import { brandName, contactEmail, siteUrl } from "@/data/site";
import "./privacy.css";

export const metadata = {
  title: "Privacy",
  description: `How ${brandName} uses essential and analytics cookies, and how to change your choice.`,
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: `Privacy | ${brandName}`,
    description: `Cookie choices on the ${brandName} website: essential storage and optional analytics.`,
    url: `${siteUrl}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="privacy-page">
      <div className="site-wrap">
        <div className="privacy-page-inner">
          <h1>Privacy</h1>
          <p>
            Webologyx Technologies uses a small set of cookies on this website. You can accept them, reject the optional ones, or change the choice later from Cookies in the footer.
          </p>

          <h2>Essential</h2>
          <p>
            A cookie named webologyx_consent stores whether analytics is allowed. It stays on this browser for about six months so the notice does not appear on every visit. The site needs this cookie to remember the choice.
          </p>

          <h2>Analytics</h2>
          <p>
            If you accept, the site loads Vercel Analytics to count page visits. If you reject, that script does not load.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this page can go to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
