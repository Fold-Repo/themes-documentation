import { FooterTwo, HeroBannerTwo, PageGallery } from '@/components'
import { BrowseTheme, ShopShowcase, TechStackSection, WhyChoose } from '@/section'
import { Project } from '@/types'
import { getProjectPages } from '@/data/pages'

interface ProjectDetailsProps {
    project: Project
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    return (
        <>

            <section id="overview">
                <HeroBannerTwo 
                    title={`${project.title}`}
                    description={project.description}
                    bannerImage={`/img/projects/${project.id}/banner.png`}
                    bannerBg={project.theme.bannerBg}
                    primaryColor={project.theme.primaryColor}
                    showBuyButton={false}
                />
            </section>

            <section id="features">
                <WhyChoose iconColor={project.theme.iconColor} />
            </section>

            <BrowseTheme 
                bgColor={project.theme.primaryColor} 
                count={project.techStacks.filter(stack => stack.available).length}
            />

            <section id="tech-stacks">
                <TechStackSection project={project} />
            </section>

            <section id="showcase">
                <ShopShowcase 
                    projectName={project.title}
                    showcases={project.showcases}
                    primaryColor={project.theme.primaryColor}
                    layoutsCount={project.layoutsCount}
                    layoutsLabel={project.layoutsLabel}
                />
            </section>

            {(() => {
                const pages = getProjectPages(project.id, 'react')
                return pages.length > 0 && (
                    <section id="pages">
                        <PageGallery 
                            pages={pages}
                            primaryColor={project.theme.primaryColor}
                            title={`${project.title} Pages Gallery`}
                            description={`Explore all the beautiful pages included in the ${project.title} template. Each page is professionally designed and ready to use.`}
                        />
                    </section>
                )
            })()}

            <FooterTwo 
                bgColor={project.theme.primaryColor}
                title={`I Love The ${project.title} Template`}
            />

        </>
    )
}

export default ProjectDetails