"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effects.tsx";
export function CoursesHead() {
  const words = [
    {
      text: "Get",
    },
    {
      text: "All",
    },
    {
      text: "Your",
    },
    {
      text: " Course",
    },
    {
      text: "Essentials!",
      className: "text-red-500 ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-grey  text-xs sm:text-base  ">
        The road to learning starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      
    </div>
  );
}
