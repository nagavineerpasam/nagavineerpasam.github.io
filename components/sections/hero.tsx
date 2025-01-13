"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-16">
      <div className="flex flex-col items-start text-left">
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            Vineer
          </h1>
          <div className="flex gap-4 mt-4 mb-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/nagavineerpasam" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/vineerpasam" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:nagavineerpasam@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="max-w-2xl">
          <p className="text-lg text-muted-foreground">
            I&apos;m a Full Stack Developer with a deep passion for exploring the core aspects of software development. My journey in tech has been driven by curiosity and a desire to build innovative solutions that make a difference. I specialize in building mobile and full-stack applications, leveraging modern technologies to create efficient, user-friendly, and impactful software.
          </p>
        </div>
      </div>
    </section>
  )
}