"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";
import LeadershipSpotlight from "./LeadershipSpotlight";
import { officePhotos } from "@/data/teamMembers";

import "./team-section.css";

export default function TeamMembers() {
  return (
    <section className="home-section section-surface-blue">
      <SiteContainer>
        <SectionHeading
          label="Our Team"
          title="Meet the Experts Behind Your Success"
          description="A passionate team of developers, designers, and digital strategists committed to building innovative software solutions."
          centered
          twoColor
          coloredWords={2}
          className="home-section-head max-w-3xl mx-auto"
        />

        <LeadershipSpotlight />

        <div className="team-office-gallery">
          <div className="team-office-gallery-head">
            <span className="team-office-gallery-label">Life at Logic Lume</span>
            <h3 className="team-office-gallery-title">
              Where we build — Noida & global delivery hubs
            </h3>
          </div>
          <div className="team-office-grid">
            {officePhotos.map((photo) => (
              <div
                key={photo.id}
                className="team-office-card"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={photo.id === "standup"}
                />
                <p className="team-office-card-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
