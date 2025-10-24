/**
 * Fold React - Screenshot Configuration
 * All pages from the Fold React e-commerce platform
 */

module.exports = {
    
    BASE_URL: 'https://fold-react.netlify.app',
    PROJECT_ID: 2,
    STACK_NAME: 'react',

    pages: [
        // ========== HOMEPAGE ==========
        { name: 'Home - Main', url: '/', category: 'Homepage', highlight: true },
        { name: 'Home - Variant 2', url: '/home/home-2', category: 'Homepage' },
        { name: 'Home - Variant 3', url: '/home/home-3', category: 'Homepage' },
        { name: 'Home - Variant 4', url: '/home/home-4', category: 'Homepage' },
        { name: 'Home - Variant 5', url: '/home/home-5', category: 'Homepage' },
        { name: 'Home - Variant 6', url: '/home/home-6', category: 'Homepage' },
        { name: 'Home - Variant 7', url: '/home/home-7', category: 'Homepage' },

        // ========== PRODUCT ==========
        { name: 'Products - Main', url: '/products', category: 'Product' },
        { name: 'Products - Style 2', url: '/products/style-2', category: 'Product' },
        { name: 'Product Detail - Style 1', url: '/products/detail/product-1', category: 'Product' },
        { name: 'Product Detail - Style 2', url: '/products/detail/product-2', category: 'Product' },
        { name: 'Product Detail - Style 3', url: '/products/detail/product-3', category: 'Product' },
        { name: 'Product Detail - Style 4', url: '/products/detail/product-4', category: 'Product' },
        { name: 'Product Detail - Style 5', url: '/products/detail/product-5', category: 'Product' },
        { name: 'Product Detail - Style 6', url: '/products/detail/product-6', category: 'Product' },
        { name: 'Product Detail - Style 7', url: '/products/detail/product-7', category: 'Product' },
        { name: 'Product - Dynamic', url: '/products/1', category: 'Product' },

        // ========== CART ==========
        { name: 'Shopping Cart', url: '/pages/cart', category: 'Cart' },
        { name: 'Cart - Variant 2', url: '/pages/cart/cart-2', category: 'Cart' },
        { name: 'Checkout', url: '/pages/cart/checkout', category: 'Cart' },
        { name: 'Wishlist', url: '/pages/wishlist', category: 'Cart' },
        { name: 'Payment', url: '/pages/payment', category: 'Cart' },
        { name: 'Payment - Variant 2', url: '/pages/payment/v2', category: 'Cart' },

        // ========== BLOG ==========
        { name: 'Blog - Main', url: '/blog', category: 'Blog' },
        { name: 'Blog - List 2', url: '/blog/blog-list-2', category: 'Blog' },
        { name: 'Blog Details - Style 1', url: '/blog/blog-details-1', category: 'Blog' },
        { name: 'Blog Details - Style 2', url: '/blog/blog-details-2', category: 'Blog' },
        { name: 'Blog Details - Style 3', url: '/blog/blog-details-3', category: 'Blog' },
        { name: 'Blog Details - Style 4', url: '/blog/blog-details-4', category: 'Blog' },
        { name: 'Blog Post - Dynamic', url: '/blog/1', category: 'Blog' },

        // ========== AUTH ==========
        { name: 'Sign In', url: '/signin', category: 'Auth' },
        { name: 'Sign Up', url: '/signup', category: 'Auth' },
        { name: 'Forgot Password', url: '/forgot-password', category: 'Auth' },

        // ========== OTHER ==========
        { name: 'About - Main', url: '/about', category: 'Other' },
        { name: 'About - Variant 2', url: '/about/about-2', category: 'Other' },
        { name: 'About - Variant 3', url: '/about/about-3', category: 'Other' },
        { name: 'About - Variant 4', url: '/about/about-4', category: 'Other' },
        { name: 'Contact - Main', url: '/contact', category: 'Other' },
        { name: 'Contact - Variant 2', url: '/contact/contact-2', category: 'Other' },
        { name: 'Contact - Variant 3', url: '/contact/contact-3', category: 'Other' },
    ]
};