"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso ter experiência prévia em Jiu-Jitsu para fazer o curso?",
    answer:
      "Não! O curso foi desenvolvido do zero ao avançado. Se você nunca pisou em um tatame, vai encontrar tudo explicado de forma clara e progressiva. Se já tem experiência, vai aprimorar e aprofundar suas técnicas.",
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo?",
    answer:
      "O acesso é vitalício. Você compra uma vez e acessa para sempre, incluindo todas as atualizações futuras que forem adicionadas ao curso.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "Se por qualquer motivo você não ficar satisfeito com o conteúdo, basta solicitar o reembolso dentro de 7 dias após a compra. Devolvemos 100% do valor pago, sem perguntas e sem burocracia.",
  },
  {
    question: "Consigo assistir as aulas pelo celular?",
    answer:
      "Sim! A plataforma é totalmente responsiva e funciona em qualquer dispositivo: celular, tablet ou computador. Você treina no seu ritmo, onde e quando quiser.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos Pix, cartões de crédito (Visa, Mastercard, Hipercard, Elo, Diners Club), débito e boleto bancário. O parcelamento em até 12x está disponível nos cartões de crédito.",
  },
  {
    question: "Terei suporte durante o curso?",
    answer:
      "Sim! Você terá acesso ao suporte direto com o instrutor e à comunidade exclusiva de alunos, onde poderá tirar dúvidas e trocar experiências com outros praticantes.",
  },
  {
    question: "O certificado tem validade?",
    answer:
      "Ao concluir o curso você recebe um certificado de conclusão que comprova sua dedicação ao treinamento. O certificado é válido e pode ser compartilhado em suas redes profissionais.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Título */}
        <div className="text-center mb-12">
          <div className="inline-block bg-black/80 backdrop-blur-sm px-8 py-5 rounded-lg border border-primary/30 mb-4">
            <h2 className="font-heading text-3xl md:text-4xl uppercase text-foreground">
              Dúvidas{" "}
              <span className="text-primary drop-shadow-[0_0_20px_rgba(0,200,83,0.6)]">Frequentes</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Encontre as respostas para as perguntas mais comuns
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-primary/20 bg-card/50 px-6 overflow-hidden data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
