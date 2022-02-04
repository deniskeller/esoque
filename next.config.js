/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
    prependData: `@import "main.scss";`,
  },
  images: {
    deviceSizes: [
      640, 750, 768, 828, 1024, 1080, 1200, 1735, 1920, 2048, 3840, 7680,
    ],
  },
});
