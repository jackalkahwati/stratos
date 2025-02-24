import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutContent() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, Stratos emerged from a vision to revolutionize space access through innovative
                hypersonic technology. Our team of aerospace veterans and pioneering engineers came together with a
                shared mission: to create a truly reusable spaceplane that would transform the economics of space
                transportation.
              </p>
              <p>
                Through breakthrough developments in combined-cycle propulsion and advanced materials, we've created a
                platform that delivers unprecedented flexibility and efficiency in space access.
              </p>
            </div>
          </div>
          <Card>
            <CardContent className="p-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Stratos facility"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

