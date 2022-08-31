const mongoose = require("mongoose")

// Ethereum To INR Table Schema
const ethToInrSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    price: Number
})

exports.EthToInr = mongoose.model("EthToInr", ethToInrSchema)

