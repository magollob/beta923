import Image from "next/image"
import { InstructorMarquee } from "@/components/instructor-marquee"

export function InstructorSection() {
  return (
    <section id="instrutor" className="bg-gradient-brand relative overflow-hidden leading-7 py-2.5">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12" style={{ paddingTop: "22px" }}>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground">
              Aprenda com <span className="text-primary drop-shadow-[0_0_20px_rgba(0,200,83,0.6)]">Instrutor</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Instructor Photo */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/instrutor-sUMQxvaTSvt5k4iTR36kltff4X3SKW.webp"
                  alt="Instrutor Jefferson - Faixa Preta de Jiu-Jitsu"
                  width={500}
                  height={700}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
                {/* Glow effect behind instructor */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 scale-75" />
              </div>
            </div>

            {/* Faixa marquee — visível apenas no mobile, entre imagem e conteúdo */}
            <div className="block md:hidden w-screen -mx-4">
              <InstructorMarquee />
            </div>

            {/* Content */}
            <div className="backdrop-blur-brand rounded-2xl p-8 md:p-12 border border-primary/20 py-8 px-8 mx-0 my-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-0.5 bg-primary flex-shrink-0" />
                <h3 className="font-heading text-3xl md:text-4xl uppercase text-foreground">Seu Instrutor</h3>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl md:text-3xl font-bold text-primary">@instrutor_jefferson</h4>

                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Com anos de experiência no tatame e centenas de alunos formados, o Instrutor Jefferson criou um método prático e eficiente para acelerar sua evolução no Jiu-Jitsu, independente da sua faixa.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width marquee strip — visível apenas no desktop, abaixo da área do instrutor */}
      <div className="hidden md:block w-full mt-8">
        <InstructorMarquee />
      </div>
    </section>
  )
}
