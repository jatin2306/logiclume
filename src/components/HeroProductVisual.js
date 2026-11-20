"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getFlagshipProjects } from "@/data/portfolioProjects";

const slides = getFlagshipProjects().filter((p) => p.imageSrc);

export default function HeroProductVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  const active = slides[index] ?? slides[0];
  if (!active) return null;

  return (
    <div className="dp-hero-product" role="img" aria-label="Featured LogicLume product deliveries">
      <div className="dp-hero-product-glow" />
      <div className="dp-hero-product-frame">
        <div className="dp-hero-product-chrome">
          <span className="dp-hero-product-dot" />
          <span className="dp-hero-product-dot" />
          <span className="dp-hero-product-dot" />
          <span className="dp-hero-product-url">
            {active.url ? active.url.replace(/^https?:\/\//, "").split("/")[0] : "logiclume.com"}
          </span>
        </div>
        <div className="dp-hero-product-screen">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={`dp-hero-product-slide ${i === index ? "dp-hero-product-slide--active" : ""}`}
            >
              <Image
                src={slide.imageSrc}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 520px"
                priority={i === 0}
              />
            </div>
          ))}
          <div className="dp-hero-product-shade" />
        </div>
      </div>

      <div className="dp-hero-product-float dp-hero-product-float--tl">
        <span className="dp-hero-product-float-val">80+</span>
        <span className="dp-hero-product-float-lbl">Projects shipped</span>
      </div>
      <div className="dp-hero-product-float dp-hero-product-float--br">
        <span className="dp-hero-product-float-val">{active.partner || active.name}</span>
        <span className="dp-hero-product-float-lbl">Flagship delivery</span>
      </div>
    </div>
  );
}
