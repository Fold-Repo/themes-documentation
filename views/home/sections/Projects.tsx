import { ProjectCard } from '@/components'
import { projects } from '@/data/projects'

const Projects = () => {
    return (
        <div className="container py-14">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}

            </div>

        </div>
    )
}

export default Projects