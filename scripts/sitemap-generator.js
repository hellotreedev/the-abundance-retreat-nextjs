const axios = require('axios');

const fs = require('fs')

function addPage(page) {
  const path = page.replace('pages', '').replace('.jsx', '').replace('.mdx', '')
  const route = path === '/index' ? '' : path
  return `  <url>
    <loc>${`https://www.theabundanceretreat.com/${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`
}

async function generateSitemap() {
    // excludes Nextjs files and API routes.
    const pages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
        return ![
            "api.jsx",
            "_app.jsx",
            "_document.jsx",
            "404.jsx",
            "sitemap.xml.jsx",
            "index.jsx"
        ].includes(staticPage);
    })
    .map((staticPagePath) => {
        return `${staticPagePath}`;
    });

    const home = ""
    const products = await axios.get("https://admin.theabundanceretreat.com/api/abundance-therapies");
    const dynamicPaths = products.data.page_items.all_products_list.map(singleProduct => {
        return `abundance-therapies/${singleProduct.slug}`
    });

    const dynamicPaths2 = products.data.page_items.all_products_list.map(singleProduct => {
        return `abundance-therapies/${singleProduct.slug}/book-now`
    })

    const allPaths = [home, ...pages, ...dynamicPaths, ...dynamicPaths2];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths.map(addPage).join('\n')}
  </urlset>`
    fs.writeFileSync('public/sitemap.xml', sitemap)
  }
  generateSitemap()