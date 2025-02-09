module.exports = function(eleventyConfig) {
  return {
    templateFormats: ["liquid", "md", "html"],
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
