import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const featuredPosts = [
  {
    title: "10 Tips for Managing Multiple Remote Jobs Successfully",
    excerpt:
      "Learn the best practices for juggling multiple remote positions while maintaining high performance and work-life balance.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Guides",
    date: "2025-02-20",
  },
  {
    title: "The Future of Remote Work: AI-Powered Job Management",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way professionals handle multiple remote positions.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Industry Insights",
    date: "2025-02-18",
  },
]

export function FeaturedPosts() {
  return (
    <section className="container py-12">
      <h2 className="mb-12 text-3xl font-bold">Featured Articles</h2>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {featuredPosts.map((post) => (
          <Card key={post.title} className="overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <CardHeader>
              <div className="flex items-center gap-2">
                <span className="text-sm text-primary">{post.category}</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 line-clamp-2 text-muted-foreground">{post.excerpt}</p>
              <Button variant="outline" asChild>
                <Link href="#">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

