var { Transaction } = require("../models/transaction")
const { fetchEtherPrice } = require("../utils/fetchEtherPrice")


exports.getBalance = async(req, res) => {

    if (!req.query.address) {
        return res.status(400).json({
            msg: "Bad Request",
            desc: "Wallet address missing!"
        })
    }

    try {
        var transactions = await Transaction.find({
                $or: [
                    { "to": req.query.address },
                    { "from": req.query.address }
                ]
            })
            // Fetch Ether price 
        var currEtherPrice = await fetchEtherPrice()

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Server Error",
            desc: "There was a problem fetching the results"
        })
    }

    const calculateBalance = (balance, curr) => {
        if (curr.from === req.query.address) {
            return balance + Number(curr.value)
        } else {
            return balance - Number(curr.value)
        }
    }

    var balance = transactions.reduce(calculateBalance, 0)

    return res.json({
        balance: balance,
        currentEtherPrice: currEtherPrice
    })

}