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

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Logic Lume | Web & App Development Company",
    template: "%s | Logic Lume",
  },
  description:
    "Logic Lume builds scalable websites, mobile apps, and digital products for startups and enterprises. Expert web development, UI/UX, and cloud solutions.",
  keywords: [
    "Logic Lume",
    "web development company",
    "mobile app development",
    "IT solutions India",
    "software development",
  ],
  applicationName: "Logic Lume",
  authors: [{ name: "Logic Lume", url: siteUrl }],
  creator: "Logic Lume",
  publisher: "Logic Lume",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Logic Lume",
    title: "Logic Lume | Web & App Development Company",
    description:
      "Logic Lume helps startups, businesses, and enterprises establish a strong online presence through modern website development, custom software, mobile apps, and digital solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logic Lume | Web & App Development Company",
    description:
      "Web development, mobile apps, UI/UX design, and custom software for startups and enterprises.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Logic Lume",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description:
      "Logic Lume is a modern IT solutions company delivering web development, mobile apps, UI/UX design, and digital marketing services.",
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
    },
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
