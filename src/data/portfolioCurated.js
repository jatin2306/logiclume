/**
 * Public portfolio catalog (~45 projects), balanced across industries.
 * Full list remains in portfolioProjects.js for homepage flagships / internal use.
 */
export const PORTFOLIO_PUBLIC_COUNT_LABEL = "45+";

export const CURATED_PORTFOLIO_IDS = new Set([
  /* Tier 1 — enterprise & live web */
  "first-rewards",
  "shopwise",
  "risk-and-roses",
  "tr-capital",
  "plutheia",
  "goldsky",
  "kayzen",
  "propti",
  /* Spotlight / grid with real assets */
  "arcx",
  "pharmatop",
  "agarwal-estates",
  "wasalt",
  /* Tier 3 — growth (2 per vertical) */
  "drivepulse",
  "chargegrid",
  "ticketlane",
  "streamvault",
  "cartlane",
  "marketmint",
  "carebridge",
  "medsync",
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
  "cliniclite",
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
