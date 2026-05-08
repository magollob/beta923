import { ShieldCheck, BadgeDollarSign } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-2xl border border-primary/30 bg-card/60 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Ícone */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative w-24 h-24 md:w-28 md:h-28">
              {/* Círculo pontilhado externo */}
              <svg
                viewBox="0 0 112 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
              >
                <circle
                  cx="56"
                  cy="56"
                  r="52"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
              {/* Círculo interno */}
              <div className="absolute inset-4 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              O seu risco é absolutamente <strong className="text-foreground">ZERO</strong>. Você pode entrar, acessar
              todo o conteúdo e, se por qualquer motivo achar que não é para você, basta solicitar o reembolso dentro
              da plataforma.
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm">
              <BadgeDollarSign className="w-5 h-5 flex-shrink-0" />
              <span>Devolvemos 100% do seu dinheiro. Sem burocracia e sem letrinhas miúdas.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
