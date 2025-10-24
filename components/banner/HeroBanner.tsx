'use client'

import { ScrollAnimation } from '@/lib'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { heroBanner } from '@/data/home'

const HeroBanner = () => {
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroBanner.images.length - 1 ? 0 : prevIndex + 1
            )
        }, 15000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-[#241D48] pt-20 flex flex-col items-center justify-between  overflow-hidden">

            <div className="container shrink-0">

                <div className="h-full z-5 pb-12">

                    <ScrollAnimation animation="fadeUp" delay={0.2} duration={0.6}>

                        <div className="space-y-4 text-center max-w-xl mx-auto pb-6 sm:pb-10">

                            <h2 className='text-[#6670D5] text-2xl sm:text-4xl xl:text-5xl leading-10 sm:leading-14 xl:leading-16 font-semibold font-grotesk'>
                                {heroBanner.title}
                            </h2>

                            <p className="text-black-400 text-sm md:text-base leading-6 md:leading-7 text-white">
                                {heroBanner.description}
                            </p>

                        </div>

                    </ScrollAnimation>

                </div>

            </div>

            <div className="relative w-full min-h-[100px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[400px] flex items-end overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 0.98, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.02, y: -20 }}
                            transition={{
                                duration: 1,
                                ease: [0.43, 0.13, 0.23, 0.96],
                            }}
                            className="absolute inset-0 w-full flex items-end">
                            <div className="container mx-auto px-4 w-full">
                                <Image src={heroBanner.images[currentImageIndex].src}
                                    width={1315} height={1200} alt={heroBanner.images[currentImageIndex].alt}
                                    className="w-full h-auto object-contain" priority
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

        </div>
    )
}

export default HeroBanner