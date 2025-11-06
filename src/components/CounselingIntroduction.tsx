import Image from "next/image";
export default function CounselingIntroduction() {
  return (
    <div className="flex flex-col items-center sm:flex-col  xl:justify-around font-cursive xl:flex-col mb-40 sm:mb-20 xl:mb-0 ">
      <div className="flex flex-col  items-center sm:flex-col gap-y-6 xl:flex-row xl:justify-around font-cursive ">
        <div className="flex flex-col items-center text-center mx-3 sm:w-[70%] xl:w-[30%]">
          <p className="text-[28px] font-bold mb-3 sm:text-[48px]">
            <span className="">مهزیار شهبازی نژاد</span> مدرس و مشاور سیستم های
            امنیتی
          </p>
          <p className="text-xs/6 text-[#262626] font-thin mx-2 sm:text-lg/9 ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها
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
      <div className="xl:mt-20">
        <Image
          src="/images/counseling.svg"
          alt="null"
          width={300}
          height={100}
          className="w-full xl:w-[200rem] "
        />
      </div>
    </div>
  );
}
