import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const screenshots = [
  {
    title: "Dashboard View",
    image: "/placeholder.svg?height=600&width=300",
  },
  {
    title: "Calendar Integration",
    image: "/placeholder.svg?height=600&width=300",
  },
  {
    title: "Message Center",
    image: "/placeholder.svg?height=600&width=300",
  },
]

export function AppScreenshots() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">App Preview</h2>
      <div className="mx-auto flex max-w-5xl gap-8 overflow-x-auto pb-8">
        {screenshots.map((screenshot) => (
          <Card key={screenshot.title} className="shrink-0">
            <CardContent className="p-4">
              <Image
                src={screenshot.image || "/placeholder.svg"}
                alt={screenshot.title}
                width={300}
                height={600}
                className="rounded-2xl"
              />
              <p className="mt-4 text-center font-medium">{screenshot.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

