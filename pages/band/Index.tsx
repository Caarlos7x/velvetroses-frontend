import BlurFade from "@/components/ui/Blur-Fade";
import TextReveal from "@/components/ui/text-reveal";

export default function BandIndex() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white w-full">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          BANDA
        </h2>
      </BlurFade>

      <TextReveal 
        text={`Reviva os maiores sucessos do lendário Slash em um espetáculo que atravessa toda a sua carreira! Do poder explosivo de Welcome to the Jungle e Sweet Child O’ Mine nos tempos de Guns N’ Roses, passando pela energia de Slither no Velvet Revolver, até as épicas composições solo de hoje.
          `} />
      </div>
  );
}