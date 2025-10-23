"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function AutoWidthSwiper() {
  return (
    <div className="flex flex-col-reverse">
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
            key={item}
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
