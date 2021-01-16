
exports.createPages = async ({ actions }) => {
    const { createRedirect } = actions
    createRedirect({
        fromPath: "/index",
        toPath: "/src/html.js",
        isPermanent: true,
        redirectInBrowser: true,
    });
};
