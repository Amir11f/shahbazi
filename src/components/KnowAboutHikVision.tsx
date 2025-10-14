import Image from "next/image";
import { Vector } from "@/index";

export default function KnowAboutHikVision() {
  return (
    <div className="flex flex-col font-cursive items-center">
      <div className="w-[325px]  flex flex-col items-center text-center sm:w-[432px] xl:w-full xl:flex-row-reverse xl:justify-center">
        <div className="flex flex-col items-start xl:w-[432px]">
          <p className="text-2xl/11 font-bold sm:text-end sm:text-[32px] xl:text-4xl xl:w-[432px]">
            نکات دانستی در مورد دوربین های هایک ویژن
          </p>
          <p className="text-xs/6 mt-8 sm:text-[14px] sm:text-end xl:w-[432px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
          </p>
          <div className="w-[325px] h-10 rounded-lg bg-golden mt-8 mb-11 sm:w-[432px] sm:h-[40px] xl:w-[148px] xl:self-end flex flex-row-reverse items-center justify-center gap-2">
            <p className="text-sm text-white block">بیشتر</p>
            <Vector
              className="w-3.5 h-3.5 rotate-90  font-bold
              "
              stroke="white"
              fill="red"
            />
          </div>
        </div>
        <Image
          src="/images/SecurityCameraHigh.jpg"
          alt="null"
          width={274}
          height={274}
          className="sm:w-[391px] sm:h-[362px] xl:w-[660px] xl:h-[500px]"
        />
      </div>
    </div>
  );
}
