import { instagremLike } from "@/data/instagramLikeVideos";
import type { InstagramLike } from "@/data/instagramLikeVideos";

export default function DoneProjectsGrid() {
  return (
    <div className="flex flex-col items-center font-cursive">
      <div className="grid grid-cols-3 gap-1 sm:gap-2 xl:gap-3 w-full ">
        {/* Column 1 */}
        <div className="grid grid-rows-[3fr_6fr_2fr_2fr] gap-1 sm:gap-2 xl:gap-3 h-[416px] sm:h-[731px] xl:h-[1257px]">
          {instagremLike.slice(0, 4).map((item) => (
            <ProjectCard key={item.projectId} item={item} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="grid sm:grid-rows-[5fr_2fr_3fr_3fr]  gap-1 sm:gap-2 xl:gap-3 h-[416px] sm:h-[731px] xl:h-[1257px]">
          {instagremLike.slice(4, 8).map((item) => (
            <ProjectCard key={item.projectId} item={item} />
          ))}
        </div>

        {/* Column 3 */}
        <div className="grid grid-rows-[7fr_2fr_4fr] gap-1 sm:gap-2 xl:gap-3 h-[416px] sm:h-[731px] xl:h-[1257px]">
          {instagremLike.slice(8, 11).map((item) => (
            <ProjectCard key={item.projectId} item={item} />
          ))}
        </div>
      </div>
      <div className="w-[110px] h-9 border-[1px] border-[#33383C] rounded-lg  mt-7.5 flex flex-row-reverse items-center justify-center gap-2 sm:w-[130px] sm:h-11 sm:gap-3 sm:mt-12 xl:w-[148px] xl:h-[50px] xl:relative xl:-top-40">
        <p className="text-[22px] font-thin relative top-1 sm:text-2xl xl:text-[28px] ">
          بیشتر
        </p>
        <p className="text-xl font-thin relative top-1.5 sm:text-2xl xl:text-3xl">
          +
        </p>
      </div>
    </div>
  );
}

function ProjectCard({ item }: { item: InstagramLike }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#F6F6F6] bg-blue-300 transition duration-100 hover:scale-102  ease-in-out">
      <video
        src={item.videoUrl}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </div>
  );
}
