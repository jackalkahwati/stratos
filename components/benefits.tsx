import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Shield, Clock, Layout } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Multiple Income Streams",
    description: "Maximize your earning potential by managing multiple positions effectively.",
  },
  {
    icon: Shield,
    title: "Risk Reduction",
    description: "Keep your jobs separate and secure with dedicated workspaces and clear boundaries.",
  },
  {
    icon: Clock,
    title: "Time Optimization",
    description: "Save hours each week by automating routine tasks across all your positions.",
  },
  {
    icon: Layout,
    title: "Clear Boundaries",
    description: "Maintain distinct work contexts and prevent any overlap between roles.",
  },
]

export default function Benefits() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Clone</h2>
        <p className="mt-4 text-muted-foreground">
          Designed specifically for professionals managing multiple remote positions.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
        {benefits.map((benefit) => (
          <Card key={benefit.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <benefit.icon className="h-6 w-6 text-primary" />
                {benefit.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

