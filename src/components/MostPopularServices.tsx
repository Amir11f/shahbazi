import Image from "next/image.js";
import { popularServices } from "../data/mostPopularServices";

export default function MostPopularServices() {
  return (
    <div className="flex flex-col items-center font-cursive">
      <p className="text-2xl mb-9 sm:text-3xl xl:text-4xl sm:mb-12 font-thin">
        پرطرفدارترین خدمات
      </p>
      <div className="grid grid-cols-2 gap-5 xl:flex xl:flex-row">
        {popularServices.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-[176px] h-[171px] border-1 border-[#C9A35B24] gap-4 justify-center sm:gap-8 sm:w-[251px] sm:h-[244px] rounded-lg "
          >
            <Image
              src={item.image}
              alt="null"
              width={84}
              height={64}
              className="sm:w-[121px] sm:h-[91px]"
            />
            <div className="text-base sm:text-xl">{item.service}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
