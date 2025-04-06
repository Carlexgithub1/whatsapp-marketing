const qrcode = require("qrcode-terminal");
const { GetConnectionQR } = require("../../Models/WhatsappModels/GetConnectionQR.js")

module.exports.RenderWhatsappConnectionPage = function RenderWhatsappConnectionPage(req, res) {
    const data = {
        pagename: "WhatsappConnectionPage",
        title: "Connect Whatsapp account"
    }

    res.render("index", data);
    // GetConnectionQR(function (qr) {
    //     console.log("QR received: ", qr);
    //     qrcode.generate(qr, { small: true });
    //     res.json({ qr });
    // })
}