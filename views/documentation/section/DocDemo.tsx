'use client'

import { Card, Image, Button } from '@heroui/react'
import { projects } from '@/data/projects'
import Link from 'next/link'

const DocDemo = () => {
    
    const templates = projects.flatMap(project =>
        project.techStacks
            .filter(stack => stack.available)
            .map(stack => ({
                id: `${project.id}-${stack.id}`,
                name: project.title,
                techStack: stack.name,
                image: stack.image,
                url: stack.demoUrl || stack.href,
                category: project.category
            }))
    )

    return (
        <div className='container pb-16'>

            <div className="p-3 md:p-5 rounded-2xl" 
                style={{ background: 'linear-gradient(114.05deg, #FFFFFF 0.78%, #EDE0FB 109.78%)' }}>

                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {templates.map(template => (
                        <Card 
                            key={template.id} 
                            isFooterBlurred 
                            className="border-none relative p-0.5" 
                            radius="lg">
                            <Image
                                alt={`${template.name} ${template.techStack}`}
                                className="object-cover object-top"
                                height={350}
                                src={template.image}
                                width="100%"
                            />
                            <div className="pl-3 pr-2 h-auto flex items-center color-inherit subpixel-antialiased bg-gray-900/40 backdrop-blur backdrop-saturate-150 before:bg-gray-900/10 border-gray-900/10 border-1 overflow-hidden py-1.5 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%-10px)] shadow-small ml-[3px] z-10">
                                <div className="flex flex-col grow">
                                    <p className="text-tiny text-white">{template.name}{' '}{template.techStack}</p>
                                    <p className="text-tiny text-white/80">{template.techStack}</p>
                                </div>
                                <Button as={Link} href={`/documentation/${template.name.toLowerCase()}/${template.techStack.toLowerCase()}`}
                                    className="text-tiny text-white bg-black/30" color="default"
                                    radius="lg" size="sm" variant="flat">
                                    View
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default DocDemo