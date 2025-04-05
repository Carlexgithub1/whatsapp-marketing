const express = require("express");
const path = require("path");
const HomeRoutes = require("./HomeRoutes");
const WhatsappRoutes = require("./WhatsappRoutes");

function route(app) {
    app.use("/public", express.static(path.join(__dirname, "../Public")));

    app.use("/", HomeRoutes);
    app.use("/whatsapp", WhatsappRoutes);
}

module.exports = { route: route };