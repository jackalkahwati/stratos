import { Button } from "@/components/ui/button"
import { PenLine } from "lucide-react"

export function ForumHero() {
  return (
    <section className="container py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Community Forum</h1>
      <p className="mx-auto mt-4 max-w-[42rem] text-muted-foreground">
        Connect with other professionals, share experiences, and learn from the community.
      </p>
      <Button size="lg" className="mt-8">
        <PenLine className="mr-2 h-4 w-4" />
        Start a Discussion
      </Button>
    </section>
  )
}

