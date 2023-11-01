import * as fs from "fs";

export default function Sitemap() {
  return null;
}

Sitemap.getInitialProps = async ({ res }) => {
  const BASE_URL = "http://localhost:3000";

  const excludedStaticPages = [
    "api",
    "_app.js",
    "_document.js",
    "404.js",
    "sitemap.xml.js",
  ];

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => !excludedStaticPages.includes(staticPage))
    .map((staticPagePath) => `${BASE_URL}/${staticPagePath.split(".")[0]}`);

  function getAllProducts() {
    return [
      {
        id: "1",
        name: "MacBook Pro",
        price: 129900,
      },
      {
        id: "2",
        name: "iPhone 13 Mini",
        price: 79490,
      },
      {
        id: "3",
        name: "iPhone 13 Pro",
        price: 99990,
      },
    ];
  }

  const products = getAllProducts();
  const dynamicPaths = products.map(
    (singleProduct) => `${BASE_URL}/product/${singleProduct.id}`
  );

  const allPaths = [...staticPaths, ...dynamicPaths];
  console.log(allPaths);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map(
          (url) =>
            `<url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>`
        )
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {};
};
