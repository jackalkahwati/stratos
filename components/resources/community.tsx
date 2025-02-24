import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Calendar } from "lucide-react"

const communityFeatures = [
  {
    title: "Discussion Forums",
    description: "Connect with other professionals and share experiences",
    icon: MessageSquare,
  },
  {
    title: "User Groups",
    description: "Join industry-specific groups and networks",
    icon: Users,
  },
  {
    title: "Events",
    description: "Attend webinars, workshops, and meetups",
    icon: Calendar,
  },
]

export function Community() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Join Our Community</h2>
        <p className="mt-4 text-muted-foreground">
          Connect with thousands of professionals who are successfully managing multiple remote positions.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
        {communityFeatures.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

