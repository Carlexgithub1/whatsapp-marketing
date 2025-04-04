const express = require("express");
const path = require("path");
const HomeRoute = require("./HomeRoute.js");
const WhatsappRoute = require("./WhatsappRoute.js");

function route(app) {
    app.use("/public", express.static(path.join(__dirname, "../Public")));

    app.use("/", HomeRoute);
    app.use("/whatsapp", WhatsappRoute);
}

module.exports = { route: route };