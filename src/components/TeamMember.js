"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";
import LeadershipSpotlight from "./LeadershipSpotlight";
import { teamMembers, officePhotos } from "@/data/teamMembers";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./team-section.css";

export default function TeamMembers() {
  return (
    <section className="home-section section-surface-blue">
      <SiteContainer>
        <SectionHeading
          label="Our Team"
          title="Meet the Experts Behind Your Success"
          description="A passionate team of developers, designers, and digital strategists committed to building innovative software solutions."
          centered
          twoColor
          coloredWords={2}
          className="home-section-head max-w-3xl mx-auto"
        />

        <LeadershipSpotlight />

        <div className="team-office-gallery">
          <div className="team-office-gallery-head">
            <span className="team-office-gallery-label">Life at DeopersIndia</span>
            <h3 className="team-office-gallery-title">
              Where we build — Noida & global delivery hubs
            </h3>
          </div>
          <div className="team-office-grid">
            {officePhotos.map((photo, index) => (
              <div
                key={photo.id}
                className={`team-office-card ${index === 0 ? "team-office-card--featured" : ""}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
                <p className="team-office-card-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="team-swiper-wrap">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1.05 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.25 },
              1280: { slidesPerView: 3 },
            }}
            className="team-swiper"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <article className="team-member-card group h-full">
                  <div className="team-member-photo">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                  </div>
                  <div className="team-member-body">
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-role">{member.role}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </SiteContainer>
    </section>
  );
}
