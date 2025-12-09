import Image from "next/image";
import { CameraIcon, CameraIconS, HouseIcon, Setting } from "..";
import TypeWriter from "./TypeWriter";
export default function MahziarIntroduction() {
  return (
    <div className="flex flex-col items-center sm:flex-col xl:justify-around font-cursive xl:flex-col mb-40 sm:mb-20 xl:mb-0">
      <div className="flex flex-col-reverse items-center sm:flex-col xl:flex-row-reverse xl:justify-around font-cursive ">
        <div className="flex flex-col items-center text-center mx-3 sm:w-[70%] xl:w-[30%]">
          <p className="text-[18px] font-bold mb-3 sm:text-[28px] leading-[1.6]">
            <span className="text-golden text-[28px] sm:text-[48px]">
              <TypeWriter
                text="مهزیار شهبازی نژاد"
                speed={60}
                className="text-golden text-[28px] sm:text-[48px]"
              />
            </span>
            <br />
            <TypeWriter
              text="طراح ،‌‌‌ مشاور و مجری سیستم‌‌های نظارتی وشبکه"
              speed={60}
              startDelay={1000} // waits for name to finish
              className="block mt-1 sm:mt-2"
            />
          </p>

          <p className="text-xs/6 text-[#262626] font-thin mx-2 sm:text-lg/9">
            تیم تخصصی اجرا و راه اندازی تجهیزات برند هایک‌‌‌ویژن سبد محصولاتی از
            برترین برند های جهانی ارئه سرویس و خدمات امنیتی نظارتی و شبکه7روز
            هفته مشاوره و طراحی تخصصی در حیطه شبکه و سرور
          </p>
        </div>

        <div className="flex flex-col items-center ">
          <div className="flex flex-row-reverse">
            <div className="w-[165px] h-[48px] border-1 border-[#F6F6F6] rounded-md relative z-30 top-25 flex  items-center justify-center bg-white right-5 animate-[moveX_5s_ease-in-out_infinite] sm:w-[300px] sm:h-[95px] sm:top-50 sm:right-22">
              <div className="flex flex-row-reverse">
                <div className=" h-auto"></div>
                <div className="flex flex-col text-right gap-1 sm:gap-2">
                  <p className="text-[8px] font-bold sm:text-lg">
                    امنیت نوین مهزیار
                  </p>
                  <p className="text-[7px] font-thin sm:text-[15px]">
                    هایپر اینترنتی محصولات و خدمات امنیتی
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[190px] h-[48px]  border-1 border-[#F6F6F6] rounded-md relative z-30 top-60 bg-white flex  items-center justify-center animate-[moveMX_5s_ease-in-out_infinite] sm:w-100 sm:h-25 sm:top-130">
              <div className="flex flex-row-reverse sm:gap-4.5">
                <div className="w-5 h-5 bg-yellow-700 rounded-full sm:w-11 sm:h-11"></div>
                <div className="flex flex-col text-right gap-1 sm:gap-2">
                  <p className="text-[8px] font-bold sm:text-base">
                    مهزیار شهبازی نژاد/ 1380
                  </p>
                  <p className="text-[7px] font-thin sm:text-sm">
                    تکنسین، مشاور و مجری سیستم های نظارتی و شبکه
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col z-20">
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
      <div className=" flex flex-col bg-black w-[99%] xl:w-[87%] h-[219px] mb-20 rounded-xl text-white items-center justify-center gap-y-5 xl:flex-row relative top-20 sm:-top-10 xl:rounded-3xl xl:h-[170px] ">
        <div className="flex flex-row-reverse gap-0 sm:gap-9 xl:gap-0 text-base font-thin">
          <div className="flex flex-col items-center gap-4 justify-center cursor-pointer hover:text-golden hover:scale-105">
            <CameraIconS className="w-8 h-7 sm:w-10 sm:h-9 text-white" />
            <p className="text-[11px] sm:text-[15px] xl:text-lg">
              پروژه نصب دوربین مدار بسته
            </p>
          </div>
          <hr className="text-[#424242] w-10 xl:w-18 sm:w-15 sm:top-9 h-[1px] rotate-90 relative -bottom-6" />
          <div className="flex flex-col items-center gap-4 justify-center cursor-pointer hover:text-golden hover:scale-105">
            <HouseIcon className="w-8 h-7 sm:w-10 sm:h-9" />
            <p className="text-[11px] sm:text-[15px] xl:text-lg">فروشگاه</p>
          </div>
          <hr className="text-[#424242] w-10 xl:w-18 sm:w-15 sm:top-9 h-[1px] rotate-90 relative -bottom-6" />
          <div className="flex flex-col items-center gap-4 justify-center cursor-pointer hover:text-golden hover:scale-105">
            <HouseIcon className="w-8 h-7 sm:w-10 sm:h-9" />
            <p className="text-[11px] sm:text-[15px] xl:text-lg">
              پروژه نصب دزدگیر اماکن
            </p>
          </div>
        </div>
        <hr className="text-[#424242] hidden xl:flex w-10 xl:w-18 sm:w-15 sm:top-9 h-[1px] rotate-90 relative xl:-top-4" />
        <div className="flex flex-row-reverse gap-0 sm:gap-9 xl:gap-0 text-base font-thin">
          <div className="flex flex-col items-center gap-4 justify-center cursor-pointer hover:text-golden hover:scale-105">
            <Setting className="w-8 h-7 sm:w-10 sm:h-9" />
            <p className="text-[11px] sm:text-[15px] xl:text-lg">
              رفع ایراد و عیب یابی
            </p>
          </div>
          <hr className="text-[#424242] w-10 xl:w-18 sm:w-15 sm:top-9 h-[1px] rotate-90 relative -bottom-6" />
          <div className="flex flex-col items-center gap-4 justify-center cursor-pointer hover:text-golden hover:scale-105">
            <HouseIcon className="w-8 h-7 sm:w-10 sm:h-9" />
            <p className="text-[11px] sm:text-[15px] xl:text-lg">هایکست</p>
          </div>
          <hr className="text-[#424242] w-10 xl:w-18 sm:w-15 sm:top-9 h-[1px] rotate-90 relative -bottom-6" />
          <div className="flex flex-col items-center gap-4 justify-center cursor-pointer hover:text-golden hover:scale-105">
            <HouseIcon className="w-8 h-7 sm:w-10 sm:h-9" />
            <p className="text-[11px] sm:text-[15px] xl:text-lg">
              پروژه دیتا سرور و VIOP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
