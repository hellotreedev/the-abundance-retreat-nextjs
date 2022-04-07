import React from 'react';
import * as fs from 'fs';
import axios from 'axios';

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'http://localhost:3000';

    const products = await axios.get("/abundance-therapies");
    const staticPaths = fs
        .readdirSync("pages")
        .filter((staticPage) => {
            return ![
                "api.jsx",
                "_app.jsx",
                "_document.jsx",
                "404.jsx",
                "sitemap.xml.jsx",
                "index.jsx",
            ].includes(staticPage);
        })
        .map((staticPagePath) => {
            return `${BASE_URL}/${staticPagePath}`;
        });
    
    const homePath= `${BASE_URL}`;

    const dynamicPaths = products.data.page_items.all_products_list.map(singleProduct => {
        return `${BASE_URL}/abundance-therapies/${singleProduct.slug}`
    })

    const dynamicPaths2 = products.data.page_items.all_products_list.map(singleProduct => {
        return `${BASE_URL}/abundance-therapies/${singleProduct.slug}/book-now`
    })

    const allPaths = [ homePath , ...staticPaths, ...dynamicPaths, ...dynamicPaths2];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
            .map((url) => {
                return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>1.0</priority>
            </url>
          `;
            })
            .join("")}
    </urlset>
`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;