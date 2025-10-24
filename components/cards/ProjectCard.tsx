'use client'

import { Button, Chip } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types'

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden border border-[#ECECEC] shadow-[0px_6px_12px_-1px_#2020200A] group">

            <div className="bg-gray-300 aspect-9/6 w-full overflow-hidden relative">
                <div className="transition-transform duration-3000 ease-linear group-hover:-translate-y-[60%]">
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={600} 
                        height={1200}
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <div className="px-4 pt-3 pb-4 space-y-5">

                <div className="space-y-1.5">
                    <h3 className="text-sm md:text-base font-medium">{project.title}</h3>
                    <p className="text-xs text-gray-500 leading-5 line-clamp-2">{project.description}</p>
                </div>

                <div className="flex items-center flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                        <Chip key={index} className='text-[11px]'>{feature}</Chip>
                    ))}
                </div>

                <div className="border-t border-[#ECECEC] pt-3">
                    <Link href={`/template/${project.id}`}>
                        <Button radius='sm' fullWidth className='text-xs bg-[#6276DC] text-white'>Preview</Button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default ProjectCard