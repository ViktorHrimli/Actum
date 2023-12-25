import { getStaticPage } from "@/shared/services/api/api";
import fs from "fs";
import path from "path";

const { API_ROBOTS, QUERY_ROBOTS } = process.env;

export default async function sitemap() {
  const {
    data: {
      attributes: { BASE_URL, obj },
    },
  } = await getStaticPage(API_ROBOTS, QUERY_ROBOTS);

  const sitemapData = obj.map((item) => {
    return {
      url: BASE_URL + item.url,
      lastModified: new Date().toISOString(),
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    };
  });

  const sitemapXml = generateSitemapXml(sitemapData);

  const publicFolderPath = path.join(process.cwd(), "public");
  const sitemapFilePath = path.join(publicFolderPath, "sitemap.xml");

  fs.writeFileSync(sitemapFilePath, sitemapXml);
}

function generateSitemapXml(data) {
  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${data
    .map(
      (item) => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join("\n")}
</urlset>`;

  return xmlString;
}
