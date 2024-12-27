"use client";

import { useState, useEffect } from "react";
import BlurFade from "@/components/ui/Blur-Fade";
import Image from "next/image";
import { text_content_band } from "@/lib/textContent";

export default function BandIndex() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateValue = Math.min(scrollY / 5, 20);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white w-full">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          THE CONSPIRATORS
        </h2>
      </BlurFade>

      <div className="flex flex-row w-full mt-8">
        <div
          className="w-1/2 p-6 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${translateValue}px)`,
          }}
        >
          <p className="text-lg">
            {text_content_band.bandDescription}
            <br /><br />
            {text_content_band.performanceDetails}
            <br /><br />
            {text_content_band.invitation}
          </p>
        </div>
        <div
          className="w-1/2 p-4 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${translateValue}px)`,
          }}
        >
          <Image 
            src="/images/slash-the-conspirators.jpg" 
            alt="Slash" 
            width={500} 
            height={500} 
            className="w-full h-auto rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
}
