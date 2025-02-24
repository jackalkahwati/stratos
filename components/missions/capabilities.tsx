import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const capabilities = [
  {
    title: "Payload Integration",
    description: "Flexible payload bay with standardized interfaces for rapid integration of various cargo types.",
    image: "/placeholder.svg?height=400&width=600",
    specs: [
      "Payload bay dimensions: 4m x 3m x 8m",
      "Maximum payload mass: 2,500 kg",
      "Power and data interfaces available",
      "Environmental control systems",
    ],
  },
  {
    title: "Mission Planning",
    description: "Comprehensive mission planning and support services for all flight phases.",
    image: "/placeholder.svg?height=400&width=600",
    specs: [
      "Custom trajectory optimization",
      "Real-time mission control",
      "Weather monitoring",
      "Emergency response protocols",
    ],
  },
  {
    title: "Ground Operations",
    description: "Streamlined ground operations for rapid turnaround between missions.",
    image: "/placeholder.svg?height=400&width=600",
    specs: [
      "24-hour turnaround time",
      "Automated pre-flight checks",
      "Mobile ground support equipment",
      "Worldwide deployment capability",
    ],
  },
]

export function MissionCapabilities() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mission Capabilities</h2>
          <p className="mt-4 text-muted-foreground">
            Our advanced spaceplane platform offers unmatched capabilities for diverse space operations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <dt className="font-semibold">Payload Capacity</dt>
              <dd className="mt-2 text-muted-foreground">Up to 2,000 kg to Low Earth Orbit</dd>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <dt className="font-semibold">Orbital Altitudes</dt>
              <dd className="mt-2 text-muted-foreground">160 km to 2,000 km</dd>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <dt className="font-semibold">Launch Frequency</dt>
              <dd className="mt-2 text-muted-foreground">Weekly launches with 24-hour turnaround</dd>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <dt className="font-semibold">Mission Duration</dt>
              <dd className="mt-2 text-muted-foreground">Up to 14 days in orbit</dd>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <dt className="font-semibold">Passenger Capacity</dt>
              <dd className="mt-2 text-muted-foreground">Up to 6 passengers per flight</dd>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <dt className="font-semibold">Recovery System</dt>
              <dd className="mt-2 text-muted-foreground">Autonomous landing capability at multiple sites</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

