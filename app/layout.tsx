import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CopyProtection } from "@/components/copy-protection"
import "./globals.css"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
})

const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "Jefferson Instrutor | Curso Completo de Jiu-Jitsu",
  description:
    "Aprenda Jiu-Jitsu com método profissional do Instrutor Jefferson. 9 módulos completos, do básico ao avançado. Acesso vitalício e certificado.",
  generator: "v0.app",
  openGraph: {
    title: "Domínio do Jiu-Jítsu",
    description: "Painel com vídeos aulas do zero ao avançado",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0iKkEFO4iVmjD59OOPU2CASkcsKKYA.png",
    url: "https://seu-dominio.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domínio do Jiu-Jítsu",
    description: "Painel com vídeos aulas do zero ao avançado",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0iKkEFO4iVmjD59OOPU2CASkcsKKYA.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${montserrat.variable} ${bebasNeue.variable} font-sans antialiased`}>
        <CopyProtection />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
