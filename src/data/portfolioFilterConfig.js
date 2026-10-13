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
