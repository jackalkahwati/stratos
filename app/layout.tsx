import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "../components/theme-provider"
import { Toaster } from "../components/ui/toaster"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "Stratos - Hypersonic Spaceplanes",
  description: "Revolutionizing space access with reusable hypersonic spaceplanes.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}