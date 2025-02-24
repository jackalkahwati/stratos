import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingTables } from "@/components/pricing/pricing-tables"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { EnterpriseCard } from "@/components/pricing/enterprise-card"

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingHero />
      <PricingTables />
      <EnterpriseCard />
      <PricingFAQ />
    </main>
  )
}

