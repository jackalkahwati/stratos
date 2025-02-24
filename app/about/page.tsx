import { AboutHero } from "@/components/about/hero"
import { AboutContent } from "@/components/about/content"
import { TeamSection } from "@/components/about/team"
import { Vision } from "@/components/about/vision"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutContent />
      <Vision />
      <TeamSection />
    </main>
  )
}

