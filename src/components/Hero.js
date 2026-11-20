import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Brain, Code2, Smartphone } from "lucide-react";
import SiteContainer from "./SiteContainer";
import HomeTrustStrip from "./HomeTrustStrip";
import "./mi-hero.css";

const offers = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "CRM, ERP, SaaS, and business systems designed around your workflows, from first concept to production.",
    href: "/#services",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile",
    description:
      "Websites, web apps, and iOS and Android products with the performance and UX your customers expect.",
    href: "/#services",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Chatbots, automation, and AI features built into the products you already run.",
    href: "/#services",
  },
];

export default function Hero() {
  return (
    <section className="mi-hero" id="home" aria-label="LogicLume homepage hero">
      <div className="mi-hero-visual" aria-hidden>
        <Image
          src="/images/hero/home-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="mi-hero-visual-img"
        />
        <div className="mi-hero-visual-fade" />
      </div>

      <div className="mi-hero-body">
        <SiteContainer>
          <p className="mi-hero-pill">
            <span className="mi-hero-pill-dot" aria-hidden />
            From concept to production.
          </p>
          <h1 className="mi-hero-title">
            <span className="mi-hero-title-main">Custom software.</span>
            <span className="mi-hero-title-accent">Dedicated teams.</span>
          </h1>

          <div className="mi-hero-offers">
            {offers.map((offer) => {
              const Icon = offer.icon;
              return (
                <Link key={offer.title} href={offer.href} className="mi-hero-offer">
                  <h2>{offer.title}</h2>
                  <p>{offer.description}</p>
                  <span className="mi-hero-offer-foot">
                    <Icon size={22} strokeWidth={1.6} aria-hidden />
                    <span className="mi-hero-offer-arrow" aria-hidden>
                      <ArrowUpRight size={16} />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </SiteContainer>
      </div>

      <HomeTrustStrip variant="logos" />
    </section>
  );
}
