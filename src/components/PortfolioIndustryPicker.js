"use client";

import { Check, X } from "lucide-react";

/**
 * Industry list in config order — panel on desktop, sheet on mobile.
 */
export default function PortfolioIndustryPicker({
  industries,
  activeId,
  onSelect,
  mobileOpen,
  onMobileClose,
}) {
  const list = (
    <ul className="portfolio-industry-list" role="listbox" aria-label="Industries">
      <li role="presentation">
        <button
          type="button"
          role="option"
          aria-selected={activeId === "all"}
          className={`portfolio-industry-row ${activeId === "all" ? "portfolio-industry-row--active" : ""}`}
          onClick={() => onSelect("all")}
        >
          <span className="portfolio-industry-row-label">All industries</span>
          {activeId === "all" ? (
            <Check size={18} strokeWidth={2.5} className="portfolio-industry-row-check" aria-hidden />
          ) : null}
        </button>
      </li>
      {industries.map((item) => {
        const isActive = activeId === item.id;
        return (
          <li key={item.id} role="presentation">
            <button
              type="button"
              role="option"
              aria-selected={isActive}
              className={`portfolio-industry-row ${isActive ? "portfolio-industry-row--active" : ""}`}
              onClick={() => onSelect(item.id)}
            >
              <span className="portfolio-industry-row-label">{item.label}</span>
              {isActive ? (
                <Check size={18} strokeWidth={2.5} className="portfolio-industry-row-check" aria-hidden />
              ) : null}
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <div className="portfolio-industry-panel portfolio-industry-panel--desktop">{list}</div>

      {mobileOpen ? (
        <div
          className="portfolio-industry-sheet-backdrop"
          role="presentation"
          onClick={onMobileClose}
          onKeyDown={(e) => e.key === "Escape" && onMobileClose()}
        />
      ) : null}

      <div
        className={`portfolio-industry-sheet ${mobileOpen ? "portfolio-industry-sheet--open" : ""}`}
        role="dialog"
        aria-modal={mobileOpen}
        aria-label="Industries"
        aria-hidden={!mobileOpen}
      >
        <div className="portfolio-industry-sheet-header">
          <button
            type="button"
            className="portfolio-industry-sheet-close"
            onClick={onMobileClose}
            aria-label="Close industries"
          >
            <X size={22} strokeWidth={2} aria-hidden />
          </button>
          <h2 className="portfolio-industry-sheet-title">Industries</h2>
        </div>
        <div className="portfolio-industry-sheet-body">{list}</div>
      </div>
    </>
  );
}
