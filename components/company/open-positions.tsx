import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const positions = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
  },
]

export function OpenPositions() {
  return (
    <section className="container py-12">
      <h2 className="mb-12 text-center text-3xl font-bold">Open Positions</h2>
      <div className="mx-auto grid max-w-4xl gap-6">
        {positions.map((position) => (
          <Card key={position.title}>
            <CardHeader>
              <CardTitle>{position.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{position.department}</p>
                <p className="text-sm text-muted-foreground">
                  {position.location} • {position.type}
                </p>
              </div>
              <Button>Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

