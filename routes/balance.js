const express = require("express");
const balanceController = require("../controllers/balance")

var router = express.Router()

router.get("", balanceController.getBalance)

module.exports = router;
