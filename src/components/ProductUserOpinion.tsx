import React from "react";
import { userComments } from "@/data/userComments";
import type { UserComments } from "@/data/userComments";
import { ClockIcon } from "@/index";

export default function ProductUserOpinion() {
  return (
    <div className=" flex flex-col items-center font-cursive text-[#030303] relative -top-60 sm:top-0 xl:top-40 ">
      <p className="font-bold text-2xl mb-9 w-[345px] sm:w-[85%] items-end xl:w-[85%] xl:max-w-[1300px]">
        نظرات کاربران درباره پست
      </p>
      <div className="flex flex-col item-center] gap-9 sm:gap-4">
        {userComments?.map((item: UserComments) => (
          <div
            key={item.id}
            className="w-[345px] flex flex-col h-auto gap-6 border-[1px] self-center border-[#DCDCDC] rounded-[16px] items-center sm:w-[85%] text-[#8D8D8D] xl:w-[85%] xl:max-w-[1540px]"
          >
            <div className="flex flex-row-reverse justify-between  w-[281px] mt-10 sm:w-[85%] xl:w-[85%]">
              <p className="text-sm text-[#030303]">{item.name}</p>
              <div className="flex flex-row gap-2">
                <p className="text-sm">{item.dateOfComment}</p>
                <ClockIcon className="w-4 h-4" />
              </div>
            </div>
            <p className="text-sm w-[281px] mb-8 sm:w-[85%] xl:w-[85%]">
              {item.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
