import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function Culture() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Culture</h2>
        <Card>
          <CardHeader>
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Team culture"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="mb-4">Work with Amazing People</CardTitle>
            <p className="text-muted-foreground">
              Join a diverse team of passionate individuals working together to revolutionize remote work. We believe in
              collaboration, innovation, and making a real impact in people's lives.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

