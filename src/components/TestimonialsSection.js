"use client";

import { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import SectionHeading from './SectionHeading';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import testimonialsData from '../data/testimonials.json';

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = testimonialsData;

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIdx, startIdx + itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="testimonials" className="py-16 md:py-5 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          title="What Our Clients Say"
          description="Real feedback from our satisfied clients who have experienced our services"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={handlePrev}
              className="flex items-center gap-2 px-6 py-3 text-orange-500 transition font-semibold hover:bg-slate-800"
            >
              <FaChevronLeft size={18} />
              Previous
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    i === currentPage
                      ? 'bg-orange-500'
                      : 'bg-orange-300 hover:bg-orange-400'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 text-orange-500 transition font-semibold"
            >
              Next
              <FaChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
