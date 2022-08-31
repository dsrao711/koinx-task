const cron = require("node-cron")
var { EthToInr } = require("../models/ethtoinr")
var { fetchEtherPrice } = require("../utils/fetchEtherPrice")


// All tasks to be scheduled are present here

exports.scheduleJobs = () => {
    cron.schedule('*/${process.env.CRON_TASK_INTERVAL} * * * *', async() => {
        var price = await fetchEtherPrice()
        await EthToInr({ price: price }).save()
    });
}