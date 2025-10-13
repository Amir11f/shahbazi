import Image from "next/image";
import React from "react";

export default function MahziarIntroduction() {
  return (
    <div className="flex flex-col-reverse items-center sm:flex-col  xl:justify-around font-cursive xl:flex-col">
      <div className="flex flex-col-reverse items-center sm:flex-col xl:flex-row-reverse xl:justify-around font-cursive ">
        <div className="flex flex-col items-center text-center mx-3 sm:w-[70%] xl:w-[30%]">
          <p className="text-[28px] font-bold mb-3 sm:text-[48px]">
            <span className="text-golden ">مهزیار شهبازی نژاد</span> مدرس و
            مشاور سیستم های امنیتی
          </p>
          <p className="text-xs/6 text-[#262626] font-thin mx-2 sm:text-lg/9 ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها
          </p>
        </div>
        <div>
          <div className="flex flex-col">
            <Image
              src="/images/Model.jpg"
              alt="null"
              width={236}
              height={289}
              className="z-10 sm:w-[500px] sm:h-[611px]"
            />
            <Image
              src="/images/HikVision.jpg"
              alt="null"
              width={295}
              height={70}
              className="relative -top-46 z-1 sm:w-[645px] sm:h-[148px] sm:-top-100"
            />
          </div>
        </div>
      </div>
      <div className=" hidden sm:flex flex-col bg-black w-[99%] xl:w-[87%] h-[135px] mb-20 rounded-xl text-white items-center justify-center gap-y-5 xl:flex-row">
        <div className="flex flex-row gap-5 text-base font-thin">
          <p>پروژه نصب دوربین مدار بسته</p>
          <hr className="text-[#424242] w-7 h-[1px] rotate-90 relative -bottom-3" />
          <p>فروشگاه</p>
          <hr className="text-[#424242] w-7 h-[1px] rotate-90 relative -bottom-3" />
          <p>پروژه نصب دزدگیر اماکن</p>
        </div>
        <div className="flex flex-row gap-5 text-base font-thin">
          <p>رفع ایراد و عیب یابی</p>
          <hr className="text-[#424242] w-7 h-[1px] rotate-90 relative -bottom-3" />

          <p>هایکست</p>
          <hr className="text-[#424242] w-7 h-[1px] rotate-90 relative -bottom-3" />

          <p>پروژه دیتا سرور و VIOP</p>
        </div>
      </div>
    </div>
  );
}
