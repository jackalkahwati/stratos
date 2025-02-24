import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function PressContact() {
  return (
    <section className="container py-24">
      <Card className="mx-auto max-w-2xl">
        <CardHeader className="text-center">
          <Mail className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="mt-4">Press Contact</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 text-muted-foreground">
            For press inquiries, please contact our communications team. We typically respond within 24 hours.
          </p>
          <Button size="lg">Contact Press Team</Button>
        </CardContent>
      </Card>
    </section>
  )
}

