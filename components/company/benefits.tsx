import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Globe, Clock, Laptop, GraduationCap, Smile } from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere in the world",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work when you're most productive",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health coverage",
  },
  {
    icon: Laptop,
    title: "Equipment Budget",
    description: "Get the tools you need to succeed",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "Continuous learning opportunities",
  },
  {
    icon: Smile,
    title: "Paid Time Off",
    description: "Generous vacation policy",
  },
]

export function Benefits() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Benefits</h2>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <Card key={benefit.title}>
            <CardHeader>
              <benefit.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{benefit.title}</CardTitle>
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

