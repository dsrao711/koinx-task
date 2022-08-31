var axios = require("axios");
var { Transaction } = require("../models/transaction")


exports.getTransactions = async(req, res) => {
    // If no address entered by the user
    if (!req.query.address) {
        return res.status(400).json({
            msg: "Bad Request",
            desc: "Wallet address missing!"
        })
    }

    // Set the request body 
    var config = {
        url: process.env.ETHER_SCAN_URL || "https://api.etherscan.io/api",
        params: {
            module: "account",
            action: "txlist",
            address: req.query.address,
            sort: "asc",
            apikey: process.env.API_KEY || ""
        }
    }

    // Fetch data 
    try {
        var response = await axios(config)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Server Error",
            desc: error
        })
    }

    var data = await response.data
    if (response.status === "0") {
        return res.status(500).json({
            msg: "Server Error",
            desc: data.message
        })
    }

    await Transaction.insertMany(data.result)

    res.json(data.result)
}