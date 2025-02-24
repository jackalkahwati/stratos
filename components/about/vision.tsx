import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Target, Rocket, Globe } from "lucide-react"

const visionCards = [
  {
    icon: Target,
    title: "Mission",
    description: "To revolutionize space access through innovative hypersonic technology and reusable spaceplanes.",
    points: [
      "Develop breakthrough propulsion systems",
      "Create reliable reusable platforms",
      "Enable rapid space access",
      "Reduce launch costs",
    ],
  },
  {
    icon: Rocket,
    title: "Vision",
    description: "A future where space access is as routine and reliable as modern air travel.",
    points: [
      "Global point-to-point transport",
      "Regular orbital access",
      "Sustainable space operations",
      "Economic space utilization",
    ],
  },
  {
    icon: Globe,
    title: "Impact",
    description: "Transforming the space industry through innovation and sustainable practices.",
    points: ["Environmental responsibility", "Industry advancement", "Economic growth", "Global connectivity"],
  },
]

export function Vision() {
  return (
    <section className="relative isolate overflow-hidden bg-primary/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Vision for the Future</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            At Stratos, we envision a future where space travel is as routine as air travel today. Our mission is to make
            this vision a reality through continuous innovation and unwavering commitment to safety and sustainability.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col">
            <dt className="text-lg font-semibold leading-7">2025</dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
              <p className="flex-auto">
                First successful test flight of our revolutionary spaceplane, demonstrating seamless transition between
                air-breathing and rocket propulsion.
              </p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-lg font-semibold leading-7">2027</dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
              <p className="flex-auto">
                Begin commercial cargo operations to low Earth orbit, offering regular and reliable access to space for
                satellites and scientific payloads.
              </p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-lg font-semibold leading-7">2030</dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
              <p className="flex-auto">
                Launch passenger services, making space travel accessible to a broader audience while maintaining the highest
                safety standards in the industry.
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

