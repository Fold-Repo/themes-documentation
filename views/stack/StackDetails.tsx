import { FooterTwo, HeroBannerTwo, PageGallery } from '@/components'
import { BrowseTheme, ShopShowcase, WhyChoose } from '@/section'
import { Project, TechStack } from '@/types'
import { getProjectPages } from '@/data/pages'

interface StackDetailsProps {
    project: Project
    stack: TechStack
}

const StackDetails = ({ project, stack }: StackDetailsProps) => {
    return (
        <>

            <section id="overview">
                <HeroBannerTwo
                    title={`${project.title} ${stack.name} Template`}
                    description={stack.description}
                    bannerImage={`/img/projects/${project.id}/banner.png`}
                    bannerBg={project.theme.bannerBg}
                    primaryColor={project.theme.primaryColor}
                    showBuyButton={stack.available}
                    demoUrl={stack.demoUrl}
                />
            </section>

            <section id="features">
                <WhyChoose iconColor={project.theme.iconColor} />
            </section>

            <BrowseTheme
                bgColor={project.theme.primaryColor}
                count={1}
            />

            <section id="pages">
                {(() => {
                    const pages = stack.name.toLowerCase() === 'html' 
                        ? getProjectPages(project.id, 'react')
                        : getProjectPages(project.id, stack.name.toLowerCase())
                    
                    return pages.length > 0 ? (
                        <PageGallery
                            pages={pages}
                            primaryColor={project.theme.primaryColor}
                            title={`${project.title} ${stack.name} Pages Gallery`}
                            description={`Explore all the beautiful pages included in the ${project.title} ${stack.name} template. Each page is professionally designed and ready to use.`}
                        />
                    ) : (
                        <section className="py-16">
                            <div className="container">
                                <div className="max-w-xl mx-auto text-center">
                                    <div className="mb-6">
                                        <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                            <svg className="size-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Screenshots Available</h3>
                                    <p className="text-gray-600">Screenshots for this template are coming soon.</p>
                                </div>
                            </div>
                        </section>
                    )
                })()}
            </section>

            <section id="showcase">
                <ShopShowcase
                    projectName={`${project.title} ${stack.name}`}
                    showcases={project.showcases}
                    primaryColor={project.theme.primaryColor}
                    layoutsCount={project.layoutsCount}
                    layoutsLabel={project.layoutsLabel}
                />
            </section>

            <FooterTwo
                bgColor={project.theme.primaryColor}
                title={`I Love The ${project.title} ${stack.name} Template`}
            />

        </>
    )
}

export default StackDetails

