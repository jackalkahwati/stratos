import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, FileText } from "lucide-react"

const features = [
  {
    icon: Mail,
    title: "Email & Calendar",
    description: "Intelligent email handling and calendar optimization",
    features: ["Smart inbox organization", "Automated responses", "Meeting scheduling", "Follow-up tracking"],
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Centralized communication management",
    features: ["Message prioritization", "Smart notifications", "Meeting assistance", "Action item tracking"],
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "Smart document processing and organization",
    features: ["Auto-summarization", "Key point extraction", "Version control", "Format conversion"],
  },
]

export function FeatureGrid() {
  return (
    <section className="container py-12 sm:py-16">
      <div className="grid gap-8 md:grid-cols-3">
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

