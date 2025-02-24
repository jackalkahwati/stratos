import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Box, Shield, Users } from "lucide-react"

const applications = [
  {
    icon: Rocket,
    title: "Satellite Deployment & Space Logistics",
    description: "Rapid, reusable access to orbit.",
  },
  {
    icon: Box,
    title: "Hypersonic Cargo Transport",
    description: "Deliver payloads across the globe in minutes, not hours.",
  },
  {
    icon: Shield,
    title: "Defense & National Security",
    description: "Hypersonic reconnaissance, strike capabilities, and rapid-response space operations.",
  },
  {
    icon: Users,
    title: "Space Tourism & Research",
    description: "Suborbital and orbital flights for commercial and scientific exploration.",
  },
]

export default function Applications() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mission Applications</h2>
        <p className="mt-6 text-lg text-muted-foreground">
          The Stratos Spaceplane is designed for a wide range of applications, making it a versatile platform for both
          commercial and defense sectors.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
        {applications.map((app) => (
          <Card key={app.title}>
            <CardHeader>
              <app.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{app.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{app.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-2xl font-semibold">From Runway to Orbit – In Hours, Not Days.</p>
      </div>
    </section>
  )
}

