/**
 * Reference URLs + preview images for portfolio cards without local screenshots.
 * Thumbnails use stable Picsum seeds (Unsplash hotlinks often 404 in production).
 */

const thumb = (seed) =>
  `https://picsum.photos/seed/deopers-${encodeURIComponent(seed)}/960/600`;

/** Sector defaults when a project has no explicit media row */
export const portfolioSectorFallback = {
  automotive: {
    url: "https://www.carwale.com/",
    imageSrc: thumb("sector-automotive"),
  },
  realestate: {
    url: "https://www.magicbricks.com/",
    imageSrc: thumb("sector-realestate"),
  },
  entertainment: {
    url: "https://in.bookmyshow.com/",
    imageSrc: thumb("sector-entertainment"),
  },
  ecommerce: {
    url: "https://www.myntra.com/",
    imageSrc: thumb("sector-ecommerce"),
  },
  healthcare: {
    url: "https://www.apollo247.com/",
    imageSrc: thumb("sector-healthcare"),
  },
  transportation: {
    url: "https://www.shiprocket.in/",
    imageSrc: thumb("sector-transportation"),
  },
  manufacturing: {
    url: "https://www.siemens.com/global/en/products/automation.html",
    imageSrc: thumb("sector-manufacturing"),
  },
  travel: {
    url: "https://www.makemytrip.com/",
    imageSrc: thumb("sector-travel"),
  },
  professional: {
    url: "https://www.xero.com/",
    imageSrc: thumb("sector-professional"),
  },
  software: {
    url: "https://vercel.com/",
    imageSrc: thumb("sector-software"),
  },
  banking: {
    url: "https://stripe.com/in",
    imageSrc: thumb("sector-banking"),
  },
  education: {
    url: "https://www.coursera.org/",
    imageSrc: thumb("sector-education"),
  },
};

