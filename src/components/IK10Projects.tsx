"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import WaveSurfer from "wavesurfer.js";
import { RunIcon } from "@/index";

export interface ScrollItem {
  title: string;
  subtitle?: string;
  audioUrl: string;
}

interface VerticalHighlightScrollProps {
  items?: ScrollItem[];
}

export default function VerticalHighlightScroll({
  items = [],
}: VerticalHighlightScrollProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wavesurferRefs = useRef<(WaveSurfer | null)[]>([]);

  /* ─────────── Scroll detection ─────────── */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      let closest = 0;
      let closestDist = Infinity;

      const children = Array.from(container.children).filter((el) =>
        el.classList.contains("vhs-item")
      ) as HTMLDivElement[];

      children.forEach((child, i) => {
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.top + childRect.height / 2;
        const dist = Math.abs(centerY - childCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });

      setCurrentIndex(closest);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  /* ─────────── Mouse drag scrolling ─────────── */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDown = false;
    let startY = 0;
    let scrollTop = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startY = e.pageY - container.offsetTop;
      scrollTop = container.scrollTop;
      container.style.cursor = "grabbing";
    };
    const onMouseLeave = () => {
      isDown = false;
      container.style.cursor = "default";
    };
    const onMouseUp = () => {
      isDown = false;
      container.style.cursor = "default";
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const y = e.pageY - container.offsetTop;
      const walk = (y - startY) * 1.2;
      container.scrollTop = scrollTop - walk;
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  /* ─────────── WaveSurfer setup (custom render) ─────────── */
  useEffect(() => {
    const localRefs = [...wavesurferRefs.current]; // ✅ snapshot to local variable

    items.forEach((item, i) => {
      const container = document.getElementById(`waveform-${i}`);
      if (!container || localRefs[i]) return;

      const screenWidth = window.innerWidth;
      let height = 32;
      let barWidth = 2;
      let barGap = 4;

      if (screenWidth < 640) {
        height = 32;
        barWidth = 1;
        barGap = 3;
      } else if (screenWidth >= 640 && screenWidth < 1024) {
        height = 52;
        barWidth = 1;
        barGap = 4;
      } else {
        height = 63;
        barWidth = 2;
        barGap = 5;
      }

      const ws = WaveSurfer.create({
        container,
        progressColor: "#C9A35B",
        waveColor: "#676767",
        height,
        cursorWidth: 0,
        barWidth,
        barGap,
        barRadius: 1,
        // responsive: true,
        normalize: true,
      });

      ws.load(item.audioUrl);
      localRefs[i] = ws;
    });

    wavesurferRefs.current = localRefs;

    return () => {
      localRefs.forEach((ws) => ws?.destroy()); // ✅ cleanup uses snapshot
    };
  }, [items]);

  /* ─────────── Play/pause control ─────────── */
  const togglePlay = (i: number) => {
    wavesurferRefs.current.forEach((ws, index) => {
      if (index !== i) ws?.pause();
    });
    const ws = wavesurferRefs.current[i];
    if (ws) ws.isPlaying() ? ws.pause() : ws.play();
  };

  /* ─────────── Render ─────────── */
  return (
    <div className="flex flex-col font-cursive items-center xl:flex-row-reverse justify-center xl:justify-around">
      <div className="flex flex-col items-center gap-5">
        <p className="text-3xl font-bold sm:text-[48px] text-center xl:text-end">
          <span className="text-golden text-[28px] sm:text-[44px] mx-1">
            IK10
          </span>{" "}
          پروژه های
        </p>
        <p className="font-base  font-thin w-[333px] tracking-[30px] sm:text-lg sm:w-[431px] text-center xl:text-end">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرهالورم ایپسوم متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرهالورم
          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است
        </p>
      </div>
      <div className="flex flex-col font-cursive items-center xl:flex-col-reverse justify-center h-full xl:h-500px xl:relative xl:top-20">
        <button className="w-25 h-10 bg-golden rounded-lg text-xl text-white relative mt-15 z-40 hover:bg-hover sm:w-27 sm:h-13 text-[22px] xl:m-0 xl:-top-45">
          بیشتر
        </button>
        <div className="flex justify-center items-center relative -top-15">
          <div
            ref={containerRef}
            className="h-[300px] w-full overflow-y-auto scroll-smooth snap-y left-5 snap-mandatory rounded-2xl bg-[#ffffff] py-2 select-none cursor-grab [&::-webkit-scrollbar]:hidden sm:w-auto sm:h-[500px] sm:relative sm:-top-15 xl:-top-0"
          >
            <div className="h-[130px] flex-shrink-0" />
            {Array.isArray(items) && items.length > 0 ? (
              items.map((item, index) => {
                const isPrev = index === currentIndex - 1;
                const isNext = index === currentIndex + 1;
                const isActive = index === currentIndex;

                let scale = 1;
                let opacity = 1;
                if (isPrev || isNext) {
                  scale = 0.55;
                  opacity = 0.3;
                } else if (Math.abs(index - currentIndex) > 1) {
                  scale = 0.8;
                  opacity = 0;
                }

                return (
                  <motion.div
                    key={crypto.randomUUID()}
                    className="vhs-item h-[73px] w-[320px] my-5 rounded-md bg-[#F6F6F6] flex items-center justify-between px-4 box-border snap-center text-white transform transition-all duration-200 ease-in-out sm:w-[493px] sm:h-[113px] sm:rounded-xl xl:w-[562px] xl:h-[129px]"
                    style={{ scale, opacity, zIndex: isActive ? 2 : 1 }}
                  >
                    <div className="flex flex-col">
                      <div className="text-[1.1rem] font-semibold text-black">
                        {/* {item.title} */}
                      </div>
                      <div className="text-[0.85rem] opacity-80 mb-2 text-black">
                        {/* {item.subtitle} */}
                      </div>
                      <div
                        id={`waveform-${index}`}
                        className="w-[220px] sm:w-[324px] sm:ml-5 xl:w-95 xl:ml-7"
                      />
                    </div>
                    <button
                      onClick={() => togglePlay(index)}
                      className="bg-golden hover:bg-hover text-white rounded-full w-10 h-10 text-[18px] flex items-center justify-center transition-colors sm:w-16 sm:h-16 mr-2 sm:mr-5 xl:w-[71px] xl:h-[71px] xl:mr-7"
                    >
                      <RunIcon className="w-6 h-6 sm:w-10 sm:h-10 xl:w-11 xl:h-11" />
                    </button>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-white text-center py-4">
                No items available
              </div>
            )}
            <div className="h-[130px] flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
