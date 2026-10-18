/**
 * Public portfolio catalog (~45 projects), balanced across industries.
 * Full list remains in portfolioProjects.js for homepage flagships / internal use.
 */
export const PORTFOLIO_PUBLIC_COUNT_LABEL = "40+";

export const CURATED_PORTFOLIO_IDS = new Set([
  /* Tier 1 — enterprise & live web */
  "myclinicdesk",
  "altuwell",
  "careadjustor",
  "siderina",
  "stillra",
  "first-rewards",
  "shopwise",
  "risk-and-roses",
  "tr-capital",
  "plutheia",
  "goldsky",
  "propti",
  /* Spotlight / grid with real assets */
  "agarwal-estates",
  "wasalt",
  /* Tier 3 — growth (2 per vertical) */
  "drivepulse",
  "chargegrid",
  "ticketlane",
  "streamvault",
  "cartlane",
  "marketmint",
  "fleetroute",
  "ridemetro",
  "factorypulse",
  "qualitygate",
  "tripnest",
  "staylocal",
  "lexflow",
  "auditscope",
  "devstack-cloud",
  "vaultcrm",
  "paygrid",
  "insurehub",
  "campuslearn",
  "skillforge",
  "nestfind",
  "rentgrid",
  /* Tier 4 — SMB / MVP samples */
  "garagebook",
  "bakershelf",
  "formstack-mvp",
  "tuitiondesk",
  "branchcrm",
  "warepulse",
  "policydesk",
  "campusops",
]);

export function isCuratedPortfolioProject(project) {
  return CURATED_PORTFOLIO_IDS.has(project.id);
}
