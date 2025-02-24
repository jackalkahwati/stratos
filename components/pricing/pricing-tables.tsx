import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Professional",
    price: "$29",
    description: "Perfect for individual professionals managing multiple roles",
    features: [
      "Single user",
      "Up to 3 job profiles",
      "Email & calendar management",
      "Basic automation",
      "50GB storage",
      "Standard support",
    ],
  },
  {
    name: "Team",
    price: "$49",
    description: "Ideal for teams with multiple remote positions",
    features: [
      "Up to 5 users",
      "Unlimited job profiles",
      "Advanced automation",
      "Team collaboration",
      "100GB storage per user",
      "Priority support",
    ],
  },
]

export function PricingTables() {
  return (
    <section className="container py-12">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Start Free Trial
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

