"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  className,
}: {
  items: {
    image: string;
    title: string;
  }[];
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      }

      if (containerRef.current) {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }

      setStart(true);
    }
  }, []);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={{ maxWidth: "980px" }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4 px-4",
          start && "animate-scroll",
          "hover:[animation-play-state:paused]"
        )}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li
              className="relative w-[250px] max-w-full shrink-0 md:w-[280px] rounded-xl overflow-hidden"
              style={{ backgroundColor: "#181c19" }}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-full h-64 overflow-hidden group bg-black rounded-t-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-t-xl"
                  />
                </div>
                <div className="w-full p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </li>
            {index < items.length - 1 && (
              <div className="flex items-center">
                <div className="w-px h-32 bg-gray-400 opacity-30"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
