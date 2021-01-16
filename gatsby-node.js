
exports.createPages = async ({ actions }) => {
    const { createRedirect } = actions
    createRedirect({
        fromPath: "/index",
        toPath: "/src",
        isPermanent: true,
        redirectInBrowser: true,
    });
};
