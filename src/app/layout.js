import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import AnalyticsGate from "../components/AnalyticsGate";
import { brandName, brandShort, contactEmail, siteUrl, socialLinks } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const ogImage = {
  url: "/images/logo-mark.png",
  width: 740,
  height: 301,
  alt: "Webologyx Technologies",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Webologyx Technologies | Web & App Development Company",
    template: "%s | Webologyx Technologies",
  },
  description:
    "Webologyx Technologies is a web and app development company building websites, mobile apps, and custom software for startups and enterprises.",
  keywords: [
    "Webologyx Technologies",
    "Webologyx",
    "Webologyx Technologies web development",
    "Webologyx Technologies app development",
    "web development company",
    "mobile app development",
    "custom software development",
  ],
  applicationName: brandName,
  authors: [{ name: brandName, url: siteUrl }],
  creator: brandName,
  publisher: brandName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: brandName,
    title: "Webologyx Technologies | Web & App Development Company",
    description:
      "Webologyx Technologies builds websites, mobile apps, and custom software for startups, businesses, and enterprises.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webologyx Technologies | Web & App Development Company",
    description:
      "Webologyx Technologies builds websites, mobile apps, UI/UX, and custom software for startups and enterprises.",
    images: ["/images/logo-mark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: brandName,
        alternateName: [brandShort],
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/logo-mark.png`,
        },
        image: `${siteUrl}/images/logo-mark.png`,
        description:
          "Webologyx Technologies is a product engineering company delivering web development, mobile apps, UI/UX design, and custom software.",
        slogan: "Product engineering for startups and enterprises.",
        email: contactEmail,
        telephone: "+91-9205210930",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Noida One, B-8, Block B, Industrial Area, Sector 62",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201309",
          addressCountry: "IN",
        },
        sameAs: socialLinks,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9205210930",
          contactType: "customer service",
          email: contactEmail,
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: brandName,
        alternateName: [brandShort],
        url: siteUrl,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
        <body className="bg-[var(--color-light)] text-[var(--color-text)] antialiased overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <a href="#content" className="skip-to-content">
          Skip to main content
        </a>

        <Navbar />

        <main id="content" tabIndex={-1} className="relative z-0 w-full overflow-x-clip">
          {children}
        </main>

        <footer className="relative z-20 isolate">
          <Footer />
        </footer>

        <CookieConsent />
        <AnalyticsGate />
      </body>
    </html>
  );
}
