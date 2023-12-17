// import { getStaticPage } from "@/shared/services/api/api";

// const { API_ROBOTS, QUERY_ROBOTS } = process.env;

// export default async function sitemap() {
//   const {
//     data: {
//       attributes: { BASE_URL, obj },
//     },
//   } = await getStaticPage(API_ROBOTS, QUERY_ROBOTS);

//   // if (!obj) {
//   //   console.log(obj);
//   //   return ""; // Вернуть пустую строку или другое значение, если объект пуст
//   // }

//   const sitemapEntries = await Promise.all(
//     obj.map(async (item) => {
//       // Предполагая, что getStaticPage также асинхронен и возвращает корректные данные
//       return {
//         loc: `${BASE_URL}${item.url}`,
//         lastmod: new Date().toISOString(),
//         changefreq: item.changeFrequency,
//         priority: item.priority,
//       };
//     })
//   );

//   const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${sitemapEntries
//         .map(
//           (entry) => `
//         <url>
//           <loc>${entry.loc}</loc>
//           <lastmod>${entry.lastmod}</lastmod>
//           <changefreq>${entry.changefreq}</changefreq>
//           <priority>${entry.priority}</priority>
//         </url>`
//         )
//         .join("\n")}
//     </urlset>`;
//   console.log(sitemapXML);

//   return sitemapXML;
// }

import { getStaticPage } from "@/shared/services/api/api";
const { API_ROBOTS, QUERY_ROBOTS } = process.env;

export default async function sitemap() {
  const {
    data: {
      attributes: { BASE_URL, obj },
    },
  } = await getStaticPage(API_ROBOTS, QUERY_ROBOTS);

  return obj.map((item) => {
    return {
      url: BASE_URL + item.url,
      changeFreq: String(item.changeFrequency),
      lastModified: new Date().toISOString(),
      priority: String(item.priority),
    };
  });
}
