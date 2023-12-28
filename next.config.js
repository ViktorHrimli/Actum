/** @type {import('next').NextConfig} */

const fetch = require("isomorphic-unfetch");

const nextConfig = {
  i18n: {
    defaultLocale: "uk",
    locales: ["uk", "ru"],
    localeDetection: false,
  },

  async redirects() {
    const res = await fetch(
      `https://strapi-actum.space/api/redirects-301?populate=*`
    );

    const data = await res.json();

    const {
      data: {
        attributes: { redirects },
      },
    } = data;

    return redirects.map((item) => {
      return {
        source: item.oldPath,
        destination: item.newPath,
        permanent: true,
      };
    });
  },

  async headers() {
    return [
      {
        // matching all API routes

        source: "/",
        headers: [
          { key: "Set-Cookie", value: "SameSite=None; Secure" },
          { key: "Access-Control-Allow-Credentials", value: "false" },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },

  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cdn4.cdn-telegram.org",
      },
      {
        protocol: "https",
        hostname: "google.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
        permanent: true,
        has: [
          {
            type: "query",
            key: "_rsc",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
