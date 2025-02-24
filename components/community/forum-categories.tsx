import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, Lightbulb, PenToolIcon as Tool, Headphones, Newspaper } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    icon: Users,
    title: "General Discussion",
    description: "Connect with the community and introduce yourself",
    topics: 234,
    posts: 1543,
  },
  {
    icon: Briefcase,
    title: "Job Management",
    description: "Tips and strategies for managing multiple positions",
    topics: 189,
    posts: 892,
  },
  {
    icon: Lightbulb,
    title: "Best Practices",
    description: "Share and learn effective work management techniques",
    topics: 156,
    posts: 734,
  },
  {
    icon: Tool,
    title: "Technical Support",
    description: "Get help with Clone features and integrations",
    topics: 321,
    posts: 1876,
  },
  {
    icon: Headphones,
    title: "Remote Work",
    description: "Discuss remote work challenges and solutions",
    topics: 145,
    posts: 567,
  },
  {
    icon: Newspaper,
    title: "News & Updates",
    description: "Latest announcements and product updates",
    topics: 89,
    posts: 432,
  },
]

export function ForumCategories() {
  return (
    <section className="container py-12">
      <div className="mx-auto grid max-w-5xl gap-6">
        {categories.map((category) => (
          <Link key={category.title} href="#" className="block">
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                <category.icon className="h-8 w-8 text-primary" />
                <div className="space-y-1">
                  <CardTitle>{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{category.topics} topics</span>
                  <span>{category.posts} posts</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

