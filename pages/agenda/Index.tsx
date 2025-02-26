import BlurFade from "@/components/ui/Blur-Fade";
import { FadeText } from "@/components/ui/fade-text";
import PulsatingButton from "@/components/ui/pulsating-button";
import "./Index.css";
import Image from 'next/image';
import { text_content_agenda } from "@/lib/textContent";

export default function AgendaPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 space-y-8">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mt-60">
          AGENDA
        </h2>
      </BlurFade>

      {/* Container centralizado da Agenda */}
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-3xl text-lg items-center text-center">
          {/* Coluna 1 - Data e Local */}
          <div className="font-bold text-white text-center sm:text-left">
            <FadeText
              className="text-2xl font-bold text-white"
              direction="up"
              framerProps={{ show: { transition: { delay: 0.8 } } }}
              text="02 de Abril - 21h"
            />

            <FadeText
              className="text-1xl font-bold text-white"
              direction="up"
              framerProps={{ show: { transition: { delay: 0.8 } } }}
              text="Willi Willie Bar e Arqueria"
            />

            <FadeText
              className="text-xl font-bold text-black flex justify-center mt-5"
              direction="up"
              framerProps={{ show: { transition: { delay: 0.8 } } }}
              text={
                <div className="flex justify-center">
                  <PulsatingButton>
                    <a
                      href="https://forms.gle/zNzASK4vwZ8XpL3j6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base block px-3 py-1 rounded-lg text-black hover:bg-white transition-all"
                    >
                      Nome na Lista 30%OFF
                    </a>
                  </PulsatingButton>
                </div>
              }
            />
          </div>

          {/* Coluna 2 - Informações sobre o local e show */}
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={text_content_agenda.agendaImage}
              alt="img"
              width={100}
              height={100}
              className="rounded-lg"
            />
            {/* Texto */}
            <div className="text-gray-300 text-base text-justify">
              {text_content_agenda.agendaDescription}
            </div>
          </div>
        </div>
      </div>

      <div className="agenda-social flex space-x-4">
        <a
          href="https://www.instagram.com/slashcover.oficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
        >
          Instagram
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-500"
        >
          YouTube
        </a>
        <a
          href="https://open.spotify.com/playlist/5ut5ONcyXqLe0m15epXAQ3?si=4cd743cbd94e49dd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-500"
        >
          Spotify
        </a>
      </div>

      {/* Vídeo de fundo */}
      <div className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full opacity-50"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        >
          <source src="/video/video.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  );
}