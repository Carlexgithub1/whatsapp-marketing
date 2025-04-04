export function RenderHomepage(req, res) {

    const data = {
        pagename: "homepage",
        title: "Welcome"
    }
    
    res.render("index", data)
    
}