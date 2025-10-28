import Image from "next/image";
import { items } from "../data/mostSellingItems";

export default function MostSellingItems() {
  return (
    <div className="flex flex-col items-center sm:w-full self-center font-cursive relative -top-60 sm:-top-100 xl:-top-70  ">
      <div className="sm:flex sm:flex-row-reverse sm:justify-between sm:w-auto sm:gap-70 xl:gap-[760px] xl:mb-18 sm:mb-17 xl:w-auto  ">
        <p className="text-2xl mb-12 sm:mb-0 sm:text-3xl text-[#000000] xl:text-4xl font-thin flex self-center ">
          پرفروشترین ها
        </p>
        <button className=" hidden sm:block w-[187px] h-12 bg-[#133B3224] transition duration-100 hover:bg-[#a7a7a7] sm:text-xl text-[#151517] rounded-lg xl:w-[256px] xl:h-14 font-normal">
          ورود به فروشگاه
        </button>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 xl-gap-7 ">
        {items.map((item) => (
          <div
            className="flex flex-col transition duration-100 hover:scale-105 ease-in-out"
            key={item.id}
          >
            <Image
              src="/images/securityCamera.jpg"
              alt="null"
              width={333}
              height={250}
              className="w-[333px] h-[250px] sm:w-[299px] sm:h-[313px] border-[#DFDFDF] border-1 rounded-lg xl:mb-3 cursor-pointer hover:border-golden transition duration-100 xl:w-[267px] xl:h-[313px]"
            />
            <div className="flex flex-row-reverse font-thin justify-between mt-2">
              <p className="text-sm text-[#030303] font-thin">{item.name}</p>
              <div>
                <hr className="text-[#dddddd] h-[1px] w-full -rotate-12 relative top-2 " />
                <p className="text-sm text-[#e5e5e5] font-thin">
                  {item.priceWithDiscount}
                </p>
              </div>
            </div>
            <p className="text-sm text-golden mt-1.5 mb-6 font-thin">
              {item.price}
            </p>
          </div>
        ))}
      </div>
      <button className="w-[333px] h-12 bg-[#133B3224] text-lg text-[#151517] rounded-lg mt-6 sm:hidden transition duration-100 hover:bg-[#a7a7a7] ">
        ورود به فروشگاه
      </button>
    </div>
  );
}
