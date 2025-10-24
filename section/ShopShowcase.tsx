'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ShopShowcaseImage {
    id: number
    title: string
    description: string
    image: string
}

interface ShopShowcaseProps {
    projectName: string
    showcases: ShopShowcaseImage[]
    primaryColor?: string
    autoPlayInterval?: number
    layoutsCount: number
    layoutsLabel: string
}

const ShopShowcase = ({ 
    projectName, 
    showcases, 
    primaryColor = '#0065EA',
    autoPlayInterval = 5000,
    layoutsCount,
    layoutsLabel
}: ShopShowcaseProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentShowcase = showcases[currentIndex]

    // Autoplay functionality
    useEffect(() => {
        if (showcases.length <= 1) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === showcases.length - 1 ? 0 : prevIndex + 1
            )
        }, autoPlayInterval)

        return () => clearInterval(interval)
    }, [showcases.length, autoPlayInterval])

    return (
        <div className="space-y-3 pb-12">

            {/* Showcase Container */}
            <div className="relative bg-neutral-100 rounded-xl overflow-hidden">

                <div className="container relative pt-14">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}>
                            {/* Text Content */}
                            <div className="relative z-10 py-12 md:py-16 lg:py-20 max-w-2xl">

                                <div className="space-y-6 md:space-y-8">

                                    <h3 className="text-sm md:text-base font-semibold font-grotesk"
                                        style={{ color: primaryColor }}>
                                        {projectName} {currentShowcase.title}
                                    </h3>

                                    <div className="space-y-4 md:space-y-5">

                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight">
                                            {currentShowcase.description}
                                        </h2>

                                        <p className="max-w-md text-sm md:text-base text-gray-600 leading-relaxed">
                                            Showcase your business story, featured projects, and achievements to engage your clients.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Image */}
                            <div className="absolute right-8 lg:right-16 bottom-0 hidden lg:block">
                                <div className="relative w-[400px] xl:w-[500px] h-[450px] xl:h-[550px]">
                                    <Image
                                        src={currentShowcase.image}
                                        alt={`${currentShowcase.title} preview`}
                                        fill
                                        className="object-contain object-bottom"
                                    />
                                </div>
                            </div>
                            
                        </motion.div>
                    </AnimatePresence>

                    {/* Layouts Badge */}
                    <div className="absolute top-5 right-14 w-20 h-20 rounded-full flex flex-col items-center justify-center text-white"
                        style={{ backgroundColor: primaryColor }}>
                        <span className="text-lg md:text-xl font-semibold">{layoutsCount}+</span>
                        <span className="text-xs">{layoutsLabel}</span>
                    </div>

                </div>

            </div>

            {/* Pagination Dots */}
            {showcases.length > 1 && (
                <div className="flex justify-center items-center gap-2.5 py-3">
                    {showcases.map((_, index) => (
                        <button key={index} onClick={() => setCurrentIndex(index)}
                            className="size-2 cursor-pointer rounded-full transition-colors"
                            style={{
                                backgroundColor: index === currentIndex ? primaryColor : '#d4d4d8'
                            }}
                            aria-label={`Go to showcase ${index + 1}`}
                        />
                    ))}
                </div>
            )}

        </div>
    )
}

export default ShopShowcase

