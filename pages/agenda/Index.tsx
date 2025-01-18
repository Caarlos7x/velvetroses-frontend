import BlurFade from "@/components/ui/Blur-Fade";
import { FadeText } from "@/components/ui/fade-text";
import './Index.css';
import { text_content_agenda } from "@/lib/textContent";

export default function AgendaPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 space-y-8">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          AGENDA
        </h2>
      </BlurFade>
      <FadeText
        className="text-4xl font-bold text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="Em Breve"
      />
      <p className="text-lg text-gray-400 max-w-xl">
        {text_content_agenda.agendaDescription}
      </p>
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

      <div className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full opacity-50"
          autoPlay
          muted
          loop
          playsInline
          controls={false} // Desativa os controles
        >
          <source src="/video/video.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        {/* <iframe
          className="absolute top-0 left-0 w-full h-full opacity-50"
          src="https://www.youtube.com/embed/s7TLDpOQmxY?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&modestbranding=1&autohide=1&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </div>


    </div>
  );
}
