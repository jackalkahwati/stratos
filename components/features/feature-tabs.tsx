"use client"
import { Mail, MessageSquare, FileText, Brain, BookOpen, Workflow } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = {
  email: {
    icon: Mail,
    title: "Email & Calendar Management",
    description: "Intelligent email handling and calendar optimization",
    features: [
      "Automated email responses",
      "Smart inbox organization",
      "Calendar scheduling and optimization",
      "Meeting management and follow-ups",
    ],
  },
  communication: {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Centralized communication management",
    features: [
      "Slack/Teams message handling",
      "Priority inbox system",
      "Smart notifications",
      "Meeting assistant (agenda prep, notes, action items)",
    ],
  },
  documents: {
    icon: FileText,
    title: "Document Intelligence",
    description: "Smart document processing and organization",
    features: [
      "Auto-summarization",
      "Key point extraction",
      "Document organization",
      "Format conversion",
      "Version control",
    ],
  },
  assistant: {
    icon: Brain,
    title: "AI Assistant",
    description: "Customizable AI behavior and automation",
    features: [
      "Customizable response tone",
      "Adjustable automation levels",
      "Auto-approval thresholds",
      "Speed vs accuracy settings",
    ],
  },
  knowledge: {
    icon: BookOpen,
    title: "Knowledge Management",
    description: "Personal knowledge organization and research",
    features: ["Personal wiki", "Connected notes", "Knowledge graphs", "Research assistance", "Content summarization"],
  },
  workflow: {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Custom automation and process optimization",
    features: ["Visual workflow builder", "Custom automation rules", "Multi-app integration", "Analytics dashboard"],
  },
}

export function FeatureTabs() {
  return (
    <section className="container py-12 sm:py-16">
      <Tabs defaultValue="email" className="space-y-8">
        <TabsList className="grid max-w-[600px] grid-cols-3 mx-auto md:grid-cols-6">
          {Object.entries(features).map(([key, { icon: Icon }]) => (
            <TabsTrigger
              key={key}
              value={key}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Icon className="h-5 w-5" />
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(features).map(([key, feature]) => (
          <TabsContent key={key} value={key}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="h-6 w-6" />
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

