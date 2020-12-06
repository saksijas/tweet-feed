const errorHandler = require('../_helpers/error-handler')
const parseService = require('../services/parse.service')
async function parse(req, res) {
    try {
        await parseService.loadTweets()
        return res.status(200)
    } catch (error) {
        return errorHandler(error, req, res)
    }
}

module.exports = {
    parse,
}
