import { instagremLike } from "@/data/instagramLikeVideos";
import type { InstagramLike } from "@/data/instagramLikeVideos";

export default function DoneProjectsGrid() {
  return (
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
  );
}

function ProjectCard({ item }: { item: InstagramLike }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#F6F6F6] bg-blue-300">
      <video
        src={item.videoUrl}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* <div className="absolute bottom-2 right-2 text-white drop-shadow-md">
        <p className="text-sm font-semibold">{item.numberOfDone}</p>
        <p className="text-[10px]">{item.projectName}</p>
      </div> */}
    </div>
  );
}
