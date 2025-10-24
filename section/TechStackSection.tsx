import ProjectTechCard from '@/components/cards/ProjectTechCard'
import { Project } from '@/types'

interface TechStackSectionProps {
    project: Project
}

const TechStackSection = ({ project }: TechStackSectionProps) => {
    return (
        <div className="py-14">

            <div className="container">

                <div className="space-y-2 max-w-2xl mx-auto mb-12">

                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center font-grotesk">
                        Available Tech Stacks for {project.title}
                    </h2>

                    <p className="text-sm text-center text-gray-500">
                        Choose your preferred technology stack. Start your journey with a beautifully designed template and build a strong, high-performing online store.
                    </p>
                    
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {project.techStacks.map((techStack) => (
                        <ProjectTechCard 
                            key={techStack.id}
                            techStack={techStack}
                            projectName={project.title}
                            primaryColor={project.theme.primaryColor}
                        />
                    ))}

                </div>

            </div>

        </div>
    )
}

export default TechStackSection