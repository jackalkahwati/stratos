import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export function DesktopHero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Clone Desktop App</h1>
      <p className="mx-auto mt-4 max-w-[42rem] text-muted-foreground">
        A powerful desktop application for seamless management of multiple remote positions.
      </p>
      <Button size="lg" className="mt-8 gap-2">
        <Download className="h-5 w-5" />
        Download for Mac or Windows
      </Button>
      <div className="mt-16">
        <Image
          src="/placeholder.svg?height=600&width=800"
          alt="Clone desktop app interface"
          width={800}
          height={600}
          className="rounded-lg shadow-2xl"
        />
      </div>
    </section>
  )
}

