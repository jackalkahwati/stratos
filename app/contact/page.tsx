import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="container py-24">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h1>
          <p className="mt-4 text-muted-foreground">
            Have a question or want to learn more about our technology? Get in touch with us.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <Mail className="h-6 w-6 text-primary" />
            <p className="font-medium">Email</p>
            <p className="text-sm text-muted-foreground">jack@thestardrive.com</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <MapPin className="h-6 w-6 text-primary" />
            <p className="font-medium">Address</p>
            <p className="text-center text-sm text-muted-foreground">
              1400 Mission St.<br />
              San Francisco, CA 94103
            </p>
          </div>
        </div>

        <div className="rounded-lg border p-8">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

