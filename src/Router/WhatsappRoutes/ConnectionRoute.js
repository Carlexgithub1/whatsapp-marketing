const router = require("express").Router();
const { RenderWhatsappConnectionPage } = require("../../Controllers/WhatsappControllers/RenderWhatsappConnectionPage.js");
const { GetQRCode } = require("../../Controllers/WhatsappControllers/GetQRCode.js")

router.get("/", RenderWhatsappConnectionPage);
router.get("/getqrcode", GetQRCode)

module.exports = router;