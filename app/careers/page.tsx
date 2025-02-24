import { CareersHero } from "@/components/company/careers-hero"
import { OpenPositions } from "@/components/company/open-positions"
import { Benefits } from "@/components/company/benefits"
import { Culture } from "@/components/company/culture"

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <CareersHero />
      <OpenPositions />
      <Benefits />
      <Culture />
    </main>
  )
}

