import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Perfect for individual professionals",
    features: ["Single user", "Full feature access", "Standard support", "50GB storage"],
    button: "Choose Plan",
    variant: "outline" as const,
  },
  {
    name: "Team",
    price: "$49",
    period: "/user/month",
    description: "Ideal for growing teams",
    features: ["5+ users", "Collaboration features", "Priority support", "100GB storage/user"],
    button: "Choose Plan",
    variant: "default" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: ["Custom user count", "Dedicated support", "Custom integrations", "Unlimited storage"],
    button: "Contact Sales",
    variant: "outline" as const,
  },
]

export default function Pricing() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-4 text-muted-foreground">14-day free trial • No credit card required</p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative flex flex-col rounded-lg border bg-background p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-6">
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            </div>
            <ul className="mb-8 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-auto" variant={plan.variant}>
              {plan.button}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

