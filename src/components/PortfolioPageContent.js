"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import SiteContainer from "./SiteContainer";
import PortfolioWorkCard from "./PortfolioWorkCard";
import { PortfolioWorkGridSkeleton } from "./PortfolioWorkCardSkeleton";
import PortfolioViewFilterTabs from "./PortfolioViewFilterTabs";
import Button from "./Button";
import {
  portfolioFilters,
  portfolioServiceFilters,
  projectMatchesIndustryFilter,
  projectMatchesServiceFilter,
} from "@/data/portfolioProjects";
import {
  defaultPortfolioFilterState,
  parsePortfolioFiltersFromSearchParams,
  parsePortfolioPathSegments,
  portfolioPathWithFilters,
} from "@/data/portfolioFilterUrl";
import "./portfolio-page.css";

const industryFilters = portfolioFilters.filter((f) => f.id !== "all");
const GRID_LOAD_MIN_MS = 320;
const SKELETON_COUNT = 8;

/** Real client work — same set the homepage treats as best projects, not sample cards. */
function isBestProject(project) {
  if (project.featuredTier === "flagship" || project.featuredTier === "spotlight") return true;
  return typeof project.imageSrc === "string" && project.imageSrc.startsWith("/images/");
}

export default function PortfolioPageContent() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState(defaultPortfolioFilterState);
  const [allProjects, setAllProjects] = useState(null);
  const [gridLoading, setGridLoading] = useState(true);

  const segments = params?.segments;

  useEffect(() => {
    if (searchParams.toString()) {
      const legacy = parsePortfolioFiltersFromSearchParams(searchParams);
      const target = portfolioPathWithFilters(legacy);
      router.replace(target, { scroll: false });
      return;
    }
    setFilters(parsePortfolioPathSegments(segments));
  }, [segments, searchParams, router]);

  useEffect(() => {
    let cancelled = false;
    const started = performance.now();

    async function loadCatalog() {
      setGridLoading(true);
      const { getPortfolioPageProjects } = await import("@/data/portfolioProjects");
      const list = getPortfolioPageProjects();
      const elapsed = performance.now() - started;
      const wait = Math.max(0, GRID_LOAD_MIN_MS - elapsed);
      await new Promise((r) => setTimeout(r, wait));
      if (!cancelled) {
        setAllProjects(list);
        setGridLoading(false);
      }
    }

    loadCatalog();
    return () => {
      cancelled = true;
    };
  }, []);

  const { viewMode, industryFilter, serviceFilter } = filters;

  const pushFilters = useCallback(
    (next) => {
      setFilters(next);
      router.push(portfolioPathWithFilters(next), { scroll: false });
    },
    [router]
  );

  const projects = useMemo(() => {
    if (!allProjects) return [];
    let list = allProjects.filter(isBestProject);
    if (viewMode === "industries" && industryFilter !== "all") {
      list = list.filter((p) => projectMatchesIndustryFilter(p, industryFilter));
    }
    if (viewMode === "services" && serviceFilter !== "all") {
      list = list.filter((p) => projectMatchesServiceFilter(p, serviceFilter));
    }
    return list;
  }, [allProjects, viewMode, industryFilter, serviceFilter]);

  const totalCount = allProjects?.length ?? 0;

  const activeIndustryLabel =
    industryFilter === "all"
      ? "All industries"
      : industryFilters.find((f) => f.id === industryFilter)?.label ?? "Industries";

  const activeCapabilityLabel =
    portfolioServiceFilters.find((f) => f.id === serviceFilter)?.label ?? "All capabilities";

  const showFilterHeading =
    !gridLoading &&
    ((viewMode === "industries" && industryFilter !== "all") ||
      (viewMode === "services" && serviceFilter !== "all"));

  const filterHeadingLabel =
    viewMode === "industries" ? activeIndustryLabel : activeCapabilityLabel;

  return (
    <div className="portfolio-page">
      <div className="portfolio-work-hero-band">
        <section className="portfolio-work-hero" aria-labelledby="portfolio-work-title">
          <SiteContainer className="portfolio-work-hero-inner">
            <span className="section-label-light portfolio-work-kicker">Portfolio</span>
            <h1 id="portfolio-work-title" className="portfolio-work-title">
              Our Best <span className="portfolio-work-title-accent">Projects</span>
            </h1>
            <p className="portfolio-work-lead">
              {totalCount > 0 ? (
                <>
                  Selected client products and platforms, from healthcare and fintech to real estate and AI.
                </>
              ) : (
                <>Loading our best projects…</>
              )}
            </p>
          </SiteContainer>
        </section>

        <div className="portfolio-work-filter-dock">
          <SiteContainer>
            <div className="portfolio-work-filter-shell" role="group" aria-label="Filter projects">
              <div className="portfolio-work-filter-bar">
                <PortfolioViewFilterTabs
                  viewMode={viewMode}
                  industryFilter={industryFilter}
                  serviceFilter={serviceFilter}
                  industryOptions={industryFilters}
                  capabilityOptions={portfolioServiceFilters}
                  onAllProjects={() => pushFilters(defaultPortfolioFilterState)}
                  onSelectIndustry={(id) =>
                    pushFilters({
                      viewMode: "industries",
                      industryFilter: id,
                      serviceFilter: "all",
                    })
                  }
                  onSelectCapability={(id) =>
                    pushFilters({
                      viewMode: "services",
                      industryFilter: "all",
                      serviceFilter: id,
                    })
                  }
                />
              </div>
            </div>
          </SiteContainer>
        </div>
      </div>

      <section className="portfolio-work-grid-section" aria-label="Project gallery">
        <SiteContainer>
          {showFilterHeading ? (
            <p className="portfolio-work-filter-heading">
              Showing <strong>{filterHeadingLabel}</strong>
            </p>
          ) : null}
          {gridLoading ? (
            <PortfolioWorkGridSkeleton count={SKELETON_COUNT} pair />
          ) : projects.length === 0 ? (
            <p className="portfolio-work-empty">
              Nothing matched that filter. Try &ldquo;All projects&rdquo; or another option.
            </p>
          ) : (
            <>
              <ul className="portfolio-work-grid portfolio-work-grid--pair">
                {projects.map((project) => (
                  <li key={project.id} className="portfolio-work-grid-cell">
                    <PortfolioWorkCard project={project} detailed />
                  </li>
                ))}
              </ul>
            </>
          )}
        </SiteContainer>
      </section>

      <section className="portfolio-work-cta-band" aria-labelledby="portfolio-cta-title">
        <SiteContainer>
          <div className="portfolio-work-cta-panel">
            <div className="portfolio-work-cta-copy">
              <h2 id="portfolio-cta-title" className="portfolio-work-cta-title">
                Planning something similar?
              </h2>
              <p className="portfolio-work-cta-desc">
                Tell us about your roadmap — we&apos;ll help you scope, estimate, and ship with a
                dedicated DeopersIndia squad.
              </p>
            </div>
            <div className="portfolio-work-cta-actions">
              <Button href="/book-a-call" variant="accent" size="md" className="rounded-full gap-2 shadow-lg">
                Book a call
                <ArrowUpRight size={16} aria-hidden />
              </Button>
              <Link href="/contact-us" className="portfolio-work-cta-link">
                Contact us
              </Link>
            </div>
          </div>
        </SiteContainer>
      </section>
    </div>
  );
}
