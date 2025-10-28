import { HeadphonesIcon } from "@/index";

export default function ProductsIntroduction() {
  return (
    <div className="flex flex-col items-center font-cursive gap-4 sm:gap-6 xl:gap-7 mt-60 xl:mt-70">
      <p className="text-3xl font-bold sm:text-[51px] xl:text-[64px]">
        هایپر اینترنتی مهزیار شهبازی
      </p>
      <p className="text-xs font-thin sm:text-base xl:text-xl">
        هایپر اینترنتی مهزیار شهبازی = کالاهای لوکس، کیفیت، اورجینال
      </p>
      <button className="w-[135px] h-[43px] border-[#DFDFDF] border-[1px] mt-[154px] rounded-lg sm:rounded-xl sm:w-[246px] sm:h-[81px] sm:mt-[180px] flex flex-row gap-5 items-center justify-center sm:gap-11 top-0  hover:bg-golden transition duration-100 mb-25 xl:mb-35">
        <p className="text-base font-thin relative top-1 sm:text-2xl">مشاوره</p>
        <HeadphonesIcon className="w-5.5 h-5.5 sm:w-8 sm:h-8" />
      </button>
    </div>
  );
}
