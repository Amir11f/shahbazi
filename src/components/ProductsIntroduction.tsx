"use client";

import { HeadphonesIcon } from "@/index";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useMemo } from "react";

export default function ProductsIntroduction() {
  return (
    <div className="flex flex-col font-cursive justify-end m-0">
      <div className="flex flex-col items-center justify-center h-150 sm:h-180 gap-4 sm:gap-6 xl:gap-7 mt-10 xl:mt-15 bg-[#afafaf] relative overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/shopBackground.png"
          alt="background"
          fill
          priority
          quality={90}
          className="object-cover brightness-50"
        />

        {/* Text */}
        <p className="text-3xl font-bold sm:text-[51px] xl:text-[64px] z-10 text-white text-center">
          هایپر اینترنتی مهزیار شهبازی
        </p>

        <p className="text-xs font-thin sm:text-base xl:text-xl z-10 text-white text-center">
          هایپر اینترنتی مهزیار شهبازی = کالاهای لوکس، کیفیت، اورجینال
        </p>

        {/* Slider */}
        <LogoMarquee />
      </div>

      {/* Button */}
      <button className="w-[135px] h-[43px] border border-[#DFDFDF] self-center rounded-lg sm:rounded-xl sm:w-[246px] mt-10 sm:h-[81px] flex gap-5 items-center justify-center hover:bg-golden transition mb-25 xl:mb-35">
        <p className="text-base font-thin sm:text-2xl">مشاوره</p>
        <HeadphonesIcon className="w-5.5 h-5.5 sm:w-8 sm:h-8" />
      </button>
    </div>
  );
}

/* ───────────────── LOGO MARQUEE ───────────────── */

function LogoMarquee() {
  const logos = [
    "/logoImages/321.png",
    "/logoImages/32_2.png",
    "/logoImages/32_3.png",
    "/logoImages/32_4.png",
    "/logoImages/cordura-1_2.png",
    "/logoImages/cordura-1_3.png",
    "/logoImages/cordura-1_4.png",
    "/logoImages/cordura-1_5.png",
  ];

  // 🔥 KEY FIX: duplicate slides
  const slides = useMemo(() => [...logos, ...logos], []);

  return (
    <div className="w-full mt-8 z-10">
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView="auto"
        breakpoints={{
          0: {
            spaceBetween: 0, // mobile
          },
          640: {
            spaceBetween: 30, // sm and above
          },
        }}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="w-full"
      >
        {slides.map((src, i) => (
          <SwiperSlide
            key={i}
            className="!w-[100px] h-7 !sm:w-[170px] sm:h-[60px]  flex items-center justify-center gap-0 sm:gap-20"
          >
            <Image
              src={src}
              alt="brand"
              width={100}
              height={30}
              quality={85}
              className="object-contain w-[100px] h-11  sm:w-[170px] sm:h-[60px] "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
