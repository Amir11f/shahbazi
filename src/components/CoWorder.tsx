"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function AutoWidthSwiper() {
  return (
    <div className="flex flex-col font-cursive relative -top-30 sm:-top-60 xl:-top-35">
      <p className="text-[26px] mb-8 flex self-center font-bold sm:text-4xl sm:mb-18">
        همکار بوده ایم
      </p>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView="auto" // 👈 each slide keeps its width
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 1000, // continuous move
          disableOnInteraction: false,
        }}
        speed={1000} // smooth infinite movement
        className="w-full overflow-hidden"
      >
        {[
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
        ].map((item) => (
          <SwiperSlide
            key={crypto.randomUUID()}
            className="!w-[136px] h-[34px] bg-gray-800 text-white text-xl "
          >
            <Image
              src="/images/OurCoworkers.png"
              alt="null"
              width={136}
              height={34}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
