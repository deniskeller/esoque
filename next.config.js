/** @type {import('next').NextConfig} */

const path = require("path");
const withImages = require("next-images");

module.exports = withImages({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/scss")],
    prependData: `@import "main.scss";`,
  },
  env: {
    API_URL: process.env.API_URL,
    IMG_STORAGE: process.env.IMG_STORAGE,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    DEV: process.env.DEV,
    REACT_APP_GOOGLE_MAPS_API_KEY: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  },
  images: {
    domains: ["esoque.labado.ru"],
    deviceSizes: [
      640, 750, 768, 828, 1024, 1080, 1200, 1735, 1920, 2048, 3840, 7680,
    ],
  },
});
