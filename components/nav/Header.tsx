"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { NAV_LINKS, PROJECT_NAV_LINKS, STACK_NAV_LINKS, LOGO } from '@/constants'
import MobileNav from './MobileNav'

const Header: React.FC = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const getNavigationLinks = () => {
        if (pathname.match(/^\/template\/\d+$/)) {
            return PROJECT_NAV_LINKS
        }
        if (pathname.match(/^\/template\/\d+\/\w+$/)) {
            return STACK_NAV_LINKS
        }
        return NAV_LINKS
    }

    const navigationLinks = getNavigationLinks()

    const handleSmoothScroll = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        }
    }

    return (
        <>
            <header className="sticky inset-x-0 top-0 z-50 w-full" style={{ backgroundColor: '#0F0C2A' }}>
                <div className="container mx-auto">
                    <div className="flex items-center justify-between py-3.5 md:py-6">

                        <Link href="/" className="flex items-center gap-2">
                            <Image className='w-10' src={LOGO.light} alt={LOGO.alt} width={50} height={50} />
                        </Link>

                        <nav className="hidden md:flex gap-x-8 text-sm">
                            {navigationLinks.map(link => {
                                const active = link.href === pathname || 
                                    (link.href?.startsWith('#') && pathname.includes(link.href.replace('#', '')))
                                
                                return link.href?.startsWith('#') ? (
                                    <button
                                        key={link.id}
                                        onClick={() => handleSmoothScroll(link.href!)}
                                        className={`text-white hover:text-white/80 transition-colors ${active ? 'font-semibold' : ''}`}>
                                        {link.label}
                                    </button>
                                ) : (
                                    <Link
                                        key={link.id}
                                        href={link.href || '#'}
                                        className={`text-white hover:text-white/80 transition-colors ${active ? 'font-semibold' : ''}`}>
                                        {link.label}
                                    </Link>
                                )
                            })}
                        </nav>

                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2" aria-label="Toggle menu">
                            <Bars3Icon className="size-5" />
                        </button>

                    </div>
                    
                </div>

            </header>

            <MobileNav open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
        </>
    )
}

export default Header