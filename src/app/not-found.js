"use client";

import Link from "next/link";
import Button from "@/components/Button";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-black)] to-black flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Title */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Page Not Found
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12 text-4xl sm:text-5xl md:text-6xl opacity-70">
          🔍
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center flex-wrap">
          <Button href="/" variant="primary" size="lg" className="gap-2">
            <FaHome size={18} />
            Go Home
          </Button>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold rounded-lg hover:bg-[var(--color-secondary)] hover:text-white transition duration-300 text-sm sm:text-base"
          >
            <FaArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-xs sm:text-sm mb-4">Popular Pages</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/donate", label: "Donate" },
              { href: "/volunteer", label: "Volunteer" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition text-xs sm:text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
