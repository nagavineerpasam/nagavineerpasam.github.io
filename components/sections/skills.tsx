import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const skills = {
  "Languages & Frameworks": [
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Angular",
  ],
  "Databases": [
    "MySQL",
    "Supabase",
    "Firebase",
  ],
  "Tools & Other": [
    "Docker",
    "Kubernetes",
    "Git",
    "REST APIs",
    "Material UI",
    "Bootstrap",
    "Jest",
  ],
}


const achievements = [
  "Codechef Global Rank 139",
  "2nd place in Problem Solving Coding Contest, Lovely Professional University",
  "State Rank 8 in SAST Olympiad Exam",
  "Solved 500+ problems on platforms like Codechef, Leetcode, Hackerrank, GeeksforGeeks",
]

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Skills</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category} className="rounded-lg border bg-card p-4 transition-all hover:scale-[1.01] hover:shadow-lg dark:bg-zinc-900 dark:hover:bg-zinc-800/90 dark:border-zinc-800">
            <CardHeader>
              <CardTitle>{category}</CardTitle>
              <CardDescription>
                Technologies I work with
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
        ))}
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-bold tracking-tight mb-6">Achievements</h3>
        <Card className="rounded-lg border bg-card p-4 transition-all hover:scale-[1.01] hover:shadow-lg dark:bg-zinc-900 dark:hover:bg-zinc-800/90 dark:border-zinc-800">
          <CardContent className="pt-6">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}