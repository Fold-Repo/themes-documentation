import { TechStack, PageLayout } from './techStack'

export interface ProjectTheme {
    bannerBg: string
    primaryColor: string
    iconColor: string
}

export interface ShopShowcaseItem {
    id: number
    title: string
    description: string
    image: string
}

export interface Project {
    id: number
    title: string
    description: string
    image: string
    features: string[]
    category: string
    theme: ProjectTheme
    techStacks: TechStack[]
    showcases: ShopShowcaseItem[]
    pages?: PageLayout[]
    layoutsCount: number
    layoutsLabel: string
}

