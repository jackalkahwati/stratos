import { FeatureHero } from "@/components/features/feature-hero"
import { FeatureGrid } from "@/components/features/feature-grid"
import { FeatureTabs } from "@/components/features/feature-tabs"
import { CoreBenefits } from "@/components/features/core-benefits"
import { IntegrationCloud } from "@/components/features/integration-cloud"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <FeatureHero />
      <FeatureTabs />
      <FeatureGrid />
      <CoreBenefits />
      <IntegrationCloud />
    </main>
  )
}

