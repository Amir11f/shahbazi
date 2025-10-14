import Image from "next/image";

export default function NewestVideos() {
  return (
    <div className="flex flex-col items-center sm:w-full self-center font-cursive">
      <div className="sm:flex sm:flex-row-reverse sm:justify-between sm:w-auto sm:gap-76 xl:w-auto xl:gap-[830px] xl:mb-8">
        <p className="text-2xl mb-8 sm:text-3xl xl:text-4xl font-thin">
          جدیدترین ویدیو ها
        </p>
        <button className="hidden sm:block bg-golden cursor-pointer hover:bg-hover transition duration-100 text-[#FFFFFF] sm:w-[144px] sm:h-12 sm:rounded-lg xl:text-xl font-normal">
          بیشتر
        </button>
      </div>
      <div className="flex flex-col-reverse items-center gap-2.5 sm:flex-col xl:flex-row-reverse">
        <Image
          src="/images/NewestVideosBig.jpg"
          alt="null"
          width={108}
          height={36}
          className="w-[360px] h-[160px] rounded-lg sm:w-[647px] sm:h-[286px] sm:rounded-2xl xl:w-[559px]"
        ></Image>
        <div className="flex flex-row gap-2.5 sm:gap-4.5">
          <Image
            src="/images/NewestVideo.jpg"
            alt="null"
            width={173}
            height={159}
            className="w-[173px] h-[159px]rounded-lg sm:w-[311px] sm:h-[286px] sm:rounded-2xl"
          ></Image>
          <Image
            src="/images/NewestVideo.png"
            alt="null"
            width={173}
            height={159}
            className="w-[173px] h-[159px]rounded-lg sm:w-[311px] sm:h-[286px] sm:rounded-2xl"
          ></Image>
        </div>
      </div>
      <button className="w-27 h-9 bg-golden text-[#FFFFFF] text-base rounded-md mt-6 sm:hidden">
        بیشتر
      </button>
    </div>
  );
}
