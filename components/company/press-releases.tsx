import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"

const pressReleases = [
  {
    title: "Clone Raises $50M Series B to Transform Remote Work Management",
    date: "2025-02-15",
    excerpt:
      "Funding will accelerate product development and global expansion to meet growing demand for remote work management solutions.",
    link: "#",
  },
  {
    title: "Clone Launches Advanced AI Features for Seamless Context Switching",
    date: "2025-01-20",
    excerpt: "New AI-powered features help professionals manage multiple remote positions more effectively.",
    link: "#",
  },
  {
    title: "Clone Reaches 100,000 Active Users Milestone",
    date: "2024-12-10",
    excerpt: "Growing adoption demonstrates strong demand for solutions that help manage multiple remote positions.",
    link: "#",
  },
]

export function PressReleases() {
  return (
    <section className="container py-12">
      <h2 className="mb-12 text-center text-3xl font-bold">Latest News</h2>
      <div className="mx-auto grid max-w-4xl gap-8">
        {pressReleases.map((release) => (
          <Card key={release.title}>
            <CardHeader>
              <CardTitle>{release.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{formatDate(release.date)}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{release.excerpt}</p>
              <Button variant="outline">Read More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

