"use client";

import SiteContainer from "./SiteContainer";
import { getFlagshipProjects } from "@/data/portfolioProjects";

const extraTrustNames = ["FinTech", "Health Tech", "Real Estate", "AI Platforms"];

export default function HomeClientTrust() {
  const flagships = getFlagshipProjects();

  return (
    <section className="home-client-trust" aria-label="Trusted by leading brands">
      <SiteContainer>
        <div className="home-client-trust-inner">
          <p className="home-client-trust-label">Trusted by teams who ship at scale</p>
          <ul className="home-client-trust-logos">
            {flagships.map((project) => (
              <li key={project.id} className="home-client-trust-logo">
                {project.partner || project.name}
              </li>
            ))}
            {extraTrustNames.map((name) => (
              <li key={name} className="home-client-trust-logo home-client-trust-logo--muted">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </SiteContainer>
    </section>
  );
}
