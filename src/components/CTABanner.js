"use client";

import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function CTABanner() {
  return (
    <section className="py-16 lg:py-20 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl p-10 lg:p-16 border border-[rgba(21,101,192,0.15)]"
          style={{ background: "var(--color-cta-gradient)" }}
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[rgba(245,130,32,0.15)] rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[rgba(255,255,255,0.1)] rounded-full blur-[100px]" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
                Let&apos;s build what&apos;s next.
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-xl">
                Partner with us to transform your ideas into scalable digital products
                that drive measurable business growth.
              </p>
            </div>

            <a href="#contact" className="flex-shrink-0">
              <Button variant="accent" size="lg" className="gap-2 hover:scale-105 transition-transform">
                Schedule a Consultation
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
