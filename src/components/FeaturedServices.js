"use client";

import { ArrowRight, Brain, Globe, Smartphone, Cloud, Palette, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

const featured = [
  {
    icon: Globe,
    tag: "Web Solutions",
    title: "Scalable Web Platforms",
    description:
      "High-performance websites and web apps built with React, Next.js, and modern cloud infrastructure for speed, SEO, and growth.",
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
      "Intelligent chatbots, automation workflows, and AI integrations that streamline operations.",
    tags: ["OpenAI", "Chatbots", "Automation"],
    badge: "blue",
    featured: false,
  },
  {
    icon: Palette,
    tag: "Design",
    title: "UI/UX Design",
    description:
      "User-centered design — wireframes, prototypes, and pixel-perfect interfaces.",
    tags: ["Figma", "Prototyping"],
    badge: "orange",
    featured: false,
  },
  {
    icon: Cloud,
    tag: "Cloud",
    title: "Cloud Infrastructure",
    description:
      "Secure, scalable cloud deployments with AWS and automated CI/CD pipelines.",
    tags: ["AWS", "Azure", "Docker"],
    badge: "blue",
    featured: false,
  },
  {
    icon: Code2,
    tag: "Enterprise",
    title: "Custom Software",
    description:
      "Tailored CRM, ERP, and business automation systems built for your workflows.",
    tags: ["CRM", "ERP", "API"],
    badge: "orange",
    featured: false,
  },
];

const badgeClass = {
  blue: "icon-badge-blue",
  orange: "icon-badge-orange",
};

export default function FeaturedServices() {
  const [mainA, mainB] = featured.filter((s) => s.featured);
  const small = featured.filter((s) => !s.featured);

  return (
    <section className="home-section section-light">
      <SiteContainer>
        <SectionHeading
          label="Our Services"
          title="Building Digital Products, Platforms & Experiences"
          description="End-to-end technology solutions designed for performance, scalability, and long-term business impact."
          centered
          twoColor
          coloredWords={3}
          className="max-w-3xl mx-auto mb-14"
        />

        <div className="home-bento mb-5">
          {[mainA, mainB].map((service, idx) => (
            <div
              key={service.title}
              className={`home-card home-card-featured p-8 lg:p-10 group relative overflow-hidden ${idx === 0 ? "home-bento-span-7" : "home-bento-span-5"}`}
            >
              <div
                className={`absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/3 opacity-[0.07] group-hover:opacity-[0.12] transition ${
                  service.badge === "blue" ? "bg-[var(--color-primary)]" : "bg-[var(--color-accent)]"
                }`}
              />

              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  {service.tag}
                </span>

                <div className={`mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${badgeClass[service.badge]}`}>
                  <service.icon size={24} />
                </div>

                <h3 className="mt-5 font-display text-2xl lg:text-3xl font-bold text-[var(--color-text)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[var(--color-text-muted)] leading-relaxed max-w-lg">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
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
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition"
                >
                  Explore Capabilities
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {small.map((service) => (
            <div key={service.title} className="home-card p-6 group relative overflow-hidden">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${badgeClass[service.badge]}`}>
                <service.icon size={18} />
              </div>

              <h3 className="mt-4 font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
                {service.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {service.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="rounded-full bg-[var(--color-surface)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
