import { Footer, HeroBanner } from '@/components'
import { WhyChoose, BrowseTheme } from '@/section'
import { Projects, LayoutFeatures, Gallery, ReadyToBuild } from './sections'


const HomeView = () => {
  return (
    <>

      <section id="hero">
        <HeroBanner />
      </section>

      <section id="features">
        <WhyChoose />
      </section>

      <section id="templates">
        <BrowseTheme />
      </section>

      <section id="templates">
        <Projects />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="layout-features">
        <LayoutFeatures />
      </section>

      <section id="ready-to-build">
        <ReadyToBuild />
      </section>

      <Footer />

  {/* <div className="min-h-screen flex">
    <aside className="w-72 border-r border-slate-200 p-6 hidden md:block bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Fold React Docs</h2>
      <nav className="text-sm toc space-y-2">
        <a href="#overview" className="block py-1 text-slate-700 hover:text-slate-900">Overview</a>
        <a href="#features" className="block py-1">Features</a>
        <a href="#prerequisites" className="block py-1">Prerequisites</a>
        <a href="#installation" className="block py-1">Installation</a>
        <a href="#build-deploy" className="block py-1">Build & Deployment</a>
        <a href="#project-structure" className="block py-1">Project Structure</a>
        <a href="#home-variants" className="block py-1">Home Page Variants</a>
        <a href="#ecommerce-features" className="block py-1">E‑commerce Features</a>
        <a href="#design-system" className="block py-1">Design System</a>
        <a href="#tech-stack" className="block py-1">Technology Stack</a>
        <a href="#api-structure" className="block py-1">API</a>
        <a href="#security-seo" className="block py-1">Security & SEO</a>
        <a href="#license" className="block py-1">License</a>
      </nav>
      <div className="mt-6 text-xs text-slate-500">Built with ❤️ using Next.js, React, and TypeScript</div>
    </aside>

    <main className="flex-1 p-6 max-w-6xl mx-auto">
      <header id="overview" className="mb-6">
        <h1 className="text-3xl font-extrabold">Fold React</h1>
        <p className="mt-2 text-slate-600">A modern, responsive e‑commerce platform built with Next.js 15, React 19, and TypeScript.</p>
        <div className="mt-4 inline-flex gap-3">
          <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm">Next.js 15</span>
          <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-700 text-sm">React 19</span>
          <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm">TypeScript</span>
        </div>
      </header>

      <section id="features" className="mb-8">
        <h2 className="text-2xl font-semibold">🚀 Features</h2>
        <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
          <li>7 unique home page layouts</li>
          <li>Product management with categories, reviews, specs</li>
          <li>Full shopping cart & checkout flow</li>
          <li>User authentication + password recovery</li>
          <li>Responsive design, Dark Mode, and TypeScript throughout</li>
          <li>API integration with React Query and Redux Toolkit</li>
          <li>Animations (AOS & Framer Motion)</li>
        </ul>
      </section>

      <section id="prerequisites" className="mb-8">
        <h3 className="text-xl font-semibold">📋 Prerequisites</h3>
        <p className="mt-2 text-slate-600">Install Node.js 18.0+ and a package manager: <code>npm</code>, <code>yarn</code>, <code>pnpm</code> or <code>bun</code>.</p>
      </section>

      <section id="installation" className="mb-8">
        <h3 className="text-xl font-semibold">🛠️ Installation</h3>
        <div className="mt-3">
          <ol className="list-decimal list-inside space-y-3 text-slate-700">
            <li>
              <strong>Clone the repository</strong>
              <pre><code>git clone &lt;repository-url&gt;
cd fold-react</code></pre>
            </li>
            <li>
              <strong>Install dependencies</strong>
              <pre><code>npm install
# or
yarn install
# or
pnpm install
# or
bun install</code></pre>
            </li>
            <li>
              <strong>Start dev server</strong>
              <pre><code>npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev</code></pre>
            </li>
            <li>
              <strong>Open in browser</strong>
              <p className="mt-2">Navigate to <a href="http://localhost:3000" className="text-indigo-600">http://localhost:3000</a></p>
            </li>
          </ol>
        </div>
      </section>

      <section id="build-deploy" className="mb-8">
        <h3 className="text-xl font-semibold">🏗️ Build & Deployment</h3>
        <div className="mt-3">
          <p className="font-medium">Development build</p>
          <pre><code>npm run dev</code></pre>

          <p className="font-medium mt-3">Production build</p>
          <pre><code>npm run build
npm start</code></pre>

          <p className="font-medium mt-3">Linting</p>
          <pre><code>npm run lint</code></pre>
        </div>
      </section>

      <section id="project-structure" className="mb-8">
        <h3 className="text-xl font-semibold">📁 Project Structure</h3>
        <pre><code>fold-react/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── layout.tsx            # Auth layout
│   │   ├── signin/               # Sign in page
│   │   └── signup/               # Sign up page
│   ├── about/                    # About pages
│   │   ├── about-2/              # About page variant 2
│   │   └── page.tsx              # Main about page
│   ├── api/                      # API routes (home-1..home-7, post, product)
│   └── page.tsx                  # Root page
├── components/                   # Reusable components (cards, carousel, cart...)
├── constants/                    # Application constants
├── data/                         # Static dataset for home pages, products, posts
├── hooks/                        # Custom React hooks
├── lib/                          # Utility libraries (axios config, helpers)
├── public/                       # Static assets (icons, images)
├── service/                      # API service layer
├── store/                        # Redux store & slices
├── types/                        # TypeScript types
├── utils/                        # Utility helpers
├── views/                        # Page view components
├── next.config.ts
├── package.json
└── README.md</code></pre>
      </section>

      <section id="home-variants" className="mb-8">
        <h3 className="text-xl font-semibold">🏠 Home Page Variants</h3>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <article>
            <h4 className="font-semibold">Home Page 1 (Main)</h4>
            <p className="text-slate-600">Route: <code>/</code> — Hero, collections, trending & popular products, discounts.</p>
          </article>
          <article>
            <h4 className="font-semibold">Home Page 2</h4>
            <p className="text-slate-600">Route: <code>/home/home-2</code> — Best categories, popular products, news articles.</p>
          </article>
          <article>
            <h4 className="font-semibold">Home Page 3</h4>
            <p className="text-slate-600">Deals, special products, shop by room.</p>
          </article>
          <article>
            <h4 className="font-semibold">Home Page 4–7</h4>
            <p className="text-slate-600">Variants including beauty, flash sales, collections, top sellers and testimonials.</p>
          </article>
        </div>
      </section>

      <section id="ecommerce-features" className="mb-8">
        <h3 className="text-xl font-semibold">🛒 E‑commerce Features</h3>
        <div className="mt-3 space-y-3 text-slate-700">
          <p><strong>Product Management:</strong> multiple product cards, detail layouts, reviews, wishlist, search.</p>
          <p><strong>Shopping Cart:</strong> add/remove/update quantities, persistent cart, multi-step checkout.</p>
          <p><strong>User Auth:</strong> sign up/in, profiles, password recovery.</p>
        </div>
      </section>

      <section id="design-system" className="mb-8">
        <h3 className="text-xl font-semibold">🎨 Design System</h3>
        <p className="mt-2 text-slate-700">Cards, forms, navigation, grid layouts, animations and Tailwind-based styling. Dark mode built-in with system preference and manual toggle.</p>
      </section>

      <section id="tech-stack" className="mb-8">
        <h3 className="text-xl font-semibold">🔧 Technology Stack</h3>
        <div className="grid sm:grid-cols-2 gap-4 mt-3 text-slate-700">
          <div>
            <h4 className="font-medium">Frontend</h4>
            <ul className="list-disc list-inside mt-2">
              <li>Next.js 15 (App Router)</li>
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Tailwind CSS, Framer Motion, AOS</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">State & Data</h4>
            <ul className="list-disc list-inside mt-2">
              <li>Redux Toolkit (+ Persist)</li>
              <li>React Query</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="responsive" className="mb-8">
        <h3 className="text-xl font-semibold">📱 Responsive & Dark Mode</h3>
        <p className="mt-2 text-slate-700">Breakpoints: mobile &lt; 768px, tablet 768–1024px, desktop &gt; 1024px. Dark mode respects system preference and stores user selection.</p>
      </section>

      <section id="performance" className="mb-8">
        <h3 className="text-xl font-semibold">🚀 Performance</h3>
        <ul className="list-disc list-inside mt-2 text-slate-700">
          <li>Next.js optimizations (code splitting, image optimization)</li>
          <li>React Query caching & lazy loading</li>
          <li>Bundle optimizations (tree shaking / minify)</li>
        </ul>
      </section>

      <section id="api-structure" className="mb-8">
        <h3 className="text-xl font-semibold">📊 API Structure</h3>
        <p className="text-slate-700 mt-2">Key endpoints</p>
        <pre><code>/api/home-1/... /api/home-2/... /api/home-3/... /api/product/... /api/post/...</code></pre>
        <p className="mt-2 text-slate-700">Typical data flow: Next.js API routes → service layer → React Query → UI components</p>
      </section>

      <section id="security-seo" className="mb-8">
        <h3 className="text-xl font-semibold">🔒 Security & 📈 SEO</h3>
        <ul className="list-disc list-inside mt-2 text-slate-700">
          <li>Type safety with TypeScript</li>
          <li>Form validation with Yup</li>
          <li>Proper error handling and secure API routes</li>
          <li>SEO: meta tags, structured data, Core Web Vitals optimizations</li>
        </ul>
      </section>

      <section id="license" className="mb-12">
        <h3 className="text-xl font-semibold">📄 License</h3>
        <p className="mt-2 text-slate-700">This project is licensed under the <strong>MIT License</strong>.</p>
      </section>

      <footer className="py-6 border-t border-slate-200 text-sm text-slate-600">
        Built with ❤️ using Next.js, React, and TypeScript — <span className="font-medium">Fold React</span>
      </footer>
    </main>
  </div> */}

    </>
  )
}

export default HomeView