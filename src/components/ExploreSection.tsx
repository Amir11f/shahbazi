import Image from "next/image";

export default function ExploreSection() {
  return (
    <div className="flex flex-row-reverse justify-center xl:justify-around mt-30 xl:mt-50 ">
      <div className="flex flex-col items-center font-cursive self-center">
        <Image
          src="images/explore.svg"
          alt="null"
          width={175}
          height={84}
          className="sm:w-[204px] h-[98px] xl:w-[290px] xl:h-[139px]"
        />
        <div className="flex flex-col items-center gap-3 relative -top-15.5 xl:items-end">
          <p className="font-bold text-3xl sm:text-4xl xl:text-[53px]">
            اکسپلور
          </p>
          <p className="text-[10px] font-thin text-[#030303] w-70 text-center sm:text-xs xl:text-base xl:text-end">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>
      <Image
        src="/images/ExploreCamera.png"
        alt="null"
        width={333}
        height={275}
        className="hidden xl:block"
      />
    </div>
  );
}
