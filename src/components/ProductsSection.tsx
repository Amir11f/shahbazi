"use client";
import { fullProductItems } from "@/data/fullInfoProductsItem";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductsSection() {
  const router = useRouter();
  return (
    <div className="flex justify-center font-cursive">
      <div className="grid grid-cols-2 justify-items-center place-items-center gap-3.5 xl:grid xl:grid-cols-4 xl:gap-y-20 ">
        {fullProductItems.map((item) => (
          <div
            key={item.id}
            className="w-[169px] h-[147px] bg-[#F5F5F5] flex flex-col-reverse rounded-lg items-center justify-center gap-4 sm:w-[269px] sm:h-[234px] hover:bg-golden transition duration-150 cursor-pointer"
          >
            <p className=" text-xs sm:text-xl">{item.name}</p>
            <Image
              src={item.image[0]}
              alt="null"
              width={92}
              height={92}
              className="sm:w-[146px] sm:h-[146px]"
              onClick={() => router.push(`/products/${item.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
