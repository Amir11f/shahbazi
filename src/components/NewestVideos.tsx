import Image from "next/image";

export default function NewestVideos() {
  return (
    <div className="flex flex-col items-center sm:w-full self-center font-cursive relative -top-5 mb-30 sm:mb-45">
      <div className="sm:flex sm:flex-row-reverse sm:justify-between sm:w-auto sm:gap-76 xl:w-auto xl:gap-[830px] xl:mb-8 sm:mb-10">
        <p className="text-2xl mb-8 sm:text-3xl xl:text-4xl font-thin">
          جدیدترین ویدیو ها
        </p>
        <button className="hidden sm:block bg-golden cursor-pointer hover:bg-hover transition duration-100 text-[#FFFFFF] sm:w-[144px] sm:h-12 sm:rounded-lg xl:text-xl font-normal">
          بیشتر
        </button>
      </div>
      <div className="flex flex-col-reverse items-center gap-2.5 sm:flex-col xl:flex-row-reverse">
        <Image
          src="/productImages/Frame 1890166893 (1).jpg"
          alt="null"
          width={108}
          height={36}
          className="w-[360px] h-[160px] rounded-lg sm:w-[647px] sm:h-[286px] sm:rounded-2xl xl:w-[559px] hover:scale-102"
        ></Image>
        <div className="flex flex-row gap-2.5 sm:gap-4.5">
          <Image
            src="/productImages/Group 40077.jpg"
            alt="null"
            width={173}
            height={159}
            className="w-[173px] h-[159px]rounded-lg sm:w-[311px] sm:h-[286px] sm:rounded-2xl hover:scale-102"
          ></Image>
          <Image
            src="/productImages/Group 40078.jpg"
            alt="null"
            width={173}
            height={159}
            className="w-[173px] h-[159px]rounded-lg sm:w-[311px] sm:h-[286px] sm:rounded-2xl hover:scale-102 transition duration-100"
          ></Image>
        </div>
      </div>
      <button className="w-27 h-9 bg-golden text-[#FFFFFF] text-base rounded-md mt-6 sm:hidden">
        بیشتر
      </button>
    </div>
  );
}
