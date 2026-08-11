import { DM_Sans, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const siteUrl = "https://www.deopersindia.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DeopersIndia | Web & App Development Company",
    template: "%s | DeopersIndia",
  },
  description:
    "DeopersIndia builds scalable websites, mobile apps, and digital products for startups and enterprises. Expert web development, UI/UX, and cloud solutions.",
  keywords: [
    "DeopersIndia",
    "web development company",
    "mobile app development",
    "IT solutions India",
    "software development",
  ],
  applicationName: "DeopersIndia",
  authors: [{ name: "DeopersIndia", url: siteUrl }],
  creator: "DeopersIndia",
  publisher: "DeopersIndia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "DeopersIndia",
    title: "DeopersIndia | Web & App Development Company",
    description:
      "DeopersIndia helps startups, businesses, and enterprises establish a strong online presence through modern website development, custom software, mobile apps, and digital solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeopersIndia | Web & App Development Company",
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
    name: "DeopersIndia",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.jpeg`,
    description:
      "DeopersIndia is a modern IT solutions company delivering web development, mobile apps, UI/UX design, and digital marketing services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4/126 Palm Olympia",
      addressLocality: "Greater Noida",
      postalCode: "201306",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9758403169",
      contactType: "customer service",
      email: "info@deopersindia.com",
    },
  };

  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
        <body className="bg-[var(--color-light)] text-[var(--color-text)] antialiased overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <header>
          <Navbar />
        </header>

        <main id="content" className="min-h-screen w-full overflow-x-clip">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
