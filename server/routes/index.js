const router = require('express').Router();

// ===== These routes are being prepended by api/ in server.js

router.use(require("../config/auth"));

router.use("/posts", require("./posts"));
router.use("/auth", require("./auth"));
router.use("/users", require("./users"));

module.exports = router;