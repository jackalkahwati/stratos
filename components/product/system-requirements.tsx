import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const requirements = {
  windows: ["Windows 10 or later", "4GB RAM minimum", "1GB free disk space", "Intel Core i3 or equivalent"],
  mac: ["macOS 10.15 or later", "4GB RAM minimum", "1GB free disk space", "Intel or Apple Silicon processor"],
}

export function SystemRequirements() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">System Requirements</h2>
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Windows</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {requirements.windows.map((req) => (
                <li key={req} className="text-muted-foreground">
                  • {req}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>macOS</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {requirements.mac.map((req) => (
                <li key={req} className="text-muted-foreground">
                  • {req}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

