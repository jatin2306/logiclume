"use client";

import { FaArrowRight } from "react-icons/fa";
import { Sparkles, ChevronDown } from "lucide-react";

export default function AiNavButton({
  variant = "desktop",
  onNavigate,
  isOpen = false,
  onMouseEnter,
}) {
  const isMobile = variant === "mobile";

  if (isMobile) {
    return (
      <a href="#services" onClick={onNavigate} className="nav-ai-mobile-card group">
        <span className="nav-ai-mobile-icon">
          <Sparkles size={17} strokeWidth={2.25} />
        </span>
        <span className="flex-1 min-w-0">
          <span className="font-semibold text-[var(--color-text)]">AI</span>
          <span className="block text-xs text-[var(--color-text-muted)] mt-0.5">
            Solutions · Chatbots · Automation
          </span>
        </span>
        <FaArrowRight size={11} className="text-[var(--color-accent)] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
      </a>
    );
  }

  return (
    <div className="nav-ai-wrap" onMouseEnter={onMouseEnter}>
      <a
        href="#services"
        className={`nav-ai-btn ${isOpen ? "nav-ai-btn-open" : ""}`}
        aria-expanded={isOpen}
        aria-label="AI menu"
      >
        <Sparkles size={15} strokeWidth={2.25} className="nav-ai-icon" />
        <span>AI</span>
        <ChevronDown
          size={14}
          strokeWidth={2.25}
          className={`nav-ai-chevron ${isOpen ? "nav-ai-chevron-open" : ""}`}
        />
      </a>
    </div>
  );
}
