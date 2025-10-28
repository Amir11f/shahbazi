"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useMemo } from "react";

export default function AutoWidthSwiper() {
  const slides = useMemo(
    () =>
      [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
      ].map((label) => ({
        id: crypto.randomUUID(),
        label,
      })),
    []
  );

  return (
    <div className="flex flex-col font-cursive relative -top-30 sm:-top-60 xl:-top-35">
      <p className="text-[26px] mb-8 flex self-center font-bold sm:text-4xl sm:mb-18">
        همکار بوده ایم
      </p>
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView="auto"
        spaceBetween={20}
        centeredSlides
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="w-full overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="!w-[136px] h-[34px] bg-gray-800 text-white text-xl"
          >
            <Image
              src="/images/OurCoworkers.png"
              alt={slide.label}
              width={136}
              height={34}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
