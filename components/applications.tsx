import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function Applications() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Applications</h2>
          <p className="mt-4 text-muted-foreground">
            Discover how our spaceplane technology is revolutionizing various industries
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Satellite Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Rapid deployment and maintenance of satellite constellations for communications, Earth observation, and more.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Space Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Enabling scientific experiments in microgravity environments with frequent access to space.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Space Tourism</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Making space travel accessible for private citizens with comfortable and safe suborbital flights.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cargo Transport</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ultra-fast global delivery for high-priority cargo and time-sensitive materials.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Defense & Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Supporting national security missions with rapid response capabilities and global reach.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Space Manufacturing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Facilitating production of unique materials and products that benefit from zero-gravity conditions.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 