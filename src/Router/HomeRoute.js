const router = require("express").Router();
const { RenderHomepage } = require("../Controllers/HomeControllers/RenderHomepage.js");

router.get("/", RenderHomepage);

module.exports = router;