import { ProjectDetails } from "@/views";
import { Metadata } from "next";
import { getProjectById } from "@/data/projects";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params
    const project = getProjectById(Number(id))
    
    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    return {
        title: `${project.title} E-Commerce Template`,
    }
}

export default async function page({ params }: PageProps) {
    const { id } = await params
    const project = getProjectById(Number(id))

    if (!project) {
        notFound()
    }

    return <ProjectDetails project={project} />
}
