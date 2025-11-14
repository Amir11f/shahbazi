"use client";
import React, { useState } from "react";
import { questions } from "@/data/questions";
import ArrowRightIcon from "../../public/icons/AltArrowRight";
import PlusCircleIcon from "../../public/icons/AddCircle";

export default function MostAskingQuestions() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center font-cursive">
      <p className="text-[22px] font-thin mb-4 sm:text-[40px] xl:mb-12">
        سوالات پر تکرار
      </p>
      <div>
        {questions.map((item) => {
          const isActive = active === item.id;

          return (
            <div className="group mb-3" key={item.id}>
              <div
                className={`w-[350px] h-[54px] rounded-lg border border-black flex flex-row-reverse items-center justify-between cursor-pointer relative sm:w-[692px] xl:w-[1260px] sm:h-[106px] ${
                  isActive && "border-golden z-10"
                }`}
                onClick={() =>
                  setActive((prev) => (prev === item.id ? null : item.id))
                }
              >
                <p className="text-sm mr-4 sm:text-[28px] sm:mr-10">
                  {item.question}
                </p>
                <ArrowRightIcon
                  className={`w-6 h-6 ml-5 transition-transform duration-200 ${
                    isActive ? "-rotate-90" : "rotate-90"
                  }`}
                />
              </div>
              <div
                className={`transition-all duration-200 ease-in-out overflow-hidden relative -top-2 z-0  ${
                  isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="w-[350px] border border-t-transparent border-golden rounded-b-lg py-9 bg-white text-right px-4 sm:w-[692px] xl:w-[1260px] sm:text-2xl/10 font-thin ">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="w-25 h-8.5 text-xl flex items-center text-center justify-center gap-3 border-1 rounded-lg sm:w-[148px] sm:h-12.5 text-[#33383C] mt-5 sm:mt-10">
        <div className="sm:text-3xl relative top-1 sm:top-1.5 font-thin">+</div>
        <p className="sm:text-[28px] font-thin text-center relative top-0.5">
          بیشتر
        </p>
      </button>
    </div>
  );
}
