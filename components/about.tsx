import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Check } from "lucide-react"

const features = [
  {
    title: "Combined-Cycle Propulsion",
    description:
      "Ramjet for subsonic/supersonic speeds, scramjet for hypersonic acceleration, and rocket for orbital insertion.",
  },
  {
    title: "Horizontal Takeoff & Landing",
    description: "No need for complex launch infrastructure.",
  },
  {
    title: "High Flight Cadence",
    description: "Designed for rapid reusability, cutting per-launch costs.",
  },
  {
    title: "Versatile Mission Profile",
    description: "From orbital transport to hypersonic cargo delivery and defense applications.",
  },
]

export default function About() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Stratos</h2>
        <p className="mt-6 text-lg text-muted-foreground">
          At Stratos, we're building a revolutionary spaceplane that combines the best of aerospace and rocket
          engineering. Our vehicle leverages a multi-mode propulsion system, enabling efficient atmospheric flight,
          rapid space access, and reusability—all from a standard runway.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

