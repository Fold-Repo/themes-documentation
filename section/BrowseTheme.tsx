'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { browseTheme } from '@/data/home'

interface BrowseThemeProps {
    bgColor?: string
    count?: number
}

const BrowseTheme = ({ bgColor = '#3E3B67', count }: BrowseThemeProps) => {
    return (
        <div className="relative h-24 sm:h-28 md:h-32 overflow-hidden" style={{ backgroundColor: bgColor }}>

            <div className="absolute inset-0 flex items-center opacity-5">
                <motion.div
                    className="flex items-center gap-6 sm:gap-8 md:gap-12 whitespace-nowrap"
                    animate={{
                        x: [0, -1400],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}>
                    {[...browseTheme.marqueeTexts, ...browseTheme.marqueeTexts, ...browseTheme.marqueeTexts].map((text, index) => (
                        <React.Fragment key={index}>
                            <div className="w-px h-12 sm:h-14 md:h-16 bg-white"></div>
                            <div className="font-grotesk text-white text-base sm:text-lg lg:text-xl font-semibold uppercase">
                                {text}
                            </div>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-2xl lg:text-3xl font-semibold">
                    {count !== undefined ? `+${count}` : browseTheme.centerText}
                </h2>
            </div>
            
        </div>
    )
}

export default BrowseTheme