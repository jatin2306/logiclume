"use client";

import Hero from "@/components/Hero";
import HomeTrustStrip from "@/components/HomeTrustStrip";
import HomeScrollReveal from "@/components/HomeScrollReveal";
import FeaturedClients from "@/components/FeaturedClients";
import HeroSection from "@/components/HeroSection";
import FeaturedServices from "@/components/FeaturedServices";
import HomeServices from "@/components/Services";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import CTABanner from "@/components/CTABanner";
import PortfolioSection from "@/components/PortfolioSection";
import TeamMembers from "@/components/TeamMember";
import AwardsSection from "@/components/AwardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />

      <HomeTrustStrip />

      <HomeScrollReveal>
        <FeaturedClients />
      </HomeScrollReveal>

      <HomeScrollReveal>
        <section id="services">
          <FeaturedServices />
          <HomeServices />
        </section>
      </HomeScrollReveal>

      <HomeScrollReveal>
        <section id="industries">
          <IndustriesSection />
        </section>
      </HomeScrollReveal>

      <HomeScrollReveal>
        <section id="portfolio">
          <PortfolioSection />
        </section>
      </HomeScrollReveal>

      <HomeScrollReveal>
        <section id="about" className="about-anchor">
          <HeroSection />
        </section>
      </HomeScrollReveal>

      <HomeScrollReveal>
        <ProcessSection />
      </HomeScrollReveal>

      <HomeScrollReveal>
        <CTABanner />
      </HomeScrollReveal>

      <HomeScrollReveal>
        <section id="team">
          <TeamMembers />
        </section>
      </HomeScrollReveal>

      <HomeScrollReveal>
        <AwardsSection />
      </HomeScrollReveal>

      <HomeScrollReveal>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
      </HomeScrollReveal>
    </>
  );
}
