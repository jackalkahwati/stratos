import { SignUpForm } from "@/components/auth/signup-form"
import { ModeToggle } from "@/components/mode-toggle"

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="absolute right-4 top-4">
        <ModeToggle />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <SignUpForm />
      </div>
    </main>
  )
}

