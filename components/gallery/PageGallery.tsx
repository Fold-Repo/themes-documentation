'use client'

import { useState } from 'react'
import { PageLayout } from '@/types'
import { Tabs, Tab, Card, CardFooter, Image, Button } from '@heroui/react'

interface PageGalleryProps {
    pages: PageLayout[]
    primaryColor: string
    title?: string
    description?: string
}

const PageGallery = ({ pages, primaryColor, title, description }: PageGalleryProps) => {

    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    const categories = ['all', ...Array.from(new Set(pages.map(p => p.category)))]

    const filteredPages = selectedCategory === 'all'
        ? pages
        : pages.filter(p => p.category === selectedCategory)

    return (
        <section className="py-16">

            <div className="container">

                <div className="max-w-xl mx-auto text-center mb-12">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center font-grotesk mb-2">
                        {title || 'Stunning Pages Gallery'}</h2>
                    <p className="text-gray-600">
                        {description || 'Prebuilt pages are designed to save you time. Import with a few clicks and customize it to suit your requirements.'}
                    </p>
                </div>

                <div className="flex justify-center mb-10">
                    <Tabs
                        selectedKey={selectedCategory}
                        onSelectionChange={(key) => setSelectedCategory(key as string)}
                        radius="full"
                        size="lg"
                        classNames={{
                            base: "flex overflow-x-auto justify-center",
                            tabList: "overflow-x-auto gap-2",
                            cursor: "w-full",
                            tab: "max-w-fit text-xs",
                        }}
                        style={{
                            '--nextui-primary': primaryColor,
                        } as React.CSSProperties}>
                        {categories.map(category => (
                            <Tab
                                key={category}
                                title={category.charAt(0).toUpperCase() + category.slice(1)}
                            />
                        ))}
                    </Tabs>
                </div>

                <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredPages.map(page => (
                        <Card key={page.id} 
                            isFooterBlurred 
                            className="border-none" 
                            radius="lg">

                            <Image
                                alt={page.name}
                                className="object-cover object-top"
                                height={300}
                                src={page.image}
                                width="100%"
                            />

                            <div className="pl-3 pr-2 h-auto flex items-center color-inherit subpixel-antialiased bg-gray-900/40 backdrop-blur backdrop-saturate-150 before:bg-gray-900/10 border-gray-900/10 border-1 overflow-hidden py-1.5 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%-10px)] shadow-small ml-[5px] z-10">
                            
                                <div className="flex flex-col grow">
                                    <p className="text-tiny text-white">{page.name}</p>
                                    <p className="text-tiny text-white/80">{page.category}</p>
                                </div>

                                {page.url && (
                                    <Button as="a" href={page.url}
                                        target="_blank" className="text-tiny text-white bg-black/30"
                                        color="default"
                                        radius="lg"
                                        size="sm"
                                        variant="flat">
                                        View
                                    </Button>
                                )}

                            </div>
                        </Card>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default PageGallery

