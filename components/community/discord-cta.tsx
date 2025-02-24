import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DiscordCTA() {
  return (
    <section className="container py-24">
      <Card className="mx-auto max-w-3xl text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Ready to Join?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            Join over 10,000 Clone users in our Discord community. Get help, share knowledge, and connect with others.
          </p>
          <Button size="lg">Join Discord Server</Button>
        </CardContent>
      </Card>
    </section>
  )
}

