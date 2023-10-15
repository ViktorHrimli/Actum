// pages/dynamic-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { getAllDynamicPages } from "../app"; // Замени на свой способ получения динамических страниц

export default async (req, res) => {
  const smStream = new SitemapStream({ hostname: "http://localhost:3000" });

  // Получи список URL для динамических страниц
  const dynamicPages = await getAllDynamicPages();

  dynamicPages.forEach((page) => {
    smStream.write({
      url: `/dynamic/${page.slug}`,
      changefreq: "daily", // Частота обновления
      priority: 0.7, // Приоритет
    });
  });

  smStream.end();

  const sitemap = await streamToPromise(smStream).then((data) =>
    data.toString()
  );

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
};
