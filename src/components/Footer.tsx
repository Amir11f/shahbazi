import Image from "next/image";
import {
  XIcon,
  GoogleIcon,
  YouTubeIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcons,
} from "@/index";

export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full font-cursive bg-[url('/images/FooterBackground.svg')] bg-cover bg-no-repeat text-white h-[1500px] sm:h-[950px] xl:h-[570px]">
      <div className="flex flex-col items-center gap-3 justify-center w-[85%] sm:w-full sm:gap-8 sm:flex-row-reverse xl:gap-25 xl:mt-20  sm:text-right ">
        <div className="flex flex-col items-center sm:relative sm:-top-4 xl:flex-row-reverse xl:gap-25">
          <div className="flex flex-col mt-13 sm:mt-22 xl:mt-4 ">
            <div className="flex flex-row gap-4 sm:gap-4 justify-end ">
              <div className="flex flex-col justify-around sm:mr-0 ">
                <p className="font-bold text-base ">مهزیار شهبازی نژاد</p>
                <hr className=" text-[#4f4f4f] relative top-[2px] xl:w-40 xl:self-end" />
                <p className="text-[7px]  sm:text-[10px] text-gray xl:w-50">
                  مشاوره و راه اندازی سیستم های امنیتی
                </p>
              </div>
              <Image
                src="/images/BusnessLogo.png"
                alt="null"
                width={70}
                height={70}
                className=" w-[70px] h-[70px]"
              ></Image>
            </div>
            <p className=" text-xs font-thin mt-3 text-center  sm:text-end mb-10  text-[#f0f0f0] whitespace-nowrap">
              مهزیار شهبازی نژاد ،که از او بعنوان پدیده نوظهور دنیا مشاوره و
              اجرایی
              <br /> طرح‌ها و پروژه‌های زیرسـاختی شبکه و سیستم‌های نظارتی یاد
              میشود
              <br /> و با زیستن نگرش‌های خاص خود که منجر به پیروی برخی از شرکت
              ها و<br /> مجموعه‌ها از این الگو ذهنی و نهایتـا به شکل گیری
              تجربیاتی درخشان
              <br /> در آن شرکت‌ها ختم شد،حالا با تکیه بر مهـارت و تجربیـات
              اجرایی تیم
              <br /> مجرب و تـوانمند خود بیش از پیش در تـلاش است که با
              چـشم‌انداز و<br /> بینشی متفاوت در اجرای استاندار فرایندهای
              ارتباطی در سطوح مختلف
              <br /> شبکـه ،سـرور، امنیت داده‌ها و نظارت‌های سیستمی و بصری اماکن
              و<br /> مجموعـه‌ها همواره راه‌گشـای پیشروی سازمان‌ها و شرکت‌های
              موفق
              <br />. ایرانی بوده است
            </p>
          </div>
          <div className="flex flex-col h-full  sm:text-end w-full sm:mt-0 xl:relative xl:-bottom-2 sm:relative sm:-bottom-8 xl:-top-0.5 text-right ">
            <p className="self-center mb-3 sm:mb-6 w-full text-base font-bold sm:text-2xl sm:text-end flex  justify-center sm:justify-end h-full ">
              با مهزیار
            </p>
            <div className="flex  w-full mt-2 sm:mt-0 gap-2 sm:gap-0 text-right font-light sm:flex-col flex-col items-center justify-center">
              <div className="flex flex-col gap-2 w-full text-end text-sm items-center sm:items-end ">
                <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                  پیگیری سفارش
                </p>
                <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                  ثبت شکایات
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:mt-2 w-full text-sm sm:text-right items-center sm:items-end">
                <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                  قوانین و مقررات
                </p>
                <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                  نحوه ثبت سفارش
                </p>
                <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                  شیوه پرداخت
                </p>
                <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                  حریم خصوصی
                </p>
                <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                  حساب کاربری
                </p>
                <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                  اخبار
                </p>
              </div>
              <div className="flex flex-col"></div>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:flex-col xl:flex-row-reverse xl:gap-25 xl:self-start  xl:relative xl:bottom-3 relative sm:bottom-9">
          <div className="flex flex-col text-center  sm:text-end mt-10 sm:relative xl:bottom-6 sm:bottom-4">
            <p className="self-center mb-5 text-base sm:w-full font-bold sm:text-2xl ">
              دسترسی سریع
            </p>
            <div className="flex flex-col gap-2 text-sm font-light ">
              <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                قوانین و مقررات
              </p>
              <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                شیوه پرداخت
              </p>
              <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                اخبار
              </p>
              <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                نحوه ثبت سفارش
              </p>
              <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                حریم خصوصی
              </p>
              <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                حساب کاربری
              </p>
              <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                ثبت شکایات
              </p>
              <p className="transition duration-100 hover:scale-115 ease-in-out cursor-pointer">
                پیگیری سفارش
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center  sm:text-end mt-12  xl:relative xl:bottom-7">
            <p className="self-center sm:w-full mb-5 text-base font-bold sm:text-2xl">
              ارتباط با ما
            </p>
            <div className="flex flex-col gap-2 text-sm font-light sm:justify-start ">
              <p>ساعت پاسخ دهی: 10 صبح تا 10 شب</p>
              <p>شماره تماس ما: 0444 4244 4444</p>
              <p>ایران،خوزستان،اهواز</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center xl:w-[1117px] xl:flex-row xl:justify-between sm:relative sm:left-8 xl:-left-9 ">
        <div className="flex flex-row gap-2.5 mt-20 xl:mt-26 sm:mt-17  sm:relative sm:left-40 xl:left-0  xl:bottom-3 ">
          <Image src="/images/IranFlag.jpg" alt="null" width={45} height={31} />
          <Image src="/images/IranFlag.jpg" alt="null" width={45} height={31} />
          <Image src="/images/IranFlag.jpg" alt="null" width={45} height={31} />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row mt-10 gap-6  sm:self-end">
            <WhatsAppIcons className="hover:text-golden  transition duration-100 hover:scale-115  ease-in-out cursor-pointer" />
            <TelegramIcon className="hover:text-golden  transition duration-100 hover:scale-115  ease-in-out cursor-pointer" />
            <XIcon className="hover:text-golden  transition duration-100 hover:scale-115 ease-in-out cursor-pointer" />
            <InstagramIcon className="hover:text-golden  transition duration-100 hover:scale-115  ease-in-out cursor-pointer" />
            <GoogleIcon className="hover:text-golden  transition duration-100 hover:scale-115  ease-in-out cursor-pointer" />
            <YouTubeIcon className="hover:text-golden  transition duration-100 hover:scale-115  ease-in-out cursor-pointer" />
          </div>
          <p
            dir="rtl"
            className="text-[10px]/6 xl:text-[14px]/6 w-full text-center px-9 sm:px-0 xl:w-220 mt-5 sm:text-end text-[#d0d0d0] sm:w-[620px] relative sm:left-3 xl:left-6"
          >
            2025 مهزیار شهبازی نژاد.تمامی حقوق محفوظ میباشد. با هدف توسعه و
            بهروری دانش کاربران و مخاطبان استفاده از محتوای سایت با ذکر منبع
            مجاز میباشد.
          </p>
        </div>
      </div>
    </div>
  );
}
