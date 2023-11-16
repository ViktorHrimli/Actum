const URL = "../src/app";

const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "localhost:3000",

  pagesDirectory: path.resolve(__dirname, URL),
  targetDirectory: path.resolve(__dirname, URL),

  ignoredExtensions: ["js", "xml", "scss", "icon"],

  ignoredPaths: ["favicon", "not-found", "layout"],
  extraPaths: ["/"],

  pagesConfig: {
    "/": {
      priority: "1.0",
    },
  },
});
