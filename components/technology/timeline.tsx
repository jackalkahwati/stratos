import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Stratos established with initial funding and core team assembly.",
  },
  {
    year: "2021",
    title: "Engine Development",
    description: "Successful testing of subscale combined-cycle engine prototype.",
  },
  {
    year: "2022",
    title: "Materials Testing",
    description: "Validation of thermal protection system and structural materials.",
  },
  {
    year: "2023",
    title: "Subsystem Integration",
    description: "Integration and testing of major vehicle subsystems.",
  },
  {
    year: "2024",
    title: "First Prototype",
    description: "Completion of full-scale prototype vehicle assembly.",
  },
  {
    year: "2025",
    title: "Flight Testing",
    description: "Planned beginning of atmospheric flight test campaign.",
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

