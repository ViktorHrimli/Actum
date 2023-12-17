export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: "https://actum.fun/sitemap.xml",
  };
}
