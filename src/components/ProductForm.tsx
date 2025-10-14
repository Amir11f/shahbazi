import React from "react";

export default function ProductForm() {
  return (
    <div className="flex flex-col items-center w-full font-cursive">
      <p className="font-bold text-[22px] mb-9 w-full items-end">
        نظر خود را درباره محصول ثبت کنید
      </p>
      <form
        action=""
        className=" flex flex-col w-full items-center justify-center gap-2"
      >
        <div className="flex flex-row w-full gap-6 items-center justify-center ">
          <input
            type="text"
            className=" h-12 bg-[#EFEFEF] rounded-lg w-full focus:outline-none focus:border-1 focus:border-golden  "
          />
          <input
            type="text"
            className=" h-12 bg-[#EFEFEF] rounded-lg w-full focus:outline-none focus:border-1 focus:border-golden  "
          />
        </div>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="h-[228px] bg-[#EFEFEF] rounded-lg w-full sm:mt-4 focus:outline-none focus:border-1 focus:border-golden  "
        ></textarea>
        <button className="w-full h-11 bg-golden flex items-center justify-center text-lg text-white rounded-lg mt-5 sm:text-xl sm:w-[381px] self-start sm:h-[57px] sm:mt-10 hover:bg-hover transition duration-100">
          ارسال نظر
        </button>
      </form>
    </div>
  );
}
