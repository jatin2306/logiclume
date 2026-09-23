"use client";

import Image from "next/image";

function PortfolioBrandPreview({ title, hostname, accent = "blue" }) {
  const accentClass =
    accent === "orange" ? "portfolio-brand-preview--orange" : "portfolio-brand-preview--blue";

  return (
    <div className={`portfolio-brand-preview ${accentClass}`}>
      <div className="portfolio-brand-preview-chrome">
        <span className="portfolio-brand-preview-dot" />
        <span className="portfolio-brand-preview-dot" />
        <span className="portfolio-brand-preview-dot" />
        <span className="portfolio-brand-preview-url">{hostname}</span>
      </div>
      <div className="portfolio-brand-preview-body">
        <p className="portfolio-brand-preview-name">{title}</p>
        <div className="portfolio-brand-preview-ui" aria-hidden="true">
          <span className="portfolio-brand-preview-bar" />
          <span className="portfolio-brand-preview-bar portfolio-brand-preview-bar--short" />
          <span className="portfolio-brand-preview-block" />
        </div>
      </div>
    </div>
  );
}

function hostnameFromUrl(url) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/**
 * Portfolio card media — local screenshot or CSS product preview (no iframes).
 */
export default function PortfolioThumb({
  title,
  imageSrc,
  previewUrl,
  previewAccent = "blue",
  gradientClass = "from-[#1565c0] to-[#0d47a1]",
  aspectClass = "aspect-[4/3]",
  showOverlay = true,
  featured,
  client,
}) {
  const hostname = hostnameFromUrl(previewUrl);

  return (
    <div
      className={`home-portfolio-thumb relative overflow-hidden bg-gradient-to-br ${gradientClass} ${aspectClass}`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      ) : (
        <PortfolioBrandPreview title={title} hostname={hostname} accent={previewAccent} />
      )}

      {showOverlay && imageSrc && (
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.6)] via-transparent to-transparent pointer-events-none" />
      )}

      {featured && client && (
        <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)] shadow-sm z-[2]">
          {client}
        </span>
      )}
    </div>
  );
}
