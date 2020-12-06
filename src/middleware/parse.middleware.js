const errorHandler = require('../_helpers/error-handler')
const parseService = require('../services/parse.service')
async function parse(req, res) {
    try {
        userFile = 'user.txt'
        tweetFile = 'tweet.txt'
        await parseService.loadTweets(tweetFile, userFile)
        return res.status(200);
    } catch (error) {
        return errorHandler(error, req, res)
    }
}

module.exports = {
    parse,
}
