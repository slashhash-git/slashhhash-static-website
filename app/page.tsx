import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ProductFeatures } from "@/components/product-features"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <ProductFeatures />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
