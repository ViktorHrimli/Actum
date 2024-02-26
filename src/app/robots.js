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
          "/offer.pdf",
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
          "/offer.pdf",
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
          "/offer.pdf",
        ],
      },
    ],
    sitemap: "https://www.actum.com.ua/sitemap.xml",
  };
}
