import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const specifications = {
  performance: [
    { label: "Maximum Speed", value: "Mach 10+" },
    { label: "Service Ceiling", value: "100+ km" },
    { label: "Range", value: "Global" },
    { label: "Payload Capacity", value: "2,500 kg to LEO" },
  ],
  dimensions: [
    { label: "Length", value: "55 meters" },
    { label: "Wingspan", value: "27 meters" },
    { label: "Height", value: "8 meters" },
    { label: "Empty Weight", value: "75,000 kg" },
  ],
  propulsion: [
    { label: "Engine Type", value: "Combined-Cycle" },
    { label: "Thrust (Sea Level)", value: "850 kN" },
    { label: "Thrust (Vacuum)", value: "1,200 kN" },
    { label: "Specific Impulse", value: "3,500-4,500 sec" },
  ],
}

export function TechnologySpecs() {
  return (
    <section className="container py-24 bg-muted/50">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Specifications</h2>
        <p className="mt-4 text-muted-foreground">
          Detailed specifications of our spaceplane's capabilities and dimensions.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              {specifications.performance.map((spec) => (
                <div key={spec.label} className="flex justify-between">
                  <dt className="text-muted-foreground">{spec.label}</dt>
                  <dd className="font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dimensions</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              {specifications.dimensions.map((spec) => (
                <div key={spec.label} className="flex justify-between">
                  <dt className="text-muted-foreground">{spec.label}</dt>
                  <dd className="font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Propulsion</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              {specifications.propulsion.map((spec) => (
                <div key={spec.label} className="flex justify-between">
                  <dt className="text-muted-foreground">{spec.label}</dt>
                  <dd className="font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

