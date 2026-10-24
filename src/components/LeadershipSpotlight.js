"use client";

import Image from "next/image";
import { ArrowUpRight, Cpu, Shield, Zap } from "lucide-react";
import "./leadership-spotlight.css";

const highlights = [
  { icon: Cpu, text: "Scalable architecture & modern stacks" },
  { icon: Shield, text: "Secure, enterprise-grade delivery" },
  { icon: Zap, text: "Fast execution from idea to production" },
];

export default function LeadershipSpotlight() {
  return (
    <article className="leadership-spotlight" aria-labelledby="leadership-spotlight-title">
      <div className="leadership-spotlight-glow" aria-hidden="true" />

      <div className="leadership-spotlight-visual">
        <div className="leadership-spotlight-frame">
          <Image
            src="/images/team/cto.jpg"
            alt="Chief Technology Officer at DeopersIndia"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="leadership-spotlight-photo"
            priority={false}
          />
          <div className="leadership-spotlight-photo-shade" aria-hidden="true" />
        </div>
        <span className="leadership-spotlight-badge">Chief Technology Officer</span>
        <span className="leadership-spotlight-tag">DeopersIndia</span>
      </div>

      <div className="leadership-spotlight-copy">
        <span className="leadership-spotlight-eyebrow">Technology leadership</span>
        <h3 id="leadership-spotlight-title" className="leadership-spotlight-title">
          Engineering products that{" "}
          <span className="leadership-spotlight-title-accent">scale with confidence</span>
        </h3>
        <p className="leadership-spotlight-quote">
          Our CTO leads product architecture, engineering standards, and delivery — ensuring every
          web, mobile, and enterprise solution we ship is secure, performant, and built to grow
          with your business.
        </p>

        <ul className="leadership-spotlight-list">
          {highlights.map(({ icon: Icon, text }) => (
            <li key={text}>
              <span className="leadership-spotlight-list-icon" aria-hidden="true">
                <Icon size={16} strokeWidth={2.25} />
              </span>
              {text}
            </li>
          ))}
        </ul>

        <a href="/contact-us" className="leadership-spotlight-cta">
          Talk to our technology team
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
