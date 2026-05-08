"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const modules = [
  {
    id: "modulo-1",
    title: "MÓDULO 1 — Fundamentos do Jiu-Jitsu (Base Sólida)",
    emoji: "🥋",
    objective: "Ensinar os princípios que criam alunos técnicos desde o início.",
    lessons: [
      "O que é Jiu-Jitsu e como funciona a lógica do combate",
      "Entendimento das faixas e progressão",
      "Movimentos básicos: quedas, rolamentos, base, postura",
      "Biomecânica do equilíbrio e alavancas",
      "Como respirar e economizar energia",
      "Etiqueta e mentalidade do praticante",
    ],
  },
  {
    id: "modulo-2",
    title: "MÓDULO 2 — Defesas e Saídas Essenciais",
    emoji: "🥋",
    objective: "Ensinar como sobreviver e escapar de posições desconfortáveis.",
    lessons: [
      "Como se defender sendo iniciante",
      "Saída da montada",
      "Saída das costas (escape de mata-leão)",
      "Defesa de quedas",
      "Defesa pessoal aplicada ao dia a dia",
      "Como se manter calmo em situações de pressão",
    ],
  },
  {
    id: "modulo-3",
    title: "MÓDULO 3 — Controle de Posições",
    emoji: "🥋",
    objective: "Dominar o tabuleiro do Jiu-Jitsu.",
    lessons: [
      "Side control (controle lateral)",
      "Montada",
      "Meia-guarda",
      "Passagem de guarda passo a passo",
      "Como estabilizar posições e evitar reversões",
      "Posições dominantes para finalizações",
    ],
  },
  {
    id: "modulo-4",
    title: "MÓDULO 4 — Finalizações Clássicas e Infalíveis",
    emoji: "🥋",
    objective: "Finalizar com eficiência e precisão.",
    lessons: [
      "Arm-lock (chave de braço)",
      "Mata-leão",
      "Triângulo",
      "Kimura",
      "Americana",
      "Ezekiel choke",
      "Dicas para finalizar sem desperdiçar energia",
    ],
  },
  {
    id: "modulo-5",
    title: "MÓDULO 5 — Guarda: Ataque, Defesa e Estrutura",
    emoji: "🥋",
    objective: "Ensinar as guardas mais usadas e suas estratégias.",
    lessons: [
      "Guarda fechada",
      "Guarda aberta",
      "Guarda borboleta",
      "Guarda aranha",
      "Conceito de ganchos",
      "Como raspar com eficiência",
      "Sistema de recuperação de guarda",
    ],
  },
  {
    id: "modulo-6",
    title: "MÓDULO 6 — Jogo Avançado (intermediário/avançado)",
    emoji: "🥋",
    objective: "Estratégias para quem quer lutar, competir ou elevar o nível.",
    lessons: [
      "Passagem de guarda avançada",
      "Ataques encadeados (combinações)",
      "Berimbolo (opcional, dependendo da sua linha)",
      "50/50",
      "Chaves de pé e defesa de chaves",
      "Como controlar o ritmo da luta",
      "Estratégia para competição",
    ],
  },
  {
    id: "modulo-7",
    title: "MÓDULO 7 — Defesa Pessoal Universal (BJJ aplicado)",
    emoji: "🥋",
    objective: "Ideal para mulheres, iniciantes e quem quer usar o BJJ fora da academia.",
    lessons: [
      "Defesa de agarrões",
      "Defesa de agressão no chão",
      "Defesa contra empurrões",
      "Técnicas para imobilizar",
      "Controle emocional em conflitos reais",
    ],
  },
  {
    id: "modulo-8",
    title: "MÓDULO 8 — Condicionamento Físico para BJJ",
    emoji: "🥋",
    objective: "Preparar o corpo para desempenho.",
    lessons: [
      "Alongamentos essenciais",
      "Exercícios com peso do corpo",
      "Movimentos funcionais específicos",
      "Protocolos de aquecimento",
      "Treinamento de mobilidade",
      "Nutrição para lutadores (básico e seguro)",
    ],
  },
  {
    id: "modulo-9",
    title: "MÓDULO 9 — Mentalidade, Motivação e Disciplina do Lutador",
    emoji: "🥋",
    objective: "Criar alunos consistentes.",
    lessons: [
      "Como evitar desistir",
      "Controle mental durante a luta",
      "Como manter constância mesmo em dias difíceis",
      "Ritual de treino",
      "Superação de bloqueios mentais",
    ],
  },
]

export function ModulesAccordion() {
  return (
    <section className="bg-gradient-brand relative" style={{ paddingTop: "41px", paddingBottom: "41px" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-black/80 backdrop-blur-sm px-8 py-6 rounded-lg border border-primary/30 mb-4">
              <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground">
                Conteúdo <span className="text-primary drop-shadow-[0_0_20px_rgba(0,200,83,0.6)]">Programático</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground text-pretty">9 módulos completos do básico ao avançado</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module) => (
              <AccordionItem
                key={module.id}
                value={module.id}
                className="backdrop-blur-brand rounded-lg border border-primary/20 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5 transition-colors">
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-2xl">{module.emoji}</span>
                    <span className="font-bold text-foreground text-lg">{module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 pt-4">
                    <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-primary mb-1">Objetivo:</p>
                      <p className="text-muted-foreground">{module.objective}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-3">Aulas:</p>
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
