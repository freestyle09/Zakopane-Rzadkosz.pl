module.exports = {
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/contact": { page: "/contact" },
    };
    return paths;
  },
};
