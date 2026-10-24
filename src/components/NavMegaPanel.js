"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import NavContactMegaForm from "./NavContactMegaForm";
import {
  Sparkles,
  Globe,
  Smartphone,
  Palette,
  Code2,
  Cloud,
  Bot,
  Zap,
  Wand2,
  Cpu,
  ArrowUpRight,
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
  {
    label: "Cloud & DevOps",
    desc: "Deploy, scale & monitor with confidence",
    href: "#services",
    icon: Cloud,
  },
];

const aiItems = [
  {
    label: "AI Chatbots",
    desc: "24/7 intelligent customer support",
    href: "/contact-us",
    icon: Bot,
  },
  {
    label: "Process Automation",
    desc: "Streamline workflows with AI",
    href: "/contact-us",
    icon: Zap,
  },
  {
    label: "Generative AI Apps",
    desc: "Custom GPT-powered products",
    href: "/contact-us",
    icon: Wand2,
  },
  {
    label: "ML Integration",
    desc: "Embed intelligence in your stack",
    href: "/contact-us",
    icon: Cpu,
  },
];

export default function NavMegaPanel({ type, onClose }) {
  const isOpen = type === "services" || type === "ai" || type === "contact";

  return (
    <div
      className={`nav-mega-drop ${isOpen ? "nav-mega-drop-open" : ""}`}
      aria-hidden={!isOpen}
      onMouseEnter={(e) => e.stopPropagation()}
    >
      {isOpen && (
        <div className={`nav-mega-panel ${type === "contact" ? "nav-mega-panel--contact" : ""}`}>
          <div className="nav-mega-panel-inner site-container-inner">
        {type === "services" && (
          <div className="nav-mega-services">
            <div className="nav-mega-intro">
              <p className="nav-mega-eyebrow">What we do</p>
              <h3 className="nav-mega-title">Our Services</h3>
              <p className="nav-mega-desc">
                From concept to launch — we design, build, and scale digital products that drive real business growth.
              </p>
              <a href="/contact-us" className="nav-mega-intro-cta group" onClick={onClose}>
                <span>Get a free quote</span>
                <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="nav-mega-services-grid-wrap">
            <div className="nav-mega-grid nav-mega-grid-services">
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
              <a href="/contact-us" className="nav-mega-ai-banner-cta group relative z-10 shrink-0" onClick={onClose}>
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

        {type === "contact" && (
          <div className="nav-mega-contact-shell">
            <div className="nav-mega-intro nav-mega-contact-intro">
              <p className="nav-mega-eyebrow">Start your project</p>
              <h3 className="nav-mega-title nav-mega-contact-title-sm">
                Let&apos;s build what&apos;s next
              </h3>
              <p className="nav-mega-desc">
                Share your goals — we reply within one business day.
              </p>
              <div className="nav-mega-contact-trust nav-mega-contact-trust--intro" aria-label="Why reach out">
                <span>24h response</span>
                <span>Free consultation</span>
              </div>
              <div className="nav-mega-contact-intro-links">
                <a href="tel:+919758403169" className="nav-mega-contact-quick-link">
                  +91 97584 03169
                </a>
                <a href="mailto:info@deopersindia.com" className="nav-mega-contact-quick-link">
                  info@deopersindia.com
                </a>
              </div>
              <a href="/contact-us" className="nav-mega-intro-cta group" onClick={onClose}>
                <span>View full contact page</span>
                <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="nav-mega-contact-form-col">
              <NavContactMegaForm fieldsOnly onNavigate={onClose} />
            </div>

            <aside className="nav-mega-contact-cto-card" aria-label="Technology leadership">
              <p className="nav-mega-contact-cto-label">Technology leadership</p>
              <div className="nav-mega-contact-cto-frame">
                <Image
                  src="/images/team/cto.jpg"
                  alt="Chief Technology Officer at DeopersIndia"
                  fill
                  sizes="(max-width: 1024px) 28vw, 220px"
                  className="nav-mega-contact-cto-photo"
                  priority
                />
                <div className="nav-mega-contact-cto-shade" aria-hidden="true" />
                <span className="nav-mega-contact-cto-badge">Chief Technology Officer</span>
              </div>
              <p className="nav-mega-contact-cto-copy">
                Partner with our CTO on architecture and delivery.
              </p>
              <a href="/contact-us" className="nav-mega-contact-cto-cta" onClick={onClose}>
                Book a strategy call
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </aside>
          </div>
        )}
          </div>
        </div>
      )}
    </div>
  );
}
