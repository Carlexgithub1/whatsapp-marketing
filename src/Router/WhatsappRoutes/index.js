const router = require("express").Router();
const ConnectionRoute = require("./ConnectionRoute.js");

router.use("/", ConnectionRoute);

module.exports = router;