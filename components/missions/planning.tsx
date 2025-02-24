import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Clipboard, Users } from "lucide-react"

const planningSteps = [
  {
    icon: Calendar,
    title: "Mission Scheduling",
    description: "Select your preferred launch window and mission parameters.",
    action: "View Calendar",
  },
  {
    icon: Clipboard,
    title: "Requirements Review",
    description: "Define payload specifications and mission objectives.",
    action: "Start Process",
  },
  {
    icon: Users,
    title: "Integration Planning",
    description: "Coordinate with our team for payload integration and testing.",
    action: "Meet Team",
  },
  {
    icon: Clock,
    title: "Timeline Development",
    description: "Establish detailed mission timeline and contingency plans.",
    action: "Learn More",
  },
]

export function MissionPlanning() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mission Planning</h2>
          <p className="mt-4 text-muted-foreground">
            Our experienced team provides end-to-end mission support, from initial planning to successful completion.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Pre-Mission</h3>
              <ul className="space-y-2">
                <li>Mission requirements analysis</li>
                <li>Payload integration planning</li>
                <li>Trajectory optimization</li>
                <li>Safety and compliance review</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Launch Operations</h3>
              <ul className="space-y-2">
                <li>Final payload integration</li>
                <li>Pre-launch testing</li>
                <li>Mission control support</li>
                <li>Real-time telemetry</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">In-Flight Support</h3>
              <ul className="space-y-2">
                <li>24/7 mission control</li>
                <li>Orbital maneuver planning</li>
                <li>Payload operations support</li>
                <li>Emergency response readiness</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Post-Mission</h3>
              <ul className="space-y-2">
                <li>Mission data analysis</li>
                <li>Payload recovery</li>
                <li>Performance review</li>
                <li>Documentation and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

