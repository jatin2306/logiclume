"use client";

import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    id: 1,
    name: "Sumit Kumar",
    role: "Founder & CEO",
    image: "/images/team/1.jpg",
    skills: ["Leadership", "Business Strategy"],
  },
  {
    id: 2,
    name: "Ankita Singh",
    role: "Frontend Developer",
    image: "/images/team/2.jpg",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 3,
    name: "Nisha Tiwari",
    role: "Full Stack Developer",
    image: "/images/team/5.jpg",
    skills: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    name: "Jatin Gupta",
    role: "Backend Developer",
    image: "/images/team/4.jpg",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 5,
    name: "Chirag Gupta",
    role: "React Developer",
    image: "/images/team/6.jpg",
    skills: ["React", "Redux", "JavaScript"],
  },
  {
    id: 6,
    name: "Ankit Pal",
    role: "Frontend Developer",
    image: "/images/team/3.jpg",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 7,
    name: "Aakash Singh",
    role: "MERN Stack Developer",
    image: "/images/team/7.png",
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    id: 8,
    name: "Rishabh",
    role: "Backend Developer",
    image: "/images/team/8.jpg",
    skills: ["Node.js", "REST API", "PostgreSQL"],
  },
];

export default function TeamMembers() {
  return (
    <section className="py-5 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Meet Our Experts
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            A passionate team of developers, designers, and digital experts
            committed to building innovative software solutions.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="pb-14"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 opacity-0 transition duration-500 group-hover:opacity-100">
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:bg-blue-600 hover:text-white">
                      <Linkedin size={16} />
                    </button>

                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:bg-slate-900 hover:text-white">
                      <Github size={16} />
                    </button>
                  </div> */}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-orange-500">
                    {member.role}
                  </p>

                  {/* <div className="mt-4 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div> */}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}