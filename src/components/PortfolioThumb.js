"use client";

import { useCallback, useEffect, useState } from "react";
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
  gradientClass = "from-[#111111] to-[#000000]",
  aspectClass = "aspect-[4/3]",
  showOverlay = true,
  featured,
  client,
  imageFit = "cover",
}) {
  const hostname = hostnameFromUrl(previewUrl);
  const isContain = imageFit === "contain";
  const coverLeft = imageFit === "cover-left";
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageFailed(false);
    setImageLoaded(false);
  }, [imageSrc]);

  const onImageError = useCallback(() => {
    setImageFailed(true);
    setImageLoaded(true);
  }, []);

  const showImage = Boolean(imageSrc) && !imageFailed;

  const onImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      className={`home-portfolio-thumb relative overflow-hidden ${aspectClass} ${
        isContain
          ? "home-portfolio-thumb--contain bg-[#eef1f5]"
          : `bg-gradient-to-br ${gradientClass}`
      }${coverLeft ? " home-portfolio-thumb--cover-left" : ""}`}
    >
      {showImage && !imageLoaded ? (
        <div className="portfolio-thumb-skeleton portfolio-skeleton-shimmer" aria-hidden />
      ) : null}
      {showImage ? (
        isContain ? (
          <div className="home-portfolio-thumb__frame">
            <Image
              src={imageSrc}
              alt=""
              fill
              className={`portfolio-thumb-img object-contain object-top transition-transform duration-500 group-hover:scale-[1.02] ${
                imageLoaded ? "portfolio-thumb-img--loaded" : "portfolio-thumb-img--loading"
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={onImageError}
              onLoad={onImageLoad}
            />
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt=""
            fill
            className={`object-cover object-center transition-transform duration-500 group-hover:scale-[1.04] ${
              imageLoaded ? "portfolio-thumb-img--loaded" : "portfolio-thumb-img--loading"
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onError={onImageError}
            onLoad={onImageLoad}
          />
        )
      ) : (
        <PortfolioBrandPreview title={title} hostname={hostname} accent={previewAccent} />
      )}

      {showOverlay && showImage && !isContain && (
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
