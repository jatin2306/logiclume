import { ArrowUpRight, Globe } from "lucide-react";
import PortfolioThumb from "./PortfolioThumb";
import { getProjectCardLabel, getProjectHostname } from "@/data/portfolioProjects";

export default function PortfolioWorkCard({ project, detailed = false }) {
  const url = project.url?.trim() || null;
  const host = getProjectHostname(url);
  const categoryLabel = getProjectCardLabel(project);
  const imageFit =
    project.imageFit === "cover" || project.imageFit === "cover-left" ? project.imageFit : "contain";
  const accent = project.previewAccent === "orange" ? "orange" : "blue";
  const showClient = project.client && project.client !== project.title;
  const chips = (project.tags ?? []).filter((t) => t !== categoryLabel).slice(0, 3);
  const blurb = project.summary || project.description || "";
  const points = detailed ? (project.deliverables ?? []).slice(0, 2) : [];

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
                  ? "from-[#8b2cf5] to-[#6d28d9]"
                  : "from-[#0066f5] to-[#0040d0]"
              }
              aspectClass="portfolio-work-thumb-fill"
              showOverlay={false}
              imageFit={imageFit}
            />
          </div>
        </div>
        {url ? (
          <>
            <span className="portfolio-work-card-live">
              <i aria-hidden />
              Live
            </span>
            <span className="portfolio-work-card-arrow" aria-hidden>
              <ArrowUpRight size={18} strokeWidth={2.25} />
            </span>
          </>
        ) : null}
      </div>

      <div className="portfolio-work-card-body">
        <div className="portfolio-work-card-copy">
          <div className="portfolio-work-card-main">
            <span className="portfolio-work-card-tag">{categoryLabel}</span>
            <h2 className="portfolio-work-card-title">{project.title}</h2>
            {showClient ? (
              <p className="portfolio-work-card-client">Built for {project.client}</p>
            ) : null}
            {blurb ? <p className="portfolio-work-card-summary">{blurb}</p> : null}
            {points.length ? (
              <ul className="portfolio-work-card-points">
                {points.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {chips.length ? (
              <ul className="portfolio-work-card-chips">
                {chips.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            ) : null}
          </div>
          {url ? (
            <div className="portfolio-work-card-footer">
              <span className="portfolio-work-card-url">
                <Globe size={13} strokeWidth={2.25} aria-hidden />
                {host}
              </span>
              <span className="portfolio-work-card-cta">
                View project
                <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden />
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );

  const className = `portfolio-work-card portfolio-work-card--${accent}${
    detailed ? " portfolio-work-card--detailed" : ""
  }`;

  if (!url) {
    return (
      <article className={`${className} portfolio-work-card--static`}>
        <div className="portfolio-work-card-link">{media}</div>
      </article>
    );
  }

  return (
    <article className={`${className} group`}>
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
