const cors = require("cors")
const morgan = require("morgan")
const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cron = require("./cron/cron")

function dbInit() {
    mongoose.connect(process.env.DBURI || "mongodb://root:example@localhost:27017/koinxDB?authSource=admin&w=1", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("DATABASE CONNECTED"))
        .catch((err) => console.log(err))
}

const createApp = () => {
    dotenv.config()

    dbInit()

    cron.scheduleJobs()

    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(morgan("short"))
    app.use('/transaction', require("./routes/transaction"))
    app.use('/balance', require("./routes/balance"))

    return app
}


const runApp = () => {
    const PORT = process.env.PORT || 4000
    const HOST = process.env.HOST || "localhost"
    var app = createApp()
    app.listen(PORT, () => console.log(`\nServer running on http://${HOST}:${PORT}`));
}

runApp()