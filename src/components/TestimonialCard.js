"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function TestimonialCard({ name, designation, company, text, rating = 5 }) {
  return (
    <div className="group relative card-elevated rounded-2xl p-8 bg-white hover:shadow-xl hover:border-[rgba(0,102,245,0.2)] transition-all duration-300 h-full flex flex-col">
      <FaQuoteLeft className="text-[rgba(0,102,245,0.15)] text-3xl mb-4" />

      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-[var(--color-accent)]" size={14} />
        ))}
      </div>

      <p className="text-[var(--color-text-muted)] leading-relaxed flex-grow italic">
        &ldquo;{text}&rdquo;
      </p>

      <div className="flex items-center gap-4 pt-6 mt-6 border-t border-[var(--color-border)]">
        <div className="w-12 h-12 rounded-full icon-badge-brand flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-[var(--color-text)]">{name}</p>
          <p className="text-sm text-[var(--color-text-muted)]">{designation}</p>
          {company && <p className="text-xs text-[var(--color-primary)] font-medium">{company}</p>}
        </div>
      </div>
    </div>
  );
}
