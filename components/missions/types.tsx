import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Box, Shield, Users } from "lucide-react"

const missionTypes = [
  {
    icon: Rocket,
    title: "Orbital Access",
    description: "Rapid and reliable access to various orbital altitudes for satellite deployment and space logistics.",
    capabilities: [
      "LEO, MEO, and GEO orbits",
      "Multiple payload configurations",
      "Rapid deployment timelines",
      "Return capability",
    ],
  },
  {
    icon: Box,
    title: "Point-to-Point Transport",
    description: "Ultra-fast global delivery for high-priority cargo and time-critical shipments.",
    capabilities: [
      "2-hour global reach",
      "Temperature-controlled payload bay",
      "Real-time tracking",
      "Flexible cargo configurations",
    ],
  },
  {
    icon: Shield,
    title: "Defense Operations",
    description: "Supporting national security with rapid response and strategic capabilities.",
    capabilities: [
      "Quick-reaction deployment",
      "Secure communications",
      "Mission flexibility",
      "Global reach capability",
    ],
  },
  {
    icon: Users,
    title: "Research & Tourism",
    description: "Enabling scientific research and commercial space experiences.",
    capabilities: [
      "Microgravity environment",
      "Suborbital flights",
      "Research payload integration",
      "Passenger accommodations",
    ],
  },
]

export function MissionTypes() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mission Types</h2>
        <p className="mt-4 text-muted-foreground">
          Our versatile spaceplane platform supports a wide range of missions across commercial, scientific, and defense
          sectors.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
        {missionTypes.map((type) => (
          <Card key={type.title}>
            <CardHeader>
              <type.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{type.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{type.description}</p>
              <ul className="space-y-2">
                {type.capabilities.map((capability) => (
                  <li key={capability} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

