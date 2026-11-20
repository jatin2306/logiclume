import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const siteUrl = "https://www.logiclume.com";

const brandName = "Logiclume";
const brandAlternates = ["Logic Lume", "LogicLume"];
const ogImage = {
  url: "/images/logo-mark.png",
  width: 447,
  height: 442,
  alt: "Logiclume",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Logiclume | Web & App Development Company",
    template: "%s | Logiclume",
  },
  description:
    "Logiclume (Logic Lume) is a web and app development company building websites, mobile apps, and custom software for startups and enterprises.",
  keywords: [
    "Logiclume",
    "Logic Lume",
    "LogicLume",
    "Logiclume web development",
    "Logiclume app development",
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
    title: "Logiclume | Web & App Development Company",
    description:
      "Logiclume builds websites, mobile apps, and custom software for startups, businesses, and enterprises.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logiclume | Web & App Development Company",
    description:
      "Logiclume builds websites, mobile apps, UI/UX, and custom software for startups and enterprises.",
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
        alternateName: brandAlternates,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/logo-mark.png`,
        },
        image: `${siteUrl}/images/logo-mark.png`,
        description:
          "Logiclume is a product engineering company delivering web development, mobile apps, UI/UX design, and custom software.",
        slogan: "Logic. Innovation. Brighter tomorrow.",
        email: "info@logiclume.com",
        telephone: "+91-9205210930",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Noida One, B-8, Block B, Industrial Area, Sector 62",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201309",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.linkedin.com/company/logic-lume",
          "https://www.instagram.com/logiclume/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9205210930",
          contactType: "customer service",
          email: "info@logiclume.com",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: brandName,
        alternateName: brandAlternates,
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

        <Analytics />
      </body>
    </html>
  );
}
