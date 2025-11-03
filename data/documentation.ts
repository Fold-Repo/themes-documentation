import { ProjectStackDocumentation } from '@/types/documentation'


// ========================================
// DOCUMENTATION DATA
// ========================================

export const documentationData: ProjectStackDocumentation[] = [

    // ========================================
    // RUBY React (Project ID: 1, Stack: react)
    // ========================================
    {
        projectId: 1,

        stackName: 'react',

        overview: {
            title: 'Ruby React',

            description: 'A modern, responsive e-commerce platform built with Next.js 15, React 19, TypeScript, and Tailwind CSS.',

            tags: [
                { label: 'Next.js 15', bgColor: 'bg-indigo-50', textColor: 'text-indigo-700' },
                { label: 'React 19', bgColor: 'bg-blue-50', textColor: 'text-blue-700' },
                { label: 'TypeScript', bgColor: 'bg-slate-50', textColor: 'text-slate-700' },
                { label: 'Tailwind CSS', bgColor: 'bg-cyan-50', textColor: 'text-cyan-700' },
                { label: 'Redux Toolkit', bgColor: 'bg-purple-50', textColor: 'text-purple-700' },
                { label: 'React Query', bgColor: 'bg-amber-50', textColor: 'text-amber-700' },
                { label: 'Framer Motion', bgColor: 'bg-pink-50', textColor: 'text-pink-700' },
            ],

            supportUrl: 'http://localhost:3000',
        },

        sections: [
            {
                id: 'features',
                title: 'Features',
                icon: '🚀',
                content: [
                    'Multiple Home Page Layouts: 8 different home page designs for various industries (Fashion, Electronics, Beauty, Books, Furniture, Sports, etc.)',
                    'Product Management: Complete product catalog with categories, collections, and specifications',
                    'Shopping Cart: Full cart functionality with quantity management and checkout',
                    'User Authentication: Login, register, forgot password, and reset password',
                    'Responsive Design: Mobile-first approach with Tailwind CSS',
                    'Dark Mode Support: Built-in dark/light theme switching',
                    'API Integration: RESTful API with React Query for data fetching',
                    'State Management: Redux Toolkit with persistence',
                    'Animations: Framer Motion for smooth animations',
                    'Type Safety: Full TypeScript implementation',
                    'Blog System: Complete blog functionality with multiple layouts',
                    'Wishlist: Add/remove products from wishlist',
                    'Search: Advanced product search functionality',
                ],
            },

            {
                id: 'prerequisites',
                title: 'Prerequisites',
                icon: '📋',
                content: 'Install Node.js 18.0+ and a package manager: <code>npm</code>, <code>yarn</code>, <code>pnpm</code> or <code>bun</code>.',
            },

            {
                id: 'installation',
                title: 'Installation',
                icon: '🛠️',
                content: [
                    {
                        type: 'paragraph',
                        content: '<strong>Step 1: Clone the repository</strong>',
                    },
                    {
                        type: 'code',
                        content: 'git clone <repository-url>\ncd ruby-react',
                    },
                    {
                        type: 'paragraph',
                        content: '<strong>Step 2: Install dependencies</strong>',
                    },
                    {
                        type: 'code',
                        content: 'npm install\n# or\nyarn install\n# or\npnpm install\n# or\nbun install',
                    },
                    {
                        type: 'paragraph',
                        content: '<strong>Step 3: Start the development server</strong><p class="mt-2">Navigate to <a href="http://localhost:3000" class="text-indigo-600">http://localhost:3000</a></p>',
                    },
                    {
                        type: 'code',
                        content: 'npm run dev',
                    },
                ],
            },

            {
                id: 'build-deploy',
                title: 'Build & Deployment',
                icon: '🏗️',
                content: [
                    {
                        type: 'paragraph',
                        content: '<span class="font-medium">Development build</span>',
                    },
                    {
                        type: 'code',
                        content: 'npm run dev',
                    },
                    {
                        type: 'paragraph',
                        content: '<span class="font-medium mt-3">Production build</span>',
                    },
                    {
                        type: 'code',
                        content: 'npm run build\nnpm start',
                    },
                    {
                        type: 'paragraph',
                        content: '<span class="font-medium mt-3">Linting</span>',
                    },
                    {
                        type: 'code',
                        content: 'npm run lint',
                    },
                ],
            },

            {
                id: 'project-structure',
                title: 'Project Structure',
                icon: '📁',
                content: [
                    {
                        type: 'code',
                        content: `ruby-react/
├── app/
│   ├── (auth)/
│   ├── api/
│   ├── blog/
│   ├── cart/
│   ├── checkout/
│   ├── home/
│   ├── pages/
│   ├── products/
│   ├── shop/
│   ├── wishlist/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── account/
│   ├── blog/
│   ├── cards/
│   ├── cart/
│   ├── checkout/
│   ├── filter/
│   ├── footer/
│   ├── header/
│   ├── product/
│   ├── skeleton/
│   └── ui/
├── constants/
├── data/
├── hooks/
├── lib/
├── service/
├── store/
├── types/
├── utils/
├── views/
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md`,
                    },
                ],
            },

            {
                id: 'home-variants',
                title: 'Home Page Variants',
                icon: '🏠',
                content: [
                    {
                        type: 'html',
                        content: `<div class="grid md:grid-cols-2 gap-4 mt-3">
          <article>
            <h4 class="font-semibold">Main Home Page</h4>
            <p class="text-slate-600">Route: <code>/</code> — Hero banner, featured brands, flash sales, new arrivals, top categories, testimonials.</p>
          </article>
          <article>
            <h4 class="font-semibold">Beauty & Skincare Home</h4>
            <p class="text-slate-600">Route: <code>/home/beauty-skin-care</code> — Beauty banner, shop by type, today's top picks, unbeatable beauty, client success stories.</p>
          </article>
          <article>
            <h4 class="font-semibold">Book Store Home</h4>
            <p class="text-slate-600">Route: <code>/home/book-store</code> — Book store banner, book deals, shop categories, new releases, recommended books.</p>
          </article>
          <article>
            <h4 class="font-semibold">Electronics Home</h4>
            <p class="text-slate-600">Route: <code>/home/electronic</code> — Electronics banner, top categories, trending products, brands, today's picks.</p>
          </article>
          <article>
            <h4 class="font-semibold">Furniture Home</h4>
            <p class="text-slate-600">Route: <code>/home/furniture</code> — Furniture banner, best selling furniture, explore collection, happy customers.</p>
          </article>
          <article>
            <h4 class="font-semibold">Men's Fashion Home</h4>
            <p class="text-slate-600">Route: <code>/home/men-fashion</code> — Men's fashion banner, categories, new collection, coming soon products.</p>
          </article>
          <article>
            <h4 class="font-semibold">Sports Accessories Home</h4>
            <p class="text-slate-600">Route: <code>/home/sport-accessory</code> — Sports banner, latest sneakers, apparel section, top picks, testimonials.</p>
          </article>
          <article>
            <h4 class="font-semibold">Trending Fashion Home</h4>
            <p class="text-slate-600">Route: <code>/home/trending-fashion</code> — Trending fashion banner, categories, new arrivals, deal of the day.</p>
          </article>
          <article>
            <h4 class="font-semibold">Women's Fashion Home</h4>
            <p class="text-slate-600">Route: <code>/home/women-fashion</code> — Women's fashion banner, best selling, top picks, top brands, testimonials.</p>
          </article>
        </div>`,
                    },
                ],
            },

            {
                id: 'tech-stack',
                title: 'Technology Stack',
                icon: '🔧',
                content: [
                    {
                        type: 'html',
                        content: `<div class="grid sm:grid-cols-2 gap-4 mt-3 text-slate-700">
          <div>
            <h4 class="font-medium">Frontend Framework</h4>
            <ul class="list-disc list-inside mt-2">
              <li>Next.js 15 (App Router)</li>
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Tailwind CSS 4</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium">State Management</h4>
            <ul class="list-disc list-inside mt-2">
              <li>Redux Toolkit</li>
              <li>React Query (TanStack Query)</li>
              <li>Redux Persist</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium">UI Components & Libraries</h4>
            <ul class="list-disc list-inside mt-2">
              <li>HeroUI (React UI)</li>
              <li>Heroicons</li>
              <li>React Icons</li>
              <li>Swiper</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium">Animation & Forms</h4>
            <ul class="list-disc list-inside mt-2">
              <li>Framer Motion</li>
              <li>React Hot Toast</li>
              <li>Axios</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium">Development Tools</h4>
            <ul class="list-disc list-inside mt-2">
              <li>ESLint</li>
              <li>Turbopack (Next.js 15)</li>
              <li>TypeScript (Strict Mode)</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium">Utilities</h4>
            <ul class="list-disc list-inside mt-2">
              <li>use-debounce</li>
              <li>tailwind-merge</li>
              <li>@tailwindcss/forms</li>
            </ul>
          </div>
        </div>`,
                    },
                ],
            },

            {
                id: 'api-structure',
                title: 'API Structure',
                icon: '📊',
                content: [
                    {
                        type: 'paragraph',
                        content: '<span class="text-slate-700 mt-2">Key endpoints</span>',
                    },
                    {
                        type: 'code',
                        content: '/api/category/...\n/api/collection/...\n/api/electronics/...\n/api/post/...\n/api/product/...\n/api/sport/...\n/api/top-categories/...\n/api/wishlist/...',
                    },
                    {
                        type: 'paragraph',
                        content: '<span class="mt-2 text-slate-700">Typical data flow: Next.js API routes handle server-side logic → Service layer functions for API calls with error handling → React Query for client-side data fetching, caching, and synchronization → UI components consume data with loading and error states.</span>',
                    },
                ],
            },

            {
                id: 'performance',
                title: 'Performance',
                icon: '🚀',
                content: [
                    'Next.js Optimization: Automatic code splitting, image optimization, and static generation',
                    'React Query: Efficient data fetching with caching, background updates, and optimistic updates',
                    'Lazy Loading: Component and image lazy loading for better performance',
                    'Bundle Optimization: Tree shaking, minification, and compression',
                    'Turbopack: Fast development builds with incremental compilation',
                    'Redux Persist: State persistence for cart and user preferences',
                ],
            },

            {
                id: 'security-seo',
                title: 'Security & SEO',
                icon: '🔒',
                content: [
                    'Type Safety: Full TypeScript implementation with strict type checking',
                    'Input Validation: Form validation with comprehensive error handling',
                    'Error Handling: Comprehensive error handling with user-friendly messages',
                    'API Security: Secure API endpoints with proper error responses',
                    'SEO Optimized: Meta tags, structured data, and semantic HTML',
                    'Accessibility: ARIA labels, keyboard navigation, and screen reader support',
                    'Performance: Core Web Vitals optimization with Next.js features',
                    'Semantic HTML: Proper HTML structure with meaningful elements',
                ],
            },

            {
                id: 'license',
                title: 'License',
                icon: '📄',
                content: 'This project is licensed under the <strong>MIT License</strong>.',
            },
        ],
    },

    // ========================================
    // FOLD HTML (Project ID: 2, Stack: html)
    // ========================================
    {
        projectId: 1,

        stackName: 'html',

        overview: {
            title: 'Ruby HTML',

            description: 'A modern, responsive e-commerce template built with vanilla HTML, CSS, and JavaScript featuring multiple home page variants, product layouts, and shopping features.',

            tags: [
                { label: 'HTML5', bgColor: 'bg-orange-50', textColor: 'text-orange-700' },
                { label: 'CSS3', bgColor: 'bg-blue-50', textColor: 'text-blue-700' },
                { label: 'JavaScript', bgColor: 'bg-yellow-50', textColor: 'text-yellow-700' },
                { label: 'Tailwind CSS', bgColor: 'bg-cyan-50', textColor: 'text-cyan-700' },
                { label: 'Swiper.js', bgColor: 'bg-purple-50', textColor: 'text-purple-700' },
                { label: 'jQuery', bgColor: 'bg-indigo-50', textColor: 'text-indigo-700' },
            ],

            supportUrl: '<http://localhost:3000>',
        },

        sections: [
            // ========================================
            // FEATURES SECTION
            // ========================================
            {
                id: 'features',
                title: 'Features',
                icon: '🚀',
                content: [
                    'Multiple home page variants (Beauty, Book Store, Electronic, Furniture, Men Fashion, Sport Accessory, Trending Fashion, Women Fashion)',
                    'Comprehensive product pages with various layouts (grid views, thumbnails, tabs, accordions)',
                    'Shopping cart and checkout functionality',
                    'Product hover effects (7 different styles)',
                    'Advanced shop features (infinite scroll, pagination, load more button)',
                    'Product swatches (color, dropdown, image variations)',
                    'Blog system with multiple layouts',
                    'User authentication pages (login, register, forgot password)',
                    'Account management (orders, addresses, order tracking)',
                    'Responsive design with mobile-first approach',
                    'Mega menu navigation with hover effects',
                    'Product filtering and sorting capabilities',
                ],
            },

            // ========================================
            // PREREQUISITES SECTION
            // ========================================
            {
                id: 'prerequisites',
                title: 'Prerequisites',
                icon: '📋',
                content: 'No special requirements needed! This is a static HTML/CSS/JS project. You can open it directly in a web browser or use any local development server. For best experience, use a modern web browser (Chrome, Firefox, Safari, Edge) and a local HTTP server like Live Server (VS Code extension), Python\'s <code>http.server</code>, or Node.js <code>http-server</code>.',
            },

            // ========================================
            // INSTALLATION SECTION
            // ========================================
            {
                id: 'installation',
                title: 'Installation',
                icon: '🛠️',
                content: [
                    {
                        type: 'paragraph',
                        content: '<strong>Step 1: Clone or Download</strong>',
                    },
                    {
                        type: 'code',
                        content: '# If using git\ngit clone <repository-url>\ncd ruby-html\n\n# Or simply download and extract the project',
                    },
                    {
                        type: 'paragraph',
                        content: '<strong>Step 2: Start a Local Server</strong>',
                    },
                    {
                        type: 'code',
                        content: '# Option 1: Using Python\npython -m http.server 8000\n\n# Option 2: Using Node.js (install http-server globally first)\nnpx http-server -p 8000\n\n# Option 3: Using VS Code Live Server extension\n# Right-click on index.html and select "Open with Live Server"',
                    },
                    {
                        type: 'paragraph',
                        content: '<strong>Step 3: Access the Project</strong><p class="mt-2">Navigate to <a href="http://localhost:8000" class="text-indigo-600">http://localhost:8000</a> in your web browser</p>',
                    },
                ],
            },

            // ========================================
            // BUILD & DEPLOYMENT SECTION
            // ========================================
            {
                id: 'build-deploy',
                title: 'Build & Deployment',
                icon: '🏗️',
                content: [
                    {
                        type: 'paragraph',
                        content: '<span class="font-medium">Development Server</span>',
                    },
                    {
                        type: 'code',
                        content: '# Using Python\npython -m http.server 8000\n\n# Using Node.js\nnpx http-server -p 8000\n\n# Using VS Code Live Server\n# Right-click index.html > Open with Live Server',
                    },
                    {
                        type: 'paragraph',
                        content: '<span class="font-medium mt-3">Production Deployment</span>',
                    },
                    {
                        type: 'code',
                        content: '# This is a static site - simply upload all files to your web server\n# Recommended hosting:\n# - Netlify (drag & drop)\n# - Vercel (connect Git repository)\n# - GitHub Pages\n# - Any traditional web hosting (cPanel, FTP)\n\n# No build process required - just deploy the files as-is!',
                    },
                    {
                        type: 'paragraph',
                        content: '<span class="font-medium mt-3">File Optimization (Optional)</span>',
                    },
                    {
                        type: 'code',
                        content: '# For production, you may want to:\n# - Minify CSS and JS files\n# - Optimize images\n# - Enable Gzip compression on server\n# - Add caching headers',
                    },
                ],
            },

            // ========================================
            // PROJECT STRUCTURE SECTION
            // ========================================
            {
                id: 'project-structure',
                title: 'Project Structure',
                icon: '📁',
                content: [
                    {
                        type: 'code',
                        content: `ruby-html/
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   └── swiper-bundle.min.css
│   ├── js/
│   │   ├── main.js
│   │   └── swiper-bundle.min.js
│   ├── img/
│   │   ├── landing/
│   │   ├── shop/
│   │   ├── product/
│   │   └── ...
│   └── icon/
├── home/
│   ├── beauty-skin-care.html
│   ├── book-store.html
│   ├── electronic.html
│   ├── furniture.html
│   ├── men-fashion.html
│   ├── sport-accessory.html
│   ├── trending-fashion.html
│   └── women-fashion.html
├── shop_layout/
│   ├── grid_1.html
│   ├── grid_2.html
│   ├── left_sidebar/
│   └── right_sidebar/
├── product_hover/
│   ├── style_1/
│   ├── style_2/
│   └── ...
├── products/
│   ├── layouts/
│   ├── features/
│   └── swatches/
├── cart/
├── blog/
├── pages/
├── auth/
├── index.html
└── README.md`,
                    },
                ],
            },

            // ========================================
            // HOME PAGE VARIANTS SECTION
            // ========================================
            {
                id: 'home-variants',
                title: 'Home Page Variants',
                icon: '🏠',
                content: [
                    {
                        type: 'html',
                        content: `<div class="grid md:grid-cols-2 gap-4 mt-3">
          <article>
            <h4 class="font-semibold">Beauty & Skin Care</h4>
            <p class="text-slate-600">Route: <code>/home/beauty-skin-care.html</code> — Perfect for beauty and skincare product showcases.</p>
          </article>
          <article>
            <h4 class="font-semibold">Book Store</h4>
            <p class="text-slate-600">Route: <code>/home/book-store.html</code> — Designed for book retailers and libraries.</p>
          </article>
          <article>
            <h4 class="font-semibold">Electronic</h4>
            <p class="text-slate-600">Route: <code>/home/electronic.html</code> — Ideal for electronics and tech products.</p>
          </article>
          <article>
            <h4 class="font-semibold">Furniture</h4>
            <p class="text-slate-600">Route: <code>/home/furniture.html</code> — Tailored for furniture and home decor stores.</p>
          </article>
          <article>
            <h4 class="font-semibold">Men Fashion</h4>
            <p class="text-slate-600">Route: <code>/home/men-fashion.html</code> — Fashion-forward layout for men's clothing.</p>
          </article>
          <article>
            <h4 class="font-semibold">Sport Accessory</h4>
            <p class="text-slate-600">Route: <code>/home/sport-accessory.html</code> — Perfect for sports and fitness products.</p>
          </article>
          <article>
            <h4 class="font-semibold">Trending Fashion</h4>
            <p class="text-slate-600">Route: <code>/home/trending-fashion.html</code> — Modern fashion e-commerce layout.</p>
          </article>
          <article>
            <h4 class="font-semibold">Women Fashion</h4>
            <p class="text-slate-600">Route: <code>/home/women-fashion.html</code> — Elegant design for women's fashion stores.</p>
          </article>
        </div>`,
                    },
                ],
            },

            // ========================================
            // TECH STACK SECTION
            // ========================================
            {
                id: 'tech-stack',
                title: 'Technology Stack',
                icon: '🔧',
                content: [
                    {
                        type: 'html',
                        content: `<div class="grid sm:grid-cols-2 gap-4 mt-3 text-slate-700">
          <div>
            <h4 class="font-medium">Frontend Framework</h4>
            <ul class="list-disc list-inside mt-2">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium">CSS Framework</h4>
            <ul class="list-disc list-inside mt-2">
              <li>Tailwind CSS (via CDN)</li>
              <li>Custom CSS Variables</li>
              <li>Responsive Grid System</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium">JavaScript Libraries</h4>
            <ul class="list-disc list-inside mt-2">
              <li>jQuery 3.7.1</li>
              <li>Swiper.js (Slider/Carousel)</li>
              <li>Vanilla JavaScript</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium">Icons & Fonts</h4>
            <ul class="list-disc list-inside mt-2">
              <li>Remix Icon</li>
              <li>Google Fonts (Nunito Sans)</li>
              <li>Custom Fonts (Digital Numbers, Oleo Script)</li>
            </ul>
          </div>
        </div>`,
                    },
                ],
            },

            // ========================================
            // API STRUCTURE SECTION
            // ========================================
            {
                id: 'api-structure',
                title: 'API Structure',
                icon: '📊',
                content: [
                    {
                        type: 'paragraph',
                        content: '<span class="text-slate-700 mt-2">This is a static HTML template with no backend API required. However, for full e-commerce functionality, you would typically integrate with:</span>',
                    },
                    {
                        type: 'code',
                        content: '# Example API endpoints you might need:\n/api/products\n/api/products/{id}\n/api/cart\n/api/checkout\n/api/auth/login\n/api/auth/register\n/api/orders\n/api/user/profile',
                    },
                    {
                        type: 'paragraph',
                        content: '<span class="mt-2 text-slate-700">Typical data flow: Frontend HTML pages → JavaScript handles UI interactions → API calls to backend (if implemented) → Database operations → Response back to frontend. For this template, you can use any backend framework (Node.js, PHP, Python, etc.) to implement the API endpoints.</span>',
                    },
                ],
            },

            // ========================================
            // PERFORMANCE SECTION
            // ========================================
            {
                id: 'performance',
                title: 'Performance',
                icon: '🚀',
                content: [
                    'Optimized image loading with proper formats (JPG, PNG, SVG)',
                    'Minified CSS and JavaScript libraries (Swiper bundle)',
                    'CDN-based assets for faster loading (Tailwind, jQuery, Swiper)',
                    'Responsive images and lazy loading capabilities',
                    'Efficient CSS custom properties for theming',
                    'Lightweight vanilla JavaScript with minimal dependencies',
                    'Mobile-first responsive design for optimal mobile performance',
                ],
            },

            // ========================================
            // SECURITY & SEO SECTION
            // ========================================
            {
                id: 'security-seo',
                title: 'Security & SEO',
                icon: '🔒',
                content: [
                    'Semantic HTML5 markup for better SEO',
                    'Proper meta tags structure (add title, description, keywords)',
                    'Alt text support for images (add descriptive alt attributes)',
                    'Clean URL structure for better indexing',
                    'Responsive meta viewport for mobile optimization',
                    'HTTPS ready (use HTTPS in production)',
                    'Content Security Policy (CSP) headers recommended',
                    'Input validation needed for forms (add server-side validation)',
                    'Sanitize user inputs to prevent XSS attacks',
                ],
            },

            // ========================================
            // LICENSE SECTION
            // ========================================
            {
                id: 'license',
                title: 'License',
                icon: '📄',
                content: 'This project is licensed under the <strong>MIT License</strong>. Please refer to the license file in the repository for more details.',
            },
        ],
    },

    // ========================================
    // Fold HTML (Project ID: 2, Stack: html)
    // ========================================
    {
        projectId: 2,

        stackName: 'html',

        overview: {
            title: 'Fold HTML',

            description: 'A modern, responsive e-commerce platform built with HTML5, Tailwind CSS, and JavaScript.',

            tags: [
                { label: 'HTML5', bgColor: 'bg-indigo-50', textColor: 'text-indigo-700' },
                { label: 'Tailwind CSS', bgColor: 'bg-slate-50', textColor: 'text-slate-700' },
                { label: 'JavaScript', bgColor: 'bg-amber-50', textColor: 'text-amber-700' },
                { label: 'jQuery', bgColor: 'bg-blue-50', textColor: 'text-blue-700' },
                { label: 'RemixIcon', bgColor: 'bg-purple-50', textColor: 'text-purple-700' },
                { label: 'AOS', bgColor: 'bg-green-50', textColor: 'text-green-700' },
            ],

            supportUrl: 'http://localhost:3000',
        },

        sections: [
            // ========================================
            // FEATURES SECTION
            // ========================================
            {
                id: 'features',
                title: 'Features',
                icon: '🚀',
                content: [
                    '7 stunning home page variants with unique layouts and designs',
                    'Complete e-commerce functionality including product listings, cart, and checkout',
                    'Responsive design optimized for all devices (mobile, tablet, desktop)',
                    'Dark mode support with seamless theme switching',
                    'Multiple product display styles (grid layouts: 2, 3, 4 columns)',
                    '7 product detail page variations with comprehensive information',
                    'Blog system with list and detail pages',
                    '4 about page variants showcasing company information',
                    '3 contact page options with different layouts',
                    'Complete authentication system (login, register, password recovery)',
                    'Payment pages with OTP verification and success flows',
                    'Shopping cart with multiple variants and checkout process',
                    'Wishlist functionality for saving favorite products',
                    'Modern UI components with smooth animations',
                    'SEO-friendly semantic HTML structure',
                ],
            },

            // ========================================
            // PREREQUISITES SECTION
            // ========================================
            {
                id: 'prerequisites',
                title: 'Prerequisites',
                icon: '📋',
                content: 'Install Node.js 18.0+ and npm (comes with Node.js). For example: Install Node.js 18.0+ and a package manager: <code>npm</code>, <code>yarn</code>, <code>pnpm</code> or <code>bun</code>.',
            },

            // ========================================
            // INSTALLATION SECTION
            // ========================================
            {
                id: 'installation',
                title: 'Installation',
                icon: '🛠️',
                content: [
                    {
                        type: 'paragraph',
                        content: '<strong>Step 1: Clone or Download the Project</strong>',
                    },
                    {
                        type: 'code',
                        content: '# Clone the repository or extract the downloaded folder\ncd fold-html',
                    },
                    {
                        type: 'paragraph',
                        content: '<strong>Step 2: Install Dependencies</strong>',
                    },
                    {
                        type: 'code',
                        content: 'npm install\n# or\nyarn install\n# or\npnpm install',
                    },
                    {
                        type: 'paragraph',
                        content: '<strong>Step 3: Build Tailwind CSS</strong><p class="mt-2">The project uses Tailwind CSS v4. Build the CSS file from the source.</p>',
                    },
                    {
                        type: 'code',
                        content: 'npm run build\n# or\nyarn build',
                    },
                    {
                        type: 'paragraph',
                        content: '<strong>Step 4: Start Development Server</strong><p class="mt-2">Navigate to <a href="http://localhost:3000" class="text-indigo-600">http://localhost:3000</a> or use any local server (Live Server, Python SimpleHTTPServer, etc.)</p>',
                    },
                ],
            },

            // ========================================
            // BUILD & DEPLOYMENT SECTION
            // ========================================
            {
                id: 'build-deploy',
                title: 'Build & Deployment',
                icon: '🏗️',
                content: [
                    {
                        type: 'paragraph',
                        content: '<span class="font-medium">Development build</span>',
                    },
                    {
                        type: 'code',
                        content: 'npm run dev\n# Watches for changes and rebuilds CSS automatically',
                    },
                    {
                        type: 'paragraph',
                        content: '<span class="font-medium mt-3">Production build</span>',
                    },
                    {
                        type: 'code',
                        content: 'npm run build\n# Builds optimized CSS for production',
                    },
                    {
                        type: 'paragraph',
                        content: '<span class="font-medium mt-3">Deployment</span><p class="mt-2">Upload all files to your web server. No build step required beyond CSS compilation. The project is ready to use with any static hosting service.</p>',
                    },
                ],
            },

            // ========================================
            // PROJECT STRUCTURE SECTION
            // ========================================
            {
                id: 'project-structure',
                title: 'Project Structure',
                icon: '📁',
                content: [
                    {
                        type: 'code',
                        content: `fold-html/
    ├── about/
    │   ├── index.html
    │   ├── about-2.html
    │   ├── about-3.html
    │   └── about-4.html
    ├── assets/
    │   ├── css/
    │   │   ├── app.css
    │   │   └── global.css
    │   ├── js/
    │   │   ├── main.js
    │   │   ├── carousel.js
    │   │   ├── theme.js
    │   │   └── tailwind-plus.js
    │   └── img/
    │       ├── home/
    │       ├── products/
    │       ├── blog/
    │       └── ...
    ├── auth/
    │   ├── login.html
    │   ├── register.html
    │   └── forgot-password*.html
    ├── blog/
    │   ├── index.html
    │   ├── blog-list-2.html
    │   └── blog-details-*.html
    ├── contact/
    │   ├── index.html
    │   ├── contact-2.html
    │   └── contact-3.html
    ├── home/
    │   ├── index.html
    │   ├── home-2.html
    │   ├── home-3.html
    │   ├── home-4.html
    │   ├── home-5.html
    │   ├── home-6.html
    │   └── home-7.html
    ├── pages/
    │   ├── cart/
    │   ├── payment/
    │   └── wishlist.html
    ├── products/
    │   ├── style-1/
    │   ├── style-2/
    │   └── detail/
    ├── components.html
    ├── index.html
    ├── package.json
    └── package-lock.json`,
                    },
                ],
            },

            // ========================================
            // HOME PAGE VARIANTS SECTION
            // ========================================
            {
                id: 'home-variants',
                title: 'Home Page Variants',
                icon: '🏠',
                content: [
                    {
                        type: 'html',
                        content: `<div class="grid md:grid-cols-2 gap-4 mt-3">
              <article>
                <h4 class="font-semibold">Home 1</h4>
                <p class="text-slate-600">Route: <code>/home</code> or <code>/home/index.html</code> — Classic e-commerce layout with hero banner and product sections.</p>
              </article>
              <article>
                <h4 class="font-semibold">Home 2</h4>
                <p class="text-slate-600">Route: <code>/home/home-2.html</code> — Modern layout with enhanced product showcases.</p>
              </article>
              <article>
                <h4 class="font-semibold">Home 3</h4>
                <p class="text-slate-600">Route: <code>/home/home-3.html</code> — Minimalist design with focus on product imagery.</p>
              </article>
              <article>
                <h4 class="font-semibold">Home 4</h4>
                <p class="text-slate-600">Route: <code>/home/home-4.html</code> — Feature-rich layout with service highlights.</p>
              </article>
              <article>
                <h4 class="font-semibold">Home 5</h4>
                <p class="text-slate-600">Route: <code>/home/home-5.html</code> — Grid-based layout with category sections.</p>
              </article>
              <article>
                <h4 class="font-semibold">Home 6</h4>
                <p class="text-slate-600">Route: <code>/home/home-6.html</code> — Card-based design with category filters.</p>
              </article>
              <article>
                <h4 class="font-semibold">Home 7</h4>
                <p class="text-slate-600">Route: <code>/home/home-7.html</code> — Full-width layout with dynamic sections.</p>
              </article>
            </div>`,
                    },
                ],
            },

            // ========================================
            // TECH STACK SECTION
            // ========================================
            {
                id: 'tech-stack',
                title: 'Technology Stack',
                icon: '🔧',
                content: [
                    {
                        type: 'html',
                        content: `<div class="grid sm:grid-cols-2 gap-4 mt-3 text-slate-700">
              <div>
                <h4 class="font-medium">Frontend Framework</h4>
                <ul class="list-disc list-inside mt-2">
                  <li>HTML5</li>
                  <li>Tailwind CSS v4</li>
                  <li>Vanilla JavaScript</li>
                  <li>jQuery</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium">Libraries & Tools</h4>
                <ul class="list-disc list-inside mt-2">
                  <li>RemixIcon (Icon Library)</li>
                  <li>AOS (Animate On Scroll)</li>
                  <li>Tailwind Plus (Custom Utilities)</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium">Build Tools</h4>
                <ul class="list-disc list-inside mt-2">
                  <li>Tailwind CSS CLI</li>
                  <li>npm / yarn / pnpm</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium">Features</h4>
                <ul class="list-disc list-inside mt-2">
                  <li>Dark Mode Support</li>
                  <li>Responsive Design</li>
                  <li>Custom Components</li>
                  <li>Theme System</li>
                </ul>
              </div>
            </div>`,
                    },
                ],
            },

            // ========================================
            // API STRUCTURE SECTION
            // ========================================
            {
                id: 'api-structure',
                title: 'Page Structure',
                icon: '📊',
                content: [
                    {
                        type: 'paragraph',
                        content: '<span class="text-slate-700 mt-2">Key page routes</span>',
                    },
                    {
                        type: 'code',
                        content: '/                              # Main landing page\n/home                          # Home page variants\n/products/style-1             # Product listings\n/products/detail/*            # Product detail pages\n/blog                          # Blog listings\n/about                         # About page variants\n/contact                       # Contact page variants\n/auth/*                        # Authentication pages\n/pages/cart/*                  # Shopping cart pages\n/pages/payment/*               # Payment flow pages',
                    },
                    {
                        type: 'paragraph',
                        content: '<span class="mt-2 text-slate-700">Typical navigation flow: Landing → Home → Products → Product Detail → Cart → Checkout → Payment → Success</span>',
                    },
                ],
            },

            // ========================================
            // PERFORMANCE SECTION
            // ========================================
            {
                id: 'performance',
                title: 'Performance',
                icon: '🚀',
                content: [
                    'Optimized Tailwind CSS with purged unused styles in production',
                    'Lazy loading for images using native HTML loading attribute',
                    'Minified JavaScript for faster page loads',
                    'Efficient CSS with utility-first approach reducing file size',
                    'Optimized asset delivery with proper caching headers',
                    'Lightweight dependencies with minimal bundle size',
                    'Progressive enhancement ensuring fast initial render',
                ],
            },

            // ========================================
            // SECURITY & SEO SECTION
            // ========================================
            {
                id: 'security-seo',
                title: 'Security & SEO',
                icon: '🔒',
                content: [
                    'Semantic HTML5 structure for better SEO',
                    'Meta tags ready for SEO optimization',
                    'Accessible markup with proper ARIA labels',
                    'Secure form handling structure',
                    'XSS protection through proper HTML encoding',
                    'Mobile-first responsive design',
                    'Open Graph and Twitter Card meta tags ready',
                    'Structured data markup ready for rich snippets',
                ],
            },

            // ========================================
            // LICENSE SECTION
            // ========================================
            {
                id: 'license',
                title: 'License',
                icon: '📄',
                content: 'This project is licensed under the <strong>ISC License</strong>.',
            },
        ],
    },


    // ========================================
    // Fold React (Project ID: 2, Stack: react)
    // ========================================
    {
        projectId: 2,
        stackName: 'react',
        overview: {
            title: 'Fold React',
            description: 'A modern, responsive e‑commerce platform built with Next.js 15, React 19, and TypeScript.',
            tags: [
                { label: 'Next.js 15', bgColor: 'bg-indigo-50', textColor: 'text-indigo-700' },
                { label: 'React 19', bgColor: 'bg-slate-50', textColor: 'text-slate-700' },
                { label: 'TypeScript', bgColor: 'bg-amber-50', textColor: 'text-amber-700' },
            ],
            supportUrl: 'http://localhost:3000',
        },
        sections: [
            {
                id: 'features',
                title: 'Features',
                icon: '🚀',
                content: [
                    '7 unique home page layouts',
                    'Product management with categories, reviews, specs',
                    'Full shopping cart & checkout flow',
                    'User authentication + password recovery',
                    'Responsive design, Dark Mode, and TypeScript throughout',
                    'API integration with React Query and Redux Toolkit',
                    'Animations (AOS & Framer Motion)',
                ],
            },
            {
                id: 'prerequisites',
                title: 'Prerequisites',
                icon: '📋',
                content: 'Install Node.js 18.0+ and a package manager: <code>npm</code>, <code>yarn</code>, <code>pnpm</code> or <code>bun</code>.',
            },
            {
                id: 'installation',
                title: 'Installation',
                icon: '🛠️',
                content: [
                    {
                        type: 'paragraph',
                        content: '<strong>Clone the repository</strong>',
                    },
                    {
                        type: 'code',
                        content: 'git clone <repository-url>\ncd fold-react',
                    },
                    {
                        type: 'paragraph',
                        content: '<strong>Install dependencies</strong>',
                    },
                    {
                        type: 'code',
                        content: 'npm install\n# or\nyarn install\n# or\npnpm install\n# or\nbun install',
                    },
                    {
                        type: 'paragraph',
                        content: '<strong>Start dev server</strong>',
                    },
                    {
                        type: 'code',
                        content: 'npm run dev\n# or\nyarn dev\n# or\npnpm dev\n# or\nbun dev',
                    },
                    {
                        type: 'paragraph',
                        content: '<strong>Open in browser</strong><p class="mt-2">Navigate to <a href="http://localhost:3000" class="text-indigo-600">http://localhost:3000</a></p>',
                    },
                ],
            },
            {
                id: 'build-deploy',
                title: 'Build & Deployment',
                icon: '🏗️',
                content: [
                    {
                        type: 'paragraph',
                        content: '<span class="font-medium">Development build</span>',
                    },
                    {
                        type: 'code',
                        content: 'npm run dev',
                    },
                    {
                        type: 'paragraph',
                        content: '<span class="font-medium mt-3">Production build</span>',
                    },
                    {
                        type: 'code',
                        content: 'npm run build\nnpm start',
                    },
                    {
                        type: 'paragraph',
                        content: '<span class="font-medium mt-3">Linting</span>',
                    },
                    {
                        type: 'code',
                        content: 'npm run lint',
                    },
                ],
            },
            {
                id: 'project-structure',
                title: 'Project Structure',
                icon: '📁',
                content: [
                    {
                        type: 'code',
                        content: `fold-react/
├── app/
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   ├── signin/
│   │   └── signup/
│   ├── about/
│   │   ├── about-2/
│   │   └── page.tsx
│   ├── api/
│   └── page.tsx
├── components/
├── constants/
├── data/
├── hooks/
├── lib/
├── public/
├── service/
├── store/
├── types/
├── utils/
├── views/
├── next.config.ts
├── package.json
└── README.md`,
                    },
                ],
            },
            {
                id: 'home-variants',
                title: 'Home Page Variants',
                icon: '🏠',
                content: [
                    {
                        type: 'html',
                        content: `<div class="grid md:grid-cols-2 gap-4 mt-3">
          <article>
            <h4 class="font-semibold">Home Page 1 (Main)</h4>
            <p class="text-slate-600">Route: <code>/</code> — Hero, collections, trending & popular products, discounts.</p>
          </article>
          <article>
            <h4 class="font-semibold">Home Page 2</h4>
            <p class="text-slate-600">Route: <code>/home/home-2</code> — Best categories, popular products, news articles.</p>
          </article>
          <article>
            <h4 class="font-semibold">Home Page 3</h4>
            <p class="text-slate-600">Deals, special products, shop by room.</p>
          </article>
          <article>
            <h4 class="font-semibold">Home Page 4–7</h4>
            <p class="text-slate-600">Variants including beauty, flash sales, collections, top sellers and testimonials.</p>
          </article>
        </div>`,
                    },
                ],
            },
            {
                id: 'ecommerce-features',
                title: 'E‑commerce Features',
                icon: '🛒',
                content: [
                    {
                        type: 'html',
                        content: `<div class="mt-3 space-y-3 text-slate-700">
          <p><strong>Product Management:</strong> multiple product cards, detail layouts, reviews, wishlist, search.</p>
          <p><strong>Shopping Cart:</strong> add/remove/update quantities, persistent cart, multi-step checkout.</p>
          <p><strong>User Auth:</strong> sign up/in, profiles, password recovery.</p>
        </div>`,
                    },
                ],
            },
            {
                id: 'design-system',
                title: 'Design System',
                icon: '🎨',
                content: 'Cards, forms, navigation, grid layouts, animations and Tailwind-based styling. Dark mode built-in with system preference and manual toggle.',
            },
            {
                id: 'tech-stack',
                title: 'Technology Stack',
                icon: '🔧',
                content: [
                    {
                        type: 'html',
                        content: `<div class="grid sm:grid-cols-2 gap-4 mt-3 text-slate-700">
          <div>
            <h4 class="font-medium">Frontend</h4>
            <ul class="list-disc list-inside mt-2">
              <li>Next.js 15 (App Router)</li>
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Tailwind CSS, Framer Motion, AOS</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium">State & Data</h4>
            <ul class="list-disc list-inside mt-2">
              <li>Redux Toolkit (+ Persist)</li>
              <li>React Query</li>
            </ul>
          </div>
        </div>`,
                    },
                ],
            },
            {
                id: 'responsive',
                title: 'Responsive & Dark Mode',
                icon: '📱',
                content: 'Breakpoints: mobile < 768px, tablet 768–1024px, desktop > 1024px. Dark mode respects system preference and stores user selection.',
            },
            {
                id: 'performance',
                title: 'Performance',
                icon: '🚀',
                content: [
                    'Next.js optimizations (code splitting, image optimization)',
                    'React Query caching & lazy loading',
                    'Bundle optimizations (tree shaking / minify)',
                ],
            },
            {
                id: 'api-structure',
                title: 'API Structure',
                icon: '📊',
                content: [
                    {
                        type: 'paragraph',
                        content: '<span class="text-slate-700 mt-2">Key endpoints</span>',
                    },
                    {
                        type: 'code',
                        content: '/api/home-1/... /api/home-2/... /api/home-3/... /api/product/... /api/post/...',
                    },
                    {
                        type: 'paragraph',
                        content: '<span class="mt-2 text-slate-700">Typical data flow: Next.js API routes → service layer → React Query → UI components</span>',
                    },
                ],
            },
            {
                id: 'security-seo',
                title: 'Security & SEO',
                icon: '🔒',
                content: [
                    'Type safety with TypeScript',
                    'Form validation with Yup',
                    'Proper error handling and secure API routes',
                    'SEO: meta tags, structured data, Core Web Vitals optimizations',
                ],
            },
            {
                id: 'license',
                title: 'License',
                icon: '📄',
                content: 'This project is licensed under the <strong>MIT License</strong>.',
            },
        ],
    },

]

export const getDocumentation = (projectId: number, stackName: string): ProjectStackDocumentation | undefined => {
    return documentationData.find(
        doc => doc.projectId === projectId && doc.stackName.toLowerCase() === stackName.toLowerCase()
    )
}
