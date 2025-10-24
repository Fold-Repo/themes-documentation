'use client'

import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TechStack } from '@/types'

interface ProjectTechCardProps {
    techStack: TechStack
    projectName: string
    primaryColor?: string
}

const ProjectTechCard = ({ techStack, projectName, primaryColor = '#0065EA' }: ProjectTechCardProps) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden border border-[#ECECEC] shadow-[0px_6px_12px_-1px_#2020200A] group">

            <div className="bg-gray-100 aspect-9/6 w-full overflow-hidden relative">
                <Image 
                    src={techStack.image} 
                    alt={techStack.name} 
                    width={522} 
                    height={340} 
                    className="w-full h-full object-cover" 
                />
                {!techStack.available && (
                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Coming Soon
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between p-5 gap-3">

                <div className="flex-1 space-y-1">

                    <h3 className="text-lg font-medium font-grotesk">{projectName} {techStack.name}</h3>

                    <p className="text-sm text-gray-500 line-clamp-2">
                        {techStack.description}
                    </p>

                </div>

                {techStack.available && techStack.href ? (
                    <Button 
                        as={Link}
                        href={techStack.href}
                        radius='sm' 
                        className='text-xs text-white px-4 h-9' 
                        size="sm"
                        style={{ backgroundColor: primaryColor }}>
                        View Now
                    </Button>
                ) : (
                    <Button 
                        radius='sm' 
                        className='text-xs bg-gray-300 text-gray-500 px-4 h-9 cursor-not-allowed' 
                        size="sm"
                        isDisabled>
                        View Now
                    </Button>
                )}

            </div>

        </div>
    )
}

export default ProjectTechCard