import { ArrowUpRight } from "lucide-react";
import PortfolioThumb from "./PortfolioThumb";
import { getProjectCardLabel, getProjectHostname } from "@/data/portfolioProjects";

export default function PortfolioWorkCard({ project }) {
  const url = project.url?.trim() || null;
  const host = getProjectHostname(url);
  const categoryLabel = getProjectCardLabel(project);
  const imageFit = project.imageFit === "cover" ? "cover" : "contain";
  const media = (
    <>
      <div className="portfolio-work-card-media">
        <div className="portfolio-work-browser">
          <div className="portfolio-work-browser-chrome">
            <span className="portfolio-work-browser-dots" aria-hidden>
              <i />
              <i />
              <i />
            </span>
            <span className="portfolio-work-browser-url">{host || project.title}</span>
          </div>
          <div className="portfolio-work-browser-viewport">
            <PortfolioThumb
              title={project.title}
              imageSrc={project.imageSrc}
              previewUrl={url}
              previewAccent={project.previewAccent}
              gradientClass={
                project.previewAccent === "orange"
                  ? "from-[#f58220] to-[#e65100]"
                  : "from-[#1565c0] to-[#0d47a1]"
              }
              aspectClass="portfolio-work-thumb-fill"
              showOverlay={false}
              imageFit={imageFit}
            />
          </div>
        </div>
        {url ? (
          <span className="portfolio-work-card-arrow" aria-hidden>
            <ArrowUpRight size={18} strokeWidth={2.25} />
          </span>
        ) : null}
      </div>

      <div className="portfolio-work-card-body">
        <span className="portfolio-work-card-tag">{categoryLabel}</span>
        <h2 className="portfolio-work-card-title">{project.title}</h2>
        <p className="portfolio-work-card-client">{project.client}</p>
        {host ? <p className="portfolio-work-card-url">{host}</p> : null}
      </div>
    </>
  );

  if (!url) {
    return (
      <article className="portfolio-work-card portfolio-work-card--static">
        <div className="portfolio-work-card-link">{media}</div>
      </article>
    );
  }

  return (
    <article className="portfolio-work-card group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio-work-card-link"
        aria-label={`${project.title} — ${host} (opens in new tab)`}
      >
        {media}
      </a>
    </article>
  );
}
