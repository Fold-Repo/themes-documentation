import { StackDetails } from "@/views/stack";
import { Metadata } from "next";
import { getProjectById } from "@/data/projects";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ id: string; stack: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id, stack } = await params
    const project = getProjectById(Number(id))
    
    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    const techStack = project.techStacks.find(s => s.name.toLowerCase() === stack.toLowerCase())
    
    if (!techStack) {
        return {
            title: "Stack Not Found",
        }
    }

    return {
        title: `${project.title} ${techStack.name} Template`,
    }
}

export default async function page({ params }: PageProps) {
    const { id, stack } = await params
    const project = getProjectById(Number(id))

    if (!project) {
        notFound()
    }

    const techStack = project.techStacks.find(s => s.name.toLowerCase() === stack.toLowerCase())

    if (!techStack) {
        notFound()
    }

    return <StackDetails project={project} stack={techStack} />
}

