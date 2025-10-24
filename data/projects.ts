import { Project } from '@/types'
import { getProjectPages } from './pages'

export const projects: Project[] = [
    {
        id: 1,
        title: 'Ruby',
        description: 'A modern e-commerce platform with 8+ home page layouts for different industries. Features comprehensive product management, shopping cart, wishlist, dark mode, and multi-step checkout process.',
        image: '/img/projects/1.png',
        features: ['Shopping Cart', 'Multiple Layouts', 'Wishlist', 'Dark Mode', 'Cart System', 'Checkout'],
        category: 'E-Commerce',
        theme: {
            bannerBg: '#FFF5F5',
            primaryColor: '#DB4444',
            iconColor: '#DB4444'
        },
        techStacks: [
            {
                id: 1,
                name: 'HTML',
                description: 'HTML Templates for Modern Websites. Experience a comprehensive e-commerce solution with 8+ professionally designed pages, featuring shopping cart, multiple layouts, wishlist, and much more. Built with modern best practices and optimized for performance, this template provides everything you need to create a stunning online store.',
                image: '/img/projects/1/display.png',
                available: true,
                href: '/template/1/html'
            },
            {
                id: 2,
                name: 'React',
                description: 'React Templates with Modern Components. Experience a comprehensive e-commerce solution with 8+ professionally designed pages, featuring shopping cart, multiple layouts, wishlist, and much more. Built with modern best practices and optimized for performance, this template provides everything you need to create a stunning online store.',
                image: '/img/projects/1/display.png',
                available: true,
                href: '/template/1/react',
                demoUrl: 'https://ruby-react.netlify.app/'},
            {
                id: 3,
                name: 'WordPress',
                description: 'WordPress Theme Ready to Install. Experience a comprehensive e-commerce solution with 8+ professionally designed pages, featuring shopping cart, multiple layouts, wishlist, and much more. Built with modern best practices and optimized for performance, this template provides everything you need to create a stunning online store.',
                image: '/img/projects/1/display.png',
                available: false,
                href: '/template/1/wordpress'
            }
        ],
        showcases: [
            {
                id: 1,
                title: 'Shop Pages',
                description: 'Customizable shop layouts featuring bold visuals and stunning product displays.',
                image: '/img/projects/1/showcase/1.webp'
            },
            {
                id: 2,
                title: 'Shopping Cart',
                description: 'Seamless cart experience with product management and recommendations.',
                image: '/img/projects/1/showcase/2.webp'
            },
            {
                id: 3,
                title: 'Blog',
                description: 'Engaging blog layouts with featured posts and category organization.',
                image: '/img/projects/1/showcase/3.webp'
            }
        ],
        layoutsCount: 8,
        layoutsLabel: 'Pages'
    },
    {
        id: 2,
        title: 'Fold',
        description: 'A contemporary e-commerce platform with elegant design and smooth animations. Includes various home layouts, advanced product filtering, cart management, and responsive design for all devices.',
        image: '/img/projects/2.png',
        features: ['Product Filter', 'Cart System', 'Animations', 'Responsive', 'Multi-Layout', 'Modern UI'],
        category: 'E-Commerce',
        theme: {
            bannerBg: '#0065EA0D',
            primaryColor: '#0065EA',
            iconColor: '#0065EA'
        },
        techStacks: [
            {
                id: 1,
                name: 'HTML',
                description: 'HTML Templates for Modern Websites. Experience a contemporary e-commerce platform with 10+ elegantly designed layouts, featuring product filter, cart system, animations, and much more. Built with modern best practices and optimized for performance, this template provides everything you need to create a stunning online store.',
                image: '/img/projects/2/display.png',
                available: true,
                href: '/template/2/html'
            },
            {
                id: 2,
                name: 'React',
                description: 'React Templates with Modern Components. Experience a contemporary e-commerce platform with 10+ elegantly designed layouts, featuring product filter, cart system, animations, and much more. Built with modern best practices and optimized for performance, this template provides everything you need to create a stunning online store.',
                image: '/img/projects/2/display.png',
                available: true,
                href: '/template/2/react'
            },
            {
                id: 3,
                name: 'WordPress',
                description: 'WordPress Theme Ready to Install. Experience a contemporary e-commerce platform with 10+ elegantly designed layouts, featuring product filter, cart system, animations, and much more. Built with modern best practices and optimized for performance, this template provides everything you need to create a stunning online store.',
                image: '/img/projects/2/display.png',
                available: false,
                href: '/template/2/wordpress'
            }
        ],
        showcases: [
            {
                id: 1,
                title: 'Wishlist',
                description: 'Explore fully optimized, customizable shop samples featuring bold visuals and stunning effects.',
                image: '/img/projects/2/showcase/1.png'
            },
            {
                id: 2,
                title: 'Shop',
                description: 'Explore fully optimized, customizable shop samples featuring bold visuals and stunning effects.',
                image: '/img/projects/2/showcase/2.png'
            },
            {
                id: 3,
                title: 'Contact Us',
                description: 'Explore fully optimized, customizable shop samples featuring bold visuals and stunning effects.',
                image: '/img/projects/2/showcase/3.png'
            }
        ],
        layoutsCount: 10,
        layoutsLabel: 'Layouts'
    }
]

export const getProjectById = (id: number): Project | undefined => {
    return projects.find(project => project.id === id)
}