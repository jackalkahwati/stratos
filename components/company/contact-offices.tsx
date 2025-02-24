import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone } from "lucide-react"

const offices = [
  {
    city: "San Francisco",
    address: "100 Market Street, Suite 300",
    timezone: "PT (UTC-7)",
    phone: "+1 (555) 123-4567",
  },
  {
    city: "London",
    address: "123 King's Road, Floor 4",
    timezone: "BST (UTC+1)",
    phone: "+44 20 7123 4567",
  },
  {
    city: "Singapore",
    address: "1 Raffles Place, #20-01",
    timezone: "SGT (UTC+8)",
    phone: "+65 6789 0123",
  },
]

export function ContactOffices() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Global Offices</h2>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {offices.map((office) => (
          <Card key={office.city}>
            <CardHeader>
              <CardTitle>{office.city}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 text-primary" />
                  <p className="text-sm text-muted-foreground">{office.address}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="mt-1 h-4 w-4 text-primary" />
                  <p className="text-sm text-muted-foreground">{office.timezone}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="mt-1 h-4 w-4 text-primary" />
                  <p className="text-sm text-muted-foreground">{office.phone}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

