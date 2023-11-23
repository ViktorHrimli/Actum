const URL = "../src/app";
const MAP = "../public";

const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "actum.fun",

  pagesDirectory: path.resolve(__dirname, URL),
  targetDirectory: path.resolve(__dirname, MAP),

  ignoredExtensions: ["js", "xml", "scss", "icon"],

  ignoredPaths: ["favicon", "not-found", "layout", "paymant-succes"],
  extraPaths: ["/"],

  pagesConfig: {
    "/": {
      priority: "1.0",
    },
  },
});
