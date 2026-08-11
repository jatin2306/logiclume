"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  { id: 1, name: "Sumit Kumar", role: "Founder & CEO", image: "/images/team/1.jpg" },
  { id: 2, name: "Ankita Singh", role: "Frontend Developer", image: "/images/team/2.jpg" },
  { id: 3, name: "Nisha Tiwari", role: "Full Stack Developer", image: "/images/team/5.jpg" },
  { id: 4, name: "Jatin Gupta", role: "Backend Developer", image: "/images/team/4.jpg" },
  { id: 5, name: "Chirag Gupta", role: "React Developer", image: "/images/team/6.jpg" },
  { id: 6, name: "Ankit Pal", role: "Frontend Developer", image: "/images/team/3.jpg" },
  { id: 7, name: "Aakash Singh", role: "MERN Stack Developer", image: "/images/team/7.png" },
  { id: 8, name: "Rishabh", role: "Backend Developer", image: "/images/team/8.jpg" },
];

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
          className="max-w-3xl mx-auto mb-16"
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-14"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="group overflow-hidden rounded-2xl card-light transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-[rgba(21,101,192,0.2)]">
                <div className="relative h-64 overflow-hidden bg-[var(--color-surface-blue)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition duration-500">
                    <p className="text-white text-sm font-medium">{member.role}</p>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-[var(--color-text)]">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SiteContainer>
    </section>
  );
}
