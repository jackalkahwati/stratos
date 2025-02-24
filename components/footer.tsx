import Link from "next/link"
import { MapPin, Mail } from "lucide-react"

const footerLinks = {
  Company: [
    { name: "About", href: "/about" },
    { name: "Technology", href: "/technology" },
    { name: "Missions", href: "/missions" },
    { name: "Contact", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
}

const team = [
  {
    name: "Martin Dez",
    role: "CEO",
  },
  {
    name: "Jack Al-Kahwati",
    role: "CTO",
  },
]

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-8 py-16 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Stratos</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a
              href="https://maps.google.com/?q=1400+Mission+St,San+Francisco,CA+94103"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>
                1400 Mission St.
                <br />
                San Francisco, CA 94103
              </span>
            </a>
            <a
              href="mailto:contact@stratos.aero"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>contact@stratos.aero</span>
            </a>
          </div>
        </div>
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="space-y-4">
            <h4 className="font-bold">{category}</h4>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="space-y-4">
          <h4 className="font-bold">Team</h4>
          <ul className="space-y-2 text-sm">
            {team.map((member) => (
              <li key={member.name} className="text-muted-foreground hover:text-primary transition-colors">
                {member.name} · {member.role}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container border-t py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Stratos. All rights reserved.</p>
      </div>
    </footer>
  )
}

