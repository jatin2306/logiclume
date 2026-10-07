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
  { id: "ai", label: "AI & Automation" },
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
    id: "risk-and-roses",
    numericId: 105,
    title: "Risk & Roses",
    featuredTier: "spotlight",
    category: "FinTech Platform",
    filterTags: ["fintech"],
    tags: ["FinTech", "AI", "Copy Trading", "Next.js", "Python"],
    client: "Risk & Roses",
    url: "https://riskandroses.com/",
    imageSrc: "/images/portfolio/risk-and-roses.png",
    imageFit: "contain",
    previewAccent: "orange",
    accent: "orange",
    description:
      "Live copy-trading platform connecting investors to AI-guided strategies — with automated execution, broker integration, and trade-only access for security.",
    whatWeDid:
      "We built the product end-to-end: AI decision engine and validation checks, automated trade execution, broker integration, investor dashboard, and admin console on Python, Next.js, and PostgreSQL.",
    deliverables: [
      "AI decision engine & validation layer",
      "Automated trade execution & broker integration",
      "Investor dashboard & admin console",
    ],
    summary:
      "Live copy-trading platform with AI decision engine, broker integration, automated execution, and investor/admin consoles — Python, Next.js, PostgreSQL.",
    spotlightLabel: "FinTech · AI · Trading",
    deckChapter: "fintech-ai",
    deckOrder: 1,
    mosaicSize: "large",
  },
  {
    id: "tr-capital",
    numericId: 106,
    title: "TR Capital",
    featuredTier: "spotlight",
    category: "Wealth & Broking",
    filterTags: ["fintech", "mobile"],
    tags: ["FinTech", "Wealth", "Web Platform", "Mobile App"],
    client: "TR Capital",
    url: "https://trcapital.in/",
    imageSrc: "/images/portfolio/tr-capital.png",
    imageFit: "contain",
    previewAccent: "blue",
    accent: "blue",
    description:
      "Full-service investment and stock-broking brand site for a Motilal Oswal business associate — serving 18K+ investors with equity, mutual funds, PMS, F&O, and digital trading platforms since 1995.",
    whatWeDid:
      "We designed and built the marketing and conversion experience — service catalogues, lead capture, investor education, platform highlights for RIISE mobile app and strategy builder, and trust content aligned with regulated broking workflows.",
    deliverables: [
      "Multi-product services & investor journeys",
      "Demat lead forms & contact funnels",
      "Platform showcase (RIISE app & strategy builder)",
    ],
    summary:
      "Wealth and broking web platform for TR Capital — multi-product investor services, Motilal Oswal-aligned digital platforms, and lead-to-advisor conversion flows.",
    spotlightLabel: "FinTech · Wealth · Broking",
    deckChapter: "fintech-ai",
    deckOrder: 2,
    mosaicSize: "wide",
  },
  {
    id: "plutheia",
    numericId: 107,
    title: "Plutheia",
    featuredTier: "spotlight",
    category: "Trading SaaS",
    filterTags: ["fintech"],
    tags: ["FinTech", "AI", "SaaS", "Trading Automation"],
    client: "Plutheia",
    url: "https://plutheia.com/",
    imageSrc: "/images/portfolio/plutheia-pricing.png",
    imageFit: "contain",
    previewAccent: "blue",
    accent: "blue",
    description:
      "AI-powered trading automation platform with Investment Pies, paper and live execution via Alpaca, swing signals, and Free vs Pro subscription tiers — built for transparent, self-directed investors.",
    whatWeDid:
      "We engineered the product experience end-to-end: pricing and onboarding flows, portfolio pies and watchlists, AI stock analysis and daily briefings, broker-connected paper/live trading, drift detection, community features, and Telegram alert integrations.",
    deliverables: [
      "Free & Pro SaaS pricing + account tiers",
      "AI analysis, signals & automated pie rebalancing",
      "Alpaca paper/live trading integration",
    ],
    summary:
      "Trading automation SaaS with AI intelligence, Investment Pies, Alpaca broker integration, paper trading on every plan, and Pro tier for unlimited watchlists and daily AI picks.",
    spotlightLabel: "FinTech · AI · SaaS",
    deckChapter: "fintech-ai",
    deckOrder: 3,
    mosaicSize: "medium",
  },
  {
    id: "goldsky",
    numericId: 108,
    title: "Goldsky",
    featuredTier: "spotlight",
    category: "AI Marketplace",
    filterTags: ["ai"],
    tags: ["AI", "Workflow Automation", "Marketplace", "Web Platform"],
    client: "Goldsky Equestrian Recruiting",
    url: "https://goldskyer.com/home-957344",
    imageSrc: "/images/portfolio/goldsky.png",
    imageFit: "contain",
    previewAccent: "orange",
    accent: "orange",
    description:
      "Equestrian industry recruiting platform that matches stables with skilled professionals — using AI-driven personality and skills matching to reduce turnover and speed up hiring.",
    whatWeDid:
      "We built the end-to-end product: employer and employee onboarding, job posting workflows, top-3 smart matching, real-time notifications, Gold and Concierge hiring plans, founding-member growth flows, and referral automation.",
    deliverables: [
      "AI match-making & top-3 candidate ranking",
      "Employer job posts + employee profile workflows",
      "Tiered plans, guarantees & referral program (Refer & Ride)",
    ],
    summary:
      "AI-powered equestrian recruiting marketplace — profile-to-hire workflows, smart matching for employers and riders, and automated notifications from post to hire.",
    spotlightLabel: "AI · Workflow Automation",
    deckChapter: "ai-automation",
    deckOrder: 1,
    mosaicSize: "large",
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
    id: "fintech-ai",
    label: "FinTech & AI",
    title: "Intelligent trading & automation",
    blurb:
      "Copy-trading, wealth and broking platforms, AI automation, and investor-facing web and mobile experiences built for regulated financial markets.",
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    title: "Smart matching & workflow products",
    blurb:
      "AI-led marketplaces and operational workflows — from intelligent candidate matching and notifications to tiered SaaS plans that automate hire-to-match journeys.",
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
