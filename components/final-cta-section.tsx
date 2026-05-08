import Image from "next/image"
import { Button } from "@/components/ui/button"

const CHECKOUT_URL = "https://pay.kiwify.com.br/uP30PK9"

export function FinalCTASection() {
  return (
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto max-w-5xl">

        {/* Banner */}
        <div className="w-full rounded-xl overflow-hidden mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bannerleast-ec0jpbct2cavYsi8sax3I2GZuE639v.webp"
            alt="Domine o Jiu-Jitsu do Zero ao Avançado — Treinamento completo, vídeo aulas práticas, método comprovado, evolução acelerada, acesso 24/7, garantia 7 dias"
            width={1440}
            height={540}
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
          <div className="mb-4">
            <div className="text-5xl md:text-6xl font-black text-foreground mb-2">R$ 49,90</div>
            <div className="text-xl text-muted-foreground">
              ou 12x de <span className="text-primary font-bold">R$ 4,99</span>
            </div>
          </div>
          <div className="inline-block bg-primary/20 text-primary font-bold text-sm px-4 py-2 rounded-full mb-8">
            Economize 75% — Somente essa semana!
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            <Button
              size="lg"
              className="bg-gradient-green text-black font-black text-xl px-12 py-8 hover:scale-105 transition-transform shadow-2xl shadow-primary/50 w-full md:w-auto"
            >
              QUERO GARANTIR AGORA
            </Button>
          </a>
          <p className="text-sm text-muted-foreground">Pagamento 100% Seguro</p>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bandeiraspg-Cnj1HW4Zs71uvr5u7IjceketyEKkcW.png"
            alt="Bandeiras de pagamento aceitas: Visa, Mastercard, Hipercard, Elo, Diners Club e Boleto"
            width={320}
            height={40}
            className="h-auto w-auto max-w-[300px] opacity-90"
            unoptimized
          />
        </div>

      </div>
    </section>
  )
}
