import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ThumbsUp } from "lucide-react"
import Link from "next/link"

const topics = [
  {
    title: "How to manage multiple standup meetings efficiently?",
    author: "Sarah Chen",
    replies: 34,
    likes: 156,
    lastActivity: "2h ago",
  },
  {
    title: "Best practices for context switching between jobs",
    author: "Michael Rodriguez",
    replies: 28,
    likes: 142,
    lastActivity: "4h ago",
  },
  {
    title: "Automating daily reports across different roles",
    author: "Emily Wong",
    replies: 23,
    likes: 98,
    lastActivity: "6h ago",
  },
]

export function PopularTopics() {
  return (
    <section className="container py-12">
      <h2 className="mb-8 text-2xl font-bold">Popular Topics</h2>
      <div className="mx-auto grid max-w-5xl gap-6">
        {topics.map((topic) => (
          <Link key={topic.title} href="#" className="block">
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span>by {topic.author}</span>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {topic.replies}
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      {topic.likes}
                    </div>
                  </div>
                  <span className="text-muted-foreground">{topic.lastActivity}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

