import { ProjectStackDocumentation } from '@/types/documentation'

/**
 * ========================================
 * DOCUMENTATION TEMPLATE
 * ========================================
 * 
 * Copy this template to create documentation for any project/stack combination.
 * Replace all placeholders marked with <...> with your actual content.
 */

export const documentationTemplate: ProjectStackDocumentation = {
    // Replace with your project ID from data/projects.ts
    projectId: 1, // e.g., 1 for Ruby, 2 for Fold

    // Replace with your stack name (must match the stack name in projects.ts, lowercase)
    stackName: 'react', // Options: 'react', 'html', 'wordpress'

    overview: {
        // Title format: "ProjectName StackName" (e.g., "Fold React", "Ruby HTML")
        title: '<ProjectName> <StackName>',

        // Brief description (1-2 sentences)
        description: '<A modern, responsive platform built with [technologies].>',

        // Technology tags/badges - Add as many as needed
        tags: [
            { label: '<Technology 1>', bgColor: 'bg-indigo-50', textColor: 'text-indigo-700' },
            { label: '<Technology 2>', bgColor: 'bg-slate-50', textColor: 'text-slate-700' },
            { label: '<Technology 3>', bgColor: 'bg-amber-50', textColor: 'text-amber-700' },
            // Add more tags...
        ],

        // Optional: Support URL
        supportUrl: '<http://localhost:3000>',
    },

    sections: [
        // ========================================
        // FEATURES SECTION
        // ========================================
        {
            id: 'features',
            title: 'Features',
            icon: '🚀', // Optional emoji
            // Content Type 1: Array of strings (for bullet list)
            content: [
                '<Feature 1 description>',
                '<Feature 2 description>',
                '<Feature 3 description>',
                // Add more features...
            ],
        },

        // ========================================
        // PREREQUISITES SECTION
        // ========================================
        {
            id: 'prerequisites',
            title: 'Prerequisites',
            icon: '📋',
            // Content Type 2: Simple string
            content: 'Install <requirement 1> and <requirement 2>. For example: Install Node.js 18.0+ and a package manager: <code>npm</code>, <code>yarn</code>, <code>pnpm</code> or <code>bun</code>.',
        },

        // ========================================
        // INSTALLATION SECTION
        // ========================================
        {
            id: 'installation',
            title: 'Installation',
            icon: '🛠️',
            // Content Type 3: DocContentBlock array (for mixed content)
            content: [
                {
                    type: 'paragraph',
                    content: '<strong>Step 1 Title</strong>',
                },
                {
                    type: 'code',
                    content: '<command-1>\n<command-2>',
                },
                {
                    type: 'paragraph',
                    content: '<strong>Step 2 Title</strong>',
                },
                {
                    type: 'code',
                    content: '<command-3>\n# or\n<alternative-command>',
                },
                {
                    type: 'paragraph',
                    content: '<strong>Step 3 Title</strong><p class="mt-2">Navigate to <a href="<url>" class="text-indigo-600"><url></a></p>',
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
                    content: '<dev-command>',
                },
                {
                    type: 'paragraph',
                    content: '<span class="font-medium mt-3">Production build</span>',
                },
                {
                    type: 'code',
                    content: '<build-command>\n<start-command>',
                },
                {
                    type: 'paragraph',
                    content: '<span class="font-medium mt-3">Linting</span>',
                },
                {
                    type: 'code',
                    content: '<lint-command>',
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
                    content: `<project-name>/
├── <folder-1>/                    # Description
│   ├── <file-1>                   # Description
│   └── <file-2>                   # Description
├── <folder-2>/                    # Description
├── <config-file>
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
            <h4 class="font-semibold"><Variant Name></h4>
            <p class="text-slate-600">Route: <code><route-path></code> — <description>.</p>
          </article>
          <article>
            <h4 class="font-semibold"><Variant Name 2></h4>
            <p class="text-slate-600">Route: <code><route-path-2></code> — <description>.</p>
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
            <h4 class="font-medium"><Category Name></h4>
            <ul class="list-disc list-inside mt-2">
              <li><Technology 1></li>
              <li><Technology 2></li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium"><Category Name 2></h4>
            <ul class="list-disc list-inside mt-2">
              <li><Technology 3></li>
              <li><Technology 4></li>
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
                    content: '<span class="text-slate-700 mt-2">Key endpoints</span>',
                },
                {
                    type: 'code',
                    content: '/api/<endpoint-1>/... /api/<endpoint-2>/...',
                },
                {
                    type: 'paragraph',
                    content: '<span class="mt-2 text-slate-700">Typical data flow: <flow description></span>',
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
                '<Performance feature 1>',
                '<Performance feature 2>',
                '<Performance feature 3>',
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
                '<Security feature 1>',
                '<Security feature 2>',
                '<SEO feature 1>',
                '<SEO feature 2>',
            ],
        },

        // ========================================
        // LICENSE SECTION
        // ========================================
        {
            id: 'license',
            title: 'License',
            icon: '📄',
            content: 'This project is licensed under the <strong><License Name> License</strong>.',
        },

        // Add more sections as needed...
    ],
}

/**
 * ========================================
 * USAGE INSTRUCTIONS
 * ========================================
 * 
 * 1. Copy this template
 * 2. Replace all <...> placeholders with actual content
 * 3. Remove any sections you don't need
 * 4. Add custom sections if needed
 * 5. Add the completed object to documentationData array in documentation.ts
 * 
 * CONTENT TYPE EXAMPLES:
 * 
 * Simple Paragraph:
 *   content: 'Your paragraph text here'
 * 
 * List:
 *   content: ['Item 1', 'Item 2', 'Item 3']
 * 
 * Mixed Content (paragraphs + code):
 *   content: [
 *     { type: 'paragraph', content: 'Description' },
 *     { type: 'code', content: 'npm install' },
 *   ]
 * 
 * HTML Content:
 *   content: [
 *     {
 *       type: 'html',
 *       content: '<div class="grid gap-4"><article>...</article></div>',
 *     },
 *   ]
 * 
 * COMMON SECTION IDs:
 * - 'features' - Features list
 * - 'prerequisites' - Requirements
 * - 'installation' - Setup steps
 * - 'build-deploy' - Build commands
 * - 'project-structure' - File structure
 * - 'home-variants' - Page variants
 * - 'tech-stack' - Technologies used
 * - 'api-structure' - API docs
 * - 'customization' - Customization guide
 * - 'performance' - Performance notes
 * - 'security-seo' - Security & SEO
 * - 'license' - License info
 */

