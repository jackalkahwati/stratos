import { PartnersHero } from "@/components/company/partners-hero"
import { PartnerTypes } from "@/components/company/partner-types"
import { PartnerShowcase } from "@/components/company/partner-showcase"
import { BecomePartner } from "@/components/company/become-partner"

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <PartnersHero />
      <PartnerTypes />
      <PartnerShowcase />
      <BecomePartner />
    </main>
  )
}

