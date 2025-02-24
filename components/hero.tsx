import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src="/images/stratos.jpg"
          alt="Stratos spacecraft"
          width={1920}
          height={1080}
          className="object-cover w-full h-full brightness-50"
          priority
          quality={100}
        />
      </div>
      <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-8 py-24 text-center">
        <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Pioneering{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            AI-Driven Hypersonic Propulsion
          </span>
        </h1>
        <p className="animate-fade-up mx-auto max-w-[50rem] text-lg leading-normal text-gray-300 sm:text-xl sm:leading-8">
          At Stratos, we're revolutionizing aerospace with AI-optimized hypersonic engine design. Our helium-enhanced combined-cycle propulsion system, validated through advanced computational modeling and wind tunnel testing, is ready for flight testing in 2026.
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
            <p className="font-semibold text-white">AI-Optimized Design</p>
          </div>
          <div className="rounded-lg border bg-background/50 px-6 py-4 backdrop-blur transition-all hover:scale-105 hover:bg-background/70">
            <p className="font-semibold text-white">Helium-Enhanced Propulsion</p>
          </div>
          <div className="rounded-lg border bg-background/50 px-6 py-4 backdrop-blur transition-all hover:scale-105 hover:bg-background/70">
            <p className="font-semibold text-white">2026 Flight Testing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

