import { Card, CardContent } from "@/components/ui/card"

const integrations = [
  {
    category: "Email & Calendar",
    apps: ["Gmail", "Outlook", "Google Calendar", "iCal"],
  },
  {
    category: "Communication",
    apps: ["Slack", "Microsoft Teams"],
  },
  {
    category: "Project Management",
    apps: ["Notion", "Asana", "Trello", "Jira"],
  },
  {
    category: "Development",
    apps: ["GitHub"],
  },
]

export function IntegrationCloud() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Seamless Integrations</h2>
        <p className="mt-4 text-muted-foreground">
          Clone works with your existing tools to create a unified workflow experience.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
        {integrations.map((category) => (
          <Card key={category.category}>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">{category.category}</h3>
              <div className="flex flex-wrap gap-4">
                {category.apps.map((app) => (
                  <div
                    key={app}
                    className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium"
                  >
                    {app}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