export const portfolioProjectMedia = {
  kayzen: { url: "https://www.practo.com/", imageSrc: thumb("kayzen") },
  arcx: { url: "https://www.fitbit.com/global/us/home", imageSrc: thumb("arcx") },
  pharmatop: { url: "https://www.medscape.com/", imageSrc: thumb("pharmatop") },
  drivepulse: { url: "https://www.carwale.com/", imageSrc: thumb("drivepulse") },
  "autovista-dealer": { url: "https://www.cars24.com/", imageSrc: thumb("autovista-dealer") },
  chargegrid: { url: "https://www.chargepoint.com/", imageSrc: thumb("chargegrid") },
  streamvault: { url: "https://www.hotstar.com/in/home", imageSrc: thumb("streamvault") },
  ticketlane: { url: "https://in.bookmyshow.com/", imageSrc: thumb("ticketlane") },
  creatorhub: { url: "https://www.patreon.com/", imageSrc: thumb("creatorhub") },
  cartlane: { url: "https://www.myntra.com/", imageSrc: thumb("cartlane") },
  marketmint: { url: "https://www.indiamart.com/", imageSrc: thumb("marketmint") },
  carebridge: { url: "https://www.apollo247.com/", imageSrc: thumb("carebridge") },
  medsync: { url: "https://www.1mg.com/", imageSrc: thumb("medsync") },
  wellpath: { url: "https://www.headspace.com/", imageSrc: thumb("wellpath") },
  fleetroute: { url: "https://www.shiprocket.in/", imageSrc: thumb("fleetroute") },
  cargoledger: { url: "https://www.freightos.com/", imageSrc: thumb("cargoledger") },
  ridemetro: { url: "https://www.olacabs.com/", imageSrc: thumb("ridemetro") },
  factorypulse: {
    url: "https://www.siemens.com/global/en/products/automation.html",
    imageSrc: thumb("factorypulse"),
  },
  partscloud: { url: "https://www.mcmaster.com/", imageSrc: thumb("partscloud") },
  qualitygate: { url: "https://www.mastercontrol.com/", imageSrc: thumb("qualitygate") },
  tripnest: { url: "https://www.makemytrip.com/", imageSrc: thumb("tripnest") },
  staylocal: { url: "https://www.airbnb.co.in/", imageSrc: thumb("staylocal") },
  airdesk: { url: "https://www.goindigo.in/", imageSrc: thumb("airdesk") },
  lexflow: { url: "https://www.clio.com/", imageSrc: thumb("lexflow") },
  auditscope: { url: "https://www.xero.com/", imageSrc: thumb("auditscope") },
  talentbench: { url: "https://www.greenhouse.io/", imageSrc: thumb("talentbench") },
  "devstack-cloud": { url: "https://vercel.com/", imageSrc: thumb("devstack-cloud") },
  syncdesk: { url: "https://zapier.com/", imageSrc: thumb("syncdesk") },
  vaultcrm: { url: "https://www.hubspot.com/", imageSrc: thumb("vaultcrm") },
  paygrid: { url: "https://stripe.com/in", imageSrc: thumb("paygrid") },
  lendpath: { url: "https://www.bajajfinserv.in/", imageSrc: thumb("lendpath") },
  campuslearn: { url: "https://www.coursera.org/", imageSrc: thumb("campuslearn") },
  skillforge: { url: "https://www.udemy.com/", imageSrc: thumb("skillforge") },
  examready: { url: "https://www.khanacademy.org/", imageSrc: thumb("examready") },
  nestfind: { url: "https://www.magicbricks.com/", imageSrc: thumb("nestfind") },
  motolease: { url: "https://www.spinny.com/", imageSrc: thumb("motolease") },
  autochef: { url: "https://www.tatamotors.com/", imageSrc: thumb("autochef") },
  reelbox: { url: "https://www.sonyliv.com/", imageSrc: thumb("reelbox") },
  gamenexus: { url: "https://store.steampowered.com/", imageSrc: thumb("gamenexus") },
  quickcart: { url: "https://www.bigbasket.com/", imageSrc: thumb("quickcart") },
  grocernow: { url: "https://www.blinkit.com/", imageSrc: thumb("grocernow") },
  vitalsync: { url: "https://www.portea.com/", imageSrc: thumb("vitalsync") },
  clinicqueue: { url: "https://www.lybrate.com/", imageSrc: thumb("clinicqueue") },
  portflow: { url: "https://www.delhivery.com/", imageSrc: thumb("portflow") },
  railmate: { url: "https://www.irctc.co.in/", imageSrc: thumb("railmate") },
  smartplant: { url: "https://www.rockwellautomation.com/", imageSrc: thumb("smartplant") },
  assemblepro: {
    url: "https://www.autodesk.com/products/fusion-360/overview",
    imageSrc: thumb("assemblepro"),
  },
  voyageiq: { url: "https://www.yatra.com/", imageSrc: thumb("voyageiq") },
  "heritage-tours": { url: "https://www.thomascook.in/", imageSrc: thumb("heritage-tours") },
  consultiq: { url: "https://www.mckinsey.com/", imageSrc: thumb("consultiq") },
  taxcompass: { url: "https://www.hrblock.in/", imageSrc: thumb("taxcompass") },
  datamesh: { url: "https://www.snowflake.com/", imageSrc: thumb("datamesh") },
  observr: { url: "https://www.datadoghq.com/", imageSrc: thumb("observr") },
  wealthlane: { url: "https://groww.in/", imageSrc: thumb("wealthlane") },
  insurehub: { url: "https://www.policybazaar.com/", imageSrc: thumb("insurehub") },
  learnloop: { url: "https://www.byjus.com/", imageSrc: thumb("learnloop") },
  campuspay: { url: "https://www.unacademy.com/", imageSrc: thumb("campuspay") },
  estatevue: { url: "https://housing.com/", imageSrc: thumb("estatevue") },
  rentgrid: { url: "https://www.nobroker.in/", imageSrc: thumb("rentgrid") },
};

export function applyPortfolioProjectMedia(project) {
  const tier = project.deliveryTier ?? 3;
  const media = portfolioProjectMedia[project.id];
  const primaryTag = project.filterTags?.find((t) => portfolioSectorFallback[t]);
  const fallback = primaryTag ? portfolioSectorFallback[primaryTag] : null;

  const imageSrc = project.imageSrc ?? media?.imageSrc ?? fallback?.imageSrc ?? null;

  /** Only tier-1 (and explicit tier-2) rows get outbound links — never third-party reference URLs. */
  let url = project.url ?? null;
  if (tier >= 3) {
    url = null;
  }

  return {
    ...project,
    url,
    imageSrc,
    imageFit: project.imageFit ?? (imageSrc ? "cover" : "contain"),
  };
}
