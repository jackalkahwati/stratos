import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[60vh] bg-gradient-to-br from-background via-background/90 to-background/50">
      <div className="container relative z-10 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Pioneering the Future of{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Space Travel
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            At Stratos, we're not just building spacecraft; we're revolutionizing how humanity accesses space. Our team of
            visionary engineers and scientists is dedicated to making space travel more efficient, sustainable, and
            accessible than ever before.
          </p>
        </div>
      </div>
    </section>
  )
}

