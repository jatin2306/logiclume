import { getHomeGridProjects } from "./portfolioProjects";

const featuredPortfolio = getHomeGridProjects().map((p) => ({
  id: p.numericId,
  title: p.title,
  category: p.category,
  client: p.client,
  url: p.url,
  imageSrc: p.imageSrc,
  previewAccent: p.previewAccent,
  featured: false,
}));

export const portfolioData = featuredPortfolio;
