import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full font-cursive bg-[url('/images/FooterBackground.svg')] text-white h-[869px]">
      <div className="flex flex-col items-center gap-3 justify-center w-[85%] sm:w-full sm:gap-8 sm:flex-row-reverse xl:gap-25 xl:mt-20  sm:text-right ">
        <div className="flex flex-col items-center sm:relative sm:-top-4 xl:flex-row-reverse xl:gap-25">
          <div className="flex flex-col mt-13 sm:mt-22 xl:mt-4 ">
            <div className="flex flex-row gap-4 sm:gap-4  ">
              <div className="flex flex-col justify-around sm:mr-0 ">
                <p className="font-bold text-base ">مهزیار شهبازی نژاد</p>
                <hr className="bg-[#DFDFDF]" />
                <p className="text-[7px] text-xs">
                  مشاوره و راه اندازی سیستم های امنیتی
                </p>
              </div>
              <Image
                src="/images/BusnessLogo.png"
                width={70}
                height={70}
                className=" w-[70px] h-[70px]"
              ></Image>
            </div>
            <p className="font-light text-sm mt-3 text-center  sm:text-end mb-10 w-[200px] ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ استفاده
              از طراحان گرافیک
            </p>
          </div>
          <div className="flex flex-col text-center  sm:text-end w-full sm:mt-0 xl:relative xl:-bottom-2 sm:relative sm:-bottom-1 xl:-top-3 ">
            <p className="self-center mb-3 sm:mb-2 w-full text-base font-bold sm:text-2xl sm:text-end ">
              صفحات اصلی
            </p>
            <div className="flex flex-row w-full mt-2 sm:mt-0 gap-6 sm:gap-0 text-right font-light sm:flex-col ">
              <div className="flex flex-col gap-1 w-full text-end text-sm">
                <p className="">صفحه خانه</p>
                <p>فروشگاه</p>
              </div>
              <div className="flex flex-col gap-1 sm:mt-2 w-full text-sm sm:text-right">
                <p>ارتباط با ما</p>
                <p>درباره ی ما</p>
              </div>
              <div className="flex flex-col"></div>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:flex-col xl:flex-row xl:gap-25 xl:self-start  xl:relative xl:bottom-3">
          <div className="flex flex-col text-center  sm:text-end mt-10 sm:relative sm:bottom-6">
            <p className="self-center mb-3.5 text-base sm:w-full font-bold sm:text-2xl">
              صفحات اصلی
            </p>
            <div className="flex flex-col gap-2 text-sm font-light ">
              <p className="sm:text-right">ساعت پاسخ دهی: 10 صبح تا 10 شب</p>
              <p>شماره تماس ما: 0444 4244 4444</p>
              <p>آدرس: زعفرانیه، خیابان n دفتر مرکزی</p>
            </div>
          </div>
          <div className="flex flex-col text-center  sm:text-end mt-12  xl:relative xl:bottom-7">
            <p className="self-center sm:w-full mb-3.5 text-base font-bold sm:text-2xl">
              دسته بندی ها
            </p>
            <div className="flex flex-col gap-2 text-sm font-light sm:justify-start ">
              <p>ساعت پاسخ دهی: 10 صبح تا 10 شب</p>
              <p>شماره تماس ما: 0444 4244 4444</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2.5 mt-26 sm:hidden">
        <Image src="/images/IranFlag.jpg" width={45} height={31} />
        <Image src="/images/IranFlag.jpg" width={45} height={31} />
        <Image src="/images/IranFlag.jpg" width={45} height={31} />
      </div>
    </div>
  );
}
