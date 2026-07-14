"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import HomeServices from "@/components/Services";
import TeamMembers from "@/components/TeamMember";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <>
      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <HeroSection />
      </section>

      {/* Services */}
      <section id="services">
        <HomeServices />
      </section>

      {/* Portfolio */}
      {/* <section id="portfolio">
        <PortfolioSection />
      </section> */}

      {/* Team */}
      <section id="team">
        <TeamMembers />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}