'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { galleryImages } from '@/data/home'

import 'swiper/css'
import 'swiper/css/pagination'

const Gallery = () => {
    return (
        <div className="w-full py-5 flex flex-col justify-start items-center gap-8">
            
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={5}
                slidesPerView={1.2}
                centeredSlides={false}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet size-3 bg-zinc-300',
                    bulletActiveClass: 'swiper-pagination-bullet-active bg-slate-700!',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1536: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="w-full pb-16!">
                {galleryImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-96">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width || 640}
                                height={image.height || 420}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Gallery

