/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");
const withImages = require("next-images");

module.exports = withImages({
  reactStrictMode: true,
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/scss")],
    prependData: `@import "main.scss";`,
  },
});
