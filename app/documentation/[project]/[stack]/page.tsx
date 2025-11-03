import { Metadata } from "next"
import { notFound } from "next/navigation"
import { StackDocumentationView } from "@/views/documentation/stack"
import { projects } from "@/data/projects"

interface PageProps {
    params: Promise<{ project: string; stack: string }>
}

const validStacks = ['react', 'html', 'wordpress']

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { project, stack } = await params
    
    const projectData = projects.find(p => p.title.toLowerCase() === project.toLowerCase())
    
    if (!projectData || !validStacks.includes(stack.toLowerCase())) {
        return {
            title: "Documentation Not Found",
        }
    }

    const stackName = stack.charAt(0).toUpperCase() + stack.slice(1).toLowerCase()

    return {
        title: `${projectData.title} ${stackName} Documentation`,
    }
}

export default async function ProjectStackDocumentationPage({ params }: PageProps) {
    const { project, stack } = await params
    
    const projectData = projects.find(p => p.title.toLowerCase() === project.toLowerCase())
    
    if (!projectData) {
        notFound()
    }

    const techStack = projectData.techStacks.find(s => 
        s.name.toLowerCase() === stack.toLowerCase() && s.available
    )

    if (!techStack || !validStacks.includes(stack.toLowerCase())) {
        notFound()
    }

    return <StackDocumentationView projectName={projectData.title} stackName={stack} project={projectData} />
}

