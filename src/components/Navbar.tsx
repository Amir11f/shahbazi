import navbarItems from "@/data/navbarItems";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className="w-full h-[74px] flex items-center justify-center  sm:h-25 font-cursive">
        <div className="w-[88%] h-12  flex flex-row justify-between sm:h-[70px] xl:gap-[141px] ">
          <button className="w-8 h-8 bg-golden self-center rounded-lg sm:w-12 sm:h-12 sm:rounded-xl xl:hidden"></button>
          <div className="hidden xl:flex xl:flex-row ">
            <div className=" hidden xl:flex xl:flex-row xl:gap-1.5 xl:items-center ">
              <button className=" hidden xl:bg-[#C9A35B] xl:w-[141px] xl:h-12 xl:flex xl:flex-row xl:justify-center xl:items-center xl:rounded-xl ">
                <p className=" hidden xl:text-lg xl:text-white">عضویت</p>
              </button>
              <button className=" hidden xl:flex xl:w-12 xl:h-12 xl:bg-[#C9A35B] xl:rounded-xl"></button>
            </div>
          </div>
          <div className="hidden xl:flex xl:flex-row text-black xl:gap-4">
            {navbarItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="hidden xl:text-black font-thin xl:text-base xl:mx-0 xl:px-0 xl:flex xl:items-center xl:justify-center "
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col mr-2.5 justify-around">
              <p className="text-xs font-bold sm:text-base">
                مهزیار شهبازی نژاد
              </p>
              <p className="text-[7px] sm:text-xs font-thin">
                مشاوره و راه اندازی سیستم های امنیتی
              </p>
            </div>
            <Image
              src="/images/BusnessLogo.png"
              width={48}
              height={48}
              className="w-12 h-12  sm:w-[70px] sm:h-[70px]"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
