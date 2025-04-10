"use client";
import { useEffect, useRef } from "react";
import BlurFade from "@/components/ui/Blur-Fade";
import { FadeText } from "@/components/ui/fade-text";
import Image from "next/image";
import { text_content_agenda } from "@/lib/textContent";
import ListNameModal from "../../components/modal/ListNameModal"; // Importando o Modal
import "./Index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


// PulsatingButton modificado para não ser <button>
const PulsatingButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative text-center cursor-pointer flex justify-center items-center rounded-full animate-pulse"
      style={{
        // exemplo de variável se você estiver usando alguma
        // '--pulse-color': '#fafafa',
        // '--duration': '1.5s',
      }}
    >
      {children}
    </div>
  );
};

export default function AgendaPage() {
  const listaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Verificação de hash SSR-safe
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

  const ListaComModal = (
    <div ref={listaRef} id="lista">
      <FadeText
        className="flex justify-center mt-5 text-xl font-bold text-black"
        direction="up"
        framerProps={{ show: { transition: { delay: 0.8 } } }}
        text={
          <div className="flex justify-center">
            <PulsatingButton>
              <ListNameModal deadline="2025-04-02T23:59:00" discount={33} />
            </PulsatingButton>
          </div>
        }
      />
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 space-y-8">
      <BlurFade delay={0.25} inView>
        <h2 className="mt-60 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
          AGENDA
        </h2>
      </BlurFade>

      {/* Container centralizado da Agenda */}
      <div className="flex justify-center w-full">
        <div className="grid w-full max-w-3xl gap-12 text-lg items-center text-center grid-cols-1 sm:grid-cols-2">
          {/* Coluna 1 - Data e Local */}
          <div className="font-bold text-white text-center">
            <FadeText
              className="text-2xl font-bold text-white text-center sm:text-left"
              direction="up"
              framerProps={{ show: { transition: { delay: 0.8 } } }}
              text="02 de Abril - 21h"
            />

            <FadeText
              className="text-xl font-bold text-white"
              direction="up"
              framerProps={{ show: { transition: { delay: 0.8 } } }}
              text={
                <div className="flex justify-center">
                  <a
                    href="https://maps.app.goo.gl/kmTQ7maygbGj7bGt7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-1 text-base text-white rounded-lg transition-all hover:scale-105 hover:text-yellow-300"
                  >
                    Willi Willie Bar e Arqueria
                  </a>
                </div>
              }
            />

            {/* Modal dentro de pulsação */}
            {ListaComModal}
          </div>

          {/* Coluna 2 - Informações sobre o local e show */}
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={text_content_agenda.agendaImage}
              alt="Imagem do evento"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <p className="text-base text-gray-300 text-justify">
              {text_content_agenda.agendaDescription}
            </p>
          </div>
        </div>
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
          href="https://youtube.com"
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
      <div className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/poster.jpg"
          aria-hidden="true"
        >
          <source src="/video/video-web.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>

      </div>

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