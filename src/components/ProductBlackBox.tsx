import Image from "next/image";
import React from "react";
import { popularServices } from "@/data/mostPopularServices";
import { AddCircle } from "../index";

export default function ProductBlackBox() {
  return (
    <div className=" flex flex-col items-center font-cursive mt-10 sm:mt-15 xl:mt-23">
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
            className="flex flex-col items-center w-[237px] h-auto rounded-[40px] bg-white border-[1px] border-[#ECECEC] sm:w-[171px] sm:h-auto sm:gap-3 justify-center xl:w-[199px] xl:h-auto"
          >
            <Image
              src={item.image}
              alt="null"
              width={155}
              height={114}
              className="sm:w-[109px] h-[109px] mt-5 sm:mt-4"
            />
            <div className="flex flex-col items-center">
              <p className="text-[17px]  mt-3 sm:mt-1 mb-3 "> {item.service}</p>
              <div className="w-[169px] h-[35px] bg-[#151517] hidden hover:flex flex-row-reverse items-center justify-center rounded-lg gap-2.5  sm:w-[104px] xl:w-[130px] mb-2">
                <p className="text-sm text-white">افزودن </p>
                <AddCircle className="text-white w-4.5 h-4.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
