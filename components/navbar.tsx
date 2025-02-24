'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, Rocket, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Rocket className="h-6 w-6" />
          <span className="text-xl font-bold">Stratos</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/technology" className="transition-colors hover:text-primary">
            Technology
          </Link>
          <Link href="/missions" className="transition-colors hover:text-primary">
            Missions
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About
          </Link>
        </nav>
        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <Button size="sm">Contact Us</Button>
          </Link>
        </div>
        <button
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container py-4 flex flex-col space-y-4">
            <Link
              href="/technology"
              className="transition-colors hover:text-primary px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="/missions"
              className="transition-colors hover:text-primary px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Missions
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-primary px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button size="sm" className="w-full">Contact Us</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

