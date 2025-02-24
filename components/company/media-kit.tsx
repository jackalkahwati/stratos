import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ImageIcon, FileText } from "lucide-react"

const mediaResources = [
  {
    title: "Logo Package",
    description: "Download Clone logos in various formats",
    icon: ImageIcon,
  },
  {
    title: "Brand Guidelines",
    description: "Visual identity and usage guidelines",
    icon: FileText,
  },
  {
    title: "Media Assets",
    description: "Product screenshots and team photos",
    icon: Download,
  },
]

export function MediaKit() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Media Kit</h2>
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
        {mediaResources.map((resource) => (
          <Card key={resource.title}>
            <CardHeader>
              <resource.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">{resource.description}</p>
              <Button variant="outline" className="w-full">
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

