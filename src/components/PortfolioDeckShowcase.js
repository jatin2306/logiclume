"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteContainer from "./SiteContainer";
import PortfolioCard from "./PortfolioCard";
import PortfolioThumb from "./PortfolioThumb";
import {
  portfolioDeckChapters,
  getDeckProjectsByChapter,
  portfolioProjects,
} from "@/data/portfolioProjects";

function DeckProjectSlide({ project, index, chapterLabel }) {
  const Cta = project.url ? "a" : Link;
  const ctaProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : { href: "/#contact" };
  const num = String(index + 1).padStart(2, "0");
  const body =
    project.summary ||
    project.description ||
    project.whatWeDid ||
    "Product design and engineering delivered end-to-end by DeopersIndia.";

  return (
    <article className="portfolio-deck-slide">
      <div className="portfolio-deck-slide-inner">
        <div className="portfolio-deck-slide-meta">
          <span className="portfolio-deck-slide-chapter">{chapterLabel}</span>
          <span className="portfolio-deck-slide-num" aria-hidden="true">
            {num}
          </span>
          <h3 className="portfolio-deck-slide-title">{project.title}</h3>
          {project.client && (
            <p className="portfolio-deck-slide-client">Built for {project.client}</p>
          )}
          <p className="portfolio-deck-slide-body">{body}</p>
          {project.deliverables?.length > 0 && (
            <ul className="portfolio-deck-deliverables">
              {project.deliverables.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <Cta {...ctaProps} className="portfolio-deck-slide-cta">
            {project.url ? "View project" : "Start a similar build"}
            <ArrowUpRight size={15} />
          </Cta>
        </div>
        <div className="portfolio-deck-slide-visual">
          <PortfolioThumb
            title={project.title}
            imageSrc={project.imageSrc}
            previewUrl={project.url}
            previewAccent={project.previewAccent}
            gradientClass={
              project.accent === "orange"
                ? "from-[#f58220] to-[#e65100]"
                : "from-[#1565c0] to-[#0d47a1]"
            }
            aspectClass="aspect-[16/10] w-full lg:aspect-auto lg:h-full"
            showOverlay={project.imageFit !== "contain"}
            featured={Boolean(project.client)}
            client={project.client}
            imageFit={project.imageFit}
          />
        </div>
      </div>
    </article>
  );
}

const PROJECTS_TAB = "projects";

export default function PortfolioDeckShowcase() {
  const [activeChapter, setActiveChapter] = useState(portfolioDeckChapters[0]?.id);
  const allDeckProjects = portfolioProjects.filter((p) => p.deckChapter);

  useEffect(() => {
    const sectionOrder = [
      ...portfolioDeckChapters.map((chapter) => ({
        id: `chapter-${chapter.id}`,
        tabId: chapter.id,
      })),
      { id: "deck-projects-wall", tabId: PROJECTS_TAB },
    ];

    const updateActiveFromScroll = () => {
      const spacer = document.querySelector(".dp-nav-spacer");
      const scrollLine = (spacer?.getBoundingClientRect().height ?? 88) + 32;

      let nextActive = portfolioDeckChapters[0]?.id;
      for (const { id, tabId } of sectionOrder) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= scrollLine) {
          nextActive = tabId;
        }
      }
      setActiveChapter((prev) => (prev === nextActive ? prev : nextActive));
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const spacer = document.querySelector(".dp-nav-spacer");
    const navOffset = spacer?.getBoundingClientRect().height ?? 88;
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset - 12;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="portfolio-deck" id="portfolio-presentation">
      <SiteContainer>
        <div className="portfolio-deck-chapter-tabs-mobile xl:hidden">
          {portfolioDeckChapters.map((chapter) => (
            <button
              key={chapter.id}
              type="button"
              className={`portfolio-deck-chapter-tab ${
                activeChapter === chapter.id ? "portfolio-deck-chapter-tab--active" : ""
              }`}
              onClick={() => scrollTo(`chapter-${chapter.id}`)}
            >
              {chapter.label}
            </button>
          ))}
          <button
            type="button"
            className={`portfolio-deck-chapter-tab ${
              activeChapter === PROJECTS_TAB ? "portfolio-deck-chapter-tab--active" : ""
            }`}
            onClick={() => scrollTo("deck-projects-wall")}
          >
            Projects
          </button>
        </div>

        <div className="portfolio-deck-layout">
        <aside className="portfolio-deck-rail" aria-label="Portfolio chapters">
          <p className="portfolio-deck-rail-kicker">Scroll</p>
          <nav className="portfolio-deck-rail-nav">
            {portfolioDeckChapters.map((chapter) => (
              <button
                key={chapter.id}
                type="button"
                className={`portfolio-deck-rail-link ${
                  activeChapter === chapter.id ? "portfolio-deck-rail-link--active" : ""
                }`}
                onClick={() => scrollTo(`chapter-${chapter.id}`)}
              >
                <span className="portfolio-deck-rail-vertical">{chapter.label}</span>
              </button>
            ))}
            <button
              type="button"
              className={`portfolio-deck-rail-link ${
                activeChapter === PROJECTS_TAB ? "portfolio-deck-rail-link--active" : ""
              }`}
              onClick={() => scrollTo("deck-projects-wall")}
            >
              <span className="portfolio-deck-rail-vertical">Projects</span>
            </button>
          </nav>
        </aside>

        <div className="portfolio-deck-main">
          {portfolioDeckChapters.map((chapter, chapterIndex) => {
            const projects = getDeckProjectsByChapter(chapter.id);
            if (!projects.length) return null;

            return (
              <section
                key={chapter.id}
                id={`chapter-${chapter.id}`}
                className={`portfolio-deck-chapter ${
                  chapterIndex % 2 === 1 ? "portfolio-deck-chapter--alt" : ""
                }`}
              >
                <div className="portfolio-deck-chapter-head">
                  <div className="portfolio-deck-chapter-intro">
                    <span className="portfolio-deck-chapter-label">{chapter.label}</span>
                    <h2 className="portfolio-deck-chapter-title">{chapter.title}</h2>
                    <p className="portfolio-deck-chapter-blurb">{chapter.blurb}</p>
                  </div>
                  <div className="portfolio-deck-chapter-watermark" aria-hidden="true">
                    {chapter.label}
                  </div>
                </div>

                <div className="portfolio-deck-slides">
                  {projects.map((project, i) => (
                    <DeckProjectSlide
                      key={project.id}
                      project={project}
                      index={i}
                      chapterLabel={chapter.label}
                    />
                  ))}
                </div>
              </section>
            );
          })}

          <section
            id="deck-projects-wall"
            className="portfolio-deck-mosaic section-light bg-grid-light"
          >
            <div className="portfolio-deck-mosaic-inner py-10 lg:py-14 pb-4">
              <div className="portfolio-deck-mosaic-head">
                <span className="section-label-light mb-3 inline-flex">All projects</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
                  Deliveries at a <span className="text-[var(--color-accent)]">glance</span>
                </h2>
                <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
                  Scroll industries on the left — or browse every project in the grid below.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
                {allDeckProjects.map((project) => (
                  <PortfolioCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    client={project.client}
                    url={project.url}
                    imageSrc={project.imageSrc}
                    previewAccent={project.previewAccent}
                    imageFit={project.imageFit}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
        </div>
      </SiteContainer>
    </div>
  );
}
