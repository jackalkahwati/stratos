'use client'

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { useToast } from "../ui/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const form = event.currentTarget
      const formData = new FormData(form)
      
      // Add the access key to the form data
      formData.append("access_key", "d6f19062-b08a-4c03-a8fc-d6ea609b6f70")
      
      // Add from_name to make it clearer in the email
      formData.append("from_name", formData.get("name") as string)
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
        form.reset()
      } else {
        throw new Error(data.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Input
          name="name"
          placeholder="Your name"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="space-y-2">
        <Input
          name="email"
          type="email"
          placeholder="Your email"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="space-y-2">
        <Input
          name="subject"
          placeholder="Subject"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="Your message"
          required
          disabled={isSubmitting}
          className="min-h-[150px]"
        />
      </div>
      <input type="hidden" name="redirect" value="false" />
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
} 