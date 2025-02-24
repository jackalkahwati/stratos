import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Layers, Calendar, MessageSquare, Repeat, SwitchCamera } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Job Separation",
    description: "Keep each role completely isolated",
    features: [
      "Dedicated workspace per job",
      "Separate email management",
      "Different communication styles",
      "Isolated task tracking",
      "Prevent cross-job contamination",
    ],
  },
  {
    icon: Calendar,
    title: "Smart Calendar",
    description: "Never double-book or miss a meeting",
    features: [
      "Detect meeting conflicts",
      "Block focus time per job",
      "Smart scheduling",
      "Meeting summaries",
      "Time zone management",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication Control",
    description: "Manage multiple professional identities",
    features: [
      "Multiple email accounts",
      "Job-specific response styles",
      "Context-aware auto-replies",
      "Smart notification routing",
      "Separate chat instances",
    ],
  },
  {
    icon: Repeat,
    title: "Task Automation",
    description: "Let Clone handle routine work",
    features: [
      "Automate repetitive tasks",
      "Handle routine emails",
      "Generate standard documents",
      "Process regular reports",
      "Manage multiple standups",
    ],
  },
  {
    icon: SwitchCamera,
    title: "Context Switching",
    description: "Switch roles seamlessly",
    features: [
      "Quick profile switching",
      "Automated workspace setup",
      "Right tools for each job",
      "Clear work boundaries",
      "Time tracking per role",
    ],
  },
]

export default function Features() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for Job Stackers</h2>
        <p className="mt-4 text-muted-foreground">
          Everything you need to manage multiple remote positions efficiently and securely.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {feature.features.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

