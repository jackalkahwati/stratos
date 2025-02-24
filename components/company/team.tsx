import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-founder",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Emily Wong",
    role: "Head of Product",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "David Park",
    role: "Head of Engineering",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
]

export function Team() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Our Team</h2>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              <CardTitle className="mt-4">{member.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4 text-sm text-muted-foreground">{member.role}</p>
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

