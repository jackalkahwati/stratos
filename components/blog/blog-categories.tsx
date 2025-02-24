import { Button } from "@/components/ui/button"

const categories = ["All", "Guides", "Industry Insights", "Case Studies", "Tips & Tricks", "Product Updates"]

export function BlogCategories() {
  return (
    <section className="container py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} className="rounded-full">
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

