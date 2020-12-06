const errorHandler = require('../_helpers/error-handler')
const userService = require('../services/user.service')

async function getUser(req, res) {
    try {
        const result = await userService.getUser(req.params.username)
        return res.status(200).json(result)
    } catch (error) {
        return errorHandler(error, req, res)
    }
}
async function getUsers(req, res) {
    try {
        const users = await userService.getUser()
        return res.status(200).json(users)
    } catch (error) {
        return errorHandler(error, req, res)
    }
}

module.exports = {
    getUser,
    getUsers,
}
