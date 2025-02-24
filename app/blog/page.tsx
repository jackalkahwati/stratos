import { BlogHero } from "@/components/blog/blog-hero"
import { FeaturedPosts } from "@/components/blog/featured-posts"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCategories } from "@/components/blog/blog-categories"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <FeaturedPosts />
      <BlogCategories />
      <BlogGrid />
    </main>
  )
}

