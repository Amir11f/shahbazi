import React from "react";
import { userComments } from "@/data/userComments";
import type { UserComments } from "@/data/userComments";
export default function ProductUserOpinion() {
  return (
    <div className=" flex flex-col items-center font-cursive text-[#030303]">
      <p className="font-bold text-2xl mb-9 w-[345px] sm:sm:w-[630px] items-end xl:w-[1116px]">
        نظرات کاربران درباره پست
      </p>
      <div className="flex flex-col item-center] gap-9 sm:gap-4">
        {userComments?.map((item: UserComments) => (
          <div
            key={item.id}
            className="w-[345px] flex flex-col h-auto gap-6 border-[1px] border-[#DCDCDC] rounded-[16px] items-center sm:w-[630px] sm:text-[#8D8D8D] xl:w-[1116px]"
          >
            <div className="flex flex-row-reverse justify-between  w-[281px] mt-10 sm:w-[566px] xl:w-[1052px]">
              <p className="text-sm text-[#030303]">{item.name}</p>
              <div className="flex flex-row gap-2">
                <p className="text-sm">{item.dateOfComment}</p>
                <div className="w-4 h-4 bg-red-500"></div>
              </div>
            </div>
            <p className="text-sm w-[281px] mb-8 sm:w-[566px] xl:w-[1052px]">
              {item.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
