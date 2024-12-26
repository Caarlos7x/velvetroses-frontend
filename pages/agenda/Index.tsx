import BlurFade from "@/components/ui/Blur-Fade";
import { FadeText } from "@/components/ui/fade-text";



export default function AgendaPage() {

  return (
    <div className="flex flex-col space-y-8 text-center">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          AGENDA
        </h2>
      </BlurFade>
      <FadeText
        className="text-4xl font-bold text-white dark:text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="Em Breve"
      />
    </div>
  )
}