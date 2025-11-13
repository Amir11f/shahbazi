import Image from "next/image";

export default function BlackResumeBox() {
  return (
    <div className="flex justify-center w-full items-center flex-col font-cursive">
      <Image
        src="/images/MobileBlackBox.svg"
        alt="Resume Box"
        width={373}
        height={394}
        className="flex sm:hidden"
      />
      <Image
        src="images/TabletBlackBox.svg"
        alt="Resume Box"
        width={742}
        height={446}
        className=" hidden sm:flex xl:hidden"
      />
      <Image
        src="images/DesktopBlackBox.svg"
        alt="Resume Box"
        width={1031}
        height={237}
        className=" hidden xl:flex "
      />
      <div className=" text-[#efefef] rounded-[40px] p-10 w-[373px] mx-auto relative -top-85 sm:-top-95 sm:-left-43 xl:-left-72 xl:-top-60">
        <div className="grid grid-cols-1 text-xs gap-7 sm:text-base sm:flex sm:flex-col sm:w-160 xl:w-220 xl:gap-0 ">
          {/* Item 1 */}
          <div className="flex items-center justify-end gap-4 w-full text-right relative xl:-bottom-1 ">
            <div className="text-right flex flex-col gap-1 sm:gap-3">
              <p className="font-bold text-base sm:text-xl ">+۳۰۰</p>
              <p className="">جلسه مشاوره و طراحی پروژه </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex items-center justify-start gap-4 sm:relative sm:-top-23 xl:-top-15">
            <div className="text-right flex flex-col gap-1 sm:gap-3">
              <p className="font-bold text-base sm:text-xl">+۳۰۰</p>
              <p className="">پروژه سرور و ویپ و شبکه</p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex items-center justify-end sm:col-span-2 gap-4 sm:relative sm:-bottom-12 xl:-top-9 relative bottom-3 ">
            <div className="text-right flex flex-col gap-1 sm:gap-3">
              <p className="font-bold text-base sm:text-xl">+۳۰۰</p>
              <p className="">دقیقه ارائه خدمات و پشتیبانی</p>
            </div>
          </div>
          {/* Item 4 */}
          <div className="flex items-center justify-start gap-4 sm:justify-center sm:relative sm:-top-38 sm:left-2 xl:-top-34">
            <div className="text-right flex flex-col gap-1 sm:gap-3">
              <p className="font-bold text-base sm:text-xl">+۳۰۰</p>
              <p className="">پروژه نظارت تصویری اداری و صنعتی و خانگی</p>
            </div>
          </div>
          {/* Item 5 */}
          <div className="hidden sm:flex gap-4 items-start sm:justify-center sm:relative sm:-top-33 xl:-top-40 sm:right-50 xl:right-80">
            <div className="text-right flex flex-col gap-1 sm:gap-3">
              <p className="font-bold text-base sm:text-xl">+۳۰۰</p>
              <p className="">کاربر سایت</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
