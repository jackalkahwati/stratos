import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Calendar, FileText } from "lucide-react"

const integrationCategories = [
  {
    icon: Mail,
    title: "Email & Calendar",
    description: "Connect your email and calendar services",
    apps: ["Gmail", "Outlook", "Google Calendar", "Apple Calendar"],
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Integrate with your messaging platforms",
    apps: ["Slack", "Microsoft Teams", "Discord"],
  },
  {
    icon: Calendar,
    title: "Project Management",
    description: "Connect your project management tools",
    apps: ["Asana", "Trello", "Jira", "Monday.com"],
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Link your documentation platforms",
    apps: ["Notion", "Confluence", "Google Docs"],
  },
]

export function IntegrationsPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Integrations</h1>
        <p className="mb-16 text-muted-foreground">
          Connect Clone with your favorite tools to create a seamless workflow across all your applications.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {integrationCategories.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <category.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                {category.apps.map((app) => (
                  <span key={app} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    {app}
                  </span>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                View Integrations
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

