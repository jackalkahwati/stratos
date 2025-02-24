import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target } from "lucide-react"

export function Mission() {
  return (
    <section className="container py-12">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="text-center">
          <Target className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="mt-4 text-2xl">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-muted-foreground">
            To empower professionals to take control of their careers by providing the tools and technology needed to
            efficiently manage multiple remote positions while maintaining work-life balance and professional integrity.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

