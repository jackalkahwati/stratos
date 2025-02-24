import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const capabilities = [
  {
    title: "Payload Integration",
    description: "Flexible payload bay with standardized interfaces for rapid integration of various cargo types.",
    image: "/placeholder.svg?height=400&width=600",
    specs: [
      "Payload bay dimensions: 4m x 3m x 8m",
      "Maximum payload mass: 2,500 kg",
      "Power and data interfaces available",
      "Environmental control systems",
    ],
  },
  {
    title: "Mission Planning",
    description: "Comprehensive mission planning and support services for all flight phases.",
    image: "/placeholder.svg?height=400&width=600",
    specs: [
      "Custom trajectory optimization",
      "Real-time mission control",
      "Weather monitoring",
      "Emergency response protocols",
    ],
  },
  {
    title: "Ground Operations",
    description: "Streamlined ground operations for rapid turnaround between missions.",
    image: "/placeholder.svg?height=400&width=600",
    specs: [
      "24-hour turnaround time",
      "Automated pre-flight checks",
      "Mobile ground support equipment",
      "Worldwide deployment capability",
    ],
  },
]

export function MissionCapabilities() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Operational Capabilities</h2>
        <p className="mt-4 text-muted-foreground">
          End-to-end mission support with flexible payload integration and rapid turnaround times.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-5xl space-y-12">
        {capabilities.map((capability, index) => (
          <Card key={capability.title}>
            <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="relative min-h-[300px]">
                <Image
                  src={capability.image || "/placeholder.svg"}
                  alt={capability.title}
                  fill
                  className="object-cover rounded-t-lg md:rounded-l-lg"
                />
              </div>
              <div className="p-6">
                <CardHeader>
                  <CardTitle>{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

