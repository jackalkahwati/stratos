import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Calendar, MessageSquare, CheckSquare, Building2, Code, Briefcase } from "lucide-react"

const jobs = [
  {
    id: "job1",
    title: "Senior Developer",
    company: "Tech Corp",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    description: "Full-stack development and system architecture",
    workload: "40 hours/week",
  },
  {
    id: "job2",
    title: "Lead Engineer",
    company: "Innovation Inc",
    icon: Building2,
    color: "from-purple-500 to-purple-600",
    description: "Technical leadership and project management",
    workload: "35 hours/week",
  },
  {
    id: "job3",
    title: "Technical Architect",
    company: "Future Systems",
    icon: Briefcase,
    color: "from-green-500 to-green-600",
    description: "System design and architecture planning",
    workload: "30 hours/week",
  },
]

const workspaceFeatures = [
  {
    icon: Mail,
    title: "Email Management",
    description: "Separate inboxes and signatures for each role",
    details: [
      "Role-specific email addresses",
      "Custom signatures per position",
      "Automated email routing",
      "Context-aware responses",
    ],
  },
  {
    icon: Calendar,
    title: "Smart Calendar",
    description: "Intelligent scheduling and conflict prevention",
    details: [
      "Automatic conflict detection",
      "Smart meeting scheduling",
      "Focus time blocking",
      "Time zone management",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Isolated chat instances for each position",
    details: ["Separate Slack workspaces", "Teams organization", "Context switching", "Message threading"],
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Role-specific task tracking and organization",
    details: ["Separate task lists", "Priority management", "Deadline tracking", "Progress monitoring"],
  },
]

export default function WorkspaceDemo() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-5xl">
        <Tabs defaultValue="job1" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            {jobs.map((job) => (
              <TabsTrigger
                key={job.id}
                value={job.id}
                className="relative overflow-hidden data-[state=active]:bg-gradient-to-r data-[state=active]:text-primary-foreground"
                style={{
                  "--tw-gradient-from": job.color.split(" ")[0].split("-")[1],
                  "--tw-gradient-to": job.color.split(" ")[2],
                }}
              >
                <div className="flex items-center gap-3 p-1">
                  <job.icon className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">{job.title}</div>
                    <div className="text-sm opacity-90">{job.company}</div>
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {jobs.map((job) => (
            <TabsContent key={job.id} value={job.id}>
              <div className="mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <job.icon className="h-6 w-6" />
                      {job.title} at {job.company}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{job.description}</p>
                    <p className="text-sm font-medium text-primary">{job.workload}</p>
                  </CardHeader>
                </Card>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {workspaceFeatures.map((feature) => (
                  <Card key={feature.title}>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="rounded-lg bg-primary/10 p-2">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2 text-sm">
                        {feature.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

