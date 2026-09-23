"use client";

import { ArrowUpRight } from "lucide-react";
import PortfolioThumb from "./PortfolioThumb";

const categoryStyles = {
  "Enterprise Platform": { gradient: "from-[#0a1628] to-[#1565c0]", badge: "blue" },
  "Web Development": { gradient: "from-[#1565c0] to-[#0d47a1]", badge: "blue" },
  "App Development": { gradient: "from-[#f58220] to-[#e65100]", badge: "orange" },
  "UI / UX Design": { gradient: "from-[#f58220] to-[#ff9f43]", badge: "orange" },
  "E-Commerce": { gradient: "from-[#1565c0] to-[#1976d2]", badge: "blue" },
  "Custom Software": { gradient: "from-[#0a1628] to-[#1565c0]", badge: "blue" },
  Website: { gradient: "from-[#1565c0] to-[#0d47a1]", badge: "blue" },
  "Mobile App": { gradient: "from-[#f58220] to-[#e65100]", badge: "orange" },
  "Dashboard UI": { gradient: "from-[#0a1628] to-[#1565c0]", badge: "blue" },
};

function CardInner({ title, category, client, url, imageSrc, previewAccent, featured, imageFit }) {
  const style = categoryStyles[category] || { gradient: "from-[#1565c0] to-[#0d47a1]", badge: "blue" };
  const accent = previewAccent || style.badge;

  return (
    <>
      <div className="relative">
        <PortfolioThumb
          title={title}
          imageSrc={imageSrc}
          previewUrl={url}
          previewAccent={accent}
          gradientClass={style.gradient}
          featured={featured}
          client={client}
          imageFit={imageFit}
          aspectClass={imageFit === "contain" ? "aspect-[16/10]" : "aspect-[4/3]"}
          showOverlay={imageFit !== "contain"}
        />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-[2]">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
            View Live <ArrowUpRight size={14} />
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
        {client && (
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">Built for {client}</p>
        )}
      </div>
    </>
  );
}

export default function PortfolioCard({
  title,
  category,
  client,
  url,
  imageSrc,
  previewAccent,
  featured,
  imageFit,
}) {
  const className = "group home-card overflow-hidden h-full";

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        <CardInner
          title={title}
          category={category}
          client={client}
          url={url}
          imageSrc={imageSrc}
          previewAccent={previewAccent}
          featured={featured}
          imageFit={imageFit}
        />
      </a>
    );
  }

  return (
    <div className={className}>
      <CardInner
        title={title}
        category={category}
        client={client}
        url={url}
        imageSrc={imageSrc}
        previewAccent={previewAccent}
        featured={featured}
        imageFit={imageFit}
      />
    </div>
  );
}
