import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ProductFeatures } from "@/components/product-features"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import { BusinessOverview } from "@/components/business-overview"
import { ProductStage } from "@/components/product-stage"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BusinessOverview />
        <SolutionsSection />
        <ProductFeatures />
        <ProductStage />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
