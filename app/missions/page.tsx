import { MissionsHero } from "@/components/missions/hero"
import { MissionTypes } from "@/components/missions/types"
import { MissionCapabilities } from "@/components/missions/capabilities"
import { MissionPlanning } from "@/components/missions/planning"

export default function MissionsPage() {
  return (
    <main className="min-h-screen">
      <MissionsHero />
      <MissionTypes />
      <MissionCapabilities />
      <MissionPlanning />
    </main>
  )
}

