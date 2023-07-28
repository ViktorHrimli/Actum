/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "uk-UA",
    locales: ["uk-UA", "ru-RU"],
    localeDetection: false,
  },

  images: {
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
