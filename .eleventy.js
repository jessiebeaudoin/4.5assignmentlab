module.exports = function(eleventyConfig) {
  return {
    templateFormats: ["liquid", "md", "html"], // Specify the template formats you're using
    dir: {
      input: ".",          // Input directory
      includes: "_includes", // Includes directory
      data: "_data",        // Data directory
      output: "_site"       // Output directory
    }
  };
};
