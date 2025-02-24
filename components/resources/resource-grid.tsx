import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Video, FileText, Users } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API references",
    icon: BookOpen,
    items: ["Getting Started Guide", "API Documentation", "Integration Guides", "Best Practices"],
    href: "/docs",
  },
  {
    title: "Video Tutorials",
    description: "Learn through step-by-step videos",
    icon: Video,
    items: ["Quick Start Videos", "Feature Walkthroughs", "Advanced Topics", "Case Studies"],
    href: "/tutorials",
  },
  {
    title: "Blog & Articles",
    description: "Tips, updates, and success stories",
    icon: FileText,
    items: ["Product Updates", "User Stories", "Tips & Tricks", "Industry Insights"],
    href: "/blog",
  },
  {
    title: "Community",
    description: "Connect with other Clone users",
    icon: Users,
    items: ["Discussion Forums", "User Groups", "Events Calendar", "Community Guidelines"],
    href: "/community",
  },
]

export function ResourceGrid() {
  return (
    <section className="container py-12">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {resources.map((resource) => (
          <Link key={resource.title} href={resource.href}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <resource.icon className="h-8 w-8 text-primary" />
                <CardTitle className="mt-4">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {resource.items.map((item) => (
                    <li key={item} className="text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

