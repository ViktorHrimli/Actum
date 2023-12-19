export default function robots() {
  return {
    rules: [
      {
        userAgent: "Bingbot",
        disallow: [
          "*search",
          "/commerce/digital-download/",
          "/api/",
          "/config",
          "/*_openstat",
          "/*from=adwords",
          "/*gclid=",
        ],
      },
      {
        userAgent: "Googlebot",
        disallow: [
          "*search",
          "/commerce/digital-download/",
          "/api/",
          "/config",
          "/*_openstat",
          "/*from=adwords",
          "/*gclid=",
        ],
      },
      {
        userAgent: "*",
        disallow: [
          "*search",
          "/commerce/digital-download/",
          "/api/",
          "/config",
          "/*_openstat",
          "/*from=adwords",
          "/*gclid=",
        ],
      },
    ],
    sitemap: "https://www.actum.com.ua/sitemap.xml",
  };
}
