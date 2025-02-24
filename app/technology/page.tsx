import { TechnologyHero } from "@/components/technology/hero"
import { TechnologyContent } from "@/components/technology/content"
import { TechnologySpecs } from "@/components/technology/specs"
import { TechnologyTimeline } from "@/components/technology/timeline"

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <TechnologyHero />
      <TechnologyContent />
      <TechnologySpecs />
      <TechnologyTimeline />
    </main>
  )
}

