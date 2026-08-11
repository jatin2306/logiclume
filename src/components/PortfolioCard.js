"use client";

import { ArrowUpRight } from "lucide-react";

const categoryStyles = {
  "Web Development": { gradient: "from-[#1565c0] to-[#0d47a1]", badge: "blue" },
  "App Development": { gradient: "from-[#f58220] to-[#e65100]", badge: "orange" },
  "UI / UX Design": { gradient: "from-[#f58220] to-[#ff9f43]", badge: "orange" },
  "E-Commerce": { gradient: "from-[#1565c0] to-[#1976d2]", badge: "blue" },
  "Custom Software": { gradient: "from-[#0a1628] to-[#1565c0]", badge: "blue" },
  Website: { gradient: "from-[#1565c0] to-[#0d47a1]", badge: "blue" },
  "Mobile App": { gradient: "from-[#f58220] to-[#e65100]", badge: "orange" },
  "Dashboard UI": { gradient: "from-[#0a1628] to-[#1565c0]", badge: "blue" },
};

export default function PortfolioCard({ title, category }) {
  const style = categoryStyles[category] || { gradient: "from-[#1565c0] to-[#0d47a1]", badge: "blue" };

  return (
    <div className="group home-card overflow-hidden">
      <div className={`home-portfolio-thumb bg-gradient-to-br ${style.gradient}`}>
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-7xl font-bold text-white/20 group-hover:text-white/30 group-hover:scale-110 transition-all duration-500">
            {title.charAt(0)}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
            View Project <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      <div className="p-5">
        <span className="rounded-full bg-[var(--color-surface-blue)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
          {category}
        </span>
        <h3 className="mt-3 font-display text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition">
          {title}
        </h3>
      </div>
    </div>
  );
}
