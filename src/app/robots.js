export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    // sitemap: "http://localhost:3000/sitemap.xml",
  };
}
