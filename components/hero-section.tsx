import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full">
      {/* Desktop */}
      <div className="hidden md:block w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-4tzViWpIjdhl4pez8y9hm3NEug3kYm.webp"
          alt="Dominio do Jiu-Jitsu do Zero ao Avancado — Jefferson Instrutor"
          width={1920}
          height={800}
          className="w-full h-auto"
          priority
          unoptimized
        />
      </div>

      {/* Mobile */}
      <div className="block md:hidden w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bannertop-QbM16uktYQ4Kd1jZ2A6hchW6PDb8TA.webp"
          alt="Dominio do Jiu-Jitsu do Zero ao Avancado — Jefferson Instrutor"
          width={800}
          height={1200}
          className="w-full h-auto"
          priority
          unoptimized
        />
      </div>
    </section>
  )
}
