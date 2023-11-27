export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: "https://strapi-actum.space/api/sitemap/index.xml",
  };
}
