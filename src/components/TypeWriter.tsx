"use client";
import React, { useEffect, useState, useRef } from "react";
import useSound from "use-sound";

type Props = {
  text: string;
  speed?: number;
  startDelay?: number;
  playSound?: boolean;
  soundPath?: string;
  onDone?: () => void;
  className?: string;
};

export default function TypeWriter({
  text,
  speed = 60,
  startDelay = 0,
  playSound = true,
  soundPath = "/sounds/type.mp3",
  //   onDone,
  className = "",
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [play] = useSound(soundPath, { volume: 0.35, interrupt: true });

  const hasRunRef = useRef<string | null>(null);

  useEffect(() => {
    if (hasRunRef.current === text) return;
    hasRunRef.current = text;

    // if (!text) {
    //   setDisplayed("");
    //   onDone?.();
    //   return;
    // }

    setDisplayed("");
    const chars = Array.from(text);
    const timers: number[] = [];

    chars.forEach((ch, i) => {
      const t = window.setTimeout(() => {
        setDisplayed((prev) => prev + ch);

        if (playSound && ch.trim() !== "") {
          try {
            play();
          } catch {}
        }

        // if (i === chars.length - 1) {
        //   onDone?.();
        // }
      }, startDelay + i * speed);

      timers.push(t);
    });

    return () => timers.forEach((id) => clearTimeout(id));
  }, [text, speed, startDelay, playSound, soundPath]);

  return <span className={className}>{displayed}</span>;
}
