"use client";
import { HeadphonesIcon } from "@/index";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useMemo } from "react";
import Coworker from "@/components/CoWorder";

export default function ProductsIntroduction() {
  return (
    <div className="flex flex-col  font-cursive justify-end m-0 ">
      <div className="flex flex-col items-center justify-center h-150 sm:h-180 font-cursive gap-4 sm:gap-6 xl:gap-7 mt-10  xl:mt-15 bg-[#afafaf] ">
        <Image
          src="/images/shopBackground.png"
          alt="null"
          width={200}
          height={200}
          className="w-full h-80 relative top-10  brightness-50 sm:h-120 xl:h-200 sm:top-15"
        />
        <p className="text-3xl font-bold sm:text-[51px] xl:text-[64px] z-30 text-white relative bottom-50 sm:bottom-90 xl:bottom-120">
          هایپر اینترنتی مهزیار شهبازی
        </p>
        <p className="text-xs font-thin sm:text-base xl:text-xl z-30 text-white relative bottom-50 sm:bottom-90 xl:bottom-120">
          هایپر اینترنتی مهزیار شهبازی = کالاهای لوکس، کیفیت، اورجینال
        </p>
        {/* <AutoWidthSwiperLocal /> */}
        {/* <Coworker /> */}
      </div>
      <button className="w-[135px] h-[43px] border-[#DFDFDF] border-[1px]  self-center rounded-lg sm:rounded-xl sm:w-[246px] mt-10 sm:h-[81px] sm:mt-[40px] flex flex-row gap-5 items-center justify-center sm:gap-11 top-0  hover:bg-golden transition duration-100 mb-25 xl:mb-35">
        <p className="text-base font-thin relative top-1 sm:text-2xl">مشاوره</p>
        <HeadphonesIcon className="w-5.5 h-5.5 sm:w-8 sm:h-8" />
      </button>
    </div>
  );
}
// function AutoWidthSwiperLocal() {
//   const dummyArray = [
//     "/logoImages/321.png",
//     "/logoImages/32_2.png",
//     "/logoImages/32_3.png",
//     "/logoImages/32_4.png",
//     "/logoImages/cordura-1_2.png",
//     "/logoImages/cordura-1_3.png",
//     "/logoImages/cordura-1_4.png",
//     "/logoImages/cordura-1_5.png",
//   ];

//   return (
//     <div className="flex flex-col font-cursive relative -top-30 sm:-top-60 xl:-top-35">
//       <Swiper
//         modules={[Autoplay]}
//         loop
//         slidesPerView="auto"
//         spaceBetween={20}
//         centeredSlides
//         loopAdditionalSlides={dummyArray.length}
//         autoplay={{
//           delay: 1000,
//           disableOnInteraction: false,
//         }}
//         speed={1000}
//         className="w-full overflow-hidden"
//       >
//         {dummyArray.map((slide) => (
//           <SwiperSlide key={slide} className="!w-[136px] h-[34px]">
//             {/* <Image src={slid44e} alt={slide} width={136} height={34} /> */}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
