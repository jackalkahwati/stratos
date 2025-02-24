import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "Setting Up Separate Work Environments for Each Role",
    excerpt: "A comprehensive guide to creating distinct digital workspaces for multiple positions.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Guides",
    date: "2025-02-15",
  },
  {
    title: "Automating Daily Standups Across Multiple Teams",
    excerpt: "Learn how to use Clone to streamline your participation in multiple daily standups.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Tips & Tricks",
    date: "2025-02-12",
  },
  {
    title: "Case Study: How Sarah Manages 3 Tech Roles Successfully",
    excerpt: "An in-depth look at how one professional leverages Clone to manage multiple positions.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Case Studies",
    date: "2025-02-10",
  },
  {
    title: "New Feature: Advanced Context Switching",
    excerpt: "Introducing our latest feature for seamless transitions between work contexts.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Product Updates",
    date: "2025-02-08",
  },
]

export function BlogGrid() {
  return (
    <section className="container py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.title} className="overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={300}
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
        <div className="mt-12 text-center">
          <Button size="lg">Load More Articles</Button>
        </div>
      </div>
    </section>
  )
}

