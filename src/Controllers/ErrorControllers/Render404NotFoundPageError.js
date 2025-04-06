module.exports.Render404NotFoundPageError = function (req, res) {
    const data = {
        pagename: "PageNotFound",
        title: "Page not found"
    }
    res.status(404).render("index", data);
}