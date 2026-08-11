"use client";

import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonialsData from "../data/testimonials.json";

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonials = testimonialsData;
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIdx, startIdx + itemsPerPage);

  return (
    <section className="home-section section-surface">
      <SiteContainer>
        <SectionHeading
          label="Testimonials"
          title="Real Partnerships, Measurable Outcomes"
          description="Trusted by startups and businesses who've experienced our commitment to quality and results."
          centered
          twoColor
          coloredWords={2}
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-border)] text-[var(--color-text-muted)] font-medium hover:bg-white hover:shadow-md transition"
            >
              <FaChevronLeft size={14} />
              Previous
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`h-2.5 rounded-full transition ${
                    i === currentPage
                      ? "bg-[var(--color-accent)] w-8"
                      : "bg-[var(--color-border)] w-2.5 hover:bg-[var(--color-primary)]"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-border)] text-[var(--color-text-muted)] font-medium hover:bg-white hover:shadow-md transition"
            >
              Next
              <FaChevronRight size={14} />
            </button>
          </div>
        )}
      </SiteContainer>
    </section>
  );
}
