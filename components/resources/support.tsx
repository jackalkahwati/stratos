import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LifeBuoy, Mail, MessageCircle } from "lucide-react"

const supportOptions = [
  {
    title: "Help Center",
    description: "Search our knowledge base for quick answers",
    icon: LifeBuoy,
    action: "Browse Articles",
  },
  {
    title: "Email Support",
    description: "Get help from our support team",
    icon: Mail,
    action: "Contact Support",
  },
  {
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    icon: MessageCircle,
    action: "Start Chat",
  },
]

export function Support() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Need Help?</h2>
        <p className="mt-4 text-muted-foreground">Our support team is here to help you succeed with Clone.</p>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
        {supportOptions.map((option) => (
          <Card key={option.title}>
            <CardHeader>
              <option.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{option.title}</CardTitle>
              <CardDescription>{option.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                {option.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

