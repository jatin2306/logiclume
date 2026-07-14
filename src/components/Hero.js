"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Hero() {
  const banners = [
    '/images/banner1.png',
  ];

  return (
    <section className="relative w-full pt-17 sm:pt-16 lg:pt-20">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-[calc(25vh)] sm:h-[calc(50vh)] md:h-[calc(50vh)] lg:h-[calc(100vh-2rem)]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${banner})` }}
            >
              <div className=" w-full h-full flex items-center justify-center">
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}