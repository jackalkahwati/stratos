import { ResourcesHero } from "@/components/resources/resources-hero"
import { ResourceGrid } from "@/components/resources/resource-grid"
import { Community } from "@/components/resources/community"
import { Support } from "@/components/resources/support"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <ResourcesHero />
      <ResourceGrid />
      <Community />
      <Support />
    </main>
  )
}

