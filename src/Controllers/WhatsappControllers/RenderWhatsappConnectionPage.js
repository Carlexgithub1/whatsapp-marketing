export function RenderWhatsappConnectionPage(req, res) {
    const data = {
        pagename: "WhatsappConnectionPage",
        title: "Connect Whatsapp account"
    }
    res.render("index", data);
}