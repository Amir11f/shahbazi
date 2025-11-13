import Image from "next/image.js";
import { popularServices } from "../data/mostPopularServices";

export default function MostPopularServices() {
  return (
    <div className="flex flex-col items-center font-cursive mb-25 xl:mt-20">
      <p className="text-2xl mb-9 sm:text-3xl xl:text-4xl sm:mb-12 font-thin">
        پرطرفدارترین خدمات
      </p>
      <div className="grid grid-cols-2 gap-5 xl:flex xl:flex-row" dir="rtl">
        {popularServices.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-[176px] h-[171px] border-2 border-[#DFDFDF] gap-5 justify-center sm:gap-8 sm:w-[251px] sm:h-[244px] rounded-lg cursor-pointer hover:border-golden transition duration-100 hover:scale-105 ease-in-out"
          >
            <Image
              src={item.image}
              alt="null"
              width={70}
              height={55}
              className="sm:w-[121px] sm:h-[91px]"
            />
            <div className="text-base sm:text-xl">{item.service}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
