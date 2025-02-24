import { Button } from "@/components/ui/button"
import { AppleIcon, SmartphoneIcon } from "lucide-react"
import Image from "next/image"

export function MobileHero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Clone Mobile App</h1>
      <p className="mx-auto mt-4 max-w-[42rem] text-muted-foreground">
        Manage multiple remote positions from anywhere. Stay productive on the go with our powerful mobile app.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="gap-2">
          <AppleIcon className="h-5 w-5" />
          Download for iOS
        </Button>
        <Button size="lg" variant="outline" className="gap-2">
          <SmartphoneIcon className="h-5 w-5" />
          Download for Android
        </Button>
      </div>
      <div className="mt-16">
        <Image
          src="/placeholder.svg?height=600&width=300"
          alt="Clone mobile app interface"
          width={300}
          height={600}
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  )
}

