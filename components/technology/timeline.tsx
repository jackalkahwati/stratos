import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const milestones = [
  {
    year: "2025",
    title: "Company Founded",
    description: "Stratos established with initial funding and core team assembly focused on hypersonic propulsion.",
  },
  {
    year: "2025",
    title: "AI-Driven Engine Design",
    description: "Leveraging advanced AI for rapid engine design optimization, CFD analysis, thermal modeling, and FEA validation.",
  },
  {
    year: "2025",
    title: "Helium System Integration",
    description: "Development of revolutionary helium-enhanced propulsion system for improved performance and thermal management.",
  },
  {
    year: "2026 Q1",
    title: "Wind Tunnel Testing",
    description: "Comprehensive wind tunnel testing campaign for engine validation and performance verification.",
  },
  {
    year: "2026 Q2",
    title: "System Integration",
    description: "Integration of combined-cycle engine components, helium injection system, and advanced control systems.",
  },
  {
    year: "2026 Q4",
    title: "First Flight Test",
    description: "Initial flight testing of the integrated propulsion system, validating our AI-driven design approach.",
  },
]

export function TechnologyTimeline() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Development Timeline</h2>
        <p className="mt-4 text-muted-foreground">Key milestones in our journey to revolutionize space access.</p>
      </div>
      <div className="mx-auto mt-16 max-w-3xl">
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative">
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="h-4 w-4 rounded-full bg-primary" />
                </div>
                <Card className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
                  <CardHeader>
                    <CardTitle className="flex items-baseline gap-2">
                      <span className="text-primary">{milestone.year}</span>
                      <span className="text-lg">{milestone.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

