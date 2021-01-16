
exports.createPages = async ({ actions }) => {
    const { createRedirect } = actions
    createRedirect({
        fromPath: "/index/",
        toPath: "/src/index.js",
        isPermanent: true,
        redirectInBrowser: true,
    });
};
