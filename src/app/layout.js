"use client"
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <>
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
        </>
      </body>
    </html>
  );
}
