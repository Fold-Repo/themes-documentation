export interface DocSection {
    id: string
    title: string
    icon?: string
    content: string | string[] | DocContentBlock[]
}

export interface DocContentBlock {
    type: 'paragraph' | 'list' | 'code' | 'html'
    content?: string
    items?: string[]
    language?: string
    className?: string
}

export interface ProjectStackDocumentation {
    projectId: number
    stackName: string
    overview: {
        title: string
        description: string
        tags: Array<{
            label: string
            bgColor: string
            textColor: string
        }>
        supportUrl?: string
    }
    sections: DocSection[]
}

