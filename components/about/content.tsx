import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutContent() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Founded in 2024, Stratos emerged from a simple yet ambitious vision: to create a more accessible path to space.
            Our founders, combining decades of experience in aerospace engineering and propulsion technology, set out to
            develop a revolutionary spaceplane that would transform space travel.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold leading-8">Innovation</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Our combined-cycle propulsion system represents a breakthrough in aerospace technology, seamlessly transitioning
              from air-breathing to rocket propulsion for optimal efficiency at all altitudes.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold leading-8">Sustainability</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              We're committed to developing fully reusable spacecraft that minimize environmental impact while maximizing
              operational efficiency and flight frequency.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold leading-8">Accessibility</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              By reducing launch costs and increasing flight frequency, we're making space more accessible for scientific
              research, commercial applications, and future space exploration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

