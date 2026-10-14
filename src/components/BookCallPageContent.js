"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, CalendarDays, Check, Clock, ExternalLink, User, Video } from "lucide-react";
import SiteContainer from "./SiteContainer";
import { BOOK_CONSULTANT, getCalEmbedUrl, CAL_BOOK_URL } from "@/data/booking";
import "@/app/book-a-call/book-call.css";

function BookCallEmbedSkeleton() {
  return (
    <div className="book-call-skeleton" aria-busy="true" aria-label="Loading calendar">
      <div className="book-call-skeleton-toolbar">
        <span className="book-call-skeleton-pill book-call-skeleton-shimmer" />
        <span className="book-call-skeleton-pill book-call-skeleton-pill--sm book-call-skeleton-shimmer" />
      </div>
      <div className="book-call-skeleton-body">
        <div className="book-call-skeleton-calendar">
          <div className="book-call-skeleton-row book-call-skeleton-row--head">
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={i} className="book-call-skeleton-cell book-call-skeleton-shimmer" />
            ))}
          </div>
          {Array.from({ length: 5 }).map((_, row) => (
            <div key={row} className="book-call-skeleton-row">
              {Array.from({ length: 7 }).map((_, col) => (
                <span
                  key={col}
                  className={`book-call-skeleton-cell book-call-skeleton-shimmer${
                    row === 2 && col === 3 ? " book-call-skeleton-cell--active" : ""
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="book-call-skeleton-slots">
          <span className="book-call-skeleton-line book-call-skeleton-shimmer" />
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="book-call-skeleton-slot book-call-skeleton-shimmer" />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Cal embed often never fires a stable load event; hide skeleton after a short minimum. */
const EMBED_MIN_SKELETON_MS = 600;
const EMBED_FALLBACK_MS = 3500;

export default function BookCallPageContent() {
  const { role, tagline, topics } = BOOK_CONSULTANT;
  const embedSrc = getCalEmbedUrl(CAL_BOOK_URL);
  const iframeRef = useRef(null);
  const readyRef = useRef(false);
  const [embedReady, setEmbedReady] = useState(false);
  const [iframeSrc, setIframeSrc] = useState(null);

  const markEmbedReady = useCallback(() => {
    if (readyRef.current) return;
    readyRef.current = true;
    setEmbedReady(true);
  }, []);

  useEffect(() => {
    setIframeSrc(embedSrc);
  }, [embedSrc]);

  const finishLoadingRef = useRef(null);

  useEffect(() => {
    if (!iframeSrc) return;

    const started = Date.now();
    let delayTimer = null;

    finishLoadingRef.current = () => {
      const elapsed = Date.now() - started;
      const wait = Math.max(0, EMBED_MIN_SKELETON_MS - elapsed);
      delayTimer = window.setTimeout(markEmbedReady, wait);
    };

    const fallbackTimer = window.setTimeout(() => {
      finishLoadingRef.current?.();
    }, EMBED_FALLBACK_MS);

    return () => {
      finishLoadingRef.current = null;
      window.clearTimeout(fallbackTimer);
      if (delayTimer) window.clearTimeout(delayTimer);
    };
  }, [iframeSrc, markEmbedReady]);

  const onIframeLoad = useCallback(() => {
    finishLoadingRef.current?.();
  }, []);

  const scrollToCalendar = useCallback(() => {
    document.getElementById("book-call-calendar")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="book-call-page">
      <div className="book-call-mobile-bar">
        <button type="button" className="book-call-mobile-bar-btn" onClick={scrollToCalendar}>
          <CalendarDays size={18} strokeWidth={2.25} aria-hidden />
          Pick a date &amp; time
          <ArrowDown size={16} strokeWidth={2.25} aria-hidden className="book-call-mobile-bar-chevron" />
        </button>
      </div>

      <SiteContainer className="book-call-layout" containerClassName="book-call-container">
        <div className="book-call-split">
          <header className="book-call-side">
            <div className="book-call-side-inner">
              <span className="section-label-orange book-call-eyebrow">
                <CalendarDays size={14} strokeWidth={2.25} className="shrink-0" aria-hidden />
                Book a call
              </span>

              <h1 className="book-call-title">
                Discuss scope, timeline
                <span className="book-call-title-accent"> &amp; next steps</span>
              </h1>

              <p className="book-call-lead">{tagline}</p>

              <div className="book-call-side-body">
                <div className="book-call-consultant-block">
                  <div className="book-call-avatar-placeholder" aria-hidden>
                    <User size={30} strokeWidth={1.75} />
                  </div>
                  <p className="book-call-role">{role}</p>
                  <p className="book-call-session" aria-label="Session format">
                    <Clock size={14} strokeWidth={2} aria-hidden />
                    30 min
                    <span className="book-call-session-dot" aria-hidden>
                      ·
                    </span>
                    <Video size={14} strokeWidth={2} aria-hidden />
                    Video call
                  </p>
                </div>

                <div className="book-call-topics">
                  <p className="book-call-topics-heading">On the call</p>
                  <ul className="book-call-topics-list">
                    {topics.map((topic) => (
                      <li key={topic}>
                        <Check size={14} strokeWidth={2.5} aria-hidden />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="book-call-side-foot">
                  No commitment — we reply within one business day.{" "}
                  <Link href="/portfolio" className="book-call-side-link">
                    See our work
                  </Link>
                </p>
              </div>
            </div>
          </header>

          <section
            id="book-call-calendar"
            className="book-call-panel"
            aria-label="Schedule your call"
          >
            <div className="book-call-panel-mobile-head">
              <CalendarDays size={22} strokeWidth={2} aria-hidden />
              <div>
                <p className="book-call-panel-mobile-step">Schedule</p>
                <h2 className="book-call-panel-mobile-title">Pick a date &amp; time</h2>
              </div>
            </div>
            <div className="book-call-iframe-wrap">
              {!embedReady ? <BookCallEmbedSkeleton /> : null}
              <iframe
                ref={iframeRef}
                title="Book a 30-minute call with DeopersIndia"
                src={iframeSrc ?? undefined}
                loading="eager"
                allow="clipboard-write; fullscreen"
                className={embedReady ? "book-call-iframe is-ready" : "book-call-iframe"}
                onLoad={onIframeLoad}
              />
            </div>
            <p className="book-call-mobile-fallback">
              Calendar slow to load?{" "}
              <a href={CAL_BOOK_URL} target="_blank" rel="noopener noreferrer">
                Open booking in a new tab
                <ExternalLink size={14} strokeWidth={2} aria-hidden />
              </a>
            </p>
          </section>
        </div>
      </SiteContainer>
    </div>
  );
}
