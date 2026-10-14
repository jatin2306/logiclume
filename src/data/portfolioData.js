import { getHomePortfolioProjects } from "./portfolioProjects";

const featuredPortfolio = getHomePortfolioProjects().map((p) => ({
  id: p.numericId,
  title: p.title,
  category: p.category,
  client: p.client,
  url: p.url,
  imageSrc: p.imageSrc,
  previewAccent: p.previewAccent,
  imageFit: p.imageFit,
  featured: false,
}));

export const portfolioData = featuredPortfolio;
