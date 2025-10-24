import React from 'react'

interface FeatureCardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    title: string
    description: string
    iconColor?: string
}

const FeatureCard = ({ icon: Icon, title, description, iconColor = '#2D2F5C' }: FeatureCardProps) => {
    return (
        <div className="bg-white flex flex-col items-center justify-center 
        text-center space-y-3 border border-[#ECECEC] shadow-[0px_6px_12px_-1px_rgba(32,32,32,0.04)] rounded-xl p-5 md:px-10 py-12 md:py-16">

            <div className="flex items-center justify-center p-3 rounded-lg mb-7" style={{ backgroundColor: iconColor }}>
                <Icon className="size-6 text-white" />
            </div>

            <h3 className="text-lg font-medium font-grotesk">{title}</h3>

            <p className="text-sm sm:text-base leading-6 text-[#4B5563]">
                {description}
            </p>

        </div>
    )
}

export default FeatureCard