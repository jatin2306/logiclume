"use client";

import { ArrowUpRight } from "lucide-react";

const categoryStyles = {
  "Web Development": { bg: "bg-[var(--color-primary)]", badge: "blue" },
  "App Development": { bg: "bg-[var(--color-accent)]", badge: "orange" },
  "UI / UX Design": { bg: "bg-[var(--color-accent)]", badge: "orange" },
  "E-Commerce": { bg: "bg-[var(--color-primary)]", badge: "blue" },
  "Custom Software": { bg: "bg-[var(--color-primary-dark)]", badge: "blue" },
  Website: { bg: "bg-[var(--color-primary)]", badge: "blue" },
  "Mobile App": { bg: "bg-[var(--color-accent)]", badge: "orange" },
  "Dashboard UI": { bg: "bg-[var(--color-primary-dark)]", badge: "blue" },
};

export default function PortfolioCard({ title, category }) {
  const style = categoryStyles[category] || { bg: "bg-[var(--color-primary)]", badge: "blue" };

  return (
    <div className="group relative overflow-hidden rounded-2xl card-light hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
      <div className={`relative h-56 ${style.bg} overflow-hidden`}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl font-bold text-white/15 group-hover:text-white/25 transition">
            {title.charAt(0)}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      <div className="p-5">
        <span className="rounded-full bg-[var(--color-surface-blue)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
          {category}
        </span>
        <h3 className="mt-3 font-display text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition">
          {title}
        </h3>
        <button className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition">
          View Project
          <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
}
