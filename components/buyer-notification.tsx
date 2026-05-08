"use client"

import { useEffect, useState } from "react"

const NAMES = [
  // Nomes masculinos (90%)
  "Lucas S.", "Gabriel M.", "Rafael O.", "Matheus C.", "Felipe A.",
  "Bruno T.", "Diego R.", "André L.", "Thiago N.", "Vitor H.",
  "Eduardo P.", "Gustavo F.", "Rodrigo B.", "Marcelo K.", "João V.",
  "Carlos E.", "Pedro I.", "Leandro W.", "Daniel Q.", "Caio Z.",
  "Henrique J.", "Tiago S.", "Álvaro R.", "Cristiano B.", "Leonardo M.",
  "Fabio T.", "Sergio P.", "Robson K.", "Yuri F.", "Vinícius L.",
  "Mauricio N.", "Renato C.", "Julio E.", "Davi A.", "Wagner H.",
  // Nomes femininos (10%)
  "Ana P.", "Juliana M.", "Fernanda S.",
]

function getRandomTime() {
  // entre 17 e 59 minutos atrás
  const minutes = Math.floor(Math.random() * (59 - 17 + 1)) + 17
  return `${minutes} minutos atrás`
}

function getRandomEntry() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)]
  const time = getRandomTime()
  return { name, time }
}

export function BuyerNotification() {
  const [visible, setVisible] = useState(false)
  const [entry, setEntry] = useState({ name: "", time: "" })
  const [animating, setAnimating] = useState<"in" | "out" | "idle">("idle")

  useEffect(() => {
    // Primeira notificação após 4s para não ser imediata demais
    const initialDelay = setTimeout(() => showNotification(), 4000)
    return () => clearTimeout(initialDelay)
  }, [])

  function showNotification() {
    setEntry(getRandomEntry())
    setAnimating("in")
    setVisible(true)

    // Fica visível por 4 segundos, suficiente para ler
    const hideTimer = setTimeout(() => {
      setAnimating("out")
      setTimeout(() => {
        setVisible(false)
        setAnimating("idle")
        // Próxima notificação após 15s
        setTimeout(showNotification, 15000)
      }, 400)
    }, 4000)

    return () => clearTimeout(hideTimer)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-5 left-5 z-50"
      style={{
        animation: animating === "in"
          ? "notif-slide-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards"
          : animating === "out"
          ? "notif-slide-out 0.4s ease-in forwards"
          : undefined,
      }}
    >
      <div className="flex items-center gap-3 bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 shadow-2xl shadow-black/60 max-w-[280px]">
        {/* Imagem do curso */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border border-primary/40">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%204%2C%202026%2C%2008_52_22%20PM-SBND9FEZMCDxCXTG6X07nACx3I5yG1.png"
            alt="Domínio do Jiu-Jitsu"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col min-w-0">
          <span className="text-white text-xs font-semibold leading-tight truncate">
            {entry.name} comprou!
          </span>
          <span className="text-[#A0A0A0] text-[11px] leading-tight mt-0.5">
            {entry.time}
          </span>
        </div>

        {/* Barra de progresso */}
        <div
          className="absolute bottom-0 left-0 h-[2px] rounded-b-xl bg-primary"
          style={{ animation: "notif-progress 4s linear forwards" }}
        />
      </div>

      <style>{`
        @keyframes notif-slide-in {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes notif-slide-out {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-24px); }
        }
        @keyframes notif-progress {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  )
}
