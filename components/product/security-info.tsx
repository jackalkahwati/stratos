import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Key, FileCheck } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II certified infrastructure with regular security audits",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Your data is encrypted in transit and at rest using industry-standard protocols",
  },
  {
    icon: Key,
    title: "Access Controls",
    description: "Role-based access control and multi-factor authentication",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "GDPR, CCPA, and other regulatory compliance measures",
  },
]

export function SecurityInfo() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Security First</h1>
        <p className="mb-16 text-muted-foreground">
          We take the security of your data seriously. Clone implements multiple layers of protection to keep your
          information safe.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {securityFeatures.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn more about our {feature.title.toLowerCase()} features and how they protect your data.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

