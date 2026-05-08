import { HeroSection } from "@/components/hero-section"
import { InstructorSection } from "@/components/instructor-section"
import { CourseModulesSection } from "@/components/course-modules-section"
import { WhatYouGetSection } from "@/components/what-you-get-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { CTASection } from "@/components/cta-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { BuyerNotification } from "@/components/buyer-notification"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InstructorSection />
      <CourseModulesSection />
      <WhatYouGetSection />
      <SocialProofSection />
      <CTASection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <BuyerNotification />
    </main>
  )
}
