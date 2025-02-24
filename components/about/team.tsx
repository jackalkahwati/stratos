import Image from "next/image"

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    image: "/team/sarah-chen.jpg",
    bio: "Former NASA propulsion engineer with 15 years of experience in aerospace innovation.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    image: "/team/marcus-rodriguez.jpg",
    bio: "Pioneering engineer with multiple patents in hypersonic propulsion systems.",
  },
  {
    name: "Dr. James Wilson",
    role: "Chief Operations Officer",
    image: "/team/james-wilson.jpg",
    bio: "20+ years experience in spacecraft manufacturing and mission operations.",
  },
]

export function TeamSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Leadership Team</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Meet the visionaries and experts leading Stratos towards a new era of space transportation.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {team.map((person) => (
            <li key={person.name}>
              <Image
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={person.image}
                alt={person.name}
                width={300}
                height={200}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8">{person.name}</h3>
              <p className="text-base leading-7 text-muted-foreground">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

