import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const partners = [
  {
    name: "TechCorp Solutions",
    type: "Technology Partner",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Integration with project management tools",
  },
  {
    name: "Global Systems Inc",
    type: "Solution Partner",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Enterprise implementation specialists",
  },
  {
    name: "Future Work Labs",
    type: "Strategic Alliance",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Remote work innovation research",
  },
  {
    name: "Digital Partners Ltd",
    type: "Reseller",
    logo: "/placeholder.svg?height=80&width=200",
    description: "EMEA market distribution",
  },
]

export function PartnerShowcase() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Featured Partners</h2>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {partners.map((partner) => (
          <Card key={partner.name}>
            <CardHeader>
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={200}
                height={80}
                className="mb-4"
              />
              <CardTitle>{partner.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-sm text-primary">{partner.type}</p>
              <p className="text-muted-foreground">{partner.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

