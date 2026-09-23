export const companyPillars = [
  {
    title: "Product Engineering",
    description: "Web apps, mobile products & custom software from prototype to production.",
  },
  {
    title: "Enterprise Platforms",
    description: "Banking, fintech & rewards systems built for security, scale & compliance.",
  },
  {
    title: "Design & Delivery",
    description: "UI/UX, agile sprints & dedicated teams — shipped on time, every time.",
  },
];

/** Filter chips on /portfolio */
export const portfolioFilters = [
  { id: "all", label: "All work" },
  { id: "fintech", label: "FinTech" },
  { id: "health", label: "Health Tech" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "realestate", label: "Real Estate" },
  { id: "edtech", label: "EdTech" },
  { id: "mobile", label: "Mobile" },
];

/**
 * Single source for homepage featured work + portfolio page.
 * featuredTier: flagship (home hero cards) | spotlight (large portfolio rows) | grid
 */
export const portfolioProjects = [
  {
    id: "first-rewards",
    numericId: 101,
    title: "First Rewards",
    featuredTier: "flagship",
    category: "Enterprise Platform",
    filterTags: ["fintech", "enterprise"],
    tags: ["FinTech", "Web Platform", "Enterprise"],
    client: "IDFC Bank",
    partnerShort: "IDFC",
    partnerNote: "Enterprise rewards platform",
    url: "https://firstrewards.in/",
    imageSrc: "/images/portfolio/first-rewards.jpg",
    imageFit: "contain",
    previewAccent: "blue",
    accent: "blue",
    description:
      "End-to-end loyalty and rewards portal for IDFC Bank — enabling customers to earn, track, and redeem rewards through a secure, high-traffic web experience.",
    whatWeDid:
      "We designed and engineered the full platform — member dashboards, reward catalogues, admin tooling, and integrations built for banking-grade security and scale.",
    deliverables: [
      "Customer rewards portal & dashboard",
      "Admin & campaign management",
      "Secure API integrations",
    ],
    summary:
      "Banking-grade rewards portal with member dashboards, catalogues, and secure integrations at enterprise scale.",
    spotlightLabel: "Enterprise · FinTech",
    deckChapter: "enterprise",
    deckOrder: 1,
    mosaicSize: "large",
  },
  {
    id: "shopwise",
    numericId: 102,
    title: "ShopWise",
    featuredTier: "flagship",
    category: "E-Commerce",
    filterTags: ["fintech", "ecommerce"],
    tags: ["E-Commerce", "Rewards", "Enterprise"],
    client: "American Express",
    partnerShort: "Amex",
    partnerNote: "Rewards commerce marketplace",
    url: "https://shopwise.giftstacc.com/",
    imageSrc: "/images/portfolio/shopwise-home.png",
    imageFit: "contain",
    previewAccent: "orange",
    accent: "orange",
    description:
      "Premium shopping and rewards marketplace for American Express cardmembers — a polished commerce experience within the GiftStacc rewards ecosystem.",
    whatWeDid:
      "We built the storefront, checkout flows, and partner catalogue UI — optimized for conversions, mobile-first browsing, and seamless rewards redemption.",
    deliverables: [
      "Rewards shopping marketplace",
      "Product discovery & checkout",
      "Partner catalogue integration",
    ],
    summary:
      "Premium Amex rewards marketplace with mobile-first commerce, checkout, and partner catalogue integration.",
    spotlightLabel: "E-Commerce · Rewards",
    deckChapter: "commerce",
    deckOrder: 2,
    mosaicSize: "wide",
  },
  {
    id: "kayzen",
    numericId: 201,
    title: "Kayzen",
    featuredTier: "spotlight",
    category: "Health Tech",
    filterTags: ["health"],
    tags: ["Health Tech", "UI/UX", "Web Platform"],
    client: null,
    url: null,
    imageSrc: "/images/portfolio/kayzen.webp",
    previewAccent: "blue",
    accent: "blue",
    summary:
      "A trusted psychologist panel platform — booking, sessions, and care journeys designed for clarity and trust.",
    spotlightLabel: "Health Tech · Platform",
    deckChapter: "healthcare",
    deckOrder: 1,
    mosaicSize: "large",
  },
  {
    id: "propti",
    numericId: 204,
    title: "Propti",
    featuredTier: "spotlight",
    category: "Real Estate",
    filterTags: ["realestate"],
    tags: ["Real Estate", "3D", "Web Platform"],
    client: null,
    url: "https://propti.no/",
    imageSrc: "/images/portfolio/propti.png",
    previewAccent: "blue",
    accent: "blue",
    summary:
      "Property discovery with immersive previews and configuration tools for buyers and developers.",
    spotlightLabel: "Real Estate · Web",
    deckChapter: "property",
    deckOrder: 1,
    mosaicSize: "wide",
  },
  {
    id: "arcx",
    numericId: 202,
    title: "ArcX",
    featuredTier: "grid",
    category: "Mobile App",
    filterTags: ["health", "mobile"],
    tags: ["Health Tech", "Mobile", "IoT"],
    client: null,
    url: null,
    imageSrc: "/images/portfolio/arcx.webp",
    previewAccent: "orange",
    accent: "orange",
    summary: "Digital experience for smart health sensing — performance-focused mobile UI.",
    deckChapter: "healthcare",
    deckOrder: 2,
    mosaicSize: "tall",
  },
  {
    id: "pharmatop",
    numericId: 203,
    title: "Pharmatop",
    featuredTier: "grid",
    category: "EdTech",
    filterTags: ["edtech", "health"],
    tags: ["EdTech", "Pharma", "Analytics"],
    client: null,
    url: null,
    imageSrc: "/images/portfolio/pharmatop.webp",
    previewAccent: "blue",
    accent: "blue",
    summary: "AI-informed insights dashboard for pharma learning and decision support.",
    deckChapter: "healthcare",
    deckOrder: 3,
    mosaicSize: "medium",
  },
  {
    id: "agarwal-estates",
    numericId: 206,
    title: "Agarwal Estates",
    featuredTier: "grid",
    category: "Website",
    filterTags: ["realestate"],
    tags: ["Real Estate", "Marketing Site"],
    client: null,
    url: "https://agarwalestates.com/",
    imageSrc: "/images/portfolio/agarwal-home.png",
    imageFit: "contain",
    previewAccent: "blue",
    accent: "blue",
    summary: "Brand-led property marketing site with lead capture and project storytelling.",
    deckChapter: "property",
    deckOrder: 2,
    mosaicSize: "small",
  },
  {
    id: "wasalt",
    numericId: 207,
    title: "Wasalt",
    featuredTier: "grid",
    category: "E-Commerce",
    filterTags: ["ecommerce", "realestate"],
    tags: ["Marketplace", "Real Estate"],
    client: null,
    url: "https://wasalt.sa/en",
    imageSrc: "/images/portfolio/wasalt-hero.png",
    imageFit: "contain",
    previewAccent: "orange",
    accent: "orange",
    summary: "High-traffic property marketplace UX patterns and scalable front-end delivery.",
    deckChapter: "property",
    deckOrder: 3,
    mosaicSize: "medium",
  },
];

