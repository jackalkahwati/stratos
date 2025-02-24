import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare } from "lucide-react"
import Link from "next/link"

const discussions = [
  {
    title: "Tips for managing multiple email signatures",
    author: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AT",
    },
    category: "Best Practices",
    replies: 12,
    lastActivity: "30m ago",
  },
  {
    title: "How do you handle overlapping meetings?",
    author: {
      name: "Jessica Lee",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JL",
    },
    category: "Job Management",
    replies: 8,
    lastActivity: "1h ago",
  },
  {
    title: "New calendar integration feature discussion",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "DK",
    },
    category: "Technical Support",
    replies: 15,
    lastActivity: "2h ago",
  },
]

export function RecentDiscussions() {
  return (
    <section className="container py-12">
      <h2 className="mb-8 text-2xl font-bold">Recent Discussions</h2>
      <div className="mx-auto grid max-w-5xl gap-6">
        {discussions.map((discussion) => (
          <Link key={discussion.title} href="#" className="block">
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                      <AvatarFallback>{discussion.author.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{discussion.title}</CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">
                        by {discussion.author.name} in {discussion.category}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {discussion.replies} replies
                  </div>
                  <span>{discussion.lastActivity}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

