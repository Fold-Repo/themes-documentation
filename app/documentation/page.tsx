import { Footer } from '@/components'
import { DocumentationView } from '@/views'
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Documentation",
}

export default function DocumentationPage() {
    return <DocumentationView />
}

