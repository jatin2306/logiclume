"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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

function CardInner({ title, category, client, imageSrc, featured }) {
  const style = categoryStyles[category] || { gradient: "from-[#1565c0] to-[#0d47a1]", badge: "blue" };

  return (
    <>
      <div className={`home-portfolio-thumb relative aspect-[4/3] bg-gradient-to-br ${style.gradient}`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white/20 group-hover:text-white/30 group-hover:scale-110 transition-all duration-500">
              {title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.6)] via-transparent to-transparent" />
        {featured && client && (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)] shadow-sm">
            {client}
          </span>
        )}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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

export default function PortfolioCard({ title, category, client, url, imageSrc, featured }) {
  const className = "group home-card overflow-hidden h-full";

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <CardInner
          title={title}
          category={category}
          client={client}
          imageSrc={imageSrc}
          featured={featured}
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
        imageSrc={imageSrc}
        featured={featured}
      />
    </div>
  );
}
