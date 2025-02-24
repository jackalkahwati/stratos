import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export function MissionTypes() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Mission Types</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Satellite Deployment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Launch satellites into precise orbits with our efficient and reliable spaceplane system.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Scientific Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conduct microgravity experiments and space-based research with frequent access to space.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Space Tourism</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Experience the thrill of spaceflight with our comfortable and safe passenger missions.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

