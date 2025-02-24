import { Button } from "@/components/ui/button"

export function DiscordHero() {
  return (
    <section className="container py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Join Our Discord Community</h1>
      <p className="mx-auto mt-4 max-w-[42rem] text-muted-foreground">
        Connect with other Clone users in real-time, get instant support, and share your experiences.
      </p>
      <Button size="lg" className="mt-8">
        Join Discord Server
      </Button>
    </section>
  )
}

