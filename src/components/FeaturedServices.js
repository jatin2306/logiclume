"use client";

import { ArrowRight, Brain, Globe, Smartphone, Cloud, Palette, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const featured = [
  {
    icon: Globe,
    tag: "Web Solutions",
    title: "Scalable Web Platforms",
    description:
      "High-performance websites and web applications built with React, Next.js, and modern cloud infrastructure for speed, SEO, and growth.",
    tags: ["React", "Next.js", "Laravel", "Node.js"],
    badge: "blue",
    featured: true,
  },
  {
    icon: Smartphone,
    tag: "Mobile",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps with intuitive UX, smooth performance, and scalable backend architecture.",
    tags: ["Flutter", "React Native", "iOS", "Android"],
    badge: "orange",
    featured: true,
  },
  {
    icon: Brain,
    tag: "AI & Automation",
    title: "AI-Powered Solutions",
    description:
      "Intelligent chatbots, automation workflows, and AI integrations that streamline operations and enhance customer experiences.",
    tags: ["OpenAI", "Chatbots", "Automation", "ML"],
    badge: "blue",
    featured: false,
  },
  {
    icon: Palette,
    tag: "Design",
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with usability — wireframes, prototypes, and pixel-perfect interfaces.",
    tags: ["Figma", "Prototyping", "Design Systems"],
    badge: "orange",
    featured: false,
  },
  {
    icon: Cloud,
    tag: "Cloud & DevOps",
    title: "Cloud Infrastructure",
    description:
      "Secure, scalable cloud deployments with AWS, automated CI/CD pipelines, and performance optimization.",
    tags: ["AWS", "Azure", "Docker", "CI/CD"],
    badge: "blue",
    featured: false,
  },
  {
    icon: Code2,
    tag: "Enterprise",
    title: "Custom Software",
    description:
      "Tailored CRM, ERP, and business automation systems designed to fit your unique workflows and scale with your growth.",
    tags: ["CRM", "ERP", "API Integration"],
    badge: "orange",
    featured: false,
  },
];

const badgeClass = {
  blue: "icon-badge-blue",
  orange: "icon-badge-orange",
};

export default function FeaturedServices() {
  return (
    <section className="py-20 lg:py-28 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Building Digital Products, Platforms & Experiences"
          description="End-to-end technology solutions designed for performance, scalability, and long-term business impact."
          centered
          twoColor
          coloredWords={3}
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.filter((s) => s.featured).map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl card-light p-8 lg:p-10 hover:shadow-xl hover:shadow-[rgba(21,101,192,0.08)] transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className={`absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2 opacity-[0.06] group-hover:opacity-[0.1] transition-opacity ${
                  service.badge === "blue" ? "bg-[var(--color-primary)]" : "bg-[var(--color-accent)]"
                }`}
              />

              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  {service.tag}
                </span>

                <div className={`mt-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${badgeClass[service.badge]} shadow-lg`}>
                  <service.icon size={26} />
                </div>

                <h3 className="mt-6 font-display text-2xl lg:text-3xl font-bold text-[var(--color-text)]">
                  {service.title}
                </h3>

                <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-surface-blue)] px-3 py-1 text-xs font-medium text-[var(--color-primary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition"
                >
                  Explore Capabilities
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.filter((s) => !s.featured).map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl card-light p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${badgeClass[service.badge]}`}>
                <service.icon size={20} />
              </div>

              <h3 className="mt-4 font-bold text-[var(--color-text)]">{service.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
                {service.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {service.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="rounded-full bg-[var(--color-surface)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
