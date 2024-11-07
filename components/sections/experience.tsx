import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const experience = [
  {
    company: "Urban Ground GmbH",
    role: "Senior Software Engineer",
    period: "June 2021 - Present",
    description: [
      "Built full-stack applications and developed core features for an admin dashboard handling payments and tenant mappings",
      "Developed a React Native mobile app with keys tracking using OCR",
      "Optimized APIs for improved performance and participated in code reviews",
      "Technologies: React Native, Node.js, Angular, Jest, Firebase, Material UI, Bootstrap, MySQL.",
    ],
    technologies: [
      "Node.js",
      "Angular",
      "Jest",
      "Firebase",
      "Material UI",
      "Bootstrap",
      "MySQL",
    ],
  },
  {
    company: "Niki.ai",
    role: "Software Engineering Intern",
    period: "Dec 2020 - June 2021",
    description: [
      "Created APIs using Java and Spring Boot for mobile app functionalities",
      "Developed an admin dashboard with Python Django, learned Docker and Kubernetes.",
      "Technologies: Java, Python, JavaScript, ReactJS, MySQL, Docker, Kubernetes.",
    ],
    technologies: [
      "Java",
      "Python",
      "JavaScript",
      "ReactJS",
      "MySQL",
      "Docker",
      "Kubernetes",
    ],
  },
]


export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
      <div className="space-y-6">
        {experience.map((job) => (
          <Card key={job.company} className="rounded-lg border bg-card p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-zinc-900 dark:hover:bg-zinc-800/90 dark:border-zinc-800">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{job.role}</CardTitle>
                  <CardDescription>{job.company}</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground">{job.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                {job.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}