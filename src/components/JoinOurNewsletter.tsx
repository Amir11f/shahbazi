import Image from "next/image";

export default function JoinOurNewsletter() {
  return (
    <div className="flex flex-col items-center xl:flex-row-reverse xl:gap-15 xl:justify-center font-cursive">
      <div className="flex flex-col items-center xl:flex-col-reverse ">
        <div className="flex flex-row-reverse ">
          <input
            type="text"
            className="w-[190px] h-8.5 bg-[#F0EFEB] rounded-md placeholder:text-[#C9A35B] placeholder:text-right placeholder:text-xs placeholder:mr-4 sm:w-[250px] sm:h-12.5 sm:placeholder:text-base sm:placeholder:mr-6"
            placeholder="... ایمیل شما"
          />
          <button className="w-[63px] h-8.5 bg-[#151517] rounded-md relative left-2 text-xs text-[#F0EFEB] sm:w-22.5 sm:h-12.5 sm:text-base ">
            ارسال
          </button>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl mb-3 mt-3 sm:text-4xl sm:mt-5 sm:mb-5 font-bold">
            . در خبرنامه ما عضو شوید
          </p>
          <p className="text-center text-xs text-[#030303] mb-10 w-65 sm:w-88 sm:text-lg sm:mb-14 xl:mb-6 font-thin">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از
          </p>
        </div>
      </div>
      <Image
        src="/images/SecurityCameraHigh.jpg"
        width={228}
        height={170}
        className="w-[228px] h-[170px] sm:w-[328px] sm:h-[244px] xl:w-[700px] xl:h-[372px] "
      ></Image>
    </div>
  );
}
