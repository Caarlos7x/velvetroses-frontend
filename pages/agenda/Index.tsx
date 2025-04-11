"use client";

import { useEffect, useRef } from "react";
import BlurFade from "@/components/ui/Blur-Fade";
import { FadeText } from "@/components/ui/fade-text";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorldTourAgenda from "../../components/tour/Tour";
import "./Index.css";

export default function AgendaPage() {
  const listaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hash = window?.location?.hash;
    if (hash === "#lista") {
      listaRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      setTimeout(() => {
        window.scrollBy(0, -200);
      }, 500);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 space-y-8">
      <BlurFade delay={0.25} inView>
        <h2 className="mt-60 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-center">
          AGENDA
        </h2>
      </BlurFade>

      {/* Agenda com lógica de sold out - um abaixo do outro */}
      <div className="w-full max-w-4xl px-4">
        <WorldTourAgenda />
      </div>

      {/* Redes sociais */}
      <div className="flex space-x-4 agenda-social">
        <a
          href="https://www.instagram.com/slashcover.oficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 transition-colors hover:text-blue-500"
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/@velvetrosesoficial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 transition-colors hover:text-red-500"
        >
          YouTube
        </a>
        <a
          href="https://open.spotify.com/playlist/5ut5ONcyXqLe0m15epXAQ3?si=4cd743cbd94e49dd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 transition-colors hover:text-green-500"
        >
          Spotify
        </a>
      </div>

      {/* Vídeo de fundo */}
      <div className="relative w-full h-[40vh] md:h-screen overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
          src="https://www.youtube.com/embed/A0e1984thFQ?autoplay=1&mute=1&loop=1&playlist=A0e1984thFQ&controls=0&showinfo=0&modestbranding=1"
          title="Velvet Roses Ao Vivo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Carrossel de vídeos ao vivo */}
      <div className="w-full px-4 max-w-6xl mt-20">
        <h3 className="text-2xl font-bold text-center mb-4 mt-20">Assista à Velvet Roses ao vivo</h3>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/A0e1984thFQ"
                title="Velvet Roses - Rocket Queen"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7Ue133z6Wsk"
                title="Velvet Roses - Slither"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/4tXKzPXQvQM"
                title="Velvet Roses - Nightrain"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
