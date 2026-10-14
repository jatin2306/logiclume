"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

function FilterMenu({ id, label, items, activeId, isTabActive, onSelect, open, onOpenChange }) {
  const wrapRef = useRef(null);
  const closeTimer = useRef(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => onOpenChange(null), 120);
  };

  const handleEnter = () => {
    clearCloseTimer();
    onOpenChange(id);
  };

  const handleLeave = () => {
    scheduleClose();
  };

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        onOpenChange(null);
      }
    };
    document.addEventListener("pointerdown", onDoc);
    return () => document.removeEventListener("pointerdown", onDoc);
  }, [open, onOpenChange, id]);

  const isOpen = open === id;

  return (
    <div
      ref={wrapRef}
      className={`portfolio-tab-dropdown ${isOpen ? "portfolio-tab-dropdown--open" : ""}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        className={`portfolio-work-view-tab ${isTabActive ? "portfolio-work-view-tab--active" : ""}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => onOpenChange(isOpen ? null : id)}
      >
        {label}
        <ChevronDown size={15} strokeWidth={2} aria-hidden className="portfolio-work-tab-chevron" />
      </button>
      <div
        className="portfolio-tab-menu"
        role="listbox"
        aria-label={label}
        aria-hidden={!isOpen}
      >
        {items.map((item) => {
          const selected = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="option"
              aria-selected={selected}
              className={`portfolio-tab-menu-item ${selected ? "portfolio-tab-menu-item--active" : ""}`}
              onClick={() => {
                onSelect(item.id);
                onOpenChange(null);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PortfolioViewFilterTabs({
  viewMode,
  industryFilter,
  serviceFilter,
  industryOptions,
  capabilityOptions,
  onAllProjects,
  onSelectIndustry,
  onSelectCapability,
}) {
  const [openMenu, setOpenMenu] = useState(null);

  const setOpen = useCallback((id) => setOpenMenu(id), []);

  const industryItems = [{ id: "all", label: "All industries" }, ...industryOptions];
  const capabilityItems = capabilityOptions;

  return (
    <div className="portfolio-work-view-tabs">
      <button
        type="button"
        className={`portfolio-work-view-tab ${viewMode === "all" ? "portfolio-work-view-tab--active" : ""}`}
        aria-pressed={viewMode === "all"}
        onClick={onAllProjects}
      >
        All projects
      </button>

      <FilterMenu
        id="industries"
        label="Industries"
        items={industryItems}
        activeId={industryFilter}
        isTabActive={viewMode === "industries"}
        onSelect={onSelectIndustry}
        open={openMenu}
        onOpenChange={setOpen}
      />

      <FilterMenu
        id="capabilities"
        label="Capabilities"
        items={capabilityItems}
        activeId={serviceFilter}
        isTabActive={viewMode === "services"}
        onSelect={onSelectCapability}
        open={openMenu}
        onOpenChange={setOpen}
      />
    </div>
  );
}