export const portfolioDeckChapters = [
  {
    id: "healthcare",
    label: "Healthcare",
    title: "Health platforms & connected care",
    blurb:
      "Patient-facing portals, clinician tools, and sensor-led mobile experiences engineered for trust, clarity, and compliance-ready architecture.",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    title: "Banking-grade digital platforms",
    blurb:
      "Rewards, loyalty, and high-traffic member experiences with secure integrations and admin tooling built for national-scale programs.",
  },
  {
    id: "commerce",
    label: "Commerce",
    title: "Rewards & marketplace products",
    blurb:
      "Conversion-focused storefronts, catalogue UX, and checkout flows inside enterprise rewards ecosystems.",
  },
  {
    id: "property",
    label: "Property",
    title: "Real estate & discovery",
    blurb:
      "Immersive property previews, marketing sites, and marketplace front-ends for buyers and developers.",
  },
];

export function getFlagshipProjects() {
  return portfolioProjects
    .filter((p) => p.featuredTier === "flagship")
    .map((p) => ({
      id: p.id,
      portfolioId: p.numericId,
      name: p.title,
      url: p.url,
      partner: p.client,
      partnerShort: p.partnerShort,
      partnerNote: p.partnerNote,
      category: p.category,
      description: p.description,
      whatWeDid: p.whatWeDid,
      deliverables: p.deliverables,
      tags: p.tags,
      accent: p.accent,
      previewAccent: p.previewAccent,
      imageSrc: p.imageSrc,
      imageFit: p.imageFit,
    }));
}

export function getSpotlightProjects() {
  return portfolioProjects.filter((p) => p.featuredTier === "spotlight");
}

export function getGridProjects() {
  return portfolioProjects.filter((p) => p.featuredTier === "grid");
}

/** Portfolio page grid: spotlight + grid (excludes homepage flagships). */
export function getPortfolioGridProjects() {
  return portfolioProjects.filter(
    (p) => p.featuredTier === "grid" || p.featuredTier === "spotlight"
  );
}

export function getHomeGridProjects() {
  return getPortfolioGridProjects();
}

export function getDeckProjectsByChapter(chapterId) {
  return portfolioProjects
    .filter((p) => p.deckChapter === chapterId)
    .sort((a, b) => (a.deckOrder ?? 99) - (b.deckOrder ?? 99));
}

export function getMosaicProjects() {
  return [...portfolioProjects].sort((a, b) => {
    const order = { large: 0, wide: 1, tall: 2, medium: 3, small: 4 };
    return (order[a.mosaicSize] ?? 5) - (order[b.mosaicSize] ?? 5);
  });
}
