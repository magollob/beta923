"use client"

import Image from "next/image"
import { useRef, useEffect, useState, useCallback } from "react"

const testimonials = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feed1-ThBEDmiuBCAnfmn2Xv0Nz8P8h3Ysv5.webp",
    alt: "Depoimento de aluno — conteudo pratico que funciona, melhorou nos treinos e competicoes",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feed2-KcEM1tZldGGVZIGHrSdSXG3jD7Pxub.webp",
    alt: "Depoimento Juliana Martins — aulas transformaram sua relacao com o Jiu-Jitsu",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feed3-pRd6q3QxqLjNUIXb1lJMRLAtSlo92J.webp",
    alt: "Depoimento Gustavo Lima — material de excelente qualidade, kimono leve e resistente",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feed4-qkR6KaP8leQEcVu5lQbKOJKpzPWq0k.webp",
    alt: "Depoimento Guilherme Souza — aplicou 2 finalizacoes no treino apos o curso",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feed5-O2UO9vQOpzvIfw7LONvalcXJsOLDvQ.webp",
    alt: "Depoimento Rafael Almeida — metodo pratico e objetivo, referencia no Jiu-Jitsu",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feed6-DMkQkCEy7QGyHoM8mhqNRqomCrpj88.webp",
    alt: "Depoimento Bruno Lima — mestre passou a mesma posicao ensinada nas aulas",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feed7-n3djNWYlOuBPRdE4BhcNtrAx12uJjK.webp",
    alt: "Depoimento Felipe Andrade — curtindo bastante o curso, agradecido pelo conteudo",
  },
]

const BANNER_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/faixa22-WLGDPxi4ccFscV1ITYWtc7x1WZga4C.png"

// Triplicamos para garantir loop suave sem salto visivel
const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials]

export function SocialProofSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const scrollStartX = useRef(0)
  const currentTranslate = useRef(0)
  const animationRef = useRef<number | null>(null)

  // Calcula a largura de 1/3 do track (um set completo de testimonials)
  const getOneSetWidth = useCallback(() => {
    if (!trackRef.current) return 0
    return trackRef.current.scrollWidth / 3
  }, [])

  // Auto-scroll suave
  useEffect(() => {
    if (isPaused || isDragging) return

    const speed = 0.5 // pixels por frame
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime
      lastTime = currentTime

      currentTranslate.current -= speed * (delta / 16.67) // normaliza para 60fps

      const oneSetWidth = getOneSetWidth()
      // Loop infinito: quando passa de um set, reseta
      if (Math.abs(currentTranslate.current) >= oneSetWidth) {
        currentTranslate.current = currentTranslate.current + oneSetWidth
      }
      // Se arrastou para a direita alem do inicio
      if (currentTranslate.current > 0) {
        currentTranslate.current = currentTranslate.current - oneSetWidth
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused, isDragging, getOneSetWidth])

  // Handlers para mouse
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    setIsPaused(true)
    dragStartX.current = e.clientX
    scrollStartX.current = currentTranslate.current
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return
    const deltaX = e.clientX - dragStartX.current
    currentTranslate.current = scrollStartX.current + deltaX

    const oneSetWidth = getOneSetWidth()
    // Mantém o loop enquanto arrasta
    if (Math.abs(currentTranslate.current) >= oneSetWidth) {
      currentTranslate.current = currentTranslate.current + oneSetWidth
      scrollStartX.current = scrollStartX.current + oneSetWidth
    }
    if (currentTranslate.current > 0) {
      currentTranslate.current = currentTranslate.current - oneSetWidth
      scrollStartX.current = scrollStartX.current - oneSetWidth
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`
    }
  }, [isDragging, getOneSetWidth])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setIsPaused(false)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false)
      setIsPaused(false)
    }
  }, [isDragging])

  // Handlers para touch
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true)
    setIsPaused(true)
    dragStartX.current = e.touches[0].clientX
    scrollStartX.current = currentTranslate.current
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return
    const deltaX = e.touches[0].clientX - dragStartX.current
    currentTranslate.current = scrollStartX.current + deltaX

    const oneSetWidth = getOneSetWidth()
    if (Math.abs(currentTranslate.current) >= oneSetWidth) {
      currentTranslate.current = currentTranslate.current + oneSetWidth
      scrollStartX.current = scrollStartX.current + oneSetWidth
    }
    if (currentTranslate.current > 0) {
      currentTranslate.current = currentTranslate.current - oneSetWidth
      scrollStartX.current = scrollStartX.current - oneSetWidth
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`
    }
  }, [isDragging, getOneSetWidth])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    setIsPaused(false)
  }, [])
  return (
    <section className="bg-background relative overflow-hidden py-12 md:py-16">
      {/* Titulo e Subtitulo */}
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <div className="inline-block bg-black/80 backdrop-blur-sm px-8 py-6 rounded-lg border border-primary/30 mb-4">
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground">
              Depoimentos de <span className="text-primary drop-shadow-[0_0_20px_rgba(0,200,83,0.6)]">Alunos</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">Veja o que nossos alunos estao dizendo</p>
        </div>
      </div>

      {/* Carrossel infinito com controle de arraste */}
      <div 
        className="relative mb-0 overflow-hidden select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div 
          ref={trackRef}
          className="carousel-track"
          style={{ transform: "translateX(0px)" }}
        >
          {loopedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="carousel-item"
            >
              <div className="rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-colors duration-300">
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  width={320}
                  height={640}
                  className="w-full h-auto"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Gradientes laterais */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      {/* Faixa22 - Banner de estatisticas — imediatamente abaixo do carrossel */}
      <div className="w-full overflow-hidden bg-black">
        <div className="banner-track">
          <div className="banner-item">
            <Image
              src={BANNER_URL}
              alt="93+ Alunos Ativos | 4.9 Avaliacao Media | 98% de Satisfacao | Acesso as Aulas 24/7"
              width={1200}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
              unoptimized
            />
          </div>
          <div className="banner-item">
            <Image
              src={BANNER_URL}
              alt="93+ Alunos Ativos | 4.9 Avaliacao Media | 98% de Satisfacao | Acesso as Aulas 24/7"
              width={1200}
              height={60}
              className="h-12 md:h-14 w-auto"
              unoptimized
            />
          </div>
        </div>
      </div>

      <style>{`
        /* Carrossel de depoimentos - sem animation CSS, controlado por JS */
        .carousel-track {
          display: flex;
          gap: 16px;
          width: max-content;
          will-change: transform;
        }

        @media (min-width: 768px) {
          .carousel-track {
            gap: 24px;
          }
        }

        .carousel-item {
          flex-shrink: 0;
          width: 260px;
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .carousel-item {
            width: 320px;
          }
        }

        /* Faixa22 */
        @keyframes banner-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .banner-track {
          display: flex;
          width: max-content;
          animation: banner-scroll 25s linear infinite;
        }

        .banner-item {
          flex-shrink: 0;
        }
      `}</style>
    </section>
  )
}
