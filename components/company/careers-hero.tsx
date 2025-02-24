import { Button } from "@/components/ui/button"

export function CareersHero() {
  return (
    <section className="container py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Join Our Team</h1>
      <p className="mx-auto mt-4 max-w-[42rem] text-muted-foreground">
        Help us build the future of remote work and empower professionals worldwide.
      </p>
      <Button className="mt-8" size="lg">
        View Open Positions
      </Button>
    </section>
  )
}

