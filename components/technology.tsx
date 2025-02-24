'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Flame, Gauge, Shield, Zap, Thermometer, Target, Settings, BarChart2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from "recharts"

// Previous constants remain unchanged
const propulsionModes = [
  {
    title: "Ramjet Mode",
    speed: "Mach 1–4",
    description: "Airbreathing propulsion compresses and ignites fuel for efficient supersonic flight.",
  },
  {
    title: "Scramjet Mode",
    speed: "Mach 4–10",
    description: "Supersonic combustion maintains efficiency for sustained hypersonic acceleration.",
  },
  {
    title: "Rocket Mode",
    speed: "Mach 10–25+",
    description: "Liquid-fueled rocket engines take over for orbital insertion and deep-space travel.",
  },
]

const materials = [
  {
    icon: Shield,
    title: "Ceramic Matrix Composites (CMCs)",
    description: "High-strength, heat-resistant materials.",
  },
  {
    icon: Gauge,
    title: "Active Regenerative Cooling",
    description: "Heat dissipation through engine components.",
  },
  {
    icon: Flame,
    title: "Advanced Aerospike Nozzle",
    description: "Adaptive thrust for optimal performance across all speeds.",
  },
]

const heliumBenefits = [
  {
    icon: Zap,
    title: "Thrust Augmentation & Increased Specific Impulse",
    description:
      "Helium's low molecular weight enhances exhaust expansion and increases exit velocity, improving overall engine performance.",
    details: [
      "Enhanced exhaust expansion",
      "Increased exit velocity",
      "Improved specific impulse",
      "Optimized flow characteristics",
    ],
  },
  {
    icon: Thermometer,
    title: "Thermal Management for Hypersonic Flight",
    description:
      "Advanced cooling capabilities for extreme hypersonic conditions using helium's unique thermal properties.",
    details: [
      "Combustor wall cooling",
      "Nozzle thermal protection",
      "Hot spot prevention",
      "Enhanced energy efficiency",
    ],
  },
  {
    icon: Target,
    title: "Infrared Stealth Capabilities",
    description: "Significant reduction in thermal signature through strategic helium injection in the exhaust stream.",
    details: [
      "Reduced IR signature",
      "Enhanced stealth capabilities",
      "Temperature reduction",
      "Military applications",
    ],
  },
  {
    icon: Settings,
    title: "Combustion Stability & Efficiency",
    description: "Improved combustion characteristics and stability at hypersonic velocities through helium injection.",
    details: ["Stabilized combustion", "Reduced turbulence", "Better thrust modulation", "Optimized performance"],
  },
]

const comparisonData = [
  {
    metric: "Time to Launch",
    Starship: 60,
    Falcon: 50,
    "SSTO Hypersonic": 85,
    "Heavy Rocket": 40,
    "Space Force Ideal": 90,
  },
  {
    metric: "Reusability",
    Starship: 80,
    Falcon: 60,
    "SSTO Hypersonic": 90,
    "Heavy Rocket": 30,
    "Space Force Ideal": 95,
  },
  {
    metric: "Speed",
    Starship: 75,
    Falcon: 65,
    "SSTO Hypersonic": 85,
    "Heavy Rocket": 70,
    "Space Force Ideal": 90,
  },
  {
    metric: "Cost",
    Starship: 70,
    Falcon: 60,
    "SSTO Hypersonic": 75,
    "Heavy Rocket": 40,
    "Space Force Ideal": 85,
  },
  {
    metric: "Scalability",
    Starship: 85,
    Falcon: 65,
    "SSTO Hypersonic": 70,
    "Heavy Rocket": 50,
    "Space Force Ideal": 90,
  },
  {
    metric: "Maintenance Ease",
    Starship: 65,
    Falcon: 60,
    "SSTO Hypersonic": 70,
    "Heavy Rocket": 45,
    "Space Force Ideal": 85,
  },
  {
    metric: "Reliability",
    Starship: 75,
    Falcon: 85,
    "SSTO Hypersonic": 70,
    "Heavy Rocket": 80,
    "Space Force Ideal": 95,
  },
  {
    metric: "Environmental Impact",
    Starship: 60,
    Falcon: 55,
    "SSTO Hypersonic": 75,
    "Heavy Rocket": 40,
    "Space Force Ideal": 90,
  },
  {
    metric: "Operational Complexity",
    Starship: 50,
    Falcon: 60,
    "SSTO Hypersonic": 65,
    "Heavy Rocket": 45,
    "Space Force Ideal": 80,
  },
  {
    metric: "Heat Resistance",
    Starship: 75,
    Falcon: 70,
    "SSTO Hypersonic": 85,
    "Heavy Rocket": 65,
    "Space Force Ideal": 90,
  },
  {
    metric: "Fuel Efficiency",
    Starship: 70,
    Falcon: 65,
    "SSTO Hypersonic": 80,
    "Heavy Rocket": 55,
    "Space Force Ideal": 85,
  },
]

const ComparisonChart = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart data={comparisonData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="metric" />
        <PolarRadiusAxis />
        <Radar name="Starship" dataKey="Starship" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Falcon" dataKey="Falcon" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Radar name="SSTO Hypersonic" dataKey="SSTO Hypersonic" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
        <Radar name="Heavy Rocket" dataKey="Heavy Rocket" stroke="#ff7300" fill="#ff7300" fillOpacity={0.6} />
        <Radar name="Space Force Ideal" dataKey="Space Force Ideal" stroke="#0088fe" fill="#0088fe" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default function Technology() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Technology</h2>
          <p className="mt-4 text-muted-foreground">
            Pioneering the next generation of space access with our innovative spaceplane technology.
          </p>
        </div>
        <div className="mx-auto mt-16">
          <Tabs defaultValue="propulsion" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="propulsion">Propulsion</TabsTrigger>
              <TabsTrigger value="aerodynamics">Aerodynamics</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
            </TabsList>
            <TabsContent value="propulsion" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Combined-Cycle Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our revolutionary propulsion system seamlessly transitions between air-breathing and rocket modes,
                    enabling efficient operation from sea level to orbital velocity.
                  </p>
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Ramjet Mode</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Efficient supersonic propulsion from Mach 3 to Mach 6.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Scramjet Mode</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Advanced hypersonic propulsion from Mach 6 to Mach 12.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="aerodynamics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Waverider Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Advanced aerodynamic configuration that uses the shock wave generated by the vehicle to enhance lift
                    and reduce drag at hypersonic speeds.
                  </p>
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Variable Geometry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Adaptable wing configuration for optimal performance across all speed regimes.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Thermal Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Innovative cooling systems to handle extreme temperatures during hypersonic flight.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="materials" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Composites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Cutting-edge materials that combine lightweight properties with exceptional strength and thermal
                    resistance.
                  </p>
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Thermal Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Next-generation heat shields for reliable atmospheric reentry.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Propulsion Materials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>High-temperature alloys and ceramics for engine components.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

