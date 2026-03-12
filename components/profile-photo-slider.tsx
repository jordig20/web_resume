"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

export function ProfilePhotoSlider({
  slides,
  label
}: {
  slides: Slide[];
  label: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(248,251,252,0.96),rgba(236,244,247,0.86))] shadow-[var(--shadow)]">
      <div className="relative h-[22rem] sm:h-[26rem] lg:h-[32rem]">
        {slides.map((slide, slideIndex) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 35vw, 100vw"
            className={`object-cover object-center transition-opacity duration-1000 ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-[linear-gradient(180deg,transparent,rgba(9,27,36,0.6))] p-5">
          <span className="rounded-full border border-white/18 bg-black/18 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white backdrop-blur-sm">
            {label}
          </span>
          <div className="flex gap-2">
            {slides.map((slide, slideIndex) => (
              <span
                key={slide.src}
                className={`h-2 w-2 rounded-full transition ${
                  slideIndex === index ? "bg-white" : "bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
