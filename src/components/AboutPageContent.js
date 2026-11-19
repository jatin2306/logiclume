import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteContainer from "./SiteContainer";
import Button from "./Button";
import HomeTrustStrip from "./HomeTrustStrip";
import LeadershipSpotlight from "./LeadershipSpotlight";
import TestimonialCard from "./TestimonialCard";
import { services } from "@/data/services";
import { officePhotos } from "@/data/teamMembers";
import { allOffices, formatOfficeBlock } from "@/data/offices";
import {
  aboutStats,
  aboutStory,
  aboutMission,
  aboutValues,
  aboutFaqs,
} from "@/data/aboutPage";
import testimonialsData from "@/data/testimonials.json";
import "./about-page.css";

const featuredServices = services.slice(0, 6);
const featuredTestimonials = testimonialsData.slice(0, 3);

export default function AboutPageContent() {
  return (
    <div className="about-page">
      <div className="about-hero-band">
        <section className="about-hero" aria-labelledby="about-hero-title">
          <SiteContainer>
            <span className="section-label-orange about-hero-eyebrow">About Logic Lume</span>
            <h1 id="about-hero-title" className="about-hero-title">
              About Logic Lume
            </h1>
            <p className="about-hero-lead">
              We help businesses turn complex technology challenges into scalable digital products
              and lasting business value — from Noida to New York and London.
            </p>
          </SiteContainer>
        </section>

        <SiteContainer className="about-stats-band">
          <ul className="about-stats" aria-label="Company highlights">
            {aboutStats.map((stat) => (
              <li key={stat.label} className="about-stat">
                <span className="about-stat-value">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </div>

      <section className="about-section about-section--surface" aria-labelledby="about-story-title">
        <SiteContainer>
          <div className="about-story-grid">
            <div className="about-section-head">
              <span className="section-label-light about-section-kicker">Our story</span>
              <h2 id="about-story-title" className="about-section-title">
                {aboutStory.heading}
              </h2>
              <div className="about-story-copy">
                {aboutStory.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="about-office-grid" aria-label="Office photos">
              {officePhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="about-office-photo"
                >
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <div className="about-trust-wrap">
        <HomeTrustStrip />
      </div>

      <section className="about-section about-section--white" aria-labelledby="about-identity-title">
        <SiteContainer>
          <div className="about-section-head about-section-head--center">
            <span className="section-label-light about-section-kicker">What shapes us</span>
            <h2 id="about-identity-title" className="about-section-title">
              Mission, vision <span className="about-section-title-accent">&amp; values</span>
            </h2>
            <p className="about-section-desc">
              Technology changes quickly. Our commitment to engineering discipline, learning, and
              long-term client relationships stays constant.
            </p>
          </div>

          <div className="about-mvv-grid">
            <article className="about-mvv-card">
              <h3>Our mission</h3>
              <p>{aboutMission.mission}</p>
            </article>
            <article className="about-mvv-card">
              <h3>Our vision</h3>
              <p>{aboutMission.vision}</p>
            </article>
          </div>

          <div className="about-values-grid" style={{ marginTop: "1.25rem" }}>
            {aboutValues.map((value) => (
              <article key={value.title} className="about-value-card">
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="about-section about-section--surface" aria-labelledby="about-services-title">
        <SiteContainer>
          <div className="about-section-head about-section-head--center">
            <span className="section-label-orange about-section-kicker">Core services</span>
            <h2 id="about-services-title" className="about-section-title">
              How we help you build
            </h2>
            <p className="about-section-desc">
              Specialized engineering capabilities to design, build, modernize, and scale your
              product.
            </p>
          </div>
          <div className="about-services-grid">
            {featuredServices.map((service) => (
              <Link key={service.title} href="/#services" className="about-service-link">
                <span>{service.title}</span>
                <ArrowUpRight size={18} aria-hidden />
              </Link>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="about-section about-section--white" aria-labelledby="about-team-title">
        <SiteContainer>
          <div className="about-section-head about-section-head--center">
            <span className="section-label-light about-section-kicker">People</span>
            <h2 id="about-team-title" className="about-section-title">
              The minds behind Logic Lume
            </h2>
            <p className="about-section-desc">
              Leadership with business context, technical depth, and hands-on delivery experience.
            </p>
          </div>
          <div className="about-leadership-wrap">
            <LeadershipSpotlight />
          </div>
        </SiteContainer>
      </section>

      <section className="about-section about-section--surface" aria-labelledby="about-testimonials-title">
        <SiteContainer>
          <div className="about-section-head about-section-head--center">
            <span className="section-label-orange about-section-kicker">Testimonials</span>
            <h2 id="about-testimonials-title" className="about-section-title">
              What clients say about us
            </h2>
          </div>
          <div className="about-testimonials-grid">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="about-section about-section--white" aria-labelledby="about-faq-title">
        <SiteContainer>
          <div className="about-section-head about-section-head--center">
            <span className="section-label-light about-section-kicker">FAQs</span>
            <h2 id="about-faq-title" className="about-section-title">
              Frequently asked questions
            </h2>
          </div>
          <div className="about-faq-list">
            {aboutFaqs.map((item) => (
              <details key={item.q} className="about-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="about-section about-section--surface" aria-labelledby="about-offices-title">
        <SiteContainer>
          <div className="about-section-head about-section-head--center">
            <span className="section-label-light about-section-kicker">Global presence</span>
            <h2 id="about-offices-title" className="about-section-title">
              Our offices
            </h2>
          </div>
          <div className="about-offices-grid">
            {allOffices.map((office) => (
              <article key={office.id} className="about-office-card">
                <h3>{office.label}</h3>
                <p>{formatOfficeBlock(office)}</p>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="about-cta-band" aria-labelledby="about-cta-title">
        <SiteContainer>
          <div className="about-cta-panel">
            <div>
              <h2 id="about-cta-title" className="about-cta-title">
                Have a product or platform to build?
              </h2>
              <p className="about-cta-desc">
                Whether you are starting fresh, modernizing a legacy system, or scaling an existing
                product — our team can help you define the path and move toward production.
              </p>
            </div>
            <div className="about-cta-actions">
              <Button href="/book-a-call" variant="accent" size="md" className="rounded-full gap-2">
                Book a call
                <ArrowUpRight size={16} aria-hidden />
              </Button>
              <Link href="/contact-us" className="about-cta-link">
                Contact us
              </Link>
            </div>
          </div>
        </SiteContainer>
      </section>
    </div>
  );
}
