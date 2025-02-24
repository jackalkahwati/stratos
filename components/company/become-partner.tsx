import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function BecomePartner() {
  return (
    <section className="container py-24">
      <Card className="mx-auto max-w-3xl text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Become a Partner</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            Join our partner network and help shape the future of remote work management. We provide comprehensive
            support, training, and resources to ensure your success.
          </p>
          <Button size="lg">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}

