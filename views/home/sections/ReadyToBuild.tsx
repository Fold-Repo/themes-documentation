'use client'

import { Button } from '@heroui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ReadyToBuild = () => {
    const pathname = usePathname()

    const handleTemplatesClick = () => {
        if (pathname === '/') {
            // If already on home page, scroll to templates section
            const element = document.querySelector('#templates')
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        } else {
            // If not on home page, navigate to home and scroll
            window.location.href = '/#templates'
        }
    }

    return (
        <div className="pb-12">

            <div className="container">

                <div className="bg-[#2D2F5C] px-6 py-12 md:px-10 md:py-16 rounded-2xl">

                    <div className="max-w-lg mx-auto text-center">

                        <h2 className="text-lg lg:text-2xl font-semibold text-white font-grotesk">
                            Ready to Build your landing page?
                        </h2>

                        <p className="text-white/80 mt-2 text-xs md:text-sm leading-6">Get started with our premium templates and launch your project today!
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 pt-10">

                            <Button 
                                radius='sm' 
                                className="text-xs px-6 py-3 bg-[#6276DC] text-white"
                                onClick={handleTemplatesClick}
                            >
                                Browse all templates
                            </Button>

                            <Button 
                                as={Link}
                                href="/documentation"
                                variant='bordered' 
                                radius='sm' 
                                className="text-xs px-6 py-3 border-[#6276DC] text-[#6276DC]"
                            >
                                View Documentation
                            </Button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ReadyToBuild