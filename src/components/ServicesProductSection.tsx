import React from "react";
import servicesItems from "@/data/servicesItems";
import Image from "next/image";

export default function ServicesProductSection() {
  return (
    <div className="inline font-cursive  ">
      <div className="flex flex-col items-center justify-between gap-3 bg-[url('/images/servicesPageImageBackground.png')] bg-center bg-no-repeat w-full h-230 sm:h-300 sm:bg-cover xl:flex-row-reverse xl:h-[862px]  ">
        <div className="relative top-31 flex flex-col text-center items-center justify-center gap-7 xl:-top-20 xl:w-[50%] xl:text-right xl:items-end xl:pr-20 xl:relative">
          <p className="text-[28px] text-white/90 font-bold sm:text-[64px]/normal">
            هایپر اینترنتی مهزیار
            <br /> شهبازی
          </p>
          <p className="text-sm text-white font-thin sm:text-lg">
            سلام درود به شما دوستان عزیز خوش آمدین به
            <br className="sm:hidden" /> فروشگاه ما
          </p>
        </div>
        <div className="h-250 relative z-20000 w-full bg-dark/70 flex items-center justify-center top-50 sm:h-140 sm:-top-8 xl:h-full xl:w-[50%] xl:top-0">
          <div className="grid grid-cols-2 gap-y-4 gap-x-3.5 sm:grid-cols-3 sm:gap-y-4! ">
            {servicesItems.map((item) => (
              <div
                key={item.id}
                className="w-[158px] h-[138px] rounded-lg bg-transparent flex flex-col items-center justify-center gap-2 sm:w-[186px] sm:h-[162px] sm:rounded-xl border border-white/30 hover:bg-white/10 cursor-pointer transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 sm:w-25 sm:h-25"
                  width={10}
                  height={10}
                />
                <p className="text-white text-xs sm:text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
