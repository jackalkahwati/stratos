import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Zap, Users, Clock } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description: "Get instant responses from the community",
  },
  {
    icon: Zap,
    title: "Quick Support",
    description: "Direct access to our support team",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Connect with thousands of Clone users",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Community members from all time zones",
  },
]

export function DiscordFeatures() {
  return (
    <section className="container py-24">
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

