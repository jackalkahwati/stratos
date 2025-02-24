export default function TermsPage() {
  return (
    <main className="container py-24">
      <div className="mx-auto max-w-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: February 24, 2024</p>
        </div>
        <div className="prose dark:prose-invert">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws
            and regulations.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on Stratos's website for personal, non-commercial use
            only. This is the grant of a license, not a transfer of title.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The materials on Stratos's website are provided on an 'as is' basis. Stratos makes no warranties, expressed or
            implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties
            or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property
            or other violation of rights.
          </p>

          <h2>Limitations</h2>
          <p>
            In no event shall Stratos or its suppliers be liable for any damages (including, without limitation, damages for
            loss of data or profit, or due to business interruption) arising out of the use or inability to use the
            materials on Stratos's website.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our Terms of Service, please contact us at{" "}
            <a href="mailto:contact@stratos.aero" className="text-primary hover:underline">
              contact@stratos.aero
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}

