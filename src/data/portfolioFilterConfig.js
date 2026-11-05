/** Industry filters on /portfolio (verticals) — shared by data + URL helpers */
export const portfolioFilters = [
  { id: "all", label: "All projects" },
  { id: "automotive", label: "Automotive" },
  { id: "realestate", label: "Real Estate" },
  { id: "entertainment", label: "Entertainment" },
  { id: "ecommerce", label: "Retail & E-Commerce" },
  { id: "healthcare", label: "Healthcare" },
  { id: "transportation", label: "Transportation" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "construction", label: "Construction Management" },
  { id: "travel", label: "Travel & Tourism" },
  { id: "professional", label: "Professional Services" },
  { id: "software", label: "Software Vendors" },
  { id: "banking", label: "Banking & Finance" },
  { id: "education", label: "Education" },
];

export const portfolioViewModes = [
  { id: "all", label: "All projects" },
  { id: "industries", label: "Industries" },
  { id: "services", label: "Capabilities" },
];

export const portfolioServiceFilters = [
  { id: "all", label: "All services" },
  { id: "enterprise", label: "Enterprise Platforms", matchTags: ["enterprise", "banking"] },
  { id: "commerce", label: "E-Commerce & Rewards", matchTags: ["ecommerce"] },
  { id: "ai", label: "AI & Automation", matchTags: ["ai"] },
  { id: "mobile", label: "Mobile Products", matchTags: ["mobile"] },
];

/** Delivery scale — tier 1–2 = live / enterprise web; 3 = growth; 4 = SMB & MVP */
export const portfolioScaleFilters = [
  { id: "all", label: "All tiers" },
  { id: "live", label: "Live websites", matchTiers: [1, 2] },
  { id: "tier3", label: "Tier 3 — Growth", matchTiers: [3] },
  { id: "tier4", label: "Tier 4 — SMB & MVP", matchTiers: [4] },
];
