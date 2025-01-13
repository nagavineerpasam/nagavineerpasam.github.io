import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

const projects = [
  {
    title: "UnderlayX",
    tagline: "Your all-in-one tool to transform images like never before",
    description: "UnderlayX is a revolutionary image editing platform designed to bring your creative visions to life. From customizing backgrounds to creating unique effects with text and shapes, it combines multiple powerful features into a seamless, privacy-focused experience.",
    features: [
      "Clone Objects: Easily duplicate elements within an image",
      "Remove Backgrounds: Instantly isolate subjects",
      "Change and Customize Backgrounds: Transform with new designs",
      "Add Text Behind Subjects: Create stunning layered effects",
      "Privacy-Focused: All processing happens on the client side"
    ],
    website: "https://www.underlayx.com",
    image: "/underlayx.png"
  },
  {
    title: "VC Maker",
    tagline: "Transform plain images into captivating song covers",
    description: "VC Maker is a versatile design tool that enables users to transform ordinary images into visually striking song covers. With features like customizable overlays, music controls, titles, artist names, progress bars, and optional filter effects, it offers flexibility for various creative needs.",
    features: [
      "Add music controls and progress bars for a professional look",
      "Customize titles, captions, and artist names",
      "Apply optional filter effects for enhanced visuals",
      "Toggle overlays to create both minimalist and detailed designs",
      "Perfect for song covers or general image design purposes"
    ],
    website: "https://visualcovermaker.com/",
    image: "/vcmaker.png"
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Projects</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription className="text-lg">{project.tagline}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{project.description}</p>
              <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Button variant="outline" size="sm" asChild className="mb-6">
                <Link href={project.website} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </Link>
              </Button>
              <div className="relative w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="rounded-lg w-full"
                  style={{ height: 'auto' }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}