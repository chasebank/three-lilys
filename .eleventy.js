// docs: https://www.11ty.io/docs/config/

const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: ['src/assets/css/*.scss', '!node_modules/**'],
  });

  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/script.js");
 
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};