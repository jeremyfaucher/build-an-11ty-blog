const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  //Pass through files
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');

  //Date Clean up
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site",
    }
  }
  
};
