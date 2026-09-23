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
          className="home-section-head max-w-3xl mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="testimonial-pagination">
            <button
              onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
              className="testimonial-pagination-btn"
              aria-label="Previous testimonials"
            >
              <FaChevronLeft size={14} />
              <span>Previous</span>
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
              className="testimonial-pagination-btn"
              aria-label="Next testimonials"
            >
              <span>Next</span>
              <FaChevronRight size={14} />
            </button>
          </div>
        )}
      </SiteContainer>
    </section>
  );
}
