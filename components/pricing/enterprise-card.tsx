import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function EnterpriseCard() {
  return (
    <section className="container py-12">
      <Card className="mx-auto max-w-3xl">
        <CardHeader className="text-center">
          <Building2 className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="mt-4 text-2xl">Enterprise</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            Custom solutions for organizations with specific requirements. Includes dedicated support, custom
            integrations, and unlimited storage.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button size="lg">Contact Sales</Button>
        </CardFooter>
      </Card>
    </section>
  )
}

