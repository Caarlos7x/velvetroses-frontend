"use client";

import { useState, useEffect } from "react";
import BlurFade from "@/components/ui/Blur-Fade";
import Image from "next/image";
import { text_content_band } from "@/lib/textContent";
import "./Index.css";

export default function BandIndex() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Inicializa corretamente ao montar o componente

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const translateValue = Math.min(scrollY / 5, 20);

  return (
    <div className="container">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
          VELVET ROSES
        </h2>
      </BlurFade>

      <div className="flex flex-col md:flex-row w-full mt-8">
        <div
          className="column transition-transform duration-700 ease-in-out"
          style={{
            transform: !isMobile ? `translateX(${translateValue}px)` : "none",
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
          className="img-band column transition-transform duration-700 ease-in-out"
          style={{
            transform: !isMobile ? `translateX(-${translateValue}px)` : "none",
          }}
        >
          <Image
            src={
              isMobile
                ? "/images/VelvetRoses-mobile.jpeg"
                : "/images/VelvetRoses.jpeg"
            }
            alt="Foto da banda Velvet Roses"
            width={500}
            height={500}
            className="image"
          />
        </div>
      </div>
    </div>
  );
}