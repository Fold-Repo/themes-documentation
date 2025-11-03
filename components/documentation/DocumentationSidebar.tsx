'use client'

interface DocumentationSidebarProps {
    projectName: string
    primaryColor: string
    items?: Array<{
        id: string
        label: string
        href: string
    }>
}

const defaultItems = [
    { id: 'overview', label: 'Overview', href: '#overview' },
]

const DocumentationSidebar = ({ 
    projectName, 
    primaryColor, 
    items = defaultItems 
}: DocumentationSidebarProps) => {

    const handleClick = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        }
    }

    return (
        <div className="space-y-4">
            <div 
                className="text-sm uppercase font-semibold font-grotesk text-white px-4 py-3 rounded-lg"
                style={{ backgroundColor: primaryColor }}
            >
                {projectName} Navigation
            </div>

            <div className="space-y-2">
                {items.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleClick(item.href)}
                        className="cursor-pointer bg-[#F5F9FB] text-sm text-[#626060] px-4 py-3 rounded-lg hover:bg-[#E8F0F5] transition-colors"
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DocumentationSidebar

