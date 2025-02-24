export default function PrivacyPage() {
  return (
    <main className="container py-24">
      <div className="mx-auto max-w-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: February 24, 2024</p>
        </div>
        <div className="prose dark:prose-invert">
          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you fill out forms on our website, including your
            name, email address, and any other information you choose to provide.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to communicate with you about our services, respond to your inquiries, and
            provide you with information about our company and technology.
          </p>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include
            trusted third parties who assist us in operating our website or servicing you.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy, please contact us at{" "}
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

