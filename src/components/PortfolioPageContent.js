"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import SiteContainer from "./SiteContainer";
import PortfolioWorkCard from "./PortfolioWorkCard";
import PortfolioIndustryPicker from "./PortfolioIndustryPicker";
import Button from "./Button";
import {
  getPortfolioPageProjects,
  portfolioFilters,
  portfolioViewModes,
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

export default function PortfolioPageContent() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState(defaultPortfolioFilterState);
  const [industrySheetOpen, setIndustrySheetOpen] = useState(false);

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

  const { viewMode, industryFilter, serviceFilter } = filters;

  const pushFilters = useCallback(
    (next) => {
      setFilters(next);
      setIndustrySheetOpen(false);
      router.push(portfolioPathWithFilters(next), { scroll: false });
    },
    [router]
  );

  useEffect(() => {
    if (viewMode !== "industries") {
      setIndustrySheetOpen(false);
    }
  }, [viewMode]);

  const projects = useMemo(() => {
    let list = getPortfolioPageProjects();
    if (viewMode === "industries" && industryFilter !== "all") {
      list = list.filter((p) => projectMatchesIndustryFilter(p, industryFilter));
    }
    if (viewMode === "services" && serviceFilter !== "all") {
      list = list.filter((p) => projectMatchesServiceFilter(p, serviceFilter));
    }
    return list;
  }, [viewMode, industryFilter, serviceFilter]);

  const totalCount = getPortfolioPageProjects().length;

  const activeIndustryLabel =
    industryFilter === "all"
      ? "All industries"
      : industryFilters.find((f) => f.id === industryFilter)?.label ?? "Industries";

  return (
    <div className="portfolio-page">
      <div className="portfolio-work-hero-band">
        <section className="portfolio-work-hero" aria-labelledby="portfolio-work-title">
          <SiteContainer className="portfolio-work-hero-inner">
            <h1 id="portfolio-work-title" className="portfolio-work-title">
              Products &amp; platforms we&apos;ve shipped
            </h1>
            <p className="portfolio-work-lead">
              Explore {totalCount}+ products across banking, retail, healthcare, automotive, travel,
              manufacturing, and more — representative work from our delivery portfolio.
              <span className="portfolio-work-lead-line">
                Reach out to discuss what we can deliver for your roadmap.
              </span>
            </p>
          </SiteContainer>
        </section>

        <div className="portfolio-work-filter-dock">
          <SiteContainer>
            <div className="portfolio-work-filter-shell" role="group" aria-label="Filter projects">
              <div className="portfolio-work-filter-bar">
                <div className="portfolio-work-view-tabs">
                  {portfolioViewModes.map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      className={`portfolio-work-view-tab ${
                        viewMode === mode.id ? "portfolio-work-view-tab--active" : ""
                      }`}
                      aria-pressed={viewMode === mode.id}
                      onClick={() => {
                        if (mode.id === "all") {
                          pushFilters(defaultPortfolioFilterState);
                          return;
                        }
                        if (mode.id === "industries") {
                          setIndustrySheetOpen(true);
                        }
                        pushFilters({
                          viewMode: mode.id,
                          industryFilter: mode.id === "industries" ? industryFilter : "all",
                          serviceFilter: mode.id === "services" ? serviceFilter : "all",
                        });
                      }}
                    >
                      {mode.label}
                      {mode.id !== "all" ? (
                        <ChevronDown
                          size={15}
                          strokeWidth={2}
                          aria-hidden
                          className="portfolio-work-tab-chevron"
                        />
                      ) : null}
                    </button>
                  ))}
                </div>
              </div>

              {viewMode === "industries" ? (
                <>
                  <button
                    type="button"
                    className="portfolio-industry-mobile-trigger"
                    onClick={() => setIndustrySheetOpen(true)}
                    aria-expanded={industrySheetOpen}
                  >
                    <span className="portfolio-industry-mobile-trigger-label">{activeIndustryLabel}</span>
                    <ChevronDown size={18} strokeWidth={2} aria-hidden />
                  </button>

                  <PortfolioIndustryPicker
                    industries={industryFilters}
                    activeId={industryFilter}
                    onSelect={(id) =>
                      pushFilters({
                        viewMode: "industries",
                        industryFilter: id,
                        serviceFilter: "all",
                      })
                    }
                    mobileOpen={industrySheetOpen}
                    onMobileClose={() => setIndustrySheetOpen(false)}
                  />
                </>
              ) : null}

              {viewMode === "services" ? (
                <div className="portfolio-work-subfilters">
                  {portfolioServiceFilters.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      className={`portfolio-work-chip ${serviceFilter === f.id ? "portfolio-work-chip--active" : ""}`}
                      onClick={() =>
                        pushFilters({
                          viewMode: "services",
                          industryFilter: "all",
                          serviceFilter: f.id,
                        })
                      }
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </SiteContainer>
        </div>
      </div>

      <section className="portfolio-work-grid-section" aria-label="Project gallery">
        <SiteContainer>
          {viewMode === "industries" && industryFilter !== "all" ? (
            <p className="portfolio-work-filter-heading">
              Showing <strong>{activeIndustryLabel}</strong> · {projects.length} project
              {projects.length === 1 ? "" : "s"}
            </p>
          ) : null}
          {projects.length === 0 ? (
            <p className="portfolio-work-empty">
              Nothing matched that filter. Try &ldquo;All projects&rdquo; or another category.
            </p>
          ) : (
            <ul className="portfolio-work-grid">
              {projects.map((project) => (
                <li key={project.id} className="portfolio-work-grid-cell">
                  <PortfolioWorkCard project={project} />
                </li>
              ))}
            </ul>
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
              <Link href="/#contact" className="portfolio-work-cta-link">
                Contact us
              </Link>
            </div>
          </div>
        </SiteContainer>
      </section>
    </div>
  );
}
