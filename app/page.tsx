import Hero from "../components/hero"
import About from "../components/about"
import Technology from "../components/technology"
import Applications from "../components/applications"
import Contact from "../components/contact"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Technology />
      <Applications />
      <Contact />
    </main>
  )
}

