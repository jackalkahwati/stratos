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
      "Our patented helium injection system enhances exhaust expansion and increases exit velocity, leveraging helium's low molecular weight for optimal performance.",
    details: [
      "Enhanced exhaust expansion",
      "Increased exit velocity",
      "Improved specific impulse",
      "Optimized flow characteristics",
    ],
  },
  {
    icon: Thermometer,
    title: "Advanced Thermal Management",
    description:
      "Helium's exceptional thermal properties enable superior cooling and heat distribution throughout the propulsion system.",
    details: [
      "Active combustor wall cooling",
      "Nozzle thermal protection",
      "Hot spot prevention",
      "Enhanced energy efficiency",
    ],
  },
  {
    icon: Target,
    title: "Military-Grade Stealth Capabilities",
    description: "Strategic helium injection in the exhaust stream dramatically reduces thermal signature, enhancing mission capabilities.",
    details: [
      "Reduced IR signature",
      "Enhanced stealth profile",
      "Temperature optimization",
      "Military applications",
    ],
  },
  {
    icon: Settings,
    title: "Multi-Regime Performance",
    description: "Variable helium injection enables optimal performance across all flight regimes, from takeoff to orbital insertion.",
    details: [
      "Stabilized combustion",
      "Smooth regime transitions",
      "Precise thrust control",
      "Adaptive performance",
    ],
  },
]

const comparisonData = [
  {
    metric: "Time to Launch",
    Starship: 60,
    Falcon: 50,
    "Stratos": 85,
    "Heavy Rocket": 40,
    "Space Force Ideal": 90,
  },
  {
    metric: "Reusability",
    Starship: 80,
    Falcon: 60,
    "Stratos": 90,
    "Heavy Rocket": 30,
    "Space Force Ideal": 95,
  },
  {
    metric: "Speed",
    Starship: 75,
    Falcon: 65,
    "Stratos": 85,
    "Heavy Rocket": 70,
    "Space Force Ideal": 90,
  },
  {
    metric: "Cost",
    Starship: 70,
    Falcon: 60,
    "Stratos": 75,
    "Heavy Rocket": 40,
    "Space Force Ideal": 85,
  },
  {
    metric: "Scalability",
    Starship: 85,
    Falcon: 65,
    "Stratos": 70,
    "Heavy Rocket": 50,
    "Space Force Ideal": 90,
  },
  {
    metric: "Maintenance Ease",
    Starship: 65,
    Falcon: 60,
    "Stratos": 70,
    "Heavy Rocket": 45,
    "Space Force Ideal": 85,
  },
  {
    metric: "Reliability",
    Starship: 75,
    Falcon: 85,
    "Stratos": 70,
    "Heavy Rocket": 80,
    "Space Force Ideal": 95,
  },
  {
    metric: "Environmental Impact",
    Starship: 60,
    Falcon: 55,
    "Stratos": 75,
    "Heavy Rocket": 40,
    "Space Force Ideal": 90,
  },
  {
    metric: "Operational Complexity",
    Starship: 50,
    Falcon: 60,
    "Stratos": 65,
    "Heavy Rocket": 45,
    "Space Force Ideal": 80,
  },
  {
    metric: "Heat Resistance",
    Starship: 75,
    Falcon: 70,
    "Stratos": 85,
    "Heavy Rocket": 65,
    "Space Force Ideal": 90,
  },
  {
    metric: "Fuel Efficiency",
    Starship: 70,
    Falcon: 65,
    "Stratos": 80,
    "Heavy Rocket": 55,
    "Space Force Ideal": 85,
  },
]

const ComparisonChart = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart data={comparisonData}>
        <PolarGrid stroke="#666" />
        <PolarAngleAxis dataKey="metric" stroke="#888" />
        <PolarRadiusAxis stroke="#666" />
        <Radar 
          name="Starship" 
          dataKey="Starship" 
          stroke="#FF4444" 
          fill="none" 
          strokeWidth={2}
        />
        <Radar 
          name="Falcon" 
          dataKey="Falcon" 
          stroke="#44FF44" 
          fill="none" 
          strokeWidth={2}
        />
        <Radar 
          name="Stratos" 
          dataKey="Stratos" 
          stroke="#4444FF" 
          fill="none" 
          strokeWidth={2}
        />
        <Radar 
          name="Heavy Rocket" 
          dataKey="Heavy Rocket" 
          stroke="#FF44FF" 
          fill="none" 
          strokeWidth={2}
        />
        <Radar 
          name="Space Force Ideal" 
          dataKey="Space Force Ideal" 
          stroke="#FFFF44" 
          fill="none" 
          strokeWidth={2}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default function Technology() {
  return (
    <div className="space-y-24">
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
      
      <section className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technology Comparison</h2>
          <p className="mt-4 text-muted-foreground">
            How our spaceplane technology compares to existing launch systems.
          </p>
        </div>
        <div className="mt-16">
          <ComparisonChart />
        </div>
      </section>
    </div>
  )
}

