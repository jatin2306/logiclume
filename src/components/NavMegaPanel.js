"use client";

import { FaArrowRight } from "react-icons/fa";
import {
  Sparkles,
  Globe,
  Smartphone,
  Palette,
  Code2,
  Bot,
  Zap,
  Wand2,
  Cpu,
} from "lucide-react";

const serviceItems = [
  {
    label: "Web Development",
    desc: "Fast, scalable websites & web apps",
    href: "#services",
    icon: Globe,
  },
  {
    label: "Mobile Apps",
    desc: "Native & cross-platform experiences",
    href: "#services",
    icon: Smartphone,
  },
  {
    label: "UI/UX Design",
    desc: "Interfaces users love to use",
    href: "#services",
    icon: Palette,
  },
  {
    label: "Custom Software",
    desc: "Tailored systems for your business",
    href: "#services",
    icon: Code2,
  },
  {
    label: "AI Solutions",
    desc: "Intelligent automation & products",
    href: "#services",
    icon: Sparkles,
  },
];

const aiItems = [
  {
    label: "AI Chatbots",
    desc: "24/7 intelligent customer support",
    href: "#contact",
    icon: Bot,
  },
  {
    label: "Process Automation",
    desc: "Streamline workflows with AI",
    href: "#contact",
    icon: Zap,
  },
  {
    label: "Generative AI Apps",
    desc: "Custom GPT-powered products",
    href: "#contact",
    icon: Wand2,
  },
  {
    label: "ML Integration",
    desc: "Embed intelligence in your stack",
    href: "#contact",
    icon: Cpu,
  },
];

export default function NavMegaPanel({ type, onClose }) {
  const isOpen = type === "services" || type === "ai";

  return (
    <div
      className={`nav-mega-drop ${isOpen ? "nav-mega-drop-open" : ""}`}
      aria-hidden={!isOpen}
    >
      {isOpen && (
        <div className="nav-mega-panel">
          <div className="nav-mega-panel-inner">
        {type === "services" && (
          <div className="nav-mega-services">
            <div className="nav-mega-intro">
              <p className="nav-mega-eyebrow">What we do</p>
              <h3 className="nav-mega-title">Our Services</h3>
              <p className="nav-mega-desc">
                From concept to launch — we design, build, and scale digital products that drive real business growth.
              </p>
              <a href="#contact" className="nav-mega-intro-cta group" onClick={onClose}>
                <span>Get a free quote</span>
                <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="nav-mega-grid">
              {serviceItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-mega-card group"
                  style={{ animationDelay: `${i * 40}ms` }}
                  onClick={onClose}
                >
                  <span className="nav-mega-card-icon">
                    <item.icon size={20} />
                  </span>
                  <span className="nav-mega-card-body">
                    <span className="nav-mega-card-label">{item.label}</span>
                    <span className="nav-mega-card-desc">{item.desc}</span>
                  </span>
                  <FaArrowRight size={11} className="nav-mega-card-arrow" />
                </a>
              ))}
            </div>
          </div>
        )}

        {type === "ai" && (
          <div className="nav-mega-ai">
            <div className="nav-mega-ai-banner">
              <div className="nav-mega-ai-banner-mesh" aria-hidden="true" />
              <Sparkles size={22} className="text-[var(--color-accent-light)] relative z-10 shrink-0" />
              <div className="relative z-10 min-w-0">
                <p className="font-display font-bold text-white text-lg">AI Excellence</p>
                <p className="text-sm text-blue-200/75 mt-0.5">
                  Build smarter products with chatbots, automation & generative AI
                </p>
              </div>
              <a href="#contact" className="nav-mega-ai-banner-cta group relative z-10 shrink-0" onClick={onClose}>
                <span>Start your AI project</span>
                <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="nav-mega-ai-grid">
              {aiItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-mega-ai-card group"
                  style={{ animationDelay: `${i * 50}ms` }}
                  onClick={onClose}
                >
                  <span className="nav-ai-item-icon">
                    <item.icon size={18} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold text-[#1a2b42] text-sm group-hover:text-[var(--color-primary)] transition-colors">
                      {item.label}
                    </span>
                    <span className="block text-xs text-[var(--color-text-muted)] mt-1">
                      {item.desc}
                    </span>
                  </span>
                  <FaArrowRight size={11} className="nav-ai-item-arrow" />
                </a>
              ))}
            </div>
          </div>
        )}
          </div>
        </div>
      )}
    </div>
  );
}
