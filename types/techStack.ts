export interface PageLayout {
    id: number
    name: string
    category: string
    image: string
    url?: string
    isHighlight?: boolean
}

export interface TechStack {
    id: number
    name: string
    description: string
    image: string
    available: boolean
    href?: string
    demoUrl?: string
    pages?: PageLayout[]
}

