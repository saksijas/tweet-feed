const errorHandler = require('../helpers/error-handler')
const parseService = require('../services/parse.service')
const userService = require('../services/user.service')
async function parse(req, res) {
    try {
        const { users } = await parseService.loadTweets()
        // Calling method for bulk insert into user table
        await userService.importUsers(users)
        return res.status(200).json(users)
    } catch (error) {
        return errorHandler(error, req, res)
    }
}

module.exports = {
    parse,
}
