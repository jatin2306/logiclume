"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

function CollapseTab({ id, label, isTabActive, openPanel, onToggle }) {
  const isOpen = openPanel === id;

  return (
    <button
      type="button"
      className={`portfolio-work-view-tab ${isTabActive ? "portfolio-work-view-tab--active" : ""} ${
        isOpen ? "portfolio-work-view-tab--open" : ""
      }`}
      aria-expanded={isOpen}
      aria-controls={`portfolio-filter-panel-${id}`}
      onClick={() => onToggle(isOpen ? null : id)}
    >
      {label}
      <ChevronDown size={15} strokeWidth={2} aria-hidden className="portfolio-work-tab-chevron" />
    </button>
  );
}

function CollapsePanel({ id, label, items, activeId, isTabActive, openPanel, onSelect }) {
  const isOpen = openPanel === id;

  return (
    <div
      id={`portfolio-filter-panel-${id}`}
      className={`portfolio-filter-collapse ${isOpen ? "portfolio-filter-collapse--open" : ""}`}
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <div className="portfolio-filter-collapse-inner">
        <div className="portfolio-filter-collapse-chips" role="group" aria-label={label}>
          {items.map((item) => {
            const selected = isTabActive && activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                className={`portfolio-work-chip ${selected ? "portfolio-work-chip--active" : ""}`}
                onClick={() => onSelect(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
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
  const [openPanel, setOpenPanel] = useState(null);

  const industryItems = [{ id: "all", label: "All industries" }, ...industryOptions];
  const capabilityItems = capabilityOptions;

  return (
    <div className="portfolio-filter-collapsible">
      <div className="portfolio-work-view-tabs">
        <button
          type="button"
          className={`portfolio-work-view-tab ${viewMode === "all" ? "portfolio-work-view-tab--active" : ""}`}
          aria-pressed={viewMode === "all"}
          onClick={() => {
            setOpenPanel(null);
            onAllProjects();
          }}
        >
          All projects
        </button>

        <CollapseTab
          id="industries"
          label="Industries"
          isTabActive={viewMode === "industries"}
          openPanel={openPanel}
          onToggle={setOpenPanel}
        />

        <CollapseTab
          id="capabilities"
          label="Capabilities"
          isTabActive={viewMode === "services"}
          openPanel={openPanel}
          onToggle={setOpenPanel}
        />
      </div>

      <CollapsePanel
        id="industries"
        label="Industries"
        items={industryItems}
        activeId={industryFilter}
        isTabActive={viewMode === "industries"}
        openPanel={openPanel}
        onSelect={onSelectIndustry}
      />

      <CollapsePanel
        id="capabilities"
        label="Capabilities"
        items={capabilityItems}
        activeId={serviceFilter}
        isTabActive={viewMode === "services"}
        openPanel={openPanel}
        onSelect={onSelectCapability}
      />
    </div>
  );
}
