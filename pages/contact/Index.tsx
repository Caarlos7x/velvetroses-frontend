import PulsatingButton from "@/components/ui/pulsating-button";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl mb-8">
        CONTATO
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
        <div className="flex flex-col items-left space-y-4">
          <h3 className="text-2xl font-bold">Slash Cover Tributo</h3>
          <h2 className="font-bold">Duração do Show</h2>
          <p>1h30</p>

          <h2 className="font-bold">Público-Alvo</h2>
            <p>
            Fãs de rock clássico, hard rock e admiradores 
            da história de um dos maiores guitarristas de todos os tempos.
            </p>

          <h2 className="font-bold">Diferenciais</h2>
          <p>
            Slash Cover é uma banda cover do Slash, guitarrista 
            da banda Guns N&apos; Roses. O grupo é formado por músicos 
            profissionais que buscam reproduzir com fidelidade o 
            som e a energia dos shows do Slash.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-2xl font-bold">Contratação</h3>
          <a href="mailto:slashcoveroficial@gmail.com">
            <PulsatingButton>Enviar e-mail</PulsatingButton>
          </a>
        </div>
      </div>
    </div>
  );
}