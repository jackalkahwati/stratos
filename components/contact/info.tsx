import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["1400 Mission St.", "San Francisco, CA 94103"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["206-396-6810"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@stratos.aero"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Monday - Friday", "9:00 AM - 6:00 PM PST"],
  },
]

export function ContactInfo() {
  return (
    <section className="container py-24">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
        {contactInfo.map((info) => (
          <Card key={info.title}>
            <CardHeader>
              <info.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{info.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {info.details.map((detail) => (
                <p key={detail} className="text-muted-foreground">
                  {detail}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

