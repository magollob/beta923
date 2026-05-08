"use client"

import Image from "next/image"

const modules = [
  {
    title: "Posições Básico ao Avançado",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P5-OTSIt8sdVAU7eEuB3duEySsb5CKNVE.webp",
    description: "Evolua do Faixa Branca ao Faixa Preta com progressão estruturada",
  },
  {
    title: "Treinos Solo em Casa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P3-1XepWHyjnkuVKudZbyG0gnk4cXeq4g.webp",
    description: "Treine sozinho e desenvolva suas habilidades e físico em qualquer lugar",
  },
  {
    title: "Condicionamento Físico",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P4-tPALee49VM1csQp6i6prEZSTKmY5JC.webp",
    description: "Prepare seu corpo para alta performance no tatame",
  },
  {
    title: "Passagem de Guarda",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P2-QNkcbgzv7pxclqR4CyIoJYFLHScziH.webp",
    description: "Aprenda a passar qualquer tipo de guarda com precisão",
  },
  {
    title: "Jogo em Pé",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1-deWiwm2ahxPLWVkotVwuTiAT4jOe0u.webp",
    description: "Domine as técnicas de combate em pé e quedas eficientes",
  },
]

export function CourseModulesSection() {
  return (
    <section className="bg-background relative" style={{ paddingTop: "32px", paddingBottom: "41px" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl uppercase mb-4 text-foreground">
            O Que Você Vai <span className="text-primary drop-shadow-[0_0_20px_rgba(0,200,83,0.6)]">Aprender</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conteúdo completo e estruturado para sua evolução no Jiu-Jitsu
          </p>
        </div>

        {/* Full width images stacked vertically */}
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-lg group"
            >
              {/* Full width image with original aspect ratio */}
              <div className="relative w-full">
                <Image
                  src={module.image}
                  alt={module.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority={index === 0}
                />
              </div>

              {/* Text content below image */}
              <div className="bg-card border border-border/40 rounded-b-lg px-6 py-4">
                <h3 className="text-2xl md:text-3xl font-black text-foreground mb-1 uppercase">{module.title}</h3>
                <p className="text-base md:text-lg text-muted-foreground">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
