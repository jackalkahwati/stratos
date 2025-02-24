'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"
import { useToast } from "./ui/use-toast"
import { Textarea } from "./ui/textarea"

export default function Contact() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
        })
        setEmail("")
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-muted-foreground">
            Have questions about our technology or interested in partnership opportunities? Get in touch with us.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Input name="email" type="email" placeholder="Your email" required />
                </div>
                <div className="space-y-2">
                  <Input name="subject" placeholder="Subject" required />
                </div>
                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder="Your message"
                    required
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-8 grid gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">1400 Mission St., San Francisco, CA 94103</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">206-396-6810</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">contact@stratos.aero</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

