"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import "./mi-hero.css";

const wxSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-wx-serif",
  display: "swap",
});

const chips = [
  ["o", "Custom Software"],
  ["k", "Web Platforms"],
  ["l", "Mobile Apps"],
  ["s", "AI Solutions"],
  ["b hot", "80+", "projects"],
  ["o", "Chatbots"],
  ["l", "API Integration"],
  ["b", "150+", "specialists"],
  ["k", "CRM Systems"],
  ["s", "Branding"],
  ["l", "Cloud & DevOps"],
  ["b", "15+", "industries"],
  ["o", "Automation"],
  ["k", "UI / UX"],
  ["l", "Data Platforms"],
  ["s", "Product Strategy"],
];

export default function Hero() {
  const heroRef = useRef(null);
  const playRef = useRef(null);
  const curRef = useRef(null);
  const chipRefs = useRef([]);

  useEffect(() => {
    const hero = heroRef.current;
    const play = playRef.current;
    const cur = curRef.current;
    if (!hero || !play || !cur) return undefined;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let engine = null;
    let items = [];
    let alive = true;
    let visible = true;
    let resizeTimer = 0;
    let Matter = null;

    const onMove = (event) => {
      const rect = hero.getBoundingClientRect();
      const px = ((event.clientX - rect.left) / rect.width) * 100;
      const py = ((event.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--mx", `${px}%`);
      hero.style.setProperty("--my", `${py}%`);

      if (!fine) return;
      cur.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      cur.classList.add("is-on");
      const overChip = event.target.closest && event.target.closest(".wx-chip");
      cur.classList.toggle("is-big", Boolean(overChip));
    };

    const onLeave = () => {
      cur.classList.remove("is-on");
    };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);

    const draw = () => {
      items.forEach((item) => {
        const { x, y } = item.body.position;
        item.el.style.transform = `translate(${x - item.w / 2}px, ${y - item.h / 2}px) rotate(${item.body.angle}rad)`;
      });
    };

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible || !engine) return;
      Matter.Engine.update(engine, 1000 / 60);
      draw();
    };

    const init = () => {
      if (!alive || !Matter) return;
      cancelAnimationFrame(raf);
      if (engine) Matter.Engine.clear(engine);
      const width = play.clientWidth;
      const height = play.clientHeight;
      if (width < 40 || height < 40) return;

      engine = Matter.Engine.create({ enableSleeping: true });
      engine.gravity.y = 1.15;
      const world = engine.world;
      const wall = { isStatic: true };
      const floorTop = height - 14;
      Matter.Composite.add(world, [
        Matter.Bodies.rectangle(width / 2, floorTop + 40, width * 3, 80, wall),
        Matter.Bodies.rectangle(-40, height / 2, 80, height * 4, wall),
        Matter.Bodies.rectangle(width + 40, height / 2, 80, height * 4, wall),
      ]);

      items = chipRefs.current.filter(Boolean).map((el, index) => {
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        const x = w / 2 + Math.random() * Math.max(width - w, 1);
        const y = -h - index * (reduce ? 10 : 110) - Math.random() * 60;
        const options = {
          restitution: 0.15,
          friction: 0.6,
          frictionAir: 0.008,
          density: 0.002,
          sleepThreshold: 40,
          angle: (Math.random() - 0.5) * 0.22,
        };
        const body = el.classList.contains("wx-b")
          ? Matter.Bodies.circle(x, y, w / 2, options)
          : Matter.Bodies.rectangle(x, y, w, h, { ...options, chamfer: { radius: h / 2 } });
        Matter.Composite.add(world, body);
        return { el, body, w, h };
      });

      const mouse = Matter.Mouse.create(play);
      ["mousewheel", "DOMMouseScroll", "wheel"].forEach((name) => {
        play.removeEventListener(name, mouse.mousewheel);
      });
      Matter.Composite.add(
        world,
        Matter.MouseConstraint.create(engine, {
          mouse,
          constraint: { stiffness: 0.18, render: { visible: false } },
        })
      );

      if (reduce) {
        for (let step = 0; step < 500; step += 1) Matter.Engine.update(engine, 1000 / 60);
        draw();
        return;
      }
      draw();
      loop();
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(init, 250);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(hero);
    window.addEventListener("resize", onResize);

    const boot = async () => {
      const mod = await import("matter-js");
      if (!alive) return;
      Matter = mod.default || mod;
      const ready = document.fonts?.ready || Promise.resolve();
      ready.then(() => {
        if (alive) init();
      });
    };

    boot().catch(() => {
      play.classList.add("is-static");
    });

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      if (engine && Matter) Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <section
      className={`wx-hero ${wxSerif.variable}`}
      id="home"
      ref={heroRef}
      aria-label="Webologyx Technologies homepage hero"
    >
      <div className="wx-floats" aria-hidden="true">
        <span className="wx-chip wx-o wx-float wx-float-saas">SaaS Apps</span>
        <span className="wx-chip wx-k wx-float wx-float-ecom">E-commerce</span>
        <span className="wx-chip wx-s wx-float wx-float-dash">Dashboards</span>
        <span className="wx-chip wx-l wx-float wx-float-iot">IoT Solutions</span>
        <span className="wx-chip wx-l wx-float wx-float-qa">QA Testing</span>
        <span className="wx-chip wx-s wx-float wx-float-care">Maintenance</span>
      </div>

      <div className="wx-stage">
        <p className="wx-pill">
          <i />
          AI-first software company
        </p>
        <h1>
          Whatever you need
          <br />
          built, <em>we ship it</em>
        </h1>
        <p className="wx-sub">
          Custom software, AI and automation for growing businesses, delivered by one dedicated team.
        </p>
        <div className="wx-actions">
          <Link href="/contact-us" className="wx-btn wx-btn-solid">
            Start your project
          </Link>
          <Link href="/work" className="wx-btn wx-btn-ghost">
            Explore our work
          </Link>
        </div>
      </div>

      <a href="#services" className="wx-scroll" aria-label="Scroll to the next section">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3.5 6.5 8 11l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      <div className="wx-play" id="play" ref={playRef}>
        {chips.map((chip, index) => (
          <div
            key={`${chip[1]}-${index}`}
            ref={(node) => {
              chipRefs.current[index] = node;
            }}
            className={`wx-chip ${chip[0]
              .split(" ")
              .map((name) => `wx-${name}`)
              .join(" ")}`}
          >
            {chip[2] ? (
              <>
                {chip[1]}
                <small>{chip[2]}</small>
              </>
            ) : (
              chip[1]
            )}
          </div>
        ))}
      </div>

      <div className="wx-cur" ref={curRef} aria-hidden="true" />
    </section>
  );
}
