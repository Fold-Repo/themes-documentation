'use client'

import { ScrollAnimation } from '@/lib'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { techLogos } from '@/data/home'

const rotatingTexts = ['Landing Pages', 'Software', 'Blog', 'Marketing']

const DocBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
        }, 3000) // Change every 3 seconds

        return () => clearInterval(interval)
    }, [])
    return (
        <div className="relative pt-20 flex flex-col items-center justify-between overflow-hidden" 
        style={{ background: 'linear-gradient(247.92deg, #FFFFFF 0%, #EADBFA 100%)'}}>

            <div className="container shrink-0">

                <div className="h-full z-5 pb-12">

                    <ScrollAnimation animation="fadeUp" delay={0.2} duration={0.6}>

                        <div className="space-y-4 text-center max-w-2xl mx-auto pb-6 sm:pb-10">

                            <h2 className='text-[#111827] text-2xl sm:text-4xl xl:text-5xl leading-10 sm:leading-14 xl:leading-15 font-semibold font-grotesk'>
                                Create Fast & Powerful website for {' '}
                                <span className="relative inline-block  h-[1.2em] max-w-[400px]">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={rotatingTexts[currentIndex]}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative inline-block">
                                            {rotatingTexts[currentIndex]}
                                            <span className="absolute bottom-[2px] -left-1 -right-1 h-1.5 bg-[#ED4B4B] rounded-full"></span>
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </h2>

                            <p className="text-black-400 text-sm md:text-base leading-6 md:leading-7 text-[#4B5563]">
                                Let your creativity shine and start building your website today and impress your visitors.
                            </p>

                            <div className="flex items-center gap-x-4 justify-center pt-6">

                                {techLogos.map((logo) => (
                                    <div key={logo.id} className="bg-white shadow rounded-full p-2
                                        inline-flex items-center justify-center h-12 w-12 hover:scale-110 transition-all duration-300">
                                        <Image src={logo.src} alt={logo.alt} width={26} height={26} />
                                    </div>
                                ))}

                            </div>

                        </div>

                    </ScrollAnimation>

                </div>

            </div>

            <div className="relative w-full min-h-[150px] md:min-h-[250px] lg:min-h-[350px] xl:min-h-[450px] 2xl:min-h-[600px] flex items-end overflow-hidden z-5">
                <AnimatePresence mode="wait" initial={false}>
                    <div className="absolute inset-0 w-full flex items-end">
                        <div className="px-6 w-full">
                            <Image src='/img/doc_banner.png'
                                width={1315} height={1200} alt='Banner Image'
                                className="w-full h-auto object-contain" priority
                            />
                        </div>
                    </div>
                </AnimatePresence>
            </div>

            <div className="absolute bottom-0 right-0">
                <Image src='/img/effect.png' width={601} height={601} alt='Banner Image'
                className="w-full lg:w-62 h-auto" priority />
            </div>

        </div>
    )
}

export default DocBanner