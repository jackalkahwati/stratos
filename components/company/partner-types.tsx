import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Handshake, Building2, Wrench, Globe } from "lucide-react"

const partnerTypes = [
  {
    icon: Building2,
    title: "Technology Partners",
    description: "Integrate your solutions with Clone to extend functionality and reach new markets.",
  },
  {
    icon: Wrench,
    title: "Solution Partners",
    description: "Implement and customize Clone for enterprise clients.",
  },
  {
    icon: Globe,
    title: "Resellers",
    description: "Distribute Clone in your region or vertical market.",
  },
  {
    icon: Handshake,
    title: "Strategic Alliances",
    description: "Join forces to create innovative solutions for remote work management.",
  },
]

export function PartnerTypes() {
  return (
    <section className="container py-12">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {partnerTypes.map((type) => (
          <Card key={type.title}>
            <CardHeader>
              <type.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{type.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{type.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

