module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ["_site/**/*.css"],
  });

  eleventyConfig.addPassthroughCopy({ "src/assets/js": "/assets/js" });

  return {
    dir: {
      input: "src",
    },
  };
};
