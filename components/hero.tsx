import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/50" />
      <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-8 py-24 text-center">
        <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          The Next Evolution in{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Hypersonic Spaceflight
          </span>
        </h1>
        <p className="animate-fade-up mx-auto max-w-[50rem] text-lg leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Welcome to Stratos, where next-generation propulsion is redefining the future of orbital access and high-speed
          transportation. Our spaceplane, powered by a combined-cycle ramjet, scramjet, and rocket propulsion system, is
          designed to achieve unparalleled speed, reusability, and efficiency.
        </p>
        <div className="animate-fade-up flex flex-col gap-4 min-[400px]:flex-row">
          <Link href="/technology">
            <Button
              size="lg"
              className="text-lg group relative overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10">Explore Our Technology</span>
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </Button>
          </Link>
        </div>
        <div className="animate-fade-up grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border bg-background/50 px-6 py-4 backdrop-blur transition-all hover:scale-105 hover:bg-background/70">
            <p className="font-semibold">Mach 10+ Hypersonic Flight</p>
          </div>
          <div className="rounded-lg border bg-background/50 px-6 py-4 backdrop-blur transition-all hover:scale-105 hover:bg-background/70">
            <p className="font-semibold">Fully Reusable Spaceplane</p>
          </div>
          <div className="rounded-lg border bg-background/50 px-6 py-4 backdrop-blur transition-all hover:scale-105 hover:bg-background/70">
            <p className="font-semibold">Horizontal Takeoff & Landing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

