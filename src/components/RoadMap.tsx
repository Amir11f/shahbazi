import React from "react";

export default function RoadMap() {
  return (
    <div className="font-cursive flex flex-row-reverse items-center justify-center max-xl:hidden xl:gap-50 xl:relative xl:right-10">
      <div className="flex flex-col items-end">
        <p className="text-[54px] font-bold w-[400px]">
          چرا این مشاوره متفاوت است؟
        </p>
        <p className="w-103 text-lg font-thin">
          گاهی یک تصمیم درست، مسیر کسب و کار را برای همیشه تغییر میدهد.
        </p>
      </div>
      <div className="flex flex-col gap-[14px] ml-20">
        <div className="flex flex-row items-center">
          <div className="w-[513px] h-[142px] rounded-[18px] bg-black flex flex-row-reverse text-white justify-between">
            <p className="text-[16px]  flex items-center justify-center w-[196px] relative right-10">
              مبتنی برتجربه‌های عملیاتی
            </p>
            <hr className="w-[95px] h-[1px] rotate-90 relative top-18 right-3 bg-[#d5d5d5]" />
            <p className="text-xs font-thin flex items-center justify-center w-[233px] ml-4 text-[#d5d5d5]">
              تجـربه کار در محیط‌های با چـالش بالا به من این امکان را میدهد کـه
              راهکارهایی را پیشنهاد دهم که نه تنهـا در کاغذ زیبـا به نظر میرسند،
              بلکه در دنیای واقعی عملیاتی هستند. این شـامل آگاهی از محدودیت‌های
              بودجهای، چالش‌های لجستیکی و مقاومت‌های سازمانی در برابر تغییر است.
            </p>
          </div>
          <div className="w-13 h-13 bg-[#F1F1F1] rounded-full relative right-6.5 flex items-center justify-center text-2xl">
            01
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-[513px] h-[142px] rounded-[18px] bg-[#565656] flex flex-row-reverse text-white justify-between">
            <p className="text-[16px]  flex items-center justify-center w-[196px] relative right-10">
              تمرکز بر کیفیت و اعتبار مهندسی به‌ جای قیمت
            </p>
            <hr className="w-[95px] h-[1px] rotate-90 relative top-18 right-3 bg-[#d5d5d5]" />
            <p className="text-xs font-thin flex items-center justify-center w-[233px] ml-4 text-[#d5d5d5]">
              سرمـایه‌گذاری بر زیرساخت نبـاید صرفا بر اساس ارزانـترین قیمت انجام
              شود.یک طراحی ضعیف که منجر به خرابی‌های مکـرر میشود، در بلندمدت
              هزینـه‌های سربار بسیـار بـالاتری نسبت بـه ‌سرمایه‌گـذاری اولیه
              صحیح خواهد داشت. ما به دنبال بهینه‌سازی کل هزینه مالکیت هستیم.
            </p>
          </div>
          <div className="w-13 h-13 bg-[#F1F1F1] rounded-full relative right-6.5 flex items-center justify-center text-2xl">
            02
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-[513px] h-[142px] rounded-[18px] bg-[#BCBCBC] flex flex-row-reverse text-black justify-between">
            <p className="text-[16px]  flex items-center justify-center w-[196px] relative right-10">
              راهبرد اجرایی ایده‌ها، در هر شرایط محیطی یا سازمانی
            </p>
            <hr className="w-[95px] h-[1px] rotate-90 relative top-18 right-3 bg-[#d5d5d5]" />
            <p className="text-xs font-thin flex items-center justify-center w-[233px] ml-4 text-black">
              توصیه بدون برنامه اجرایی صرفـا یک ایده است. هر راهکار پیشنهـادی
              دارای یک نقشـه‌راه اجـرایی مرحلـه‌ای است که ریسک‌هـای انتقـال را
              به حداقـل میرسـاند. این امـر شامل برنامه‌ریزی دقیق برای مهاجرت و
              آزمون پذیرش کاربر است.
            </p>
          </div>
          <div className="w-13 h-13 bg-[#F1F1F1] rounded-full relative right-6.5 flex items-center justify-center text-2xl">
            03
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-[513px] h-[142px] rounded-[18px] bg-[#EEEEEE] flex flex-row-reverse text-black justify-between">
            <p className="text-[16px]  flex items-center justify-center w-[196px] relative right-10">
              طـراحی راهکارها بر اصل پایداری، انعطاف‌ و امنیت بلندمدت
            </p>
            <hr className="w-[95px] h-[1px] rotate-90 relative top-18 right-3 bg-[#d5d5d5]" />
            <p className="text-xs font-thin flex items-center justify-center w-[233px] ml-4 text-black">
              معماری‌ها به گونـه‌ای طـراحی میشوند که در برابر نوسانات تقاضـا و
              پیشـرفت‌های آتی فناوری مقـاوم باشند. انتخـاب سخت‌افزار و طراحی
              افزونگی در تمامی لایه‌ها.معماری‌هایی کـه قـابلیت افـزودن
              سـرویس‌های جـدید را بدون نیـاز به بازطراحی بنیادین شبکه یا سرور
              فراهم سازند.
            </p>
          </div>
          <div className="w-13 h-13 bg-[#F1F1F1] rounded-full relative right-6.5 flex items-center justify-center text-2xl">
            04
          </div>
        </div>
      </div>
    </div>
  );
}
