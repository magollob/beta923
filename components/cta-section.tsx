import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Gift, LockOpen } from "lucide-react"
import Image from "next/image"


const bonuses = [
  {
    title: "Como Treinar em Casa Completo",
    originalPrice: "R$ 39,90",
    currentPrice: "GRÁTIS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebook1-SAZUyOQcM7WSQUk9W4wKIfY3tYgU1f.webp",
    imageAlt: "E-book Treinar em Casa Completo",
  },
  {
    title: "Alimentação Saudável BJJ",
    originalPrice: "R$ 19,90",
    currentPrice: "GRÁTIS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebook2-4jVEXdPZeGNR1EZEBs32w2peXLpV4A.webp",
    imageAlt: "E-book Alimentação Saudável BJJ",
  },
  {
    title: "Painel com Vídeo Aulas",
    originalPrice: "R$ 97,90",
    currentPrice: "GRÁTIS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebook3-uu7oImiR8QoYPujDQsdDW3tTfv33QK.webp",
    imageAlt: "Painel com Vídeo Aulas BJJ",
  },
]

const includes = [
  "9 Módulos Completos de Jiu-Jitsu",
  "Acesso Vitalício ao Conteúdo",
  "Atualizações Gratuitas",
  "Certificado de Conclusão",
  "Suporte Direto com Instrutor",
  "Comunidade Exclusiva de Alunos",
  "Treinos Bônus em Casa",
  "Guia de Alimentação para Lutadores",
  "Painel de Vídeo organizado",
]

export function CTASection() {
  return (
    <section id="oferta-especial" className="bg-gradient-brand relative overflow-hidden" style={{ paddingTop: "41px", paddingBottom: "41px" }}>
      <div id="comece-sua-jornada-hoje" className="absolute -top-24" />
      {/* Dramatic background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto" style={{ marginTop: "-22px" }}>
          {/* Black Friday Badge */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-green text-black font-black text-sm px-6 py-2 rounded-full uppercase tracking-wider animate-pulse">
              Oferta Especial
            </div>
          </div>

          <Card className="backdrop-blur-brand border-2 border-primary/30 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl md:text-5xl uppercase mb-4 text-foreground">
                  Comece Sua{" "}
                  <span className="text-primary drop-shadow-[0_0_20px_rgba(0,200,83,0.6)]">Jornada Hoje</span>
                </h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  Tudo que você precisa para dominar o Jiu-Jitsu
                </p>
              </div>

              {/* What's Included */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Check className="w-6 h-6 text-accent" />O Que Está Incluído:
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonuses */}
              <div className="mb-12 p-6 bg-primary/10 rounded-lg border border-primary/30">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-accent" />
                  Bônus Exclusivos (Apenas Hoje):
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="bg-card/50 p-3 rounded-lg border border-primary/20 flex flex-col items-center text-center">
                      <h4 className="font-bold text-foreground text-xs md:text-sm mb-2 leading-tight">{bonus.title}</h4>
                      <Image
                        src={bonus.image}
                        alt={bonus.imageAlt}
                        width={180}
                        height={240}
                        className="w-full max-w-[120px] md:max-w-[160px] h-auto object-contain mb-2"
                        unoptimized
                      />
                      <div className="flex items-center gap-1 flex-wrap justify-center">
                        <span className="text-xs text-muted-foreground line-through">{bonus.originalPrice}</span>
                        <span className="text-accent font-bold text-sm">{bonus.currentPrice}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Valor total dos bônus: <span className="line-through">R$ 157,70</span> - Seu hoje:{" "}
                  <span className="text-accent font-bold">R$ 0,00</span>
                </p>
              </div>

              {/* Product Mockup */}
              <div className="mb-8 -mx-8 md:-mx-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mockup-BS0Ido9dZkaZSGyN4ANxcPFLLF8GMT.webp"
                  alt="Tudo que você recebe ao garantir hoje — plataforma desktop, tablet, mobile e e-books bônus"
                  width={1440}
                  height={810}
                  className="w-full h-auto object-contain"
                  unoptimized
                />
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="mb-4">
                  <span className="text-muted-foreground text-lg">De </span>
                  <span className="text-3xl text-muted-foreground line-through">R$ 199,90</span>
                </div>
                <div className="mb-6">
                  <div className="text-5xl md:text-6xl font-black text-foreground mb-2">R$ 49,90</div>
                  <div className="text-xl text-muted-foreground">
                    ou 12x de <span className="text-accent font-bold">R$ 4,99</span>
                  </div>
                </div>
                <div className="inline-block bg-accent/20 text-accent font-bold text-sm px-4 py-2 rounded-full mb-8">
                  Economize 75% - Somente essa semana!
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a href="https://pay.kiwify.com.br/uP30PK9" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto inline-block">
                  <Button
                    size="lg"
                    className="bg-gradient-green text-black font-black text-xl px-12 py-8 hover:scale-105 transition-transform shadow-2xl shadow-primary/50 w-full md:w-auto flex items-center gap-3"
                  >
                    <LockOpen className="w-5 h-5 flex-shrink-0" />
                    LIBERAR ACESSO AGORA
                  </Button>
                </a>
                <div className="flex flex-col items-center gap-3 mt-6">
                  <p className="text-sm text-muted-foreground">Pagamento 100% Seguro</p>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bandeiraspg-Cnj1HW4Zs71uvr5u7IjceketyEKkcW.png"
                    alt="Bandeiras de pagamento aceitas: Visa, Mastercard, Hipercard, Elo, Diners Club e Boleto"
                    width={320}
                    height={40}
                    className="h-auto w-auto max-w-[320px] opacity-90"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Trust badges */}
          <div className="mt-12 text-center">
            
            
          </div>
        </div>
      </div>
    </section>
  )
}
