import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Rocket, Globe } from "lucide-react"

const visionCards = [
  {
    icon: Target,
    title: "Mission",
    description: "To revolutionize space access through innovative hypersonic technology and reusable spaceplanes.",
    points: [
      "Develop breakthrough propulsion systems",
      "Create reliable reusable platforms",
      "Enable rapid space access",
      "Reduce launch costs",
    ],
  },
  {
    icon: Rocket,
    title: "Vision",
    description: "A future where space access is as routine and reliable as modern air travel.",
    points: [
      "Global point-to-point transport",
      "Regular orbital access",
      "Sustainable space operations",
      "Economic space utilization",
    ],
  },
  {
    icon: Globe,
    title: "Impact",
    description: "Transforming the space industry through innovation and sustainable practices.",
    points: ["Environmental responsibility", "Industry advancement", "Economic growth", "Global connectivity"],
  },
]

export function Vision() {
  return (
    <section className="container py-24 bg-muted/50">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Vision</h2>
        <p className="mt-4 text-muted-foreground">
          Driving the future of space access with innovative technology and sustainable practices.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
        {visionCards.map((card) => (
          <Card key={card.title} className="flex flex-col">
            <CardHeader>
              <card.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="mb-4 text-muted-foreground">{card.description}</p>
              <ul className="space-y-2">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
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

