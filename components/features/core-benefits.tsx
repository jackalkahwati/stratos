import { Brain, Zap, Eye, SwitchCamera } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    icon: Brain,
    title: "Reduced cognitive load",
    description: "Let Clone handle routine decisions and task management, freeing your mind for strategic thinking.",
  },
  {
    icon: Zap,
    title: "Faster task completion",
    description: "Automate repetitive tasks and streamline workflows to get more done in less time.",
  },
  {
    icon: Eye,
    title: "Better detail tracking",
    description: "Never miss important information or deadlines with Clone's comprehensive tracking system.",
  },
  {
    icon: SwitchCamera,
    title: "Context switching elimination",
    description: "Stay focused on important work while Clone manages transitions between tasks and tools.",
  },
]

export function CoreBenefits() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Core Benefits</h2>
        <p className="mt-4 text-muted-foreground">
          Experience the transformative power of having a digital twin handle your routine work.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
        {benefits.map((benefit) => (
          <Card key={benefit.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <benefit.icon className="h-6 w-6 text-primary" />
                {benefit.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{benefit.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

