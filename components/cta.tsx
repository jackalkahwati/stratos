import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Maximize Your Potential?</h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl">
          Join thousands of professionals who are successfully managing multiple remote positions with Clone.
        </p>
        <div className="flex flex-col gap-4 min-[400px]:flex-row">
          <Button size="lg" className="text-lg">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

