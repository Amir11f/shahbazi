import Image from "next/image";
export default function CounselingIntroduction() {
  return (
    <div className="flex flex-col items-center sm:flex-col  xl:justify-around font-cursive xl:flex-col mb-40 sm:mb-20 xl:mb-0 ">
      <div className="flex flex-col  items-center sm:flex-col gap-y-6 xl:flex-row xl:justify-around font-cursive ">
        <div className="flex flex-col items-center text-center mx-3 sm:w-[70%] xl:w-[30%]">
          <p className="text-[28px] font-bold mb-3 sm:text-[48px]">
            <span className="text-golden"> مهزیار شهبازی نژاد</span>, طراح مشاور
            و مجری سیستم‌های نظارتی و شبکه
          </p>
          <p className="text-xs/6 text-[#262626] font-thin mx-2 sm:text-lg/9 ">
            تیم تخصصی اجرا و راه‌اندازی تجهیزات برند هایک ویژن سبد محصولاتی از
            برترین برندهای جهانی ارائه سرویس و خدمات امنیتی،نظارتی و شبکه 7روز
            هفته مشاوره و طراحی تخصصی در حیطه شبکه و سرور
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex flex-col z-20">
            <Image
              src="/images/Model.jpg"
              alt="null"
              width={236}
              height={289}
              className="z-10 sm:w-[500px] sm:h-[611px]"
            />
            <Image
              src="/images/HikVision.jpg"
              alt="null"
              width={295}
              height={70}
              className="relative -top-46 z-1 sm:w-[645px] sm:h-[148px] sm:-top-100"
            />
          </div>
        </div>
      </div>
      <div className="xl:mt-20 flex flex-col items-center">
        <Image
          src="/images/CounselingPng.png"
          alt="null"
          width={900}
          height={330}
          className="w-auto h-[166px] object-cover sm:h-[329px] xl:w-800"
        />
        <p className="relative bottom-19 text-white font-bold text-[7px] sm:bottom-40 sm:text-[15px] xl:text-2xl">
          اگر استراتژی فعلی شما تنها بر بقای روزمره تمرکز دارد. شما در حال ساختن
          آینده نیستید، تنها در حال ترمیم گذشته‌اید
        </p>
      </div>
    </div>
  );
}
