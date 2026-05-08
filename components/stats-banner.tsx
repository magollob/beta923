"use client"

import Image from "next/image"

const BANNER_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/faixa22-WLGDPxi4ccFscV1ITYWtc7x1WZga4C.png"

export function StatsBanner() {
  return (
    <div className="w-full overflow-hidden bg-black mt-8 md:mt-12">
      <style>{`
        @keyframes stats-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .stats-scroll-track {
          display: flex;
          width: max-content;
          animation: stats-scroll 30s linear infinite;
          will-change: transform;
        }
        .stats-scroll-item {
          flex-shrink: 0;
          height: 48px;
        }
        .stats-scroll-item img {
          height: 100%;
          width: auto;
          display: block;
        }
      `}</style>

      {/* Mobile: carrossel lento mostrando imagem completa sem cortes */}
      <div className="block md:hidden">
        <div className="stats-scroll-track">
          {/* Duplicamos a imagem para criar o efeito infinito */}
          <div className="stats-scroll-item">
            <Image
              src={BANNER_URL}
              alt="93+ Alunos Ativos | 4.9 Avaliacao Media | 98% de Satisfacao | Acesso as Aulas 24/7"
              width={1000}
              height={48}
              className="h-full w-auto object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="stats-scroll-item">
            <Image
              src={BANNER_URL}
              alt="93+ Alunos Ativos | 4.9 Avaliacao Media | 98% de Satisfacao | Acesso as Aulas 24/7"
              width={1000}
              height={48}
              className="h-full w-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Desktop: imagem estatica full-width */}
      <div className="hidden md:block">
        <Image
          src={BANNER_URL}
          alt="93+ Alunos Ativos | 4.9 Avaliacao Media | 98% de Satisfacao | Acesso as Aulas 24/7"
          width={1920}
          height={60}
          className="w-full h-auto object-contain"
          priority
          unoptimized
        />
      </div>
    </div>
  )
}
