import { Hero } from "@/components/sections/hero"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8">
        <Hero />
        <Projects />
        <Experience />
      </div>
    </main>
  )
}