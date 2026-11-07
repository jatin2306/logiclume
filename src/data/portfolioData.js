import { getHomePortfolioProjects } from "./portfolioProjects";

/** Homepage card lines only. Facts stay within each project's existing summary. */
const homeDescriptions = {
  100: "Clinic software for small practices: appointments, online booking, WhatsApp reminders, patient records, and billing in one system.",
  97: "A caregiving app for families to share a care journal, medication reminders, and lab results across the care circle on iOS and Android.",
  99: "Clinic software for chiropractors and physiotherapists, with booking, calendar, encrypted records, invoicing, and reporting in eight languages.",
  98: "Practice management for small UK clinics, joining booking, consent, the diary, clinical notes, and invoicing in one patient record.",
  96: "A diabetes companion app that shows live CGM readings, filters alarms, and prepares daily briefs and a one-page doctor's brief.",
  205: "Turns uploaded commercial lease PDFs into structured terms, rent schedules, and reminders for landlords and tenants.",
  208: "An iOS app for UK property investors that turns a listing, screenshot, or notes into yield, tax, and strategy analysis.",
  105: "A copy-trading platform that connects investors to AI-guided strategies, with automated execution and broker integration.",
};

const featuredPortfolio = getHomePortfolioProjects().map((p) => ({
  id: p.numericId,
  title: p.title,
  category: p.category,
  client: p.client,
  url: p.url,
  imageSrc: p.imageSrc,
  previewAccent: p.previewAccent,
  imageFit: p.imageFit,
  description: homeDescriptions[p.numericId] || p.summary,
  featured: false,
}));

export const portfolioData = featuredPortfolio;
