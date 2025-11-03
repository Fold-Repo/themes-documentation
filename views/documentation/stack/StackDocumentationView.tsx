'use client'

import { FooterTwo, DocumentationSidebar } from '@/components'
import { Project } from '@/types'
import { DocSection, DocContentBlock } from '@/types/documentation'
import { Button, Chip } from '@heroui/react'
import Link from 'next/link'
import { getDocumentation } from '@/data/documentation'
import { useMemo } from 'react'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface StackDocumentationViewProps {
    projectName: string
    stackName: string
    project: Project
}

const renderContent = (section: DocSection) => {
    const { content } = section

    if (typeof content === 'string') {
        return <p className="mt-2 text-slate-60 text-sm" dangerouslySetInnerHTML={{ __html: content }} />
    }

    if (Array.isArray(content) && content.length > 0 && typeof content[0] === 'string') {
        return (
            <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700 text-sm">
                {content.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
            </ul>
        )
    }

    if (Array.isArray(content) && content.length > 0 && typeof content[0] === 'object' && 'type' in content[0]) {
        const blocks = content as DocContentBlock[]
        return (
            <div className="mt-3">
                {blocks.map((block: DocContentBlock, idx: number) => {
                    switch (block.type) {
                        case 'paragraph':
                            return (
                                <p
                                    key={idx}
                                    className={`text-sm mt-2 text-slate-600 ${block.className || ''}`}
                                    dangerouslySetInnerHTML={{ __html: block.content || '' }}
                                />
                            )
                        case 'list':
                            return (
                                <ul key={idx} className={`mt-3 space-y-3 list-disc list-inside text-slate-700 ${block.className || ''}`}>
                                    {block.items?.map((item, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </ul>
                            )
                        case 'code':
                            return (
                                <React.Fragment key={idx}>
                                    <div className={`mt-3 w-full overflow-hidden ${block.className || ''}`}>
                                        <SyntaxHighlighter
                                            language={block.language || 'bash'}
                                            style={vscDarkPlus}
                                            customStyle={{
                                                borderRadius: '0.5rem',
                                                padding: '1rem',
                                                fontSize: '0.875rem',
                                                marginTop: '0.75rem',
                                                backgroundColor: '#0f172b',
                                                wordBreak: 'break-word',
                                                overflowWrap: 'break-word',
                                                whiteSpace: 'pre-wrap',
                                            }}
                                            showLineNumbers={false}
                                            wrapLines={true}>
                                            {block.content || ''}
                                        </SyntaxHighlighter>
                                    </div>

                                    {/* <div className={`mt-3 w-full overflow-x-auto ${block.className || ''}`}>

                                        <pre className="rounded-lg p-4 mt-3 bg-[#011627] text-gray-200 whitespace-pre-wrap overflow-wrap-anywhere text-xs !font-light" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}><code className="block">{block.content || ''}</code></pre>

                                    </div> */}
                                </React.Fragment>
                            )
                        case 'html':
                            return (
                                <div
                                    key={idx}
                                    className={`text-sm ${block.className || ''}`}
                                    dangerouslySetInnerHTML={{ __html: block.content || '' }}
                                />
                            )
                        default:
                            return null
                    }
                })}
            </div>
        )
    }

    return null
}

const StackDocumentationView = ({ projectName, stackName, project }: StackDocumentationViewProps) => {

    const stackDisplayName = stackName.charAt(0).toUpperCase() + stackName.slice(1).toLowerCase()
    const projectDisplayName = projectName

    const documentation = useMemo(() => {
        return getDocumentation(project.id, stackName)
    }, [project.id, stackName])


    const sidebarItems = useMemo(() => {
        if (!documentation) return []
        return [
            { id: 'overview', label: 'Overview', href: '#overview' },
            ...documentation.sections.map(section => ({
                id: section.id,
                label: section.title,
                href: `#${section.id}`,
            })),
        ]
    }, [documentation])

    if (!documentation) {
        return (
            <div className="container py-16">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Documentation not found</h2>
                    <p className="text-gray-600">Documentation for {projectDisplayName} {stackDisplayName} is not available yet.</p>
                </div>
            </div>
        )
    }

    return (
        <>

            <div className="container py-16">

                <div className="grid xl:grid-cols-12 gap-10">

                    <div className="xl:col-span-3">
                        <div className="sticky top-20">
                            <DocumentationSidebar
                                projectName={`${projectDisplayName} ${stackDisplayName}`}
                                primaryColor={project.theme.primaryColor}
                                items={sidebarItems}
                            />
                        </div>
                    </div>

                    <div className="xl:col-span-9 space-y-5">

                        <header id="overview">
                            <div className="flex items-end flex-wrap justify-between gap-x-2 gap-y-5">

                                <div className="max-w-[80%]">

                                    <h2 className='text-black text-lg font-grotesk font-semibold'>{documentation.overview.title}</h2>

                                    <div className="flex items-center flex-wrap gap-5">

                                        <p className='text-xs text-gray-600' dangerouslySetInnerHTML={{ __html: documentation.overview.description }} />

                                        <div className="flex items-center gap-2 flex-wrap">
                                            {documentation.overview.tags.map((tag, idx) => (
                                                <Chip
                                                    key={idx}
                                                    size="sm"
                                                    className={`text-xs ${tag.bgColor} ${tag.textColor}`}>
                                                    {tag.label}
                                                </Chip>
                                            ))}
                                        </div>

                                    </div>

                                </div>

                                <Button
                                    as={Link}
                                    href={`/template/${project.id}/${stackName.toLowerCase()}`}
                                    className='cursor-pointer text-white text-xs h-10 px-5'
                                    style={{ backgroundColor: project.theme.primaryColor }}
                                    radius='sm'>
                                    Visit Theme
                                </Button>

                            </div>

                        </header>

                        {/* Documentation Sections */}
                        {documentation.sections.map((section, index) => (
                            <React.Fragment key={section.id}>
                                <section id={section.id} className="mb-16">

                                    <h3 className="text-lg font-semibold text-black mb-3 font-grotesk">
                                        {section.title}
                                    </h3>

                                    {renderContent(section)}

                                </section>
                                {index < documentation.sections.length - 1 && (
                                    <div className="w-full h-px bg-gray-200 my-8"></div>
                                )}
                            </React.Fragment>
                        ))}

                    </div>

                </div>

            </div>

            <FooterTwo
                bgColor={project.theme.primaryColor}
                title={`I Love The ${projectDisplayName} ${stackDisplayName} Template`}
                description={`Explore the premium ${projectDisplayName} ${stackDisplayName} template. Professional design, powerful features, and easy customization.`}
            />

        </>
    )
}

export default StackDocumentationView

