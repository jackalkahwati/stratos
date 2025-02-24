import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Hash, Bell, Lightbulb, PenToolIcon as Tool, Users, Star } from "lucide-react"

const channels = [
  {
    icon: Hash,
    name: "general",
    description: "General discussion and community chat",
  },
  {
    icon: Bell,
    name: "announcements",
    description: "Important updates and announcements",
  },
  {
    icon: Lightbulb,
    name: "tips-and-tricks",
    description: "Share your best practices and learn from others",
  },
  {
    icon: Tool,
    name: "support",
    description: "Get help with technical issues",
  },
  {
    icon: Users,
    name: "introductions",
    description: "Introduce yourself to the community",
  },
  {
    icon: Star,
    name: "showcase",
    description: "Share your success stories",
  },
]

export function DiscordChannels() {
  return (
    <section className="container py-12">
      <h2 className="mb-8 text-center text-2xl font-bold">Popular Channels</h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {channels.map((channel) => (
          <Card key={channel.name}>
            <CardHeader className="flex flex-row items-center gap-4">
              <channel.icon className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-lg">#{channel.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

