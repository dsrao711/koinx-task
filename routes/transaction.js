const express = require("express");
const transactionController = require("../controllers/transactions")

var router = express.Router()

router.get("", transactionController.getTransactions)


module.exports = router;
