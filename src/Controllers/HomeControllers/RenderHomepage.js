module.exports.RenderHomepage = function RenderHomepage(req, res) {

    const data = {
        pagename: "Homepage",
        title: "Welcome"
    }

    res.render("index", data)

}