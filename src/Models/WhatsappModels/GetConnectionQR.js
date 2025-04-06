const { Client } = require("whatsapp-web.js");

module.exports.GetConnectionQR = function GetConnectionQR(next) {

    const client = new Client();

    client.on("qr", next);

    client.once("ready", function () {
        console.log("Client is ready");
    })

    client.initialize();
}

function GetQrCode(qr) {
    console.log("QR received : ", qr);
}