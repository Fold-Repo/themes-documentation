import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { GiRun } from 'react-icons/gi'
import { TbCodeDots } from 'react-icons/tb'

const WhyChooseUs = () => {
    return (
        <div className="container py-16">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-5">

                <div className="flex flex-col gap-2 lg:max-w-[30%]">
                    <h6 className="text-base sm:text-lg lg:text-xl font-semibold font-grotesk text-[#DB4444]">Why Choose Our us</h6>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium font-grotesk text-[#111827]">Save your time with a lot of features</h2>
                </div>

                <div className="hidden lg:block h-12 w-0.5 bg-[#ED4B4B] shrink-0"></div>

                <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-5 lg:gap-x-20">

                    <div className="flex flex-col justify-center items-center gap-y-3">

                        <div className="bg-white border border-[#E3E3E3] shadow-[0px_4px_4px_0px_#0000001A] rounded-full p-2
                                        inline-flex items-center justify-center size-10 md:size-12 hover:scale-110 transition-all duration-300">
                            <BiSupport className="size-6" />
                        </div>

                        <h3 className="text-sm md:text-base font-medium font-grotesk">
                            Quick Support
                        </h3>

                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-3">

                        <div className="bg-white border border-[#E3E3E3] shadow-[0px_4px_4px_0px_#0000001A] rounded-full p-2
                                        inline-flex items-center justify-center size-10 md:size-12 hover:scale-110 transition-all duration-300">
                            <GiRun className="size-6" />
                        </div>

                        <h3 className="text-sm md:text-base font-medium font-grotesk">
                            Fast Performance
                        </h3>

                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-3">

                        <div className="bg-white border border-[#E3E3E3] shadow-[0px_4px_4px_0px_#0000001A] rounded-full p-2
                                        inline-flex items-center justify-center size-10 md:size-12 hover:scale-110 transition-all duration-300">
                            <TbCodeDots className="size-6" />
                        </div>

                        <h3 className="text-sm md:text-base font-medium font-grotesk">
                            Standard Code
                        </h3>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default WhyChooseUs