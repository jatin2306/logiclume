"use client";

import {
  HeartPulse,
  ShoppingBag,
  Car,
  GraduationCap,
  Building2,
  UtensilsCrossed,
  Plane,
  Megaphone,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

const industries = [
  { icon: HeartPulse, title: "Healthcare & Wellness", description: "Patient portals, telemedicine platforms, and health tracking apps with secure, compliant infrastructure.", badge: "blue" },
  { icon: ShoppingBag, title: "Retail & E-Commerce", description: "Online stores, inventory systems, and omnichannel commerce experiences that drive conversions.", badge: "orange" },
  { icon: Car, title: "Transport & Mobility", description: "Fleet management, ride-booking apps, and logistics platforms built for real-time operations.", badge: "blue" },
  { icon: GraduationCap, title: "Education & EdTech", description: "Learning management systems, online course platforms, and interactive educational tools.", badge: "orange" },
  { icon: Building2, title: "Real Estate & PropTech", description: "Property listing platforms, 3D visualization tools, and CRM systems for real estate professionals.", badge: "blue" },
  { icon: UtensilsCrossed, title: "Food & Hospitality", description: "Restaurant apps, table booking systems, and delivery management solutions.", badge: "orange" },
  { icon: Plane, title: "Travel & Tourism", description: "Booking engines, itinerary planners, and location-based travel experiences.", badge: "blue" },
  { icon: Megaphone, title: "Media & Advertising", description: "Campaign management platforms, content delivery systems, and audience analytics tools.", badge: "orange" },
];

const badgeClass = { blue: "icon-badge-blue", orange: "icon-badge-orange" };

export default function IndustriesSection() {
  return (
    <section className="home-section section-light">
      <SiteContainer>
        <SectionHeading
          label="Industries"
          title="Driving Innovation Across Diverse Sectors"
          description="We create scalable digital ecosystems tailored for emerging technology sectors and established industries alike."
          centered
          twoColor
          coloredWords={2}
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group home-card p-6"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${badgeClass[industry.badge]} shadow-sm`}>
                <industry.icon size={22} />
              </div>

              <h3 className="mt-4 font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition">
                {industry.title}
              </h3>

              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
