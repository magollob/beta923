import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Monitor, RefreshCw, ShieldCheck, PlayCircle, Download, Award } from "lucide-react"

const benefits = [
  {
    icon: Monitor,
    title: "Área de Membro Exclusiva",
    description: "Plataforma dedicada com painel personalizado, progresso por módulo e histórico de aulas.",
  },
  {
    icon: PlayCircle,
    title: "Acesso Completo ao Treinamento",
    description: "Todos os 9 módulos com aulas em vídeo de alta qualidade, do básico ao avançado.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações Vitalícias",
    description: "Novos conteúdos adicionados continuamente sem custo adicional. Pague uma vez, acesse para sempre.",
  },
  {
    icon: Download,
    title: "Materiais para Download",
    description: "PDFs, guias e planilhas de treino para você acompanhar offline quando quiser.",
  },
  {
    icon: Award,
    title: "Certificado de Conclusão",
    description: "Ao finalizar os módulos, receba seu certificado oficial do curso Jefferson Instrutor.",
  },
  {
    icon: ShieldCheck,
    title: "Suporte Direto com Instrutor",
    description: "Canal exclusivo para tirar dúvidas diretamente com o Jefferson e sua equipe.",
  },
]

export function WhatYouGetSection() {
  return (
    <section className="bg-background relative overflow-hidden" style={{ paddingTop: "41px", paddingBottom: "41px" }}>
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl uppercase mb-4 text-foreground">
            O Que Você Vai{" "}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(0,200,83,0.6)]">Receber</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Painel com vídeos aulas gravadas e atualizações vitalícias!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: mockup image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl scale-95" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%203%2C%202026%2C%2011_47_21%20PM-I1GVWXrCVsBxNRJBV2lAxkVGdq8xft.webp"
                alt="Painel de Membros Jefferson Instrutor — desktop e mobile"
                width={900}
                height={700}
                className="relative w-full h-auto rounded-2xl drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right: benefits list + CTA */}
          <div className="flex flex-col gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-0.5">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              )
            })}

            {/* Divider */}
            <div className="border-t border-border/40 pt-6 flex flex-col items-start gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Acesso imediato após a confirmação do pagamento</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Compatível com celular, tablet e computador</span>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-green text-black font-black text-lg px-10 py-6 hover:scale-105 transition-transform shadow-lg shadow-primary/40 w-full sm:w-auto mt-2"
              >
                <a href="#comece-sua-jornada-hoje">GARANTIR ACESSO AGORA</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
