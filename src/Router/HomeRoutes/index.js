const router = require("express").Router();
const HomepageRoute = require("./HomepageRoute.js");

router.use("/", HomepageRoute);

module.exports = router;