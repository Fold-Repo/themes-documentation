'use client'

import { Button } from '@heroui/react'

interface FooterTwoProps {
    bgColor?: string
    title?: string
    description?: string
}

const FooterTwo = ({ 
    bgColor = '#0065EA', 
    title = 'I Love The E-Commerce Template',
    description = 'Impressive design, powerful features, and easy customization'
}: FooterTwoProps) => {
    return (
        <footer className="w-full py-16 flex items-center justify-center text-center" style={{ backgroundColor: bgColor }}>

            <div className="container">

                <div className="space-y-8 max-w-2xl mx-auto text-white">

                    <div className="space-y-1.5">

                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center font-grotesk">
                            {title}
                        </h2>

                        <p className="text-sm text-center">
                            {description}
                        </p>

                    </div>

                    <Button variant='bordered' className='px-8 border-white text-white'>Purchase Now</Button>

                </div>

            </div>

        </footer>
    )
}

export default FooterTwo