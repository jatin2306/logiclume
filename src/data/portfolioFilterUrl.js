import { portfolioFilters, portfolioServiceFilters } from "./portfolioFilterConfig";

const industryIds = new Set(portfolioFilters.map((f) => f.id));
const capabilityIds = new Set(portfolioServiceFilters.map((f) => f.id));

export const defaultPortfolioFilterState = {
  viewMode: "all",
  industryFilter: "all",
  serviceFilter: "all",
};

/** Legacy query params (?category=) — used only to redirect to path URLs */
export function parsePortfolioFiltersFromSearchParams(searchParams) {
  const category = searchParams.get("category");
  const capability = searchParams.get("capability");
  const view = searchParams.get("view");

  if (category && industryIds.has(category)) {
    return {
      viewMode: "industries",
      industryFilter: category,
      serviceFilter: "all",
    };
  }

  if (capability && capabilityIds.has(capability)) {
    return {
      viewMode: "services",
      industryFilter: "all",
      serviceFilter: capability,
    };
  }

  if (view === "industries") {
    return { viewMode: "industries", industryFilter: "all", serviceFilter: "all" };
  }

  if (view === "services") {
    return { viewMode: "services", industryFilter: "all", serviceFilter: "all" };
  }

  return { ...defaultPortfolioFilterState };
}

/**
 * Path segments after /portfolio
 * e.g. [] | ['industries'] | ['industries','banking'] | ['capabilities','mobile'] | ['banking']
 */
export function parsePortfolioPathSegments(segments) {
  const parts = Array.isArray(segments) ? segments.filter(Boolean) : segments ? [segments] : [];

  if (parts.length === 0) {
    return { ...defaultPortfolioFilterState };
  }

  const [first, second] = parts;

  if (first === "industries") {
    if (second && industryIds.has(second)) {
      return { viewMode: "industries", industryFilter: second, serviceFilter: "all" };
    }
    return { viewMode: "industries", industryFilter: "all", serviceFilter: "all" };
  }

  if (first === "capabilities" || first === "services") {
    if (second && capabilityIds.has(second)) {
      return { viewMode: "services", industryFilter: "all", serviceFilter: second };
    }
    return { viewMode: "services", industryFilter: "all", serviceFilter: "all" };
  }

  if (parts.length === 1 && industryIds.has(first)) {
    return { viewMode: "industries", industryFilter: first, serviceFilter: "all" };
  }

  if (parts.length === 1 && capabilityIds.has(first)) {
    return { viewMode: "services", industryFilter: "all", serviceFilter: first };
  }

  return { ...defaultPortfolioFilterState };
}

export function portfolioPathWithFilters({ viewMode, industryFilter, serviceFilter }) {
  if (viewMode === "industries" && industryFilter && industryFilter !== "all") {
    return `/portfolio/${industryFilter}`;
  }
  if (viewMode === "industries") {
    return "/portfolio/industries";
  }
  if (viewMode === "services" && serviceFilter && serviceFilter !== "all") {
    return `/portfolio/capabilities/${serviceFilter}`;
  }
  if (viewMode === "services") {
    return "/portfolio/capabilities";
  }
  return "/portfolio";
}
