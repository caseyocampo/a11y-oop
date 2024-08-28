module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ["_site/**/*.css"],
  });

  eleventyConfig.addPassthroughCopy({ "src/assets/js": "/assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/_public": "/" });
  eleventyConfig.addGlobalData("PROJECT_NAME", "A11y-oop");

  return {
    dir: {
      input: "src",
    },
  };
};
