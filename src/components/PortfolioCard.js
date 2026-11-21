"use client";

import { ArrowUpRight } from "lucide-react";
import PortfolioThumb from "./PortfolioThumb";

const categoryStyles = {
  "Enterprise Platform": { gradient: "from-[#0f4c8a] to-[#1570d6]", badge: "blue" },
  "Web Development": { gradient: "from-[#1570d6] to-[#0f4c8a]", badge: "blue" },
  "App Development": { gradient: "from-[#1570d6] to-[#0f4c8a]", badge: "orange" },
  "UI / UX Design": { gradient: "from-[#0f8f86] to-[#0b736c]", badge: "orange" },
  "E-Commerce": { gradient: "from-[#1570d6] to-[#0f4c8a]", badge: "blue" },
  "Custom Software": { gradient: "from-[#0f4c8a] to-[#1570d6]", badge: "blue" },
  Website: { gradient: "from-[#1570d6] to-[#0f4c8a]", badge: "blue" },
  "Mobile App": { gradient: "from-[#1570d6] to-[#0f4c8a]", badge: "orange" },
  "Dashboard UI": { gradient: "from-[#0f4c8a] to-[#1570d6]", badge: "blue" },
};

function CardInner({ title, category, client, url, imageSrc, previewAccent, featured, imageFit, description }) {
  const style = categoryStyles[category] || { gradient: "from-[#1570d6] to-[#0f4c8a]", badge: "blue" };
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
        {description ? (
          <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
            {description}
          </p>
        ) : null}
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
  description,
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
          description={description}
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
        description={description}
      />
    </div>
  );
}
