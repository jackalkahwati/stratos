import { PressHero } from "@/components/company/press-hero"
import { PressReleases } from "@/components/company/press-releases"
import { MediaKit } from "@/components/company/media-kit"
import { PressContact } from "@/components/company/press-contact"

export default function PressPage() {
  return (
    <main className="min-h-screen">
      <PressHero />
      <PressReleases />
      <MediaKit />
      <PressContact />
    </main>
  )
}

