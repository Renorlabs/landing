import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ComparisonSection } from "@/components/comparison-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { PricingSection } from "@/components/pricing-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { AchievementsSection } from "@/components/achievements-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AchievementsSection/>
      <ServicesSection />
      <PricingSection />
      <HowItWorksSection />
      <ComparisonSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
