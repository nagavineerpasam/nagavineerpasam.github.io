"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AnimatedText } from "@/components/ui/animated-text"

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-16 sm:py-24" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold tracking-tight mb-8 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="space-y-6 text-lg">
          <AnimatedText
            text="I'm a Full Stack Developer with a deep passion for exploring the core aspects of software development. My journey in tech has been driven by curiosity and a desire to build innovative solutions that make a difference."
            className="text-muted-foreground"
          />
          <AnimatedText
            text="Currently working at Urban Ground GmbH, I specialize in building full-stack applications and developing core features that enhance user experience and business operations."
            className="text-muted-foreground"
          />
          <AnimatedText
            text="Beyond coding, I'm an active participant in the programming community, having achieved notable rankings in competitive programming."
            className="text-muted-foreground"
          />
        </div>
      </div>
    </section>
  )
}