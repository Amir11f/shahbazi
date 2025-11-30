"use client";
import navbarItems from "@/data/navbarItems";
import Image from "next/image";
import {
  MenuIcon,
  NavbarMahziarLogo,
  SearchIcon,
  UserCircleIcon,
} from "@/index";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="w-full h-[74px] flex items-center justify-center  sm:h-25 font-cursive ">
        <div className="w-[88%] h-12  flex flex-row justify-between sm:h-[70px] xl:max-gap-[141px] ">
          <button
            className="w-8 h-8 bg-golden self-center rounded-lg sm:w-12 sm:h-12 sm:rounded-xl xl:hidden hover:bg-hover  flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="w-4.5 h-4.5 sm:h-6 sm:w-6 xl:hidden" />
          </button>
          <div
            className={`${
              isMenuOpen
                ? "sm:w-[100%] sm:h-full z-1000  bg-black/50 fixed sm:flex items-center justify-center top-0 right-0"
                : "hidden"
            } `}
          >
            <div
              className={`${
                isMenuOpen
                  ? "w-[100%] h-full z-1000  bg-white top-0 right-0 sm:top-auto sm:right-auto fixed"
                  : "hidden"
              } sm:bg-white sm:w-[626px] sm:h-[788] flex flex-col items-center overflow-hidden sm:rounded-xl `}
            >
              <div className="flex flex-row-reverse w-full justify-start pr-4 pt-5 gap-2 ">
                <p onClick={() => setIsMenuOpen(false)}>x</p>
                <p onClick={() => setIsMenuOpen(false)}>بستن</p>
              </div>
              <hr className="w-[90%] flex self-center text-right mt-7 text-[#d7d7d7]" />
              <div className="flex flex-col items-end w-full pr-5 mt-6">
                {navbarItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-full flex flex-col items-end justify-end mt-2"
                  >
                    <a
                      href={item.link}
                      className="text-black text-base font-thin mx-0 px-0 hover:text-hover"
                    >
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
              <div className="flex flex-row items-end justify-center  h-full mb-9 w-full ">
                <input
                  type="text"
                  className="w-[320px] h-12 bg-[#ececec] text-end self-end flex-row rounded-lg  relative placeholder:relative placeholder:left-3 pr-9"
                  placeholder=" از مهزیار بپرس  "
                />
                <SearchIcon className="w-5 h-5 text-black relative right-7 bottom-3.5" />
              </div>
            </div>
          </div>
          <div className="hidden xl:flex xl:flex-row ">
            <div className=" hidden xl:flex xl:flex-row xl:gap-1.5 xl:items-center ">
              <button className=" hidden xl:bg-golden hover:bg-hover transition duration-100 xl:w-[141px] xl:h-12 xl:flex xl:flex-row-reverse xl:gap-3 xl:justify-center xl:items-center xl:rounded-xl ">
                <p className=" hidden xl:flex xl:text-lg xl:text-white">
                  عضویت
                </p>
                <UserCircleIcon />
              </button>
              <button className=" hidden xl:flex xl:w-12 xl:h-12 transition duration-100 xl:bg-golden hover:bg-hover xl:rounded-xl justify-center items-center">
                <SearchIcon />
              </button>
            </div>
          </div>
          <div className="hidden xl:flex xl:flex-row text-black xl:gap-5">
            {navbarItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="hidden xl:text-black font-thin xl:text-base xl:mx-0 xl:px-0 xl:flex xl:items-center xl:justify-center transition-transform duration-200 ease-in-out hover:-translate-y-1"
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col mr-2.5 justify-around">
              <p className="text-xs font-bold sm:text-base">
                مهزیار شهبازی نژاد
              </p>
              <p className="text-[7px] sm:text-xs font-thin">
                مشاوره و راه اندازی سیستم های امنیتی
              </p>
            </div>
            <a href="/">
              <NavbarMahziarLogo className="w-12 h-12  sm:w-[70px] sm:h-[70px] cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
