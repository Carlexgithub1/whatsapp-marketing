const router = require("express").Router();
const { RenderWhatsappConnectionPage } = require("../../Controllers/WhatsappControllers/RenderWhatsappConnectionPage.js")

router.get("/", RenderWhatsappConnectionPage);

module.exports = router;