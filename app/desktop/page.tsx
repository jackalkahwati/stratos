import { DesktopHero } from "@/components/product/desktop-hero"
import { DesktopFeatures } from "@/components/product/desktop-features"
import { SystemRequirements } from "@/components/product/system-requirements"
import { DesktopDownload } from "@/components/product/desktop-download"

export default function DesktopPage() {
  return (
    <main className="min-h-screen">
      <DesktopHero />
      <DesktopFeatures />
      <SystemRequirements />
      <DesktopDownload />
    </main>
  )
}

