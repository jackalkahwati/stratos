import { ForumHero } from "@/components/community/forum-hero"
import { ForumCategories } from "@/components/community/forum-categories"
import { PopularTopics } from "@/components/community/popular-topics"
import { RecentDiscussions } from "@/components/community/recent-discussions"

export default function ForumPage() {
  return (
    <main className="min-h-screen">
      <ForumHero />
      <ForumCategories />
      <PopularTopics />
      <RecentDiscussions />
    </main>
  )
}

