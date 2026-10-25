"use client";

import Hero from "@/components/Hero";
import HomeTrustStrip from "@/components/HomeTrustStrip";
import HomeScrollReveal from "@/components/HomeScrollReveal";
import TeamMembers from "@/components/TeamMember";

export default function Home() {
  return (
    <>
      <Hero />

      <HomeTrustStrip />

      <HomeScrollReveal>
        <section id="team">
          <TeamMembers />
        </section>
      </HomeScrollReveal>
    </>
  );
}
