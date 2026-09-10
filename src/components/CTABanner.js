"use client";

import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import SiteContainer from "./SiteContainer";

export default function CTABanner() {
  return (
    <section className="py-16 lg:py-20 section-light">
      <SiteContainer>
        <div className="home-cta-banner p-6 sm:p-10 lg:p-14">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-accent-light)] mb-3">
                Start your project
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold text-white leading-tight">
                Let&apos;s build what&apos;s next.
              </h2>
              <p className="mt-4 text-base lg:text-lg text-blue-100/80 leading-relaxed">
                Partner with us to transform your ideas into scalable digital products
                that drive measurable business growth.
              </p>
            </div>

            <a href="#contact" className="flex-shrink-0">
              <Button variant="accent" size="lg" className="gap-2 rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-[rgba(245,130,32,0.3)]">
                Schedule a Consultation
                <ArrowUpRight size={18} />
              </Button>
            </a>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
