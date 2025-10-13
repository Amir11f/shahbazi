import Image from "next/image";
import React from "react";
import { popularServices } from "@/data/mostPopularServices";

export default function ProductBlackBox() {
  return (
    <div className=" flex flex-col items-center font-cursive">
      <Image
        src="/images/SmallProductBlackBox.svg"
        alt="null"
        width={373}
        height={694}
        className=" sm:hidden"
      />
      <Image
        src="/images/MediumProductBlackBox.svg"
        alt="null"
        width={742}
        height={319}
        className=" hidden sm:inline xl:hidden"
      />
      <Image
        src="/images/BigProductBlackBox.svg"
        alt="null"
        width={1031}
        height={238}
        className=" hidden xl:flex"
      />
      <div className=" hidden xl:flex flex-col relative -top-43 items-center justify-center gap-1">
        <p className="hidden xl:block text-[26px] text-white font-bold">
          محصولات مکمل
        </p>
        <p className="hidden xl:block text-lg text-white font-thin">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنع
        </p>
      </div>
      <div className="flex flex-col items-center relative -top-148 gap-2.5 sm:flex-row sm:-top-46 xl:gap-6 xl:-top-37">
        {popularServices?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-[237px] h-[175px] rounded-[40px] bg-white border-[1px] border-[#ECECEC] sm:w-[171px] sm:h-[175px] sm:gap-3 justify-center xl:w-[199px] xl:h-[180px]"
          >
            <Image
              src={item.image}
              alt="null"
              width={155}
              height={114}
              className="sm:w-[109px] h-[109px]"
            />
            <p className="text-[17px]"> {item.service}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
