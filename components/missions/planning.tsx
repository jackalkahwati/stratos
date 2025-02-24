import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Clipboard, Users } from "lucide-react"

const planningSteps = [
  {
    icon: Calendar,
    title: "Mission Scheduling",
    description: "Select your preferred launch window and mission parameters.",
    action: "View Calendar",
  },
  {
    icon: Clipboard,
    title: "Requirements Review",
    description: "Define payload specifications and mission objectives.",
    action: "Start Process",
  },
  {
    icon: Users,
    title: "Integration Planning",
    description: "Coordinate with our team for payload integration and testing.",
    action: "Meet Team",
  },
  {
    icon: Clock,
    title: "Timeline Development",
    description: "Establish detailed mission timeline and contingency plans.",
    action: "Learn More",
  },
]

export function MissionPlanning() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mission Planning</h2>
        <p className="mt-4 text-muted-foreground">
          Our streamlined mission planning process ensures efficient and reliable execution of your objectives.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
        {planningSteps.map((step) => (
          <Card key={step.title}>
            <CardHeader>
              <step.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{step.description}</p>
              <Button variant="outline" className="w-full">
                {step.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button size="lg">Start Planning Your Mission</Button>
      </div>
    </section>
  )
}

