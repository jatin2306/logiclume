"use client";

import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <head>
        <title>DeopersIndia | Web & App Development Company</title>
        <meta
          name="description"
          content="DeopersIndia builds scalable websites, mobile apps, and digital products for startups and enterprises. Expert web development, UI/UX, and cloud solutions."
        />
      </head>
      <body className="bg-[var(--color-light)] text-[var(--color-text)] antialiased">
        <header>
          <Navbar />
        </header>

        <main id="content" className="min-h-screen">
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
