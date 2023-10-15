/** @type {import('next').NextConfig} */
const withSitemap = require("next-sitemap");

module.exports = withSitemap({
  i18n: {
    defaultLocale: "uk-UA",
    locales: ["uk-UA", "ru"],
    localeDetection: false,
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  sitemap: {
    // Укажи корректный URL своего сайта
    hostname: "http://localhost:3000",
  },
});
