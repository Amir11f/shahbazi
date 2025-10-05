export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center justify-center w-[85%] sm:w-full sm:gap-4 sm:flex-row-reverse xl:gap-25 ">
        <div className="flex flex-col items-center xl:flex-row-reverse xl:gap-25">
          <div className="flex flex-col ">
            <div className="flex flex-row gap-6 sm:gap-4  ">
              <div className="flex flex-col mr-2.5 justify-around sm:mr-0 ">
                <p className="font-bold text-base ">مهزیار شهبازی نژاد</p>
                <p className="text-[7px] text-xs">
                  مشاوره و راه اندازی سیستم های امنیتی
                </p>
              </div>
              <div className=" bg-red-700 w-[70px] h-[70px]"></div>
            </div>
            <p className="font-light text-sm mt-3 text-center mb-10 w-[200px] sm:text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ استفاده
              از طراحان گرافیک
            </p>
          </div>
          <div className="flex flex-col text-center sm:mt-0 xl:relative xl:bottom-10">
            <p className="self-center mb-1.5 text-base font-bold sm:text-2xl xl">
              صفحات اصلی
            </p>
            <div className="flex flex-row mt-2 gap-6 text-right ">
              <div className="flex flex-col gap-1 text-sm">
                <p>صفحه خانه</p>
                <p>فروشگاه</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>ارتباط با ما</p>
                <p>درباره ی ما</p>
              </div>
              <div className="flex flex-col"></div>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:flex-col xl:flex-row xl:gap-25 xl:self-start  xl:relative xl:bottom-3">
          <div className="flex flex-col text-center mt-10 sm:relative sm:bottom-6">
            <p className="self-center mb-1.5 text-base font-bold sm:text-2xl">
              صفحات اصلی
            </p>
            <div className="flex flex-col gap-2 text-sm ">
              <p>ساعت پاسخ دهی: 10 صبح تا 10 شب</p>
              <p>شماره تماس ما: 0444 4244 4444</p>
              <p>آدرس: زعفرانیه، خیابان n دفتر مرکزی</p>
            </div>
          </div>
          <div className="flex flex-col text-center mt-10  xl:relative xl:bottom-6">
            <p className="self-center mb-1.5 text-base font-bold sm:text-2xl">
              دسته بندی ها
            </p>
            <div className="flex flex-col gap-2 text-sm ">
              <p>ساعت پاسخ دهی: 10 صبح تا 10 شب</p>
              <p>شماره تماس ما: 0444 4244 4444</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
