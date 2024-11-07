import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

// projects
const projects = [
  {
    title: "Dailify App",
    description: "A daily logger app for tracking activities and habits",
    technologies: ["React Native", "Expo", "Supabase"],
    github: "",
  },
  {
    title: "Expense Tracker",
    description: "Web app to track and manage personal expenses",
    technologies: ["ReactJS", "Firebase"],
    github: "https://github.com/nagavineerpasam/expense-tracker",
  },
  {
    title: "Real Estate App",
    description: "Mobile app for browsing apartments with wishlist functionality",
    technologies: ["React Native", "Firebase"],
    github: "https://github.com/nagavineerpasam/react-native-realestate-app",
  },
  {
    title: "Movie Search App",
    description: "Browse movies, read summaries, and view ratings",
    technologies: ["ReactJS", "TMDB API"],
    github: "https://github.com/nagavineerpasam/moviesearchApp",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="rounded-lg border bg-card p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-zinc-900 dark:hover:bg-zinc-800/90 dark:border-zinc-800">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>  
                  {project.github && 
                  <Link href={project.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>}
                </Button>
                {/* <Button variant="outline" size="sm" asChild>
                  <Link href={project.demo} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}