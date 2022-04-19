module.exports = function(eleventyConfig) {

  //Pass through files
  eleventyConfig.addPassthroughCopy('./src/style.css');

  return {
  	dir: {
  		input: "src"
  	}
  }
  
};