import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Apple, Download } from "lucide-react"

export function DesktopDownload() {
  return (
    <section className="container py-24">
      <Card className="mx-auto max-w-3xl text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Download Now</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            Get started with the Clone desktop app and enhance your productivity today.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download for Windows
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Apple className="h-5 w-5" />
              Download for Mac
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

