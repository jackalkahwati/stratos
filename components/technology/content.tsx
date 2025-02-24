import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Zap, Gauge, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Combined-Cycle Propulsion",
    description:
      "Revolutionary engine system combining ramjet, scramjet, and rocket propulsion for efficient operation from sea level to orbit.",
    details: [
      "Seamless mode transitions",
      "Optimized fuel efficiency",
      "Wide operational envelope",
      "Integrated thermal management",
    ],
  },
  {
    icon: Shield,
    title: "Advanced Materials",
    description: "Cutting-edge materials and thermal protection systems enabling sustained hypersonic flight.",
    details: ["Ceramic matrix composites", "Active cooling systems", "High-temperature alloys", "Advanced coatings"],
  },
  {
    icon: Gauge,
    title: "Flight Control Systems",
    description: "State-of-the-art avionics and control systems for precise operation across all flight regimes.",
    details: ["Adaptive flight control", "Multi-mode navigation", "Autonomous operations", "Real-time optimization"],
  },
]

export function TechnologyContent() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Core Technologies</h2>
        <p className="mt-4 text-muted-foreground">
          Our spaceplane integrates multiple breakthrough technologies to achieve unprecedented performance and
          reliability.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col">
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="mb-4 text-muted-foreground">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{detail}</span>
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

