import { doneProjects } from "@/data/doneProjects";
import { Telescope } from "@/index";

export default function DoneProjectsScroll() {
  return (
    <div className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap xl:gap-11">
      {doneProjects.map((item) => (
        <div
          key={item.projectId}
          className="min-w-[157px] h-[47px] rounded-[4px] border-[1px] border-[#F6F6F6] flex flex-row-reverse items-center gap-1.5 sm:w-[217px] sm:h-[65px] flex-shrink-0 xl:w-[358px] xl:h-[108px] xl:gap-2 "
        >
          <div className="w-[31px] h-[31px] bg-[#F6F6F6] mr-4 sm:h-[42px] sm:w-[42px] xl:w-[70px] xl:h-[70px] flex items-center justify-center">
            <Telescope className="w-5.5 h-5.5 sm:w-7.5 sm:h-7.5 xl:w-12 xl:h-12" />
          </div>
          <div className="flex flex-col items-end gap-1 mt-1 xl:gap-3">
            <p className="text-xs font-bold text-right sm:text-base xl:text-3xl">
              {item.numberOfDone}
            </p>
            <p className="text-[7px] font-thin sm:text-[10px] xl:text-base">
              {item.projectName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
