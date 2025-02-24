import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Calendar, MessageSquare, Zap } from "lucide-react"

const features = [
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay on top of important updates with context-aware notifications for each job.",
  },
  {
    icon: Calendar,
    title: "Calendar Management",
    description: "View and manage multiple work schedules from your phone.",
  },
  {
    icon: MessageSquare,
    title: "Quick Responses",
    description: "Reply to messages across different jobs with pre-set templates.",
  },
  {
    icon: Zap,
    title: "Instant Switching",
    description: "Switch between job contexts with a single tap.",
  },
]

export function MobileFeatures() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Mobile Features</h2>
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

