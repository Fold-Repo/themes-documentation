'use client'

import { ScrollAnimation } from '@/lib'
import { Button } from '@heroui/react'
import Image from 'next/image'

interface HeroBannerTwoProps {
    title: string
    description: string
    bannerImage: string
    bannerBg?: string
    primaryColor?: string
    showBuyButton?: boolean
    demoUrl?: string
}

const HeroBannerTwo = ({ 
    title, 
    description, 
    bannerImage, 
    bannerBg = '#FFF5F5', 
    primaryColor = '#DB4444',
    showBuyButton = true,
    demoUrl
}: HeroBannerTwoProps) => {
    return (
        <div className="flex items-center justify-center py-16 min-h-[80vh]" style={{ backgroundColor: bannerBg }}>

            <div className="container">

                <div className="relative flex flex-col justify-between gap-10 md:gap-12 lg:flex-row lg:items-center xl:gap-16 z-5">

                    <ScrollAnimation className="w-full lg:w-1/2 lg:max-w-2xl space-y-4 lg:space-y-5 2xl:space-y-6 z-5" animation="fadeUp" delay={0.4} duration={0.6}>

                        <h2 className='text-2xl sm:text-3xl xl:text-4xl leading-9 lg:leading-12 font-bold font-grotesk'>
                            {title}
                        </h2>

                        <p className="space-y-4 text-sm xl:text-base leading-7">
                            {description}
                        </p>

                        <div className="flex items-center gap-3">
                            {showBuyButton && (
                                <Button 
                                    className='text-white h-10 px-8 text-xs mt-1'
                                    radius='sm'
                                    style={{ backgroundColor: primaryColor }}>
                                    Buy Now
                                </Button>
                            )}
                            
                            {demoUrl && (
                                <Button 
                                    as="a"
                                    href={demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='h-10 px-8 text-xs mt-1'
                                    radius='sm'
                                    variant="bordered"
                                    style={{ borderColor: primaryColor, color: primaryColor }}>
                                    View Demo
                                </Button>
                            )}
                        </div>

                    </ScrollAnimation>

                    <ScrollAnimation className="w-full lg:w-[70%] mt-5 lg:mt-0" animation="fadeUp" delay={0.4} duration={0.6}>
                        <Image src={bannerImage} alt={title} width={1150} height={680} 
                        className="max-w-full object-cover h-full" priority />
                    </ScrollAnimation>

                </div>

            </div>

        </div>
    )
}

export default HeroBannerTwo