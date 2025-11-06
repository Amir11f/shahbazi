import React from "react";
import Letter from "../../public/icons/Letter";
import PhoneIcon from "../../public/icons/PhoneCalling";

export default function CounsellingForm() {
  return (
    <div className="flex items-center flex-col font-cursive ">
      <p className="text-2xl font-bold mb-5 sm:text-[40px]">مشاور دهی</p>
      <p className="text-sm font-thin w-[311px] text-center mb-14 sm:w-[680px] sm:text-base xl:w-300">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </p>
      <div className="flex flex-col xl:flex-row-reverse w-full bg-[#F6F6F6] justify-center items-center xl:w-290 xl:rounded-4xl">
        <form
          action=""
          className="bg-[#F6F6F6] rounded-3xl w-full flex flex-col items-center justify-center gap-4 py-9 sm:py-[68px] sm:gap-6 xl:w-[50%] xl:py-9 relative left-10 "
        >
          <input
            type="text"
            className="w-[90%] h-[54px] bg-white rounded-lg  focus:outline-none focus:border-2 focus:border-golden text-end text-xs pr-5 sm:w-[476px] sm:h-[54px] sm:text-base"
            placeholder="نام و نام خانوادگی"
          />
          <input
            type="text"
            className="w-[90%] h-[54px] bg-white rounded-lg  focus:outline-none focus:border-2 focus:border-golden text-end text-xs pr-5 sm:w-[476px] sm:h-[54px] sm:text-base"
            placeholder="نام شرکت"
          />
          <input
            type="text"
            className="w-[90%] h-[54px] bg-white rounded-lg  focus:outline-none focus:border-2 focus:border-golden text-end text-xs pr-5 sm:w-[476px] sm:h-[54px] sm:text-base"
            placeholder=" شماره تماس"
          />
          <input
            type="text"
            className="w-[90%] h-[54px] bg-white rounded-lg  focus:outline-none focus:border-2 focus:border-golden text-end text-xs pr-5 sm:w-[476px] sm:h-[54px] sm:text-base"
            placeholder=" ایمیل"
          />
          <div className="flex flex-row-reverse w-[90%] items-center justify-between px-3 sm:gap-62 self-center  bg-white h-[54px] rounded-lg sm:w-[476px] sm:h-[54px]">
            <div className="flex flex-row items-center justify-center gap-2  group">
              <p className="text-sm text-[#7e7e7e] relative top-[2px] group-has-[input:checked]:text-golden sm:text-base">
                حضوری
              </p>
              <input
                type="checkbox"
                className="
                w-6 h-6 sm:w-5 sm:h-5 ml-1 rounded-full border-[2px] border-[#7e7e7e] checked:border-golden sm:ml-2 focus:outline-none focus:border-2 focus:border-golden w-
                appearance-none cursor-pointer relative sm:top-[4px] top-[1px]
                checked:bg-white checked:after:content-['']
                checked:after:absolute checked:after:left-[7px] sm:checked:after:left-[6px] checked:after:top-[3px]  sm:checked:after:top-[1px]
                checked:after:w-[6px] checked:after:h-[12px] sm:checked:after:w-[6px] sm:checked:after:h-[12px] 
                checked:after:border-golden checked:after:border-b-2 checked:after:border-r-2 sm:checked:after:border-b-2 sm:checked:after:border-r-2
                checked:after:rotate-45 
                text-right pr-3 
              "
              />
            </div>
            <div className="flex flex-row-reverse items-center justify-center gap-1 relative top-0.5">
              <p className="text-sm ">2,300,000 </p>
              <p className=" text-[10px] relative top-[1px]">تومان</p>
            </div>
          </div>
          <div className="flex flex-row-reverse w-[90%] items-center justify-between px-3 sm:gap-62 self-center  bg-white h-[54px] rounded-lg sm:w-[476px] sm:h-[54px]">
            <div className="flex flex-row items-center justify-center gap-2  group">
              <p className="text-sm text-[#7e7e7e] relative top-[2px] group-has-[input:checked]:text-golden sm:text-base">
                حضوری
              </p>
              <input
                type="checkbox"
                className=" peer
                w-6 h-6 sm:w-5 sm:h-5 ml-1 rounded-full border-[2px] border-[#7e7e7e] sm:ml-2 checked:border-golden
                appearance-none cursor-pointer relative sm:top-[4px] top-[1px]
                checked:bg-white checked:after:content-['']
                checked:after:absolute checked:after:left-[7px] sm:checked:after:left-[6px] checked:after:top-[3px]  sm:checked:after:top-[1px]
                checked:after:w-[6px] checked:after:h-[12px] sm:checked:after:w-[6px] sm:checked:after:h-[12px] 
                checked:after:border-golden checked:after:border-b-2 checked:after:border-r-2 sm:checked:after:border-b-2 sm:checked:after:border-r-2
                checked:after:rotate-45 
                text-right pr-3 
              "
              />
            </div>
            <div className="flex flex-row-reverse items-center justify-center gap-1 relative top-0.5">
              <p className="text-sm ">2,300,000 </p>
              <p className=" text-[10px] relative top-[1px]">تومان</p>
            </div>
          </div>
          <textarea
            name=""
            className="w-[90%] h-[152px] bg-white rounded-lg pr-5 sm:w-[476px] sm:h-[152px] text-sm text-end pt-5 focus:outline-none focus:border-2 focus:border-golden sm:text-base sm:mt-8"
            placeholder="توضیحات"
          ></textarea>
          <div className="w-[90%] h-11 rounded-lg bg-golden flex items-center justify-center text-white text-lg hover:bg-hover sm:text-xl sm:w-[476px] sm:h-[54px] sm:mb-5 ">
            پرداخت
          </div>
        </form>
        <div className="w-[518px] h-[732px] relative bottom-1 rounded-[5px] border-[1px] border-golden flex flex-col items-center left-5">
          <p className="text-[32px] mt-[105px] mb-2 font-bold ">جلسه مشاوره</p>
          <p className="text-sm font-thin">هر جلسه n تایم</p>

          <ul
            className="list-disc text-start gap-3 flex flex-col relative right-7 mt-12"
            dir="rtl"
          >
            <li className="text-base font-thin">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            </li>
            <hr className="w-[366px] relative left-7 h-[2px] bg-white text-white" />
            <li className="text-base font-thin">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            </li>
            <hr className="w-[366px] relative left-7 h-[2px] bg-white text-white" />
            <li className="text-base font-thin">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            </li>
          </ul>
          <div className="w-[382px] h-auto flex flex-col gap-5 mt-35">
            <div className="bg-white rounded-lg w-full h-[71px] flex justify-end items-center">
              <div className="flex flex-row gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-thin"> : شماره تماس ما</p>
                  <p className="text-base">0912 122 1212</p>
                </div>
                <PhoneIcon className="w-10 h-10 mr-6.5" />
              </div>
            </div>
            <div className="bg-white rounded-lg w-full h-[71px] flex justify-end items-center">
              <div className="flex flex-row gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-thin"> : شماره تماس ما</p>
                  <p className="text-base">0912 122 1212</p>
                </div>
                <Letter className="w-10 h-10 mr-6.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
