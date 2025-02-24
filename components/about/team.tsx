import Image from "next/image"

const team = [
  {
    name: "Martin Diz",
    role: "Chief Executive Officer",
    image: "/placeholder.svg",
    bio: "Aerospace industry veteran with extensive experience in hypersonic propulsion systems and space technology.",
  },
  {
    name: "Jack Al-Kahwati",
    role: "Chief Technology Officer",
    image: "/placeholder.svg",
    bio: "Former SpaceX propulsion engineer, specializing in combined-cycle engines and reusable launch systems.",
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
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none"
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

