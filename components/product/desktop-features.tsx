import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Globe, Lock, Zap } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Native Performance",
    description: "Optimized for your operating system with fast, native performance.",
  },
  {
    icon: Globe,
    title: "Offline Support",
    description: "Work without internet connection and sync when back online.",
  },
  {
    icon: Lock,
    title: "Local Security",
    description: "Enhanced security with local data encryption and storage.",
  },
  {
    icon: Zap,
    title: "System Integration",
    description: "Deep integration with your operating system for better productivity.",
  },
]

export function DesktopFeatures() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Desktop Features</h2>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
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

