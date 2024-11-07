import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Contact me if you are interested in collaborating on cool, innovative projects!
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild>
            <Link href="mailto:nagavineerpasam@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://www.linkedin.com/in/vineerpasam/" target="_blank">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/nagavineerpasam" target="_blank">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}