const { GetConnectionQR } = require("./src/Models/WhatsappModels/GetConnectionQR.js")
const socketio = require("socket.io");

module.exports.init = function (server) {
    const io = socketio(server);
    io.on("connection", HandleConnectoin)
}

function HandleConnectoin(socket) {
    socket.on("getqrcode", data => {
        console.log("Gathering qr code...");
        SendQRCode(socket);
    });

    console.log("New client connected");
}

function SendQRCode(socket) {
    GetConnectionQR(function (qr) {
        console.log("Sending qr: ", qr);
        socket.emit("new-qr-code", { qr })
    })
}