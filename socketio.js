const socketio = require("socket.io");

module.exports.init = function (server) {
    const io = socketio(server);

    io.on("connection", (socket) => {
        console.log("New client connected");
    })
}