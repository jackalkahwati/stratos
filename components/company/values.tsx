import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Zap, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "User-Focused",
    description: "Everything we do starts with our users' needs and success.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "We prioritize the security and privacy of our users' data.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly push boundaries to create better solutions.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of shared knowledge and support.",
  },
]

export function Values() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {values.map((value) => (
          <Card key={value.title}>
            <CardHeader>
              <value.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

