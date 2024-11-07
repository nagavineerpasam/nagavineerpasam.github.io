"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 gradient-text">
            I'm Vineer,
          </h1>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 gradient-text">
            Full Stack Developer
          </h1>
        </motion.div>
        <AnimatedText
          text="Passionate about building innovative tech products and exploring new technologies. Specialized in React, Node.js, and modern web development."
          className="text-xl text-muted-foreground max-w-2xl mb-8"
        />
        <motion.div
          className="flex gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Button asChild className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
            <Link href="#contact">
              Let's talk <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
        </motion.div>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}