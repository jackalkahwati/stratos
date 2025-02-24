'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader } from "./ui/card"

const founders = [
  {
    name: "Jack Al-Kahwati",
    role: "Co-Founder",
    image: "/images/team/jack.jpg",
    bio: "Jack Al-Kahwati is a seasoned entrepreneur and engineer with a robust background in aerospace and technology sectors. He earned a B.S. in Mechanical Engineering from the University of South Florida, an M.S. in Aerospace Engineering from the University of Florida, and a certificate in Advanced Program Management from Stanford University. Jack's professional journey includes pivotal engineering roles at Motorola, Boeing, BAE Systems, and Sikorsky Aircraft, where he contributed to the development of cutting-edge aerospace and defense technologies. In 2013, he founded Lattis, a company dedicated to advancing micromobility solutions through innovative software platforms. Beyond his entrepreneurial ventures, Jack authored \"Designing Life: The Promise and Potential of Biogenic Engineering\" in 2023, exploring the fusion of biology and engineering.",
  },
  {
    name: "Dr. Martín Diz",
    role: "Co-Founder",
    image: "/images/team/martin.jpg",
    bio: "Dr. Martín Diz is a dynamic entrepreneur with extensive experience in aerospace and technology industries. He co-founded Bluesmart, serving as Chief Technology Officer, where he played a crucial role in pioneering smart luggage solutions. Leveraging his expertise, Dr. Diz later founded Tango Builder, a company focused on delivering innovative technological solutions. His career also encompasses roles as an independent consultant and advisor, underscoring his commitment to technological advancement and entrepreneurship.",
  },
]

export function Team() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
        <p className="mt-4 text-muted-foreground">
          Meet the visionaries behind Stratos, bringing together decades of aerospace expertise and entrepreneurial success.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-2">
        {founders.map((founder) => (
          <Card key={founder.name} className="overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <CardHeader>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">{founder.name}</h3>
                <p className="text-muted-foreground">{founder.role}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{founder.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 