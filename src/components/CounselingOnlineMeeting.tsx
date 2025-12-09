import React from "react";
import { Clapperboard } from "@/index";
import { circle } from "framer-motion/client";
import Image from "next/image";

export default function CounselingOnlineMeeting() {
  return (
    <div className="font-cursive w-full flex justify-center flex-col items-center gap-11 xl:flex-row">
      <div className="w-[343px] h-auto flex flex-col rounded-xl border-[#f7efe0] border-[1px] sm:w-[596px] sm:items-center">
        <div className="flex flex-row items-end justify-end mt-5 gap-3 sm:relative sm:left-34 sm:mt-7  ">
          <p className="text-lg sm:text-2xl font-bold">جلسات حضوری</p>
          <Clapperboard className="w-9 h-9 text-golden mr-1 sm:w-12 sm:h-12" />
        </div>
        <ul
          className="list-disc mr-5 flex flex-col gap-3.5 mt-6 font-thin relative sm:left-9 sm:mt-8"
          dir="rtl"
        >
          <p className="text-xs/6 sm:text-base/10 font-thin pl-3 sm:w-100 xl:mb-10">
            جلسه مشاوره حضوری در شهر اهواز برگزاری میشود ولی چنانچه از شهر دیگری
            هستید و میخواهید به صورت حضوری به شهر اهواز تشریف بیاورید با همکاران
            ما در ارتباط باشید تا راهنمایی های لازم به شما انجام شود
          </p>
        </ul>
        <div className="w-[231px] flex flex-row-reverse items-center rounded-xs relative z-1000 top-26 text-white backdrop-blure-sm bg-black/30   justify-center gap-1 sm:top-45 sm:right-20 sm:mt-2">
          <p className="text-[7px] font-thin w-[200px]">
            لورم ایپسوم متن <span className="font-bold">ساختگی با تولید</span>
            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            <span className="font-bold">ساختگی با تولید</span>ن بلکه روزنامه و
            <span className="font-bold text-golden">ساختگی با تولید</span> و
            سطرآنچنان که لازم است
          </p>
          <div className="h-11 bg-golden w-[2px] rounded-2xl"></div>
        </div>
        <Image
          src="/images/phisicalMeeting.png"
          alt="null"
          width={342}
          height={139}
          className=" mb-1 relative bottom-4 z-10 sm:w-[486px] sm:h-[249px] sm:bg-cover sm:mb-4 "
        />
      </div>
      <div className="w-[343px] h-auto flex flex-col rounded-xl border-[#f7efe0] border-[1px] sm:w-[596px] sm:items-center">
        <div className="flex flex-row items-end justify-end mt-5 gap-3 sm:relative sm:left-34 sm:mt-7  ">
          <p className="text-lg sm:text-2xl font-bold"> جلسات آنلاین</p>
          <Clapperboard className="w-9 h-9 text-golden mr-1 sm:w-12 sm:h-12" />
        </div>
        <ul
          className="list-disc mr-5 flex flex-col gap-3.5 mt-6 relative  sm:mt-8 sm:left-9 "
          dir="rtl"
        >
          <p className="text-xs/6 sm:text-base/10 font-thin pl-3 sm:w-100">
            اگر به هر دلیلی نمی توانید بصورت مستقیم در جلسه مشاوره حضوری داشته
            باشید جای نگرانی نیست ما برای آن راه‌حلی داریم، جلسه شما از طریق
            بستر آنلاین در زمان تعیین شده با همان سطح خدمات جلسه حظوری درخدمتتان
            هستیم و همچنین فیلم و صوت جلسه در اختیار‌تان قرار میگیرد
          </p>
        </ul>
        <div className="w-[231px] flex flex-row-reverse items-center rounded-xs relative z-1000 top-26 text-white backdrop-blure-sm bg-black/30   justify-center gap-1 sm:top-45 sm:right-20 sm:mt-2">
          <p className="text-[7px] font-thin w-[200px]">
            لورم ایپسوم متن <span className="font-bold">ساختگی با تولید</span>
            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            <span className="font-bold">ساختگی با تولید</span>ن بلکه روزنامه و
            <span className="font-bold text-golden">ساختگی با تولید</span> و
            سطرآنچنان که لازم است
          </p>
          <div className="h-11 bg-golden w-[2px] rounded-2xl"></div>
        </div>
        <Image
          src="/images/OnlineMeeting.png"
          alt="null"
          width={342}
          height={139}
          className=" mb-1 relative bottom-4 z-10 sm:w-[486px] sm:h-[249px] sm:bg-cover sm:mb-4 "
        />
      </div>
    </div>
  );
}
