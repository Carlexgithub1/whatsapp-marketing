const express = require("express");
const path = require("path");
const HomeRoutes = require("./HomeRoutes");
const WhatsappRoutes = require("./WhatsappRoutes");
const { Render404NotFoundPageError } = require("../Controllers/ErrorControllers/Render404NotFoundPageError.js")

function route(app) {
    app.use("/public", express.static(path.join(__dirname, "../Public")));

    app.use("/", HomeRoutes);
    app.use("/whatsapp", WhatsappRoutes);
    app.use(Render404NotFoundPageError)
}

module.exports = { route: route };