import { DiscordHero } from "@/components/community/discord-hero"
import { DiscordChannels } from "@/components/community/discord-channels"
import { DiscordFeatures } from "@/components/community/discord-features"
import { DiscordCTA } from "@/components/community/discord-cta"

export default function DiscordPage() {
  return (
    <main className="min-h-screen">
      <DiscordHero />
      <DiscordChannels />
      <DiscordFeatures />
      <DiscordCTA />
    </main>
  )
}

