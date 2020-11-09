// docs: https://www.11ty.io/docs/config/

const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: ['src/assets/css/*.scss', '!node_modules/**'],
  });

  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/script.js");

  const faviconFiles = [
    `src/*.png`,
    `src/browserconfig.xml`,
    `src/favicon.ico`,
    `src/site.webmanifest`
  ]

  faviconFiles.forEach((file) => eleventyConfig.addPassthroughCopy(file))
 
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};