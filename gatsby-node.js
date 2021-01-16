
exports.createPages = async ({ actions }) => {
    const { createRedirect } = actions
    createRedirect({
        fromPath: "/src/html.js",
        toPath: "/src/pages/",
        isPermanent: true,
        redirectInBrowser: true,
    });
};
