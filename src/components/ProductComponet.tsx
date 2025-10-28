import React from "react";
import { fullProductItems } from "@/data/fullInfoProductsItem";
import Image from "next/image";
import { Vector, shopBagIcon, MailBox, HeartIcon } from "@/index";
import ShopBagIcon from "../../public/icons/shopBagIcon";

export default function ProductComponet({ slug }: { slug: number }) {
  const id = slug;
  const findData = fullProductItems.find((item) => (item.id = id));
  console.log(findData);
  return (
    <div className="flex flex-col items-center w-full font-cursive xl:items-center ">
      <div className="flex flex-col items-center xl:flex-row-reverse xl:gap-14">
        <div className="flex w-full flex-col items-center self-center justify-center xl:w-[527px] xl:h-[663px]">
          {findData?.image && (
            <Image
              src={findData?.image[0]}
              alt="null"
              width={335}
              height={335}
              className="sm:h-[527px] sm:w-[527px]"
            />
          )}
          <div className="flex flex-row gap-2 w-full items-start justify-center mt-3 sm:gap-4 sm:mt-10">
            {findData?.color?.map((item: any) => (
              <div
                key={crypto.randomUUID()}
                className={`bg-golden w-[75px] h-[77px] rounded-[5px] sm:w-[120px] sm:h-[120px] sm:rounded-lg mt-20 sm:mt-25 xl:mt-50`}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end mt-14 sm:mt-29 self-center ">
          <p className="text-[7px] font-thin sm:text-[13px]">
            خانه/محصولات دوربین /محصول
          </p>
          <div className="flex flex-row gap-4 items-center justify-center">
            <p className="text-base font-bold mt-1.5 sm:text-[32px]">
              دوربین شماره 12
            </p>
          </div>
          <div className="flex flex-row gap-6 mt-5 sm:flex-col sm:gap-2 font-normal sm:mt-8 text-[#030303]">
            {findData?.material.map((item) => (
              <div className="text-[11px] sm:text-xl " key={item}>
                {" "}
                {item} : بدنه{" "}
              </div>
            ))}
          </div>
          <p className="text-[11px] mt-4 sm:text-xl sm:mb-3 sm:mt-10">رنگ</p>
          <div className="flex flex-row mt-2 gap-1.5">
            {findData?.color.map((item) => (
              <div
                className={`bg-golden w-[25px] h-[25px] rounded-[5px] sm:h-12 sm:w-12 xl:rounded-md`}
                key={crypto.randomUUID()}
              ></div>
            ))}
          </div>
          <div className="flex flex-row-reverse gap-1 mt-6 sm:mt-10">
            <p className="font-bold text-golden text-base sm:text-3xl">
              {findData?.curruntPrice}
            </p>
            <p className="text-xs text-golden font-bold relative top-1 sm:text-lg">
              تومان
            </p>
          </div>
          <div className="mt-2.5 text-[#151517] sm:mt-4 ">
            <p className="text-xs font-thin sm:text-xl ">
              {findData?.previousPrice}
            </p>
            <hr className="relative bottom-3 sm:bottom-5" />
          </div>
          <div className="flex flex-row-reverse w-full justify-between mt-6 gap-6 text-[10px] sm:text-xl sm:mb-4 mb-1">
            <div className="flex flex-row">
              <p>بهمراه نصب محصول</p>
              <input
                type="checkbox"
                className="
                w-3 h-3 sm:w-5 sm:h-5 ml-1 rounded-full border-1 border-black sm:ml-2
                appearance-none cursor-pointer relative sm:top-[4px] top-[1px]
                checked:bg-white checked:after:content-['']
                checked:after:absolute checked:after:left-[3px] sm:checked:after:left-[6px]  sm:checked:after:-top-[px]
                checked:after:w-[4px] checked:after:h-[8px] sm:checked:after:w-[6px] sm:checked:after:h-[12px] 

                checked:after:border-black checked:after:border-b-1 checked:after:border-r-1 sm:checked:after:border-b-2 sm:checked:after:border-r-2
                checked:after:rotate-45
                text-right pr-3 
              "
              />
            </div>
            <div className="flex flex-row-reverse gap-0.5 sm:gap-1.5">
              <p>10,000,000 </p>
              <div>تومان</div>
            </div>
          </div>
          <div className="flex flex-row-reverse w-full justify-between text-[10px] sm:text-xl">
            <div className="flex flex-row">
              <p className=""> بهمراه مشاوره و آموزش دهی</p>
              <input
                type="checkbox"
                className="
                w-3 h-3 sm:w-5 sm:h-5 ml-1 rounded-full border-1 border-black sm:ml-2
                appearance-none cursor-pointer relative sm:top-[4px] top-[1px]
                checked:bg-white checked:after:content-['']
                checked:after:absolute checked:after:left-[3px] sm:checked:after:left-[6px]  sm:checked:after:-top-[px]
                checked:after:w-[4px] checked:after:h-[8px] sm:checked:after:w-[6px] sm:checked:after:h-[12px] 

                checked:after:border-black checked:after:border-b-1 checked:after:border-r-1 sm:checked:after:border-b-2 sm:checked:after:border-r-2
                checked:after:rotate-45
                text-right pr-3 
              "
              />{" "}
            </div>
            <div className="flex flex-row-reverse gap-0.5 sm:gap-1.5">
              <p>10,000,000 </p>
              <div>تومان</div>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between w-full mt-8 gap-2 text-white rounded-lg sm:mt-13 sm:gap-4">
            <div className="flex flex-row bg-golden rounded-[5px]">
              <div className="w-[294px] h-[32px] flex flex-row-reverse justify-between sm:w-[560px] sm:h-[61px] ">
                <div className="gap-[10px] flex flex-row items-center justify-center mr-3 sm:gap-5 sm:mr-5 cursor-pointer">
                  <p className="text-[10px] sm:text-xl">افزودن به سبد</p>
                  <ShopBagIcon className="w-[11px] h-3 sm:w-5 sm:h-5.5" />
                </div>
                <hr className=" w-5 sm:w-10 rotate-90 h-1 relative top-3.5 sm:top-7" />
                <div className="flex flex-row gap-2.5 items-center justify-center ml-4 text-[13px] sm:text-2xl sm:gap-5 ">
                  <div className="cursor-pointer">+</div>
                  <p className="">22</p>
                  <div className="relative bottom-1 sm:bottom-2.5 sm:text-3xl cursor-pointer">
                    _
                  </div>
                </div>
              </div>
            </div>
            <div className="w-8 h-8 sm:min-w-[61px] sm:min-h-[61px] border-1 border-golden rounded-[5px] sm:rounded-lg flex items-center justify-center cursor-pointer">
              <HeartIcon className="w-5 h-5 sm:w-9 text-golden sm:h-9 hover:text-red-400 transition duration-150 " />
            </div>
          </div>
          <div className="flex flex-row-reverse mt-5 gap-2 sm:gap-3 sm:mt-8">
            <MailBox className="w-3 h-3 sm:w-6 sm:h-6" />
            <p className="text-[10px] font-bold sm:text-[18px]">
              ضمانت و گارانتی یک ساله
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
