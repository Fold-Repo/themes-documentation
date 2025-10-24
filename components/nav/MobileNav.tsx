"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@heroui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS, PROJECT_NAV_LINKS, STACK_NAV_LINKS } from '@/constants'

interface MobileNavProps {
    open: boolean
    setOpen: (open: boolean) => void
}

const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen }) => {

    const pathname = usePathname()
    const onClose = () => setOpen(false)

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
        onClose()
    }

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-50 md:hidden">

                    <motion.div 
                        onClick={onClose} 
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        transition={{ duration: 0.18 }} 
                    />

                    <motion.div 
                        className="fixed top-4 right-4 w-full max-w-[92%] rounded-xl bg-white p-5 text-xs shadow-lg dark:bg-black" 
                        initial={{ opacity: 0, y: -12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}>

                        <div className="absolute right-3 top-3">
                            <Button onPress={onClose} isIconOnly className='bg-gray-100' radius='full' size='sm'>
                                <XMarkIcon className="size-4 text-foreground" />
                            </Button>
                        </div>

                        <div className="space-y-6 py-5 mt-12">
                            {navigationLinks.map(link => {
                                const active = link.href === pathname || 
                                    (link.href?.startsWith('#') && pathname.includes(link.href.replace('#', '')))
                                
                                return link.href?.startsWith('#') ? (
                                    <div key={link.id} className="-mx-3 px-3 text-sm text-foreground">
                                        <button
                                            onClick={() => handleSmoothScroll(link.href!)}
                                            className={`block w-full text-left rounded-lg py-2 transition-colors ${active ? 'font-semibold' : ''}`}
                                        >
                                            {link.label}
                                        </button>
                                    </div>
                                ) : (
                                    <div key={link.id} className="-mx-3 px-3 text-sm text-foreground">
                                        <Link 
                                            href={link.href || "#"} 
                                            className={`block rounded-lg py-2 transition-colors ${active ? 'font-semibold' : ''}`}
                                            onClick={onClose}
                                        >
                                            {link.label}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>

                    </motion.div>

                </div>
            )}
        </AnimatePresence>
    )
}

export default MobileNav


