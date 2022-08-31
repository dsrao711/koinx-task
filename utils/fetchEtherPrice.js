var axios = require("axios")

exports.fetchEtherPrice = async () => {
    const ethInrPriceUrl = process.env.ETH_TO_INR_URL || "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
    try {
        var response = await axios(ethInrPriceUrl)
        return response.data.ethereum.inr
    } catch (error) {
        console.log(error)
    }
}
