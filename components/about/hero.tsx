export function AboutHero() {
  return (
    <section className="relative py-24">
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(56,189,248,0.1),rgba(255,255,255,0))]" />
    </section>
  )
}

