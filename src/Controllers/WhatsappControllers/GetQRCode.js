const { GetConnectionQR } = require("../../Models/WhatsappModels/GetConnectionQR.js")

module.exports.GetQRCode = function (req, res) {
    GetConnectionQR(qr => {
        console.log("QR: ", qr);

        res.json({ qr });
    })
}