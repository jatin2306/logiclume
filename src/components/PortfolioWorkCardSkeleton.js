export default function PortfolioWorkCardSkeleton({ detailed = false }) {
  return (
    <article
      className={`portfolio-work-card portfolio-work-card--skeleton${
        detailed ? " portfolio-work-card--detailed" : ""
      }`}
      aria-hidden="true"
    >
      <div className="portfolio-work-card-link">
        <div className="portfolio-work-card-media">
          <div className="portfolio-work-browser">
            <div className="portfolio-work-browser-chrome portfolio-skeleton-shimmer">
              <span className="portfolio-skeleton-line portfolio-skeleton-line--short" />
            </div>
            <div className="portfolio-work-browser-viewport portfolio-skeleton-shimmer portfolio-skeleton-viewport" />
          </div>
        </div>
        <div className="portfolio-work-card-body">
          <span className="portfolio-skeleton-pill portfolio-skeleton-shimmer" />
          <span className="portfolio-skeleton-line portfolio-skeleton-line--title portfolio-skeleton-shimmer" />
          <span className="portfolio-skeleton-line portfolio-skeleton-line--sub portfolio-skeleton-shimmer" />
        </div>
      </div>
    </article>
  );
}

export function PortfolioWorkGridSkeleton({ count = 9, pair = false }) {
  return (
    <ul
      className={`portfolio-work-grid${pair ? " portfolio-work-grid--pair" : ""}`}
      aria-busy="true"
      aria-label="Loading projects"
    >
      {Array.from({ length: count }, (_, i) => (
        <li key={i} className="portfolio-work-grid-cell">
          <PortfolioWorkCardSkeleton detailed={pair} />
        </li>
      ))}
    </ul>
  );
}
