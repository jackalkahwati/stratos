import { MobileHero } from "@/components/product/mobile-hero"
import { MobileFeatures } from "@/components/product/mobile-features"
import { AppScreenshots } from "@/components/product/app-screenshots"
import { DownloadApp } from "@/components/product/download-app"

export default function MobilePage() {
  return (
    <main className="min-h-screen">
      <MobileHero />
      <MobileFeatures />
      <AppScreenshots />
      <DownloadApp />
    </main>
  )
}

