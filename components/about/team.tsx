import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Martin Dez",
    role: "CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Aerospace industry veteran with 15+ years experience in hypersonic propulsion systems.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Jack Al-Kahwati",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former SpaceX propulsion engineer, specializing in combined-cycle engines and reusable launch systems.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
        <p className="mt-4 text-muted-foreground">
          Led by industry veterans with deep expertise in aerospace engineering and hypersonic technologies.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
        {team.map((member) => (
          <Card key={member.name}>
            <CardHeader className="text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-center text-muted-foreground">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={member.social.github} className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

