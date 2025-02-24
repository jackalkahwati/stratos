import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AppleIcon, SmartphoneIcon } from "lucide-react"

export function DownloadApp() {
  return (
    <section className="container py-24">
      <Card className="mx-auto max-w-3xl text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Get Started Today</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            Download the Clone mobile app and take control of your multiple remote positions from anywhere.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2">
              <AppleIcon className="h-5 w-5" />
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <SmartphoneIcon className="h-5 w-5" />
              Download for Android
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

