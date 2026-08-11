"use client";

import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
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
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <LogoMarquee />

      <section id="about">
        <HeroSection />
      </section>

      <section id="services">
        <FeaturedServices />
        <HomeServices />
      </section>

      <IndustriesSection />

      <ProcessSection />

      <CTABanner />

      <section id="portfolio">
        <PortfolioSection />
      </section>

      <section id="team">
        <TeamMembers />
      </section>

      <AwardsSection />

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}
