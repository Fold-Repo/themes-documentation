/**
 * Screenshot Generator Script
 * 
 * This script automatically generates screenshots from your live demo URLs
 * 
 * Usage:
 * 1. Install dependencies: npm install puppeteer
 * 2. Run: node scripts/generate-screenshots.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// ============ CONFIGURATION ============
const USE_CONFIG_FILE = true;
const CONFIG_FILE = 'fold-react';

let BASE_URL, PROJECT_ID, STACK_NAME, pages;

if (USE_CONFIG_FILE) {
    const config = require(`./configs/${CONFIG_FILE}.js`);
    BASE_URL = config.BASE_URL;
    PROJECT_ID = config.PROJECT_ID;
    STACK_NAME = config.STACK_NAME;
    pages = config.pages;
} else {
    alert('Please select a config file');
    process.exit(1);
}

const UPDATE_PROJECT_DATA = true; // Auto-update projects.ts
const OVERRIDE_EXISTING = true; // Delete old screenshots before generating
// =======================================

async function captureScreenshot(url, outputPath, fullPage = true) {
    console.log(`Capturing: ${url} (${fullPage ? 'Full Page' : 'Thumbnail'})`);

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();

        // Force light mode
        await page.emulateMediaFeatures([
            { name: 'prefers-color-scheme', value: 'light' }
        ]);

        // Set viewport
        await page.setViewport({
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1
        });

        // Navigate to page
        await page.goto(url, {
            waitUntil: 'networkidle2',
            timeout: 60000
        });

        // Wait for animations and lazy loaded content
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Scroll to bottom to trigger lazy loading
        if (fullPage) {
            await page.evaluate(async () => {
                await new Promise((resolve) => {
                    let totalHeight = 0;
                    const distance = 100;
                    const timer = setInterval(() => {
                        const scrollHeight = document.body.scrollHeight;
                        window.scrollBy(0, distance);
                        totalHeight += distance;

                        if (totalHeight >= scrollHeight) {
                            clearInterval(timer);
                            window.scrollTo(0, 0);
                            resolve();
                        }
                    }, 100);
                });
            });

            // Wait a bit after scrolling
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Take screenshot
        await page.screenshot({
            path: outputPath,
            fullPage: fullPage,
            type: 'png'
        });

        console.log(`Saved: ${outputPath}`);
    } catch (error) {
        console.error(`Error capturing ${url}:`, error.message);
    } finally {
        await browser.close();
    }
}

function generatePagesData(projectId, stackName, pages) {
    return pages.map((page, i) => {
        const filename = `page-${i + 1}`;
        const pageData = {
            id: i + 1,
            name: page.name,
            category: page.category,
            image: `/img/projects/${projectId}/${stackName}/${filename}.png`,
            url: `${BASE_URL}${page.url}`,
        };
        if (page.highlight) {
            pageData.isHighlight = true;
        }
        return pageData;
    });
}

function updatePagesFile(projectId, stackName, pagesData) {
    const pagesFilePath = path.join(__dirname, '..', 'data', 'pages.ts');

    try {
        console.log('\nUpdating pages.ts...');

        let content = fs.readFileSync(pagesFilePath, 'utf8');

        // Format pages data with proper indentation
        const pagesArray = pagesData.map(page => {
            const parts = [];
            parts.push('            {');
            parts.push(`                id: ${page.id},`);
            parts.push(`                name: '${page.name}',`);
            parts.push(`                category: '${page.category}',`);
            parts.push(`                image: '${page.image}',`);
            parts.push(`                url: '${page.url}'${page.isHighlight ? ',' : ''}`);
            if (page.isHighlight) {
                parts.push(`                isHighlight: true`);
            }
            parts.push('            }');
            return parts.join('\n');
        }).join(',\n');

        const pagesString = `[\n${pagesArray}\n        ]`;

        // Find the project and stack section
        const projectStackRegex = new RegExp(
            `(${projectId}:\\s*{[\\s\\S]*?${stackName.toLowerCase()}:\\s*)\\[[\\s\\S]*?\\](,?\\s*[\\w]*:\\s*\\[\\]|\\s*})`,
            'i'
        );

        if (projectStackRegex.test(content)) {
            content = content.replace(projectStackRegex, (match, before, after) => {
                return `${before}${pagesString}${after}`;
            });

            fs.writeFileSync(pagesFilePath, content, 'utf8');
            console.log('pages.ts updated successfully!');
            return true;
        } else {
            console.log('Could not find the project/stack section. Please add pages manually.');
            return false;
        }
    } catch (error) {
        console.error('Error updating pages.ts:', error.message);
        return false;
    }
}

async function generateAllScreenshots() {
    console.log('Starting screenshot generation...\n');
    console.log(`Config: ${USE_CONFIG_FILE ? CONFIG_FILE : 'Inline'}`);
    console.log(`Project: ${PROJECT_ID}, Stack: ${STACK_NAME}`);
    console.log(`Demo URL: ${BASE_URL}`);
    console.log(`Total Pages: ${pages.length}\n`);

    // Create output directories
    const outputDir = path.join(__dirname, '..', 'public', 'img', 'projects', String(PROJECT_ID), STACK_NAME);

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Clean old screenshots if OVERRIDE_EXISTING is true
    if (OVERRIDE_EXISTING && fs.existsSync(outputDir)) {
        console.log('Cleaning old screenshots...');
        const files = fs.readdirSync(outputDir);
        files.forEach(file => {
            if (file.endsWith('.png')) {
                fs.unlinkSync(path.join(outputDir, file));
            }
        });
        console.log(`Deleted ${files.length} old screenshots\n`);
    }

    // Generate screenshots (full page only)
    for (let i = 0; i < pages.length; i++) {
        const pageConfig = pages[i];
        const url = `${BASE_URL}${pageConfig.url}`;
        const filename = `page-${i + 1}`;

        // Full page screenshot only
        const fullPath = path.join(outputDir, `${filename}.png`);
        await captureScreenshot(url, fullPath, true);

        console.log('');
    }

    console.log('Screenshot generation complete!');
    console.log(`Output directory: ${outputDir}\n`);

    // Generate pages data
    const pagesData = generatePagesData(PROJECT_ID, STACK_NAME, pages);

    if (UPDATE_PROJECT_DATA) {
        // Automatically update pages.ts
        const updated = updatePagesFile(PROJECT_ID, STACK_NAME, pagesData);
        if (!updated) {
            console.log('\nManual copy (if auto-update failed):\n');
            console.log(`${STACK_NAME.toLowerCase()}: [`);
            pagesData.forEach(page => {
                console.log(`    ${JSON.stringify(page, null, 4).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'")},`);
            });
            console.log(']');
        }
    } else {
        // Just print for manual copy
        console.log('Copy this to your pages.ts:\n');
        console.log(`${STACK_NAME.toLowerCase()}: [`);
        pagesData.forEach(page => {
            console.log(`    ${JSON.stringify(page, null, 4).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'")},`);
        });
        console.log(']');
    }
}

// Run the script
generateAllScreenshots().catch(console.error);

