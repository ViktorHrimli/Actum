export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: "http://actum.fun/sitemap.xml",
  };
}
