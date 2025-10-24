/**
 * Ruby React - Screenshot Configuration
 * All pages from https://ruby-react.netlify.app/
 */

module.exports = {
    
    BASE_URL: 'https://ruby-react.netlify.app',
    PROJECT_ID: 1,
    STACK_NAME: 'react',

    pages: [
        // ========== HOMEPAGE ==========
        { name: 'Home - Main', url: '/', category: 'Homepage', highlight: true },
        { name: 'Home - Women Fashion', url: '/home/women-fashion', category: 'Homepage' },
        { name: 'Home - Trending Fashion', url: '/home/trending-fashion', category: 'Homepage' },
        { name: 'Home - Men Fashion', url: '/home/men-fashion', category: 'Homepage' },
        { name: 'Home - Electronic', url: '/home/electronic', category: 'Homepage' },
        { name: 'Home - Book Store', url: '/home/book-store', category: 'Homepage' },
        { name: 'Home - Sport Accessory', url: '/home/sport-accessory', category: 'Homepage' },
        { name: 'Home - Furniture', url: '/home/furniture', category: 'Homepage' },
        { name: 'Home - Beauty Skin Care', url: '/home/beauty-skin-care', category: 'Homepage' },

        // ========== SHOP ==========
        { name: 'Shop - Default', url: '/shop/shop_layout', category: 'Shop' },
        { name: 'Shop - Default List', url: '/shop/shop_layout/lists', category: 'Shop' },
        { name: 'Shop - Full Width Grid', url: '/shop/shop_layout/grid', category: 'Shop' },
        { name: 'Shop - Left Sidebar', url: '/shop/shop_layout/left_sidebar', category: 'Shop' },
        { name: 'Shop - Right Sidebar', url: '/shop/shop_layout/right_sidebar', category: 'Shop' },
        { name: 'Product Hover - Style 1', url: '/shop/product_hover/style_1', category: 'Shop' },
        { name: 'Product Hover - Style 2', url: '/shop/product_hover/style_2', category: 'Shop' },

        // ========== PRODUCT ==========
        { name: 'Product - Default', url: '/products/layouts/default', category: 'Product' },
        { name: 'Product - Grid 1', url: '/products/layouts/grid-1', category: 'Product' },
        { name: 'Product - Grid 2', url: '/products/layouts/grid-2', category: 'Product' },
        { name: 'Product - Stacked', url: '/products/layouts/stacked', category: 'Product' },
        { name: 'Product - Right Thumbnails', url: '/products/layouts/right-thumbnails', category: 'Product' },
        { name: 'Product - Bottom Thumbnails', url: '/products/layouts/bottom-thumbnails', category: 'Product' },
        { name: 'Product - Description Accordion', url: '/products/layouts/description-accordion', category: 'Product' },
        { name: 'Product - Description Tab', url: '/products/layouts/description-tab', category: 'Product' },
        { name: 'Product - Deals', url: '/products/features/deals', category: 'Product' },
        { name: 'Product - Frequently Bought', url: '/products/features/frequently-bought', category: 'Product' },
        { name: 'Product - Grouped', url: '/products/features/grouped', category: 'Product' },
        { name: 'Product - Out of Stock', url: '/products/features/out-of-stock', category: 'Product' },
        { name: 'Product - Variable', url: '/products/features/variable', category: 'Product' },
        { name: 'Product - With Discount', url: '/products/features/with-discount', category: 'Product' },
        { name: 'Product Swatch - Color', url: '/products/swatches/color', category: 'Product' },
        { name: 'Product Swatch - Image', url: '/products/swatches/image', category: 'Product' },
        { name: 'Product Swatch - Rounded', url: '/products/swatches/rounded', category: 'Product' },

        // ========== CART ==========
        { name: 'Shopping Cart', url: '/cart', category: 'Cart' },
        { name: 'Wishlist', url: '/wishlist', category: 'Cart' },
        { name: 'Checkout', url: '/checkout', category: 'Cart' },

        // ========== BLOG ==========
        { name: 'Blog - Default', url: '/blog', category: 'Blog' },
        { name: 'Blog - List', url: '/blog/blog-list', category: 'Blog' },
        { name: 'Blog - Detail', url: '/blog/1', category: 'Blog' },

        // ========== AUTH ==========
        { name: 'Login', url: '/login', category: 'Auth' },
        { name: 'Register', url: '/register', category: 'Auth' },
        { name: 'Forgot Password', url: '/forgot-password', category: 'Auth' },
        { name: 'Reset Password', url: '/reset-password', category: 'Auth' },

        // ========== OTHER ==========
        { name: 'Search', url: '/search', category: 'Other' },
        { name: 'About Us', url: '/pages/about', category: 'Other' },
        { name: 'Contact 1', url: '/pages/contact-1', category: 'Other' },
        { name: 'Contact 2', url: '/pages/contact-2', category: 'Other' },
        { name: 'My Account', url: '/pages/account', category: 'Other' },
        { name: 'FAQs', url: '/pages/faqs', category: 'Other' },
        { name: '404 Error', url: '/pages/404', category: 'Other' },
    ]
};